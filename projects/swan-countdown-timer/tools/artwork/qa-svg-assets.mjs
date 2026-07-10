import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  hasEmbeddedFill,
  hasLiveText,
  hasViewBox1000,
  loadSpec,
  symbolToMasterPath,
} from "./lib.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..", "..");
const specPath = path.join(projectRoot, "artwork", "flap-layouts", "flap-spec.yaml");
const generatedWheel = path.join(projectRoot, "artwork", "generated", "manifests", "wheel-sequence.json");

const spec = loadSpec(specPath);
const errors = [];
const warnings = [];
const strictPaths = process.argv.includes("--strict-paths");
const cliSymbolsArg = process.argv.find((arg) => arg.startsWith("--symbols="));
const requestedSymbols = cliSymbolsArg
  ? cliSymbolsArg
      .replace("--symbols=", "")
      .split(",")
      .map((value) => value.trim().toUpperCase())
      .filter(Boolean)
  : [];
const selectedSymbols = requestedSymbols.length > 0 ? requestedSymbols : spec.symbols;

if (Number(spec.mechanism?.wheel_positions) !== Number(spec.symbols.length) * Number(spec.mechanism?.sequence_repetitions ?? 2)) {
  errors.push("wheel_positions does not equal symbols.length * sequence_repetitions");
}

if (spec.symbols.length !== Number(spec.mechanism?.unique_symbols)) {
  errors.push("unique_symbols does not match symbols.length");
}

for (const symbolId of selectedSymbols) {
  const masterPath = symbolToMasterPath(symbolId, projectRoot.replace(/\\/g, "/"));

  if (!fs.existsSync(masterPath)) {
    errors.push(`Missing master file for ${symbolId}: ${masterPath}`);
    continue;
  }

  const svg = fs.readFileSync(masterPath, "utf8");

  if (!/<svg\b/i.test(svg)) {
    errors.push(`Invalid SVG (missing <svg>) for ${symbolId}`);
  }

  if (!hasViewBox1000(svg)) {
    warnings.push(`Master ${symbolId} does not use viewBox=0 0 1000 1000`);
  }

  if (hasLiveText(svg)) {
    const message = `Master ${symbolId} contains live <text>; convert to paths before production freeze`;
    if (strictPaths) {
      errors.push(message);
    } else {
      warnings.push(message);
    }
  }

  if (hasEmbeddedFill(svg)) {
    warnings.push(`Master ${symbolId} contains explicit fill attributes; color variants may not override cleanly`);
  }
}

if (fs.existsSync(generatedWheel)) {
  const data = JSON.parse(fs.readFileSync(generatedWheel, "utf8"));
  const seq = Array.isArray(data.wheel_sequence) ? data.wheel_sequence : [];

  if (seq.length !== Number(spec.mechanism?.wheel_positions)) {
    errors.push(`Generated wheel sequence length ${seq.length} does not equal expected ${spec.mechanism?.wheel_positions}`);
  }
}

if (warnings.length > 0) {
  console.log("Warnings:");
  for (const warning of warnings) {
    console.log(`- ${warning}`);
  }
}

if (errors.length > 0) {
  console.error("Errors:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("QA checks passed.");
