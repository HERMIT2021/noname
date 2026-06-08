import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const characterRoot = path.join(root, "apps", "core", "character");
const bannedPacks = new Set(["diy", "onlyOL"]);

const target = {
	zhi: ["费祎", "孙邵", "卞夫人", "王粲", "陈震", "荀谌", "骆统", "杜预"],
	xin: ["王甫赵累", "羊祜", "糜夫人", "孔融", "辛毗", "周处", "吴景", "王凌"],
	ren: ["华歆", "张温", "蔡贞姬", "桥公", "许靖", "向宠", "刘璋", "张仲景"],
	yong: ["宗预", "陈武董袭", "袁涣", "王双", "孙翊", "高览", "花鬘", "文鸯"],
	yan: ["蒋钦", "崔琰", "吕范", "蒋琬", "张昌蒲", "皇甫嵩", "朱儁", "刘巴"],
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
	return name.replace(/[・·\s&＆]/g, "").replace("朱俊", "朱儁").replace("桥公", "桥公");
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
		targetTotal: Object.values(target).flat().length,
		targetUnique: targetNames.length,
		localCharacters: localCharacters.length,
		exactSingle: rows.filter(row => row.exact.length == 1).length,
		exactMultiple: rows.filter(row => row.exact.length > 1).length,
		exactMissing: rows.filter(row => row.exact.length == 0).length,
		recoverableByFuzzy: rows.filter(row => row.exact.length == 0 && row.fuzzy.length > 0).length,
	},
	packages: Object.fromEntries(Object.entries(target).map(([pack, list]) => [pack, list.map(name => rows.find(row => row.name == name))])),
	multiple: rows.filter(row => row.exact.length > 1),
	missingWithFuzzy: rows.filter(row => row.exact.length == 0 && row.fuzzy.length > 0),
	missing: rows.filter(row => row.exact.length == 0 && row.fuzzy.length == 0),
	all: rows,
};

const outFile = path.join(root, "log", "shiji-pack-analysis.json");
fs.writeFileSync(outFile, `${JSON.stringify(output, null, "\t")}\n`, "utf8");

console.log(JSON.stringify(output.summary, null, "\t"));
console.log("\nEXACT");
for (const row of rows.filter(row => row.exact.length)) console.log(`${row.name}: ${row.exact.map(item => `${item.pack}:${item.id}(${item.name})`).join("; ")}`);
console.log("\nMISSING_WITH_FUZZY");
for (const row of output.missingWithFuzzy) console.log(`${row.name}: ${row.fuzzy.map(item => `${item.pack}:${item.id}(${item.name})`).join("; ")}`);
console.log("\nMISSING");
for (const row of output.missing) console.log(row.name);
console.log(`\nJSON: ${path.relative(root, outFile).replaceAll("\\", "/")}`);
