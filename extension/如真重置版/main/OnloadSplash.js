import { lib, get, game, ui } from "../../../noname.js";
import { ref, onMounted, useTemplateRef } from "../lib/vue.esm-browser.js";
import { debounce, gradeList, EXTENSION_NAME, getUserName } from "../utils/index.js";
import { getFileList, gugekeysMap } from "../config/index.js";
import "../config/czg_setting.js";
import { cangZhenGe } from "../hooks/czg.js";
/**
 * @type {import("vue").Component}
 */
export default {
	template: `
		<div id="rzsh-app" ref="pixiCon">

		</div>
	`,
	props: {
		click: Function,
		node: HTMLElement,
	},

	setup(props) {
		//动态大厅
		const dtdating = lib.config[`extension_${EXTENSION_NAME}_dtdating`];

		let theme = lib.config[`extension_${EXTENSION_NAME}_theme`] || "默认主题";
		function numtoroma(num) {
			switch (num) {
				case 1:
					return "Ⅰ";
				case 2:
					return "Ⅱ";
				case 3:
					return "Ⅲ";
				case 4:
					return "Ⅳ";
				case 5:
					return "Ⅴ";
				case 6:
					return "Ⅵ";
				default:
					return "";
			}
		}

		function getName_排位() {
			let pGrade = lib.config[`extension_斗转星移_playerGrade`];
			console.log("pGrade", pGrade);
			if (!pGrade) {
				pGrade = [1, 3, 0];
			}
			let current = gradeList[pGrade[0] - 1];
			let id = current.id;
			let outname = current.name; //段位名字
			let outroma = numtoroma(pGrade[1]); //段位等级
			let xxnum = pGrade[2]; //小星星
			let xxnumlim = current.starsPerLevel; //星星上限
			if (id === "chuanshuo") {
				outroma = "";
				xxnumlim = 9999;
				xxnum = current.levels * pGrade[1] + pGrade[2];
			}
			return [outname + outroma, xxnum, xxnumlim, current.maxScore, id]; //段位名称，星星数量，星星上限
		}
		let pixiapp = null;
		let pixiCon = useTemplateRef("pixiCon");
		function canPlayRzshBgm() {
			return lib.config.background_music != "music_off" && Number(lib.config.volumn_background) > 0;
		}
		function playRzshBgm() {
			if (canPlayRzshBgm()) {
				PIXI.sound.play("outgame");
			} else {
				PIXI.sound.stop("outgame");
			}
		}
		const uisprite = {
			actak: {
				x: 172,
				y: 10,
				scale: 0.68,
			},
			actbk: {
				x: 307,
				y: 10,
				scale: 0.68,
			},
			activeea: {
				x: 173,
				y: 10,
				scale: 0.67,
			},
			avatar: {
				x: 218,
				y: 43,
				scale: 0.69,
			},
			guan: {
				x: 245,
				y: 58,
				scale: 1,
			},
			left1: {
				x: 71,
				y: 92,
				scale: 0.7,
			},
			left2: {
				x: 72,
				y: 178,
				scale: 0.7,
			},
			left3: {
				x: 71,
				y: 267,
				scale: 0.7,
			},
			left4: {
				x: 70,
				y: 350,
				scale: 0.7,
			},
			leftlong: {
				x: 3,
				y: 253,
				scale: 0.8,
			},
			lvlup: {
				x: 324,
				y: 10,
				scale: 0.8,
			},
			menu1: {
				x: 1059,
				y: 0.5,
				scale: 0.7,
			},
			pubbtn_close: {
				x: 1059,
				y: 470,
				scale: 0.7,
			},
			mode1: {
				x: 267,
				y: 256,
				scale: 0.7,
			},
			mode2: {
				x: 535,
				y: 254,
				scale: 0.7,
			},
			mode3: {
				x: 802,
				y: 166,
				scale: 0.61,
			},
			mode4: {
				x: 802,
				y: 340,
				scale: 0.72,
			},
			player_nan: {
				x: 150,
				y: 10,
				scale: 1,
			},
			right2: {
				x: 898,
				y: 34.5,
				scale: 0.62,
			},
			right3: {
				x: 960,
				y: 34.5,
				scale: 0.62,
			},
			right44: {
				x: 1027,
				y: 36,
				scale: 0.63,
			},
			yukasaoguang: {
				x: 833,
				y: 32,
				scale: 0.63,
			},
			rightacbg: {
				x: 27,
				y: 145.5,
				scale: 0.7,
			},
			rightbg: {
				x: 834,
				y: 32,
				scale: 0.68,
			},
			ro2: {
				x: 27,
				y: 278,
				scale: 0.7,
			},
			czg: {
				x: 29,
				y: 345,
				scale: 0.7,
			},
			say: {
				x: 45,
				y: 0.5,
				scale: 1.15,
			},
			uactive1: {
				x: 308.5,
				y: -3.5,
				scale: 0.71,
			},
			under1: {
				x: 550,
				y: 14,
				scale: 0.7,
			},
			shop: {
				x: 628,
				y: 19.5,
				scale: 0.74,
			},
			under3: {
				x: 705,
				y: 11.5,
				scale: 0.7,
			},
			under4: {
				x: 785,
				y: 13.5,
				scale: 0.7,
			},
			under5: {
				x: 865,
				y: 11.5,
				scale: 0.7,
			},
			under6: {
				x: 944,
				y: 7.5,
				scale: 0.75,
			},
			vipbg1: {
				x: 460,
				y: 21,
				scale: 0.92,
			},
			vipbg2: {
				x: 623,
				y: 20,
				scale: 0.9,
			},
			大元帅: {
				x: 154,
				y: 58,
				scale: 0.2,
			},
			pica: {
				x: 76,
				y: 36,
				scale: 0.7,
			},
			riactive: {
				x: 27.5,
				y: 147.5,
				scale: 0.7,
			},
			modesecbg: {
				x: 550,
				y: 250,
				scale: 0.63,
			},
			mode1bbg: {
				x: 590,
				y: 256,
				scale: 0.67,
			},
			modetta: {
				x: 422,
				y: 102,
				scale: 0.69,
			},
			modettb: {
				x: 422,
				y: 102,
				scale: 0.69,
			},
			mode1tt: {
				x: 221,
				y: 102,
				scale: 0.69,
			},
			modesecoff: {
				x: 225,
				y: 158,
				scale: 0.7,
			},
			modesecoff1: {
				x: 225,
				y: 158,
				scale: 0.7,
			},
			modesecoff2: {
				x: 225,
				y: 218,
				scale: 0.7,
			},
			modesecoff3: {
				x: 225,
				y: 278,
				scale: 0.7,
			},
			"5pjz": {
				x: 225,
				y: 159,
				scale: 0.7,
			},
			"8pjz": {
				x: 225,
				y: 219,
				scale: 0.7,
			},
			guowar: {
				x: 227,
				y: 280,
				scale: 0.7,
			},
			whelp: {
				x: 488,
				y: 103,
				scale: 0.65,
			},
			rzclose: {
				x: 1055.5,
				y: 41,
				scale: 0.47,
			},
			ttrankbg1: {
				x: 230,
				y: 240,
				scale: 0.8,
			},
			ttrankbg2: {
				x: 230,
				y: 222,
				scale: 0.8,
			},
			ttrankbg3: {
				x: 230,
				y: 360,
				scale: 0.8,
			},
			ttrank: {
				x: 230,
				y: 160,
				scale: 0.8,
			},
			jj_grade_qingtong: {
				x: 230,
				y: 180,
				scale: 1,
			},
			jj_grade_baiyin: {
				x: 230,
				y: 180,
				scale: 1,
			},
			jj_grade_huangjin: {
				x: 230,
				y: 180,
				scale: 1,
			},
			jj_grade_feicui: {
				x: 230,
				y: 180,
				scale: 1,
			},
			jj_grade_dashi: {
				x: 230,
				y: 180,
				scale: 1,
			},
			jj_star_on: {
				x: 200,
				y: 300,
				scale: 0.8,
			},
			jj_star_off: {
				x: 200,
				y: 300,
				scale: 0.8,
			},
			tiantibg: {
				x: 100,
				y: 220,
				scale: 1,
			},
			solobtn: {
				x: 100,
				y: 170,
				scale: 0.7,
			},
			versustwobtn: {
				x: 100,
				y: 320,
				scale: 0.7,
			},
			jj_dianfeng: {
				x: 100,
				y: 50,
				scale: 1.2,
			},
			jj_tittle: {
				x: 100,
				y: 20,
				scale: 0.7,
			},
			publicui_title_bg: {
				x: 140,
				y: 30,
				scale: 0.8,
			},
			s0: {
				x: 180,
				y: 20,
				scale: 0.7,
			},
			bigmenu: {
				x: 551.5,
				y: 310,
				scale: 1.05,
			},
			set_dialog: {
				x: 551.5,
				y: 257,
				scale: 1,
			},
			warr_info_bg: {
				x: 341,
				y: 69,
				scale: 0.68,
			},
			wujiangchangkuang: {
				x: -470,
				y: 270,
				scale: 1,
			},
			jl_bar_fg: {
				x: 172,
				y: -78,
				scale: 0.98,
			},
			jianghun: {
				x: -228,
				y: -18,
				scale: 1,
			},
			warr_info_dec: {
				x: -190,
				y: 152,
				scale: 1,
			},
			offical_dayuanshuai: {
				x: -210,
				y: -71,
				scale: 1.2,
			},
			warr_arr_official: {
				x: -51,
				y: -71,
				scale: 1,
			},
			officalui_icon_10: {
				x: -345,
				y: -30,
				scale: 0.5,
			},
			biaojibeijing: {
				x: 788,
				y: 25,
				scale: 0.9,
			},
			search_btn: {
				x: 912,
				y: 25,
				scale: 0.6,
			},
			wujiangback: {
				x: 1045,
				y: 37,
				scale: 0.75,
			},
		};
		let debounceResize = debounce(() => {
			resizeHandle();
		}, 1000);
		const initPixiApp = () => {
			const dpr = Math.max(window.devicePixelRatio * (window.documentZoom || 1), 1);
			pixiapp = new PIXI.Application({
				// autoDensity: true,
				resizeTo: document.body,
				backgroundAlpha: 0,
				resolution: dpr,
				autoDensity: true,
			});
			// computedRatio();
			pixiapp.view.id = "rzsh";
			pixiCon.value.appendChild(pixiapp.view);
			Object.assign(pixiapp.view.style, {
				position: "fixed",
				left: "0px",
				zIndex: "0",
				top: "0px",
			});

			window.addEventListener("resize", debounceResize);
		};
		const btnmList = [
			{
				name: "czgguo1",
				path: "extension/如真重置版/resource/cangZhenGe/mp3/guo1.mp3",
			},
			{
				name: "czgknock",
				path: "extension/如真重置版/resource/cangZhenGe/mp3/knock.mp3",
			},
			{
				name: "czgguo",
				path: "extension/如真重置版/resource/cangZhenGe/mp3/guo.mp3",
			},
			{
				name: "Label",
				path: "extension/如真重置版/resource/audio/sgs/Label.mp3",
			},
			{
				name: "Menu",
				path: "extension/如真重置版/resource/audio/sgs/Menu.mp3",
			},
			{
				name: "MidButton",
				path: "extension/如真重置版/resource/audio/sgs/MidButton.mp3",
			},
			{
				name: "Notice02",
				path: "extension/如真重置版/resource/audio/sgs/Notice02.mp3",
			},
			{
				name: "Pop",
				path: "extension/如真重置版/resource/audio/sgs/Pop.mp3",
			},
			{
				name: "Report01",
				path: "extension/如真重置版/resource/audio/sgs/Report01.mp3",
			},
			{
				name: "PopUp",
				path: "extension/如真重置版/resource/audio/sgs/PopUp.mp3",
			},
			{
				name: "TinyButton",
				path: "extension/如真重置版/resource/audio/sgs/TinyButton.mp3",
			},
			{
				name: "TinyWindow",
				path: "extension/如真重置版/resource/audio/sgs/TinyWindow.mp3",
			},
			{
				name: "Unlock",
				path: "extension/如真重置版/resource/audio/sgs/Unlock.mp3",
			},
			{
				name: "WinButton",
				path: "extension/如真重置版/resource/audio/sgs/WinButton.mp3",
			},
			{
				name: "QuickStart",
				path: "extension/如真重置版/resource/audio/sgs/QuickStart.mp3",
			},
		];
		function createThemeSelection(className, labelText = "选择主题：", options, defaultValue, onChange) {
			//创建下拉容器
			const selectContainer = document.createElement("div");
			selectContainer.className = className;
			selectContainer.style.position = "static";

			//创建label
			const label = document.createElement("label");
			label.textContent = labelText;
			label.style.position = "static";
			selectContainer.appendChild(label);
			//创建下拉选择框
			const themeSelection = document.createElement("select");
			themeSelection.style.backgroundColor = "white";
			themeSelection.style.border = "1px solid black";
			themeSelection.style.padding = "5px";
			themeSelection.style.height = "40px";
			themeSelection.style.position = "static";
			selectContainer.appendChild(themeSelection);

			options.forEach(item => {
				const option = document.createElement("option");
				option.value = item.value;
				option.textContent = item.text;
				themeSelection.appendChild(option);
			});
			themeSelection.value = defaultValue;
			themeSelection.addEventListener("change", function () {
				console.log("选择：", themeSelection.value);
				onChange(themeSelection.value);
				// game.saveConfig(`extension_${EXTENSION_NAME}_theme`, themeSelection.value);
			});
			return selectContainer;
		}
		//创建下拉选择框子
		async function openThemeSelection() {
			closeThemeSelection();
			//创建外层div
			let container = document.createElement("div");
			container.className = "themeContainer";
			Object.assign(container.style, {
				display: "flex",
				"flex-direction": "column",
				" justify-content": "center",
				"align-items": "center",
				position: "absolute",
				width: "300px",
				top: "50%",
				left: "50%",
				transform: "translate(-50%, -50%)",
				zIndex: "9999",
				fontFamily: "shousha",
				color: "black",
				fontSize: "16px",
			});

			//创建gugekeysMap下拉框
			let gugeList = Object.keys(gugekeysMap).map(key => ({
				value: key,
				text: key,
			}));
			let gugeSelection = createThemeSelection("gugeSelection", "选择登录页骨骼：", gugeList, lib.config[`extension_${EXTENSION_NAME}_loginGuge`] || "貂蝉", value => {
				game.saveConfig(`extension_${EXTENSION_NAME}_loginGuge`, value);
				localStorage.setItem(`${EXTENSION_NAME}_guge`, value);
			});
			gugeSelection.style.marginBottom = "10px";
			//添加选项
			let floders = await getFileList();
			floders = floders.map(folder => ({
				value: folder,
				text: folder,
			}));
			let themeSelection = createThemeSelection("themeSelection", "选择大厅主题：", floders, theme, value => {
				game.saveConfig(`extension_${EXTENSION_NAME}_theme`, value);
			});
			themeSelection.style.marginBottom = "10px";

			//创建重启按钮容器
			let restartButtonContainer = document.createElement("div");
			restartButtonContainer.style.position = "static";
			restartButtonContainer.style.marginTop = "10px";
			restartButtonContainer.style.display = "block";

			let restartButton = document.createElement("button");
			restartButton.textContent = "重启游戏";
			restartButton.style.padding = "5px 10px";
			restartButton.style.backgroundColor = "white";
			restartButton.style.border = "1px solid black";
			restartButton.style.borderRadius = "5px";
			restartButton.style.cursor = "pointer";
			restartButtonContainer.appendChild(restartButton);
			restartButton.addEventListener("click", () => {
				// game.reload();
				window.location.reload();
			});
			container.appendChild(themeSelection); // 添加下拉选择框到页面
			container.appendChild(gugeSelection); // 添加下拉选择框到页面
			container.appendChild(restartButtonContainer); // 添加下拉选择框到页面
			//移除下拉选择框函数
			document.body.appendChild(container); // 添加下拉选择框到页面
		}
		function closeThemeSelection() {
			if (document.querySelector(".themeContainer")) {
				document.body.removeChild(document.querySelector(".themeContainer"));
			}
		}
		function loadRzsh() {
			//闪光
			let brightnessFilter = new PIXI.filters.AdjustmentFilter({
				gamma: 1,
			});
			//将包关闭变暗
			//console.log(lib.config.characters)
			const characterclose = new PIXI.filters.AdjustmentFilter({
				brightness: 0.5,
			});
			let spinelo, uibg, spineks, findpipei, yanhua, hudie;
			let renderProcess = null;
			const ppw = pixiapp.screen.width / 1103;
			const pph = pixiapp.screen.height / 514;
			const pps = Math.min(ppw, pph);
			//pixi加载器
			const xloader = new PIXI.Loader();
			//导入背景图
			xloader.add("spineloading", lib.assetURL + "extension/如真重置版/resource/spine/loding.skel");
			// xloader.add('uiBG', lib.assetURL + 'extension/如真重置版/resource/images/bg.jpg');
			xloader.add("uiBG", lib.assetURL + `extension/如真重置版/resource/theme/${theme}/background.jpg`);
			xloader.add("homBG", lib.assetURL + "extension/如真重置版/resource/images/hom.jpg"); // 添加载入图并命名为'homBG'
			const hudieyanhuaLoader = new PIXI.Loader();
			if (dtdating === true) {
				hudieyanhuaLoader.add("Yanhua", lib.assetURL + "extension/如真重置版/resource/spine/yanhua.skel");
				hudieyanhuaLoader.add("Hudie", lib.assetURL + "extension/如真重置版/resource/spine/hudie.skel");
			}

			xloader.load(() => {
				spinelo = new PIXI.spine.Spine(xloader.resources.spineloading.spineData);
				uibg = new PIXI.Sprite(xloader.resources.uiBG.texture);
				uibg.width = pixiapp.screen.width;
				uibg.height = pixiapp.screen.height;
				// 添加载入图的精灵
				const hombgSprite = new PIXI.Sprite(xloader.resources.homBG.texture);
				hombgSprite.width = pixiapp.screen.width;
				hombgSprite.height = pixiapp.screen.height;
				pixiapp.stage.addChild(hombgSprite); // 添加载入图的精灵到舞台
				pixiapp.stage.addChild(uibg); // 添加原来的背景图到舞台
				pixiapp.stage.addChild(spinelo);
				pixiapp.stage.setChildIndex(uibg, 0);
				spinelo.state.setAnimation(0, "idle", true);
				spinelo.x = 0.5 * pixiapp.screen.width;
				spinelo.y = 0.5 * pixiapp.screen.height;
				spinelo.scale.set(1);

				btnmList.forEach(asset => {
					PIXI.sound.add(asset.name, lib.assetURL + asset.path);
				});
			});
			// let rzshtranslate = {};
			let rzshcharacters = [];
			let zhuanzhuanwj = [];
			let gloader = new PIXI.Loader();
			function getWuJiang() {
				// for (let l in lib.translate) {
				// 	rzshtranslate[l] = lib.translate[l]
				// }
				for (let i in lib.imported.character) {
					//获取所有武将包//并加载所有武将图片//加入集合中防止出现重复武将
					if (lib.config.hidepack && Array.isArray(lib.config.hidepack) && lib.config.hidepack.includes(i)) continue;
					for (let j in lib.imported.character[i].character) {
						if (rzshcharacters.includes(j)) continue;
						rzshcharacters.push(j);
					}
					//获取翻译
					// for (let k in lib.imported.character[i].translate) {
					// 	rzshtranslate[k] = lib.imported.character[i].translate[k]
					// }
				}
				let plength = 8;
				for (let i = 0; i < plength; i++) {
					let target = rzshcharacters.randomGet();
					//   let target = "liubei";
					if (!zhuanzhuanwj.includes(target)) {
						zhuanzhuanwj.push(target);
						gloader.add(target, lib.assetURL + "image/character/" + target + ".jpg");
					} else {
						zhuanzhuanwj.push(target);
					}
				}
			}

			getWuJiang();

			game.getFileList("extension/如真重置版/resource/audio/music", function (floders) {
				window.rzshmusic = floders;

				//检索音乐包
				//获取异步传递的变量
				let rzshmusicpack = window.rzshmusic;
				delete window.rzshmusic;
				let rzshbgm;
				if (!lib.config.rzshbgm || !rzshmusicpack.includes(lib.config.rzshbgm)) {
					rzshbgm = rzshmusicpack[0];
				} else rzshbgm = lib.config.rzshbgm;
				PIXI.sound.add("outgame", {
					url: lib.assetURL + "extension/如真重置版/resource/audio/music/" + rzshbgm + "/outgame.mp3",
					loop: true,
				});
				playRzshBgm();
				//对象池，用来管理容器和精灵
				const yloader = new PIXI.Loader();
				//主界面ui大盒子
				const uihome = new PIXI.Container();
				uihome.width = pixiapp.screen.width;
				uihome.height = pixiapp.screen.height;
				//主界面ui上面的为了做出抽屉效果,占据屏幕宽度和10%屏幕高度
				const uihometop = new PIXI.Container();
				uihometop.width = pixiapp.screen.width;
				uihometop.height = pixiapp.screen.height * 0.2;
				//主界面ui左边的,占据0.8高，0.2宽向下0.1高
				const uihomeleft = new PIXI.Container();
				uihomeleft.width = pixiapp.screen.width * 0.2;
				uihomeleft.height = pixiapp.screen.height * 0.9;
				uihomeleft.y = pixiapp.screen.height * 0.0705;
				//主界面右边的
				const uihomeright = new PIXI.Container();
				uihomeright.width = pixiapp.screen.width * 0.1;
				uihomeright.height = pixiapp.screen.height * 0.9;
				uihomeright.y = pixiapp.screen.height * 0.0705;
				uihomeright.x = pixiapp.screen.width * 0.9;
				//主界面下边的
				const uihomeunder = new PIXI.Container();
				uihomeunder.width = pixiapp.screen.width;
				uihomeunder.height = pixiapp.screen.height * 0.1;
				uihomeunder.y = 0.91 * pixiapp.screen.height;
				//中间直接分别加入
				const uihomecenter = new PIXI.Container();
				uihomecenter.width = pixiapp.screen.width;
				uihomecenter.height = pixiapp.screen.height;
				//uihome把5个幕布加入进来
				uihome.addChild(uihometop, uihomeleft, uihomeright, uihomeunder);
				uihome.setChildIndex(uihometop, 2);
				uihome.setChildIndex(uihomeleft, 2);
				uihome.setChildIndex(uihomeright, 2);
				uihome.setChildIndex(uihomeunder, 2);

				if (dtdating === true) {
					hudieyanhuaLoader.load(() => {
						yanhua = new PIXI.spine.Spine(hudieyanhuaLoader.resources.Yanhua.spineData);
						hudie = new PIXI.spine.Spine(hudieyanhuaLoader.resources.Hudie.spineData);
						uihome.addChild(yanhua);
						uihome.addChild(hudie);
						uihome.setChildIndex(hudie, 3);
						uihome.setChildIndex(yanhua, 0);

						yanhua.state.setAnimation(0, "play", true);
						yanhua.x = 0.5 * pixiapp.screen.width;
						yanhua.y = 0.5 * pixiapp.screen.height;
						yanhua.scale.set(0.65);
						hudie.state.setAnimation(0, "play", true);
						hudie.x = 0.5 * pixiapp.screen.width;
						hudie.y = 0.5 * pixiapp.screen.height;
						hudie.scale.set(0.7);
					});
				}

				//模式盒子
				// 定义动画函数
				function showDrawer(container, direction) {
					let duration = 0.5;
					const ease = "power2.out";
					let start, end;
					switch (direction) {
						case "top":
							start = {
								y: -300,
							};
							end = {
								y: 0,
							};
							duration = 0.3;
							break;
						case "under":
							start = {
								y: 1.5 * pixiapp.screen.height,
							};
							end = {
								y: 0.91 * pixiapp.screen.height,
							};
							duration = 0.3;
							break;
						case "left":
							start = {
								x: -300,
							};
							end = {
								x: 0,
							};
							break;
						case "right":
							start = {
								x: 1.5 * pixiapp.screen.width,
							};
							end = {
								x: pixiapp.screen.width * 0.9,
							};
							break;
						default:
							console.error(`Invalid direction: $ {
                                                direction
                                            }`);
							return;
					}
					gsap.fromTo(container, duration, start, end, {
						ease,
					}).restart();
				}

				function hideDrawer(container, direction) {
					let duration = 0.8;
					let ease = "power2.out";
					let start, end;
					switch (direction) {
						case "top":
							start = {
								y: -300,
							};
							end = {
								y: 0,
							};
							break;
						case "under":
							start = {
								y: 1.5 * pixiapp.screen.height,
							};
							end = {
								y: pixiapp.screen.height * 0.91,
							};
							break;
						case "left":
							start = {
								x: -300,
							};
							end = {
								x: 0,
							};
							break;
						case "right":
							start = {
								x: 1.5 * pixiapp.screen.width,
							};
							end = {
								x: pixiapp.screen.width * 0.9,
							};
							break;
						default:
							console.error(`Invalid direction: $ {
                                                direction
                                            }`);
							return;
					}
					gsap.fromTo(container, duration, end, start, {
						ease,
					}).restart();
				}
				uihome.on("added", () => {
					uihome.addChild(uihomecenter);
					uihome.setChildIndex(uihomecenter, 1);
					showDrawer(uihometop, "top");
					showDrawer(uihomeunder, "under");
					showDrawer(uihomeleft, "left");
					showDrawer(uihomeright, "right");
				});
				const modehome = new PIXI.Container();
				modehome.width = pixiapp.screen.width;
				modehome.height = pixiapp.screen.height;
				//pixi载入ui,身份和斗地主的图片
				const assetList = [
					{
						name: "spritesui",
						path: `extension/如真重置版/resource/theme/${theme}/ui.json`,
					},
					{
						name: "uilight",
						path: "extension/如真重置版/resource/images/light.json",
					},
					{
						name: "uiczg",
						path: "extension/如真重置版/resource/images/btn.json",
					},
					{
						name: "uivip",
						path: "extension/如真重置版/resource/images/vip.json",
					},
					{
						name: "rightact",
						path: "extension/如真重置版/resource/images/active/3.png",
					},
					{
						name: "pic",
						path: "extension/如真重置版/resource/images/avatar/2.png",
					},
				];
				assetList.forEach(asset => {
					yloader.add(asset.name, lib.assetURL + asset.path);
				});
				yloader.load(setupx);
				let ticker = new PIXI.Ticker();
				if (lib.config[`extension_${EXTENSION_NAME}_scollannouncement`]) {
					let rzshbb = new PIXI.Graphics();
					rzshbb.beginFill(0x000000, 0.65);
					rzshbb.drawRect(0, 0, pixiapp.renderer.screen.width, 20);
					rzshbb.endFill();
					uihome.addChild(rzshbb);
					var rzshgp = function () {
						let textcon = new PIXI.Container();
						textcon.widrh = pixiapp.screen.width;
						textcon.height = 0.1 * pixiapp.screen.height;
						textcon.name = "textcon";
						rzshbb.addChild(textcon);
						var player = "玩家";
						var my = lib.config.connect_nickname;
						var suiji = [
							"倘若",
							"诗笺",
							"点点",
							"EngJ.K",
							"扶苏",
							"黄小花",
							"蒸佬",
							"🥕",
							"无中",
							"小爱莉",
							"柳下跖",
							"电动车",
							"小曦",
							"Cosette",
							"星鲨",
							"氪金抽66",
							"卡宝真可爱",
							"蒸蒸日上",
							"√卡视我如父",
							"麒麟弓免疫枸杞",
							"坏可宣（老坏批）",
							"六千大败而归",
							"蒸",
							"夕宝",
							"黄小花",
							"山猪",
							"开局酒古锭",
							"遇事不决刷个乐",
							"见面两刀喜相逢",
							"改名出66",
							"时代的六万五",
							"韩旭",
							"司马长衫",
							"ogx",
							"狗卡不如无名杀",
							"王八万",
							"一拳兀突骨",
							"开局送神将",
							"丈八二桃",
							"装甲车车",
							"等我喝口酒",
							"Samuri",
							"马",
							"kimo鸡～木木",
							"Log-Frunki",
							"aoe银钱豹",
							"没有丈八就托管",
							"无中yyds",
							"给咸鱼鸽鸽打call",
							"小零二哟～",
							"长歌最帅了",
							"大猫有侠者之风",
							"布灵布灵❤️",
							"我爱～摸鱼🐠～",
							"小寻寻真棒",
							"呲牙哥超爱笑",
							"是俺杀哒",
							"阿七阿七",
							"祖安·灰晖是龙王",
							"吃颗桃桃好遗计",
							"好可宣✓良民",
							"藏海表锅好",
							"金乎？木乎？水乎！！",
							"无法也无天",
							"西风不识相",
							"神秘喵酱",
							"星城在干嘛？",
							"子鱼今天摸鱼了吗？",
							"阳光苞里有阳光",
							"诗笺的小裙裙",
							"轮回中的消逝",
							"乱踢jb的云野",
							"小一是不是...是不是...",
							"美羊羊爱瑟瑟",
							"化梦的星辰",
							"杰哥带你登dua郎",
							"世中君子人",
							"叹年华未央",
							"短咕咕",
							"若石",
							"很可爱的小白",
							"沉迷踢jb的云野",
							"厉不厉害你坤哥",
							"东方太白",
							"恶心的死宅",
							"风回太初",
							"隔壁的戴天",
							"林柒柒",
							"洛神",
							"ikun",
							"蒙娜丽喵",
							"只因无中",
							"女宝",
							"远道",
							"翘课吗？",
							"失败的man",
							"晚舟",
							"叙利亚野🐒",
							"幸运女神在微笑",
							"知天意，逆天寒",
							"明月栖木",
							"路卡利欧",
							"兔兔",
							"香蕉",
							"douyun",
							"启明星阿枫",
							"雨夜寒稠",
							"洛天依？！",
							"黄老板是好人～",
							"来点瑟瑟文和",
							"鲨鱼配辣椒",
							"萝卜～好萝卜",
							"废城君",
							"E佬细节鬼才",
							"感到棘手要怀念谁？",
							"半价小薯片",
							"JK欧拉欧拉欧拉",
							"新年快乐",
							"乔姐带你飞",
							"12345678？",
							"缘之空",
							"小小恐龙",
							"教主：杀我！",
							"才思泉涌的司马",
							"我是好人",
							"喜怒无常的大宝",
							"黄赌毒",
							"阴间杀～秋",
							"敢于劈瓜的关羽",
							"暮暮子",
							"潜龙在渊",
						].randomGet();
						var name = [suiji, my].randomGet();
						var v = ["通过", "使用", "开启"].randomGet();
						var story = ["周年", "五一", "踏青", "牛年", "开黑", "冬至", "春分", "鼠年", "盛典", "魏魂", "群魂", "蜀魂", "吴魂", "猪年", "圣诞", "国庆", "狗年", "金秋", "奇珍", "元旦", "小雪", "冬日", "招募", "梦之回廊", "虎年", "新春", "七夕", "大雪", "端午", "武将", "中秋", "庆典"].randomGet();
						var box = ["盒子", "宝盒", "礼包", "福袋", "礼盒", "庆典", "盛典"].randomGet();
						var a = "获得了";
						//皮肤
						var pifu = ["势·钟会×1", "势·魏延×1", "王朗×1", "马钧×1", "司马昭×1", "司马师×1", "王平×1", "诸葛瞻×1", "张星彩×1", "董允×1", "关索×1", "骆统×1", "周处*1", "界步练师*1", "界朱然*1", "贺齐*1", "苏飞*1", "公孙康×1", "杨彪×1", "刘璋×1", "张仲景×1", "司马徽×1", "曹婴×1", "徐荣×1", "史诗宝珠*66", "史诗宝珠*33", "麒麟生角·魏延*1", "史诗宝珠*10", "刘焉×1", "孙寒华×1", "戏志才×1", "界曹真×1", "曹婴×1", "王粲×1", "界于禁×1", "郝昭×1", "界黄忠×1", "鲍三娘×1", "周群×1", "赵襄×1", "马云禄×1", "孙皓×1", "留赞×1", "吴景×1", "界徐盛×1", "许攸×1", "杜预×1", "界李儒×1", "张让×1", "麹义×1", "司马徽×1", "界左慈×1", "鲍三娘×1", "界徐盛×1", "南华老仙×1", "韩旭の大饼*100", "神郭嘉×1", "吴景×1", "周处×1", "杜预×1", "司马师×1", "羊微瑜×1", "神曹操×1"].randomGet();
						//武将
						var wujiang = [
							"谋定天下·陆逊*1（动+静）",
							"龙困于渊·刘协（动+静）*1",
							"星花柔矛·张星彩*1（动+静）",
							"呼啸生风·许褚*1（动+静）",
							"牛年立冬·司马懿*1（动+静）",
							"鹰视狼顾·司马懿*1（动+静）",
							"洛水神韵·甄姬*1（动+静）",
							"登锋陷阵·张辽*1（动+静）",
							"十胜十败·郭嘉*1（动+静）",
							"猪年端午·曹丕*1（动+静）",
							"背水一战·张郃*1（动+静）",
							"神兵天降·邓艾*1（动+静）",
							"独来固志·王基*1（动+静）",
							"猪年圣诞·刘备*1（动+静）",
							"哮风从龙·关羽*1（动+静）",
							"西凉雄狮·马超*1（动+静）",
							"鏖战赤壁·黄盖*1（动+静）",
							"星流霆击·孙尚香*1（动+静）",
							"猪年圣诞·陆逊*1（动+静）",
							"鼠年七夕·貂蝉*1（动+静）",
							"迅雷风烈·张角*1（动+静）",
							"一往无前·袁绍*1（动+静）",
							"盛气凌人·许攸*1（动+静）",
							"玄冥天通·神曹操*1（动+静）",
							"魂牵梦绕·灵雎*1（动+静）",
							"肝胆相照·⭐甘宁*1（动+静）",
							"超脱于世·庞德公*1（动+静）",
							"雄踞益州·刘焉*1（动+静）",
							"鼠年春节·兀突骨*1（动+静）",
							"牛年端午·孙鲁班*1（动+静）",
							"灵魂歌王·留赞*1（动+静）",
							"花容月貌·孙茹*1（动+静）",
							"猪年春节·孙鲁育*1（动+静）",
							"长沙桓王·孙笨*1（动+静）",
							"如花似朵·小乔*1（动+静）",
							"嫣然一笑·鲍三娘*1",
							"锐不可当·张翼*1（动+静）",
							"鼠年中秋·关索*1（动+静）",
							"花海舞枪·马云禄*1（动+静）",
							"木牛流马·黄月英*1（动+静）",
							"锋芒毕露·曹婴*1（动+静）",
							"长坂败备·曹纯*1（动+静）",
							"龙袭星落·王朗*1（动+静）",
							"举棋若定·戏志才*1（动+静）",
							"泰山捧日·程昱*1（动+静）",
							"冬日·王元姬（动态+静态）*1",
							"牛年七夕·步练师动态包*1（动+静）",
							"神甘宁×1",
							"巾帼花舞·马云禄*1（动+静）",
							"银币*66666",
							"将魂*66666",
							"琪花瑶草·徐氏*1（动+静）",
							"肝胆相照·星甘宁*1（动+静）",
							"星流霆击·孙尚香（动+静）*1",
							"锋芒毕露·曹婴*1（动+静）",
							"长衫の天牢令*100",
						].randomGet();
						//更改对应播报颜色
						let tipa = "%2C%E6%9C%AC%E4%BD%93%E6%9B%B4%E6%96%B0%E8%80%85%E6%98%AF%E8%AF%97%E7%AC%BA%EF%BC%88jian%EF%BC%89%E4%B8%8D%E6%98%AF%E8%AF%97%E7%AD%8F%EF%BC%8C%E6%B3%A8%E6%84%8F%E5%8C%BA%E5%88%86%E5%93%A6";
						let topb = "%2C%E6%96%B0%E7%89%88%E6%9C%AC%E8%AF%B7%E5%85%B3%E6%B3%A8%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7%E3%80%90%E6%97%A0%E5%90%8D%E6%9D%80%E8%B5%84%E6%BA%90%E5%BA%93%E3%80%91";
						var d = [",大家快恭喜TA吧！", ",大家快恭喜TA吧。无名杀是一款非盈利游戏(づ ●─● )づ", ",祝你新的一年天天开心，万事如意", decodeURIComponent(tipa), decodeURIComponent(topb)].randomGet();
						var fontset = "shousha";
						var colorA = "#efe8dc";
						var colorB = "#22c622";
						var gold = [
							new PIXI.Text(`${pifu}`, {
								fontFamily: fontset,
								fontSize: 18,
								fill: "#56e4fa",
							}),
							new PIXI.Text(`${wujiang}`, {
								fontFamily: fontset,
								fontSize: 18,
								fill: "#f3c20f",
							}),
						].randomGet();
						let text = new PIXI.Text(`${player}`, {
							fontFamily: fontset,
							fontSize: 18,
							fill: colorA,
						});
						text.addChild(
							new PIXI.Text(`${name}`, {
								fontFamily: fontset,
								fontSize: 18,
								fill: colorA,
							})
						);
						text.addChild(
							new PIXI.Text(`${v}`, {
								fontFamily: fontset,
								fontSize: 18,
								fill: "white",
							})
						);
						text.addChild(
							new PIXI.Text(`${story}${box}`, {
								fontFamily: fontset,
								fontSize: 18,
								fill: colorB,
							})
						);
						text.addChild(
							new PIXI.Text(`${a}`, {
								fontFamily: fontset,
								fontSize: 18,
								fill: "white",
							})
						);
						text.addChild(gold);
						text.addChild(
							new PIXI.Text(`${d}`, {
								fontFamily: fontset,
								fontSize: 18,
								fill: "white",
							})
						);
						// 设置文本对象的布局
						text.children.forEach((child, index) => {
							child.x = index > 0 ? text.children[index - 1].x + text.children[index - 1].width + 1 : text.width;
							child.y = 0;
						});
						textcon.x = pixiapp.screen.width;
						// 将文本对象添加到舞台上
						textcon.addChild(text);
						window.bbgp = true;
						window.bbcount = 0;
					};
					rzshgp();
					ticker.add(updatet);
					ticker.start();

					function updatet(delta) {
						if (window.bbgp == false) {
							window.bbcount++;
							if (window.bbcount > 1000 && Math.random() < 0.01) {
								rzshbb.visible = true;
								rzshgp();
							}
						}
						if (window.bbgp == true) {
							let textcon = rzshbb.getChildByName("textcon");
							textcon.x -= 1.5;
							if (textcon.x < -700 * ppw) {
								textcon.destroy();
								if (Math.random() < 0.8) {
									rzshgp();
								} else {
									rzshbb.visible = false;
									window.bbgp = false;
								}
							}
						}
					}
				}
				//打开场景
				let opprogress = null;

				function opeen(container) {
					if (container != uihome) {
						window.isOnhide = true;
						uihome.removeChild(uihomecenter);
						hideDrawer(uihometop, "top");
						hideDrawer(uihomeunder, "under");
						hideDrawer(uihomeleft, "left");
						hideDrawer(uihomeright, "right");
						opprogress = setTimeout(function () {
							window.isOnhide = false;
							pixiapp.stage.removeChild(uihome);

							if (opprogress != null) clearTimeout(opprogress);
							opprogress = null;
						}, 500);
						pixiapp.stage.addChild(container);
					} else {
						pixiapp.stage.children.forEach(function (child) {
							if (child !== uibg) {
								pixiapp.stage.removeChild(child);
							}
						});

						pixiapp.stage.addChild(container);
					}
					window.container = container;
				}
				//关闭场景时回到父级场景
				function closee() {
					opeen(uihome);
				}

				function uiinit(sprite, bool) {
					const name = sprite.name;
					if (bool !== undefined) {
						sprite.interactive = true;
						sprite.on("pointerup", onButtonUpx);
						sprite.on("pointerdown", onButtonDownx);
					}
					if (!uisprite[name]) return;
					sprite.x = uisprite[name].x * ppw;
					sprite.y = uisprite[name].y * pph;
					sprite.anchor.set(0.5);
					sprite.scale.set(uisprite[name].scale * ppw, uisprite[name].scale * pph);
				}

				function uiinit2(fromFrames) {
					fromFrames.anchor.set(0.5);
					fromFrames.scale.set(0.29 * pps);
				}

				function uiinit3(sprite, bool) {
					const name = sprite.name;
					if (bool !== undefined) {
						sprite.interactive = true;
						sprite.on("pointerup", onButtonUpx);
						sprite.on("pointerdown", onButtonDownx);
					}
					if (!uisprite[name]) return;
					sprite.x = uisprite[name].x;
					sprite.y = uisprite[name].y;
					sprite.anchor.set(0.5);
					sprite.scale.set(uisprite[name].scale, uisprite[name].scale);
				}
				//首屏加载
				function setupx() {
					console.timeEnd("y加载完毕");
					let pica = new PIXI.Sprite(yloader.resources.pic.texture);
					pica.name = "pica";
					uiinit(pica);
					uihometop.addChild(pica);
					uihometop.setChildIndex(pica, 0);
					//先把模式后面的图片占位。
					const mode1bbg = new PIXI.Sprite();
					mode1bbg.name = "mode1bbg";
					//经典场和斗地主等文字
					const mode1tt = new PIXI.Sprite();
					mode1tt.name = "mode1tt";
					const secmode1 = new PIXI.Sprite();
					//左上角模式信息
					const secmodeinfo = new PIXI.Sprite();
					secmodeinfo.position.set(340 * ppw, 90 * pph);
					secmodeinfo.scale.set(pps);
					//三个按钮
					const modesecoff1 = new PIXI.Sprite();
					modesecoff1.name = "modesecoff1";
					modesecoff1.interactive = true;
					modesecoff1.on("pointerup", onButtonUp);
					modesecoff1.on("pointerdown", onButtonDownx);
					const modesecoff2 = new PIXI.Sprite();
					modesecoff2.name = "modesecoff2";
					modesecoff2.interactive = true;
					modesecoff2.on("pointerup", onButtonUp);
					modesecoff2.on("pointerdown", onButtonDownx);
					const modesecoff3 = new PIXI.Sprite();
					modesecoff3.name = "modesecoff3";
					modesecoff3.interactive = true;
					modesecoff3.on("pointerup", onButtonUp);
					modesecoff3.on("pointerdown", onButtonDownx);
					uiinit(modesecoff1);
					uiinit(modesecoff2);
					uiinit(modesecoff3);
					//模式文字
					secmode1.name = "5pjz";
					const secmode2 = new PIXI.Sprite();
					secmode2.name = "8pjz";
					const secmode3 = new PIXI.Sprite();
					secmode3.name = "guowar";
					modehome.on("added", () => {
						let modestexture = yloader.resources.modesecb.textures;
						if (window.moode == "shenfen") {
							//把左上角改掉
							mode1bbg.texture = zloader.resources.shenfen.texture;
							uiinit(mode1bbg);
							//切换底图
							mode1tt.texture = modestexture["mode1tt"];
							//切换文字
							secmode1.texture = modestexture["5pjz"];
							secmode2.texture = modestexture["8pjz"];
							secmode3.texture = modestexture["guowar"];
							secmodeinfo.texture = modestexture["5pjz"];
							modesecoff1.texture = modestexture["modesecon"];
							modesecoff2.texture = modestexture["modesecoff"];
							modesecoff3.texture = modestexture["modesecoff"];
							spineks.state.setAnimation(0, "kaishi", false);
							spineks.state.tracks[0].onComplete = function () {
								spineks.state.setAnimation(0, "jingzhi", true);
							};
							entermodegame("identity", "normal", 5);
						} else if (window.moode == "doudizhu") {
							mode1bbg.texture = zloader.resources.doudizhu.texture;
							uiinit(mode1bbg);
							mode1bbg.scale.set(0.57 * pps);
							mode1bbg.x -= 115 * ppw;
							// mode1bbg.y+=5;
							mode1tt.texture = modestexture["hhddz"];
							secmode1.texture = modestexture["ddzxx"];
							secmode2.texture = modestexture["ddzhl"];
							secmode3.texture = modestexture["ddzbl"];
							secmodeinfo.texture = modestexture["ddzxx"];
							modesecoff1.texture = modestexture["modesecon"];
							modesecoff2.texture = modestexture["modesecoff"];
							modesecoff3.texture = modestexture["modesecoff"];
							spineks.state.setAnimation(0, "kaishi", false);
							spineks.state.tracks[0].onComplete = function () {
								spineks.state.setAnimation(0, "jingzhi", true);
							};
							entermodegame("doudizhu", "normal", 3);
						}
					});
					modehome.on("removed", () => { });

					function onButtonUp(event) {
						//获取模式纹理
						let modestexture = yloader.resources.modesecb.textures;
						if (window.currentSprite != event.target) return;
						window.currentSprite = null;
						switch (event.target.name) {
							case "mode1":
								//按钮
								//身份局，影响后面的按钮
								window.moode = "shenfen";
								opeen(modehome);
								break;
							case "uactive1":
								window.moode = "doudizhu";
								opeen(modehome);
								break;
							case "rightacbg":
								let hasTaixu = lib.config.all.mode.includes("taixuhuanjing");
								if (!hasTaixu) {
									alert("未安装太虚幻境扩展");
									return;
								}
								//太虚幻境
								entermodegame("taixuhuanjing");
								setTimeout(function () {
									rzshkz();
								}, 1500);
								break;
							case "avatar":
								//创建下拉选择框
								// console.log('头像');
								break;
							case "modesecoff1":
								modesecoff1.texture = modestexture["modesecon"];
								modesecoff2.texture = modestexture["modesecoff"];
								modesecoff3.texture = modestexture["modesecoff"];
								if (window.moode == "shenfen") {
									secmodeinfo.texture = modestexture["5pjz"];
									entermodegame("identity", "normal", 5);
								}
								if (window.moode == "doudizhu") {
									secmodeinfo.texture = modestexture["ddzxx"];
									entermodegame("doudizhu", "normal", 3);
								}
								spineks.state.setAnimation(0, "kaishi", false);
								spineks.state.tracks[0].onComplete = function () {
									spineks.state.setAnimation(0, "jingzhi", true);
								};
								break;
							case "modesecoff2":
								modesecoff1.texture = modestexture["modesecoff"];
								modesecoff2.texture = modestexture["modesecon"];
								modesecoff3.texture = modestexture["modesecoff"];
								if (window.moode == "shenfen") {
									secmodeinfo.texture = modestexture["8pjz"];
									entermodegame("identity", "normal", 8);
								}
								if (window.moode == "doudizhu") {
									secmodeinfo.texture = modestexture["ddzhl"];
									entermodegame("doudizhu", "huanle", 3);
								}
								spineks.state.setAnimation(0, "kaishi", false);
								spineks.state.tracks[0].onComplete = function () {
									spineks.state.setAnimation(0, "jingzhi", true);
								};
								// entermodegame('identity','normal','8');
								break;
							case "modesecoff3":
								modesecoff1.texture = modestexture["modesecoff"];
								modesecoff2.texture = modestexture["modesecoff"];
								modesecoff3.texture = modestexture["modesecon"];
								if (window.moode == "shenfen") {
									secmodeinfo.texture = modestexture["guowar"];
									entermodegame("guozhan");
								}
								if (window.moode == "doudizhu") {
									secmodeinfo.texture = modestexture["ddzbl"];
									entermodegame("doudizhu", "zhizun", 3);
								}
								spineks.state.setAnimation(0, "kaishi", false);
								spineks.state.tracks[0].onComplete = function () {
									spineks.state.setAnimation(0, "jingzhi", true);
								};
								// entermodegame('guozhan')
								break;
							case "mode2":
								oppeen(paiweihome);
								break;
							case "mode3":
								let freegameModes = [["single", "dianjiang"], ["identity", "normal", 5], ["identity", "normal", 8], ["doudizhu", "huanle", 3], ["guozhan"], ["doudizhu", "zhizun", 3], ["doudizhu", "normal", 3], ["identity", "zhong"], ["identity", "purple"], ["versus", "two"], ["versus", "four"]];
								const randomIndex = Math.floor(Math.random() * freegameModes.length);
								entermodegame(...freegameModes[randomIndex]);
								rzshkz();
								break;
							case "mode4":
								//		oppeen(wujianghome)
								entermodegame("brawl");
								rzshkz();
								break;
							// mark:添加商城
							case "shop":
								if (window.dzxy && window.dzxy.dsplash) {
									uihome.removeChild(menuhome);
									window.dzxy.dsplash.subPageFunc.shop(true);
								} else {
									alert("未安装斗转星移扩展！");
								}
							case "under5":
								//打开皮肤 读取不到文件。。。。
								// if (window.dzxy && window.dzxy.skinPage) {
								// 	dzxy.skinPage.open(true);
								// } else {
								// 	alert('未安装斗转星移扩展！');
								// }

								break;
							case "under6":
								// oppeen(wujianghome)
								if (window.dzxy && window.dzxy.charPage) {
									dzxy.charPage.open(true);
								} else {
									alert("未安装斗转星移扩展！");
								}

								break;
							case "right2":
								if (window.dzxy && window.dzxy.dsplash) {
									window.dzxy.dsplash.subPageFunc.signin(true);
								} else {
									alert("未安装斗转星移扩展！");
								}
								break;
							case "ro2":
								if (window.dzxy && window.dzxy.charPage) {
									dzxy.banChar.openPage(true);
								} else {
									alert("未安装斗转星移扩展！");
								}
								break;
							case "left2":
								if (confirm(lib.config[`extension_${EXTENSION_NAME}_dtdating`] === true ? "是否关闭动态大厅(重启生效)" : "是否打开动态大厅(重启生效)")) {
									if (lib.config[`extension_${EXTENSION_NAME}_dtdating`]) game.saveConfig(`extension_${EXTENSION_NAME}_dtdating`);
									else game.saveConfig(`extension_${EXTENSION_NAME}_dtdating`, true);
								}
								break;
							case "left3":
								if (confirm(lib.config.zhuanzhuan == true ? "是否关闭转盘效果" : "是否打开转盘效果")) {
									if (lib.config.zhuanzhuan) game.saveConfig("zhuanzhuan");
									else game.saveConfig("zhuanzhuan", true);
								}
								break;
							case "left4":
								if (confirm(lib.config[`extension_${EXTENSION_NAME}_scollannouncement`] == true ? "是否关闭狗托播报（重启生效）" : "是否打开狗托播报（重启生效）")) {
									if (lib.config[`extension_${EXTENSION_NAME}_scollannouncement`]) game.saveConfig(`extension_${EXTENSION_NAME}_scollannouncement`);
									else game.saveConfig(`extension_${EXTENSION_NAME}_scollannouncement`, true);
								}
								break;
							case "czg":
								// if (lib.config.extension_皮肤切换_czgEnable) {
								console.log("czg");

								cangZhenGe();
								// }
								break;

							default:
							//   console.log(event.target.name)
						}
					}

					function onButtonDown(event) {
						var sprite = event.target;
						window.currentSprite = event.target;
						var scalex = sprite.scale.x;
						var scaley = sprite.scale.y;
						switch (sprite.name) {
							case "mode1":
							case "mode2":
							case "mode3":
							case "mode4":
								PIXI.sound.play("PopUp");
								if (sprite.isOndown != true) {
									sprite.isOndown = true;
									gsap.to(sprite.scale, {
										duration: 0.15,
										x: 0.8 * scalex,
										y: 0.8 * scaley,
										ease: "power2.inOut",
										onComplete: () => {
											// 使用 gsap 库创建 Tween 对象，将精灵恢复到原始大小
											gsap.to(sprite.scale, {
												duration: 0.15,
												x: scalex,
												y: scaley,
												ease: "power2.inOut",
												onComplete: () => {
													sprite.isOndown = false;
												},
											});
										},
									});
								}
								break;
							case "uactive1":
								PIXI.sound.play("PopUp");
								break;
							//	case "spinekz":
							//	break;
							default:
								PIXI.sound.play("Label");
								sprite.filters = [brightnessFilter];
								// 使用 gsap 库创建 Tween 对象，使亮度调整滤镜在一定时间内慢慢增加到 4
								gsap.to(brightnessFilter, {
									duration: 0.5,
									ease: "power2.inOut",
									gamma: 3,
									onUpdate: () => {
										sprite.filters = [brightnessFilter];
									},
									onComplete: () => {
										sprite.filters = null;
									},
								});
						}
					}

					//ui主纹理
					const spritesheet = yloader.resources.spritesui.textures;
					//灯的静纹理
					const lightsheet = yloader.resources.uilight.textures;
					//灯的动纹理
					const lightanimations = yloader.resources.uilight.data.animations;
					//vip
					const vipsprite = yloader.resources.uivip.textures;
					//藏珍阁
					const czgsprite = yloader.resources.uiczg.data.animations;
					//创建函数，输入一个名字，自动在纹理集里检索对应名字，然后赋名，然后输出
					//这是ui里不可交互元素
					function rzshcreate(name) {
						const sprite = new PIXI.Sprite(spritesheet[name]);
						sprite.name = name;
						return sprite;
					}
					//这是ui可交互元素
					function rzshcreatex(name) {
						const sprite = new PIXI.Sprite(spritesheet[name]);
						sprite.name = name;
						sprite.interactive = true;
						sprite.on("pointerdown", onButtonDown);
						sprite.on("pointerup", onButtonUp);
						return sprite;
					}
					//从vip包里拿东西
					function vipcreat(name) {
						const sprite = new PIXI.Sprite(vipsprite[name]);
						sprite.name = name;
						sprite.interactive = true;
						sprite.on("pointerdown", onButtonDown);
						sprite.on("pointerup", onButtonUp);
						return sprite;
					}
					//这是灯里的可交互
					function lightcreat1(name) {
						const sprite = new PIXI.Sprite(lightsheet[name]);
						sprite.name = name;
						sprite.interactive = true;
						sprite.on("pointerdown", onButtonDown);
						sprite.on("pointerup", onButtonUp);
						return sprite;
					}
					//这是灯的动态交互
					function lightcreat2(name) {
						const fromFrames = new PIXI.AnimatedSprite.fromFrames(lightanimations[name]);
						fromFrames.name = name;
						fromFrames.interactive = true;
						fromFrames.animationSpeed = 1;
						fromFrames.play();
						fromFrames.on("pointerdown", onButtonDown);
						fromFrames.on("pointerup", onButtonUp);
						return fromFrames;
					}
					//从藏珍阁里拿东西
					function czgcreat(name) {
						const fromFrames = new PIXI.AnimatedSprite.fromFrames(czgsprite[name]);
						fromFrames.name = name;
						fromFrames.interactive = true;
						fromFrames.animationSpeed = 0.5;
						fromFrames.play();
						fromFrames.on("pointerdown", onButtonDown);
						fromFrames.on("pointerup", onButtonUp);
						return fromFrames;
					}
					yloader.add("modesecb", lib.assetURL + "extension/如真重置版/resource/images/mode.json");
					yloader.add("spinekss", lib.assetURL + "extension/如真重置版/resource/spine/kaizhan.skel");
					yloader.load(() => {
						//mode里的点击事件
						function onButtonUp(event) {
							event.target.alpha = 1;
							switch (event.target.name) {
								case "spinekz":
									if (lib.config.zhuanzhuan && (lib.config.mode == "doudizhu" || lib.config.mode == "identity")) eee();
									else rzshkz();
									break;
								default:
								//	console.log(event.target.name);
							}
						}
						let modestexture = yloader.resources.modesecb.textures;

						function modecreate(name) {
							const sprite = new PIXI.Sprite(modestexture[name]);
							sprite.name = name;
							return sprite;
						}
						//这是模式可交互元素
						function modecreatex(name) {
							const sprite = new PIXI.Sprite(modestexture[name]);
							sprite.name = name;
							sprite.interactive = true;
							//sprite.on('pointerdown', onButtonDown);
							sprite.on("pointerup", onButtonUp);
							sprite.on("pointerdown", onButtonDown);
							return sprite;
						}
						//透明框背景
						const modesecbg = modecreate("modesecbg");
						uiinit(modesecbg);
						modehome.addChild(modesecbg);
						modehome.setChildIndex(modesecbg, 0);
						//mode后面大图，可切换成不同的图
						uiinit(mode1bbg);
						modehome.addChild(mode1bbg);
						//模式下面的墨迹
						const modetta = modecreate("modettb");
						uiinit(modetta);
						modehome.addChild(modetta);
						//这个地方是经典场和斗地主切换
						uiinit(mode1tt);
						modehome.addChild(mode1tt);
						//三个选项按钮
						modehome.addChild(modesecoff1, modesecoff2, modesecoff3);
						//问好按钮，
						const whelp = modecreate("whelp");
						uiinit(whelp);
						modehome.addChild(whelp);
						//这是可切换的游戏模式，5人，8人，国战，切成斗地主就是休闲，欢乐，至尊
						uiinit(secmode1);
						uiinit(secmode2);
						uiinit(secmode3);
						modehome.addChild(secmode1, secmode2, secmode3);
						//左上角模式信息
						modehome.addChild(secmodeinfo);
						//右上角关闭按钮
						const rzclose = rzshcreate("rzclose");
						uiinit(rzclose, true);
						rzclose.x = pixiapp.screen.width - rzclose.width * rzclose.scale.x;
						modehome.addChild(rzclose);
						//开战骨骼
						spineks = new PIXI.spine.Spine(yloader.resources.spinekss.spineData);
						//				   	let animations = spineks.stateData.skeletonData.animations;

						// 遍历动作列表，打印每个动作的名称
						//  for (let i = 0; i < animations.length; i++) {
						//   console.log(animations[i].name);
						//  }
						spineks.name = "spinekz";
						spineks.interactive = true;
						spineks.on("pointerup", onButtonUp);
						spineks.on("pointerdown", onButtonDown);
						modehome.addChild(spineks);
						spineks.x = 800 * ppw;
						spineks.y = 300 * pph;
						spineks.scale.set(0.7 * pps);
					});
					//按下面的格式创建所有的ui界面元素
					//左边边框直接放进主容器里
					const leftlong = rzshcreate("leftlong");
					uiinit(leftlong);
					uihomeleft.addChild(leftlong);
					uihomeleft.setChildIndex(leftlong, 0);
					//下面是上幕布的元素
					//官阶和灯的带子
					const guan = rzshcreate("guan");
					uiinit(guan);
					//头像框，这是可点击的
					const avatar = rzshcreatex("avatar");
					uiinit(avatar);
					uihometop.addChild(guan, avatar);
					//名字
					let username = getUserName();

					const rzshuname = new PIXI.Text(username);
					// 设置字体、字号和颜色，字体不生效，因为字体载入太慢
					rzshuname.style.fontFamily = "shousha";
					rzshuname.style.fontSize = 14;
					rzshuname.position.set(170 * ppw, 4 * pph);
					rzshuname.style.fill = "#C0C0C0";
					//等级
					const rzshlv = new PIXI.Text("Lv220");
					rzshlv.style.fontFamily = "shousha";
					rzshlv.style.fontSize = 13;
					rzshlv.position.set(250 * ppw, 3 * pph);
					rzshlv.style.fill = "#DAA520";
					uihometop.addChild(rzshuname, rzshlv);
					//灯，全是可点击的
					const lightarr = ["biao", "fen", "lin", "huo", "shan", "yin", "lei", "shen", "phone", "linju", "guo", "yijiang", "erjiang", "sanjiang", "sijiang", "wujiang", "liujiang", "qijiang", "sp", "zhi", "xin", "ren", "yon", "yan"];
					const lightstop = ["yin", "lei", "shen", "phone", "linju", "wujiang", "liujiang", "qijiang"];
					for (let i = 0; i < lightarr.length; i++) {
						const name = lightarr[i];
						var light;
						var j, k;
						if (i <= 15) {
							j = 224 + 24 * i;
							k = 50;
						} else {
							j = 24 * i - 160;
							k = 73;
						}
						if (!lightstop.includes(name)) {
							light = lightcreat2(name);
							uiinit2(light);
							light.x = ppw * j;
							light.y = pph * k;
							uihometop.addChild(light);
						} else {
							light = lightcreat1(name);
							uiinit2(light);
							light.x = ppw * j;
							light.y = pph * k;
							uihometop.addChild(light);
						}
					}
					//这是小人，不可点击
					const player_nan = rzshcreate("player_nan");
					uiinit(player_nan);
					//这是升级图标，可交互
					const lvlup = rzshcreatex("lvlup");
					uiinit(lvlup);
					//这是官阶图标，可交互
					const guanico = rzshcreatex("大元帅");
					uiinit(guanico);
					//下面是vip和元宝可交互
					const vipbg1 = rzshcreatex("vipbg1");
					uiinit(vipbg1);
					const vip_v7 = vipcreat("vip_v7");
					vip_v7.x = 417 * ppw;
					vip_v7.y = 5 * pph;
					vip_v7.scale.set(0.5 * pps);
					const vipbg2 = rzshcreatex("vipbg2");
					uiinit(vipbg2);
					//元宝数
					const vipmoney = new PIXI.Text("20000");
					// 设置字体、字号和颜色，字体不生效，因为字体载入太慢
					vipmoney.style.fontFamily = "shousha";
					vipmoney.style.fontSize = 16;
					vipmoney.position.set(600 * ppw, 10 * pph);
					vipmoney.style.fill = "#C0C0C0";
					uihometop.addChild(player_nan, lvlup, guanico, vipbg1, vip_v7, vipbg2, vipmoney);
					//下面是右边的4个底圈，不可交互
					for (let i = 0; i <= 3; i++) {
						const rightbg = rzshcreate("rightbg");
						uiinit(rightbg);
						rightbg.x = rightbg.x + i * 64 * ppw;
						uihometop.addChild(rightbg);
					}
					//这是右上角的四个图，可交互
					const right1 = rzshcreatex("right2");
					uiinit(right1);
					uihometop.addChild(right1);
					const right2 = rzshcreatex("right3");
					uiinit(right2);
					uihometop.addChild(right2);
					const right4 = rzshcreatex("right44");
					uiinit(right4);
					uihometop.addChild(right4);
					const yukasaoguang = czgcreat("yukasaoguang");
					uiinit(yukasaoguang);
					yukasaoguang.animationSpeed = 0.3;
					uihometop.addChild(yukasaoguang);
					//上边预留玩家姓名，灯，vip等级，玩家头像，玩家等级，元宝数量
					//左边四个图标，可交互
					const left1 = rzshcreatex("left1");
					uiinit(left1);
					const left2 = rzshcreatex("left2");
					uiinit(left2);
					const left3 = rzshcreatex("left3");
					uiinit(left3);
					const left4 = rzshcreatex("left4");
					uiinit(left4);
					uihomeleft.addChild(left1, left2, left3, left4);
					//中间的mode区，可交互
					const mode1 = rzshcreatex("mode1");
					uiinit(mode1);
					const mode2 = rzshcreatex("mode2");
					uiinit(mode2);
					const mode3 = rzshcreatex("mode3");
					uiinit(mode3);
					const mode4 = rzshcreatex("mode4");
					uiinit(mode4);
					uihomecenter.addChild(mode1, mode2, mode3, mode4, mode4);
					uihomecenter.on("added", () => {
						//uihome.addChild(uihomecenter);
						flyIn(mode1, 0.4);
						flyIn(mode2, 0.4);
						flyIn(mode3, 0.4);
						flyIn(mode4, 0.5);
					});

					//右边活动区
					const ro2 = rzshcreatex("ro2");
					uiinit(ro2);
					const rightacbg = rzshcreatex("rightacbg");
					uiinit(rightacbg);
					//活动图片
					const riactexture = yloader.resources.rightact.texture;
					const riactive = new PIXI.Sprite(riactexture);
					riactive.name = "riactive";
					uiinit(riactive);
					const czg = czgcreat("czg");
					uiinit(czg);
					uihomeright.addChild(ro2, rightacbg, riactive, czg);
					//留活动图片和藏珍阁接口
					//下边
					const say = rzshcreatex("say");
					uiinit(say);
					//活动框，不能交互
					const actbk = rzshcreate("actbk");
					uiinit(actbk);
					const uactive1 = rzshcreatex("uactive1");
					uiinit(uactive1);
					const actak = rzshcreate("actak");
					uiinit(actak);
					uihomeunder.addChild(say, actbk, uactive1, actak);
					//活动场和斗地主，可以交互
					const activeea = rzshcreatex("activeea");
					uiinit(activeea);
					uihomeunder.addChild(activeea);
					for (let i = 0; i <= 5; i++) {
						const rightbg = rzshcreate("rightbg");
						uiinit(rightbg);
						rightbg.x = rightbg.x + (i * 78 - 284.5) * ppw;
						rightbg.y = 7.5 * pph;
						rightbg.scale.set(0.64 * pps);
						uihomeunder.addChild(rightbg);
					}
					//下边6个按钮，可交互
					const under1 = rzshcreatex("under1");
					uiinit(under1);
					const shop = czgcreat("shop");
					uiinit(shop);
					shop.animationSpeed = 0.3;
					const under3 = rzshcreatex("under3");
					uiinit(under3);
					const under4 = rzshcreatex("under4");
					uiinit(under4);
					const under5 = rzshcreatex("under5");
					uiinit(under5);
					const under6 = rzshcreatex("under6");
					uiinit(under6);
					//右下角的十字按键
					const menu1 = rzshcreate("menu1");
					uiinit(menu1, true);
					menu1.x = pixiapp.screen.width - menu1.width / 4;
					uihomeunder.addChild(under1, shop, under3, under4, under5, under6, menu1);
					//将主ui加到舞台上显示
					setTimeout(function () {
						opeen(uihome);
						try {
							spinelo.destroy();
						} catch (err) { }
					}, 1500);
					zloader.load(setupz);
				}
				//排位房间主体,左右两个盒子用来放龙头和按钮
				const paiweihome = new PIXI.Container();
				const paiweihomeleft = new PIXI.Container();
				const paiweihomeright = new PIXI.Container();
				paiweihome.width = pixiapp.screen.width;
				paiweihome.height = pixiapp.screen.height;
				paiweihomeleft.width = 0.3 * pixiapp.screen.width;
				paiweihomeleft.x = 0.1 * pixiapp.screen.width;
				paiweihomeleft.height = pixiapp.screen.height;
				paiweihomeright.width = 0.3 * pixiapp.screen.width;
				paiweihomeright.height = pixiapp.screen.height;
				paiweihomeright.x = 0.6 * pixiapp.screen.width;
				const paiweihometop = new PIXI.Container();
				paiweihometop.width = 0.4 * pixiapp.screen.width;
				paiweihometop.height = 0.3 * pixiapp.screen.height;
				paiweihome.addChild(paiweihometop, paiweihomeleft, paiweihomeright);
				//排位
				function paiweicreate(name) {
					const sprite = new PIXI.Sprite(zloader.resources.paiweiui.textures[name]);
					sprite.name = name;
					return sprite;
				}
				//龙头
				function paiweicreatey(name) {
					let fromFrames = new PIXI.AnimatedSprite.fromFrames(zloader.resources.paiweiui.data.animations[name]);
					fromFrames.name = name;
					fromFrames.anchor.set(0.5);
					fromFrames.animationSpeed = 0.3;
					fromFrames.play();
					return fromFrames;
				}
				//菜单
				const menuhome = new PIXI.Container();
				menuhome.width = pixiapp.screen.width;
				menuhome.height = pixiapp.screen.height;
				const menuhomeunder = new PIXI.Container();
				menuhomeunder.width = pixiapp.screen.width;
				menuhomeunder.height = pixiapp.screen.height;
				//遮罩防止影响下面
				let menu_hitArea = new PIXI.Graphics();
				menu_hitArea.beginFill(0x000000, 0.8);
				menu_hitArea.drawRect(0, 0, pixiapp.renderer.screen.width, pixiapp.renderer.screen.height);
				menu_hitArea.endFill();
				menu_hitArea.interactive = true;
				menuhome.addChild(menu_hitArea, menuhomeunder);

				function menucreate(name) {
					const sprite = new PIXI.Sprite(zloader.resources.menubtn.textures[name]);
					sprite.name = name;
					return sprite;
				}
				menuhome.on("added", () => {
					gsap.fromTo(
						//上面抽屉
						menuhomeunder,
						{
							y: pixiapp.screen.height + menuhomeunder.height,
						},
						{
							duration: 0.5,
							y: 0,
							ease: "power4.out",
						}
					);
				});
				//设置菜单场景
				let settinghome = new PIXI.Container();
				settinghome.width = pixiapp.screen.width;
				settinghome.height = pixiapp.screen.height;
				//带框的图层
				let settingbg = new PIXI.Container();
				settingbg.width = pixiapp.screen.width;
				settingbg.height = pixiapp.screen.height;
				//菜单底罩，点击时收起菜单
				let setting_hitArea = new PIXI.Graphics();
				setting_hitArea.beginFill(0x000000, 0.5);
				setting_hitArea.drawRect(0, 0, pixiapp.renderer.screen.width, pixiapp.renderer.screen.height);
				setting_hitArea.endFill();
				setting_hitArea.interactive = true;
				setting_hitArea.on("pointerup", () => {
					closeThemeSelection();
					uihome.removeChild(settinghome);
				});
				settinghome.addChild(setting_hitArea, settingbg);
				settinghome.on("added", () => {
					let set_dialog = settingbg.getChildByName("set_dialog");
					set_dialog.getChildByName("setab1").texture = zloader.resources.setting.textures["set_tab_choose"];
					set_dialog.getChildByName("setab2").texture = zloader.resources.setting.textures["set_tab"];
					set_dialog.getChildByName("setab3").texture = zloader.resources.setting.textures["set_tab"];
					set_dialog.removeChild(settingright2);
					set_dialog.removeChild(settingright3);
					set_dialog.addChild(settingright1);
				});
				//下面是3个设置选项的右侧具体选项框；
				let settingright1 = new PIXI.Container();
				let settingright2 = new PIXI.Container();
				let settingright3 = new PIXI.Container();
				//z加载器加载排位,身份，斗地主和十字键的图片数据
				const zloader = new PIXI.Loader();
				const assetListz = [
					{
						name: "menubtn",
						path: "extension/如真重置版/resource/images/menu.json",
					},
					{
						name: "paiweiui",
						path: "extension/如真重置版/resource/images/jj.json",
					},
					{
						name: "shenfen",
						path: "extension/如真重置版/resource/images/modeb/mode1.png",
					},
					{
						name: "doudizhu",
						path: "extension/如真重置版/resource/images/modeb/mode2.png",
					},
					{
						name: "setting",
						path: "extension/如真重置版/resource/images/setting.json",
					},
					{
						name: "VCD",
						path: "extension/如真重置版/resource/audio/vcd.jpg",
					},
				];
				assetListz.forEach(asset => {
					zloader.add(asset.name, lib.assetURL + asset.path);
				});
				rzshmusicpack.forEach(item => {
					zloader.add(item, lib.assetURL + "extension/如真重置版/resource/audio/music/" + item + "/bg.jpg");
				});

				function setupz() {
					console.timeEnd("Z加载完毕");
					//左边花纹，飘带，圈，龙头，星星，段位文字，巅峰赛，赛季等
					let jj_tittle = paiweicreate("jj_tittle");
					uiinit(jj_tittle);
					let publicui_title_bg = paiweicreate("publicui_title_bg");
					uiinit(publicui_title_bg);
					let s0 = paiweicreate("s0");
					paiweihometop.addChild(publicui_title_bg, jj_tittle, s0);
					uiinit(s0);
					let randomsaiji = Math.floor(Math.random() * 13);
					s0.texture = zloader.resources.paiweiui.textures["s" + randomsaiji];
					let ttrankbg1 = paiweicreate("ttrankbg1");
					uiinit(ttrankbg1);
					let ttrankbg3 = paiweicreate("ttrankbg3");
					uiinit(ttrankbg3);
					let ttrankbg2 = paiweicreate("ttrankbg2");
					uiinit(ttrankbg2);
					paiweihomeleft.addChild(ttrankbg1, ttrankbg3, ttrankbg2);

					//玩家段位
					let [rankduanname, rankduannum, rankduanlim, maxScore, pwid] = getName_排位();

					//这是龙头
					let ttrank;
					if (pwid != "chuanshuo") {
						ttrank = paiweicreate(`jj_grade_${pwid}`);
					} else {
						ttrank = paiweicreatey("ttrank");
					}
					uiinit(ttrank);
					paiweihomeleft.addChild(ttrank); //段位名称，当前星星，星星上限
					//	console.log(rankduannum)
					let jj_rankgrade = new PIXI.Text(rankduanname);
					jj_rankgrade.style.fontFamily = "shousha";
					jj_rankgrade.style.fontSize = 48;
					jj_rankgrade.anchor.set(0.5);
					jj_rankgrade.position.set(0, 155);
					jj_rankgrade.style.fill = "#DAA520";
					ttrankbg2.addChild(jj_rankgrade);
					//士气
					let load_progressbar = new PIXI.NineSlicePlane(zloader.resources.paiweiui.textures["load_progressbar"], 25, 30, 25, 30);
					load_progressbar.width = 280;
					load_progressbar.height = 35;
					load_progressbar.pivot.set(0.5);
					load_progressbar.position.set(-138, 210);
					ttrankbg2.addChild(load_progressbar);
					//条条
					let jj_morale = paiweicreate("jj_morale");

					jj_morale.width = (lib.config[`extension_斗转星移_playerScore`] / maxScore) * 260;
					jj_morale.height = 23;
					jj_morale.position.set(10, 6);
					load_progressbar.addChild(jj_morale);
					//士气文字
					let jj_morale_text = new PIXI.Text(lib.config[`extension_斗转星移_playerScore`] + "/" + maxScore);
					jj_morale_text.style.fontFamily = "shousha";
					jj_morale_text.style.fontSize = 24;
					jj_morale_text.anchor.set(0.5);
					jj_morale_text.position.set(0, 225);
					jj_morale_text.style.fill = "#C0C0C0";
					ttrankbg2.addChild(jj_morale_text);
					if (maxScore != 40 && maxScore != 550) {
						let jj_protect_mark = paiweicreate("jj_protect_mark");
						jj_protect_mark.position.set(75 * ppw, 0);
						load_progressbar.addChild(jj_protect_mark);
					}
					if (pwid != "chuanshuo") {
						let leftMap = {
							3: 30,
							4: 60,
							5: 90,
						};
						for (let i = 0; i < rankduanlim; i++) {
							let jj_star1 = paiweicreate("jj_star_off");
							uiinit(jj_star1);
							jj_star1.x += i * 60 * ppw - leftMap[rankduanlim] * ppw;
							if (i < rankduannum) jj_star1.texture = zloader.resources.paiweiui.textures["jj_star_on"];
							paiweihomeleft.addChild(jj_star1);
						}
					} else {
						let jj_star1 = paiweicreate("jj_star_on");
						uiinit(jj_star1);
						let xingxingxx = new PIXI.Text("x " + rankduannum);
						xingxingxx.style.fontFamily = "shousha";
						xingxingxx.style.fontSize = 48;
						xingxingxx.anchor.set(0.5);
						xingxingxx.position.set(70 * ppw, -5 * pph);
						xingxingxx.style.fill = "#DAA520";
						jj_star1.addChild(xingxingxx);
						paiweihomeleft.addChild(jj_star1);
					}

					//右边白框按钮，排位赛文字
					let tiantibg = paiweicreate("tiantibg");
					uiinit(tiantibg);
					let jj_dianfeng = paiweicreate("jj_dianfeng");
					uiinit(jj_dianfeng);
					let solobtn = paiweicreate("solobtn");
					uiinit(solobtn, true);
					let versustwobtn = paiweicreate("versustwobtn");
					uiinit(versustwobtn, true);
					let rzclosse = paiweicreate("back");
					rzclosse.name = "rzclose";
					uiinit(rzclosse, true);
					rzclosse.scale.set(0.65);
					rzclosse.y = 35 * pph;
					paiweihomeright.addChild(tiantibg, jj_dianfeng, solobtn, versustwobtn);
					paiweihome.addChild(rzclosse);
					paiweihome.on("added", () => {
						gsap.fromTo(
							//右边弹簧
							paiweihomeright,
							{
								y: -paiweihomeright.height - 100,
							},
							{
								duration: 0.7,
								y: paiweihomeright.y,
								ease: "elastic.out(1, 0.3)",
							}
						);
						gsap.fromTo(
							ttrank.scale,
							{
								x: 0.1,
								y: 0.1,
							},
							{
								x: ttrank.scale.x,
								y: ttrank.scale.y,
								duration: 1,
								ease: "power4.out",
								onComplete: function () {
									window.isOnhide = false;
								},
							}
						); //龙头缩放
						gsap.fromTo(
							//上面抽屉
							paiweihometop,
							{
								y: -paiweihometop.height - 100,
							},
							{
								duration: 0.5,
								y: 0,
								ease: "power4.out",
							}
						);
					});
					//菜单背景
					let bigmenu = menucreate("bigmenu");
					uiinit(bigmenu);
					menuhomeunder.addChild(bigmenu);
					//按钮
					const menubtnarr = ["menuyi1", "menuyi2", "menuyi3", "menuyi4", "menuyi5", "menuyi6", "menuer1", "menusan1", "menusan2", "menusan3", "menusan4", "menusi1", "menusi2", "menusi3", "menusi4", "menusi5", "menusi6", "menuwu1", "menuwu2", "menuwu3"];
					for (let i = 0; i < menubtnarr.length; i++) {
						let name = menubtnarr[i];
						let menubtn = menucreate(name);
						uiinit(menubtn, true);
						menubtn.scale.set(0.75 * pps);
						//红点
						if (lib.config.red_point) {
							if (Math.random() < 0.1) {
								let sprite = setcreate("redPoint");
								sprite.x = menubtn.width / 1.2;
								sprite.y = -menubtn.height / 4;
								sprite.scale.set(0.8 * pps);
								menubtn.addChild(sprite);
							}
						}
						if (i < 6) {
							menubtn.x = (180 + i * 122) * ppw;
							menubtn.y = 110 * pph;
						} else if (i == 6) {
							menubtn.x = 180 * ppw;
							menubtn.y = 195 * pph;
						} else if (6 < i && i < 11) {
							menubtn.x = (180 + (i - 7) * 122) * ppw;
							menubtn.y = 280 * pph;
						} else if (11 <= i && i < 17) {
							menubtn.x = (180 + (i - 11) * 122) * ppw;
							menubtn.y = 365 * pph;
						} else if (17 <= i) {
							menubtn.x = (180 + (i - 17) * 122) * ppw;
							menubtn.y = 450 * pph;
						}
						menuhomeunder.addChild(menubtn);
					}
					let pubbtn_close = menucreate("pubbtn_close");
					uiinit(pubbtn_close, true);
					menuhomeunder.addChild(pubbtn_close);
					//设置方面
					//游戏：自动确认，无闪自动取消，拆顺手牌选择，不无懈自己，不对敌方出桃
					//背景音乐，
					//技能：自动发动：
					//游戏背景，随机背景按钮
					function setcreate(name) {
						const sprite = new PIXI.Sprite(zloader.resources.setting.textures[name]);
						sprite.name = name;
						return sprite;
					}

					function setcreatex(name) {
						const sprite = new PIXI.Sprite();
						sprite.interactive = true;
						//	sprite.on('pointerdown', onbuttonzd);
						sprite.on("pointerup", onbuttonzu);
						return sprite;
					}
					let set_dialog = setcreate("set_dialog");
					uiinit(set_dialog);
					set_dialog.interactive = true;
					set_dialog.scale.x = 2 * ppw;
					set_dialog.scale.y = 1.2 * pph;
					settingbg.addChild(set_dialog);
					// 获取纹理
					let settexture = zloader.resources.setting.textures["set_tab"];
					// 创建3个精灵
					let settings = ["setab1", "setab2", "setab3"];
					let settingsr = ["setright1", "setright1", "setright1"];

					//下面开始摸具体设置
					//settingright1的设置，与音乐有关
					//将settingright1与set_dialog重合，三个页面与dialog想同
					settingright1.width = set_dialog.width;
					settingright1.height = set_dialog.height;
					settingright2.width = set_dialog.width;
					settingright2.height = set_dialog.height;
					settingright3.width = set_dialog.width;
					settingright3.height = set_dialog.height;
					for (let i = 0; i < settings.length; i++) {
						let sprite = new PIXI.Sprite(settexture);
						sprite.name = settings[i];
						uiinit(sprite, true);
						sprite.anchor.set(0.5);
						sprite.scale.set(0.4, 0.65);
						// 设置每个精灵的坐标
						// sprite.x = -175 * ppw;
						// sprite.y = i * 50 * pph - 110 * pph;

						// sprite.x = set_dialog.x - sprite.width;
						sprite.x = -175 * Math.min(ppw, 1);
						sprite.y = i * 50 * Math.min(pph, 1) - 110 * Math.min(pph, 1);
						// sprite.y =
						// 	set_dialog.y + i * sprite.height + 20;
						// 添加文字标签
						let label = new PIXI.Text("", {
							fontSize: 32,
							fill: "#C0C0C0",
							fontFamily: "shousha",
						});
						label.anchor.set(0.5);
						label.text = i === 0 ? "音乐" : i === 1 ? "游戏" : "主题";
						label.y = -8 * Math.min(pph, 1);
						sprite.addChild(label);
						set_dialog.addChild(sprite);
					}
					settingright1.on("added", () => {
						innerSprite.texture = zloader.resources[rzshbgm].texture;
					});
					settingright3.on("added", () => {
						openThemeSelection();
					});
					settingright3.on("removed", () => {
						closeThemeSelection();
					});
					//碟片总圆
					let circleContainer = new PIXI.Container();
					circleContainer.scale.x = (0.6 * pph) / ppw;
					circleContainer.interactive = true;
					let isSliding = false;
					let nextIndex;
					circleContainer.on("pointerdown", event => {
						circleContainer.startX = event.data.global.x;
						isSliding = true;
					});
					circleContainer.on("pointermove", event => {
						if (!isSliding) return;
						const distance = event.data.global.x - circleContainer.startX;
						if (distance > 0) {
							nextIndex = rzshmusicpack.indexOf(rzshbgm) + 1;
							if (nextIndex >= rzshmusicpack.length) {
								nextIndex = 0;
							}
						} else if (distance < 0) {
							nextIndex = rzshmusicpack.indexOf(rzshbgm) - 1;
							if (nextIndex < 0) {
								nextIndex = rzshmusicpack.length - 1;
							}
						}
					});
					circleContainer.on("pointerup", event => {
						let distance = event.data.global.x - circleContainer.startX;
						if (distance == 0) return;
						isSliding = false;
						rzshbgm = rzshmusicpack[nextIndex];
						game.saveConfig("rzshbgm", rzshbgm);
						// 切换纹理和文字
						innerSprite.texture = zloader.resources[rzshbgm].texture;
						bgmname.text = rzshbgm;
						PIXI.sound.remove("outgame");
						PIXI.sound.add("outgame", {
							url: lib.assetURL + "extension/如真重置版/resource/audio/music/" + rzshbgm + "/outgame.mp3",
							loop: true,
						});
						playRzshBgm();
					});
					let radius = 100 * pps;
					//外圆白底
					let outerMask = new PIXI.Graphics();
					outerMask.beginFill(0x000000);
					outerMask.drawCircle(0, 0, radius);
					outerMask.endFill();
					circleContainer.addChild(outerMask);
					//内圆黑底
					let innerMask = new PIXI.Graphics();
					innerMask.beginFill(0x000000);
					innerMask.drawCircle(0, 0, radius * 0.6); // 内圆半径为外圆半径的 0.6
					innerMask.endFill();
					circleContainer.addChild(innerMask);
					//内圆填充
					let innerTexture = zloader.resources[rzshbgm].texture;
					let innerSprite = new PIXI.Sprite(innerTexture);
					innerSprite.anchor.set(0.5);
					innerSprite.scale.set(0.2);
					gsap.to(innerSprite, {
						duration: 6,
						rotation: Math.PI * 2,
						repeat: -1,
						ease: "none",
					});
					//外圆填充
					let outerTexture = zloader.resources.VCD.texture;
					let outerSprite = new PIXI.Sprite(outerTexture);
					outerSprite.anchor.set(0.5);
					outerSprite.scale.set(0.35);
					gsap.to(outerSprite, {
						duration: 4,
						rotation: Math.PI * 2,
						repeat: -1,
						ease: "none",
					});
					circleContainer.addChild(outerSprite, innerSprite);
					innerSprite.mask = innerMask;
					outerSprite.mask = outerMask;
					settingright1.addChild(circleContainer);
					//音乐标题
					const bgmname = new PIXI.Text(rzshbgm);
					bgmname.style.fontFamily = "shousha";
					bgmname.style.fontSize = 16;
					bgmname.style.fill = "#FFE4B5";
					bgmname.anchor.set(0.5);
					bgmname.y = -110 * pph;
					settingright1.addChild(bgmname);
					//至此，音乐部分完结
					//游戏设置部分，下面都是大横条
					let auto_confirmbg = setcreate("set_mbg"); //自动确认
					auto_confirmbg.scale.set(0.35, 0.75);
					let auto_confirmtext = new PIXI.Text("自动确认");
					auto_confirmtext.style.fontFamily = "shousha";
					auto_confirmtext.style.fontSize = 28;
					auto_confirmtext.position.set(25, 3);
					auto_confirmtext.style.fill = "#FFE4B5";
					let auto_confirmset = setcreatex("set_btnn_off"); //选择框
					auto_confirmset.position.set(220, 8);
					auto_confirmset.scale.set(0.8);
					auto_confirmset.name = "auto_confirm";
					auto_confirmbg.addChild(auto_confirmtext, auto_confirmset);
					let skip_shanbg = setcreate("set_mbg"); //无闪跳过
					skip_shanbg.x = 125 * Math.min(ppw, 1);
					skip_shanbg.scale.set(0.35, 0.75);
					let skip_shantext = new PIXI.Text("无闪跳过");
					skip_shantext.style.fontFamily = "shousha";
					skip_shantext.style.fontSize = 28;
					skip_shantext.position.set(25, 3);
					skip_shantext.style.fill = "#FFE4B5";
					let skip_shanset = setcreatex("set_btnn_off"); //选择框
					skip_shanset.position.set(220, 8);
					skip_shanset.scale.set(0.8);
					skip_shanset.name = "skip_shan";
					skip_shanbg.addChild(skip_shantext, skip_shanset);
					let unauto_choosebg = setcreate("set_mbg"); //拆顺选择
					unauto_choosebg.y = 60 * Math.min(pph, 1);
					unauto_choosebg.scale.set(0.35, 0.75);
					let unauto_choosetext = new PIXI.Text("拆顺选择");
					unauto_choosetext.style.fontFamily = "shousha";
					unauto_choosetext.style.fontSize = 28;
					unauto_choosetext.position.set(25, 3);
					unauto_choosetext.style.fill = "#FFE4B5";
					let unauto_chooseset = setcreatex("set_btnn_off"); //选择框
					unauto_chooseset.position.set(220, 8);
					unauto_chooseset.scale.set(0.8);
					unauto_chooseset.name = "unauto_choose";
					unauto_choosebg.addChild(unauto_choosetext, unauto_chooseset);
					let tao_enemybg = setcreate("set_mbg"); //桃救敌方
					tao_enemybg.x = 125 * Math.min(ppw, 1);
					tao_enemybg.y = 60 * Math.min(pph, 1);
					tao_enemybg.scale.set(0.35, 0.75);
					let tao_enemytext = new PIXI.Text("对敌出桃");
					tao_enemytext.style.fontFamily = "shousha";
					tao_enemytext.style.fontSize = 28;
					tao_enemytext.position.set(25, 3);
					tao_enemytext.style.fill = "#FFE4B5";
					let tao_enemyset = setcreatex("set_btnn_off"); //选择框
					tao_enemyset.position.set(220, 8);
					tao_enemyset.scale.set(0.8);
					tao_enemyset.name = "tao_enemy";
					tao_enemybg.addChild(tao_enemytext, tao_enemyset);
					let wuxie_selfbg = setcreate("set_mbg"); //无懈自己
					wuxie_selfbg.y = 120 * Math.min(pph, 1);
					wuxie_selfbg.scale.set(0.35, 0.75);
					let wuxie_selftext = new PIXI.Text("不防自己");
					wuxie_selftext.style.fontFamily = "shousha";
					wuxie_selftext.style.fontSize = 28;
					wuxie_selftext.position.set(25, 3);
					wuxie_selftext.style.fill = "#FFE4B5";
					let wuxie_selfset = setcreatex("set_btnn_off"); //选择框
					wuxie_selfset.position.set(220, 8);
					wuxie_selfset.scale.set(0.8);
					wuxie_selfset.name = "wuxie_self";
					wuxie_selfbg.addChild(wuxie_selftext, wuxie_selfset);
					let red_pointbg = setcreate("set_mbg"); //红点入侵
					red_pointbg.y = 180 * Math.min(pph, 1);
					red_pointbg.scale.set(0.35, 0.75);
					let red_pointtext = new PIXI.Text("红点入侵");
					red_pointtext.style.fontFamily = "shousha";
					red_pointtext.style.fontSize = 28;
					red_pointtext.position.set(25, 3);
					red_pointtext.style.fill = "#FFE4B5";
					let red_pointset = setcreatex("set_btnn_off"); //选择框
					red_pointset.position.set(220, 8);
					red_pointset.scale.set(0.8);
					red_pointset.name = "red_point";
					red_pointbg.addChild(red_pointtext, red_pointset);
					let scollannouncementbg = setcreate("set_mbg"); //滚屏公告
					scollannouncementbg.x = 125 * Math.min(ppw, 1);
					scollannouncementbg.y = 120 * Math.min(pph, 1);
					scollannouncementbg.scale.set(0.35, 0.75);
					let scollannouncementtext = new PIXI.Text("滚屏公告");
					scollannouncementtext.style.fontFamily = "shousha";
					scollannouncementtext.style.fontSize = 28;
					scollannouncementtext.position.set(25, 3);
					scollannouncementtext.style.fill = "#FFE4B5";
					let scollannouncementset = setcreatex("set_btnn_off"); //选择框
					scollannouncementset.position.set(220, 8);
					scollannouncementset.scale.set(0.8);
					scollannouncementset.name = `extension_${EXTENSION_NAME}_scollannouncement`;
					scollannouncementbg.addChild(scollannouncementtext, scollannouncementset);
					settingright2.x = -120 * Math.min(ppw, 1);
					settingright2.y = -120 * Math.min(pph, 1);
					settingright2.addChild(auto_confirmbg, skip_shanbg, unauto_choosebg, tao_enemybg, wuxie_selfbg, red_pointbg, scollannouncementbg);

					function onbuttonzu(event) {
						if (lib.config[event.target.name] == true) game.saveConfig(event.target.name, false);
						else game.saveConfig(event.target.name, true);
						if (lib.config[event.target.name]) event.target.texture = zloader.resources.setting.textures["set_btnn_on"];
						else event.target.texture = zloader.resources.setting.textures["set_btnn_off"];
					}
					settingright2.on("added", () => {
						auto_confirmset.texture = lib.config.auto_confirm ? zloader.resources.setting.textures["set_btnn_on"] : zloader.resources.setting.textures["set_btnn_off"];
						skip_shanset.texture = lib.config.skip_shan ? zloader.resources.setting.textures["set_btnn_on"] : zloader.resources.setting.textures["set_btnn_off"];
						unauto_chooseset.texture = lib.config.unauto_choose ? zloader.resources.setting.textures["set_btnn_on"] : zloader.resources.setting.textures["set_btnn_off"];
						tao_enemyset.texture = lib.config.tao_enemy ? zloader.resources.setting.textures["set_btnn_on"] : zloader.resources.setting.textures["set_btnn_off"];
						wuxie_selfset.texture = lib.config.wuxie_self ? zloader.resources.setting.textures["set_btnn_on"] : zloader.resources.setting.textures["set_btnn_off"];
						red_pointset.texture = lib.config.red_point ? zloader.resources.setting.textures["set_btnn_on"] : zloader.resources.setting.textures["set_btnn_off"];
						scollannouncementset.texture = lib.config[`extension_${EXTENSION_NAME}_scollannouncement`] ? zloader.resources.setting.textures["set_btnn_on"] : zloader.resources.setting.textures["set_btnn_off"];
					});
					ploader.load(setupp);
				}

				// gloader.add('wujiang', lib.assetURL + 'extension/如真重置版/resource/images/wujiang.json');
				// gloader.add('label', lib.assetURL + 'extension/如真重置版/resource/images/label.json');
				// gloader.add('wujiangBG', lib.assetURL + 'extension/如真重置版/resource/images/wujiangbg.jpg');

				//匹配转盘
				const ploader = new PIXI.Loader();
				ploader.add("zhuanpanBG", lib.assetURL + "extension/如真重置版/resource/images/zhuanpanbg.jpg");
				ploader.add("zhuanpan", lib.assetURL + "extension/如真重置版/resource/spine/Ot/xuanzhuan.skel");
				ploader.add("dayuanshuai", lib.assetURL + "extension/如真重置版/resource/spine/Ot/大元帅/jinchang_dayuanshuai.skel");
				ploader.add("xiaosha", lib.assetURL + "extension/如真重置版/resource/images/xiaosha.png");
				ploader.add("jbg", lib.assetURL + "extension/如真重置版/resource/images/jbg.png");
				let PlayerName = ["倘若", "诗笺", "点点", "EngJ.K", "扶苏", "黄小花", "蒸佬", "🥕", "无中", "小爱莉", "柳下跖", "电动车", "小曦", "Cosette", "星鲨"];
				Array.prototype.randomGetremove = function () {
					var a = this.randomGet();
					this.remove(a);
					return a;
				};
				let pipeihome = new PIXI.Container();
				pipeihome.on("added", () => {
					uibg.texture = ploader.resources.zhuanpanBG.texture;
					let timeScale = 3.6;

					function update() {
						if (timeScale > 1) {
							timeScale -= 0.02;
							findpipei.state.timeScale = timeScale;
							renderProcess = requestAnimationFrame(update);
						} else {
							cancelAnimationFrame(renderProcess);
							renderProcess = null;
						}
					}
					renderProcess = requestAnimationFrame(update);
					let plength = lib.config.player_number;
					findpipei.state.tracks[0].onComplete = function () {
						if (renderProcess != null) {
							cancelAnimationFrame(renderProcess);
							renderProcess = null;
						}
						// rzshkz()
						gloader.load(() => {
							for (let i = 0; i < plength; i++) {
								//创造玩家
								let player = new PIXI.Sprite(ploader.resources.jbg.texture);
								player.anchor.set(0.5);
								if (plength != 8) player.scale.set(0.8);
								else player.scale.set(0.65);
								//小杀图片
								let target = zhuanzhuanwj[i];
								let player1_1 = new PIXI.Sprite(gloader.resources[target].texture);
								player1_1.width = 138;
								player1_1.height = 200;
								player1_1.anchor.set(0.5);
								player1_1.y = -15;
								//官阶入场
								let guanjieenter1 = new PIXI.spine.Spine(ploader.resources.dayuanshuai.spineData);
								guanjieenter1.state.setAnimation(0, "play1", false);
								guanjieenter1.scale.set(1.8);
								if (i == plength - 1)
									guanjieenter1.state.tracks[0].onComplete = function () {
										setTimeout(rzshkz, 100);
									};
								//名字和VIPd的框，后面要换成文理框
								let player1_2 = new PIXI.Container();
								//vip
								let player1_2_1 = new PIXI.Sprite(yloader.resources.uivip.textures["vip" + [1, 2, 3, 4, 5, 6, 7].randomGet()]);
								if (i == 0) player1_2_1.texture = yloader.resources.uivip.textures["vip7"];
								player1_2_1.anchor.set(0.5);
								player1_2_1.x = -45;
								player1_2_1.y = 110;
								//玩家名字
								let player1_2_2 = new PIXI.Text(lib.config.connect_nickname, {
									fontSize: 20,
									fill: "#DAA520",
									fontFamily: "shousha",
								});
								if (i != 0) player1_2_2.text = PlayerName.randomGetremove();
								player1_2_2.anchor.set(0.5);
								player1_2_2.y = 110;
								player1_2_2.x = 10;
								player1_2.addChild(player1_2_1, player1_2_2);
								player.addChild(player1_1, player1_2);
								player.position.set(0.5 * pixiapp.screen.width, pixiapp.screen.height);

								setTimeout(function () {
									pipeihome.addChild(player);
									//	pipeihome.setChildIndex(findpipei, i)
									gsap.fromTo(
										player,
										{
											x: pixiapp.screen.width * 0.5,
											y: pixiapp.screen.height,
										},
										{
											duration: 0.6,
											x: (pixiapp.screen.width * (i + 1)) / (plength + 1),
											y: 0.4 * pixiapp.screen.height,
											ease: "power4.out",
											onComplete: function () {
												player.addChild(guanjieenter1);
											},
										}
									);
								}, 200 * i);
							}
						});
					};
					let tips = new PIXI.Text("正在为您匹配中。。。", {
						fontSize: 22,
						fill: "#DAA520",
						fontFamily: "shousha",
					});
					tips.anchor.set(0.5);
					tips.x = 0;
					tips.y = -20;
					findpipei.addChild(tips);
				});

				function setupp() {
					console.timeEnd("p加载完毕");
					findpipei = new PIXI.spine.Spine(ploader.resources.zhuanpan.spineData);
					findpipei.x = 0.5 * pixiapp.screen.width;
					findpipei.y = pixiapp.screen.height;
					findpipei.scale.set(0.7);
					findpipei.state.setAnimation(0, "action2", false);
					pipeihome.addChild(findpipei);
					//创造匹配到的敌人
				}

				function oppeen(container) {
					window.isOnhide = true;
					pixiapp.stage.children.forEach(function (child) {
						if (child !== uibg) {
							pixiapp.stage.removeChild(child);
						}
					});
					pixiapp.stage.addChild(container);
					window.container = container;
				}

				function onButtonUpx(event) {
					if (window.currentSprite != event.target) return;
					let set_dialog = settingbg.getChildByName("set_dialog");
					window.currentSprite = null;
					switch (event.target.name) {
						case "solobtn":
							game.saveConfig("two_assign", false, "versus");
							entermodegame("versus", "two");
							if (window.isOnhide == false) rzshkz();
							break;
						case "versustwobtn":
							game.saveConfig("two_assign", true, "versus");
							entermodegame("versus", "two");
							if (window.isOnhide == false) rzshkz();
							break;
						case "menu1":
							PIXI.sound.play("WinButton");
							uihome.addChild(menuhome);
							break;
						case "rzclose":
							PIXI.sound.play("Report01");
							if (window.isOnhide != true) closee();
							break;
						case "pubbtn_close":
							PIXI.sound.play("PopUp");
							uihome.removeChild(menuhome);
							break;
						//退出登录
						case "menuwu3":
							localStorage.removeItem("Network");
							xloader.destroy();
							yloader.destroy();
							zloader.destroy();
							pixiapp.destroy(true);
							sessionStorage.removeItem("userInfo");
							window.location.reload();
							//      if (window.dyapp) window.dyapp.destroy(true);
							// window.location.href = lib.assetURL + 'extension/如真重置版/resource/html/rzsh.html';
							break;
						case "menusi5":
							uihome.removeChild(menuhome);
							uihome.addChild(settinghome);
							break;
						case "menuyi6":
							if (confirm("是否重置本赛季天梯数据？重启生效")) {
								game.saveConfig(`extension_斗转星移_playerGrade`, [1, 3, 0]);
								// game.saveConfig(`extension_斗转星移_playerGrade`, [5, 1, 5])
							}
							break;
						case "menusan1":
							if (window.dzxy && window.dzxy.dsplash) {
								uihome.removeChild(menuhome);
								window.dzxy.dsplash.subPageFunc.signin(true);
							} else {
								alert("未安装斗转星移扩展！");
							}
							break;

						case "menuyi3":
							console.log("打开背包");
							if (window.dzxy && window.dzxy.dsplash) {
								uihome.removeChild(menuhome);
								window.dzxy.dsplash.subPageFunc.packagee(true);
							} else {
								alert("未安装斗转星移扩展！");
							}
							break;
						case "setab1":
							set_dialog.getChildByName("setab1").texture = zloader.resources.setting.textures["set_tab_choose"];
							set_dialog.getChildByName("setab2").texture = zloader.resources.setting.textures["set_tab"];
							set_dialog.getChildByName("setab3").texture = zloader.resources.setting.textures["set_tab"];
							set_dialog.removeChild(settingright2);
							set_dialog.removeChild(settingright3);
							set_dialog.addChild(settingright1);
							break;
						case "setab2":
							set_dialog.getChildByName("setab1").texture = zloader.resources.setting.textures["set_tab"];
							set_dialog.getChildByName("setab2").texture = zloader.resources.setting.textures["set_tab_choose"];
							set_dialog.getChildByName("setab3").texture = zloader.resources.setting.textures["set_tab"];
							set_dialog.addChild(settingright2);
							set_dialog.removeChild(settingright3);
							set_dialog.removeChild(settingright1);
							break;
						case "setab3":
							set_dialog.getChildByName("setab1").texture = zloader.resources.setting.textures["set_tab"];
							set_dialog.getChildByName("setab2").texture = zloader.resources.setting.textures["set_tab"];
							set_dialog.getChildByName("setab3").texture = zloader.resources.setting.textures["set_tab_choose"];
							set_dialog.removeChild(settingright2);
							set_dialog.addChild(settingright3);
							set_dialog.removeChild(settingright1);
							break;
						case "wujiangback":
							closee();
							break;
						default:
					}
				}

				function onButtonDownx(event) {
					//点掉红点
					var redpoint = event.target.getChildByName("redPoint");
					event.target.removeChild(redpoint);
					window.currentSprite = event.target;
					PIXI.sound.play("TinyButton");
				}

				function entermodegame(mode, submode, playernum) {
					// 至尊场入场门槛检查
					if (mode == "doudizhu" && submode == "zhizun") {
						let packageInfo = lib.config["extension_斗转星移_package"] || {};
						let hld = (packageInfo.huanledou && packageInfo.huanledou.count) || 0;
						if (hld < 2000) {
							alert("欢乐豆不足2000，无法进入至尊场");
							return;
						}
					}
					if (window.rz_pixiApp) {
						window.rz_pixiApp.destroy(true, { children: true, textureCache: true });
						window.rz_pixiApp = null;
						window.xingxingAni = null;
						window.rz_preBox = null;
						window.rz_pixiBeiJing = null;
					}
					lib.config.mode = mode;
					game.saveConfig("mode", mode);
					if (submode != undefined) {
						game.saveConfig(mode + "_mode", submode, mode);
					}
					if (playernum != undefined) {
						lib.config.player_number = playernum;
						game.saveConfig("player_number", playernum, mode);
					}
				}

				function eee() {
					oppeen(pipeihome);
				}

				function rzshkz() {
					PIXI.sound.removeAll();
					window.removeEventListener("resize", debounceResize);
					props.click(lib.config.mode, props.node);
				}

				function flyIn(sprite, duration) {
					let start = {
						x: pixiapp.screen.width + sprite.width,
					};
					let end = {
						x: sprite.x,
					};
					let ease = "power2.out";
					gsap.fromTo(sprite, duration, start, end, {
						ease,
					}).restart();
				}
				window.inSplash = true;
				clearTimeout(window.resetGameTimeout);
				delete window.resetGameTimeout;
			});
		}

		function clearAllChild() {
			while (pixiapp.stage.children.length > 0) {
				let child = pixiapp.stage.children[0];
				//请楚所有的spine动画的事件监听和状态
				if (child.isSpine) {
					if (child.state) {
						child.state.clearListeners();
						child.state.clearTracks();
					}
					child.interactive = false;
					child.off("pointerdown");
					child.off("mouseover");
					child.off("mouseout");
				}
				pixiapp.stage.removeChild(child);
			}
		}

		//删除所有ui资源 重建
		function resizeHandle() {
			// pixiapp.resize(window.innerWidth, window.innerHeight);
			// // updateStack.forEach(fn => fn());
			// PIXI.sound.stopAll();
			// closeThemeSelection();
			// // 彻底清理所有子元素和相关资源，防止残影
			// clearAllChild();
			// loadRzsh();
			window.location.reload();
		}

		onMounted(async () => {
			initPixiApp();
			loadRzsh();
		});
		return {};
	},
};
