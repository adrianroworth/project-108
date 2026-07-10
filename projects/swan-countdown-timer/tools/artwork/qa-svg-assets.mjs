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

const strictGenerated = process.argv.includes('--strict-generated');

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

function symbolToMasterPath(symbol) {
  const filename = symbol.startsWith('N') ? `n-${symbol.slice(1)}.svg` : `h-${symbol.slice(1)}.svg`;
  return symbol.startsWith('N')
    ? path.join(masterNumeralsDir, filename)
    : path.join(masterHieroglyphsDir, filename);
}

function symbolToSlug(symbol) {
  return symbol.toLowerCase();
}

function findHeaderLine(markdown) {
  return markdown
    .split(/\r?\n/)
    .find((line) => line.startsWith('|') && line.includes('Symbol ID') && !line.includes('---'));
}

function headerIndex(markdown) {
  const headerLine = findHeaderLine(markdown);
  if (!headerLine) {
    return new Map();
  }

  const headers = headerLine
    .split('|')
    .slice(1, -1)
    .map((cell) => cell.trim());

  return new Map(headers.map((name, index) => [name, index]));
}

function parseRows(markdown, prefix) {
  const rows = [];
  for (const line of markdown.split(/\r?\n/)) {
    if (!line.startsWith('|') || line.includes('---')) {
      continue;
    }

    const match = line.match(new RegExp(`^\\|\\s*(${prefix}\\d+)\\s*\\|`));
    if (!match) {
      continue;
    }

    const cells = line
      .split('|')
      .slice(1, -1)
      .map((cell) => cell.trim());

    rows.push({ symbol: match[1], cells });
  }
  return rows;
}

function cell(row, indexMap, headerName) {
  const idx = indexMap.get(headerName);
  return typeof idx === 'number' ? (row.cells[idx] ?? '') : '';
}

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

function hasRequiredColumns(markdown) {
  return markdown.includes('Unicode reference')
    && markdown.includes('Reference tier')
    && markdown.includes('Evidence ref')
    && markdown.includes('Prop accuracy');
}

async function main() {
  const [flapSpec, numeralRegister, hieroglyphRegister] = await Promise.all([
    fs.readFile(flapSpecPath, 'utf8'),
    fs.readFile(numeralRegisterPath, 'utf8'),
    fs.readFile(hieroglyphRegisterPath, 'utf8'),
  ]);

  const errors = [];
  const warnings = [];

  const symbols = parseSymbols(flapSpec);
  if (symbols.length !== 26) {
    errors.push(`Expected 26 symbols in flap-spec.yaml but found ${symbols.length}.`);
  }

  if (!hasRequiredColumns(numeralRegister)) {
    errors.push('Numeral register missing required provenance columns.');
  }
  if (!hasRequiredColumns(hieroglyphRegister)) {
    errors.push('Hieroglyph register missing required provenance columns.');
  }

  const numeralIndex = headerIndex(numeralRegister);
  const hieroglyphIndex = headerIndex(hieroglyphRegister);
  const numeralRows = parseRows(numeralRegister, 'N');
  const hieroglyphRows = parseRows(hieroglyphRegister, 'H');

  for (const row of numeralRows) {
    const unicodeRef = cell(row, numeralIndex, 'Unicode reference');
    if (!/^U\+[0-9A-F]+$/i.test(unicodeRef)) {
      errors.push(`Invalid numeral Unicode reference for ${row.symbol}: ${unicodeRef || '(empty)'}`);
    }

    const tier = cell(row, numeralIndex, 'Reference tier');
    const evidence = cell(row, numeralIndex, 'Evidence ref');
    const accuracy = cell(row, numeralIndex, 'Prop accuracy');

    if (!tier || /^tbd$/i.test(tier)) warnings.push(`Reference tier not set for ${row.symbol}.`);
    if (!evidence || /^tbd$/i.test(evidence)) warnings.push(`Evidence ref not set for ${row.symbol}.`);
    if (!accuracy || /^tbd$/i.test(accuracy)) warnings.push(`Prop accuracy not set for ${row.symbol}.`);
  }

  for (const row of hieroglyphRows) {
    const unicodeRef = cell(row, hieroglyphIndex, 'Unicode reference');
    if (!/^U\+[0-9A-F]+$/i.test(unicodeRef)) {
      errors.push(`Invalid hieroglyph Unicode reference for ${row.symbol}: ${unicodeRef || '(empty)'}`);
    }

    const tier = cell(row, hieroglyphIndex, 'Reference tier');
    const evidence = cell(row, hieroglyphIndex, 'Evidence ref');
    const accuracy = cell(row, hieroglyphIndex, 'Prop accuracy');

    if (!tier || /^tbd$/i.test(tier)) warnings.push(`Reference tier not set for ${row.symbol}.`);
    if (!evidence || /^tbd$/i.test(evidence)) warnings.push(`Evidence ref not set for ${row.symbol}.`);
    if (!accuracy || /^tbd$/i.test(accuracy)) warnings.push(`Prop accuracy not set for ${row.symbol}.`);
  }

  for (const symbol of symbols) {
    const masterPath = symbolToMasterPath(symbol);
    if (!(await exists(masterPath))) {
      errors.push(`Missing master SVG: ${path.relative(projectRoot, masterPath)}`);
    }

    if (!strictGenerated) {
      continue;
    }

    const slug = symbolToSlug(symbol);
    const expected = [
      path.join(generatedCharactersDir, `character-${slug}.svg`),
      path.join(generatedFlapHalvesDir, `flap-upper-${slug}.svg`),
      path.join(generatedFlapHalvesDir, `flap-lower-${slug}.svg`),
      path.join(generatedColorVariantsDir, `flap-${slug}-d1-3.svg`),
      path.join(generatedColorVariantsDir, `flap-${slug}-d4-5.svg`),
    ];

    for (const filePath of expected) {
      if (!(await exists(filePath))) {
        errors.push(`Missing generated SVG: ${path.relative(projectRoot, filePath)}`);
      }
    }
  }

  if (warnings.length > 0) {
    console.log('Warnings:');
    for (const warning of warnings) {
      console.log(`- ${warning}`);
    }
  }

  if (errors.length > 0) {
    console.error('QA failed:');
    for (const error of errors) {
      console.error(`- ${error}`);
    }
    process.exitCode = 1;
    return;
  }

  console.log(`QA passed for ${symbols.length} symbols.${strictGenerated ? ' Generated file checks enabled.' : ''}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
