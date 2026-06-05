import { lib, game, ui, get, ai, _status } from "../../../noname.js";

//来源/参考自 标记补充(作者@西瓜)
export function shentaishici() {
	window._SHENTAISHICI = {
		shimingjishibai: {
			name: "../../../无名美化/animation/shentaishici/shimingjishibai",
		},
	};
	lib.skill.tspowei.subSkill.fail.content = async function (event, trigger, player) {
		dcdAnim.loadSpine(window._SHENTAISHICI.shimingjishibai.name, "skel", function () {
			dcdAnim.playSpine(window._SHENTAISHICI.shimingjishibai, {
				scale: 0.8,
				speed: 1,
				x: [0, 0.55],
				parent: player,
			});
		});
		game.log(player, "使命失败");
		player.awakenSkill("tspowei");
		if (player.hp < 1) {
			await player.recover(1 - player.hp);
		}
		const num = player.countCards("e");
		if (num > 0) {
			await player.chooseToDiscard("e", true, num);
		}
	};
}
