import { lib, game, ui, get, ai, _status } from "../../../noname.js";

export function mozhangfei() {
	if (!lib.config.extension_无名美化_mozhangfei || !lib.skill.olchenshi) {
		return;
	}
	Object.assign(lib.skill.olchenshi.subSkill.rumo, {
		async content(event, trigger, player) {
			skinSwitch.chukuangWorkerApi.playEffect(
				{
					name: `../../../无名美化/animation/mozhangfei/OL_FX_MatchGame_mozhangfei`,
					version: "4.0",
					action: "play",
				},
				{scale:0.8, speed: 1, x: [0, 0.5], y: [0, 0.5] }
			);
			player.addSkill("olrumo");
			await player.recover();
			player.setStorage("olzhuohun_pro", true);
		},
	});
}
