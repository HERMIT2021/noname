import { lib, game, ui, get, ai, _status } from "../../../noname.js";

//代码素材来自 扶苏
export function olcaochun() {
	Object.assign(lib.skill.olshanjia, {
		async content(event, trigger, player) {
			await player.draw(3);
			const { bool } = await player
				.chooseToUse(
					function (card, player, event) {
						if (get.name(card) !== "sha") {
							return false;
						}
						return lib.filter.cardEnabled.apply(this, arguments);
					},
					get.translation(event.name) + "：是否使用一张【杀】？"
				)
				.set("oncard", () => {
					get.event().player?.chat("雪豹我们走");
					skinSwitch.chukuangWorkerApi.playEffect(
						{
							name: "../../../无名美化/animation/fx_moucaochun/FX_MouCaoChun_02",
							version: "4.0",
							action: "play",
						},
						{ scale: 0.5 }
					);
					game.playAudio("../extension/无名美化/audio/olcaochun/Skill_CaoChun.mp3");
				})
				.set("addCount", false)
				.forResult();
			if (!bool) {
				player.chat("雪豹闭嘴");
			}
			player.addTempSkill("olshanjia_effect", { global: ["phaseChange", "phaseBeforeStart", "phaseAfter"] });
		},
	});

}
