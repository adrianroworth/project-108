# Display Specification

This document defines the display requirements for the Swan Countdown Timer build.

## Physical display

- Five digit modules.
- True split-flap mechanism with physical rotating flaps.
- Front-facing display only; no screen-based effect.
- Modular construction for repair and replacement.

## Display behaviour

- Display should support countdown behavior.
- Each digit can show numerals and a set of thematic symbols.
- The digit order should be consistent and easy to manufacture.

## Flap and wheel parameters

- Planned wheel positions: 52 per digit (26 unique symbols repeated twice).
- Symbol order and wheel population are defined in `03-symbol-inventory.md`.
- Recommended material for flaps: matte black PLA for bodies, white PLA for letters or contrast details.

## Lettering and flap graphics

- Typography, glyph geometry, and font-family rules are defined in `13-lettering-and-flap-graphics.md`.
- Artwork folder conventions are defined in `artwork/flap-layouts/README.md`, `artwork/numerals/README.md`, and `artwork/hieroglyphs/README.md`.
- Character sets must remain synchronized with `03-symbol-inventory.md`.

## Build constraints

- Prefer Bambu A1-friendly print orientation and part sizes.
- Keep individual parts small enough to print reliably.
- Design for easy assembly and serviceability.
