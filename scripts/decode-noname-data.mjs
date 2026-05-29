import fs from "node:fs";
import path from "node:path";

const [input, outputDir = "output/noname-data-decoded"] = process.argv.slice(2);

if (!input) {
	console.error("Usage: node scripts/decode-noname-data.mjs <export-file> [output-dir]");
	process.exit(1);
}

const source = fs.readFileSync(input, "utf8").trim();
const decoded = Buffer.from(source, "base64").toString("utf8");
const data = JSON.parse(decoded);
const config = data.config || {};
const dbData = data.data || {};

fs.mkdirSync(outputDir, { recursive: true });

const writeJson = (name, value) => {
	fs.writeFileSync(path.join(outputDir, name), `${JSON.stringify(value, null, "\t")}\n`, "utf8");
};

const extensionNames = Array.isArray(config.extensions) ? config.extensions : [];
const extensionSettings = {};
for (const name of extensionNames) {
	const prefix = `extension_${name}_`;
	const settings = {};
	for (const [key, value] of Object.entries(config)) {
		if (key.startsWith(prefix)) {
			settings[key.slice(prefix.length)] = value;
		}
	}
	extensionSettings[name] = settings;
}

const extensionRelated = Object.fromEntries(
	Object.entries(config)
		.filter(([key]) => key === "extensions" || key === "extension_auto_import" || key === "extensionSort" || key.startsWith("extension_"))
		.sort(([a], [b]) => a.localeCompare(b, "zh-Hans-CN"))
);

const summarizeValue = value => {
	if (Array.isArray(value)) {
		return {
			type: "array",
			length: value.length,
			sample: value.slice(0, 10),
		};
	}
	if (value && typeof value === "object") {
		const keys = Object.keys(value);
		return {
			type: "object",
			keyCount: keys.length,
			sampleKeys: keys.slice(0, 20),
		};
	}
	return {
		type: typeof value,
		value,
	};
};

const compactExtensionSettings = Object.fromEntries(
	Object.entries(extensionSettings).map(([name, settings]) => [
		name,
		Object.fromEntries(Object.entries(settings).map(([key, value]) => [key, summarizeValue(value)])),
	])
);

const defaultConfigCandidate = {
	extension_auto_import: true,
	extensions: extensionNames,
	...Object.fromEntries(extensionNames.map(name => [`extension_${name}_enable`, config[`extension_${name}_enable`] === true])),
};

const summary = {
	input,
	encodedChars: source.length,
	decodedJsonChars: decoded.length,
	configKeyCount: Object.keys(config).length,
	dataKeyCount: Object.keys(dbData).length,
	extensions: extensionNames,
	enabledExtensions: extensionNames.filter(name => config[`extension_${name}_enable`] === true),
	disabledExtensions: extensionNames.filter(name => config[`extension_${name}_enable`] !== true),
	extensionAutoImport: config.extension_auto_import,
	extensionSort: config.extensionSort || [],
	plays: config.plays || [],
	hiddenPlayPack: config.hiddenPlayPack || [],
	dataKeys: Object.keys(dbData),
};

writeJson("decoded-full.json", data);
writeJson("summary.json", summary);
writeJson("extension-related-config.json", extensionRelated);
writeJson("extension-settings-by-name.json", extensionSettings);
writeJson("extension-settings-compact.json", compactExtensionSettings);
writeJson("game-config-default-candidate.json", defaultConfigCandidate);

const lines = [];
lines.push("# Noname Data Export Summary");
lines.push("");
lines.push(`- Config keys: ${summary.configKeyCount}`);
lines.push(`- Data keys: ${summary.dataKeyCount}`);
lines.push(`- Extension auto import: ${summary.extensionAutoImport}`);
lines.push(`- Extensions: ${summary.extensions.join(", ")}`);
lines.push(`- Enabled: ${summary.enabledExtensions.join(", ")}`);
lines.push(`- Disabled: ${summary.disabledExtensions.join(", ")}`);
lines.push("");
lines.push("## Extension Settings");
for (const name of extensionNames) {
	lines.push("");
	lines.push(`### ${name}`);
	const settings = compactExtensionSettings[name];
	for (const [key, value] of Object.entries(settings)) {
		lines.push(`- ${key}: ${JSON.stringify(value)}`);
	}
}
fs.writeFileSync(path.join(outputDir, "summary.md"), `${lines.join("\n")}\n`, "utf8");

console.log(`Decoded files written to ${path.resolve(outputDir)}`);
