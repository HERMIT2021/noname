import { lib, game, ui, get, ai, _status } from "noname";
import xydzxy from "./class/Dzxy.js";
import { Other } from "./class/other.js";
export const type = "extension";
export default function () {
	return {
		name: "斗转露头",
		editable: true,
		connect: false,
		arenaReady: function () {},
		content: function (config, pack) {},
		prepare: function () {},
		precontent: function (config) {
			xydzxy.importCSS();
			xydzxy.importJS();
			Other.subscribe();
		},
		config: {
			smartLoutou: {
				name: "智能露头",
				init: "all",
				item: {
					xydzxy: "仅此扩展",
					all: "此扩展与局内武将",
					off: "关闭",
				},
				intro: "自动将武将图调整到合适状态(并不一定准确)",
			},
			smartLoutou_init: {
				name: "智能露头-初始露头",
				init: "none",
				item: {
					none: "无",
					shizhounian: "十周年",
					shousha: "手杀",
				},
				intro: "设置为你当前大部分武将的露头样式即可",
			},
			smartLoutou_back: {
				name: "智能露头-背景露头",
				init: "none",
				item: {
					none: "无",
					shizhounian: "十周年",
					shousha: "手杀",
				},
				intro: "设置为武将底图(没原画显示的小黑)露头样式即可，建议使用手杀的底图露头",
			},
		},
		help: {},
		package: {
			character: {
				character: {},
				translate: {},
			},
			card: {
				card: {},
				translate: {},
				list: [],
			},
			skill: {
				skill: {},
				translate: {},
			},
			intro: "",
			author: "星鲨",
			diskURL: "",
			forumURL: "",
			version: "1.0",
		},
		files: { character: [], card: [], skill: [], audio: [] },
	};
}
