import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const input = process.argv[2] ? path.resolve(root, process.argv[2]) : path.join(root, "log", "yidongban.txt");
const output = process.argv[3] ? path.resolve(root, process.argv[3]) : path.join(root, "log", "yidongban.unique.txt");
const statsOutput = output.replace(/\.txt$/i, ".stats.json");

const text = fs.readFileSync(input, "utf8");
const lines = text
	.split(/\r?\n/)
	.map(line => line.trim())
	.filter(Boolean);

const seen = new Set();
const unique = [];
const duplicateCounts = new Map();

for (const name of lines) {
	duplicateCounts.set(name, (duplicateCounts.get(name) || 0) + 1);
	if (seen.has(name)) continue;
	seen.add(name);
	unique.push(name);
}

const stats = {
	input: path.relative(root, input).replaceAll("\\", "/"),
	output: path.relative(root, output).replaceAll("\\", "/"),
	totalLines: lines.length,
	uniqueCount: unique.length,
	duplicateLines: lines.length - unique.length,
	duplicatedNames: [...duplicateCounts.entries()]
		.filter(([, count]) => count > 1)
		.map(([name, count]) => ({ name, count })),
};

fs.writeFileSync(output, `${unique.join("\n")}\n`, "utf8");
fs.writeFileSync(statsOutput, `${JSON.stringify(stats, null, "\t")}\n`, "utf8");

console.log(`Input: ${stats.input}`);
console.log(`Output: ${stats.output}`);
console.log(`Total lines: ${stats.totalLines}`);
console.log(`Unique names: ${stats.uniqueCount}`);
console.log(`Duplicate lines removed: ${stats.duplicateLines}`);
