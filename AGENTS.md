# AGENTS.md — 无名杀

pnpm monorepo (GPL-3.0), ESM only (`"type": "module"`). 浏览器端三国杀游戏.

## 常用命令

```bash
pnpm dev                  # 开发环境: fs服务器(8089) + 扩展watch + Vite(8080, 自动打开浏览器)
pnpm build                # 构建: 核心+所有扩展 → dist/
pnpm serve                # 生产环境文件服务器(8080)
pnpm start                # build + serve
pnpm lint                 # pnpm -r lint (eslint 全仓库检查)
pnpm init:extension <name> [--vue] [--author xx]  # 脚手架新扩展到 packages/extension/

# Electron
pnpm -F @noname/electron build:win    # 输出到 output/
pnpm -F @noname/electron build:mac    # 需根据芯片修改 apps/electron/build.ts
pnpm -F @noname/electron build:linux

# 联机服务器
pnpm -F @noname/server dev            # WS服务, 监听8082端口
```

## 架构

```
apps/core       → noname (核心游戏, Vue3+Vite, 浏览器端)
apps/electron   → @noname/electron (Electron桌面壳)
apps/mobile     → @noname/mobile (Capacitor移动壳)
packages/fs     → @noname/fs (Fastify文件I/O服务, 8089端口)
packages/server → @noname/server (WebSocket联机服务, 8082端口)
packages/jit    → @noname/jit (扩展编译器: Vue SFC + TypeScript → JS)
packages/extension/* → 内置扩展 (独立workspace)
```

- `apps/core/noname.js` 是 re-export barrel，真正入口是 `noname/entry.ts`
- Vite 把 `/readFile`、`/writeFile` 等接口代理到 `@noname/fs` (8089端口)
- `@noname/jit` 在构建时编译扩展，开发和构建时均使用

## 工作区注意

- `sharedWorkspaceLockfile: false` — **每个 workspace 独立 lockfile**
- 扩展构建: `pnpm -F ./packages/extension/** build`
- 扩展源码通过 `packages/extension/.gitignore` 白名单跟踪 (boss, cardpile, coin 等)

## 代码风格

- **Tab 缩进**, 宽度4, LF 换行
- Prettier: `printWidth: Infinity` (不自动断行), `useTabs: true`, `trailingComma: "es5"`
- ESLint flat config: Vue + TS + browser/node/worker globals
- `ts-ignore`/`ts-nocheck` 允许, `no-unused-vars`/`no-explicit-any` 关闭
- 别名 `@/` → `noname/` (core app tsconfig)

## 测试

**无自动化测试。** 此仓库没有测试框架、没有测试文件、没有测试脚本。功能验证通过手动运行 `pnpm dev` 进行。
