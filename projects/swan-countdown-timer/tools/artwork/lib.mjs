import fs from "node:fs";

export function parseSimpleYaml(text) {
  const lines = text.split(/\r?\n/);
  const root = {};
  const stack = [{ indent: -1, container: root }];

  function nextSignificantLine(startIndex) {
    for (let j = startIndex; j < lines.length; j += 1) {
      const raw = lines[j];
      if (!raw) {
        continue;
      }
      const trimmed = raw.trim();
      if (!trimmed || trimmed.startsWith("#")) {
        continue;
      }
      return raw;
    }
    return null;
  }

  function parseScalar(value) {
    if (value === "true") return true;
    if (value === "false") return false;
    if (/^-?\d+(?:\.\d+)?$/.test(value)) return Number(value);
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      return value.slice(1, -1);
    }
    return value;
  }

  for (let i = 0; i < lines.length; i += 1) {
    const raw = lines[i];
    if (!raw) {
      continue;
    }

    const indent = raw.match(/^\s*/)[0].length;
    const trimmed = raw.trim();

    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }

    while (stack.length > 1 && indent <= stack[stack.length - 1].indent) {
      stack.pop();
    }

    const current = stack[stack.length - 1].container;

    if (trimmed.startsWith("- ")) {
      if (!Array.isArray(current)) {
        throw new Error(`Invalid YAML list placement on line ${i + 1}: ${raw}`);
      }
      current.push(parseScalar(trimmed.slice(2).trim()));
      continue;
    }

    const match = trimmed.match(/^([A-Za-z0-9_-]+):(?:\s*(.*))?$/);
    if (!match) {
      throw new Error(`Unsupported YAML syntax on line ${i + 1}: ${raw}`);
    }

    const key = match[1];
    const remainder = match[2] ?? "";

    if (!remainder) {
      const lookahead = nextSignificantLine(i + 1);
      let container = {};

      if (lookahead) {
        const nextIndent = lookahead.match(/^\s*/)[0].length;
        const nextTrimmed = lookahead.trim();
        if (nextIndent > indent && nextTrimmed.startsWith("- ")) {
          container = [];
        }
      }

      current[key] = container;
      stack.push({ indent, container });
    } else {
      current[key] = parseScalar(remainder);
    }
  }

  return root;
}

export function loadSpec(specPath) {
  const text = fs.readFileSync(specPath, "utf8");
  const spec = parseSimpleYaml(text);

  if (!Array.isArray(spec.symbols) || spec.symbols.length === 0) {
    throw new Error("Spec contains no symbols list.");
  }

  return spec;
}

export function symbolToMasterPath(symbolId, projectRoot) {
  if (/^N\d+$/.test(symbolId)) {
    const n = symbolId.slice(1);
    return `${projectRoot}/artwork/numerals/master/n-${n}.svg`;
  }
  if (/^H\d+$/.test(symbolId)) {
    const h = symbolId.slice(1);
    return `${projectRoot}/artwork/hieroglyphs/master/h-${h}.svg`;
  }
  throw new Error(`Unsupported symbol ID: ${symbolId}`);
}

export function extractSvgInner(svgText) {
  const match = svgText.match(/<svg\b[^>]*>([\s\S]*?)<\/svg>/i);
  if (!match) {
    throw new Error("Could not find outer <svg> element.");
  }
  return match[1].trim();
}

export function hasLiveText(svgText) {
  return /<text\b/i.test(svgText);
}

export function hasEmbeddedFill(svgText) {
  return /\sfill\s*=\s*["'][^"']+["']/i.test(svgText);
}

export function hasViewBox1000(svgText) {
  return /viewBox\s*=\s*["']0\s+0\s+1000\s+1000["']/i.test(svgText);
}
