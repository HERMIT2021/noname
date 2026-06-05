import { lib, game, ui, get, ai, _status } from "noname";
export const type = "extension";
//作者不知道是谁 我只是整理了一下整合成扩展，如有侵权，请联系我删除
let skill = {
	olzhuohun: {
		judge(player) {
			const hp = player.getHp(),
				maxHp = player.maxHp;
			if (hp == 0) {
				return "none";
			} else if (hp > Math.round(maxHp / 2) || hp === maxHp) {
				return "high";
			} else if (hp > Math.floor(maxHp / 3)) {
				return "mid";
			} else {
				return "low";
			}
		},
		mod: {
			cardname(card, player) {
				if (_status?.currentPhase == player && card.name == "shan") {
					return "sha";
				}
			},
		},
		trigger: {
			global: ["changeHp", "gainMaxHpAfter", "loseMaxHpAfter"],
		},
		forced: true,
		filter(event, player) {
			let hp = event.player.hp,
				maxHp = event.player.maxHp;
			let judge = (hp, maxHp) => {
				if (hp <= 0) {
					return "none";
				} else if (hp > Math.round(maxHp / 2) || hp === maxHp) {
					return "high";
				} else if (hp > Math.floor(maxHp / 3)) {
					return "mid";
				} else {
					return "low";
				}
			};
			let initialjudge = judge(hp, maxHp),
				list = [initialjudge];
			for (let evt of game.getAllGlobalHistory("everything", evt => ["gainMaxHp", "loseMaxHp", "changeHp"].includes(evt?.name) && evt.player == event.player && evt?.num != 0).reverse()) {
				const name = evt.name;
				if (name == "changeHp") {
					hp += -evt.num;
				} else if (name == "loseMaxHp") {
					maxHp += evt.num;
				} else {
					maxHp += -evt.num;
				}
				list.push(judge(hp, maxHp));
			}
			list = list.reverse();
			list = list.slice(list.findIndex(current => current !== list[0]) === -1 ? list.length : list.findIndex(current => current !== list[0]));
			return list.filter(current => current == initialjudge).length == 1;
		},

		async content(event, trigger, player) {
			const target = trigger.player,
				name = event.name;
			let hp = target.hp,
				maxHp = target.maxHp;
			let judge;
			if (hp <= 0) {
				judge = "none";
			} else if (hp > Math.round(maxHp / 2) || hp === maxHp) {
				judge = "high";
			} else if (hp > Math.floor(maxHp / 3)) {
				judge = "mid";
			} else {
				judge = "low";
			}
			if (player?.getStorage(`${name}_pro`) == true) {
				await player.drawTo(player.maxHp);
				if (judge == "high") {
					target.addTempSkill(`${name}_sha`);
				} else if (judge == "mid") {
					target.addTempSkill("fengyin");
				} else if (judge == "low" && !_status?.dying?.length) {
					await target.loseHp(target.getHp());
				}
			} else {
				await player.draw();
			}
		},
		subSkill: {
			sha: {
				init(player, skill) {
					player.addTip(skill, "灼魂：摸杀");
				},
				onremove(player, skill) {
					player.removeTip(skill);
				},
				charlotte: true,
				forced: true,
				popup: false,
				trigger: {
					player: ["drawBegin"],
				},
				filter(event, player) {
					return event?.num;
				},
				async content(event, trigger, player) {
					trigger.cancel();
					let cards = [];
					while (cards.length < trigger.num) {
						const card = get.cardPile(card => get.name(card) == "sha" && !cards.includes(card));
						if (card) {
							cards.push(card);
						} else {
							break;
						}
					}
					if (cards.length) {
						await player.gain(cards, "gain2");
					}
				},
			},
		},
	},
	olchenshi: {
		group: ["olchenshi_modify", "olchenshi_rumo"],
		trigger: {
			player: "useCard2",
		},
		locked: true,
		filter(event, player) {
			if (event.card.name != "sha" || get.color(event.card) != "black") {
				return false;
			}
			const judge = get.info("olzhuohun").judge(player);
			return game.hasPlayer(target2 => {
				return !event.targets.includes(target2) && get.info("olzhuohun").judge(target2) != judge && lib.filter.targetEnabled2(event.card, player, target2);
			});
		},
		async cost(event, trigger, player) {
			event.result = await player
				.chooseTarget(
					get.prompt2(event.skill),
					(card2, player2, target2) => {
						const event2 = get.event().getTrigger(),
							judge = get.event().judge;
						return !event2.targets.includes(target2) && get.info("olzhuohun").judge(target2) != judge && lib.filter.targetEnabled2(event2.card, player2, target2);
					},
					[1, Infinity]
				)
				.set("ai", target2 => {
					const player2 = get.event().player,
						event2 = get.event().getTrigger();
					return get.effect(target2, event2.card, player2);
				})
				.set("judge", get.info("olzhuohun").judge(player))
				.forResult();
		},
		async content(event, trigger, player) {
			trigger.targets.addArray(event.targets);
		},
		subSkill: {
			rumo: {
				trigger: {
					player: "damageEnd",
					source: "damageSource",
				},
				filter(event, player) {
					return !player.hasSkill("olrumo") && player.getAllHistory("damage", evt => ["juedou", "sha"]?.includes(evt?.card?.name) && evt.num > 0).reduce((sum, evt) => sum + evt.num, 0) + player.getAllHistory("sourceDamage", evt => ["juedou", "sha"]?.includes(evt?.card?.name) && evt.num > 0).reduce((sum, evt) => sum + evt.num, 0) >= 3;
				},
				skillAnimation: "epic",
				animationColor: "metal",
				forced: true,
				async content(event, trigger, player) {
					player.addSkill("olrumo");
					await player.recover();
					player.setStorage("olzhuohun_pro", true);
				},
			},
			modify: {
				trigger: {
					global: "useCardToBegin",
				},
				filter(event, player) {
					if (event.card.name != "sha" || get.color(event.card) != "black") {
						return false;
					}
					return (event.player == player && get.info("olzhuohun").judge(event.target) == get.info("olzhuohun").judge(player)) || (event.player != player && event.target == player && get.info("olzhuohun").judge(event.player) == get.info("olzhuohun").judge(player));
				},
				forced: true,
				async content(event, trigger, player) {
					trigger.setContent(lib.card.juedou.content);
				},
			},
		},
	},
	mbyuli: {
                audio: "ext:抢先武将/audio/skill:6",
		unique: true,
		locked: true,
		trigger: {
			source: "damageBegin1",
			player: "damageBegin",
		},
		forced: true,
		filter(event, player) {
			if (event.source === player) return true;
			return event.player === player && event.nature === "thunder";
		},
		async content(event, trigger, player) {
			if (trigger.source === player&&trigger.player!=player) {
				if (trigger.nature === "thunder") {
					trigger.num++;
				} else {
					trigger.nature = "thunder";
				}
				player.addSkill("mbyuli_atk");
			}else {
				trigger.cancel();
				await player.draw(trigger.num);
				player.addSkill("mbyuli_def");
			}
		},
		subSkill: {
			atk: { charlotte: true },
			def: { charlotte: true },
		},
	},
	mbtingwei: {
                audio: "ext:抢先武将/audio/skill:4",
		marktext: "霆",
		intro: {
			content: "共有#个“霆”",
		},
		trigger: { player: "shaBegin" },
		async content(event, trigger, player) {
			player.addMark("mbtingwei", 4);
			const target = trigger.target;
			let count = 0;
			let selected = [];

			for (let i = 0; i < 1; i++) {
				if (player.countMark("mbtingwei") <= 0) break;
				let choices = [
					["skill_disable", "选项一:非锁定技失效至到下个回合结束"],
					["give_equip", "选项二:交给对方一张装备牌"],
					["add_damage", "选项三:此牌对你造成伤害+1"],
					["random_discard", "选项四:随机弃置你一张牌"],
				];
				const canChoose = choices.some(item => {
					const link = item[0];
					if (selected.contains(link)) return false;
					if (link === "skill_disable") return !target.hasSkill("mbtingwei_fengyin");
					if (link === "give_equip") return target.getCards("e").length > 0;
					if (link === "random_discard") return target.getCards("he").length > 0;
					return true; // add_damage 无硬性条件限制
				});
				if (!canChoose) break;
				const result = await target
					.chooseButton([`霆威：请选择（已选${count}项，剩余标记：${player.countMark("mbtingwei")}）`, [choices, "textbutton"]])
					.set("filterButton", button => {
						const selected = _status.event.selected;
						if (selected.contains(button.link)) return false;

						const target = _status.event.player;
						if (button.link === "skill_disable") return !target.hasSkill("mbtingwei_fengyin");
						if (button.link === "give_equip") return target.getCards("e").length > 0;
						if (button.link === "random_discard") return target.getCards("he").length > 0;
						return true;
					})
					.set("selected", selected)
					.set("ai", function (button) {
						if (_status.event.selected.contains(button.link)) return 0;
						const me = _status.event.player;
						const getWeight = link => {
							if (link === "skill_disable") return me.hasSkillTag("maixue") ? 8 : 3;
							if (link === "give_equip") return me.getCards("e").length > 0 ? 2 : 99;
							if (link === "add_damage") return me.hp > 2 ? 5 : 15;
							if (link === "random_discard") return me.countCards("he") > 0 ? 3 : 99;
							return 10;
						};
						return 1 / getWeight(button.link);
					})
					.forResult();

				if (!result.bool) {
					if (count === 0) target.link(true);
					break;
				} else {
					const choice = result.links[0];
					selected.push(choice);
					count++;
					player.removeMark("mbtingwei", 1);

					if (choice === "skill_disable") {
						target.addTempSkill("mbtingwei_fengyin", { player: "phaseAfter" });
						target.addTempSkill("mbtingwei_effect", { player: "phaseAfter" });
					} else if (choice === "give_equip") {
						const cards = target.getCards("e");
						if (cards.length) {
							await player.gain(cards.randomGet(), target, "give");
						}
					} else if (choice === "add_damage") {
						trigger.baseDamage += 1;
						if (!player.hasSkill("mbtingwei_damage")) {
							player.addTempSkill("mbtingwei_damage");
						}
						player.addMark("mbtingwei_damage", 1, false);
					} else if (choice === "random_discard") {
						await target.randomDiscard();
					}
				}
			}
		},
		subSkill: {
			fengyin: { inherit: "fengyin", charlotte: true },
			effect: {
				charlotte: true,
				mark: true,
				marktext: "封",
				intro: { content: "非锁定技已失效" },
			},
			damage: {
				charlotte: true,
				trigger: { player: "shaAfter" },
				forced: true,
				popup: false,
				content() {
					player.removeSkill("mbtingwei_damage");
					player.removeMark("mbtingwei_damage", player.countMark("mbtingwei_damage"));
				},
			},
		},
	},
	mbjimie: {
                audio: "ext:抢先武将/audio/skill:4",
		limited: true,
		skillAnimation: "epic",
		animationColor: "thunder",
		trigger: { player: "phaseUseEnd" },
		filter(event, player) {
			return player.countMark("mbtingwei") >= 8 && !player.hasSkill("mbjimie_used");
		},
		async cost(event, trigger, player) {
			event.result = await player.chooseTarget("寂灭：消耗8个“霆”，对一名角色造成等同其体力上限的伤害", true).forResult();
		},
		async content(event, trigger, player) {
			player.awakenSkill("mbjimie");
			player.addSkill("mbjimie_used");
			player.removeMark("mbtingwei", 8);
			const target = event.targets[0];
			await target.damage(target.maxHp);
			player.addSkill("mbjimie_refresh");
		},
		subSkill: {
			used: { charlotte: true },
			refresh: {
				charlotte: true,
				trigger: {
					global: ["damageAfter", "drawAfter"],
				},
				forced: true,
				popup: false,
				filter(event, player) {
					return player.hasSkill("mbjimie_used") && player.hasSkill("mbyuli_atk") && player.hasSkill("mbyuli_def");
				},
				async content(event, trigger, player) {
					player.removeSkill("mbjimie_used");
					player.removeSkill("mbjimie_refresh");
					player.removeSkill("mbyuli_atk");
					player.removeSkill("mbyuli_def");
					player.refreshSkill("mbjimie");
				},
			},
		},
	},
};
export default function () {
	return {
		name: "抢先武将",
		editable: true,
		connect: false,
		arenaReady: function () {},
		content: function (config, pack) {},
		prepare: function () {},
		precontent: function (config) {
			lib.translate.qiangxianwujiang = "抢先武将";
			lib.characterSort["mode_extension_抢先武将"] = {
				qiangxian_tiyan: ["dm_zhangfei"],
			};
			console.log("抢先武将加载成功", Object.entries(skill));
			Object.entries(skill).forEach(([key, val]) => {
				lib.skill[key] = val;
			});
			// lib.skill.olzhuohun = skill.olzhuohun;
			// lib.skill.olchenshi = skill.olchenshi;

			// lib.skill.mbyuli = skill.mbyuli;
		},
		config: {},
		help: {},
		package: {
			character: {
				character: {
					dm_zhangfei: ["male", "shu", 5, ["olzhuohun", "olchenshi"], ["ext:抢先武将/image/dm_zhangfei.png"]],
					mb_shen_machao: ["male", "shen", 4, ["mbyuli", "mbtingwei", "mbjimie"],["ext:抢先武将/image/mb_shen_machao.jpg","die:ext:抢先武将/audio/die/mb_shen_machao.mp3"]],
				},
				translate: {
					dm_zhangfei: "OL魔张飞",
					mb_shen_machao: "手杀神马超",
				},
			},
			card: {
				card: {},
				translate: {},
				list: [],
			},
			skill: {
				skill,
				translate: {
					olzhuohun: "灼魂",
					olzhuohun_info: "锁定技，你的回合内：你的【闪】均视为【杀】；一名角色的勾玉首次变为一个颜色后，你摸一张牌。",
					olchenshi: "嗔视",
					olchenshi_info: "锁定技，若其他角色的勾玉颜色与你：不同，你使用黑色【杀】能额外指定其为目标；相同，你对其，或其对你使用的黑色【杀】改为【决斗】。你因【杀】和【决斗】首次造成了或受到了至少3点伤害后，你回复1点体力，修改“灼魂”并入魔。",
					mbjimie: "寂灭",
					mbjimie_info: "限定技，出牌阶段结束时，你可失去8个“霆”，对一名角色造成等于其体力上限的伤害。然后你“驭雳”的两项均执行后，该技能可再次发动。",
					mbyuli: "驭雳",
					mbyuli_info: "锁定技，1.你造成的伤害改为雷电伤害，已是雷电伤害则伤害+1;2.你受到雷电伤害时，防止之并摸等量牌。",
					mbtingwei: "霆威",
					mbtingwei_info: "你使用【杀】指定目标后，可获得4个“霆”标记并选择一名目标角色，其选择任意项（每选择一项，你失去1个“霆”标记）：1.非锁定技失效至其下个回合结束；2.交给你一张装备牌；3.此牌对其造成伤害+1；4.随机弃一张牌若其均不选择，其进入连环状态。",
				},
			},
			intro: "",
			author: "无名玩家",
			diskURL: "",
			forumURL: "",
			version: "1.0",
		},
		files: { character: [], card: [], skill: [], audio: [] },
	};
}
