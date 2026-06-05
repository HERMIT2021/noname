import { lib, game, ui, get, ai, _status } from "../../../noname.js";
import { isTargetMode, EXTENSION_NAME, imgPath, cssPath, spinePath } from "../utils/index.js";
import doudizhuStats from "../utils/DoudizhuStats.js";
import { BackpackManager } from "../utils/BackpackManager.js";

export function doudizhuAn() {
	//拿到更新前的历史最高连胜 本周最高连胜数
	let { currentStreak: lastcurrentStreak, maxStreak, weeklyMaxStreak } = doudizhuStats.getStats();

	if (lib.config[`extension_${EXTENSION_NAME}_doudizhuAn`] && isTargetMode("doudizhu", "huanle")) {
		// if (lib.config[`extension_${EXTENSION_NAME}_doudizhuAn`]) {
		lib.init.css(cssPath, "doudizhuAn");
		function createDoudizhuAn(bool) {
			return new Promise((resolve, reject) => {
				if (bool !== true && bool !== false) {
					return;
				}
				//创建背景图
				let bg = ui.create.div(".wm-ddz-bj", document.body, () => {
					// if (bool) {
					// 	skinSwitch.chukuangWorkerApi.stopEffect({
					// 		name: `../../../${EXTENSION_NAME}/resource/spine/doudizhu/SF_ddz_baoxiang`,
					// 	});
					// }
					// bg.style.display = "none";
					// resolve();
				});
				//创建查看详情图片
				let previewtip = document.createElement("img");
				previewtip.className = "wm-ddz-previewtip";
				previewtip.src = `${imgPath}/doudizhu/bottom.png`;
				bg.appendChild(previewtip);
				previewtip.onclick = function (e) {
					e.stopPropagation();
					if (bool) {
						skinSwitch.chukuangWorkerApi.stopEffect({
							name: `../../../${EXTENSION_NAME}/resource/spine/doudizhu/SF_ddz_baoxiang`,
						});
					}
					bg.style.display = "none";
					resolve();
				};
				console.log("game.me.identity", game.me.identity);

				//创建按钮容器
				let btnCon = ui.create.div(".wm-ddz-btnCon", bg);
				//创建按钮
				ui.create.div(".backhome", "返回主页", btnCon, function (e) {
					e.stopPropagation();
					window.location.reload();
				});
				ui.create.div(".zailaiButton", "再来一局", btnCon, function (e) {
					e.stopPropagation();
					game.reload();
				});

				// 标题
				let topImg = ui.create.div(".wm-ddz-top-img", bg);

				//当前连胜数  历史最高连胜  本周内的最高连胜
				let { currentStreak } = doudizhuStats.getStats();

				//右上角金票
				let currentjP = ui.create.div(".wm-ddz-currentjinp", bg);
				let cjpleft = document.createElement("img");
				cjpleft.className = "wm-ddz-cjpleft";
				cjpleft.src = `${imgPath}/doudizhu/710228.png`;
				currentjP.appendChild(cjpleft);
				let curJpNum = document.createElement("span");
				curJpNum.innerText = BackpackManager.getItemNum("jinpiao");
				currentjP.appendChild(curJpNum);

				//关闭提示
				// let closetip = document.createElement("img");
				// closetip.className = "wm-ddz-tip";
				// closetip.src = `${imgPath}/doudizhu/close.png`;
				// bg.appendChild(closetip);

				// 标题 连胜 失败 胜利
				let backurl = "";

				// 胜利
				if (bool) {
					// 新纪录
					if (currentStreak > maxStreak) {
						let xinjilubg = ui.create.div(".wm-ddz-xinjilu", bg);
						xinjilubg.style.backgroundImage = `url("${imgPath}/doudizhu/fightLordResult_7.png")`;
						let benzhouTxt = document.createElement("span");
						benzhouTxt.innerText = "新纪录";
						xinjilubg.appendChild(benzhouTxt);
					} else if (currentStreak > weeklyMaxStreak) {
						//本周最高
						let xinjilubg = ui.create.div(".wm-ddz-xinjilu", bg);
						xinjilubg.style.backgroundImage = `url("${imgPath}/doudizhu/fightLordResult_7.png")`;
						let benzhouTxt = document.createElement("span");
						benzhouTxt.innerText = "本周最高";
						xinjilubg.appendChild(benzhouTxt);
					} else {
						let xinjilubg = ui.create.div(".wm-ddz-xinjilu", bg);
						xinjilubg.style.backgroundImage = `url("${imgPath}/doudizhu/fightLordResult_7.png")`;
						let benzhouTxt = document.createElement("span");
						benzhouTxt.innerText = `本周最高:${weeklyMaxStreak}连胜`;
						xinjilubg.appendChild(benzhouTxt);
					}

					//获得金票
					let huodejinp = ui.create.div(".wm-ddz-huodejinp", bg);
					let jinpiao = game.me.identity == "zhu" ? 600 : 300;
					let jpArr = (jinpiao + "").split("");
					let jpCon = ui.create.div(".wm-ddz-top-ls-con", huodejinp);
					jpArr.forEach(item => {
						//创建金票
						let numimg = document.createElement("img");
						numimg.className = "wm-ddz-jpnum";
						numimg.src = `${imgPath}/doudizhu/newStyleLevelUp_${item}.png`;
						jpCon.appendChild(numimg);
					});
					// 一胜展示胜利
					if (currentStreak == 1) {
						backurl = "fightLordResult_3";
					} else {
						//展示连胜
						backurl = "fightLordResult_0";
						let lsCon = ui.create.div(".wm-ddz-top-ls-con", topImg);
						let lsArr = (currentStreak + "").split("");
						lsArr.forEach(item => {
							//创建连胜数字
							let numimg = document.createElement("img");
							numimg.className = "wm-ddz-lsnum";
							numimg.src = `${imgPath}/doudizhu/newStyleLevelUp_${item}.png`;
							lsCon.appendChild(numimg);
						});
						let lsTxt = document.createElement("img");
						lsTxt.className = "wm-ddz-top-ls-txt";
						lsTxt.src = `${imgPath}/doudizhu/fightLordResult_4.png`;
						lsCon.appendChild(lsTxt);
					}

					skinSwitch.chukuangWorkerApi.playEffect(
						{
							name: `../../../${EXTENSION_NAME}/resource/spine/doudizhu/SF_ddz_baoxiang`,
							version: "4.0",
							action: "play",
						},
						{ holdLastFrame: true, scale: lib.device ? 0.7 : 1, speed: 1, x: [0, 0.5], y: [0, 0.5] }
					);
					setTimeout(() => {
						game.playAudio(`ext:${EXTENSION_NAME}/resource/audio/doudizhu/DDZResultWin.mp3`);
					}, 500);
					setTimeout(() => {
						game.playAudio(`ext:${EXTENSION_NAME}/resource/audio/doudizhu/DDZResultGoldNumber.mp3`);
					}, 1000);
				} else {
					//输了 且连胜数量>=2 连胜中断
					if (lastcurrentStreak >= 2) {
						backurl = "fightLordResult_2";
					} else {
						backurl = "fightLordResult_1";
					}
					let xinjilubg = ui.create.div(".wm-ddz-xinjilu", bg);
					xinjilubg.style.backgroundImage = `url("${imgPath}/doudizhu/fightLordResult_7.png")`;
					let benzhouTxt = document.createElement("span");
					benzhouTxt.innerText = `本周最高:${weeklyMaxStreak}连胜`;
					xinjilubg.appendChild(benzhouTxt);

					let shibaitIP = ui.create.div(".wm-ddz-sbtip", bg);
					shibaitIP.innerHTML = "连胜可获得额外奖励!再试一次吧!";
					let box = document.createElement("img");
					box.className = "wm-ddz-sbtipbox";
					box.src = `${imgPath}/doudizhu/fightLordResult_12.png`;
					bg.appendChild(box);
				}
				topImg.style.backgroundImage = `url("${imgPath}/doudizhu/${backurl}.png")`;

				console.log("斗地主结算特效", bool);
			});
		}
		if (window._pushYjcmJsFn) {
			window._pushYjcmJsFn({
				index: 90,
				fn: createDoudizhuAn,
			});
		}
	}
}
