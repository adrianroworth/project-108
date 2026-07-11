# Numeral Symbol Register

This register tracks numeric symbol IDs used in the Swan Countdown Timer.

This file is the single source of truth for numeral names and per-ID artwork status.

Reference definitions:

- Character-set source: `../../docs/03-symbol-inventory.md`
- Lettering and color rules: `../../docs/13-lettering-and-flap-graphics.md`

## Quick Checklist

Use this checklist for every numeral update:

1. Edit or create the numeral SVG (`n-<digit>.svg`).
2. Update the matching register row immediately.
3. Set non-`TBD` values for `Reference tier`, `Evidence ref`, and `Prop accuracy`.
4. Update `Vector status` to reflect current phase (`Draft`, `Review`, or `Approved`).
5. Keep symbol ID and filename mapping consistent with `../../docs/03-symbol-inventory.md`.

Full process guide: `../../docs/15-artwork-source-of-truth-workflow.md`.
End-to-end runbook: `../../docs/16-artwork-update-runbook.md`.

## Symbol list

| Symbol ID | Symbol name | Unicode reference | Artwork file target | Variant files (color groups) | Vector status | Reference tier | Evidence ref | Prop accuracy | Notes |
|---|---|---|---|---|---|---|---|---|---|
| N0 | 0 | U+0030 | `n-0.svg` | `flap-n0-d1-3.svg`, `flap-n0-d4-5.svg` | Pending | TBD | TBD | TBD | Active canonical numeral symbol |
| N1 | 1 | U+0031 | `n-1.svg` | `flap-n1-d1-3.svg`, `flap-n1-d4-5.svg` | Draft | Tier 2 | references/99991.png (digit 5) | B | Display reference shows terminal shape and stem width clearly |
| N2 | 2 | U+0032 | `n-2.svg` | `flap-n2-d1-3.svg`, `flap-n2-d4-5.svg` | Pending | TBD | TBD | TBD | Active canonical numeral symbol |
| N3 | 3 | U+0033 | `n-3.svg` | `flap-n3-d1-3.svg`, `flap-n3-d4-5.svg` | Pending | TBD | TBD | TBD | Active canonical numeral symbol |
| N4 | 4 | U+0034 | `n-4.svg` | `flap-n4-d1-3.svg`, `flap-n4-d4-5.svg` | Draft | Tier 2 | references/44444.png | B | Dedicated displayed-digit reference added |
| N5 | 5 | U+0035 | `n-5.svg` | `flap-n5-d1-3.svg`, `flap-n5-d4-5.svg` | Draft | Tier 2 | references/55555.png | B | Dedicated displayed-digit reference added |
| N6 | 6 | U+0036 | `n-6.svg` | `flap-n6-d1-3.svg`, `flap-n6-d4-5.svg` | Pending | TBD | TBD | TBD | Active canonical numeral symbol |
| N7 | 7 | U+0037 | `n-7.svg` | `flap-n7-d1-3.svg`, `flap-n7-d4-5.svg` | Pending | TBD | TBD | TBD | Active canonical numeral symbol |
| N8 | 8 | U+0038 | `n-8.svg` | `flap-n8-d1-3.svg`, `flap-n8-d4-5.svg` | Draft | Tier 4 | Unicode fallback U+0038 | D | Seed source-of-truth vector created; replace with screen reference when available |
| N9 | 9 | U+0039 | `n-9.svg` | `flap-n9-d1-3.svg`, `flap-n9-d4-5.svg` | Draft | Tier 2 | references/99991.png (digits 1-4) | B | Dedicated displayed-digit reference added |

Reference tier values:

- Tier 1: Direct screen references
- Tier 2: Behind-the-scenes production photos
- Tier 3: High-quality fan recreations
- Tier 4: Unicode fallback references

Prop accuracy scale:

- `A`: Near-prop match (high confidence)
- `B`: Strong match with minor uncertainty
- `C`: Usable approximation pending better reference
- `D`: Temporary placeholder derived from weak reference

## Completion criteria

- Every numeral ID has a corresponding SVG.
- SVGs pass layout constraints and safe-area checks.
- Color variants for digit groups follow the explicit color tables in the lettering spec.
