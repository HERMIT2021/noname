import { lib, game, ui, get, ai, _status } from "../../../noname.js";
import { Jian } from "../utils/utils.js";

export function weigongsunzan() {
	window._WEIGONGSUNZAN = {
		name: "无名美化",
		url: lib.assetURL + "extension/无名美化",
		jineng: {
			name: "../../../无名美化/animation/weigongsunzan/weigongsunzan_jineng",
			speed: 0.8,
			scale: 0.7,
		},
		jindu: {
			name: "../../../无名美化/animation/weizhangliao/lianzhao_jindu",
		},
	};
	Object.assign(lib.skill.dczhuitao, {
		init(player, skill) {
			ui.weigongsunzanjian = new Jian(player, window._WEIGONGSUNZAN, "weigongsunzan","伤害牌");
			player.addSkill(skill + "_mark");
		},
		filter(event, player) {
			const { card } = event;
			//黑色牌+伤害牌
			if (game.hasPlayer(target => target != player && !player.getStorage("dczhuitao_effect").includes(target))) {
				if (get.color(card) == "black" && ui.weigongsunzanjian.powerStatus == null) {
					ui.weigongsunzanjian.addPower();
				} else if (!get.is.damageCard(card) && ui.weigongsunzanjian.powerStatus == "half") {
					if (get.color(card) != "black") {
						ui.weigongsunzanjian.lessPower();
					}
				}
			}



			if (!get.is.damageCard(card)) {
				return false;
			}
			const evt = lib.skill.dcjianying.getLastUsed(player, event);
			if (!evt || !evt.card || evt.dczhuitao) {
				return false;
			}
			return get.color(evt.card) == "black" && game.hasPlayer(target => target != player && !player.getStorage("dczhuitao_effect").includes(target));
		},
		async cost(event, trigger, player) {
			ui.weigongsunzanjian.addPower();
			event.result = await player
				.chooseTarget(get.prompt2(event.skill), (card, player, target) => {
					return target != player && !player.getStorage("dczhuitao_effect").includes(target);
				})
				.set("ai", target => {
					const player = get.player();
				})
				.forResult();
			ui.weigongsunzanjian.lessPower(!event.result.bool);
			if (event.result.bool) {
				dcdAnim.loadSpine(window._WEIGONGSUNZAN.jineng.name, "skel", function () {
					dcdAnim.playSpine(window._WEIGONGSUNZAN.jineng, {
						x: [0, 0.5],
						y: [0, 0.55],
						scale: 0.8,
					});
				});
			}
		},
	});
}
