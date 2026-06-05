import { lib, game, ui, get, ai, _status } from "../../../noname.js";

export function caojinyu() {
	Object.assign(lib.skill.yuqi, {
		intro: {
			content(storage, player) {
				var info = lib.skill.yuqi.getInfo(player);
				return '<div class="text center">距离：' + info[0] + "<br>观看牌堆顶：" + info[1] + "<br>给别人：" + info[2] + "<br>给自己：" + info[3] + "</div>";
			},
		},
	});
	Object.assign(lib.skill.shanshen, {
		async cost(event, trigger, player) {
			const bool = !player.hasAllHistory("sourceDamage", function (evt) {
				return evt.player == trigger.player;
			});
			const list = get.info("yuqi").getInfo(player);
			const result = await player
				.chooseControl("<span class=thundertext>距离(" + list[0] + ")</span>", "<span class=firetext>观看牌堆顶(" + list[1] + ")</span>", "<span class=greentext>给别人(" + list[2] + ")</span>", "<span class=yellowtext>给自己(" + list[3] + ")</span>", "cancel2")
				.set("prompt", get.prompt(event.skill))
				.set("prompt2", "令〖隅泣〗中的一个数字+2" + (bool ? "并回复1点体力" : ""))
				.set("ai", function () {
					const player = _status.event.player,
						info = lib.skill.yuqi.getInfo(player);
					if (
						info[0] < info[3] &&
						game.countPlayer(function (current) {
							return get.distance(player, current) <= info[0];
						}) < Math.min(3, game.countPlayer())
					) {
						return 0;
					}
					if (info[3] < info[1] - 1) {
						return 3;
					}
					if (info[1] < 5) {
						return 1;
					}
					if (
						info[0] < 5 &&
						game.hasPlayer(function (current) {
							return current != player && get.distance(player, current) > info[0];
						})
					) {
						return 0;
					}
					return 2;
				})
				.forResult();
			if (result.control != "cancel2") {
				event.result = {
					bool: true,
					cost_data: [result.control, result.index],
				};
			}
		},
	});
	//娴静标记
	Object.assign(lib.skill.xianjing, {
		async cost(event, trigger, player) {
			const list = get.info("yuqi").getInfo(player);
			const result = await player
				.chooseControl("<span class=thundertext>距离(" + list[0] + ")</span>", "<span class=firetext>观看牌堆顶(" + list[1] + ")</span>", "<span class=greentext>交给别人(" + list[2] + ")</span>", "<span class=yellowtext>交给自己(" + list[3] + ")</span>", "cancel2")
				.set("prompt", get.prompt(event.skill))
				.set("prompt2", "令〖隅泣〗中的一个数字+1")
				.set("ai", function () {
					const player = _status.event.player,
						info = lib.skill.yuqi.getInfo(player);
					if (
						info[0] < info[3] &&
						game.countPlayer(function (current) {
							return get.distance(player, current) <= info[0];
						}) < Math.min(3, game.countPlayer())
					) {
						return 0;
					}
					if (info[3] < info[1] - 1) {
						return 3;
					}
					if (info[1] < 5) {
						return 1;
					}
					if (
						info[0] < 5 &&
						game.hasPlayer(function (current) {
							return current != player && get.distance(player, current) > info[0];
						})
					) {
						return 0;
					}
					return 2;
				})
				.forResult();
			if (result.control != "cancel2") {
				event.result = {
					bool: true,
					cost_data: [result.control, result.index],
				};
			}
		},
		async content(event, trigger, player) {
			const {
				cost_data: [control, index],
			} = event;
			const name = "yuqi";
			const list = get.info(name).getInfo(player);
			list[index] = Math.min(5, list[index] + 1);
			game.log(player, "将", control, "数字改为", "#y" + list[index]);
			player.markSkill(name);
			get.info(name).init(player, name);

			console.log("list", control, list);

			if (player.isDamaged()) {
				return;
			}
			const result = await player
				.chooseControl("<span class=thundertext>距离(" + list[0] + ")</span>", "<span class=firetext>观看牌堆顶(" + list[1] + ")</span>", "<span class=greentext>交给别人(" + list[2] + ")</span>", "<span class=yellowtext>交给自己(" + list[3] + ")</span>", "cancel2")
				.set("prompt", get.prompt(event.skill))
				.set("prompt2", "令〖隅泣〗中的一个数字+1")
				.set("ai", function () {
					const player = _status.event.player,
						info = lib.skill.yuqi.getInfo(player);
					if (
						info[0] < info[3] &&
						game.countPlayer(function (current) {
							return get.distance(player, current) <= info[0];
						}) < Math.min(3, game.countPlayer())
					) {
						return 0;
					}
					if (info[3] < info[1] - 1) {
						return 3;
					}
					if (info[1] < 5) {
						return 1;
					}
					if (
						info[0] < 5 &&
						game.hasPlayer(function (current) {
							return current != player && get.distance(player, current) > info[0];
						})
					) {
						return 0;
					}
					return 2;
				})
				.forResult();
			if (result.control != "cancel2") {
				const { control, index } = result;
				list[index] = Math.min(5, list[index] + 1);
				game.log(player, "将", control, "数字改为", "#y" + list[index]);
				player.markSkill(name);
				get.info(name).init(player, name);
			}
		},
	});
}
