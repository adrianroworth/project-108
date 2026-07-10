# Artwork Tooling

This folder contains scripts for generating split-panel SVG assets from master symbol SVGs.

## Scripts

- `generate-masters-from-registers.mjs`
  - Rebuilds `numerals/master/*.svg` and `hieroglyphs/master/*.svg` from symbol register definitions.
  - Numerals use register IDs (`N0-N9`) and lettering font stack.
  - Hieroglyphs use register Unicode mappings (`U+...`) as source of truth.
  - Outputs are font-dependent until converted to paths for production freeze.

- `build-svg-assets.mjs`
  - Reads `artwork/flap-layouts/flap-spec.yaml`.
  - Reads master symbols from `artwork/numerals/master/` and `artwork/hieroglyphs/master/`.
  - Generates:
    - `artwork/generated/full/character-<symbol-id>.svg`
    - `artwork/generated/panels/flap-upper-<symbol-id>.svg`
    - `artwork/generated/panels/flap-lower-<symbol-id>.svg`
    - `artwork/generated/color-variants/flap-<upper|lower>-<symbol-id>-<group>.svg`
    - `artwork/generated/manifests/wheel-sequence.json`

- `qa-svg-assets.mjs`
  - Checks that all spec symbol IDs have matching master files.
  - Checks for live text in master SVGs.
  - Checks key spec invariants (`wheel_positions`, `unique_symbols`, repetitions).

## Usage

Run from `projects/swan-countdown-timer/`:

```bash
node tools/artwork/generate-masters-from-registers.mjs
node tools/artwork/build-svg-assets.mjs
node tools/artwork/qa-svg-assets.mjs
```

Pilot subset example:

```bash
node tools/artwork/build-svg-assets.mjs --symbols=N0,N1,N8,H11,H15
node tools/artwork/qa-svg-assets.mjs --symbols=N0,N1,N8,H11,H15
```

## Master SVG constraints

- Path-only content preferred.
- Avoid live `<text>` in production masters.
- Use `viewBox="0 0 1000 1000"`.
- Keep color out of masters when possible; variants are applied at generation time.

If you want QA to fail on any live text, run:

```bash
node tools/artwork/qa-svg-assets.mjs --strict-paths
```

## Next Step: Install Inkscape For Path Conversion

Recommended next step: install Inkscape so font-dependent master SVGs can be converted to path-only assets before production freeze.

Why this matters:

- Current register-driven masters intentionally use text and Unicode glyph references for correctness and maintainability.
- Production assets should be path-only so output does not depend on local font availability.

After Inkscape is installed, run this sequence from `projects/swan-countdown-timer/`:

```bash
node tools/artwork/generate-masters-from-registers.mjs
node tools/artwork/build-svg-assets.mjs
node tools/artwork/qa-svg-assets.mjs --strict-paths
```

Use strict mode as the release gate once path conversion is in place.
