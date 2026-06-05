import { lib, game, ui, get, ai, _status } from "../../../noname.js";

export function shitaishici() {
	window._SHITAISHICI = {
		url: lib.assetURL + "extension/无名美化",
		SS_taishici_jineng: {
			name: "../../../无名美化/animation/shitaishici/SS_taishici_jineng",
			speed: 0.8,
		},
		SS_staishici_jineng: {
			name: "../../../无名美化/animation/shitaishici/义凌万象/SS_staishici_jineng",
			speed: 0.8,
		},
	};
	Object.assign(lib.skill.potzhenfeng, {
		skillAnimation: false,
	});
	Object.assign(lib.skill.potzhenfeng.chooseButton, {
		backup(links) {
			return {
				item: links[0],
				skillAnimation: false,
				log: false,
				init() {
					let anName = lib.config.extension_无名美化_newshitaishici;
					dcdAnim.loadSpine(window._SHITAISHICI[anName], "skel", function () {
						dcdAnim.prepSpine(window._SHITAISHICI[anName]);
					});
				},
				async content(event, trigger, player) {
					let anName = lib.config.extension_无名美化_newshitaishici;
					player.awakenSkill("potzhenfeng");
					if (get.info(event.name).item === "recover") {
						player.logSkill("potzhenfeng", null, null, null, [null]);
						let action = anName == "SS_taishici_jineng" ? "play2" : "play";
						dcdAnim.loadSpine(window._SHITAISHICI[anName].name, "skel", function () {
							if (anName == "SS_staishici_jineng") {
								game.playAudio("..", "extension", "无名美化", "animation", "shitaishici", "义凌万象", "effect_shiTaiShiCi_skill_2026_1");
							}
							dcdAnim.playSpine(
								{
									...window._SHITAISHICI[anName],
									action,
								},
								{
									// scale: lib.device ? 0.8 : 1,
									speed: 1,
								}
							);
						});
						try {
							if (lib.config.extension_无名美化_shitaishiciqf) {
								game.qhly_changeDynamicSkin(player.name, "义凌万象·木");
							}
						} catch (error) {}
						player.changeSkin({ characterName: "pot_taishici" }, "pot_taishici_shadow1");
						await player.recover(2);
					} else {
						let dialog = [],
							skills = ["pothanzhan", "potzhanlie"].filter(skill => player.hasSkill(skill, null, null, false)),
							list = [
								["hp", "当前体力值"],
								["damagedHp", "当前已损失体力值"],
								["countplayer", "场上存活角色数"],
							];
						dialog.push("振锋：修改" + skills.map(skill => "〖" + get.translation(skill) + "〗").join("和") + "描述中的“X”为...");
						for (const skill of skills) {
							dialog.push('<div class="text center">' + get.translation(skill) + "</div>");
							dialog.push([list.map(item => [item[0] + "|" + skill, item[1]]), "tdnodes"]);
						}
						const result = await player
							.chooseButton(dialog, [1, Math.min(2, skills.length)], true)
							.set("filterButton", button => {
								return !ui.selected.buttons.some(but => but.link.split("|")[1] === button.link.split("|")[1]);
							})
							.set("ai", button => {
								const player = get.player();
								switch (button.link.split("|")[0]) {
									case "hp":
										return player.getHp();
									case "damagedHp":
										return player.getDamagedHp();
									case "countplayer":
										return game.countPlayer();
								}
							})
							.forResult();
						if (result?.bool && result.links?.length) {
							player.logSkill("potzhenfeng", null, null, null, [get.rand(3, 4)]);
							let changeList = [];
							for (const link of result.links) {
								const [change, skill] = link.split("|");
								changeList.push(change);
								player.storage[skill] = change;
								player.popup(skill);
								game.log(player, "修改", "#g【" + get.translation(skill) + "】", "的", "#yX", "为", "#g" + list.find(item => item[0] === change)[1]);
							}
							let actionName = "play2";
							let skinName = "义凌万象·木";
							if (anName == "SS_staishici_jineng") {
								actionName = "play";
							}

							if (changeList[0]) {
								switch (changeList[0]) {
									case "hp":
										actionName = "play4";
										if (anName == "SS_staishici_jineng") {
											actionName = "play3";
										}
										skinName = "义凌万象·火";
										player.changeSkin({ characterName: "pot_taishici" }, "pot_taishici_shadow2");
										break;
									case "damagedHp":
										actionName = "play3";
										if (anName == "SS_staishici_jineng") {
											actionName = "play2";
										}
										skinName = "义凌万象·土";

										player.changeSkin({ characterName: "pot_taishici" }, "pot_taishici_shadow3");
										break;
									case "countplayer":
										actionName = "play5";
										if (anName == "SS_staishici_jineng") {
											actionName = "play4";
										}
										skinName = "义凌万象·水";

										player.changeSkin({ characterName: "pot_taishici" }, "pot_taishici_shadow4");
								}
							} else {
								player.changeSkin({ characterName: "pot_taishici" }, "pot_taishici_shadow1");
							}

							var shitaishici = {
								// scale: lib.device ? 0.8 : 1,
								speed: 1,
							};
							try {
								if (lib.config.extension_无名美化_shitaishiciqf) {
									game.qhly_changeDynamicSkin(player.name, skinName);
								}
							} catch (error) {}
							dcdAnim.loadSpine(window._SHITAISHICI[anName].name, "skel", function () {
								if (anName == "SS_staishici_jineng") {
									let audioName = actionName == "play" ? "1" : actionName.replace("play", "");
									game.playAudio("..", "extension", "无名美化", "animation", "shitaishici", "义凌万象", "effect_shiTaiShiCi_skill_2026_" + audioName);
								}
								dcdAnim.playSpine(
									{
										...window._SHITAISHICI[anName],
										action: actionName,
									},
									shitaishici
								);
							});
						}
					}
				},
			};
		},
	});
}
