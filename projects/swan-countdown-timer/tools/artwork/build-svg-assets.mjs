#!/usr/bin/env node
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDir, '..', '..');

const flapSpecPath = path.join(projectRoot, 'artwork', 'flap-layouts', 'flap-spec.yaml');
const numeralRegisterPath = path.join(projectRoot, 'artwork', 'numerals', 'symbol-register.md');
const hieroglyphRegisterPath = path.join(projectRoot, 'artwork', 'hieroglyphs', 'symbol-register.md');

const masterNumeralsDir = path.join(projectRoot, 'artwork', 'master', 'numerals');
const masterHieroglyphsDir = path.join(projectRoot, 'artwork', 'master', 'hieroglyphs');
const generatedCharactersDir = path.join(projectRoot, 'artwork', 'generated', 'characters');
const generatedFlapHalvesDir = path.join(projectRoot, 'artwork', 'generated', 'flap-halves');
const generatedColorVariantsDir = path.join(projectRoot, 'artwork', 'generated', 'color-variants');

const args = process.argv.slice(2);
const symbolsArg = args.find((arg) => arg.startsWith('--symbols='));
const forceMaster = args.includes('--force-master');

function parseYamlNumber(text, key, fallback) {
  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = text.match(new RegExp(`^\\s*${escapedKey}:\\s*([0-9.]+)\\s*$`, 'm'));
  return match ? Number.parseFloat(match[1]) : fallback;
}

function parseSymbols(text) {
  const lines = text.split(/\r?\n/);
  const symbols = [];
  let inSymbols = false;

  for (const line of lines) {
    if (!inSymbols) {
      if (/^symbols:\s*$/.test(line.trim())) {
        inSymbols = true;
      }
      continue;
    }

    if (/^[A-Za-z_]+:\s*$/.test(line.trim())) {
      break;
    }

    const match = line.match(/^\s*-\s*([A-Z]\d+)\s*$/);
    if (match) {
      symbols.push(match[1]);
    }
  }

  return symbols;
}

function parseUnicodeMap(registerText, prefix) {
  const map = new Map();
  const lines = registerText.split(/\r?\n/);
  for (const line of lines) {
    const rowMatch = line.match(new RegExp(`^\\|\\s*(${prefix}\\d+)\\s*\\|`));
    if (!rowMatch) {
      continue;
    }
    const unicodeMatch = line.match(/\|\s*(U\+[0-9A-F]+)\s*\|/i);
    if (!unicodeMatch) {
      continue;
    }
    map.set(rowMatch[1], unicodeMatch[1].toUpperCase());
  }
  return map;
}

function symbolToMasterFilename(symbol) {
  if (symbol.startsWith('N')) {
    return `n-${symbol.slice(1)}.svg`;
  }
  if (symbol.startsWith('H')) {
    return `h-${symbol.slice(1)}.svg`;
  }
  throw new Error(`Unsupported symbol: ${symbol}`);
}

function symbolToMasterPath(symbol) {
  const filename = symbolToMasterFilename(symbol);
  return symbol.startsWith('N')
    ? path.join(masterNumeralsDir, filename)
    : path.join(masterHieroglyphsDir, filename);
}

function symbolToSlug(symbol) {
  return symbol.toLowerCase();
}

function escapeXml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function decodeUnicodeRef(ref) {
  const hex = ref.replace(/^U\+/i, '');
  const codePoint = Number.parseInt(hex, 16);
  if (!Number.isFinite(codePoint)) {
    return '?';
  }
  try {
    return String.fromCodePoint(codePoint);
  } catch {
    return '?';
  }
}

function placeholderChar(symbol, unicodeMap) {
  if (symbol.startsWith('N')) {
    return symbol.slice(1);
  }
  const ref = unicodeMap.get(symbol);
  return ref ? decodeUnicodeRef(ref) : symbol;
}

function createMasterSvg({ symbol, glyph, canvasWidth, canvasHeight, baseline, capHeight }) {
  const y = Math.round(canvasHeight * baseline);
  const fontSize = Math.round(canvasHeight * capHeight * 0.95);
  const fontFamily = symbol.startsWith('H')
    ? 'Noto Sans Egyptian Hieroglyphs, Segoe UI Symbol, sans-serif'
    : 'Arial Black, Arial, sans-serif';

  return `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" width="${canvasWidth}" height="${canvasHeight}" viewBox="0 0 ${canvasWidth} ${canvasHeight}">\n  <title>Master symbol ${symbol}</title>\n  <desc>Source-of-truth symbol master. Replace placeholder geometry with prop-matched vector paths as references improve.</desc>\n  <g id="glyph" fill="#111111">\n    <text x="${Math.round(canvasWidth / 2)}" y="${y}" text-anchor="middle" font-family="${fontFamily}" font-size="${fontSize}" dominant-baseline="alphabetic">${escapeXml(glyph)}</text>\n  </g>\n</svg>\n`;
}

function extractGlyphGroup(svgText) {
  const match = svgText.match(/<g\s+id="glyph"[\s\S]*?<\/g>/i);
  return match ? match[0] : null;
}

function createCharacterSvg(symbol, glyphGroup, canvasWidth, canvasHeight) {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" width="${canvasWidth}" height="${canvasHeight}" viewBox="0 0 ${canvasWidth} ${canvasHeight}">\n  <title>Character ${symbol}</title>\n  <desc>Normalized full-character artwork generated from source-of-truth master symbols.</desc>\n  ${glyphGroup}\n</svg>\n`;
}

function createUpperPanelSvg(symbol, glyphGroup, canvasWidth, splitLineY) {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" width="${canvasWidth}" height="${splitLineY}" viewBox="0 0 ${canvasWidth} ${splitLineY}">\n  <title>Upper panel ${symbol}</title>\n  <desc>Generated upper panel artwork for ${symbol}.</desc>\n  ${glyphGroup}\n</svg>\n`;
}

function createLowerPanelSvg(symbol, glyphGroup, canvasWidth, canvasHeight, splitLineY) {
  const panelHeight = canvasHeight - splitLineY;
  return `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" width="${canvasWidth}" height="${panelHeight}" viewBox="0 0 ${canvasWidth} ${panelHeight}">\n  <title>Lower panel ${symbol}</title>\n  <desc>Generated lower panel artwork for ${symbol}.</desc>\n  <g transform="translate(0 -${splitLineY})">\n    ${glyphGroup}\n  </g>\n</svg>\n`;
}

function colorsFor(symbol, group) {
  const numeral = symbol.startsWith('N');
  if (group === 'd1-3') {
    return numeral ? { bg: '#000000', fg: '#FFFFFF' } : { bg: '#000000', fg: '#D32F2F' };
  }
  return numeral ? { bg: '#FFFFFF', fg: '#000000' } : { bg: '#D32F2F', fg: '#000000' };
}

function tintGlyphGroup(glyphGroup, fill) {
  return glyphGroup
    .replace(/fill="#[0-9A-Fa-f]{3,8}"/g, '')
    .replace('<g id="glyph"', `<g id="glyph" fill="${fill}"`);
}

function createColorVariantSvg(symbol, glyphGroup, canvasWidth, canvasHeight, group) {
  const { bg, fg } = colorsFor(symbol, group);
  const tinted = tintGlyphGroup(glyphGroup, fg);
  return `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" width="${canvasWidth}" height="${canvasHeight}" viewBox="0 0 ${canvasWidth} ${canvasHeight}">\n  <title>Color variant ${symbol} ${group}</title>\n  <desc>Generated color variant for ${symbol} in ${group} group.</desc>\n  <rect x="0" y="0" width="${canvasWidth}" height="${canvasHeight}" fill="${bg}"/>\n  ${tinted}\n</svg>\n`;
}

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function ensureDir(dirPath) {
  await fs.mkdir(dirPath, { recursive: true });
}

async function writeUtf8(filePath, content) {
  await ensureDir(path.dirname(filePath));
  await fs.writeFile(filePath, content, 'utf8');
}

async function main() {
  const [flapSpec, numeralRegister, hieroglyphRegister] = await Promise.all([
    fs.readFile(flapSpecPath, 'utf8'),
    fs.readFile(numeralRegisterPath, 'utf8'),
    fs.readFile(hieroglyphRegisterPath, 'utf8'),
  ]);

  const allSymbols = parseSymbols(flapSpec);
  if (allSymbols.length === 0) {
    throw new Error('No symbols found in flap-spec.yaml.');
  }

  const selectedSymbols = symbolsArg
    ? new Set(symbolsArg.split('=')[1].split(',').map((value) => value.trim()).filter(Boolean))
    : null;

  const symbols = selectedSymbols
    ? allSymbols.filter((symbol) => selectedSymbols.has(symbol))
    : allSymbols;

  const unicodeMap = new Map([
    ...parseUnicodeMap(numeralRegister, 'N').entries(),
    ...parseUnicodeMap(hieroglyphRegister, 'H').entries(),
  ]);

  const canvasWidth = parseYamlNumber(flapSpec, 'canvas_width', 1000);
  const canvasHeight = parseYamlNumber(flapSpec, 'canvas_height', 1000);
  const splitLineY = parseYamlNumber(flapSpec, 'split_line_y', 500);
  const baseline = parseYamlNumber(flapSpec, 'baseline', 0.78);
  const capHeight = parseYamlNumber(flapSpec, 'cap_height', 0.70);

  await Promise.all([
    ensureDir(masterNumeralsDir),
    ensureDir(masterHieroglyphsDir),
    ensureDir(generatedCharactersDir),
    ensureDir(generatedFlapHalvesDir),
    ensureDir(generatedColorVariantsDir),
  ]);

  let masterCreated = 0;
  for (const symbol of symbols) {
    const masterPath = symbolToMasterPath(symbol);
    const masterExists = await exists(masterPath);

    if (!masterExists || forceMaster) {
      const glyph = placeholderChar(symbol, unicodeMap);
      const masterSvg = createMasterSvg({ symbol, glyph, canvasWidth, canvasHeight, baseline, capHeight });
      await writeUtf8(masterPath, masterSvg);
      masterCreated += 1;
    }

    const masterSvgText = await fs.readFile(masterPath, 'utf8');
    const glyphGroup = extractGlyphGroup(masterSvgText);
    if (!glyphGroup) {
      throw new Error(`Master SVG missing <g id="glyph">: ${path.relative(projectRoot, masterPath)}`);
    }

    const slug = symbolToSlug(symbol);

    await writeUtf8(
      path.join(generatedCharactersDir, `character-${slug}.svg`),
      createCharacterSvg(symbol, glyphGroup, canvasWidth, canvasHeight)
    );

    await writeUtf8(
      path.join(generatedFlapHalvesDir, `flap-upper-${slug}.svg`),
      createUpperPanelSvg(symbol, glyphGroup, canvasWidth, splitLineY)
    );

    await writeUtf8(
      path.join(generatedFlapHalvesDir, `flap-lower-${slug}.svg`),
      createLowerPanelSvg(symbol, glyphGroup, canvasWidth, canvasHeight, splitLineY)
    );

    await writeUtf8(
      path.join(generatedColorVariantsDir, `flap-${slug}-d1-3.svg`),
      createColorVariantSvg(symbol, glyphGroup, canvasWidth, canvasHeight, 'd1-3')
    );

    await writeUtf8(
      path.join(generatedColorVariantsDir, `flap-${slug}-d4-5.svg`),
      createColorVariantSvg(symbol, glyphGroup, canvasWidth, canvasHeight, 'd4-5')
    );
  }

  console.log(`Generated outputs for ${symbols.length} symbols.`);
  if (masterCreated > 0) {
    console.log(`Created ${masterCreated} master placeholder SVG files.`);
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
