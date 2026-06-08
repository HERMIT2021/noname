const DYNAMIC_ROOT = 'extension/十周年UI/assets/dynamic';

const SKEL_EXTS = ['skel', 'json'];
const IMAGE_EXTS = ['png', 'jpg', 'jpeg', 'webp'];
const DAIJI_TAGS = ['daiji2', 'xingxiang', 'daiji', 'skeleton', 'standby', 'stand'];
const CHUCHANG_TAGS = ['chuchang'];
const BEIJING_TAGS = ['beijing', 'beijing2', 'background'];
const QIANJING_TAGS = ['qianjing'];
const GONGJI_TAGS = ['chuchang2', 'gongji', 'jineng02', 'jineng'];
const TESHU_TAGS = ['jineng02', 'teshu', 'chuchang2', 'jineng'];
const ZHISHIXIAN_TAGS = ['shouji2', 'zhishixian'];
const ZHISHIXIAN_EFFECT_TAGS = ['shouji'];

function normalizePath(path) {
	return String(path || '').replace(/\\/g, '/').replace(/^\/+/, '').replace(/\/+/g, '/');
}

function stripExtension(file) {
	const index = file.lastIndexOf('.');
	return index < 0 ? file : file.slice(0, index);
}

function getExtension(file) {
	const index = file.lastIndexOf('.');
	return index < 0 ? '' : file.slice(index + 1).toLowerCase();
}

function getSkinMainName(skin) {
	if (!skin || typeof skin.name !== 'string') return null;
	return normalizePath(skin.name);
}

function getSkeletonType(skin, entry) {
	if (skin?.json || entry?.type === 'json') return 'json';
	return entry?.type || 'skel';
}

function createEmptyScanResult() {
	return {
		folders: {},
		files: {},
		skeletons: {},
		images: {},
	};
}

function addFile(scan, path, file) {
	path = normalizePath(path);
	const fullPath = normalizePath(path + '/' + file);
	const ext = getExtension(file);
	const name = normalizePath(path + '/' + stripExtension(file));
	scan.files[path] ||= [];
	scan.files[path].push(file);
	if (SKEL_EXTS.includes(ext)) {
		scan.skeletons[name] ||= {};
		scan.skeletons[name][ext] = true;
	} else if (ext === 'atlas') {
		scan.skeletons[name] ||= {};
		scan.skeletons[name].atlas = true;
	} else if (IMAGE_EXTS.includes(ext)) {
		scan.images[fullPath] = true;
		scan.skeletons[name] ||= {};
		scan.skeletons[name].image = true;
	}
}

function getFileList(game, path) {
	return new Promise(resolve => {
		let finished = false;
		const done = (folders, files) => {
			if (finished) return;
			finished = true;
			resolve({ folders: folders || [], files: files || [] });
		};
		try {
			game.getFileList(path, done, () => done([], []));
		} catch (e) {
			done([], []);
		}
	});
}

async function scanDynamicFiles(game) {
	const scan = createEmptyScanResult();
	const queue = [DYNAMIC_ROOT];
	while (queue.length) {
		const path = queue.shift();
		const { folders, files } = await getFileList(game, path);
		scan.folders[path] = folders;
		for (const file of files) {
			const ext = getExtension(file);
			if (SKEL_EXTS.includes(ext) || ext === 'atlas' || IMAGE_EXTS.includes(ext)) addFile(scan, path, file);
		}
		for (const folder of folders) queue.push(normalizePath(path + '/' + folder));
	}
	return scan;
}

function hasSkeletonFiles(scan, name, type) {
	name = normalizePath(name);
	const entry = scan.skeletons[name];
	if (!entry) return false;
	if (type === 'json') return !!entry.json;
	return !!entry.skel || !!entry.json;
}

function hasPlayableSkeleton(scan, skin) {
	const name = getSkinMainName(skin);
	if (!name) return false;
	return hasSkeletonFiles(scan, name, skin?.json ? 'json' : 'skel');
}

function filterInstalledDynamicSkins(dynamicSkin, scan, lib, game, skinSwitch) {
	let removed = 0;
	const selected = lib.config?.[skinSwitch.configKey.dynamicSkin];
	let changedSelected = false;
	for (const character in dynamicSkin) {
		const skins = dynamicSkin[character];
		if (!skins || typeof skins !== 'object') continue;
		for (const skinName of Object.keys(skins)) {
			if (!hasPlayableSkeleton(scan, skins[skinName])) {
				delete skins[skinName];
				if (selected?.[character] === skinName) {
					delete selected[character];
					changedSelected = true;
				}
				removed++;
			}
		}
		if (!Object.keys(skins).length) delete dynamicSkin[character];
	}
	if (changedSelected) game.saveConfig?.(skinSwitch.configKey.dynamicSkin, selected);
	return removed;
}

function createChineseNameMap(lib) {
	const map = {};
	for (const id in lib.character || {}) {
		const name = lib.translate?.[id];
		if (!name) continue;
		map[name] ||= [];
		map[name].push(id);
	}
	return map;
}

function resolveCharacterId(lib, chineseNameMap, folder) {
	if (lib.character?.[folder]) return folder;
	const ids = chineseNameMap[folder];
	if (ids?.length) return ids[0];
	return null;
}

function collectLocalSkinEntries(scan, lib) {
	const chineseNameMap = createChineseNameMap(lib);
	const rootFolders = scan.folders[DYNAMIC_ROOT] || [];
	const result = {};
	for (const characterFolder of rootFolders) {
		const characterPath = normalizePath(DYNAMIC_ROOT + '/' + characterFolder);
		const characterId = resolveCharacterId(lib, chineseNameMap, characterFolder);
		if (!characterId) continue;
		const skinFolders = scan.folders[characterPath] || [];
		for (const skinName of skinFolders) {
			const skinPath = normalizePath(characterPath + '/' + skinName);
			const files = scan.files[skinPath] || [];
			const entry = {
				characterFolder,
				skinName,
				skeletons: {},
				background: findBackgroundFile(characterFolder, skinName, files),
			};
			for (const file of files) {
				const ext = getExtension(file);
				if (!SKEL_EXTS.includes(ext)) continue;
				const base = stripExtension(file);
				const key = normalizePath(characterFolder + '/' + skinName + '/' + base);
				if (!scan.skeletons[key]?.atlas && !scan.skeletons[key]?.image) continue;
				entry.skeletons[base.toLowerCase()] = {
					base,
					name: key,
					type: ext,
				};
			}
			if (Object.keys(entry.skeletons).length) {
				result[characterId] ||= {};
				result[characterId][skinName] = entry;
			}
		}
	}
	return result;
}

function findBackgroundFile(characterFolder, skinName, files) {
	const candidates = ['static_bg', 'bg', 'background', 'beijing_bg', 'beijing'];
	for (const candidate of candidates) {
		const found = files.find(file => {
			const ext = getExtension(file);
			return IMAGE_EXTS.includes(ext) && stripExtension(file).toLowerCase() === candidate;
		});
		if (found) return normalizePath(characterFolder + '/' + skinName + '/' + found);
	}
	const suffixBg = files.find(file => IMAGE_EXTS.includes(getExtension(file)) && stripExtension(file).toLowerCase().endsWith('_bg'));
	return suffixBg ? normalizePath(characterFolder + '/' + skinName + '/' + suffixBg) : null;
}

function pickSkeleton(skeletons, tags) {
	for (const tag of tags) {
		if (skeletons[tag]) return skeletons[tag];
	}
	return null;
}

function createParamsFromEntry(entry) {
	const daiji = pickSkeleton(entry.skeletons, DAIJI_TAGS) || Object.values(entry.skeletons)[0];
	if (!daiji) return null;
	const params = {
		name: daiji.name,
		scale: 0.35,
		x: [0, 0.5],
		y: [0, 0.5],
		skinName: entry.skinName,
	};
	if (getSkeletonType(null, daiji) === 'json') params.json = true;
	if (entry.background) params.background = entry.background;
	const beijing = pickSkeleton(entry.skeletons, BEIJING_TAGS);
	if (beijing) params.beijing = createSubParams(beijing, { x: [0, 0.98], y: [0, 0.47] });
	const qianjing = pickSkeleton(entry.skeletons, QIANJING_TAGS);
	if (qianjing) params.qianjing = createSubParams(qianjing, { x: [0, 0.5], y: [0, 0.5] });
	const chuchang = pickSkeleton(entry.skeletons, CHUCHANG_TAGS);
	if (chuchang) {
		params.chuchang = createSubParams(chuchang, { scale: 0.7 });
		params.shizhounian = true;
	}
	const gongji = pickSkeleton(entry.skeletons, GONGJI_TAGS);
	if (gongji) params.gongji = createSubParams(gongji);
	const teshu = pickSkeleton(entry.skeletons, TESHU_TAGS);
	if (teshu) params.teshu = createSubParams(teshu);
	const zhishixian = pickSkeleton(entry.skeletons, ZHISHIXIAN_TAGS);
	if (zhishixian) {
		params.zhishixian = createSubParams(zhishixian, { scale: 0.7, delay: 0.3, speed: 0.8 });
		const effect = pickSkeleton(entry.skeletons, ZHISHIXIAN_EFFECT_TAGS);
		if (effect) params.zhishixian.effect = createSubParams(effect, { scale: 0.7, delay: 0.3, speed: 0.8 });
	}
	return params;
}

function createSubParams(entry, extras = {}) {
	const params = {
		name: entry.name,
		scale: 0.35,
		...extras,
	};
	if (entry.type === 'json') params.json = true;
	return params;
}

function addLocalUnconfiguredSkins(dynamicSkin, scan, lib) {
	const localSkins = collectLocalSkinEntries(scan, lib);
	let added = 0;
	for (const character in localSkins) {
		dynamicSkin[character] ||= {};
		for (const skinName in localSkins[character]) {
			if (dynamicSkin[character][skinName]) continue;
			const params = createParamsFromEntry(localSkins[character][skinName]);
			if (!params) continue;
			dynamicSkin[character][skinName] = params;
			added++;
		}
	}
	return added;
}

export async function resolveDecadeDynamicSkins(lib, game, skinSwitch) {
	if (!window.decadeUI?.dynamicSkin || !game?.getFileList) return { added: 0, removed: 0 };
	const scan = await scanDynamicFiles(game);
	const added = addLocalUnconfiguredSkins(decadeUI.dynamicSkin, scan, lib);
	const removed = filterInstalledDynamicSkins(decadeUI.dynamicSkin, scan, lib, game, skinSwitch);
	for (const character in decadeUI.dynamicSkin) {
		const skins = decadeUI.dynamicSkin[character];
		for (const skinName in skins) skins[skinName].skinName ||= skinName;
	}
	skinSwitch.dynamicSkinLocalScan = scan;
	console.log(`[皮肤切换] 本地动皮同步完成：新增${added}个，隐藏未安装${removed}个`);
	return { added, removed };
}
