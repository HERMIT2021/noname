import { lib, game, ui, get, ai, _status } from "../../../noname.js";

export function olmouzhangxiu() {
	window._OLMOUZHANGXIU = {
		daiji: {
			name: "../../../无名美化/animation/fx_mouzhangxiu/FX_ZhangXiu_DaiJi",
			action: "play2",
			speed: 0.8,
			scale: 0.8,
			loop: true,
			version: "4.0",
		},
		HuiKan: {
			name: "../../../无名美化/animation/fx_mouzhangxiu/FX_ZhangXiu_HuiKan",
			speed: 0.8,
			scale: 0.8,
			version: "4.0",
			x: [250, 0.5],
			y: [-150, 0.5],
		},
		HengSao: {
			name: "../../../无名美化/animation/fx_mouzhangxiu/FX_ZhangXiu_HengSao",
			speed: 0.8,
			scale: 0.8,
			version: "4.0",
			x: [200, 0.5],
			y: [0, 0.5],
		},
		HuiMaQiang: {
			name: "../../../无名美化/animation/fx_mouzhangxiu/FX_ZhangXiu_HuiMaQiang",
			speed: 0.8,
			scale: 0.8,
			version: "4.0",
			x: [300, 0.5],
			y: [0, 0.5],
		},
		QianCi: {
			name: "../../../无名美化/animation/fx_mouzhangxiu/FX_ZhangXiu_QianCi",
			speed: 0.8,
			scale: 0.8,
			version: "4.0",
			x: [200, 0.5],
			y: [0, 0.5],
		},
		ShangTiao: {
			name: "../../../无名美化/animation/fx_mouzhangxiu/FX_ZhangXiu_ShangTiao",
			speed: 0.8,
			scale: 0.8,
			version: "4.0",
			x: [250, 0.5],
			y: [-100, 0.5],
		},
		XiaPi: {
			name: "../../../无名美化/animation/fx_mouzhangxiu/FX_ZhangXiu_XiaPi",
			speed: 0.8,
			scale: 0.8,
			version: "4.0",
			x: [250, 0.5],
			y: [-100, 0.5],
		},
	};
	Object.assign(lib.skill.olsbchoulie, {
		init(player, skill) {
			player.skillArr = [window._OLMOUZHANGXIU.ShangTiao, window._OLMOUZHANGXIU.HuiKan, window._OLMOUZHANGXIU.QianCi, window._OLMOUZHANGXIU.HengSao, window._OLMOUZHANGXIU.XiaPi, window._OLMOUZHANGXIU.HuiMaQiang];
			player.choulieAnNum = 0;
		},
		async content(event, trigger, player) {
			const { targets } = event;
			player.awakenSkill(event.name);
			player.addTempSkill(["olsbchoulie_buff", "olsbchoulie_use"]);
			player.markAuto("olsbchoulie_buff", targets);
			game.playAudio(`../extension/无名美化/audio/olmouzhangxiu/Skill_MouZhangXiu [7].mp3`);
			skinSwitch.chukuangWorkerApi.playEffect(window._OLMOUZHANGXIU.daiji, { loop: true, parent: player });
			
		},
	});
	if (lib.skill.olsbchoulie.subSkill && lib.skill.olsbchoulie.subSkill.buff) {
		//OL谋张绣
		Object.assign(lib.skill.olsbchoulie.subSkill.buff, {
			onremove(player, skill) {
			
				skinSwitch.chukuangWorkerApi.stopEffect(window._OLMOUZHANGXIU.daiji);
				delete player.storage[skill];
			},
			async cost(event, trigger, player) {
				const target = event.indexedData;
				const list = [event.name.slice(0, -"_cost".length), target];
				event.result = await player
					.chooseToDiscard("he")
					.set("prompt", get.prompt2(...list))
					.set("prompt2", `弃置一张牌，视为对${get.translation(target)}使用一张【杀】`)
					.set("ai", card => {
						const player = get.player(),
							target = get.event().getParent().indexedData;
						const vcard = new lib.element.VCard({ name: "sha" });
						return get.effect(target, vcard, player, player) - get.value(card);
					})
					.set("logSkill", list)
					.forResult();

				console.log(event.result);
				if (event.result.bool) {
					game.playAudio(`../extension/无名美化/audio/olmouzhangxiu/Skill_MouZhangXiu [${player.choulieAnNum + 1}].mp3`);
					skinSwitch.chukuangWorkerApi.playEffect(player.skillArr[player.choulieAnNum], { parent: target });
				}
				player.choulieAnNum++;
				if (player.choulieAnNum >= player.skillArr.length) player.choulieAnNum = 0;
			},
		});
	}
}
