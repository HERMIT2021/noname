 //3.函数执行时机为游戏数据加载之后、界面加载之前
import { EXTENSION_NAME } from "../utils/index.js";
export function content(config,pack){
	    lib.onover.push(async function (bool) {
		if (lib.config[`extension_${EXTENSION_NAME}_addBackHomeBtn`]) {
			ui.create.control("返回主页", function () {
				game.returnToRzshHome?.();
			});
		}
	});
}
