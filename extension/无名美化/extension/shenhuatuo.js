import { lib, game, ui, get, ai, _status } from "../../../noname.js";

export function initWuLingXiss() {
	lib.init.css(lib.assetURL + "extension/无名美化/css", "wuling");
}
export function shenhuatuo() {
	window._SHENHUATUO = {
		assetUrl: lib.assetURL + "extension/无名美化/image/wuling/",
		wqxtx: {
			// loop: true,
			name: "../../../无名美化/animation/shenhuatuo/SS_skillwqx",
		},
		nameMap: {
			虎: "hu",
			鹿: "lu",
			熊: "xiong",
			猿: "yuan",
			鹤: "he",
		},
	};
	//来源/参考自 Sakura美化(作者@柴油鹿鹿)   搬运请标注来源
	Object.assign(lib.skill.wuling, {
		async content(event, trigger, player) {
			const { target } = event;

			target.addAdditionalSkill(`wuling_${player.playerid}`, "wuling_wuqinxi");

			const next = player.chooseToMove(`五灵：调整向${get.translation(target)}传授的“五禽戏”顺序`);

			const cards = [lib.skill.wuling.wuqinxi, createCard];
			next.set("list", [["", cards]]);
			next.set("processAI", processAI);

			const result = await next.forResult();
			const sortedWuqinxi = result.moved[0].map(card => card[2]);
			game.log(target, "习得的五禽戏顺序为", "#g" + sortedWuqinxi.join("、"));
			sortedWuqinxi.unshift(sortedWuqinxi[0]);
			target.storage.wuling_wuqinxi = sortedWuqinxi;
			lib.skill.wuling.updateMark(target);
			dcdAnim.loadSpine(window._SHENHUATUO.wqxtx.name, "skel", function () {
				game.playAudio("../extension/无名美化/audio/shenhuatuo/wqxtx.mp3");
				dcdAnim.playSpine(window._SHENHUATUO.wqxtx, {
					scale: lib.device ? 0.77 : 1,
					speed: 1,
					x: [0, 0.5],
					y: [0, 0.5],
				});
			});
			sortedWuqinxi.forEach((name, index) => {
				let t = setTimeout(
					function () {
						let div = ui.create.div(".wuqinxi-common", document.body);
						div.style.cssText += `background-image: url("${window._SHENHUATUO.assetUrl + window._SHENHUATUO.nameMap[name]}.png");left:${15 + 14 * index}%;`;
						//有问题的自己调15 14两个数字，一个是初始位置距离左边多少距离  一个是每个小人距离多少位置
						let nameDiv = ui.create.div(".wqxhu-name", div);
						nameDiv.classList.add("wuqinxi-name");
						nameDiv.style.cssText += `background-image: url("${window._SHENHUATUO.assetUrl}name_${window._SHENHUATUO.nameMap[name]}.png");`;
						let t1 = setTimeout(
							function () {
								div.delete();
								clearTimeout(t);
								clearTimeout(t1);
							},
							2400 - index * 370
						);
					},
					1070 + index * 370
				);
			});
			game.delay(0, 4080);
			return;

			function createCard(item, type, position, noclick, node) {
				// node = ui.create.buttonPresets.vcard(lib.skill.wuling.wuqinxiMap2[item][0], type, position, noclick);
				// node.node.range.innerHTML = lib.skill.wuling.wuqinxiMap2[item][1];
				// node.node.range.style.bottom = "2.5px";
				// node.node.range.style.width = "100%";
				// node.node.range.style.right = "0%";
				// node.node.range.style.textAlign = "center";
				node = ui.create.div(".card.button", position);
				node.style.cssText += `background-image: url("${window._SHENHUATUO.assetUrl}card_${window._SHENHUATUO.nameMap[item]}.webp");background-size:cover;`;
				node._link = node.link = [null, null, item];
				node._customintro = [node => `五禽戏：${node.link[2]}`, node => lib.skill.wuling.wuqinxiMap[lib.skill.wuling.wuqinxi.indexOf(node.link[2])].slice(2)];
				return node;
			}

			function processAI() {
				const event = get.event().getParent();
				const { player, target } = event;

				const spirits = [];
				let nextPlayer = player;
				do {
					nextPlayer = nextPlayer.getNext();
					if (get.attitude(player, nextPlayer) < 0) {
						spirits.add("熊");
						break;
					}
				} while (nextPlayer != target);

				if (!spirits.length) {
					spirits.add("猿");
				}

				const effectOk = get.recoverEffect(target, player, player) > 0;
				const hasBadCards = target.hasCard(card => {
					const vcard = {
						name: card.viewAs || card.name,
						cards: [card],
					};
					return get.effect(target, vcard, target, target) < -1;
				}, "j");

				if (effectOk || hasBadCards) {
					spirits.add("鹿");
				}

				const others = lib.skill.wuling.wuqinxi.slice().removeArray(spirits);
				do {
					others.randomSort();
				} while (others.length > 1 && others[0] == "鹿");
				return [spirits.concat(others).map(i => ["", "", i])];
			}
		},
	});
}
