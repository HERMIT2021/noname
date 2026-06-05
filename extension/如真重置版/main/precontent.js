//1.函数执行时机为游戏数据加载之前，联机模式亦可加载
import { EXTENSION_NAME, baseUrl, loadScript } from "../utils/index.js";
import { lib, game, ui, get, ai, _status } from "../../../noname.js";
import { RZSH } from "./RZSH.js";

export async function precontent() {
	let userInfo = sessionStorage.getItem("userInfo");
	if (!userInfo) {
		window.location.href = `${baseUrl}pages/login/rzsh.html`;
		return;
	}
	await loadScript(`${baseUrl}lib/pixi6.min.js`);
	await loadScript(`${baseUrl}lib/gsap.min.js`);
	lib.init.css(`${baseUrl}style`, "rzsh");
	lib.init.css(`${baseUrl}style`, "cang-zhen-ge");
	lib.onloadSplashes.push(new RZSH());
	const yjStyle = lib.onloadSplashes.find(i => i.id === "style-rzsh").id;
	game.saveConfig("splash_style", yjStyle);
}
