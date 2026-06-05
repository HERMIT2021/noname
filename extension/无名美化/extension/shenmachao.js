import { lib, game, ui, get, ai, _status } from "../../../noname.js";

export function shenmachao() {
	if (!lib.config.extension_无名美化_shenmachao || !lib.skill.mbjimie) {
		return;
	}
	window._SHENMACHAO = {
		jimie: {
			name: "../../../无名美化/animation/shenmachao/SS_smc_dazhao",
		},
	};
	function playShenmachaoJimie() {
		return new Promise(resolve => {
			dcdAnim.loadSpine(window._SHENMACHAO.jimie.name, "skel", function () {
				let smcan = dcdAnim.playSpine(window._SHENMACHAO.jimie, {
					x: [0, 0.5],
					y: [0, 0.5],
				});
				smcan.oncomplete = () => {
					dcdAnim.stopSpine(smcan);
					smcan = null;
					resolve();
				};
			});
		});
	}
	Object.assign(lib.skill.mbjimie, {
		async content(event, trigger, player) {
            await playShenmachaoJimie();
			player.awakenSkill("mbjimie");
			player.addSkill("mbjimie_used");
			player.removeMark("mbtingwei", 8);
			const target = event.targets[0];
			await target.damage(target.maxHp);
			player.addSkill("mbjimie_refresh");
		},
	});
}
