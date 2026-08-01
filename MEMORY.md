# MEMORY.md - 项目交接记录

本文档用于后续窗口快速接手当前无名杀本地工程。重点记录项目结构、已经完成的核心改动、不同类型需求通常要改哪些文件、验证方式、已知风险和后续方向。

## 工作目录

- 仓库根目录：`D:\mycode\AI\sgs\noname-backup\noname`
- 核心代码目录：`D:\mycode\AI\sgs\noname-backup\noname\apps\core`
- 用户浏览器控制台日志目录：`D:\mycode\AI\sgs\noname-backup\noname\log`
- 当前工程是 pnpm monorepo，浏览器端三国杀游戏，核心入口在 `apps/core/noname`。

## 命令和工具规则

- shell 统一用 PowerShell 7：命令写成 `pwsh -Command "..."`。
- 不要调用 `powershell.exe`。
- 不要用 `cmd.exe`，除非用户明确要求。
- 搜索优先用 Glob/Grep；中文路径或通配不稳定时可用 `pwsh -Command` 做辅助搜索。
- 手工代码改动必须用 `apply_patch`，不要用 `cat`、`Set-Content`、Python 临时脚本直接写文件。
- 提交前必须检查 `git status`、`git diff`、最近提交；不要提交浏览器日志。
- `apps/core/extension/皮肤切换` 目录被 Git 忽略，若要提交该目录改动需要 `git add -f` 指定文件。

常用验证命令：

```powershell
pwsh -Command "node --check 'apps/core/noname/library/index.js'"
pwsh -Command "node --check 'apps/core/noname/get/index.js'"
pwsh -Command "node --check 'apps/core/noname/library/element/player.js'"
pwsh -Command "node --check 'apps/core/noname/library/element/content.js'"
pwsh -Command "node --check 'apps/core/noname/game/index.js'"
```

开发运行通常是：

```powershell
pwsh -Command "pnpm dev"
```

## 项目结构速览

- `apps/core/mode`：游戏模式，例如身份、斗地主。
- `apps/core/character`：核心武将包和技能。
- `apps/core/noname/game/index.js`：游戏对象核心方法、动画、全局接口、部分流程入口。
- `apps/core/noname/get/index.js`：大量查询/工具函数，适合放统一读取配置、效果速度计算、映射工具。
- `apps/core/noname/library/index.js`：全局配置、菜单配置、lib 初始化数据。
- `apps/core/noname/library/element/player.js`：玩家对象方法，出牌、抛牌、指示线、技能表现等大量 UI 方法。
- `apps/core/noname/library/element/card.js`：卡牌节点移动、删除、飞行等动画。
- `apps/core/noname/library/element/content.js`：事件内容流程，`useCard`、`respond`、`lose` 等核心结算流程。
- `apps/core/extension`：内置扩展，当前主要涉及斗转星移、如真重置版、十周年UI、皮肤切换、无名美化、一将成名。
- `scripts`：本地分析/导出工具脚本。
- `docs`：阶段总结文档。
- `log`：用户日志、导出 CSV/JSON、名单输入输出。

## 已完成核心改动

### 斗地主评分与选将

目标：AI 斗地主选将按身份评分，地主不要优先选农民强将。

关键文件：

- `apps/core/mode/doudizhu.js`
- `apps/core/mode/doudizhu-rating.js`

已做：

- 地主推荐不再混用旧 `recommendDizhu` 固定推荐表，只按地主评分阈值和排序。
- 地主候选同分时优先 `地主分 - 农民分` 高的武将。
- 欢乐/至尊分支补候选从随机改为评分优先。
- AI 最终选将统一走身份评分排序。

后续若改斗地主选将：优先看 `doudizhu.js` 的候选池生成、`chooseDoudizhuCharacters`、评分调用；评分表和排序规则在 `doudizhu-rating.js`。

### 允许同名武将配置

目标：默认不允许同源/同名变体同时出现在同局选将中，但可配置放开。

关键文件：

- `apps/core/mode/identity.js`
- `apps/core/mode/doudizhu.js`
- `apps/core/noname/library/index.js`

已做：

- 新增配置：`allow_same_character`、`connect_allow_same_character`。
- 默认 `false`。
- 通过 `get.sourceCharacter()` 去重同源武将。
- 斗地主小池有候选兜底补足逻辑。

### AI 技能优化

目标：针对具体武将/技能补 AI，不做全局大改。

关键机制：

- 技能内 `ai`、`check`、`order`、`result`、`effect`。
- 内部选择逻辑经常用 `.set("ai", fn)`。
- 核心入口包括 `noname/ai/basic.js`、`noname/library/element/player.js`、`noname/library/element/content.js`、`noname/get/index.js`。

已改技能：

- `apps/core/character/bingshi/skill.js`：势桓阶 `potzhengshuo` 增加敌友手牌收益评分。
- `apps/core/character/mobile/skill.js`：友诸葛亮 `friendyance` 优化预测和用牌计划。
- `apps/core/extension/无名美化/extension/wolongyance.js`：同步友诸葛亮美化覆盖版 AI。

后续改 AI：先定位具体技能定义，再补技能自己的 `ai/check/order/result`，不要优先改全局 AI。

### 无名美化兼容

目标：用户关闭很多武将包时，无名美化缺技能/缺动画不应中断整个扩展。

关键文件：

- `apps/core/extension/无名美化/extension.js`
- `apps/core/extension/无名美化/utils/utils.js`
- `apps/core/extension/无名美化/extension/wolongyance.js`
- `apps/core/extension/无名美化/extension/modiaochan.js`
- `apps/core/extension/无名美化/extension/shiweiyan.js`
- `apps/core/extension/无名美化/extension/olcaochun.js`

已做：

- `safeRun` / `runIf` 包裹单个美化模块，某个模块失败只跳过自己。
- `dcdAnim` 兼容桥转发到十周年UI的 `decadeUI.animation`。
- 缺技能时安全跳过，不要求用户手动关闭美化选项。
- 修了若干空节点、数组结构、UI 节点不存在时报错。
- 曹纯美化文件不再覆盖核心新版 `olshanjia.content`。

后续改无名美化：先确认是否是扩展覆盖了核心技能；缺技能/缺资源优先安全跳过，不要让整个 `content()` 失败。

### 核心武将技能同步

目标：按用户提供的网游/新版本技能文本修核心武将。

关键文件：

- `apps/core/character/sp/skill.js`
- `apps/core/character/sp/translate.js`
- 具体包按武将所在包定位，例如 `character/mobile/skill.js`、`character/bingshi/skill.js`。

已做：

- 灵雎新版 `fenxin` 支持斗地主；旧 `fenxin_old` 未扩展，避免破坏身份交换规则。
- 曹纯 `olshanjia` 改为璀璨星河新版逻辑，新增子技能。
- 诸葛果 `qirang/yuhua` 改为新版逻辑和文本。

后续改技能：必须同时改 `skill.js` 和 `translate.js`；如果无名美化或其它扩展覆盖了技能，也要同步检查扩展文件。

### 全局经济、道具、背包同步

目标：元宝、宝箱、点将卡、换将卡、手气卡等统一走全局道具接口，避免不同扩展各扣各的。

主存储：

- `lib.config.extension_斗转星移_package`

同步显示副本：

- `localStorage.yjcm_game_backpack_data`

关键文件：

- `apps/core/noname/game/index.js`
- `apps/core/extension/斗转星移/class/public.js`
- `apps/core/extension/如真重置版/hooks/czg.js`
- `apps/core/extension/如真重置版/main/OnloadSplash.js`
- `apps/core/extension/十周年UI/src/features/luckyCard.js`
- `apps/core/extension/一将成名/utils/BackpackManager.js`
- `apps/core/extension/一将成名/extension/choosechar.js`
- `apps/core/mode/identity.js`
- `apps/core/mode/doudizhu.js`
- `apps/core/extension/斗转星移/class/ChooseChar.js`
- `apps/core/extension/斗转星移/class/ChooseChar_mod.js`

已做：

- 新增 `game.getGlobalItemCount(id)`、`game.setGlobalItemCount(id, count)`、`game.changeGlobalItemCount(id, changeCount)`、`game.useGlobalItem(id, propName, reason)`。
- 接入元宝 `yuanbao`、珍宝阁宝箱 `czg_box`、点将卡 `dianjiangka`、换将卡 `huanjiangka`、手气卡 `shouqika` 等。
- 军争/斗地主胜利后 75% 概率获得 `100-888` 元宝。
- 珍宝阁宝箱用元宝购买，开盒扣真实库存。
- 如真顶部元宝显示读取真实全局元宝。
- 点将卡接入身份/斗地主/斗转/一将成名相关自由选将入口。
- 换将卡接入身份/斗转/一将成名换将入口。
- 十周年UI手气卡去掉随机几万张，改为真实读取和消耗全局 `shouqika`。

后续改道具：优先走 `game.*GlobalItem*` 接口；不要让扩展自己直接改一份孤立背包。新增显示道具时还要检查斗转和一将成名是否都有图标/名称定义。

### 武将解锁技术管线

目标：先做技术管线，后续等移动版/网游模板确定后再接经济。

关键文件：

- `apps/core/noname/game/index.js`
- `apps/core/noname/library/index.js`
- `apps/core/mode/identity.js`
- `apps/core/mode/doudizhu.js`
- `apps/core/extension/斗转星移/class/ChooseChar.js`
- `apps/core/extension/斗转星移/class/ChooseChar_mod.js`
- `apps/core/extension/一将成名/extension/choosechar.js`
- `apps/core/extension/如真重置版/hooks/czg.js`
- `AGENTS.md`

已做：

- 新增 `game.getUnlockedCharacters()`、`game.isCharacterUnlocked(name)`、`game.unlockCharacter(name)`、`game.filterUnlockedCharacters(list)`。
- 解锁数据存储：`extension_斗转星移_unlocked_characters`。
- 新增配置：`only_choose_unlocked_character`，默认关闭。
- 珍宝阁抽到 `type: "wujiang"` 时可写入解锁。

重要原则：

- 这只是技术管线，不是最终经济设计。
- 不要基于当前 `lib.character` 全量武将直接定价或做招募池。
- 品质、价格、获取方式、权重必须等用户提供移动版/网游模板。

### 珍宝阁和如真重置版

目标：珍宝阁可购买宝箱、开盒扣库存、奖励发放到统一背包，动画安全且可调。

关键文件：

- `apps/core/extension/如真重置版/hooks/czg.js`
- `apps/core/extension/如真重置版/config/index.js`
- `apps/core/extension/如真重置版/main/OnloadSplash.js`
- `apps/core/extension/斗转星移/class/public.js`

已做：

- 修复 `Cannot read properties of null (reading 'setAnimation')`，动画不可用时直接开奖。
- 新增配置 `czgRewardSpeed`：`normal` / `fast` / `veryfast` / `instant`，默认 `fast`。
- 奖励动画改为整体淡入、上浮、缩放，首屏中心向两侧错峰。
- 珍宝阁显示真实 `czg_box` 数量。
- `openAll` 最多 50 且不超过库存。
- 奖励按名称/ID 映射到全局背包并同步一将成名。

后续改珍宝阁：优先看 `hooks/czg.js`，注意动画资源可能为空，必须保留安全降级。

### 移动版标准武将映射

目标：建立“移动版/网游武将 -> 本地实现武将 ID”的标准映射表，后续给商城、招募、珍宝阁、点将限制使用。

关键文件：

- `apps/core/noname/library/mobile-character-map.js`
- `apps/core/noname/library/mobile-character-map.missing.md`
- `scripts/export-mobile-character-map.mjs`
- `scripts/dedupe-yidongban.mjs`
- `scripts/compare-yidongban-characters.mjs`
- `docs/mobile-character-map-progress.md`
- `log/yidongban.txt`
- `log/yidongban.unique.txt`
- `log/mobile-character-map.json`
- `log/mobile-character-map.csv`

已做：

- 原始移动版名单 `1148` 行，去重后 `569` 行。
- 当前映射包：神话再临、兵势篇、谋攻篇、始计篇。
- 当前导出：`catalogCount: 4`、`rowCount: 183`、`uniqueCharacterCount: 183`、`missingDefinitionCount: 0`、`duplicateEntryCount: 0`。
- 缺本地实现或去重选择写入 `mobile-character-map.missing.md`。

规则：

- 不使用 DIY 包武将。
- 不使用 `onlyOL` 包武将。
- 不物理移动或重组 `character/*` 文件。
- 不根据本地包名、ID 前缀、贴图、边框推断品质或价格。
- 缺本地实现的武将不做假占位进映射。
- `mobile-character-map.js` 用 `mobile` 命名，不用 `online`。

导出验证：

```powershell
pwsh -Command "node --check 'apps/core/noname/library/mobile-character-map.js'"
pwsh -Command "node --check 'scripts/export-mobile-character-map.mjs'"
pwsh -Command "node 'scripts/export-mobile-character-map.mjs'"
```

### 十周年UI与皮肤切换动态皮肤

目标：总皮肤配置作为目录，本地资源决定是否显示/播放；新增扫描更新按钮，不覆盖用户总配置。

关键文件：

- `apps/core/extension/十周年UI/dynamicSkin.js`
- `apps/core/extension/十周年UI/src/skins/dynamicSkin.js`
- `apps/core/extension/十周年UI/src/content.js`
- `apps/core/extension/皮肤切换/extension.js`
- `apps/core/extension/皮肤切换/js/modules/dynamic-init.js`
- `apps/core/extension/皮肤切换/js/modules/dynamic-skin-resolver.js`
- `apps/core/extension/皮肤切换/js/modules/dynamic.js`

已做：

- 新增 `dynamic-skin-resolver.js` 扫描 `extension/十周年UI/assets/dynamic`。
- 配置有但本地无主骨骼 `.skel/.json` 的皮肤运行时隐藏。
- 本地存在但配置未声明的普通皮肤自动补到运行时 `decadeUI.dynamicSkin`。
- 清理已保存但本地不存在的当前动皮选择。
- 新增系统菜单按钮 `扫描更新皮肤`，不做牌桌固定悬浮，避免重叠。
- 不改、不删十周年UI总动态皮肤大表。

注意：

- 十周年UI运行时通过 `setupDynamicSkin()` 挂 `decadeUI.dynamicSkin`。
- 皮肤切换界面直接读 `decadeUI.dynamicSkin`。
- 本地皮肤文件不完整，不能用本地扫描结果覆盖/删除总配置。
- 不要求每个皮肤手写 `skin.json`。

### 对局动画质感与流畅度

目标：把用牌、出牌、指示线、粒子等动画做成“特效”栏位可配置优化项，改善“不流畅”而不只是简单加速。

关键文件：

- `apps/core/noname/library/index.js`
- `apps/core/noname/get/index.js`
- `apps/core/noname/library/element/player.js`
- `apps/core/noname/library/element/card.js`
- `apps/core/noname/library/element/content.js`
- `apps/core/noname/game/index.js`

已做：

- 已有速度项：`effect_speed_global/card/card_back/basic/trick/equip/judge/move/delay/popup/player/line/skill`。
- `card.js` 的 `.thrown` 后段收回已接 `cardBack` 速度。
- 新增特效设置：
  - `effect_animation_profile`：对局动画质感，默认 `smooth`。
  - `effect_card_hold`：出牌展示停留，默认 `normal`。
  - `effect_particle_quality`：粒子特效质量，默认 `normal`。
- `get.index.js` 新增：
  - `get.effectProfile()`
  - `get.effectCardHold(duration)`
  - `get.effectParticleRate()`
- `player.js` 的 `$throwordered1`、`$throwordered2`、`$throwxy`、`$throwxy2` 接入动画曲线、持续时间、中心位移。
- `content.js` 的 useCard 关键等待接入 `effect_card_hold`。
- `game.index.js` 的 `game.animate.flame()` 接入粒子质量；`linexy()` 接入质感对指示线透明度、停留和曲线的影响。

用户实测建议：

- 默认：`对局动画质感=顺滑`、`出牌展示停留=默认`、`粒子特效质量=默认`。
- 如果仍拖泥带水：改 `紧凑 + 较短`。
- 如果主要低帧/卡顿：改 `轻量 + 较短 + 粒子低`。

后续可选动皮流畅度：

- `apps/core/extension/皮肤切换/animation.js` 中 `DynamicPlayer` 虽检测 `OffscreenCanvas`，但后面 `offscreen = false`，实际没有使用 OffscreenCanvas 路径。
- `apps/core/extension/皮肤切换/animations.js` 顶部 `const fps = null`，类内已有 `_fps/newFpsRender(time)` 节流逻辑但默认未启用。

## 不同需求通常要改哪里

### 改模式选将

- 身份：`apps/core/mode/identity.js`
- 斗地主：`apps/core/mode/doudizhu.js`
- 斗地主评分：`apps/core/mode/doudizhu-rating.js`
- 全局配置：`apps/core/noname/library/index.js`
- 如果涉及点将卡/解锁过滤，还要看 `game.getGlobalItemCount`、`game.filterUnlockedCharacters`。

### 改技能逻辑

- 先定位武将所在包：`apps/core/character/<pack>/skill.js`。
- 文本同步改：`apps/core/character/<pack>/translate.js`。
- 如果扩展覆盖该技能，检查 `apps/core/extension/无名美化`、其它扩展中同名文件。
- AI 优先放技能自己的 `ai/check/order/result`。

### 改全局设置菜单

- 主文件：`apps/core/noname/library/index.js`。
- 读取配置的公共工具放：`apps/core/noname/get/index.js`。
- 如果配置影响流程，调用点通常在 `game/index.js`、`player.js`、`content.js`、`card.js`。

### 改用牌/出牌动画

- 飞出/展示：`apps/core/noname/library/element/player.js`，重点 `$throw`、`$throwordered`、`$throwordered1`、`$throwordered2`。
- 后段收回/移动删除：`apps/core/noname/library/element/card.js`，重点 `Card.moveDelete()`、`Card.moveTo()`。
- 用牌流程等待：`apps/core/noname/library/element/content.js`，重点 `useCard` 流程中的 `game.delayx(...)`。
- 指示线/粒子：`apps/core/noname/game/index.js`，重点 `linexy()`、`zsPlayLineAnimation()`、`game.animate.flame()`。
- 配置和读取：`library/index.js`、`get/index.js`。

### 改十周年UI动态皮肤

- 总配置：`apps/core/extension/十周年UI/dynamicSkin.js` 和 `apps/core/extension/十周年UI/src/skins/dynamicSkin.js`。
- 运行挂载：`apps/core/extension/十周年UI/src/content.js`、`setupDynamicSkin()`。
- 换肤界面：`apps/core/extension/皮肤切换/js/modules/dynamic.js`。
- 本地扫描/过滤：`apps/core/extension/皮肤切换/js/modules/dynamic-skin-resolver.js`。
- 按钮入口：`apps/core/extension/皮肤切换/extension.js`。

### 改珍宝阁/如真

- 开盒、库存、奖励、动画：`apps/core/extension/如真重置版/hooks/czg.js`。
- 如真配置项：`apps/core/extension/如真重置版/config/index.js`。
- 如真大厅顶部资源：`apps/core/extension/如真重置版/main/OnloadSplash.js`。
- 元宝/商品/道具定义：`apps/core/extension/斗转星移/class/public.js`。

### 改全局道具消耗

- 统一接口：`apps/core/noname/game/index.js`。
- 主背包和道具定义：`apps/core/extension/斗转星移/class/public.js`。
- 一将成名显示副本：`apps/core/extension/一将成名/utils/BackpackManager.js`。
- 十周年UI手气卡：`apps/core/extension/十周年UI/src/features/luckyCard.js`。
- 点将/换将入口：身份、斗地主、斗转、一将成名对应选将文件。

### 改移动版武将池/经济池

- 标准映射：`apps/core/noname/library/mobile-character-map.js`。
- 缺失和去重记录：`apps/core/noname/library/mobile-character-map.missing.md`。
- 导出：`scripts/export-mobile-character-map.mjs`。
- 阶段说明：`docs/mobile-character-map-progress.md`。
- 不要直接从 `lib.character` 全量生成最终经济池。

## 已知风险和技术问题

- 浏览器实际动画、皮肤、开盒、选将无法在工具里完整验证，需要用户实测并给日志。
- 用户关闭很多武将包，扩展中找不到技能是正常情况，应安全跳过。
- 中文路径搜索有时不稳定，必要时用 PowerShell 辅助。
- 十周年UI `luckyCard.js` 曾是压缩单行文件，后续修改要谨慎精确定位。
- `皮肤切换` 目录被 Git 忽略，提交时要强制 add。
- 动态皮肤不能用本地扫描结果覆盖总配置，因为用户本地文件不完整。
- 本地浏览器存储不能防作弊，目前目标是正常流程限制。
- 移动版品质、价格、获取方式、权重未定，不能提前按本地包名、ID、贴图推断。

## Git 记录

最近已提交的重要提交：

- `85301e4c9 feat: add character economy tooling and unlock groundwork`
- `a949fca92 feat: add dynamic skin scan and mapping data`

动画质感最新改动在当前工作区，若要提交，需要先检查状态和 diff，不要把 `log/localhost-*.log` 等浏览器日志提交进去。

## 后续优先事项

1. 让用户浏览器实测新动画配置，重点看用牌、出牌、指示线、连续结算是否更顺。
2. 根据反馈微调 `effect_animation_profile` 的参数，优先改 `get.effectProfile()`，不要分散改多个调用点。
3. 如需继续提升动皮流畅度，再评估 `皮肤切换/animation.js` 的 OffscreenCanvas 和 `animations.js` 的 FPS 限制。
4. 若继续移动版武将映射，按包逐步补 `mobile-character-map.js`，缺实现写 missing，不做假占位。
5. 若继续经济系统，等用户提供品质/价格/权重模板后再接招募令、重复补偿、将魂/元宝/史诗宝珠解锁。
