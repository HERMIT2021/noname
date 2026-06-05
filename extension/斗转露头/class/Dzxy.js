import { lib, game, ui, get, ai, _status } from "../../../noname.js";
import playerConfig from "../playerConfig.js";
class Dzxy  {
	/**扩展路径 */
	path = 'extension/斗转露头/';
	/**config用的简写 */
	dz = 'extension_斗转露头_';
	/**小边框 */
	sborder = [];
	/**大边框 */
	bborder = [];
	/**小头像 */
	xiaotouxiang = [];
	/**武将包数组 */
	allPackList;
	/**武将 */
	character = {
	};
	/**武将包 */
	charPack = {};
	/**翻译 */
	translate = {};
	/**露头缓存 */
	loutouCache = {};
	/**存放其他扩展的变量 */
	extVar = {
		hok: {},
	};
	
	
	importCSS() {
		lib.init.css(`${lib.assetURL}${this.path}css`, "other");
		lib.init.css(`${lib.assetURL}${this.path}css`, "public");
	}
	importJS() {
		lib.init.js(`${lib.assetURL}${xydzxy.path}plugin`, "iscroll");
	}
	/**初始化config */
	initCF(key, value) {
		if (lib.config[`${this.dz}${key}`] == undefined) game.saveExtensionConfig('斗转露头', key, value);
	}
	/**保存config */
	saveCF(key, value) {
		if (value == undefined) game.saveExtensionConfig('斗转露头', key, lib.config[`${this.dz}${key}`]);
		else game.saveExtensionConfig('斗转露头', key, value);
	}
	/**获取config */
	getCF(key) {
		return lib.config[`${xydzxy.dz}${key}`];
	}
	
	
	
	/**
	 * 
	 * @param {HTMLDivElement} Ele 要添加事件的元素
	 * @param {number} len 滑动距离
	 */
	scroll_lr(Ele, len) {
		let step = len / 10;
		let scr = function (event, len2) {
			let startL = Ele.scrollLeft;
			if (event.deltaY < 0) {
				Ele.scrollLeft = startL - step;
			} else {
				Ele.scrollLeft = startL + step;
			}
			let change = Math.abs(Ele.scrollLeft - startL);
			if (change == 0) return;
			if (change < len2) {
				len2 -= change;
				requestAnimationFrame(() => scr(event, len2));
			}
		}
		Ele.addEventListener('wheel', (event) => {
			event.preventDefault();
			requestAnimationFrame(() => scr(event, len));
		});
	}
	isModeBeautified() {
		return lib.config[`${xydzxy.dz}chooseChar_${lib.config.mode}`];
	}
	
	
	
	addLongPress(ele, func) {
		var time;
		ele.addEventListener('touchstart', (evt) => {
			time = setTimeout(func, 500);
		});
		ele.addEventListener('touchend', (evt) => {
			clearTimeout(time);
		});
		ele.addEventListener('touchmove', (evt) => {
			clearTimeout(time);
		});
		ele.onmousedown = function (e) {
			if (e.button == 2) {
				func();
			}
		}
	}
	
	delay(time) {
		return new Promise(resolve => setTimeout(resolve, time != undefined ? time : 10));
	};
	getDate(date) {
		switch (date) {
			case 'nyr':
				let now = new Date();
				let year = now.getFullYear();
				let month = now.getMonth() + 1;
				let day = now.getDate();
				return { year: year, month: month, day: day }
		}
	}
	/**防抖 */
	debounce(func, delay) {
		let timer = null;
		return function (...args) {
			if (timer) {
				clearTimeout(timer);
			}
			timer = setTimeout(() => {
				func.apply(this, args);
				timer = null;
			}, delay);
		};
	}
	/**节流 */
	throttle(func, delay) {
		let lastTime = 0;
		return function (...args) {
			const now = Date.now();
			if (now - lastTime >= delay) {
				func.apply(this, args);
				lastTime = now;
			}
		};
	}
	/**
	 * 删除此扩展配置
	 * xydzxy.deleteDzxyConfig()
	 */
	deleteDzxyConfig() {
		let config = lib.config;
		for (let i in config) {
			if (!i.startsWith('extension_斗转露头')) continue;
			game.saveConfig(i, undefined)
		}
	}
	/**
	 * 打印此扩展配置
	 * xydzxy.logConfig()
	 */
	logConfig() {
		let config = lib.config;
		let o = {}
		for (let i in config) {
			if (!i.startsWith('extension_斗转露头')) continue;
			o[i] = config[i]
		}
		console.log('xydzxy-config--------------', o);
	}
	/**
	 * 序列帧动画
	 * @param {*} node div节点
	 * @param {*} imgList 帧图片数组
	 * @param {number} time 时长(毫秒)
	 * @param {number} delay 延迟(毫秒)
	 * @returns 
	 */
	async frameAnim(node, imgList, time, delay) {
		if (delay != undefined) await xydzxy.delay(delay)
		let frameTime = time / imgList.length;
		for (let i of imgList) {
			node.style.backgroundImage = `url(${i})`;
			await xydzxy.delay(frameTime)
		}
		return node;
	}
	isLocked_back = false;
	lock_back() {
		this.isLocked_back = true;
		setTimeout(() => {
			this.isLocked_back = false;
		}, 10);
	}
	/**
	 * 获取武将图的露头样式
	 * @param {*} imageElement 
	 * @returns 
	 */
	getCharLoutouByImg(imageElement) {
		if (!imageElement || imageElement.naturalWidth == 0 || imageElement.naturalHeight == 0) {
			return 'none';
		}
		let imgW = imageElement.naturalWidth;
		let imgH = imageElement.naturalHeight;

		let check2 = playerConfig.adjustCharLoutou2({ src: imageElement.dataset.originSrc, imgW: imgW, imgH: imgH });
		if (check2 != null) {
			return check2;
		}
		//是这两个宽高直接判断 应该不会有人用露头模板扣原画或是随手裁出这个宽高吧
		if (imgW == 138 && imgH == 253) return 'shousha';
		if (imgW == 400 && imgH == 472) return 'shizhounian';

		if (!this.transparencyCanvas) {
			this.transparencyCanvas = document.createElement('canvas');
		}
		let canvas = this.transparencyCanvas;
		let imgUseRatio = 0.25;
		let ctx = canvas.getContext('2d', { willReadFrequently: true });
		canvas.width = 100;
		canvas.height = 166 * imgUseRatio;

		//Canvas和图片的宽高比
		let canvasRatio = canvas.width / canvas.height;
		let imageRatio = imgW / imgH / imgUseRatio;
		let x, y, drawWidth, drawHeight;
		if (canvasRatio > imageRatio) {
			//宽度铺满
			drawWidth = canvas.width;
			drawHeight = (canvas.width / imgW) * imgH;
			x = 0;
			y = 0;
		} else {
			//高度铺满
			drawHeight = canvas.height / imgUseRatio;
			drawWidth = (canvas.height / imgH) * imgW / imgUseRatio;
			x = (canvas.width - drawWidth) / 2;
			y = 0;
		}
		ctx.drawImage(imageElement, x, y, drawWidth, drawHeight);
		let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
		let data = imageData.data;

		/*
		//前面的四行像素
		let area1 = [];
		for (let y = 0; y < 4; y++) {
		  let tp = 0;
		  for (let x = 0; x < canvas.width; x++) {
			let index = (y * canvas.width + x) * 4;
			let alpha = data[index + 3];
			if (alpha < 150) tp++;
		  }
		  area1.push(tp / canvas.width);
		}
		//前四行水平线透明比都小于0.1的话，可认为是不露头的了
		if (area1.every(i => i < 0.1)) return 'none'
		*/

		//从下往上找到一条水平线透明比大于0.9的
		//模板扣的十周年：9；手杀：22；
		//折中判断
		let slice1 = 18, slice2 = 5;
		//去除两侧可能有白边的情况
		let whiteEdge = 0, needWhiteEdge = 0.05;
		for (let y = canvas.height; y > 0; y--) {
			let tp = 0;
			for (let x = 0; x < canvas.width; x++) {
				let index = (y * canvas.width + x) * 4;
				let alpha = data[index + 3];
				if (alpha < 150) tp++;
			}
			if (y > 30) {
				let Ratio = tp / canvas.width;
				if (Ratio > whiteEdge) whiteEdge = Ratio;
			}
			else if (y <= 30 && tp / canvas.width >= Math.min(0.1, needWhiteEdge + whiteEdge)) {
				if (y >= slice1) return 'shousha';
				else if (y >= slice2) return 'shizhounian';
				else return 'none'
			}
		}
		return 'none';
	}
	/**
	 * 调整露头
	 * @param {*} node 
	 * @returns 
	 */
	adjustCharLoutou(node) {
		if (!node || !node.classList) return;
		let loutou = this.getCF('smartLoutou');
		let bool = false;
		let clist = node.classList;
		//武将
		let hasChar = clist.contains('wujiang-char-img');
		let hasOringinSkin = clist.contains('oringin-skin');
		//皮肤
		let hasSkin = clist.contains('pifu-skin-img');
		//原皮肤
		let isOringinSkin = hasOringinSkin && hasSkin;
		//主将和副将
		let hasPrimaryAvatar = clist.contains('primary-avatar');
		let hasDeputyAvatar = clist.contains('deputy-avatar');
		if (loutou == 'xydzxy') bool = hasChar || isOringinSkin;
		else if (loutou == 'all') bool = hasPrimaryAvatar || hasDeputyAvatar || hasChar || isOringinSkin;
		if (bool) {
			let bgImage = node.style.backgroundImage;
			if (!bgImage) return node;
			let match = bgImage.match(/url\("([^"]+)"\)/);
			if (match) {
				let check1 = playerConfig.adjustCharLoutou1({ src: match[1] });
				if (check1 != null) {
					node.dataset.loutou = check1;
				}
				else {
					let ltCache = xydzxy.loutouCache[match[1]];
					if (ltCache) {
						node.dataset.loutou = ltCache;
						return node;
					}
					let img = new Image();
					/*因为取消调整露头动画过渡时间需要设置
					transition-duration: 0s
					background-repeat: no-repeat
					所以只设置此扩展的*/
					let isDzxyImg = hasChar || isOringinSkin;
					if (isDzxyImg) node.style.backgroundPositionX = '-999px';
					else node.dataset.loutou = this.getCF('smartLoutou_init');
					img.onload = () => {
						node.dataset.loutou = this.getCharLoutouByImg(img);
						if (isDzxyImg) node.style.backgroundPositionX = 'center';
						img = null;
						if (!xydzxy.loutouCache[match[1]] && (hasPrimaryAvatar || hasDeputyAvatar)) {
							xydzxy.loutouCache[match[1]] = node.dataset.loutou;
						}
					};
					img.onerror = () => {
						node.dataset.loutou = this.getCF('smartLoutou_back');
						if (isDzxyImg) node.style.backgroundPositionX = 'center';
						img = null;
						if (!xydzxy.loutouCache[match[1]] && (hasPrimaryAvatar || hasDeputyAvatar)) {
							xydzxy.loutouCache[match[1]] = node.dataset.loutou;
						}
					}
					img.src = match[1];
					img.dataset.originSrc = match[1];
				}
			}
		}
		return node;
	}
}
export default window.xydzxy = new Dzxy();
//自动露头
if (xydzxy.getCF('smartLoutou') != 'off') {
	//setBackgroundImage
	xydzxy.originSetBackgroundImage = HTMLDivElement.prototype.setBackgroundImage;
	HTMLDivElement.prototype.setBackgroundImage = function () {
		xydzxy.originSetBackgroundImage.apply(this, arguments);
		xydzxy.adjustCharLoutou(this);
		return this;
	}
	//setBackground
	xydzxy.originSetBackground = HTMLDivElement.prototype.setBackground;
	HTMLDivElement.prototype.setBackground = function () {
		xydzxy.originSetBackground.apply(this, arguments);
		xydzxy.adjustCharLoutou(this);
		return this;
	}
	lib.arenaReady.push(() => {
		ui.arena.dataset.hdloutou = xydzxy.getCF('smartLoutou_init') == 'none' ? 'none' : 'shizhounian';
	})
}



