# Numeral Symbol Register

This register tracks numeric symbol IDs used in the Swan Countdown Timer.

This file is the single source of truth for numeral names and per-ID artwork status.

Reference definitions:

- Character-set source: `../../docs/03-symbol-inventory.md`
- Lettering and color rules: `../../docs/13-lettering-and-flap-graphics.md`

## Symbol list

| Symbol ID | Symbol name | Artwork file target | Variant files (color groups) | Vector status | Notes |
|---|---|---|---|---|---|
| N0 | 0 | `n-0.svg` | `flap-n0-d1-3.svg`, `flap-n0-d4-5.svg` | Pending | Active canonical numeral symbol |
| N1 | 1 | `n-1.svg` | `flap-n1-d1-3.svg`, `flap-n1-d4-5.svg` | Pending | Active canonical numeral symbol |
| N2 | 2 | `n-2.svg` | `flap-n2-d1-3.svg`, `flap-n2-d4-5.svg` | Pending | Active canonical numeral symbol |
| N3 | 3 | `n-3.svg` | `flap-n3-d1-3.svg`, `flap-n3-d4-5.svg` | Pending | Active canonical numeral symbol |
| N4 | 4 | `n-4.svg` | `flap-n4-d1-3.svg`, `flap-n4-d4-5.svg` | Pending | Active canonical numeral symbol |
| N5 | 5 | `n-5.svg` | `flap-n5-d1-3.svg`, `flap-n5-d4-5.svg` | Pending | Active canonical numeral symbol |
| N6 | 6 | `n-6.svg` | `flap-n6-d1-3.svg`, `flap-n6-d4-5.svg` | Pending | Active canonical numeral symbol |
| N7 | 7 | `n-7.svg` | `flap-n7-d1-3.svg`, `flap-n7-d4-5.svg` | Pending | Active canonical numeral symbol |
| N8 | 8 | `n-8.svg` | `flap-n8-d1-3.svg`, `flap-n8-d4-5.svg` | Pending | Active canonical numeral symbol |
| N9 | 9 | `n-9.svg` | `flap-n9-d1-3.svg`, `flap-n9-d4-5.svg` | Pending | Active canonical numeral symbol |

## Completion criteria

- Every numeral ID has a corresponding SVG.
- SVGs pass layout constraints and safe-area checks.
- Color variants for digit groups follow the explicit color tables in the lettering spec.
