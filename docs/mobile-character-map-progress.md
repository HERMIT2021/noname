# Mobile Character Map Progress

This document records the current progress of the mobile-standard character mapping work. The goal is to align this JS game with the mobile game character/package system without physically moving or rewriting the original `character/*` packages.

## Goal

Build a separate mobile-standard character data layer that can later be shared by:

- 如真扩展武将按钮
- 斗转星移禁将界面
- 招募令抽将
- 珍宝阁武将奖励
- 将魂 / 元宝 / 史诗宝珠解锁
- 点将限制
- 武将品质、价格、获取方式展示

The current approach is mapping-based:

- Keep original local packages unchanged.
- Use a mobile mapping table to decide what the game should show as the official mobile package structure.
- Store display name, local character ID, source local package, aliases, quality, obtain methods, prices, recruit weights, and duplicate compensation placeholders in the mapping.

## Important Rules

- Do not use DIY package characters.
- Do not use onlyOL package characters.
- Do not physically move local `character/*` files to create new packages.
- Do not infer quality from local package names, prefixes, frames, or images.
- Quality, price, obtain methods, and recruit weights should come from the user's mobile-game template later.
- If a mobile-standard character has no exact implementation, do not map it to an unrelated older/local variant. Record it in the missing file instead.

## Main Files

Mapping data:

```text
apps/core/noname/library/mobile-character-map.js
```

Missing/deduplicated records:

```text
apps/core/noname/library/mobile-character-map.missing.md
```

Export script:

```text
scripts/export-mobile-character-map.mjs
```

Exported review files:

```text
log/mobile-character-map.json
log/mobile-character-map.csv
```

CSV output includes a UTF-8 BOM so Excel can open it without Chinese garbling.

## Current Export Stats

After the latest export:

```text
catalogCount: 4
rowCount: 183
uniqueCharacterCount: 183
missingDefinitionCount: 0
duplicateEntryCount: 0
```

Command used:

```bash
pwsh -Command "node 'scripts/export-mobile-character-map.mjs'"
```

Syntax check:

```bash
pwsh -Command "node --check 'apps/core/noname/library/mobile-character-map.js'"
pwsh -Command "node --check 'scripts/export-mobile-character-map.mjs'"
```

## Completed Catalogs

### 神话再临

Catalog ID:

```text
shenhua_zailin
```

Groups:

```text
标风包 / 风包 / 火包 / 林包 / 山包 / 阴包 / 雷包
```

Status:

- Mapped and exported.
- Duplicates removed.
- Current source list once repeated `曹仁` and `夏侯渊` in both `标风包` and `风包`; mapping keeps only the `标风包` copy.

Special display-name mappings:

```text
甄姬 -> zhenji, local name 甄宓, display as 甄姬
卧龙诸葛 -> sp_zhugeliang, local name 卧龙, display as 卧龙诸葛
蔡文姬 -> caiwenji, local name 蔡琰, display as 蔡文姬
张昭张纮 -> zhangzhang, local name 张昭张纮
蒯良蒯越 -> kuailiangkuaiyue, local name 蒯良蒯越
吕布 -> lvbu, fixed to standard package version
```

Deduplicated records are documented in:

```text
apps/core/noname/library/mobile-character-map.missing.md
```

### 兵势篇

Catalog ID:

```text
bingshi
```

Groups:

```text
奇 / 正 / 势 / 节
```

Mapped characters:

```text
奇：势杨弘、势于吉、势邓艾、势娄圭、势夏侯尚、势孙韶
正：势陈到、势田丰、势太史慈、势国渊
势：势黄祖、势张燕、势陈祗、势魏延、势庞羲、势董昭、势钟会、势孙峻
节：势辛宪英、势陆郁生、势鲁肃、势桓阶
```

Missing and intentionally not mapped:

```text
势王昶
势孙綝
```

Reason:

- These are new mobile versions.
- Current JS game does not appear to have the correct 势 version implementation/skills.
- Existing alternatives such as `xianding:dc_wangchang`, `tw:tw_wangchang`, `clan:clan_wangchang`, `huicui:dc_sunchen`, and `offline:pe_sunchen` should not be used as substitutes.

### 谋攻篇

Catalog ID:

```text
mougong
```

Groups:

```text
知 / 识 / 同 / 虞 / 能
```

Source list count:

```text
53
```

Mapped count:

```text
50
```

Most mapped characters come from local package:

```text
character/sb
```

Missing and intentionally not mapped:

```text
谋甄姬
谋田豫
谋刘桢
```

Reason:

- No exact local implementation was found.
- Do not map `谋甄姬` to normal `zhenji`; that is a 标风/标准 version, not 谋甄姬.

### 始计篇

Catalog ID:

```text
shiji
```

Groups:

```text
智 / 信 / 仁 / 勇 / 严
```

Source list count:

```text
40
```

Mapped count:

```text
38
```

Missing and intentionally not mapped:

```text
张仲景
宗预
```

Variant selection note:

```text
糜夫人 -> dc_mifuren
```

Reason:

- Two exact local candidates exist: `sp:mifuren` and `xianding:dc_mifuren`.
- Current mapping uses `xianding:dc_mifuren` as the likely mobile-standard candidate.
- Recheck if later skill comparison says otherwise.

## Current Missing/Deduplicated Records

Tracked in:

```text
apps/core/noname/library/mobile-character-map.missing.md
```

Current entries:

```text
神话再临：曹仁、夏侯渊 were duplicate source-list entries in 风包 and are omitted there because they are already in 标风包.
兵势篇：势王昶、势孙綝 missing implementation.
谋攻篇：谋甄姬、谋田豫、谋刘桢 missing implementation.
始计篇：张仲景、宗预 missing implementation; 糜夫人 variant note.
```

## Supporting Analysis Scripts

These were used to inspect local mappings and may be useful later:

```text
scripts/analyze-shenhua-pack.mjs
scripts/analyze-mougong-pack.mjs
scripts/analyze-shiji-pack.mjs
scripts/compare-yidongban-characters.mjs
scripts/dedupe-yidongban.mjs
```

Important PowerShell rule from user:

```bash
pwsh -Command "<script>"
```

Do not invoke `powershell.exe`. Do not use `chcp`.

## Next Steps When Resuming

Recommended next steps:

1. Continue adding more mobile-standard packages to `mobile-character-map.js`.
2. For each package, first analyze local exact matches and only map confirmed implementations.
3. Add missing/unimplemented characters to `mobile-character-map.missing.md` instead of creating fake placeholders.
4. Re-run:

```bash
pwsh -Command "node --check 'apps/core/noname/library/mobile-character-map.js'"
pwsh -Command "node 'scripts/export-mobile-character-map.mjs'"
```

5. Review `log/mobile-character-map.csv` in Excel.
6. After all target mobile packages are mapped and reviewed, connect the data to:

```text
如真扩展武将按钮
斗转星移禁将界面
招募令抽将
珍宝阁武将奖励
武将解锁/价格/品质系统
```

Do not start UI integration until the mapping data has been reviewed enough to avoid large rewrites.
