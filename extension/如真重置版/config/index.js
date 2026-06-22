import { lib, game, ui, get, ai, _status } from "../../../noname.js";
import { EXTENSION_NAME } from "../utils/index.js";
import { config as dyConfig } from "./dynamicSkin.js";
let keys = Object.keys(dyConfig);
let keysMap = {};
keys.forEach(key => {
	keysMap[key] = key;
});
export let gugekeysMap = keysMap;
export function getFileList() {
	return new Promise((resolve) => {
		game.getFileList('extension/如真重置版/resource/theme', function (floders) {
			resolve(floders);
		})
	})
}
export const config = async () => {
	let floders = await getFileList();
	console.log("floders", floders);
	let themeMap = {}
	floders.forEach(folder => {
	    themeMap[folder] = folder;
	})
	return {
		rzsh_tip: {
			name: "原扩展名：如真似幻，倘若二改修复。本扩展仅为学习参考，严禁用于商业用途。",
			clear: true,
		},
		rzsh_title_common: {
			name: "<span style='color: gold; font-weight: bold;'>关注微信公众号（点击复制到粘贴板）：<b style='color:yellow'>无名杀资源库</b> 获取最新版本。</span>",
			clear: true,
			onclick() {
				copyToClipboard("无名杀资源库");
			},
		},
		addBackHomeBtn: {
			name: "游戏结算增加返回主页按钮",
			init: true,
		},
		scollannouncement: {
			name: "大厅狗托播报",
			init: true,
		},
		dtdating: {
			name: "动态大厅（烟花蝴蝶）",
			init: true,
		},
		theme: {
			name: "大厅主题",
			init: floders[0],
			item: themeMap,
			onclick(item) {
				game.saveConfig(`extension_${EXTENSION_NAME}_theme`, item);
			},
		},
		loginGuge: {
			name: "登录页骨骼",
			init: "貂蝉",
			item: keysMap,
			onclick(item) {
				sessionStorage.removeItem("userInfo");
				localStorage.setItem(`${EXTENSION_NAME}_guge`, item);
				game.saveConfig(`extension_${EXTENSION_NAME}_loginGuge`, item);
				setTimeout(() => game.reload(), 100);
			},
		},
		czgRewardSpeed: {
			name: "珍宝阁奖励弹出速度",
			init: "fast",
			item: {
				normal: "默认",
				fast: "较快",
				veryfast: "很快",
				instant: "瞬间",
			},
			intro: "调整珍宝阁开盒后，道具奖励淡入、上浮、错峰出现的速度。",
		},
		czgFastOpen: {
			name: "珍宝阁快速开启",
			init: false,
			intro: "勾选后，开盒界面显示"快速开启"选项，可加速盒子动画。",
		},
		czgFastSpeed: {
			name: "快速开启倍速",
			init: "5",
			item: {
				"2": "2倍速",
				"3": "3倍速",
				"5": "5倍速",
				"10": "10倍速",
			},
			intro: "快速开启时的动画倍速。",
		},
	};
};
