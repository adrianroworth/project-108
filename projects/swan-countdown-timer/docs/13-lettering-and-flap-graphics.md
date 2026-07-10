# Lettering and Flap Graphics Specification

This document defines the lettering system for flap symbols: font-family, glyph geometry, spacing, contrast, and production checks.

## Scope

- Numerals
- Themed glyph marks (`H1-H16`)
- Split character face layout (upper and lower panels)

Note: utility separator symbols are not part of the active 52-flap production set and are out of scope unless reintroduced by a future decision.

## Source references

- Character sets: `03-symbol-inventory.md`
- Display requirements: `02-display-specification.md`
- Flap templates and machine-readable spec: `artwork/flap-layouts/`
- Numeral glyph assets: `artwork/numerals/`
- Themed glyph assets: `artwork/hieroglyphs/`

## Font-family standards

### Primary font for prototype lettering

- Font family: Bahnschrift
- Weight: SemiBold or Bold
- Style: Upright
- Case: Uppercase only where letters are used

### Fallback stack

- DIN Alternate Bold
- Arial Narrow Bold
- Liberation Sans Narrow Bold

### Final-font policy

- Prototype may use system fonts for speed.
- Before production flap batches, freeze one font-family and document the exact file/version in a decision record.

## Glyph geometry standards

Use percentages of flap visible height and width so the spec scales with flap size.

- Horizontal safe margin: 8 percent of visible flap width
- Vertical safe margin: 8 percent of visible flap height
- Cap height target: 70 percent of visible flap height
- Baseline offset: 78 percent of visible flap height
- Numeric stroke contrast: low (uniform stroke preferred)

## Symbol placement standards

- Center align all symbols horizontally.
- For numerals, align to optical baseline for consistent read rhythm.

If separator symbols are reintroduced in a future set, define their geometry in a dedicated subsection and link the corresponding decision record.

## Spacing and optical tuning

- Tracking: +1 percent to +3 percent for text symbols if required for readability.
- Do not use kerning pairs for single-symbol flaps.
- Apply per-glyph optical nudges only if documented in source artwork notes.

## Color and contrast

- Prototype default: black flap body with white symbol.
- Keep symbol fill solid white; avoid grayscale anti-aliasing in final export assets.
- If paint/transfer is used, preserve edge sharpness and avoid bleeding into hinge areas.

## Explicit flap color specification (chat-agreed)

This section records the color mapping explicitly described in the shared planning chat.

### Digits 1-3

| Symbol class | Flap background | Symbol foreground |
|---|---|---|
| Numerals (`0-9`) | Black | White |
| Hieroglyphs (`H1-H16`) | Black | Red |

### Digits 4-5

| Symbol class | Flap background | Symbol foreground |
|---|---|---|
| Numerals (`0-9`) | White | Black |
| Hieroglyphs (`H1-H16`) | Red | Black |

### Per-digit flap color matrix (all five display modules)

| Digit module | Numerals background | Numerals foreground | Hieroglyphs background | Hieroglyphs foreground |
|---|---|---|---|---|
| Digit 1 | Black | White | Black | Red |
| Digit 2 | Black | White | Black | Red |
| Digit 3 | Black | White | Black | Red |
| Digit 4 | White | Black | Red | Black |
| Digit 5 | White | Black | Red | Black |

## Color implementation notes

- Keep one source artwork file per symbol and apply per-digit color variants at composition/export stage.
- Do not redraw glyph geometry between digit groups; color should be the only visual variable.
- Export explicit color variants per symbol where needed, for example `flap-n0-d1-3.svg` and `flap-n0-d4-5.svg`.
- Apply the same variant split for hieroglyphs, for example `flap-h1-d1-3.svg` and `flap-h1-d4-5.svg`.
- If AMS or multi-material print is not used, document paint/decal workflow and masking tolerance before production runs.
- For prototype-only prints, a simplified single color scheme is acceptable, but production intent must remain as specified above.

## Flap artwork production pipeline

1. Build or update glyph source in `artwork/numerals/` or `artwork/hieroglyphs/`.
2. Compose normalized complete character artwork in `artwork/flap-layouts/`.
3. Split each character into upper and lower panel artwork using the current topology settings.
4. Export print-ready SVG and optional raster previews.
5. Validate using the QA checklist below before print batch.

## QA checklist for lettering

- Symbol matches ID in `03-symbol-inventory.md`.
- Symbol is fully inside safe area.
- Visual weight matches the rest of the set.
- Symbol remains readable at expected viewing distance.
- No clipping near flap hinges or edges.
- Black/white contrast is strong under ambient room lighting.

## Versioning and change control

- Any change to active font-family, symbol geometry, or safe area requires a decision log entry.
- For production batches, tag artwork exports with a revision suffix (for example `-r1`, `-r2`).
