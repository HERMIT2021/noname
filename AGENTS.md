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

## 武将解锁与经济系统计划

用户目标是把本项目的武将、道具、商城、珍宝阁逐步对齐网游模板，而不是沿用当前无名杀 1000-2000 个混杂武将的全量池。后续涉及解锁系统时，必须先做武将统一和分类，不要直接基于当前 `lib.character` 全量武将定价。

### 当前判断

- 当前项目里的“精品”“史诗”等展示不应默认视为真实品质体系，很多可能只是 UI 贴图、标签、皮肤展示或扩展自带文案。
- 真正的品质、价格、获取方式以后应以用户提供的网游模板、武将清单、权重图、道具价格为准。
- 目前已做的“武将解锁一期”只是技术管线：保存解锁列表、珍宝阁抽到 `type: "wujiang"` 时写入解锁、配置开启后点将池可过滤未拥有武将。该配置默认关闭，不能当成最终经济设计。
- 在价格和武将池未定前，不要强制开启“仅可点将已拥有武将”。

### 核心前置任务：统一武将

后续最核心问题是把网游约 600 个武将与本 JS 游戏内武将做统一映射。

必须建立一张权威映射表，建议结构类似：

```js
{
	// 网游武将 ID 或标准名
	onlineId: "xxx",
	onlineName: "谋夏侯惇",
	// 本项目实际武将 ID
	nonameId: "sb_xiahoudun",
	// 标准源武将，用于同源/同名归并
	source: "sb_xiahoudun",
	// 品质以后按网游模板填，不按当前贴图猜
	rarity: "epic",
	// 是否进入招募令池、珍宝阁池、将魂/元宝/宝珠兑换
	pools: ["recruit", "czg", "jianghun", "yuanbao", "shishibaozhu"]
}
```

统一规则：

- 以网游 600 武将为目标池，当前项目中多余武将默认不进入经济系统。
- 同一武将的多个版本必须归并到一个标准 `source`，避免抽到 A 版却点将 B 版、重复补偿混乱。
- 若本项目没有网游对应武将，后续再决定是补技能、替代映射、隐藏，还是暂不接入。
- 若本项目同名多个版本都可用，需要按网游模板指定主版本，不要自动选强度最高或贴图最像的版本。

### 获取方式

后续武将主要获取方式包括：

1. 招募令抽取

- 1 个招募令抽取 1 个武将。
- 用户会提供需要招募的武将权重图。
- 实现前必须先完成“网游武将 -> 本项目武将”的映射和招募池配置。
- 招募结果若是未拥有武将：解锁该武将。
- 招募结果若是已拥有武将：按后续规则发放重复补偿。

2. 珍宝阁抽盒子获取

- 当前珍宝阁盒子配置里已经包含 `type: "wujiang"` 的武将奖励，但原逻辑不完整。
- 后续需要把珍宝阁武将奖励接入统一武将映射和解锁系统。
- 珍宝阁抽到未拥有武将应永久解锁。
- 珍宝阁抽到重复武将应按品质或池子规则发放补偿。

3. 将魂解锁

- 后续按网游模板定义哪些武将可用将魂解锁，以及对应价格。
- 不要现在凭当前武将强度随意定价。

4. 元宝解锁

- 后续按网游模板定义哪些武将可用元宝直购，以及对应价格。
- 元宝已作为统一道具接入斗转/如真/一将成名同步背包。

5. 史诗宝珠解锁

- 史诗宝珠应作为高级解锁资源。
- 史诗宝珠可从珍宝阁盒子抽取。
- 当前珍宝阁奖励映射已把 `史诗宝珠` / `620150` 接入 `shishibaozhu`，把 `史诗宝珠碎片` / `620149` 接入 `shishibaozhusuipian`；后续若用户反馈背包未显示，再检查斗转/一将成名道具定义和 UI 展示。

### 后续实施顺序

按以下顺序推进，避免先写死价格后返工：

1. 建立网游武将映射表

- 输入：用户提供的网游 600 武将清单、权重图、品质/价格模板。
- 输出：标准武将池、主版本映射、同源归并规则。

2. 建立统一武将经济配置

- 定义每个武将是否可招募、珍宝阁获得、将魂解锁、元宝解锁、史诗宝珠解锁。
- 定义价格、权重、重复补偿。

3. 实现招募令抽将

- 商城新增招募入口。
- 消耗 `zhaomuling`。
- 按权重抽取。
- 抽到未拥有则 `game.unlockCharacter(nonameId)`。
- 抽到重复则发补偿。

4. 补全珍宝阁武将逻辑

- 珍宝阁奖励使用映射表识别武将。
- 抽到武将时写入解锁列表。
- 重复武将发补偿。
- 结果界面区分“新武将”和“重复补偿”。

5. 实现将魂/元宝/史诗宝珠解锁入口

- 可以在斗转武将页、商城页、或独立武将解锁页实现。
- 未拥有武将显示价格和解锁按钮。
- 已拥有武将显示已拥有。

6. 最后再开启未拥有点将限制

- 配置 `仅可点将已拥有武将` 继续默认关闭，直到武将池和解锁入口可用。
- 等招募/珍宝阁/兑换闭环完成，再考虑默认开启或让用户手动开启。

### 当前已接入的资源

- `yuanbao`：元宝。
- `czg_box`：珍宝阁宝箱。
- `dianjiangka`：点将卡。
- `huanjiangka`：换将卡。
- `shouqika`：手气卡。
- `jianghun`：将魂。
- `huanledou`：欢乐豆。
- `shishibaozhu`：史诗宝珠。
- `shishibaozhusuipian`：史诗宝珠碎片。
- `zhaomuling`：招募令。
- `yanlingjia`：雁翎甲。

主存储目前使用：

```text
lib.config.extension_斗转星移_package
```

并同步一将成名背包显示副本：

```text
localStorage.yjcm_game_backpack_data
```

### 风险与注意

- 本地浏览器存储不能防作弊，当前目标是正常流程限制。
- 不要基于当前 `lib.character` 全量武将直接生成招募池。
- 不要基于当前贴图、边框、标签自动推断武将品质。
- 不要把无名杀扩展里的同名/变体武将都当成独立网游武将。
- 用户提供权重图后，先做数据录入和映射校验，再写抽取逻辑。
