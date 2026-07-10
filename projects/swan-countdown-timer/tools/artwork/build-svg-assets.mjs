import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { extractSvgInner, loadSpec, symbolToMasterPath } from "./lib.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..", "..");

const specPath = path.join(projectRoot, "artwork", "flap-layouts", "flap-spec.yaml");
const generatedRoot = path.join(projectRoot, "artwork", "generated");
const fullDir = path.join(generatedRoot, "full");
const panelsDir = path.join(generatedRoot, "panels");
const variantsDir = path.join(generatedRoot, "color-variants");
const manifestsDir = path.join(generatedRoot, "manifests");

for (const dir of [fullDir, panelsDir, variantsDir, manifestsDir]) {
  fs.mkdirSync(dir, { recursive: true });
}

const spec = loadSpec(specPath);
const width = Number(spec.artwork?.canvas_width ?? 1000);
const height = Number(spec.artwork?.canvas_height ?? 1000);
const split = Number(spec.artwork?.split_line_y ?? 500);
const repetitions = Number(spec.mechanism?.sequence_repetitions ?? 2);
const cliSymbolsArg = process.argv.find((arg) => arg.startsWith("--symbols="));
const requestedSymbols = cliSymbolsArg
  ? cliSymbolsArg
      .replace("--symbols=", "")
      .split(",")
      .map((value) => value.trim().toUpperCase())
      .filter(Boolean)
  : [];
const selectedSymbols = requestedSymbols.length > 0 ? requestedSymbols : spec.symbols;

const colorGroups = spec.color_groups ?? {
  digits_1_3: {
    numerals: { background: "black", foreground: "white" },
    hieroglyphs: { background: "black", foreground: "red" },
  },
  digits_4_5: {
    numerals: { background: "white", foreground: "black" },
    hieroglyphs: { background: "red", foreground: "black" },
  },
};

function classForSymbol(symbolId) {
  return symbolId.startsWith("N") ? "numerals" : "hieroglyphs";
}

function sid(symbolId) {
  return symbolId.toLowerCase();
}

function writeFile(filePath, content) {
  fs.writeFileSync(filePath, `${content.trim()}\n`, "utf8");
}

function fullSvg(inner) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">
  <g id="glyph">${inner}</g>
</svg>`;
}

function panelSvg(inner, panel, bg, fg) {
  const isUpper = panel === "upper";
  const panelHeight = isUpper ? split : (height - split);
  const translateY = isUpper ? 0 : -split;
  const clipY = isUpper ? 0 : split;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${panelHeight}">
  <defs>
    <clipPath id="clip">
      <rect x="0" y="${clipY}" width="${width}" height="${panelHeight}" />
    </clipPath>
  </defs>
  <rect x="0" y="0" width="${width}" height="${panelHeight}" fill="${bg}" />
  <g clip-path="url(#clip)" transform="translate(0 ${translateY})" fill="${fg}">
    ${inner}
  </g>
</svg>`;
}

let built = 0;
const missing = [];

for (const symbolId of selectedSymbols) {
  const masterPath = symbolToMasterPath(symbolId, projectRoot.replace(/\\/g, "/"));

  if (!fs.existsSync(masterPath)) {
    missing.push(symbolId);
    continue;
  }

  const masterSvg = fs.readFileSync(masterPath, "utf8");
  const inner = extractSvgInner(masterSvg);
  const symbolKey = sid(symbolId);

  writeFile(path.join(fullDir, `character-${symbolKey}.svg`), fullSvg(inner));

  writeFile(path.join(panelsDir, `flap-upper-${symbolKey}.svg`), panelSvg(inner, "upper", "none", "black"));
  writeFile(path.join(panelsDir, `flap-lower-${symbolKey}.svg`), panelSvg(inner, "lower", "none", "black"));

  const symbolClass = classForSymbol(symbolId);

  for (const [groupName, group] of Object.entries(colorGroups)) {
    const colors = group[symbolClass];
    const suffix = groupName === "digits_1_3" ? "d1-3" : groupName === "digits_4_5" ? "d4-5" : groupName;

    writeFile(
      path.join(variantsDir, `flap-upper-${symbolKey}-${suffix}.svg`),
      panelSvg(inner, "upper", colors.background, colors.foreground),
    );

    writeFile(
      path.join(variantsDir, `flap-lower-${symbolKey}-${suffix}.svg`),
      panelSvg(inner, "lower", colors.background, colors.foreground),
    );
  }

  built += 1;
}

const wheelPositions = [];
for (let pass = 0; pass < repetitions; pass += 1) {
  for (const symbolId of spec.symbols) {
    wheelPositions.push({
      position: wheelPositions.length,
      pass: pass === 0 ? "A" : pass === 1 ? "B" : String(pass + 1),
      symbolId,
    });
  }
}

writeFile(
  path.join(manifestsDir, "wheel-sequence.json"),
  JSON.stringify(
    {
      profile: spec.profile,
      topology: spec.mechanism?.topology,
      wheel_positions: wheelPositions.length,
      symbols: spec.symbols,
      wheel_sequence: wheelPositions,
    },
    null,
    2,
  ),
);

console.log(`Built assets for ${built}/${selectedSymbols.length} symbols.`);
if (missing.length > 0) {
  console.log(`Missing master SVGs (${missing.length}): ${missing.join(", ")}`);
  process.exitCode = 2;
}
