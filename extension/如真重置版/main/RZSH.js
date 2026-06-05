import { lib, game, ui } from "../../../noname.js";

import { createApp } from "../lib/vue.esm-browser.js";
import { EXTENSION_NAME, baseUrl, loadScript } from "../utils/index.js";

import OnloadSplash from "./OnloadSplash.js";

import { DefaultSplash } from "../../../noname/init/onload/default-splash.js";
export class RZSH extends DefaultSplash {
	id = "style-rzsh";
	name = "如真似幻";
	resolve;
	app;
	clicked;
	rootNode;
	async init(node, resolve) {
		this.resolve = resolve;
		this.rzshCon = ui.create.div(".rzshCon", document.body);
		this.app = createApp(OnloadSplash, {
			node,
			click: this.click.bind(this),
		});
		this.app.mount(this.rzshCon);
	}
	preview(node) {
		node.className = "button character";
		node.style.width = "200px";
		node.style.height = `${(node.offsetWidth * 1080) / 2400}px`;
		node.style.display = "flex";
		node.style.flexDirection = "column";
		node.style.alignItems = "center";
		node.style.backgroundSize = "100% 100%";
		node.setBackgroundImage(`${baseUrl}resource/image/splash/${this.id}.png`);
	}
	async dispose(node) {
		this.app.unmount();
		document.body.removeChild(this.rzshCon);
		const targetElement = document.getElementById("pfqhCzg");
		// 检查元素是否存在，存在则删除
		if (targetElement) {
			// 调用remove()方法直接删除元素
			targetElement.remove();
		}
		let yjpixi = document.querySelector(`script[src="${baseUrl}lib/pixi6.min.js"]`);
		let yjgasp = document.querySelector(`script[src="${baseUrl}lib/gsap.min.js"]`);
		document.head.removeChild(yjpixi);
		document.head.removeChild(yjgasp);
		return true;
	}
}
