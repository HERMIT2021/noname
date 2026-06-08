import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const characterRoot = path.join(root, "apps", "core", "character");
const bannedPacks = new Set(["diy", "onlyOL"]);

const target = {
	zhi: ["谋周瑜", "谋张角", "谋贾诩", "谋曹操", "谋甄姬", "谋刘备", "谋大乔", "谋孙权", "谋诸葛亮", "谋荀彧", "谋田豫"],
	shi: ["谋陈宫", "谋庞统", "谋韩当", "谋徐晃", "谋马超", "谋法正", "谋貂蝉", "谋甘宁", "谋曹丕", "谋郭嘉", "谋张郃"],
	tong: ["谋刘桢", "谋张飞", "谋赵云", "谋小乔", "谋夏侯渊", "谋杨婉", "谋夏侯氏", "谋孙策", "谋祝融", "谋夏侯惇", "谋朱然"],
	yu: ["谋吕蒙", "谋于禁", "谋卢植", "谋陆逊", "谋黄忠", "谋黄盖", "谋曹仁", "谋黄月英", "谋高顺", "谋郭淮"],
	neng: ["谋张辽", "谋华雄", "谋孙尚香", "谋姜维", "谋袁绍", "谋孟获", "谋关羽", "谋公孙瓒", "谋诸葛瑾", "谋吕布"],
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
	return name.replace(/[・·\s]/g, "").replace(/^谋/, "谋").replace(/^谋/, "谋");
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
	const idHintAll = localCharacters.filter(item => item.id.startsWith("sb_") && normalizeName(item.name).endsWith(normalizeName(name).replace(/^谋/, "")));
	return {
		name,
		exact: exactAll.filter(item => !item.banned),
		exactBanned: exactAll.filter(item => item.banned),
		fuzzy: fuzzyAll.filter(item => !item.banned),
		fuzzyBanned: fuzzyAll.filter(item => item.banned),
		idHint: idHintAll.filter(item => !item.banned),
	};
});

const output = {
	summary: {
		targetTotal: Object.values(target).flat().length,
		targetUnique: targetNames.length,
		localCharacters: localCharacters.length,
		exactSingle: rows.filter(row => row.exact.length == 1).length,
		exactMultiple: rows.filter(row => row.exact.length > 1).length,
		exactMissing: rows.filter(row => row.exact.length == 0).length,
		recoverableByFuzzy: rows.filter(row => row.exact.length == 0 && row.fuzzy.length > 0).length,
		recoverableByIdHint: rows.filter(row => row.exact.length == 0 && row.fuzzy.length == 0 && row.idHint.length > 0).length,
	},
	packages: Object.fromEntries(Object.entries(target).map(([pack, list]) => [pack, list.map(name => rows.find(row => row.name == name))])),
	multiple: rows.filter(row => row.exact.length > 1),
	missingWithFuzzy: rows.filter(row => row.exact.length == 0 && row.fuzzy.length > 0),
	missingWithIdHint: rows.filter(row => row.exact.length == 0 && row.fuzzy.length == 0 && row.idHint.length > 0),
	missing: rows.filter(row => row.exact.length == 0 && row.fuzzy.length == 0 && row.idHint.length == 0),
	all: rows,
};

const outFile = path.join(root, "log", "mougong-pack-analysis.json");
fs.writeFileSync(outFile, `${JSON.stringify(output, null, "\t")}\n`, "utf8");

console.log(JSON.stringify(output.summary, null, "\t"));
console.log("\nEXACT");
for (const row of rows.filter(row => row.exact.length)) console.log(`${row.name}: ${row.exact.map(item => `${item.pack}:${item.id}(${item.name})`).join("; ")}`);
console.log("\nMISSING");
for (const row of output.missing) console.log(row.name);
console.log(`\nJSON: ${path.relative(root, outFile).replaceAll("\\", "/")}`);
