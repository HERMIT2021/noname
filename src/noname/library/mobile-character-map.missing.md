# Mobile Character Map Missing Records

This file records mobile-standard characters that are intentionally not mapped yet because the matching local implementation is missing or not confirmed.

## 神话再临

The source list once contained repeated package membership for these characters. The mapping keeps only one copy to avoid duplicated display/unlock/shop entries.

| Mobile Pack | Group | Mobile Name | Current Status | Notes |
| --- | --- | --- | --- | --- |
| 神话再临 | 风 | 曹仁 | Deduplicated | `曹仁` is already mapped in `神话再临 / 标风包` as `old_caoren`. The duplicate `风包` entry is intentionally omitted. |
| 神话再临 | 风 | 夏侯渊 | Deduplicated | `夏侯渊` is already mapped in `神话再临 / 标风包` as `re_xiahouyuan`. The duplicate `风包` entry is intentionally omitted. |

## 兵势篇

These two characters are new mobile versions. Do not map them to older/non-equivalent local variants for now.

| Mobile Pack | Group | Mobile Name | Current Status | Notes |
| --- | --- | --- | --- | --- |
| 兵势篇 | 正 | 势王昶 | Missing local implementation | Existing local alternatives include `xianding:dc_wangchang`, `tw:tw_wangchang`, `clan:clan_wangchang`, but they are not the target mobile 势 version. Add mapping after the correct character and skills are implemented. |
| 兵势篇 | 势 | 势孙綝 | Missing local implementation | Existing local alternatives include `huicui:dc_sunchen` and `offline:pe_sunchen`, but they are not the target mobile 势 version. Add mapping after the correct character and skills are implemented. |

## 谋攻篇

These characters are listed in the mobile 谋攻篇 source list but do not currently have exact local implementations in the JS game. Do not map them to non-谋 or unrelated variants.

| Mobile Pack | Group | Mobile Name | Current Status | Notes |
| --- | --- | --- | --- | --- |
| 谋攻篇 | 知 | 谋甄姬 | Missing local implementation | Existing local `zhenji` is 标风/标准 version, not 谋甄姬. Add after the correct 谋 version and skills are implemented. |
| 谋攻篇 | 知 | 谋田豫 | Missing local implementation | No exact `谋田豫` implementation found. Add after the correct 谋 version and skills are implemented. |
| 谋攻篇 | 同 | 谋刘桢 | Missing local implementation | No exact `谋刘桢` implementation found. Add after the correct 谋 version and skills are implemented. |

## 始计篇

These characters are listed in the mobile 始计篇 source list but do not currently have exact local implementations in the JS game.

| Mobile Pack | Group | Mobile Name | Current Status | Notes |
| --- | --- | --- | --- | --- |
| 始计篇 | 信 | 糜夫人 | Mapped with selected variant | Two exact local candidates exist: `sp:mifuren` and `xianding:dc_mifuren`. The mapping currently uses `xianding:dc_mifuren` as the mobile-standard candidate. Review if later skill comparison says otherwise. |
| 始计篇 | 仁 | 张仲景 | Missing local implementation | No exact `张仲景` implementation found. Add after the correct mobile version and skills are implemented. |
| 始计篇 | 勇 | 宗预 | Missing local implementation | No exact `宗预` implementation found. Add after the correct mobile version and skills are implemented. |
