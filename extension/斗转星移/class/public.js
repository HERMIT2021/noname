import { DEle } from "./baseEle.js";
import { lib, game, ui, get, ai, _status } from "../../../noname.js";
import dzxy from "./Dzxy.js";
import { Jiesuan } from "./jiesuan.js";
import { ScreenAdapter } from "./ScreenAdapter.js";
import doudizhuStats from "./DoudizhuStats.js";

export class PropDiv extends DEle {
	/**
	 *
	 * @param {*} icon 道具ID
	 * @param {*} count 道具数量
	 * @param {*} countString 显示的数量提示 有些可能不是 'x5'样式
	 */
	constructor(icon, count, countString) {
		super(ui.create.div(".dz-prop-box"));
		this.init(icon, count, countString);
	}
	init(icon, count, countString) {
		if (!Number.isInteger(count)) {
			console.warn("道具数量只能为整型");
			return;
		}

		let countx = Math.abs(count);
		if (!countString) countString = (count >= 0 ? "X" : "-") + countx;

		this.ID = icon;
		this.count = count;
		let sx = this.getSX();
		this.ditu = ui.create.div(".dz-prop-ditu", this.ele); //正常必要
		this.bgx = ui.create.div(".pubui_prop_bg.hidden", this.ditu);
		this.bgy = ui.create.div(".pubui_prop_bg2.hidden", this.ditu);
		this.bg = ui.create.div(".dz-prop-bg", this.ditu); //正常必要
		this.bgActive = ui.create.div(".dz-prop-bg-active.hidden", this.ditu);
		this.img = ui.create.div(".dz-prop-img", this.ditu); //正常必要
		// this.img.setBackgroundImage(`${dzxy.path}image/icon/${icon}.png`);
		this.img.setBackgroundImage(sx.imgPath);
		this.signLabel = ui.create.div(".dz-prop-sign-label.hidden", this.ditu);
		this.nun = ui.create.div(".dz-prop-num", this.ditu); //正常必要
		this.nun.innerHTML = countString;
		if (sx.nocount) this.nun.hide();
		this.name = ui.create.div(".dz-prop-name", this.ditu); //正常必要
		this.name.innerHTML = Props[icon].name || "";
		this.dim = ui.create.div(".dz-prop-dim.hidden", this.ditu);
		this.checked = ui.create.div(".dz-prop-checked.hidden", this.ditu);
		this.noactive();
		this.nosignin();
	}
	showType(type) {
		switch (type) {
			case "sign":
				this.ele.classList.add("sign");
				this.bgx.hide();
				this.name.hide();
				break;
			case "sign2":
				this.ele.classList.add("sign2");
				this.bgx.hide();
				this.name.hide();
				this.specialBg(2);
				break;
			case "package":
				this.ele.classList.add("package");
				this.bgx.show();
				this.topName();
				this.specialBg(1);
				break;
			case "package2":
				this.ele.classList.add("package2");
				this.bgx.hide();
				this.bgy.show();
				this.specialBg(1);
				break;
		}
	}
	topName() {
		this.name.classList.add("top");
	}
	specialBg(type) {
		this.bg.dataset.type = type;
	}
	signin() {
		this.ele.classList.add("signin");
		this.dim.show();
		this.checked.show();
		this.noactive();
	}
	nosignin() {
		this.ele.classList.remove("signin");
		this.dim.hide();
		this.checked.hide();
	}
	active(type) {
		if (type != "jinri" && type != "buqian") return;
		this.ele.classList.add("active");
		this.signLabel.dataset.type = type;
		this.bgActive.show();
		this.signLabel.show();
	}
	noactive() {
		this.ele.classList.remove("active");
		this.signLabel.dataset.type = "";
		this.bgActive.hide();
		this.signLabel.hide();
	}
	getSX() {
		return Props.getProp(this.ID);
	}
}

/**道具类 */
var Props = {
	shenmibaoxiang: {
		name: "神秘宝箱",
		intro: "随机开出各种道具",
		type: "daoju",
		use() {
			//this.id
			let list = [
				["paiweijiaxingka", 2],
				["zhaomuling", 1],
				["yanlingjia", 1],
				["huanjiangka", 10],
				["shouqika", 10],
				["huanledou", 600],
				["yinbi", 300],
				["jinpiao", 300],
				["gaimingka", 1],
				["jianghun", 100],
				["yanling", 100],
			];
			for (let i = 0; i < 10; i++) {
				let ran = list.randomGet();
				propToast.addToast(ran[0], ran[1]);
			}
			Props.changeCount(this.id, -1);
		},
		useAll() {
			let count = Props.getCount(this.id);
			for (let i = 0; i < count; i++) this.use();
		},
		//后续属性添加
	},
	paiweijiaxingka: {
		name: "排位加星卡",
		intro: "排位模式获得胜利时可以额外加一颗星",
		type: "daoju",
		//后续属性添加
	},
	zhaomuling: {
		name: "招募令",
		intro: "必中一个武将，有可能开出稀有武将哦",
		type: "daoju",
		//后续属性添加
	},
	yanlingjia: {
		name: "雁翎甲",
		intro: "必中一件武将皮肤，有可能开出稀有皮肤哦",
		type: "daoju",
		//后续属性添加
	},
	huanjiangka: {
		name: "换将卡",
		intro: "可以让你额外拥有选择武将机会的神奇道具",
		type: "daoju",
		//后续属性添加
	},
	shouqika: {
		name: "手气卡",
		intro: "可以重新抽取游戏开始时的4张手牌",
		type: "daoju",
		//后续属性添加
	},
	huanledou: {
		name: "欢乐豆",
		intro: "可在欢乐斗地主中使用！可赢取金票哦！",
		type: "daoju",
		//后续属性添加
	},
	yinbi: {
		name: "银币",
		intro: "游戏内活动获得，用于兑换武将和稀有道具",
		type: "cailiao",
		//后续属性添加
	},
	jinpiao: {
		name: "金票",
		intro: "游戏内活动获得，用于兑换武将和稀有道具",
		type: "cailiao",
		//后续属性添加
	},
	gaimingka: {
		name: "改名卡",
		intro: "用于改头换面，重新做人",
		type: "daoju",
		//后续属性添加
	},
	jianghun: {
		name: "将魂",
		intro: "制作武将的原材料，十分珍贵",
		type: "cailiao",
		//后续属性添加
	},
	yanling: {
		name: "雁翎",
		intro: "制作武将皮肤和解锁皮肤动态权限的原材料，十分珍贵",
		type: "daoju",
		//后续属性添加
	},
	daojulibao: {
		name: "道具礼包",
		intro: "打开可获得手气卡*2，换将卡*2",
		type: "lihe",
		use() {
			//this.id
			let list = [
				["huanjiangka", 2],
				["shouqika", 2],
			];
			for (let i = 0; i < list.length; i++) {
				propToast.addToast(list[i][0], list[i][1]);
			}
			Props.changeCount(this.id, -1);
		},
		useAll() {
			let count = Props.getCount(this.id);
			let list = [
				["huanjiangka", 2],
				["shouqika", 2],
			];
			for (let i = 0; i < list.length; i++) {
				propToast.addToast(list[i][0], list[i][1] * count);
			}
			Props.changeCount(this.id, -count);
		},
	},
	// mark:添加新的道具
	shishibaozhu: {
		name: "史诗宝珠",
		intro: "史诗宝珠",
		type: "daoju",
		//后续属性添加
	},
	shishibaozhusuipian: {
		name: "史诗宝珠碎片",
		intro: "十个史诗宝珠碎片可以合成一个史诗宝珠",
		type: "daoju",
		dyintro() {
			let count = Props.getCount("shishibaozhusuipian");
			return `十个史诗宝珠碎片可以合成一个史诗宝珠`;
		},
		display: false,
		nocount: false,
		imgPath: `${dzxy.path}image/icon/shishibaozhusuipian.png`,
		synthesis() {
			let sp = Props.getCount("shishibaozhusuipian");
			if (sp < 10) {
				dzxy.create.bottomBarTip("史诗宝珠碎片不足,无法合成", document.body);
				return false;
			}
			let n = Math.floor(sp / 10);
			Props.changeCount("shishibaozhusuipian", n * -10);
			propToast.addToast("shishibaozhu", n);
		},
	},
	yuanbao: {
		name: "元宝",
		intro: "全局通用货币，可用于购买珍宝阁宝箱等道具。",
		type: "cailiao",
		imgPath: "extension/如真重置版/resource/cangZhenGe/items/620044.png",
	},
	czg_box: {
		name: "珍宝阁宝箱",
		intro: "可在如真重置版珍宝阁中开启一次奖励。",
		type: "daoju",
		imgPath: `${dzxy.path}image/icon/shenmibaoxiang.png`,
	},
	dianjiangka: {
		name: "点将卡",
		intro: "用于军争和斗地主休闲模式的自由选将。",
		type: "daoju",
		display: true,
		imgPath: "extension/如真重置版/resource/cangZhenGe/items/600006.png",
	},
	shop_czg_box_5: {
		name: "珍宝阁宝箱*5",
		intro: "使用1000元宝购买5个珍宝阁宝箱。",
		dyintro() {
			return `使用1000元宝购买5个珍宝阁宝箱<br>(当前元宝：${Props.getCount("yuanbao")})`;
		},
		type: "shangdian",
		display: true,
		nocount: true,
		imgPath: `${dzxy.path}image/icon/shenmibaoxiang.png`,
		use() {
			return Props.buyCzgBox(5, 1000);
		},
	},
	shop_czg_box_10: {
		name: "珍宝阁宝箱*10",
		intro: "使用2000元宝购买10个珍宝阁宝箱。",
		dyintro() {
			return `使用2000元宝购买10个珍宝阁宝箱<br>(当前元宝：${Props.getCount("yuanbao")})`;
		},
		type: "shangdian",
		display: true,
		nocount: true,
		imgPath: `${dzxy.path}image/icon/shenmibaoxiang.png`,
		use() {
			return Props.buyCzgBox(10, 2000);
		},
	},
	shop_czg_box_20: {
		name: "珍宝阁宝箱*20",
		intro: "使用4000元宝购买20个珍宝阁宝箱。",
		dyintro() {
			return `使用4000元宝购买20个珍宝阁宝箱<br>(当前元宝：${Props.getCount("yuanbao")})`;
		},
		type: "shangdian",
		display: true,
		nocount: true,
		imgPath: `${dzxy.path}image/icon/shenmibaoxiang.png`,
		use() {
			return Props.buyCzgBox(20, 4000);
		},
	},
	shop_czg_box_50: {
		name: "珍宝阁宝箱*50",
		intro: "使用10000元宝购买50个珍宝阁宝箱。",
		dyintro() {
			return `使用10000元宝购买50个珍宝阁宝箱<br>(当前元宝：${Props.getCount("yuanbao")})`;
		},
		type: "shangdian",
		display: true,
		nocount: true,
		imgPath: `${dzxy.path}image/icon/shenmibaoxiang.png`,
		use() {
			return Props.buyCzgBox(50, 10000);
		},
	},
	//暂时放包裹里 后面在移出去
	shop_huanjiangka: {
		name: "换将卡*50",
		intro: "使用1600金票兑换50张换将卡",
		dyintro() {
			let remainCount = dzxy.getCF("time")["shop_huanjiangka"]["remainCount"];
			let count_jp = Props.getCount("jinpiao");
			return `使用1600金票兑换50张换将卡<br>(今日剩余兑换次数：${remainCount}/10;当前金票：${count_jp})`;
		},
		type: "shangdian",
		display: true,
		nocount: true,
		imgPath: `${dzxy.path}image/icon/huanjiangka.png`,
		use() {
			let jp = Props.getCount("jinpiao");
			if (jp < 1600) {
				dzxy.create.bottomBarTip("金票不足", document.body);
				return false;
			}
			let timeInfo = dzxy.getCF("time")["shop_huanjiangka"];
			if (timeInfo.remainCount <= 0) {
				dzxy.create.bottomBarTip("今日剩余兑换次数不足", document.body);
				return false;
			}
			Object.assign(timeInfo, dzxy.getDate("nyr"));
			timeInfo.remainCount--;

			Props.changeCount("jinpiao", -1600);
			propToast.addToast("huanjiangka", 50);
			dzxy.saveCF("time");
		},
		useAll() {
			while (true) {
				let bool = this.use();
				if (bool == false) break;
			}
			return false;
		},
	},
	shop_shouqika: {
		name: "手气卡*50",
		intro: "使用1600金票兑换50张手气卡",
		dyintro() {
			let remainCount = dzxy.getCF("time")["shop_shouqika"]["remainCount"];
			let count_jp = Props.getCount("jinpiao");
			return `使用1600金票兑换50张手气卡<br>(今日剩余兑换次数：${remainCount}/10;当前金票：${count_jp})`;
		},
		type: "shangdian",
		display: true,
		nocount: true,
		imgPath: `${dzxy.path}image/icon/shouqika.png`,
		use() {
			let jp = Props.getCount("jinpiao");
			if (jp < 1600) {
				dzxy.create.bottomBarTip("金票不足", document.body);
				return false;
			}
			let timeInfo = dzxy.getCF("time")["shop_shouqika"];
			if (timeInfo.remainCount <= 0) {
				dzxy.create.bottomBarTip("今日剩余兑换次数不足", document.body);
				return false;
			}
			Object.assign(timeInfo, dzxy.getDate("nyr"));
			timeInfo.remainCount--;

			Props.changeCount("jinpiao", -1600);
			propToast.addToast("shouqika", 50);
			dzxy.saveCF("time");
		},
		useAll() {
			while (true) {
				let bool = this.use();
				if (bool == false) break;
			}
			return false;
		},
	},
	shop_huanledou: {
		name: "欢乐豆*600",
		intro: "使用1000金票兑换600欢乐豆",
		dyintro() {
			let count_jp = Props.getCount("jinpiao");
			let max = Math.floor(count_jp / 1000);
			return `使用1000金票兑换600欢乐豆<br>(当前金票：${count_jp}，最多可兑换${max}次)`;
		},
		type: "shangdian",
		display: true,
		nocount: true,
		imgPath: `${dzxy.path}image/icon/huanledou.png`,
		use() {
			let jp = Props.getCount("jinpiao");
			let max = Math.floor(jp / 1000);
			if (max <= 0) {
				dzxy.create.bottomBarTip("金票不足（需要1000金票）", document.body);
				return false;
			}
			let input = prompt(`当前金票：${jp}，每次消耗1000金票兑换600欢乐豆\n最多可兑换${max}次，请输入兑换次数：`, max);
			if (input === null) return false;
			let times = parseInt(input);
			if (isNaN(times) || times <= 0) {
				dzxy.create.bottomBarTip("输入无效", document.body);
				return false;
			}
			times = Math.min(times, max);
			Props.changeCount("jinpiao", -times * 1000);
			propToast.addToast("huanledou", times * 600);
		},
	},
	shop_shishibaozhu_czgbox: {
		name: "史诗宝珠→盒子",
		intro: "消耗1个史诗宝珠兑换50个珍宝阁盒子",
		dyintro() {
			let count_sbz = Props.getCount("shishibaozhu");
			return `消耗1个史诗宝珠兑换50个珍宝阁盒子<br>(当前史诗宝珠：${count_sbz})`;
		},
		type: "shangdian",
		display: true,
		nocount: true,
		imgPath: `${dzxy.path}image/icon/shishibaozhu.png`,
		use() {
			let sbz = Props.getCount("shishibaozhu");
			if (sbz < 1) {
				dzxy.create.bottomBarTip("史诗宝珠不足", document.body);
				return false;
			}
			Props.changeCount("shishibaozhu", -1);
			propToast.addToast("czg_box", 50);
		},
		useAll() {
			while (true) {
				let bool = this.use();
				if (bool == false) break;
			}
			return false;
		},
	},
	shop_jinpiao_shishibaozhu: {
		name: "金票→史诗宝珠",
		intro: "使用15000金票兑换1个史诗宝珠",
		dyintro() {
			let count_jp = Props.getCount("jinpiao");
			let max = Math.floor(count_jp / 15000);
			return `使用15000金票兑换1个史诗宝珠<br>(当前金票：${count_jp}，最多可兑换${max}个)`;
		},
		type: "shangdian",
		display: true,
		nocount: true,
		imgPath: `${dzxy.path}image/icon/shishibaozhu.png`,
		use() {
			let jp = Props.getCount("jinpiao");
			let max = Math.floor(jp / 15000);
			if (max <= 0) {
				dzxy.create.bottomBarTip("金票不足（需要15000金票）", document.body);
				return false;
			}
			let input = prompt(`当前金票：${jp}，每次消耗15000金票兑换1个史诗宝珠\n最多可兑换${max}个，请输入兑换个数：`, max);
			if (input === null) return false;
			let times = parseInt(input);
			if (isNaN(times) || times <= 0) {
				dzxy.create.bottomBarTip("输入无效", document.body);
				return false;
			}
			times = Math.min(times, max);
			Props.changeCount("jinpiao", -times * 15000);
			propToast.addToast("shishibaozhu", times);
		},
	},
	/*--------------------------------------------------------------------------------------------------------*/
	/**
	 * 获取所有道具数组
	 * 本应该是合起来放一块的 后面写的懒得改了
	 * @returns 所有道具数组
	 */
	getPropList() {
		let list = [];
		for (let i in this) {
			if (typeof this[i] == "object" && this[i].name != undefined) list.add(i);
		}
		return list;
	},
	/**
	 * 将道具分类
	 * @returns
	 */
	sort() {
		let map = {};
		let f = prop => {
			if (typeof prop.type != "string" && !Array.isArray(prop.type)) return;
			if (typeof prop.type == "string") {
				if (!map[prop.type]) map[prop.type] = {};
				map[prop.type][prop.id] = prop;
			} else {
				prop.type.forEach(j => {
					if (!map[j]) map[j] = {};
					map[j][prop.id] = prop;
				});
			}
		};
		for (let i in this) {
			if (typeof this[i] == "object" && this[i].name != undefined) f(this[i]);
		}
		return map;
	},
	/**
	 * 道具数量的改变
	 * @param {*} propID ID
	 * @param {*} changeCount 改变值
	 * @returns
	 */
	changeCount(propID, changeCount) {
		if (typeof this[propID] != "object") return;
		if (!Number.isInteger(changeCount)) return;
		if (game.changeGlobalItemCount) {
			game.changeGlobalItemCount(propID, changeCount);
			return;
		}

		let packageInfo = dzxy.getCF("package");
		if (packageInfo[propID] == undefined) packageInfo[propID] = {};
		if (packageInfo[propID]["count"] == undefined) packageInfo[propID]["count"] = 0;
		packageInfo[propID]["count"] += changeCount;

		let maxCount = this[propID].maxCount;
		let minCount = this[propID].minCount;
		if (typeof maxCount == "number" && maxCount < packageInfo[propID]["count"]) packageInfo[propID]["count"] = maxCount;
		if (typeof minCount == "number" && minCount > packageInfo[propID]["count"]) packageInfo[propID]["count"] = minCount;

		dzxy.saveCF("package");
		if (propID == "yuanbao") window.rzshRefreshYuanbao?.();
	},
	/**
	 * 获取道具的数量
	 * @param {*} propID ID
	 * @returns 数量
	 */
	getCount(propID) {
		if (game.getGlobalItemCount) return game.getGlobalItemCount(propID);
		let packageInfo = dzxy.getCF("package");
		if (packageInfo[propID] == undefined) return 0;
		if (!packageInfo[propID]["count"]) return 0;
		return packageInfo[propID]["count"];
	},
	getProp(propID) {
		let prop = this[propID];
		if (prop == undefined) return {};
		return prop;
	},
	buyCzgBox(count, price) {
		let yuanbao = this.getCount("yuanbao");
		if (yuanbao < price) {
			dzxy.create.bottomBarTip("元宝不足", document.body);
			return false;
		}
		this.changeCount("yuanbao", -price);
		propToast.addToast("czg_box", count);
		return true;
	},
};
//加默认值
for (let i in Props) {
	Props[i].id = i; //ID
	//包裹显示问题
	if (Props[i].maxCount == undefined) Props[i].maxCount = 99999999;
	if (Props[i].minCount == undefined) Props[i].minCount = -99999999;
	if (Props[i].imgPath == undefined) Props[i].imgPath = `${dzxy.path}image/icon/${i}.png`;
}
dzxy.Props = Props;
export { Props };

game.tryUseDianjiangCard = function (reason = "自由选将") {
	return game.tryUseDzxyProp("dianjiangka", "点将卡", reason);
};

game.tryUseDzxyProp = function (propId, propName, reason = "使用道具") {
	if (game.useGlobalItem) return game.useGlobalItem(propId, propName, reason);
	if (!window.dzxy?.Props) return true;
	if (dzxy.Props.getCount(propId) <= 0) {
		dzxy.create.bottomBarTip(`${reason}需要消耗1张${propName}，当前${propName}不足`, document.body);
		return false;
	}
	dzxy.propToast.addToast(propId, -1);
	return true;
};

class PropToast {
	toastList = [];
	timer = null;
	active = false;
	createArea() {
		if (!this.toastArea) {
			this.tempArea = ui.create.div(".dz-temp-tip-area", document.body);
			ScreenAdapter.add({
				node: this.tempArea,
				update: true,
				callback: (node, scale) => {
					node.style.zoom = window.inSplash ? scale : scale * 1.1;
				},
			});
			this.toastArea = ui.create.div(".dz-prop-toasts", this.tempArea);
		}
	}
	start() {
		if (this.active) return;
		this.active = true;
		this.timer = setInterval(() => {
			this.handleNext();
		}, 500);
	}
	stop() {
		clearInterval(this.timer);
		this.active = false;
	}
	handleNext() {
		if (this.toastList.length > 0) {
			let next = this.toastList.shift();
			this.toastArea.append(next);
			dzxy.playAudio("audio/base/Notice02.mp3");
			let allItems = document.querySelectorAll(".dz-prop-toast");
			for (let i = 0; i < allItems.length; i++) {
				let targetTop = (allItems.length - i - 1) * 75;
				allItems[i].style.bottom = `${targetTop}px`;
			}

			let t = 2000;
			setTimeout(() => {
				next.classList.add("anim2");
			}, t);
			setTimeout(() => {
				next.remove();
			}, t + 1000);
		} else {
			this.stop();
		}
	}
	/**
	 *
	 * @param {*} icon id
	 * @param {*} count 数量
	 * @param {*} countString 文字
	 */
	addToast(icon, count, countString) {
		let toast = ui.create.div(".dz-prop-toast.anim1");
		toast.propText = ui.create.div(".prop-text", toast);
		toast.prop = new PropDiv(icon, count);
		toast.prop.showType("sign");
		toast.prop.nun.hide();
		toast.prop.setParentNode(toast.propText);

		let countx = Math.abs(count);
		if (!countString) countString = (toast.prop.getSX().name || "") + (count >= 0 ? "X" : "-") + countx;
		toast.text = ui.create.div(".ptext", countString, toast.propText);
		this.toastList.push(toast);
		Props.changeCount(icon, count);
		this.start();
	}
}
export let propToast = new PropToast();
dzxy.propToast = propToast;
propToast.createArea();

function addSkill_shouqika() {
	lib.skill._dzxy_shouqika = {
		charlotte: true,
		forced: true,
		trigger: { global: "gameDrawAfter" },
		filter: function (event, player) {
			if (!(get.mode() == "versus" && get.config("versus_mode", "versus") == "two")) return false;
			return player == game.me;
		},
		content: function () {
			"step 0";
			event.sqkNum = dzxy.Props.getCount("shouqika");
			event.num = 7;
			("step 1");
			if (event.num && event.sqkNum) player.chooseBool(`本场还可更换${event.num}次手牌(剩余手气卡${event.sqkNum})`);
			else event.finish();
			("step 2");
			if (result.bool) {
				var hs = player.getCards("h");
				game.addVideo("lose", player, [get.cardsInfo(hs), [], [], []]);
				for (var i = 0; i < hs.length; i++) {
					hs[i].discard(false);
				}
				player.directgain(get.cards(hs.length));
				event.num--;
				event.sqkNum--;
				dzxy.Props.changeCount("shouqika", -1);
				event.goto(1);
			}
		},
	};
}
addSkill_shouqika();

function getPlayerTotalStat(player) {
	const total = {
		damage: 0,
		damaged: 0,
		gain: 0,
		cards: 0,
		kills: 0,
		skills: 0,
	};
	if (!player || !Array.isArray(player.stat)) return total;
	for (const stat of player.stat) {
		if (!stat) continue;
		total.damage += Number(stat.damage) || 0;
		total.damaged += Number(stat.damaged) || 0;
		total.gain += Number(stat.gain) || 0;
		total.kills += Number(stat.kill) || 0;
		if (stat.card) {
			for (const name in stat.card) total.cards += Number(stat.card[name]) || 0;
		}
		if (stat.skill) {
			for (const name in stat.skill) total.skills += Number(stat.skill[name]) || 0;
		}
	}
	return total;
}

function getAlivePlayerCount(filter) {
	if (!Array.isArray(game.players)) return 0;
	return game.players.filter(filter).length;
}

function getIdentityPerformanceBonusRate(player) {
	const stat = getPlayerTotalStat(player);
	const playerCount = Math.max(game.players?.length || 0, (game.players?.length || 0) + (game.dead?.length || 0), get.playerNumber?.() || 0);
	let score = 0;
	score += Math.min(60, stat.damage * 12);
	score += Math.min(70, stat.kills * 35);
	score += Math.min(20, stat.cards * 0.5);
	score += Math.min(15, stat.gain * 0.3);
	if (player?.isAlive?.()) score += 15;
	if (stat.damaged <= Math.max(1, Math.floor(playerCount / 3))) score += 10;
	if (player?.identity == "zhu" && player.isAlive?.()) score += 15;
	else if (["zhong", "mingzhong"].includes(player?.identity) && game.zhu?.isAlive?.()) score += 12;
	else if (player?.identity == "fan" && !game.zhu?.isAlive?.()) score += 12;
	else if (player?.identity == "nei" && player.isAlive?.() && getAlivePlayerCount(current => current.identity != "commoner") <= 1) score += 15;
	const rate = Math.min(0.65, Math.max(0, score / 220));
	return rate >= 0.15 ? rate : 0.15;
}

function getDoudizhuPerformanceBonusRate(player) {
	const stat = getPlayerTotalStat(player);
	const isDizhu = player && player == game.zhu;
	let score = 0;
	score += Math.min(40, stat.damage * (isDizhu ? 12 : 14));
	score += Math.min(30, stat.kills * 25);
	score += Math.min(16, stat.cards * 0.65);
	score += Math.min(10, stat.gain * 0.2);
	if (player?.isAlive?.()) score += 12;
	if (!isDizhu && game.players?.some(current => current != player && current.identity == "fan" && current.isAlive?.())) score += 8;
	if (isDizhu && getAlivePlayerCount(current => current != player) == 0) score += 10;
	if (stat.damaged == 0) score += 6;
	const rate = Math.min(0.2, Math.max(0, score / 450));
	return rate >= 0.1 ? rate : 0;
}

function getYuanbaoPerformanceBonus(mode, baseAmount) {
	if (!Number.isInteger(baseAmount) || baseAmount <= 0 || !game.me) return 0;
	const rate = mode == "identity" ? getIdentityPerformanceBonusRate(game.me) : mode == "doudizhu" ? getDoudizhuPerformanceBonusRate(game.me) : 0;
	return Math.max(0, Math.floor(baseAmount * rate));
}

// 对局结束
lib.onover.push(result => {
	let mode = get.mode();
	let submode = get.config(mode + "_mode", mode);
	let isIdentity8MVP = false;
	if (mode == "identity") {
		const playerCount = Math.max(game.players?.length || 0, (game.players?.length || 0) + (game.dead?.length || 0), get.playerNumber?.() || 0);
		if (playerCount >= 8) {
			// 检查是否MVP
			let list = [];
			for (let p of game.players) {
				let score = { player: p, damage: 0, damaged: 0, cure: 0, help: 0, state: 100, all: 0 };
				score.cure += p.dzxy_mvp?.cure || 0;
				score.help += p.dzxy_mvp?.help || 0;
				for (let s of p.stat) {
					if (s.damage != undefined) score.damage += s.damage * 3;
					if (s.damaged != undefined) score.damaged += s.damaged * 1;
					if (s.kill != undefined) score.damage += (s.kill || 0) * 3;
				}
				score.all = score.damage + score.damaged + score.cure + score.help + score.state;
				list.push(score);
			}
			let mvp = list.reduce((a, b) => a.all > b.all ? a : b);
			isIdentity8MVP = mvp.player == game.me;
		}
	}
	let shouldGiveYuanbao = result && ["identity", "doudizhu"].includes(mode);
	if (shouldGiveYuanbao && !isIdentity8MVP) {
		shouldGiveYuanbao = Math.random() < 0.75;
	}
	if (shouldGiveYuanbao) {
		const randomRange = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
		const getYuanbaoRange = () => {
			if (mode == "identity") {
				const playerCount = Math.max(game.players?.length || 0, (game.players?.length || 0) + (game.dead?.length || 0), get.playerNumber?.() || 0);
				if (playerCount >= 8) {
					if (isIdentity8MVP) {
						let stat = getPlayerTotalStat(game.me);
						let dmg = stat.damage, kills = stat.kills, cards = stat.cards;
						if (dmg >= 35 && kills >= 6) return [5888, 12888];
						if (dmg >= 30 && kills >= 3) return [3888, 6666];
						if (dmg >= 20 && kills >= 2) return [2888, 5000];
						if (dmg >= 10 || kills >= 2 || cards >= 20) return [1888, 3888];
						if (dmg >= 5 || kills >= 1 || cards >= 10) return [888, 2888];
					}
					return [500, 3800];
				}
				if (playerCount >= 5) return [200, 1600];
				return [200, 1600];
			}
			if (mode == "doudizhu") {
				const doudizhuMode = _status.mode || submode;
				if (doudizhuMode == "huanle") return [300, 1500];
				if (doudizhuMode == "zhizun") return [400, 1800];
				return [100, 888];
			}
			return [100, 888];
		};
		const [min, max] = getYuanbaoRange();
		const baseAmount = randomRange(min, max);
		const bonusAmount = getYuanbaoPerformanceBonus(mode, baseAmount);
		const totalAmount = baseAmount + bonusAmount;
		propToast.addToast("yuanbao", totalAmount, bonusAmount > 0 ? `元宝X${totalAmount}（表现加成+${bonusAmount}）` : undefined);
	}
	//欢乐斗地主
	if (mode == "doudizhu" && submode == "huanle") {
		if (!dzxy.ddzBeilv) return;
		let jpCount = dzxy.ddzBeilv * 100,
			hldCount = 10;
		if (game.me == game.zhu) {
			jpCount *= 2;
			hldCount *= 2;
		}
		
		let myhld = Props.getCount("huanledou");
		if (myhld < hldCount) {
			propToast.addToast("huanledou", 0, "欢乐豆不足，无法获得奖励");
			Jiesuan.use(result, 0, 0);
		} else {
			if (result) {
				propToast.addToast("huanledou", -hldCount);
				propToast.addToast("jinpiao", jpCount);
				Jiesuan.use(true, jpCount, -hldCount);
			} else {
				propToast.addToast("huanledou", -jpCount);
				Jiesuan.use(false, 0, -jpCount);
			}
		}
	}
	//至尊场
	if (mode == "doudizhu" && submode == "zhizun") {
		if (!dzxy.ddzBeilv) return;
		let bmFee = 300 * dzxy.ddzBeilv; // 报名费 = 300 × 倍率
		if (game.me == game.zhu) {
			// 地主
			if (result) {
				// 地主胜利: 扣80欢乐豆消耗 + 获得报名费×2金票
				propToast.addToast("huanledou", -80);
				propToast.addToast("jinpiao", bmFee * 2);
				Jiesuan.use(true, bmFee * 2, -80);
			} else {
				// 地主失败: 扣报名费×2欢乐豆
				let myhld = Props.getCount("huanledou");
				if (myhld < bmFee * 2) {
					propToast.addToast("huanledou", 0, "欢乐豆不足，扣除失败");
					Jiesuan.use(false, 0, 0);
				} else {
					propToast.addToast("huanledou", -(bmFee * 2));
					Jiesuan.use(false, 0, -(bmFee * 2));
				}
			}
		} else {
			// 农民
			if (result) {
				// 农民胜利: 扣40欢乐豆消耗 + 获得报名费×1金票
				propToast.addToast("huanledou", -40);
				propToast.addToast("jinpiao", bmFee);
				Jiesuan.use(true, bmFee, -40);
			} else {
				// 农民失败: 扣报名费欢乐豆
				let myhld = Props.getCount("huanledou");
				if (myhld < bmFee) {
					propToast.addToast("huanledou", 0, "欢乐豆不足，扣除失败");
					Jiesuan.use(false, 0, 0);
				} else {
					propToast.addToast("huanledou", -bmFee);
					Jiesuan.use(false, 0, -bmFee);
				}
			}
		}
	}
	//斗地主连胜奖励
	if (mode == "doudizhu" && (submode == "huanle" || submode == "zhizun")) {
		let streakData = {};
		try {
			streakData = JSON.parse(localStorage.getItem("doudizhuStats") || "{}");
		} catch (e) {}
		if (typeof streakData.currentStreak !== "number") streakData.currentStreak = 0;
		if (typeof streakData.maxStreak !== "number") streakData.maxStreak = 0;
		let currentStreak = streakData.currentStreak;
		if (result) {
			currentStreak++;
		} else {
			currentStreak = 0;
		}
		streakData.currentStreak = currentStreak;
		if (result && currentStreak > streakData.maxStreak) {
			streakData.maxStreak = currentStreak;
		}
		if (typeof streakData.totalGames !== "number") streakData.totalGames = 0;
		streakData.totalGames++;
		localStorage.setItem("doudizhuStats", JSON.stringify(streakData));

		if (result && currentStreak >= 3 && currentStreak % 3 === 0) {
			let base = 300 + Math.floor((currentStreak - 3) / 3) * 150;
			let bonus = submode == "zhizun" ? 250 : 0;
			let total = base + bonus;
			propToast.addToast("huanledou", total);
		}
		if (result && currentStreak === 11) {
			let douBonus = submode == "zhizun" ? 2000 : 1000;
			let boxBonus = submode == "zhizun" ? 100 : 50;
			propToast.addToast("huanledou", douBonus);
			propToast.addToast("czg_box", boxBonus);
		}
	}
	//非欢乐/至尊斗地主
	if (mode != "doudizhu" || (mode == "doudizhu" && submode != "huanle" && submode != "zhizun")) {
		let myhld = Props.getCount("huanledou");
		if (myhld < 100) {
			let random = Math.random();
			if (random > 0.4) propToast.addToast("huanledou", 30);
		}
		if (mode == "doudizhu") {
			Jiesuan.use(result, 0, 0);
		}
	}

	let list = [
		{
			id: "daojulibao",
			count: 1,
			prob: 0.2,
			max: 20,
		},
		{
			id: "shouqika",
			count: 1,
			prob: 0.5,
			max: 100,
		},
		{
			id: "huanjiangka",
			count: 1,
			prob: 0.5,
			max: 100,
		},
		{
			id: "jianghun",
			count: 20,
			prob: 0.5,
		},
	];

	for (let i of list) {
		let random = Math.random();
		if (random > i.prob) continue;
		let myPropCount = Props.getCount(i.id);
		if (myPropCount < i.max || i.max == undefined) propToast.addToast(i.id, i.count);
	}
});

// 斗地主退出/逃跑视为输（仅退出按钮/刷新触发，关浏览器不触发）
window.addEventListener("beforeunload", () => {
	if (_status.over) return;
	if (get.mode() != "doudizhu") return;
	sessionStorage.setItem("_doudizhu_exit", "1");
});
if (sessionStorage.getItem("_doudizhu_exit") === "1") {
	sessionStorage.removeItem("_doudizhu_exit");
	let streakData = {};
	try {
		streakData = JSON.parse(localStorage.getItem("doudizhuStats") || "{}");
	} catch (e) {}
	if (typeof streakData.currentStreak !== "number") streakData.currentStreak = 0;
	if (streakData.currentStreak > 0) {
		streakData.currentStreak = 0;
		if (typeof streakData.totalGames !== "number") streakData.totalGames = 0;
		streakData.totalGames++;
		localStorage.setItem("doudizhuStats", JSON.stringify(streakData));
	}
}
// 正常结算后清除退出标记
lib.onover.push(result => {
	sessionStorage.removeItem("_doudizhu_exit");
});

// 农民死亡后不显示重新开始按钮
lib.onover.push(() => {
	let mode = get.mode();
	if (mode != "doudizhu") return;
	if (game.me && game.me.isDead() && game.me.identity == "fan") {
		if (ui.restart) {
			ui.restart.close();
			delete ui.restart;
		}
	}
});
