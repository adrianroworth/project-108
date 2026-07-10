# Hieroglyph Symbol Register

This register tracks the explicit themed symbol IDs used in the Swan Countdown Timer.

This file is the single source of truth for hieroglyph names and per-ID artwork status.

Reference definitions:

- Character-set source: `../../docs/03-symbol-inventory.md`
- Lettering and color rules: `../../docs/13-lettering-and-flap-graphics.md`

## Quick Checklist

Use this checklist for every hieroglyph update:

1. Edit or create the hieroglyph SVG (`h-<id>.svg`).
2. Update the matching register row immediately.
3. Set non-`TBD` values for `Reference tier`, `Evidence ref`, and `Prop accuracy`.
4. Update `Vector status` to reflect current phase (`Draft`, `Review`, or `Approved`).
5. Keep symbol ID and filename mapping consistent with `../../docs/03-symbol-inventory.md`.

Full process guide: `../../docs/15-artwork-source-of-truth-workflow.md`.
End-to-end runbook: `../../docs/16-artwork-update-runbook.md`.

## Symbol list

| Symbol ID | Symbol | Gardiner code | Unicode reference | Description | Artwork file target | Vector status | Reference tier | Evidence ref | Prop accuracy | Notes |
|---|---|---|---|---|---|---|---|---|---|---|
| H1 | &#x132F4; | S29 | U+132F4 | Folded cloth | `h-1.svg` | Pending | TBD | TBD | TBD | Standard Gardiner description |
| H2 | &#x133F2; | Z7 | U+133F2 | Coil (hieratic equivalent) | `h-2.svg` | Pending | TBD | TBD | TBD | Project shorthand: Spiral/Curl |
| H3 | &#x13351; | U28 | U+13351 | Fire-drill | `h-3.svg` | Pending | TBD | TBD | TBD | Corrected from `U29`; standard Gardiner mapping |
| H4 | &#x1313F; | G1 | U+1313F | Egyptian vulture | `h-4.svg` | Pending | TBD | TBD | TBD | Project shorthand: Vulture |
| H5 | &#x13333; | U1 | U+13333 | Forked stick | `h-5.svg` | Pending | TBD | TBD | TBD | Confirmed mapping: Gardiner `U1`, Unicode `U+13333`; project-facing label kept |
| H6 | &#x1340D; | Aa1 | U+1340D | Placenta or sieve | `h-6.svg` | Pending | TBD | TBD | TBD | Standard Gardiner description; unclassified sign group |
| H7 | &#x13001; | A2 | U+13001 | Man with hand to mouth | `h-7.svg` | Pending | TBD | TBD | TBD | Project shorthand previously used: Seated man |
| H8 | &#x13250; | O1 | U+13250 | House | `h-8.svg` | Pending | TBD | TBD | TBD | Standard Gardiner description |
| H9 | &#x1332A; | T30 | U+1332A | Knife | `h-9.svg` | Pending | TBD | TBD | TBD | Standard Gardiner description |
| H10 | &#x1320E; | N29 | U+1320E | Slope of hill | `h-10.svg` | Pending | TBD | TBD | TBD | Project shorthand: Hill |
| H11 | &#x131F3; | N5 | U+131F3 | Sun | `h-11.svg` | Draft | Tier 4 | Unicode and Gardiner fallback (U+131F3 / N5) | D | Seed source-of-truth vector created; replace with Tier 1 screenshot evidence |
| H12 | &#x131EF; | N1 | U+131EF | Sky | `h-12.svg` | Pending | TBD | TBD | TBD | Standard Gardiner description |
| H13 | &#x131BC; | M12 | U+131BC | One lotus plant | `h-13.svg` | Pending | TBD | TBD | TBD | Project shorthand previously used: Reed |
| H14 | &#x131BD; | M12A | U+131BD | Two lotus plants | `h-14.svg` | Pending | TBD | TBD | TBD | Project shorthand previously used: Double reed |
| H15 | &#x13217; | N35A | U+13217 | Three ripples of water | `h-15.svg` | Pending | TBD | TBD | TBD | Project shorthand previously used: Water ripple |
| H16 | &#x131CB; | M17 | U+131CB | Reed | `h-16.svg` | Pending | TBD | TBD | TBD | Project shorthand previously used: Reed leaf |

Reference tier values:

- Tier 1: Direct screen references
- Tier 2: Behind-the-scenes production photos
- Tier 3: High-quality fan recreations
- Tier 4: Unicode/Gardiner fallback references

Prop accuracy scale:

- `A`: Near-prop match (high confidence)
- `B`: Strong match with minor uncertainty
- `C`: Usable approximation pending better reference
- `D`: Temporary placeholder derived from weak reference

## Gardiner references

Gardiner codes are the standard Egyptological identifiers from Alan Gardiner's sign list. The letter identifies the sign category and the number identifies the sign within that category.

The `Description` column above follows the standard Gardiner/Unicode reference wording where verified. If the project uses a simplified or thematic label for the same sign, that is noted in the `Notes` column.

Examples from this register:

- `S29`: category `S` (crowns, dress, staves, etc.), sign 29
- `G1`: category `G` (birds), sign 1
- `Aa1`: category `Aa` (unclassified signs), sign 1

Recommended reference resources:

- Gardiner's sign list overview: https://en.wikipedia.org/wiki/Gardiner%27s_sign_list
- Broader list of Egyptian hieroglyphs by Gardiner code: https://en.wikipedia.org/wiki/List_of_Egyptian_hieroglyphs
- Gardiner sign list PDF mirror: https://web.archive.org/web/20111122134017/http://egyptologie.ff.cuni.cz/pdf/Gardiner_signlist.pdf

## Completion criteria

- Every ID has a corresponding SVG.
- SVGs pass layout constraints and safe-area checks.
- Color variants for digit groups follow the explicit color tables in the lettering spec.