import { lib, game, ui, get, ai, _status } from "../../../noname.js";
function refreshDomList(domList, activeClass, activeItem) {
	for (let dom of domList) {
		if (dom === activeItem) {
			dom.classList.add(activeClass);
		} else {
			dom.classList.remove(activeClass);
		}
	}
}
function bodySize() {
	let size = {};
	let body = document.body;
	size.updated = true;
	size.height = body.clientHeight;
	size.width = body.clientWidth;
	return size;
}
export function cangZhenGe() {
	//   ui.window = ui.create.div("#window", document.body);
	//                 ui.arena = ui.create.div("#arena.nome", ui.window);
	// const div = ui.create.div("#pfqhCzg", document.body);
	console.log("window.rzczg_div", window.rzczg_div);
	if (window.rzczg_div) {
		document.body.appendChild(window.rzczg_div);
		return;
	}
	const div = document.createElement("div");
	div.id = "pfqhCzg";
	document.body.appendChild(div);
	window.rzczg_div = div;
	// const cangzhengeCanvasWrapper = ui.create.div(".czg-canvas-wrapper", div);
	const cangzhengeCanvasWrapper = document.createElement("div");
	cangzhengeCanvasWrapper.className = "czg-canvas-wrapper";
	div.appendChild(cangzhengeCanvasWrapper);

	// const bg = ui.create.div(".czgBg", div);
	const bg = document.createElement("div");
	bg.className = "czgBg";
	div.appendChild(bg);

	const relW = 1920; // 参考宽度
	const relH = 1080; // 参考高度

	const ratio = relW / relH; // 以这个比例来进行统一规划
	let bodyW = bodySize().width;
	let bodyH = bodySize().height;
	// const bodyW = window.innerWidth;
	// const bodyH = window.innerHeight;

	// 屏幕分辨率问题, 参考https://blog.51cto.com/u_15064642/4040771
	let dpr = Math.max(window.devicePixelRatio * (window.documentZoom ? window.documentZoom : 1), 1);
	const app = new PIXI.Application({
		// width: actualW/ dpr,
		// height: actualH/ dpr,
		width: bodyW / dpr,
		height: bodyH / dpr,
		backgroundAlpha: 0,
		resolution: dpr,
		antialias: true, // 消除锯齿
		autoDensity: true,
	});
	window.rz_pixiApp = app;
	app.renderer.resize(bodyW, bodyH);
	cangzhengeCanvasWrapper.appendChild(app.view);
	let boxbeijing = null; // 抽卡盒子动画

	// const loadResource = () => {
	//     if (!app.loader.resources.aar_cangbaoge) {
	//
	//     }
	// }

	const loadAnimations = () => {
		app.loader.onError.add(err => {
			console.log("err", err);
		});

		app.loader
			.add("gongxihuode_biankuang", lib.assetURL + "extension/如真重置版/resource/cangZhenGe/spineAni/gongxihuode/gongxihuode_biankuang.skel")
			.add("aar_cangbaoge", lib.assetURL + "extension/如真重置版/resource/cangZhenGe/spineAni/aar_cangbaoge.skel")
			.add("item_board", lib.assetURL + "extension/如真重置版/resource/cangZhenGe/game_hist_headbg.png")
			.add("previewBox", lib.assetURL + `extension/如真重置版/resource/cangZhenGe/奖励预览框.png`)
			.load(onAssetsLoaded);
	};

	function setDefaultAni(spineObj, loop) {
		const animation = spineObj.spineData.animations[0];
		spineObj.state.setAnimationWith(0, animation, loop);
	}
	function canPlayBoxAnimation() {
		return boxbeijing && boxbeijing.state && typeof boxbeijing.state.setAnimation == "function" && typeof boxbeijing.state.addAnimation == "function";
	}
	function openRewardSafely(count) {
		openRewardResult(count);
		totalRewards.totalCount += count;
		localStorage.setItem("czg_total_draws", String(totalRewards.totalCount));
		refreshStatData();
	}
	function playBoxAnimation(count) {
		if (!canPlayBoxAnimation()) {
			openRewardSafely(count);
			return;
		}
		if (lib.config.extension_如真重置版_czgFastOpen) {
			let speed = lib.config.extension_如真重置版_czgFastSpeed || 5;
			boxbeijing.state.timeScale = Number(speed);
		}
		boxbeijing.state.setAnimation(0, "play2", false);
		boxbeijing.state.addAnimation(0, "play1", true, 4);
		let lis = {
			complete: function (track) {
				if (canPlayBoxAnimation()) {
					boxbeijing.state.setAnimation(0, "play1", true);
					boxbeijing.state.removeListener(lis);
				}
				openRewardSafely(count);
			},
		};
		boxbeijing.state.listeners = [lis];
	}
	function getRewardAnimationSpeed() {
		switch (lib.config.extension_如真重置版_czgRewardSpeed) {
			case "normal":
				return { delay: 1, duration: 1 };
			case "veryfast":
				return { delay: 0.45, duration: 0.65 };
			case "instant":
				return { delay: 0.15, duration: 0.35 };
			case "fast":
			default:
				return { delay: 0.65, duration: 0.8 };
		}
	}

	function drawItem(itemInfo, count, resource, hasSpine, index = 0) {
		// 奖励道具
		const rewardItem = new PIXI.Container();
		rewardItem.alpha = 0;
		rewardItem.scale.set(0.52);
		// 边框
		const board = new PIXI.Sprite.from(lib.assetURL + "extension/如真重置版/resource/cangZhenGe/game_hist_headbg.png");
		rewardItem.addChild(board);
		board.visible = true;
		board.scale.set(boardFactor);

		let item;
		if (itemInfo.type === "wujiang") {
			item = new PIXI.Sprite.from(lib.assetURL + `extension/如真重置版/resource/cangZhenGe/wujiang/${itemInfo.id}.png`);
		} else {
			item = new PIXI.Sprite.from(lib.assetURL + `extension/如真重置版/resource/cangZhenGe/items/${itemInfo.id}.png`);
		}

		item.x = boardWidth * 0.04;
		item.y = boardWidth * 0.03;
		item.scale.set(boardFactor * 0.92);
		rewardItem.addChild(item);
		rewardItem.sortableChildren = true;

		const speed = getRewardAnimationSpeed();
		if (hasSpine) {
			setTimeout(() => {
				let chouzhong = new PIXI.spine.Spine(resource.gongxihuode_daojuchuxian.spineData);
				rewardItem.addChild(chouzhong);
				setDefaultAni(chouzhong, false);
				let localPos = chouzhong.getLocalBounds();
				chouzhong.position.set(-localPos.x + (boardWidth - localPos.width) / 2, -localPos.y + (boardWidth - localPos.height) / 2);
				chouzhong.state.timeScale = 0.7;
				chouzhong.scale.set(1.1);
			}, (120 + Math.min(index, 11) * 28) * speed.delay);
		}

		if (itemInfo.gaoji) {
			// 如果是高级道具, 添加边框特效
			let gaojidaoju = new PIXI.spine.Spine(resource.gongxihuode_gaojidaoju.spineData);
			rewardItem.addChild(gaojidaoju);
			setDefaultAni(gaojidaoju, true);
			let localPos = gaojidaoju.getLocalBounds();
			gaojidaoju.position.set(-localPos.x + (boardWidth - localPos.width) / 2 + 2, -localPos.y + (boardWidth - localPos.height) / 2);
			gaojidaoju.state.timeScale = 1;
			gaojidaoju.scale.set(0.86 * boardFactor);
			gaojidaoju.zIndex = -1;
		}

		// 添加宝珠物品的数量
		const countStyle = new PIXI.TextStyle({
			fontFamily: "shousha",
			fontSize: parseInt(20 * boardFactor),
			fill: "white",
			letterSpacing: 1,
			dropShadow: true,
			dropShadowColor: "black",
			dropShadowBlur: 1,
			dropShadowDistance: 1,
		});

		const itemCount = new PIXI.Text(`x${count}`, countStyle);
		itemCount.x = board.width - itemCount.width - 5;
		itemCount.y = board.y + board.height - itemCount.height - 5;

		rewardItem.addChild(itemCount);

		// 添加宝主物品的文字显示
		const style = new PIXI.TextStyle({
			fontFamily: "shousha",
			fontSize: parseInt(20 * boardFactor),
			fill: "white",
			wordWrap: true,
			// wordWrapWidth: 12,
			align: "center",
			lineJoin: "round",
			leading: 0,
		});

		let name = itemInfo.name;
		let newName = "";
		for (let i = 0; i < name.length; i += 7) {
			if (i > 0) {
				newName += " ";
			}
			newName += name.slice(i, i + 7);
		}
		const itemName = new PIXI.Text(newName, style);

		// const itemName = new PIXI.Text(itemInfo.name, style);
		itemName.x = (board.width - itemName.width) / 2;
		itemName.y = board.y + board.height + 10;

		rewardItem.addChild(itemName);

		const ease = new Ease.Ease();
		const delay = Math.min(index, 11) * 45 * speed.delay;
		setTimeout(() => {
			const startY = rewardItem.y;
			rewardItem.y = startY + 18 * boardFactor;
			ease.add(rewardItem, { alpha: 1, y: startY, scale: 0.6 }, { repeat: false, duration: 360 * speed.duration });
		}, delay);

		return rewardItem;
	}

	function onAssetsLoaded(loader, resource) {
		if (!resource.aar_cangbaoge?.spineData) {
			boxbeijing = null;
			console.warn("如真重置版：珍宝阁盒子动画资源加载失败，已跳过盒子动画");
		} else {
			boxbeijing = new PIXI.spine.Spine(resource.aar_cangbaoge.spineData);
			if (!canPlayBoxAnimation()) {
				boxbeijing = null;
				console.warn("如真重置版：珍宝阁盒子动画初始化失败，已跳过盒子动画");
			}
		}
		if (boxbeijing) {
			// debugger
			// set the position
			let localPos = boxbeijing.getLocalBounds(); // 骨骼的本地坐标
			let scale;
			scale = (app.screen.width / localPos.width) * 0.4;

			// 设置绝对偏移
			boxbeijing.scale.set(scale); // 设置新的大小后, 本地坐标会进行偏移
			// 设置相对canvas的中心
			boxbeijing.position.set(-localPos.x + (app.screen.width - localPos.width) / 2 + 20, -localPos.y + (app.screen.height - localPos.height) / 2 - 10);

			app.stage.addChild(boxbeijing);
			boxbeijing.state.setAnimation(0, "play1", true);
		}

		// 接着加载第二批资源
		app.loader
			.add("chouzhong", lib.assetURL + "extension/如真重置版/resource/cangZhenGe/spineAni/Ss_M_WWJ_chouzhong.skel")
			.add("gongxihuode_daojuchuxian", lib.assetURL + "extension/如真重置版/resource/cangZhenGe/spineAni/gongxihuode/gongxihuode_daojuchuxian.skel")
			.add("gongxihuode_gaojidaoju", lib.assetURL + "extension/如真重置版/resource/cangZhenGe/spineAni/gongxihuode/gongxihuode_gaojidaoju.skel")
			.add("gongxihuode_lizi", lib.assetURL + "extension/如真重置版/resource/cangZhenGe/spineAni/gongxihuode/gongxihuode_lizi.skel")
			.add("back", lib.assetURL + "extension/如真重置版/resource/cangZhenGe/dialog2.png")
			.add("rr_yuan_pan", lib.assetURL + "extension/如真重置版/resource/cangZhenGe/rewardresult/rr_yuan_pan.png")
			.add("title", lib.assetURL + "extension/如真重置版/resource/cangZhenGe/rewardresult/rr_title.png");
	}

	bg.listen = function (e) {
		e.stopPropagation();
	};

	// 藏珍阁logo
	ui.create.div(".czg-logo", bg);

	const statBtn = ui.create.div(".stat-btn", bg);

	let _totalDraws = 0;
	try {
		_totalDraws = parseInt(localStorage.getItem("czg_total_draws") || "0") || 0;
	} catch (e) {}
	const totalRewards = {
		totalCount: _totalDraws,
		items: {},
	};
	const statBg = ui.create.div(".stat-bg", bg);
	const closeBtn = ui.create.div(".stat-close-btn", statBg);
	closeBtn.innerHTML = "X";
	closeBtn.listen(() => {
		statBg.style.display = "none";
	});
	const desc = ui.create.div(".stat-text", statBg);
	statBg.style.display = "none";

	const refreshStatData = () => {
		// 打开统计面板
		let pityInfo = "";
		if (currenBox) {
			let pityKey = "czg_pity_" + currenBox.name;
			let pityData = {};
			try { pityData = JSON.parse(localStorage.getItem("czg_pity_data") || "{}"); } catch (e) {}
			let pityCount = pityData[pityKey] || 0;
			pityInfo = `「${currenBox.name}」保底进度：${pityCount}/20000\n\n`;
		}
		let title = pityInfo + "  累计抽取" + totalRewards.totalCount + "次\n\n";
		let res = [];
		for (let k in totalRewards.items) {
			res.push(totalRewards.items[k]);
		}
		res.sort((a, b) => {
			let w1 = a.weight || 3000;
			let w2 = b.weight || 3000;
			return w1 - w2;
		});
		let textArray = [title];
		for (let item of res) {
			textArray.push(`${item.name} --- ${item.count}`);
		}
		desc.innerText = textArray.join("\n");
	};

	statBtn.listen(() => {
		statBg.style.display = "";
		refreshStatData();
	});

	// 返回
	const back1 = ui.create.div(".ret-back1", bg);
	setTimeout(() => {
		back1.listen(() => {
			setTimeout(() => {
				div.remove();
				//释放所有资源

			}, 50);
		});
	}, 1000);

	// 中间盒子抽卡动画的背景
	const choukaBg = ui.create.div(".chouka-bg", bg);

	const openOne = ui.create.div(".open-one", bg);
	const openAll = ui.create.div(".open-all", bg);

	const openAllTip = ui.create.div(".open-all-tip", bg);
	openAllTip.innerHTML = "<span style='color:#DEB887; text-shadow:0 0 1px black;font-weight:600;font-family:shousha'>每次最多开50个</span>";
	// 快速开启复选框
	const fastOpenBox = ui.create.div(".czg-fast-open", bg);
	fastOpenBox.style.cssText = "position:absolute;left:2%;top:3%;display:flex;align-items:center;gap:6px;z-index:5;font-family:shousha;color:#DEB887;font-size:14px;text-shadow:0 0 1px black;";
	const fastOpenCheck = document.createElement("input");
	fastOpenCheck.type = "checkbox";
	fastOpenCheck.id = "czg_fast_open";
	fastOpenCheck.style.cssText = "width:16px;height:16px;cursor:pointer;accent-color:#D4A574;";
	fastOpenCheck.checked = !!lib.config.extension_如真重置版_czgFastOpen;
	fastOpenCheck.addEventListener("change", () => {
		game.saveConfig("extension_如真重置版_czgFastOpen", fastOpenCheck.checked ? true : false);
	});
	fastOpenBox.appendChild(fastOpenCheck);
	const fastOpenLabel = document.createElement("label");
	fastOpenLabel.htmlFor = "czg_fast_open";
	fastOpenLabel.textContent = "快速开启";
	fastOpenLabel.style.cursor = "pointer";
	fastOpenBox.appendChild(fastOpenLabel);
	const getPropCount = id => game.getGlobalItemCount?.(id) ?? window.dzxy?.Props?.getCount?.(id) ?? 0;
	const changePropCount = (id, count) => game.changeGlobalItemCount?.(id, count) ?? window.dzxy?.Props?.changeCount?.(id, count);
	const addPropToast = (id, count) => {
		if (window.dzxy?.propToast?.addToast) {
			window.dzxy.propToast.addToast(id, count);
		} else {
			changePropCount(id, count);
		}
	};
	const showTip = text => window.dzxy?.create?.bottomBarTip?.(text, document.body) || alert(text);
	let yuanbaoText = null;
	function refreshCzgShopUi() {
		refreshBoxCountUi();
		if (yuanbaoText) yuanbaoText.innerHTML = `元宝：${getPropCount("yuanbao")}`;
	}

	// 盒子配置
	const boxSettings = rzczb.czgSettings.boxes.map(item => {
		return {
			name: item.name,
			isHot: item.isHot,
			tip: item.tip,
			count: getPropCount("czg_box"),
		};
	});
	const boxBugTip = ui.create.div(".box-buy-tip", bg);
	boxBugTip.innerHTML = "<span style='color:red; text-shadow:0 0 0.5px gray,0 0 0.5px gray;font-weight:500;font-family:shousha'>2023年七夕活动首发，后续请关注每周末限时活动</span>";
	// 各个盒子部分
	const boxBg = ui.create.div(".box-bg", bg);
	const boxItems = [];
	const boxCountDivs = [];
	function refreshBoxCountUi() {
		let count = getPropCount("czg_box");
		for (let boxCountDiv of boxCountDivs) {
			boxCountDiv.innerHTML = `拥有：${count}`;
		}
	}
	for (let i = 0; i < boxSettings.length; i++) {
		let boxInfo = boxSettings[i];
		const boxDiv = ui.create.div(".box-item", boxBg);
		const nameParent = ui.create.div(".name-parent", boxDiv);
		const boxNameDiv = ui.create.div(".box-item-name", nameParent);
		const boxCountDiv = ui.create.div(".box-item-count", nameParent);
		boxNameDiv.innerHTML = boxInfo.name;
		boxCountDiv.innerHTML = `拥有：${boxInfo.count}`;
		boxCountDivs.push(boxCountDiv);

		if (boxInfo.isHot) {
			const boxHotTag = ui.create.div(".box-item-hot-tag", boxDiv);
		}

		if (i === 0) {
			boxDiv.classList.add("box-item-select");
			boxBugTip.getElementsByTagName("span")[0].innerText = boxInfo.tip;
		}
		boxItems.push(boxDiv);
		boxDiv.index = i;
		boxDiv.listen(function () {
			refreshDomList(boxItems, "box-item-select", boxDiv);
			boxBugTip.getElementsByTagName("span")[0].innerText = boxInfo.tip;
			currenBox = rzczb.czgSettings.boxes[this.index];
			setCurrentBoxUi(currenBox);
		});
	}

	// 当前抽取的盒子
	let currenBox = rzczb.czgSettings.boxes[0];

	// 稀世珍宝 右边的武将部分
	const xishi = ui.create.div(".xishizhenbao", bg);
	const xishiImg = ui.create.div(".xishizhenbao-img", xishi);
	const xishiText = ui.create.div(".xishizhenbao-text", xishi); // 武将名字
	const xishiLabelText = ui.create.div(".xishizhenbao-label-text", xishi); // 稀释珍宝标识
	const xishiRareLabel = ui.create.div(".xishizhenbao-rare-label", xishi); // 史诗标识

	function setCurrentBoxUi(box) {
		xishi.style.backgroundImage = 'url("' + lib.assetURL + `extension/如真重置版/resource/cangZhenGe/bskin/${box.xishizhenbao.id}.jpg")`;
		xishiText.innerText = box.xishizhenbao.name;
	}
	function consumeBoxes(count) {
		let available = getPropCount("czg_box");
		let realCount = Math.min(count, available, 50);
		if (realCount <= 0) {
			showTip("珍宝阁宝箱不足，请先前往商城购买");
			return 0;
		}
		changePropCount("czg_box", -realCount);
		refreshCzgShopUi();
		return realCount;
	}
	function createCzgShop() {
		const shop = ui.create.div(".czg-box-shop", bg);
		shop.style.cssText = "position:absolute;right:4.5%;bottom:13%;width:260px;padding:8px 10px;border:1px solid rgba(222,184,135,.65);border-radius:8px;background:rgba(20,10,4,.55);color:#DEB887;font-family:shousha;text-shadow:0 0 2px black;z-index:4;";
		const title = ui.create.div(shop);
		title.innerHTML = "购买珍宝阁宝箱";
		title.style.cssText = "font-size:18px;text-align:center;margin-bottom:6px;color:#f6d38b;";
		yuanbaoText = ui.create.div(shop);
		yuanbaoText.style.cssText = "font-size:15px;text-align:center;margin-bottom:7px;";
		const list = ui.create.div(shop);
		list.style.cssText = "display:grid;grid-template-columns:1fr 1fr;gap:6px;";
		[[5, 1000], [10, 2000], [20, 4000], [50, 10000]].forEach(([count, price]) => {
			const btn = ui.create.div(list);
			btn.innerHTML = `${count}个/${price}`;
			btn.style.cssText = "cursor:pointer;text-align:center;padding:5px 0;border-radius:5px;background:linear-gradient(#7b4424,#3c1d10);border:1px solid rgba(255,220,150,.55);font-size:14px;";
			btn.listen(e => {
				e.stopPropagation();
				if (getPropCount("yuanbao") < price) {
					showTip("元宝不足");
					return;
				}
				changePropCount("yuanbao", -price);
				changePropCount("czg_box", count);
				showTip(`购买${count}个珍宝阁宝箱成功`);
				refreshCzgShopUi();
			});
		});
		refreshCzgShopUi();
	}
	setCurrentBoxUi(currenBox);

	// 打开一个遮罩层
	const maskDiv = ui.create.div(div);
	maskDiv.style.width = "100%";
	maskDiv.style.height = "100%";
	maskDiv.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
	maskDiv.hide();

	let closeRewardResultWindow = null;
	let closeRewardPreviewWindow = null;

	maskDiv.listen(() => {
		// 遮罩层关闭
		maskDiv.hide();
		console.log("遮罩层关闭");
		if (closeRewardResultWindow) {
			closeRewardResultWindow();
			closeRewardResultWindow = null; // 执行一次后,置空
		}

		if (closeRewardPreviewWindow) {
			closeRewardPreviewWindow();
			closeRewardPreviewWindow = null;
		}
	});

	function bindDragEvent(divBg, scrollView) {
		let mousedownEvent = function (e) {
			this.isDown = true;
			if (e.touches && e.touches.length) {
				this.posX = e.touches[0].clientX;
				this.posY = e.touches[0].clientY;
			} else {
				this.posX = e.clientX;
				this.posY = e.clientY;
			}
		};

		let mouseupEvent = function (e) {
			// 清空之前的数据
			if (this.posX) delete this.posX;
			if (this.posY) delete this.posY;
			this.isDown = false;
		};

		let mousemoveEvent = function (e) {
			let curX, curY;
			if (!this.isDown) return;
			if (e.touches && e.touches.length) {
				curX = e.touches[0].clientX;
				curY = e.touches[0].clientY;
			} else {
				curX = e.clientX;
				curY = e.clientY;
			}
			let contentHeight = scrollView.content.height;
			let top = scrollView.content.top;
			let deltaY = curY - this.posY;

			// 设置阈值, 如果变化小于5, 不进行变化
			const threshold = 5;
			const factor = 0.75;
			if (Math.abs(deltaY) < threshold) {
				return;
			}
			deltaY *= factor; // 放缓变化速度

			if (deltaY === 0 || (top >= contentHeight && deltaY < 0) || (deltaY > 0 && top <= 0)) {
				return;
			} else {
				top -= deltaY;
				if (top <= 0) top = 0;
				else if (top >= contentHeight) {
					top = contentHeight;
				}
				scrollView.content.top = top;
			}

			this.posX = curX;
			this.posY = curY;
		};

		divBg.addEventListener("touchstart", mousedownEvent);
		divBg.addEventListener("touchend", mouseupEvent);
		divBg.addEventListener("touchcancel", mouseupEvent);
		divBg.addEventListener("touchmove", mousemoveEvent);
		divBg.addEventListener("mousedown", mousedownEvent);
		divBg.addEventListener("mouseup", mouseupEvent);
		divBg.addEventListener("mouseleave", mouseupEvent);
		divBg.addEventListener("mousemove", mousemoveEvent);
	}

	// 定义道具的宽度
	const boardFactor = (app.screen.width / 1588) * 1.4;
	const boardWidth = 88 * boardFactor;

	function openRewardResult(counts) {
		maskDiv.show();
		// const clickContinue = ui.create.div('.clickContinue', maskDiv)
		// clickContinue.innerText = '请点击屏幕空白处继续'

		// 打开奖励窗口
		let resource = app.loader.resources;
		// 圆盘
		const yuan_pan = new PIXI.Sprite(resource.rr_yuan_pan.texture);
		yuan_pan.anchor.set(0.5);
		yuan_pan.x = app.screen.width / 2;
		yuan_pan.y = app.screen.height * 0.48;
		yuan_pan.scale.set((app.screen.width / yuan_pan.texture.orig.width) * 0.25);
		app.stage.addChild(yuan_pan);

		yuan_pan.rotateForever = delta => {
			yuan_pan.rotation += 0.01 * delta;
		};

		app.ticker.add(yuan_pan.rotateForever);

		// 奖励区
		const back = new PIXI.Sprite(resource.back.texture);
		back.scale.set((app.screen.width / back.texture.orig.width) * 0.62);
		back.anchor.set(0.5);
		back.x = app.screen.width / 2;
		back.y = app.screen.height * 0.54;
		app.stage.addChild(back);

		// 文字
		const title = new PIXI.Sprite(resource.title.texture);
		title.anchor.set(0.5);
		let titleSize = (app.screen.width / title.texture.orig.width) * 0.15;
		title.scale.set(titleSize * 1.5);
		title.x = app.screen.width / 2;
		title.y = back.y - back.height * 0.5;
		app.stage.addChild(title);

		const ease = new Ease.Ease();
		ease.add(title, { scale: titleSize }, { repeat: false, duration: 500 });

		// 奖励道具边框

		// 可滑动的窗口, 滑动奖励区域
		let scrollBoxWidth = boardWidth * 6 + 5 * boardWidth * 0.2;
		let scrollBoxHeight = boardWidth * 2 + 20;
		const scrollbox = new Scrollbox.Scrollbox({
			boxWidth: scrollBoxWidth,
			boxHeight: scrollBoxHeight,
			overflowY: "hidden",
			overflowX: "none",
			// stopPropagation: false,
			dragScroll: false,
		});
		scrollbox.x = back.x - scrollBoxWidth / 2;
		scrollbox.y = back.y - scrollBoxHeight / 2;

		// const scrollbox = new Scrollbox.Scrollbox({
		//     boxWidth: (88 * 6 + 5 * 40 + 120) * 0.6,
		//     boxHeight: (88 * 2 ),
		//     overflowY: 'hidden',
		//     overflowX: 'none',
		//     // stopPropagation: false,
		//     dragScroll: false
		//
		// })
		// scrollbox.x = back.x - (88 + 40) * 0.6 * 2 - 60 * 0.6 - 88 * 0.6;
		// scrollbox.y = back.y - 138 * 0.6 - 20
		// 抽取盒子
		function drawOutBox(count) {
			// 根据当前盒子设置的稀有度等东西, 进行抽取
			// 方法, 将所有权重按从小到大的顺序铺好 随机抽取一个数字, 看数字落在哪个区间里, 就表示抽取到了哪个
			let result = [];
			let start = 0;
			let total_weight = 0;
			let current_weight = 0;
			const weight_steps = currenBox.items.map(itemInfo => {
				total_weight += itemInfo.weight;
				return total_weight;
			});

			// 找出最低权重物品（保底目标）
			let rarestItems = currenBox.items.filter(item => {
				return item.weight === 1 || (item.count === 66 && item.name === "史诗宝珠");
			});
			let rarestIds = new Set(rarestItems.map(item => item.id));

			// 读取保底计数
			let pityKey = "czg_pity_" + currenBox.name;
			let pityData = {};
			try {
				pityData = JSON.parse(localStorage.getItem("czg_pity_data") || "{}");
			} catch (e) {}
			if (typeof pityData[pityKey] !== "number") pityData[pityKey] = 0;

			// 检查是否触发保底
			let pityTriggered = false;
			if (pityData[pityKey] >= 20000 && rarestItems.length > 0) {
				pityTriggered = true;
				let forcedItem = rarestItems[Math.floor(Math.random() * rarestItems.length)];
				result.push({
					id: forcedItem.id,
					name: forcedItem.name,
					count: forcedItem.count || 1,
					weight: forcedItem.weight,
					gaoji: forcedItem.gaoji,
					_pity: true,
				});
				pityData[pityKey] = 0;
			}

			// 放入必中的保底
			rzczb.czgSettings.fixed.forEach(i => {
				result.push({
					id: i.id,
					name: i.name,
					count: count * i.count,
				});
			});

			let randomR;
			let naturalRare = false;
			// 模拟抽取
			for (let i = 0; i < count; i++) {
				randomR = Math.random() * total_weight;
				for (let j = 0; j < weight_steps.length; j++) {
					if (randomR < weight_steps[j]) {
						let isExist = false;
						// 如果存在, 则返回的结果数量累计
						for (let r of result) {
							if (r.id === currenBox.items[j].id) {
								r.count = (r.count || 1) + (currenBox.items[j].count || 1);
								isExist = true;
								if (currenBox.items[j].gaoji) {
									r.gaoji = currenBox.items[j].gaoji;
								}

								if (currenBox.items[j].weight < (r.weight || 1000)) {
									r.weight = currenBox.items[j].weight;
								}
								break;
							}
						}
						if (!isExist) {
							result.push({ ...currenBox.items[j] });
						}
						// 检测是否自然抽到保底物品
						if (rarestIds.has(currenBox.items[j].id)) {
							naturalRare = true;
						}
						break;
					}
				}
			}
			// 更新保底计数
			if (naturalRare && !pityTriggered) {
				pityData[pityKey] = 0;
			} else if (!pityTriggered) {
				pityData[pityKey] += count;
			}
			localStorage.setItem("czg_pity_data", JSON.stringify(pityData));

			const rewardMap = {
				将魂: "jianghun",
				换将卡: "huanjiangka",
				手气卡: "shouqika",
				欢乐豆: "huanledou",
				元宝: "yuanbao",
				点将卡: "dianjiangka",
				珍宝阁宝箱: "czg_box",
				史诗宝珠: "shishibaozhu",
				史诗宝珠碎片: "shishibaozhusuipian",
				招募令: "zhaomuling",
				雁翎甲: "yanlingjia",
			};
			const rewardIdMap = {
				600006: "dianjiangka",
				600008: "zhaomuling",
				600020: "yanlingjia",
				620044: "yuanbao",
				620149: "shishibaozhusuipian",
				620150: "shishibaozhu",
				620281: "xinyuanjifen",
			};
			result.forEach(i => {
				let propId = rewardMap[i.name] || rewardIdMap[i.id];
				if (propId) {
					addPropToast(propId, i.count || 1);
				} else if (i.type == "wujiang") {
					if (game.unlockCharacter?.(i.id)) {
						showTip(`已解锁武将：${i.name || get.translation(i.id) || i.id}`);
					}
					if (i.weight === 1) {
						addPropToast("shishibaozhu", 30);
					} else if (i.weight === 3) {
						addPropToast("shishibaozhu", 15);
					}
				}
			});
			refreshCzgShopUi();
			return result;
		}

		let results = drawOutBox(counts);

		// 将抽奖结果添加到统计里面
		for (let r of results) {
			let v = totalRewards.items[r.id] || { id: r.id, name: r.name, count: 0, weight: r.weight || 3000 };
			if (v.weight && v.weight > r.weight) {
				v.weight = r.weight;
			}
			v.count += r.count || 1;
			totalRewards.items[r.id] = v;
		}

		// 排序一下, 将稀有的物品放到前面
		if (results.length > 8) {
			results.sort((a, b) => {
				let w1 = a.weight || 1000;
				let w2 = b.weight || 1000;
				return w1 - w2;
			});
		}
		// 从中间开始闪现出现items, 4个4个一起出现
		// game.playAudio("../../extension/如真重置版/resource/cangZhenGe/mp3/guo1.mp3");
		PIXI.sound.play("czgguo1");

		for (let i = 0; i < results.length; i++) {
			let itemInfo = results[i];
			const rewardSpeed = getRewardAnimationSpeed();

			const _drawItem = (i, revealIndex = 0) => {
				let rewardItem = drawItem(itemInfo, itemInfo.count || 1, resource, i < 12, revealIndex);

				if (results.length <= 6) {
					if (results.length <= 4) {
						let startX = (scrollBoxWidth - results.length * boardWidth * 1.2) / 2;
						rewardItem.x = startX * 1.7 + boardWidth * 1.1 * (i % results.length);
					} else if (results.length === 5) {
						let startX = (scrollBoxWidth - results.length * boardWidth * 1.1) / 2;
						rewardItem.x = startX * 1.5 + boardWidth * 1.1 * (i % results.length);
					} else {
						let startX = (scrollBoxWidth - 6 * boardWidth) / 2;
						rewardItem.x = startX * 1.5 + boardWidth * 1.05 * (i % 6);
					}
					rewardItem.y = 56;
				} else if (results.length < 12) {
					let startX = (scrollBoxWidth - 6 * boardWidth) / 2;
					rewardItem.x = startX * 1.5 + boardWidth * 1.05 * (i % 6);
					rewardItem.y = 20 + parseInt(i / 6) * boardWidth * 1.2;
				} else {
					let startX = (scrollBoxWidth - 6 * boardWidth) / 2;
					rewardItem.x = startX * 2 + boardWidth * 0.96 * (i % 6);
					rewardItem.y = 20 + parseInt(i / 6) * boardWidth * 1.2;
				}

				scrollbox.content.addChild(rewardItem);
			};

			if (i < 12) {
				let revealOrder = [];
				if (results.length === 4) {
					revealOrder = [1, 2, 0, 3];
				} else if (results.length === 5) {
					revealOrder = [2, 1, 3, 0, 4];
				} else {
					revealOrder = [2, 3, 8, 9, 1, 4, 7, 10, 0, 5, 6, 11];
				}
				const order = revealOrder.indexOf(i);
				setTimeout(() => {
					_drawItem(i, Math.max(0, order));
				}, Math.max(0, order) * 65 * rewardSpeed.delay);
			} else {
				_drawItem(i, 0);
			}
		}

		// 为了防止内容撑不开容器, 再添加一个透明的填充物
		const tmp = new PIXI.Sprite.from(PIXI.Texture.EMPTY);
		tmp.height = 100;
		tmp.width = 50;

		// 添加星星spine
		// debugger
		// set the position
		setTimeout(() => {
			const xingxingAni = new PIXI.spine.Spine(resource.gongxihuode_lizi.spineData);
			let localPos = xingxingAni.getLocalBounds(); // 骨骼的本地坐标
			let scale;
			scale = (scrollBoxWidth / localPos.width) * 0.15;
			// 设置绝对偏移
			xingxingAni.scale.set(0.5 * boardFactor); // 设置新的大小后, 本地坐标会进行偏移
			// 设置相对canvas的中心
			xingxingAni.position.set(-localPos.x + scrollBoxWidth / 3 / 2, -localPos.y + scrollBoxHeight / 2 / 2);
			window.xingxingAni = xingxingAni;
			xingxingAni.state.timeScale = 0.6;
			setDefaultAni(xingxingAni, true);
			scrollbox.content.addChild(xingxingAni);
		}, 2000);

		scrollbox.content.addChild(tmp);

		// scrollbox.boxHeight = scrollbox.content.children[0].children[0].height * 1.8
		scrollbox.update();

		// 奖励物品可以滑动
		// add the viewport to the stage
		app.stage.addChild(scrollbox);

		// 页面上添加一个透明的div框来进行拖拽滑动
		const dragDiv = ui.create.div(".drag-div");
		dragDiv.style.width = scrollbox.boxWidth + "px";
		dragDiv.style.height = scrollbox.boxHeight * 1.8 + "px";
		div.appendChild(dragDiv);

		// 添加文字提示, 继续

		const continueTitleStyle = new PIXI.TextStyle({
			fontFamily: "shousha",
			fontSize: parseInt(18 * boardFactor),
			fill: "#DEB887",
			letterSpacing: 1,
		});
		const continueTitle = new PIXI.Text("请点击屏幕空白处继续", continueTitleStyle);
		continueTitle.x = back.x - continueTitle.width / 2;
		continueTitle.y = back.y + back.height / 2;
		app.stage.addChild(continueTitle);

		bindDragEvent(dragDiv, scrollbox);
		// 定义关闭当前奖励窗口函数
		closeRewardResultWindow = function () {
			yuan_pan.destroy();
			app.ticker.remove(yuan_pan.rotateForever);
			title.destroy();
			back.destroy();
			continueTitle.destroy();
			scrollbox.destroy();
			div.removeChild(dragDiv);
		};

		window.rz_pixiBeiJing = boxbeijing;
	}

	openAll.listen(function () {
		if (window._czg_opening) return;
		let count = consumeBoxes(rzczb.czgSettings.drawCount || 50);
		if (!count) return;
		window._czg_opening = true;
		// game.playAudio("../../extension/如真重置版/resource/cangZhenGe/mp3/knock.mp3");
		PIXI.sound.play("czgknock");
		PIXI.sound.play("czgguo");
		playBoxAnimation(count);
	});
	//
	openOne.listen(function () {
		if (window._czg_opening) return;
		let count = consumeBoxes(1);
		if (!count) return;
		window._czg_opening = true;
		PIXI.sound.play("czgknock");
		playBoxAnimation(count);
	});
	let _origOpenRewardSafely = openRewardSafely;
	openRewardSafely = function(count) {
		_origOpenRewardSafely(count);
		window._czg_opening = false;
	};

	// 画预览的道具
	function drawPreviewItem(itemInfo) {
		let resource = app.loader.resources;
		// 奖励道具
		const rewardItem = new PIXI.Container();
		// 边框
		const board = new PIXI.Sprite.from(lib.assetURL + "extension/如真重置版/resource/cangZhenGe/preview_reward.png");
		rewardItem.addChild(board);
		board.visible = true;
		board.scale.set(boardWidth / 131); // 盒子尺寸/素材尺寸  131/88

		let item;
		if (itemInfo.type === "wujiang") {
			item = new PIXI.Sprite.from(lib.assetURL + `extension/如真重置版/resource/cangZhenGe/wujiang/${itemInfo.id}.png`);
		} else {
			item = new PIXI.Sprite.from(lib.assetURL + `extension/如真重置版/resource/cangZhenGe/items/${itemInfo.id}.png`);
		}
		rewardItem.scale.set(0.6);
		item.x = boardWidth * 0.025;
		item.y = boardWidth * 0.01;
		item.scale.set(boardFactor);
		rewardItem.addChild(item);

		// 高级物品的边框
		if (itemInfo.gaoji) {
			// 如果是高级道具, 添加边框特效
			let gaojidaoju = new PIXI.spine.Spine(resource.gongxihuode_biankuang.spineData);
			rewardItem.addChild(gaojidaoju);
			setDefaultAni(gaojidaoju, true);
			let localPos = gaojidaoju.getLocalBounds();
			gaojidaoju.position.set(-localPos.x + (boardWidth - localPos.width) / 2 + 2, -localPos.y + (boardWidth - localPos.height) / 2);
			gaojidaoju.state.timeScale = 1;
			gaojidaoju.scale.set(0.88 * boardFactor);
			gaojidaoju.zIndex = -1;
		}

		rewardItem.sortableChildren = true;

		// 预览物品有点特殊, 只有宝珠物品需要区分66和单个, 也只有66宝珠需要画数量
		// 添加宝珠物品的数量, 只有权重少于100并且数量大于1的才显示数字
		if (itemInfo.count && itemInfo.count > 1 && itemInfo.weight < 100) {
			const countStyle = new PIXI.TextStyle({
				fontFamily: "shousha",
				fontSize: parseInt(19 * boardFactor),
				fill: "white",
				letterSpacing: true,
			});

			const itemCount = new PIXI.Text(`x${itemInfo.count}`, countStyle);
			itemCount.x = boardWidth - itemCount.width - 5;
			itemCount.y = board.y + boardWidth - itemCount.height - 5;
			rewardItem.addChild(itemCount);
		}
		// 中文的换行宽度设置可能不起作用, 需要自己手动添加换行符, 分隔符等进行换行
		// 添加宝主物品的文字显示
		const style = new PIXI.TextStyle({
			fontFamily: "shousha",
			fontSize: parseInt(20 * boardFactor),
			fill: "white",
			wordWrap: true,
			// breakWords: true,
			// wordWrapWidth: 20,
			align: "center",
			lineJoin: "round",
			leading: 0,
		});
		let name = itemInfo.name;
		let newName = "";
		for (let i = 0; i < name.length; i += 5) {
			if (i > 0) {
				newName += " ";
			}
			newName += name.slice(i, i + 5);
		}
		const itemName = new PIXI.Text(newName, style);
		itemName.x = boardWidth / 2 - itemName.width / 2;
		itemName.y = boardWidth + 10;

		rewardItem.addChild(itemName);

		return rewardItem;
	}

	// 显示右下角的按钮组
	const btnGroups = ui.create.div(".cbgBtnsGroup", div);
	const tehui = ui.create.div(".cbgTehuiBtn", btnGroups); // 特惠
	const xinyuan = ui.create.div(".cbgXinyuanBtn", btnGroups); // 心愿商城
	const preview = ui.create.div(".cbgYuranBtn", btnGroups); // 预览
	preview.listen(() => {
		previewReward();
	});
	// 预览当前盒子的奖励物品
	function previewReward() {
		const resource = app.loader.resources;
		const previewContaner = new PIXI.Container();
		const back = new PIXI.Sprite(resource.previewBox.texture);
		back.scale.set((boardWidth * 5 + boardWidth * 0.25 * 4) / 1037);
		back.anchor.set(0.5);
		back.x = app.screen.width / 2;
		back.y = app.screen.height * 0.54;
		// 添加背景框
		previewContaner.addChild(back);

		// 添加一个可以滑动的窗口
		let scrollBoxWidth = boardWidth * 5 + 4 * boardWidth * 0.25;
		let scrollBoxHeight = boardWidth * 3;
		const scrollbox = new Scrollbox.Scrollbox({
			boxWidth: scrollBoxWidth,
			boxHeight: scrollBoxHeight,
			overflowY: "hidden",
			overflowX: "none",
			// stopPropagation: false,
			dragScroll: false,
		});

		scrollbox.x = back.x - scrollBoxWidth / 2;
		scrollbox.y = back.y - scrollBoxHeight / 2;
		// scrollbox.x = back.x - (88 + 25) * 0.6 * 2 - 60 * 0.6 - 88 * 0.6;
		// scrollbox.y = back.y - 88 * 1.5
		// 抽取盒子

		function getPreviewItems() {
			maskDiv.show();

			let idSet = new Set();
			let result = [];
			// 放入必中的保底
			rzczb.czgSettings.fixed.forEach(i => {
				result.push({
					id: i.id,
					name: i.name,
					weight: 3000, // 默认保底奖励, 权重3000
				});
			});

			for (let item of currenBox.items) {
				if (idSet.has(item.id)) {
					if (item.weight && item.weight <= 100) {
						result.push({ ...item });
						idSet.add(item.id);
					}
				} else {
					idSet.add(item.id);
					result.push({ ...item });
				}
			}

			// 排序一下, 将稀有的物品放到前面
			result.sort((a, b) => {
				let w1 = a.weight || 1000;
				let w2 = b.weight || 1000;
				return w1 - w2;
			});

			return result;
		}

		let results = getPreviewItems();

		// 遍历所有的奖励框
		for (let i = 0; i < results.length; i++) {
			let info = results[i];
			// 和之前一样的逻辑将奖励物品画进去
			const pItem = drawPreviewItem(info);
			let startX = (scrollBoxWidth - 5 * boardWidth) / 2;
			pItem.x = startX * 1 + boardWidth * 1.05 * (i % 5);
			pItem.y = 6 + parseInt(i / 5) * boardWidth;
			scrollbox.content.addChild(pItem);
		}
		scrollbox.content.top = 0;

		previewContaner.addChild(scrollbox);
		scrollbox.update();
		window.rz_preBox = scrollbox;
		const dragDiv = ui.create.div(".drag-div");
		dragDiv.style.width = scrollbox.boxWidth + "px";
		dragDiv.style.height = scrollbox.boxHeight * 1.8 + "px";
		div.appendChild(dragDiv);
		bindDragEvent(dragDiv, scrollbox);

		// 为了防止内容撑不开容器, 再添加一个透明的填充物
		// const tmp = new PIXI.Sprite.from(PIXI.Texture.EMPTY)
		// tmp.height = 100
		// tmp.width = 50
		// scrollbox.content.addChild(tmp)

		app.stage.addChild(previewContaner);

		// 定义关闭函数
		closeRewardPreviewWindow = function () {
			console.log("销毁预览窗口");
			previewContaner.destroy({ children: true });
			div.removeChild(dragDiv);
		};
	}

	// 加载动画
	loadAnimations();
	// openRewardResult(50)
}
