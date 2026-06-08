import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const characterRoot = path.join(root, "apps", "core", "character");
const bannedPacks = new Set(["diy", "onlyOL"]);

const target = {
	standard: ["曹操", "司马懿", "夏侯惇", "张辽", "许褚", "郭嘉", "甄姬", "曹仁", "夏侯渊", "刘备", "关羽", "张飞", "诸葛亮", "赵云", "马超", "黄月英", "孙权", "甘宁", "吕蒙", "黄盖", "周瑜", "陆逊", "大乔", "小乔", "吕布", "貂蝉", "华佗"],
	biaofeng: ["刘备", "关羽", "马超", "张飞", "赵云", "黄月英", "诸葛亮", "曹操", "许褚", "司马懿", "夏侯惇", "甄姬", "张辽", "郭嘉", "曹仁", "夏侯渊", "黄盖", "甘宁", "孙权", "孙尚香", "陆逊", "大乔", "周瑜", "吕蒙", "华佗", "貂蝉", "吕布"],
	feng: ["夏侯渊", "曹仁", "黄忠", "魏延", "小乔", "周泰", "张角", "于吉"],
	huo: ["荀彧", "典韦", "庞统", "卧龙诸葛亮", "太史慈", "袁绍", "颜良文丑", "庞德"],
	lin: ["曹丕", "徐晃", "孟获", "祝融", "鲁肃", "孙坚", "董卓", "贾诩"],
	shan: ["张郃", "邓艾", "姜维", "刘禅", "孙策", "张昭 & 张纮", "蔡文姬", "左慈"],
	yin: ["王基", "王平", "严颜", "陆绩", "孙亮", "蒯良 & 蒯越", "许攸", "卢植"],
	lei: ["郝昭", "毌丘俭", "陈到", "诸葛瞻", "陆抗", "周妃", "袁术", "张绣"],
};

function parseCharacterIds(text) {
	const ids = new Set();
	const regex = /(?:^|\n)\s*(?:([A-Za-z0-9_$]+)|["']([^"']+)["'])\s*:\s*\{/g;
	let match;
	while ((match = regex.exec(text))) ids.add(match[1] || match[2]);
	return ids;
}

function parseTranslates(text) {
	const map = new Map();
	const regex = /(?:^|\n)\s*(?:([A-Za-z0-9_$]+)|["']([^"']+)["'])\s*:\s*["']([^"'\n]+)["']\s*,/g;
	let match;
	while ((match = regex.exec(text))) map.set(match[1] || match[2], match[3]);
	return map;
}

function normalizeName(name) {
	return name
		.replace(/[·・\s&＆]/g, "")
		.replace("甄宓", "甄姬")
		.replace("蔡琰", "蔡文姬")
		.replace("卧龙诸葛亮", "卧龙")
		.replace("卧龙诸葛", "卧龙")
		.replace("蒯越蒯良", "蒯良蒯越");
}

const localCharacters = [];
for (const entry of fs.readdirSync(characterRoot, { withFileTypes: true })) {
	if (!entry.isDirectory()) continue;
	const pack = entry.name;
	const characterFile = path.join(characterRoot, pack, "character.js");
	const translateFile = path.join(characterRoot, pack, "translate.js");
	if (!fs.existsSync(characterFile) || !fs.existsSync(translateFile)) continue;
	const ids = parseCharacterIds(fs.readFileSync(characterFile, "utf8"));
	const translates = parseTranslates(fs.readFileSync(translateFile, "utf8"));
	for (const id of ids) {
		const name = translates.get(id);
		if (!name) continue;
		localCharacters.push({ pack, id, name, banned: bannedPacks.has(pack) });
	}
}

const targetNames = [...new Set(Object.values(target).flat())];
const rows = targetNames.map(name => {
	const exactAll = localCharacters.filter(item => item.name == name);
	const fuzzyAll = localCharacters.filter(item => normalizeName(item.name) == normalizeName(name));
	return {
		name,
		exact: exactAll.filter(item => !item.banned),
		exactBanned: exactAll.filter(item => item.banned),
		fuzzy: fuzzyAll.filter(item => !item.banned),
		fuzzyBanned: fuzzyAll.filter(item => item.banned),
	};
});

const output = {
	summary: {
		targetTotalWithDuplicates: Object.values(target).flat().length,
		targetUnique: targetNames.length,
		localCharacters: localCharacters.length,
		exactSingle: rows.filter(row => row.exact.length == 1).length,
		exactMultiple: rows.filter(row => row.exact.length > 1).length,
		exactMissing: rows.filter(row => row.exact.length == 0).length,
		missingRecoverableByAlias: rows.filter(row => row.exact.length == 0 && row.fuzzy.length > 0).length,
	},
	packages: Object.fromEntries(Object.entries(target).map(([pack, list]) => {
		const items = list.map(name => rows.find(row => row.name == name));
		return [pack, {
			count: list.length,
			exactMissing: items.filter(item => item.exact.length == 0).length,
			fuzzyRecoverable: items.filter(item => item.exact.length == 0 && item.fuzzy.length > 0).length,
			exactMultiple: items.filter(item => item.exact.length > 1).length,
		}];
	})),
	multiple: rows.filter(row => row.exact.length > 1),
	missingWithAlias: rows.filter(row => row.exact.length == 0 && row.fuzzy.length > 0),
	missing: rows.filter(row => row.exact.length == 0 && row.fuzzy.length == 0),
	all: rows,
};

const outFile = path.join(root, "log", "shenhua-pack-analysis.json");
fs.writeFileSync(outFile, `${JSON.stringify(output, null, "\t")}\n`, "utf8");

console.log(JSON.stringify(output.summary, null, "\t"));
console.log("\nMULTIPLE");
for (const row of output.multiple) console.log(`${row.name}: ${row.exact.map(item => `${item.pack}:${item.id}(${item.name})`).join("; ")}`);
console.log("\nMISSING_WITH_ALIAS");
for (const row of output.missingWithAlias) console.log(`${row.name}: ${row.fuzzy.map(item => `${item.pack}:${item.id}(${item.name})`).join("; ")}`);
console.log("\nMISSING");
for (const row of output.missing) console.log(`${row.name}${row.exactBanned.length || row.fuzzyBanned.length ? ` banned=${[...row.exactBanned, ...row.fuzzyBanned].map(item => `${item.pack}:${item.id}(${item.name})`).join("; ")}` : ""}`);
console.log(`\nJSON: ${path.relative(root, outFile).replaceAll("\\", "/")}`);
