# Symbol Inventory

This document defines the character sets used by the Swan Countdown Timer and how symbols are organized for split-flap production.

Related lettering standards are documented in `13-lettering-and-flap-graphics.md`.

## Character set strategy

The active and authoritative set is the chat-agreed LOST set below:

- 26 unique symbols per digit
- 52 wheel positions per digit
- exactly two copies of each symbol per wheel

## Chat-agreed LOST symbol set (explicit)

The shared chat specification defines a themed set with:

- 26 unique symbols per digit
- 52 wheel positions per digit
- exactly two copies of each unique symbol per wheel

### Unique symbol list (26)

| Order | Symbol ID | Display label | Class |
|---:|---|---|---|
| 01 | N0 | 0 | Numeral |
| 02 | N1 | 1 | Numeral |
| 03 | N2 | 2 | Numeral |
| 04 | N3 | 3 | Numeral |
| 05 | N4 | 4 | Numeral |
| 06 | N5 | 5 | Numeral |
| 07 | N6 | 6 | Numeral |
| 08 | N7 | 7 | Numeral |
| 09 | N8 | 8 | Numeral |
| 10 | N9 | 9 | Numeral |
| 11 | H1 | H1 | Hieroglyph |
| 12 | H2 | H2 | Hieroglyph |
| 13 | H3 | H3 | Hieroglyph |
| 14 | H4 | H4 | Hieroglyph |
| 15 | H5 | H5 | Hieroglyph |
| 16 | H6 | H6 | Hieroglyph |
| 17 | H7 | H7 | Hieroglyph |
| 18 | H8 | H8 | Hieroglyph |
| 19 | H9 | H9 | Hieroglyph |
| 20 | H10 | H10 | Hieroglyph |
| 21 | H11 | H11 | Hieroglyph |
| 22 | H12 | H12 | Hieroglyph |
| 23 | H13 | H13 | Hieroglyph |
| 24 | H14 | H14 | Hieroglyph |
| 25 | H15 | H15 | Hieroglyph |
| 26 | H16 | H16 | Hieroglyph |

### Named hieroglyph references

Symbol names and SVG progress tracking are maintained only in `artwork/hieroglyphs/symbol-register.md`.

Numeral names and SVG progress tracking are maintained only in `artwork/numerals/symbol-register.md`.

This file remains the source of truth for:

- active symbol IDs and sequence
- wheel population rules
- production character-set constraints

### Chat-agreed base sequence (one pass of 26)

```text
0
1
2
3
4
5
6
7
8
9
H1
H2
H3
H4
H5
H6
H7
H8
H9
H10
H11
H12
H13
H14
H15
H16
```

### 52-position wheel population

The 26-symbol base sequence is repeated twice:

- Pass A: positions 00-25
- Pass B: positions 26-51

This yields:

- 52 positions per digit
- 26 unique symbols
- 2 copies of each symbol

### Color requirements for symbol classes

See explicit flap color tables in `13-lettering-and-flap-graphics.md`.

Per-digit matrix is also documented there so each module (Digits 1 through 5) has unambiguous foreground/background assignments.

## Alternate sets

Any alternate or extended symbol set is now out of scope for active production documentation.

If a future revision introduces utility symbols (for example SPACE, COLON, DASH, DOT) or alphanumeric service sets, add them in a new section and record the change in `docs/decisions/`.

## Symbol ID rules

- Use `N0` through `N9` for numerals.
- Use permanent sequential IDs for themed glyphs: `H1` to `H16`.
- Keep IDs stable after flap production starts.

## File naming conventions

- Numerals: `n-0.svg` ... `n-9.svg`
- Themed glyphs: `h-1.svg` ... `h-16.svg`
- Composite flap art: `flap-<symbol-id>.svg`

## Change control

- Any symbol-set change after prototype print start must be logged in `docs/decisions/`.
- If wheel order changes, update this file and any matching assembly references.
