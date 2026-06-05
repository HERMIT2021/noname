#Requires -Version 7.0

[CmdletBinding()]
param(
	[string]$SourceRoot,
	[string]$MobileDistRoot,
	[string]$Remote = "origin",
	[string]$RemoteBranch = "mobile-dist",
	[string]$LocalBranch = "mobile-dist-split",
	[string]$CommitMessage,
	[switch]$SkipBuild,
	[switch]$SkipPush,
	[switch]$Force,
	[switch]$DryRun
)

$ErrorActionPreference = "Stop"

function Write-Step {
	param([string]$Message)
	Write-Host ""
	Write-Host "==> $Message" -ForegroundColor Cyan
}

function Invoke-External {
	param(
		[Parameter(Mandatory = $true)][string]$FilePath,
		[Parameter(Mandatory = $true)][string[]]$Arguments,
		[Parameter(Mandatory = $true)][string]$WorkingDirectory
	)

	Write-Host ("$FilePath " + ($Arguments -join " ")) -ForegroundColor DarkGray
	Push-Location -LiteralPath $WorkingDirectory
	try {
		& $FilePath @Arguments
		if ($LASTEXITCODE -ne 0) {
			throw "$FilePath exited with code $LASTEXITCODE"
		}
	}
	finally {
		Pop-Location
	}
}

function Resolve-RequiredPath {
	param(
		[Parameter(Mandatory = $true)][string]$Path,
		[Parameter(Mandatory = $true)][string]$Name
	)

	$resolved = Resolve-Path -LiteralPath $Path -ErrorAction SilentlyContinue
	if (-not $resolved) {
		throw "$Name 不存在: $Path"
	}
	return $resolved.Path
}

function Assert-GitRepo {
	param([Parameter(Mandatory = $true)][string]$Path)

	Invoke-External -FilePath "git" -Arguments @("rev-parse", "--is-inside-work-tree") -WorkingDirectory $Path | Out-Null
}

function Get-GitStatusPorcelain {
	param([Parameter(Mandatory = $true)][string]$Path)

	Push-Location -LiteralPath $Path
	try {
		return @(git status --porcelain)
	}
	finally {
		Pop-Location
	}
}

function Clear-MobileDistRoot {
	param([Parameter(Mandatory = $true)][string]$Path)

	$resolvedTarget = Resolve-RequiredPath -Path $Path -Name "mobile dist worktree"
	$targetRoot = [IO.Path]::GetPathRoot($resolvedTarget)
	if ($resolvedTarget.TrimEnd("\", "/") -eq $targetRoot.TrimEnd("\", "/")) {
		throw "拒绝清空磁盘根目录: $resolvedTarget"
	}

	Get-ChildItem -LiteralPath $resolvedTarget -Force | Where-Object { $_.Name -ne ".git" } | Remove-Item -Recurse -Force
}

function Invoke-Robocopy {
	param(
		[Parameter(Mandatory = $true)][string]$Source,
		[Parameter(Mandatory = $true)][string]$Destination,
		[string[]]$ExtraArguments = @()
	)

	New-Item -ItemType Directory -Force -Path $Destination | Out-Null
	& robocopy $Source $Destination /E /NFL /NDL /NJH /NJS /NP @ExtraArguments
	if ($LASTEXITCODE -gt 7) {
		throw "robocopy failed with code ${LASTEXITCODE}: $Source -> $Destination"
	}
}

function Copy-DirectoryChildrenWithRobocopy {
	param(
		[Parameter(Mandatory = $true)][string]$Source,
		[Parameter(Mandatory = $true)][string]$Destination,
		[string[]]$SkipDirectoryNames = @()
	)

	New-Item -ItemType Directory -Force -Path $Destination | Out-Null

	Get-ChildItem -LiteralPath $Source -File -Force | ForEach-Object {
		Copy-Item -LiteralPath $_.FullName -Destination (Join-Path $Destination $_.Name) -Force
	}

	Get-ChildItem -LiteralPath $Source -Directory -Force | Where-Object { $SkipDirectoryNames -notcontains $_.Name } | ForEach-Object {
		Invoke-Robocopy -Source $_.FullName -Destination (Join-Path $Destination $_.Name)
	}
}

function Copy-DecadeUiWithoutDynamicSkins {
	param(
		[Parameter(Mandatory = $true)][string]$Source,
		[Parameter(Mandatory = $true)][string]$Destination
	)

	Copy-DirectoryChildrenWithRobocopy -Source $Source -Destination $Destination -SkipDirectoryNames @("assets")

	$assetsSource = Join-Path $Source "assets"
	if (Test-Path -LiteralPath $assetsSource) {
		$assetsDestination = Join-Path $Destination "assets"
		Write-Host "跳过动皮目录: $(Join-Path $assetsSource 'dynamic')" -ForegroundColor Yellow
		Copy-DirectoryChildrenWithRobocopy -Source $assetsSource -Destination $assetsDestination -SkipDirectoryNames @("dynamic")
	}
}

function Copy-DistWithoutDynamicSkins {
	param(
		[Parameter(Mandatory = $true)][string]$DistRoot,
		[Parameter(Mandatory = $true)][string]$TargetRoot
	)

	Copy-DirectoryChildrenWithRobocopy -Source $DistRoot -Destination $TargetRoot -SkipDirectoryNames @("extension")

	$extensionSource = Join-Path $DistRoot "extension"
	if (Test-Path -LiteralPath $extensionSource) {
		$extensionDestination = Join-Path $TargetRoot "extension"
		New-Item -ItemType Directory -Force -Path $extensionDestination | Out-Null
		Get-ChildItem -LiteralPath $extensionSource -Directory -Force | ForEach-Object {
			$target = Join-Path $extensionDestination $_.Name
			if ($_.Name -eq "十周年UI") {
				Copy-DecadeUiWithoutDynamicSkins -Source $_.FullName -Destination $target
			}
			else {
				Invoke-Robocopy -Source $_.FullName -Destination $target
			}
		}
	}

	$targetStats = Get-ChildItem -LiteralPath $TargetRoot -Recurse -File -Force | Where-Object { $_.FullName -notlike "*\.git\*" } | Measure-Object -Property Length -Sum
	Write-Host ("复制完成: {0} 个文件，{1:N2} MB" -f $targetStats.Count, ($targetStats.Sum / 1MB)) -ForegroundColor Green
}

function Test-NoDynamicSkinsTracked {
	param([Parameter(Mandatory = $true)][string]$Path)

	Push-Location -LiteralPath $Path
	try {
		$tracked = @(git ls-files -- "extension/十周年UI/assets/dynamic")
		if ($tracked.Count -gt 0) {
			throw "检测到动皮目录被 Git 跟踪，请检查: extension/十周年UI/assets/dynamic"
		}
	}
	finally {
		Pop-Location
	}
}

if ([string]::IsNullOrWhiteSpace($SourceRoot)) {
	$SourceRoot = Resolve-RequiredPath -Path (Join-Path $PSScriptRoot "..") -Name "source repo"
}
else {
	$SourceRoot = Resolve-RequiredPath -Path $SourceRoot -Name "source repo"
}

if ([string]::IsNullOrWhiteSpace($MobileDistRoot)) {
	$MobileDistRoot = Join-Path (Split-Path -Parent $SourceRoot) "noname-mobile-dist"
}
$MobileDistRoot = Resolve-RequiredPath -Path $MobileDistRoot -Name "mobile dist worktree"

$DistRoot = Resolve-RequiredPath -Path (Join-Path $SourceRoot "dist") -Name "dist"

Write-Step "发布配置"
Write-Host "源码仓库: $SourceRoot"
Write-Host "dist 目录: $DistRoot"
Write-Host "发布目录: $MobileDistRoot"
Write-Host "发布分支: $LocalBranch -> $Remote/$RemoteBranch"
Write-Host "跳过构建: $SkipBuild"
Write-Host "跳过推送: $SkipPush"
Write-Host "Dry run: $DryRun"

Assert-GitRepo -Path $SourceRoot
Assert-GitRepo -Path $MobileDistRoot

if ($DryRun) {
	Write-Step "Dry run 完成"
	Write-Host "没有执行构建、复制、提交或推送。"
	exit 0
}

if (-not $SkipBuild) {
	Write-Step "构建 dist"
	Invoke-External -FilePath "pnpm" -Arguments @("build") -WorkingDirectory $SourceRoot
}

Write-Step "准备发布 worktree"
Invoke-External -FilePath "git" -Arguments @("switch", $LocalBranch) -WorkingDirectory $MobileDistRoot
Invoke-External -FilePath "git" -Arguments @("-c", "http.version=HTTP/1.1", "pull", "--ff-only", $Remote, $RemoteBranch) -WorkingDirectory $MobileDistRoot

$preStatus = Get-GitStatusPorcelain -Path $MobileDistRoot
if ($preStatus.Count -gt 0 -and -not $Force) {
	throw "发布目录存在未提交改动。请先处理 D:/mycode/AI/sgs/noname-backup/noname-mobile-dist，或确认可覆盖后加 -Force。"
}

Write-Step "同步 dist 到发布目录"
Clear-MobileDistRoot -Path $MobileDistRoot
Copy-DistWithoutDynamicSkins -DistRoot $DistRoot -TargetRoot $MobileDistRoot
Set-Content -LiteralPath (Join-Path $MobileDistRoot ".gitignore") -Value "extension/十周年UI/assets/dynamic/**" -Encoding utf8NoBOM

$dynamicPath = Join-Path $MobileDistRoot "extension/十周年UI/assets/dynamic"
if (Test-Path -LiteralPath $dynamicPath) {
	throw "动皮目录被复制到了发布目录，已停止: $dynamicPath"
}

Write-Step "提交发布分支"
Invoke-External -FilePath "git" -Arguments @("-c", "core.autocrlf=false", "add", "-A") -WorkingDirectory $MobileDistRoot
Test-NoDynamicSkinsTracked -Path $MobileDistRoot

$postStatus = Get-GitStatusPorcelain -Path $MobileDistRoot
if ($postStatus.Count -eq 0) {
	Write-Host "dist 没有变化，不需要提交或推送。" -ForegroundColor Green
	exit 0
}

if ([string]::IsNullOrWhiteSpace($CommitMessage)) {
	$CommitMessage = "build: publish mobile dist $(Get-Date -Format 'yyyyMMdd-HHmm')"
}

Invoke-External -FilePath "git" -Arguments @("commit", "-m", $CommitMessage) -WorkingDirectory $MobileDistRoot

if ($SkipPush) {
	Write-Host "已按 -SkipPush 跳过推送。" -ForegroundColor Yellow
	exit 0
}

Write-Step "推送 $RemoteBranch"
Invoke-External -FilePath "git" -Arguments @("-c", "http.version=HTTP/1.1", "push", $Remote, "HEAD:$RemoteBranch") -WorkingDirectory $MobileDistRoot
Write-Host "mobile-dist 发布完成。" -ForegroundColor Green
