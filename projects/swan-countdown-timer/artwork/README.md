# Artwork

Artwork assets for the Swan Countdown Timer, including master symbols and generated split-panel outputs.

## Structure

- `numerals/master/`: canonical numeral masters (`n-0.svg` to `n-9.svg`).
- `hieroglyphs/master/`: canonical hieroglyph masters (`h-1.svg` to `h-16.svg`).
- `flap-layouts/`: machine-readable flap profile and layout references.
- `generated/full/`: normalized full-character outputs.
- `generated/panels/`: split upper/lower panel outputs.
- `generated/color-variants/`: digit-group color variants.
- `generated/manifests/`: generated wheel sequence manifests.

## Generation

Use tooling in `../tools/artwork/`:

```bash
node tools/artwork/build-svg-assets.mjs
node tools/artwork/qa-svg-assets.mjs
```
