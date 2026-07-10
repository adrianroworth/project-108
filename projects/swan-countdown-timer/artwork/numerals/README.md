# Numeral Artwork

This folder stores source glyph artwork for numeric characters used on flaps.

## Expected files

- `master/n-0.svg` through `master/n-9.svg`
- Optional alternates: `n-<digit>-alt.svg`

## Typography rules

- Use the font-family defined in `docs/13-lettering-and-flap-graphics.md`.
- Keep stroke weight and optical size consistent across all digits.
- Preserve cap-height and baseline rules from the flap lettering specification.

## Notes

- These files should contain glyph artwork only, not full flap templates.
- Generated panel outputs are created under `artwork/generated/` via `tools/artwork/build-svg-assets.mjs`.
- Explicit numeral ID and SVG tracking table: `symbol-register.md`.
