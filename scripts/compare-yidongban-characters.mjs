import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const heroListPath = process.argv[2] ? path.resolve(root, process.argv[2]) : path.join(root, "log", "yidongban.unique.txt");
const characterRoot = path.join(root, "apps", "core", "character");
const outputJson = path.join(root, "log", "yidongban.character-match.json");
const outputCsv = path.join(root, "log", "yidongban.character-match.csv");
const outputExcelCsv = path.join(root, "log", "yidongban.character-match.excel.csv");

function readText(file) {
	return fs.readFileSync(file, "utf8");
}

function listDirs(dir) {
	return fs.readdirSync(dir, { withFileTypes: true }).filter(item => item.isDirectory()).map(item => item.name);
}

function parseCharacterIds(text) {
	const ids = new Set();
	const regex = /(?:^|\n)\s*(?:([A-Za-z0-9_$]+)|["']([^"']+)["'])\s*:\s*\{/g;
	let match;
	while ((match = regex.exec(text))) {
		ids.add(match[1] || match[2]);
	}
	return ids;
}

function parseTranslates(text) {
	const map = new Map();
	const regex = /(?:^|\n)\s*(?:([A-Za-z0-9_$]+)|["']([^"']+)["'])\s*:\s*["']([^"'\n]+)["']\s*,/g;
	let match;
	while ((match = regex.exec(text))) {
		map.set(match[1] || match[2], match[3]);
	}
	return map;
}

function csvEscape(value) {
	const text = String(value ?? "");
	return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

const heroNames = readText(heroListPath)
	.split(/\r?\n/)
	.map(line => line.trim())
	.filter(Boolean);

const localCharacters = [];
for (const pack of listDirs(characterRoot)) {
	const characterFile = path.join(characterRoot, pack, "character.js");
	const translateFile = path.join(characterRoot, pack, "translate.js");
	if (!fs.existsSync(characterFile) || !fs.existsSync(translateFile)) continue;
	const ids = parseCharacterIds(readText(characterFile));
	const translates = parseTranslates(readText(translateFile));
	for (const id of ids) {
		const name = translates.get(id);
		if (!name) continue;
		localCharacters.push({ id, name, pack });
	}
}

const byName = new Map();
for (const item of localCharacters) {
	if (!byName.has(item.name)) byName.set(item.name, []);
	byName.get(item.name).push(item);
}

const matches = heroNames.map(name => {
	const candidates = byName.get(name) || [];
	return {
		name,
		status: candidates.length == 0 ? "missing" : candidates.length == 1 ? "single" : "multiple",
		count: candidates.length,
		candidates,
	};
});

const summary = {
	heroList: path.relative(root, heroListPath).replaceAll("\\", "/"),
	heroCount: heroNames.length,
	localCharacterCount: localCharacters.length,
	matchedNames: matches.filter(item => item.count > 0).length,
	missingNames: matches.filter(item => item.count == 0).length,
	multipleNames: matches.filter(item => item.count > 1).length,
	singleNames: matches.filter(item => item.count == 1).length,
};

const result = {
	summary,
	matches,
	missing: matches.filter(item => item.status == "missing").map(item => item.name),
	multiple: matches.filter(item => item.status == "multiple"),
};

const csvRows = [["name", "status", "count", "candidates"]];
for (const item of matches) {
	csvRows.push([
		item.name,
		item.status,
		item.count,
		item.candidates.map(candidate => `${candidate.pack}:${candidate.id}`).join(";"),
	]);
}

fs.writeFileSync(outputJson, `${JSON.stringify(result, null, "\t")}\n`, "utf8");
// Excel on Windows may treat plain UTF-8 CSV as ANSI when opened directly.
// Prefix BOM so Chinese names are decoded correctly by double-click/open.
let actualOutputCsv = outputCsv;
try {
	fs.writeFileSync(outputCsv, `\ufeff${csvRows.map(row => row.map(csvEscape).join(",")).join("\n")}\n`, "utf8");
} catch (error) {
	if (error?.code != "EBUSY") throw error;
	actualOutputCsv = outputExcelCsv;
	fs.writeFileSync(outputExcelCsv, `\ufeff${csvRows.map(row => row.map(csvEscape).join(",")).join("\n")}\n`, "utf8");
}

console.log(`Hero names: ${summary.heroCount}`);
console.log(`Local characters: ${summary.localCharacterCount}`);
console.log(`Matched names: ${summary.matchedNames}`);
console.log(`Single matches: ${summary.singleNames}`);
console.log(`Multiple matches: ${summary.multipleNames}`);
console.log(`Missing names: ${summary.missingNames}`);
console.log(`JSON: ${path.relative(root, outputJson).replaceAll("\\", "/")}`);
console.log(`CSV: ${path.relative(root, actualOutputCsv).replaceAll("\\", "/")}`);
