# Decision: Freeze Numeral Font To Arial Black (Prototype-r0)

- Date: 2026-07-10
- Status: Approved
- Context: Numeral masters previously used a Bahnschrift-first stack, which produced unsatisfactory numeral forms for this build context. The project needs a stable numeral font choice for consistent generated assets and print testing.

## Options considered

- Option A: Keep Bahnschrift as primary numeral font.
- Option B: Switch numerals to Arial Black as primary font with existing fallback stack.
- Option C: Create fully custom numeral vector paths immediately.

## Decision

Choose Option B.

- Numeral primary font: Arial Black.
- Numeral fallback stack: Bahnschrift, DIN Alternate, Arial Narrow, sans-serif.
- Hieroglyph references remain on the historical glyph stack (`Segoe UI Historic`, `Noto Sans Egyptian Hieroglyphs`, serif).

## Rationale

- Improves legibility and shape quality for key numerals during current prototyping.
- Keeps register-driven generation simple and reproducible.
- Defers full path-only freeze to the existing production gate process.

## Consequences

- `docs/13-lettering-and-flap-graphics.md` must reflect Arial Black for numerals.
- `tools/artwork/generate-masters-from-registers.mjs` must use Arial Black first in numeral `font-family`.
- Regenerated outputs should be treated as the new baseline for review and print tests.
- Before production freeze, convert masters to path-only assets and run strict QA.
