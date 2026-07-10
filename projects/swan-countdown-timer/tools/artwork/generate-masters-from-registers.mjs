import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..", "..");

const numeralRegisterPath = path.join(projectRoot, "artwork", "numerals", "symbol-register.md");
const hieroglyphRegisterPath = path.join(projectRoot, "artwork", "hieroglyphs", "symbol-register.md");
const numeralMasterDir = path.join(projectRoot, "artwork", "numerals", "master");
const hieroglyphMasterDir = path.join(projectRoot, "artwork", "hieroglyphs", "master");

fs.mkdirSync(numeralMasterDir, { recursive: true });
fs.mkdirSync(hieroglyphMasterDir, { recursive: true });

function writeSvg(filePath, textNode) {
  const content = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
  ${textNode}
</svg>`;
  fs.writeFileSync(filePath, `${content.trim()}\n`, "utf8");
}

function parseNumeralIds(registerText) {
  const ids = [];
  const regex = /^\|\s*(N\d)\s*\|/gm;
  let match = null;
  while ((match = regex.exec(registerText)) !== null) {
    ids.push(match[1]);
  }
  return ids;
}

function parseHieroglyphEntries(registerText) {
  const entries = [];
  const regex = /^\|\s*(H\d+)\s*\|\s*([^|]+)\s*\|\s*([^|]+)\s*\|\s*(U\+[0-9A-F]+)\s*\|/gm;
  let match = null;
  while ((match = regex.exec(registerText)) !== null) {
    entries.push({
      id: match[1],
      symbolCell: match[2].trim(),
      unicode: match[4].trim(),
    });
  }
  return entries;
}

const numeralRegister = fs.readFileSync(numeralRegisterPath, "utf8");
const hieroglyphRegister = fs.readFileSync(hieroglyphRegisterPath, "utf8");

const numeralIds = parseNumeralIds(numeralRegister);
const hieroglyphEntries = parseHieroglyphEntries(hieroglyphRegister);

for (const id of numeralIds) {
  const value = id.slice(1);
  const fileName = `n-${value}.svg`;
  const filePath = path.join(numeralMasterDir, fileName);

  writeSvg(
    filePath,
    `<text x="500" y="780" text-anchor="middle" font-family="'Arial Black', Bahnschrift, 'DIN Alternate', 'Arial Narrow', sans-serif" font-size="760">${value}</text>`,
  );
}

for (const entry of hieroglyphEntries) {
  const value = entry.id.slice(1);
  const fileName = `h-${value}.svg`;
  const filePath = path.join(hieroglyphMasterDir, fileName);

  // Use the register's explicit Unicode mapping as source of truth.
  const hexCode = entry.unicode.replace("U+", "").toLowerCase();
  writeSvg(
    filePath,
    `<text x="500" y="780" text-anchor="middle" font-family="'Segoe UI Historic', 'Noto Sans Egyptian Hieroglyphs', serif" font-size="700">&#x${hexCode};</text>`,
  );
}

console.log(`Generated ${numeralIds.length} numeral masters and ${hieroglyphEntries.length} hieroglyph masters from registers.`);
