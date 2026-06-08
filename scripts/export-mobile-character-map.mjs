import fs from "node:fs";
import path from "node:path";
import { mobileCharacterCatalogs, mobileCharacters } from "../apps/core/noname/library/mobile-character-map.js";

const root = path.resolve(import.meta.dirname, "..");
const outputJson = path.join(root, "log", "mobile-character-map.json");
const outputCsv = path.join(root, "log", "mobile-character-map.csv");
const outputExcelCsv = path.join(root, "log", "mobile-character-map.excel.csv");

function csvEscape(value) {
	const text = String(value ?? "");
	return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

const rows = [];
const seen = new Map();

for (const catalog of Object.values(mobileCharacterCatalogs)) {
	for (const packId of catalog.order) {
		const pack = catalog.packs[packId];
		if (!pack) continue;
		for (const id of pack.characters) {
			const character = mobileCharacters[id];
			const key = `${catalog.id}.${pack.id}.${id}`;
			rows.push({
				key,
				catalogId: catalog.id,
				catalogName: catalog.name,
				packId: pack.id,
				packName: pack.name,
				mobileName: character?.name || "",
				nonameId: character?.nonameId || id,
				originPack: character?.originPack || "",
				localName: character?.localName || "",
				aliases: (character?.aliases || []).join(";"),
				quality: character?.quality || "待定",
				obtain: (character?.obtain || []).join(";"),
				price: JSON.stringify(character?.price || {}),
				recruitWeight: character?.recruit?.weight ?? "",
				duplicate: JSON.stringify(character?.duplicate || {}),
				duplicateInCatalog: seen.has(id) ? seen.get(id) : "",
			});
			if (!seen.has(id)) seen.set(id, `${catalog.name}/${pack.name}`);
		}
	}
}

const missingDefinitions = rows.filter(row => !mobileCharacters[row.nonameId]);
const duplicateEntries = rows.filter(row => row.duplicateInCatalog);
const result = {
	summary: {
		catalogCount: Object.keys(mobileCharacterCatalogs).length,
		rowCount: rows.length,
		uniqueCharacterCount: new Set(rows.map(row => row.nonameId)).size,
		missingDefinitionCount: missingDefinitions.length,
		duplicateEntryCount: duplicateEntries.length,
	},
	rows,
	missingDefinitions,
	duplicateEntries,
};

const header = ["catalogId", "catalogName", "packId", "packName", "mobileName", "nonameId", "originPack", "localName", "aliases", "quality", "obtain", "price", "recruitWeight", "duplicate", "duplicateInCatalog"];
const csv = [header, ...rows.map(row => header.map(key => row[key]))]
	.map(row => row.map(csvEscape).join(","))
	.join("\n");

fs.writeFileSync(outputJson, `${JSON.stringify(result, null, "\t")}\n`, "utf8");
let actualOutputCsv = outputCsv;
try {
	fs.writeFileSync(outputCsv, `\ufeff${csv}\n`, "utf8");
} catch (error) {
	if (error?.code != "EBUSY") throw error;
	actualOutputCsv = outputExcelCsv;
	fs.writeFileSync(outputExcelCsv, `\ufeff${csv}\n`, "utf8");
}

console.log(JSON.stringify(result.summary, null, "\t"));
console.log(`JSON: ${path.relative(root, outputJson).replaceAll("\\", "/")}`);
console.log(`CSV: ${path.relative(root, actualOutputCsv).replaceAll("\\", "/")}`);
