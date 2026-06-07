import { config } from "../../../config/dynamicSkin.js";

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
// eruda.init();
["loginBgm", "ksGame", "transitionScreen", "spineBg", "spinePe", "loginOverlay", "loginBox", "loginButton", "usernameInput", "passwordInput", "updateLogModal", "updateLogImage", "updateLog", "loginfo", "loginfoname", "reLog", "offlineButton", "kfBt", "sqBt", "kfSp", "kfBg", "kfHe", "kfText", "sqSp", "sqBg", "sqHe", "sqText"].forEach(id => {
	const element = document.getElementById(id.toLowerCase());
	if (element !== null) {
		window[id] = element;
	} else {
		window.alert(`Element with ID ${id} not found.`);
		window[id] = undefined;
	}
});

function getCoreConfigPrefix() {
	let prefix = "noname_0.9_";
	const inited = localStorage.getItem("noname_inited");
	if (inited) {
		for (const char of inited) {
			prefix += /[A-Z]|[a-z]/.test(char) ? char : "_";
		}
		prefix += "_";
	}
	return prefix;
}

function openCoreConfigDB() {
	if (!window.indexedDB) return Promise.resolve(null);
	return new Promise(resolve => {
		const request = indexedDB.open(`${getCoreConfigPrefix()}data`, 4);
		request.onerror = () => resolve(null);
		request.onblocked = () => resolve(null);
		request.onupgradeneeded = event => {
			const database = event.target.result;
			if (!database.objectStoreNames.contains("video")) {
				database.createObjectStore("video", { keyPath: "time" });
			}
			if (!database.objectStoreNames.contains("image")) {
				database.createObjectStore("image");
			}
			if (!database.objectStoreNames.contains("audio")) {
				database.createObjectStore("audio");
			}
			if (!database.objectStoreNames.contains("config")) {
				database.createObjectStore("config");
			}
			if (!database.objectStoreNames.contains("data")) {
				database.createObjectStore("data");
			}
		};
		request.onsuccess = event => resolve(event.target.result);
	});
}

function readCoreConfigValue(database, name) {
	if (!database || !database.objectStoreNames.contains("config")) return Promise.resolve(undefined);
	return new Promise(resolve => {
		const request = database.transaction(["config"], "readonly").objectStore("config").get(name);
		request.onerror = () => resolve(undefined);
		request.onsuccess = event => resolve(event.target.result);
	});
}

async function readCoreAudioConfig() {
	const database = await openCoreConfigDB();
	const result = {
		background_music: "music_off",
		volumn_background: 8,
		volumn_audio: 8,
	};
	if (database) {
		result.background_music = (await readCoreConfigValue(database, "background_music")) ?? result.background_music;
		result.volumn_background = (await readCoreConfigValue(database, "volumn_background")) ?? result.volumn_background;
		result.volumn_audio = (await readCoreConfigValue(database, "volumn_audio")) ?? result.volumn_audio;
		database.close();
		return result;
	}
	try {
		const storedConfig = JSON.parse(localStorage.getItem(`${getCoreConfigPrefix()}config`) || "{}");
		result.background_music = storedConfig.background_music ?? result.background_music;
		result.volumn_background = storedConfig.volumn_background ?? result.volumn_background;
		result.volumn_audio = storedConfig.volumn_audio ?? result.volumn_audio;
	} catch (error) {
		console.error(error);
	}
	return result;
}

function canPlayCoreBackground(config) {
	return config.background_music != "music_off" && Number(config.volumn_background) > 0;
}

function canPlayCoreAudio(config) {
	return Number(config.volumn_audio) > 0;
}

const coreAudioConfigPromise = readCoreAudioConfig();
coreAudioConfigPromise.then(audioConfig => {
	window.rzshCoreAudioConfig = audioConfig;
	if (!canPlayCoreBackground(audioConfig)) return;
	window.loginBgm.preload = "auto";
	window.loginBgm.volume = Math.max(0, Math.min(1, Number(audioConfig.volumn_background) / 8));
	window.loginBgm.play().catch(() => undefined);
});

let userInfo = localStorage.getItem("rzuserInfo");
if (userInfo) {
	userInfo = JSON.parse(userInfo);
	window.usernameInput.value = userInfo.username || "";
	window.passwordInput.value = userInfo.password || "";
	sessionStorage.setItem("rzshg", true);
} else {
	userInfo = {};
}
if (!sessionStorage.getItem("rzshk")) {
	sessionStorage.setItem("rzshk", true);
}

function showLogin() {
	window.loginOverlay.style.display = "block";
	window.usernameInput.value = userInfo.username || "";
	window.passwordInput.value = userInfo.password || "";
}

function hideLogin() {
	window.loginOverlay.style.display = "none";
}

window.offlineButton.addEventListener("click", () => {
	// sessionStorage.setItem("Network", "offline");
	enterGame();
});

window.loginButton.addEventListener("click", () => {
	const username = window.usernameInput.value;
	const password = window.passwordInput.value;
	if (username !== null && username.trim() !== "") {
		if (password !== "") {
			hideLogin();
			sessionStorage.setItem("rzshg", true);
			window.loginfo.style.display = "flex";
			window.loginfoname.textContent = username || "";
		} else {
			window.alert("密码错误！");
		}
	}
});

function addToggleClickListener(button, page, div) {
	let isOpen = false;
	button.addEventListener("click", () => {
		isOpen = !isOpen;
		page.style.display = isOpen ? "block" : "none";
		if (isOpen) {
			document.addEventListener("click", handleDocumentClick);
		} else {
			document.removeEventListener("click", handleDocumentClick);
		}
	});

	function handleDocumentClick(event) {
		if (!div.contains(event.target) && event.target !== button) {
			page.style.display = "none";
			isOpen = false;
			document.removeEventListener("click", handleDocumentClick);
		}
	}

	if (page.style.display === "block") {
		isOpen = true;
		document.addEventListener("click", handleDocumentClick);
	}
}

addToggleClickListener(window.updateLogImage, window.updateLogModal, window.updateLog);
addToggleClickListener(window.kfBt, window.kfSp, window.kfBg);
addToggleClickListener(window.sqBt, window.sqSp, window.sqBg);

const version = window.noname_update.version;
if (version !== localStorage.getItem("changever")) {
	localStorage.setItem("changever", version);
	window.updateLogModal.style.display = "block";
	addToggleClickListener(window.updateLogImage, window.updateLogModal, window.updateLog);
}

if (userInfo.username) {
	window.loginfo.style.display = "flex";
	window.loginfoname.textContent = userInfo.username || "";
}

document.getElementById("version").innerHTML = `V ${version}`;
document.getElementById("updateve").innerHTML = `${version} 版本更新啦`;
document.getElementById("updatetext").innerHTML = window.noname_update.changeLog.join(",<br>");

window.reLog.addEventListener("click", () => {
	window.loginfo.style.display = "none";
	localStorage.removeItem("loggedIn");
	showLogin();
});

const dpr = Math.max(window.devicePixelRatio * (window.documentZoom || 1), 1);

const rzapp = new PIXI.Application({
	resizeTo: document.body,
	backgroundAlpha: 0,
	resolution: dpr,
	autoDensity: true,
	antialias: true,
	forceCanvas: false,
});

document.body.appendChild(rzapp.view);
rzapp.view.style.position = "absolute";
rzapp.view.style.left = "0px";
rzapp.view.style.zIndex = "1";
rzapp.view.style.top = "0px";

const rzw = document.body.clientWidth / 1103;
const rzh = document.body.clientHeight / 514;
const xloader = new PIXI.Loader();

let spineot, spinebj, spinepe, spinedoor;
let bji, bjk, pei, pek, pel;
let rzsrc = "./spine";
let pbSrc = "./spine";
let configKeys = Object.keys(config);
let gugeConfig = localStorage.getItem(`如真重置版_guge`);
let configName = configKeys[0];
if (gugeConfig && config[gugeConfig]) {
	configName = gugeConfig;
}
if(config[configName].sznSrc){
	pbSrc = "../../../十周年UI/assets/dynamic";
}
let pcName = isMobile ? "" : "pc";

let petype = config[configName].json ? "json" : "skel";
let peSrc = `${pbSrc}/${config[configName].name}.${petype}`;
let pexArr = config[configName].x || [0, 0.5];
let peyArr = config[configName].y || [0, 0.5];
let peScale = config[configName][pcName + "scale"];
if (!peScale) {
	peScale = config[configName]["scale"] || 1;
}

let bjtype = config[configName].beijing.json ? "json" : "skel";
let bjSrc = `${pbSrc}/${config[configName].beijing.name}.${bjtype}`;
let bjxArr = config[configName].beijing.x || [0, 0.5];
let bjyArr = config[configName].beijing.y || [0, 0.5];
let bjScale = config[configName].beijing[pcName + "scale"];
if (!bjScale) {
	bjScale = config[configName].beijing["scale"] || 1;
}
xloader.add("spineBJ", bjSrc);
xloader.add("spinePE", peSrc);
xloader.add("spineOT", `${rzsrc}/Ot/kaishiyouxi.skel`);
xloader.load(() => {
	spinebj = new PIXI.spine.Spine(xloader.resources.spineBJ.spineData);
	spinepe = new PIXI.spine.Spine(xloader.resources.spinePE.spineData);
	spineot = new PIXI.spine.Spine(xloader.resources.spineOT.spineData);
	let bjanimations = spinebj.stateData.skeletonData.animations;
	let peanimations = spinepe.stateData.skeletonData.animations;

	for (let i = 0; i < bjanimations.length; i++) {
		if (bjanimations[i].name.toLowerCase() === "chuchang") {
			bji = bjanimations[i].name;
		}
		if (bjanimations[i].name.toLowerCase() === "beijing") {
			bjk = bjanimations[i].name;
		}
		if (bjanimations.length === 1) {
			bji = bjk;
		}
	}

	for (let i = 0; i < peanimations.length; i++) {
		if (peanimations[i].name.toLowerCase() === "chuchang") {
			pei = peanimations[i].name;
		}
		if (peanimations[i].name.toLowerCase() === "daiji") {
			pek = peanimations[i].name;
		}
		if (peanimations[i].name.toLowerCase() === "gongji") {
			pel = peanimations[i].name;
		}
		if (peanimations.length === 1) {
			pei = pek = pel = peanimations[0].name;
		}
		if (peanimations.length === 2) {
			pek = peanimations[0].name;
			pei = pel = peanimations[1].name;
		}
	}
	try {
		spinebj.state.setAnimation(0, bji, true);
		spinebj.state.addListener({
			complete(track, event) {
				spinebj.state.setAnimation(0, bjk, true);
			},
		});

		spinepe.state.setAnimation(0, pei, true);
		spinepe.state.addListener({
			complete(track, event) {
				spinepe.state.setAnimation(0, pek, true);
			},
		});
	} catch (error) {
		console.error(error);
	}

	console.log("scale", bjScale, peScale);
	spineot.state.setAnimation(0, "animation", true);
	spinebj.x = bjxArr[1] * document.body.clientWidth + bjxArr[0];
	spinebj.y = bjyArr[1] * document.body.clientHeight + bjyArr[0];
	spinebj.scale.set(bjScale || 1);

	spinepe.x = pexArr[1] * document.body.clientWidth + pexArr[0];
	spinepe.y = peyArr[1] * document.body.clientHeight + peyArr[0];
	spinepe.scale.set(peScale || 1);

	// if (isMobile) {
	// 	spinepe.scale.set(0.44);
	// } else {
	// 	spinepe.scale.set(0.8);
	// }

	spineot.x = 0.8 * document.body.clientWidth;
	spineot.y = 0.6 * document.body.clientHeight;
	if (isMobile) {
		spineot.scale.set(0.36);
	} else {
		spineot.scale.set(0.7);
	}
	spineot.interactive = true;
	spineot.on("pointerup", onLogin);
	rzapp.stage.addChild(spinebj, spinepe, spineot);
});

function onLogin(event) {
	try {
		spineot.state.setAnimation(0, "animation2", true);
		spineot.state.addListener({
			complete(track, event) {
				spineot.state.setAnimation(0, "animation", true, 0);
			},
		});
		spinepe.state.setAnimation(0, pel, true);
		spinepe.state.addListener({
			complete(track, event) {
				spinepe.state.setAnimation(0, pek, true);
			},
		});
		coreAudioConfigPromise.then(audioConfig => {
			if (!canPlayCoreAudio(audioConfig)) return;
			window.ksGame.volume = Math.max(0, Math.min(1, Number(audioConfig.volumn_audio) / 8));
			window.ksGame.play().catch(() => undefined);
		});
		if (pei === pek || pek === pel) {
			spineot.state.addListener({
				complete(track, event) {
					if (sessionStorage.getItem("rzshg")) {
						enterGame();
					} else {
						showLogin();
					}
				},
			});
		} else {
			spinepe.state.addListener({
				complete(track, event) {
					if (sessionStorage.getItem("rzshg")) {
						enterGame();
					} else {
						showLogin();
					}
				},
			});
		}
	} catch (error) {
		console.error(error);
		if (sessionStorage.getItem("rzshg")) {
			enterGame();
		} else {
			showLogin();
		}
	}
	/*
	spinepe.state.tracks[0].onComplete = function() {
		spinepe.state.setAnimation(0, pek, true);
	}
	*/
}

function enterGame() {
	let username = window.usernameInput.value;
	let password = window.passwordInput.value;
	let msg = JSON.stringify({
			username,
			password,
		})
	sessionStorage.setItem("userInfo", msg);
	localStorage.setItem(
		"rzuserInfo",
		msg
	);
	setTimeout(() => {
		spineot.interactive = false;
		spineot.off("pointerup", onLogin);
		xloader.destroy();
		spineot.destroy();
		spinebj.destroy();
		spinepe.destroy();
		rzapp.stop();
		spineot = null;
		spinebj = null;
		spinepe = null;
		PIXI.utils.clearTextureCache();
		rzapp.view.remove();
		rzapp.destroy(true);
		if (isMobile) {
			window.location.href = "/index.html";
		} else {
			window.location.href = "/index.html";
		}
	}, 100);
}
