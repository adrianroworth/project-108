# Artwork Tooling

Scripts in this folder generate and validate Swan artwork outputs from source-of-truth files and symbol registers.

## Commands

Run from `projects/swan-countdown-timer`:

```powershell
node tools/artwork/build-svg-assets.mjs
node tools/artwork/qa-svg-assets.mjs
```

Strict QA mode (also checks generated outputs):

```powershell
node tools/artwork/qa-svg-assets.mjs --strict-generated
```

Targeted build subset:

```powershell
node tools/artwork/build-svg-assets.mjs --symbols=H11,H15,N8
```

Force refresh placeholder masters:

```powershell
node tools/artwork/build-svg-assets.mjs --force-master
```

## Input sources

- `artwork/flap-layouts/flap-spec.yaml`
- `artwork/numerals/symbol-register.md`
- `artwork/hieroglyphs/symbol-register.md`
- `artwork/master/numerals/*.svg`
- `artwork/master/hieroglyphs/*.svg`

## Output folders

- `artwork/generated/characters/`
- `artwork/generated/flap-halves/`
- `artwork/generated/color-variants/`

Master SVGs are source-of-truth visual assets. Generated files are reproducible derivatives.
