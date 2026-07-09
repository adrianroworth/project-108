# Numeral Artwork

This folder stores source glyph artwork for numeric characters used on flaps.

## Expected files

- `n-0.svg` through `n-9.svg`
- Optional alternates: `n-<digit>-alt.svg`

## Typography rules

- Use the font-family defined in `docs/13-lettering-and-flap-graphics.md`.
- Keep stroke weight and optical size consistent across all digits.
- Preserve cap-height and baseline rules from the flap lettering specification.

## Notes

- These files should contain glyph artwork only, not full flap templates.
- Final per-flap compositions belong in `artwork/flap-layouts/`.
