# Hieroglyph Symbol Register

This register tracks the explicit themed symbol IDs used in the Swan Countdown Timer.

This file is the single source of truth for hieroglyph names and per-ID artwork status.

Reference definitions:

- Character-set source: `../../docs/03-symbol-inventory.md`
- Lettering and color rules: `../../docs/13-lettering-and-flap-graphics.md`

## Symbol list

| Symbol ID | Symbol | Gardiner code | Unicode | Description | Artwork file target | Vector status | Notes |
|---|---|---|---|---|---|---|---|
| H1 | &#x132F4; | S29 | U+132F4 | Folded cloth | `h-1.svg` | Draft | Master created in `master/h-1.svg` |
| H2 | &#x133F2; | Z7 | U+133F2 | Coil (hieratic equivalent) | `h-2.svg` | Draft | Master created in `master/h-2.svg` |
| H3 | &#x13351; | U28 | U+13351 | Fire-drill | `h-3.svg` | Draft | Master created in `master/h-3.svg` |
| H4 | &#x1313F; | G1 | U+1313F | Egyptian vulture | `h-4.svg` | Draft | Master created in `master/h-4.svg` |
| H5 | &#x13333; | U1 | U+13333 | Forked stick | `h-5.svg` | Draft | Master created in `master/h-5.svg` |
| H6 | &#x1340D; | Aa1 | U+1340D | Placenta or sieve | `h-6.svg` | Draft | Master created in `master/h-6.svg` |
| H7 | &#x13001; | A2 | U+13001 | Man with hand to mouth | `h-7.svg` | Draft | Master created in `master/h-7.svg` |
| H8 | &#x13250; | O1 | U+13250 | House | `h-8.svg` | Draft | Master created in `master/h-8.svg` |
| H9 | &#x1332A; | T30 | U+1332A | Knife | `h-9.svg` | Draft | Master created in `master/h-9.svg` |
| H10 | &#x1320E; | N29 | U+1320E | Slope of hill | `h-10.svg` | Draft | Master created in `master/h-10.svg` |
| H11 | &#x131F3; | N5 | U+131F3 | Sun | `h-11.svg` | Draft | Pilot master created in `master/h-11.svg` |
| H12 | &#x131EF; | N1 | U+131EF | Sky | `h-12.svg` | Draft | Master created in `master/h-12.svg` |
| H13 | &#x131BC; | M12 | U+131BC | One lotus plant | `h-13.svg` | Draft | Master created in `master/h-13.svg` |
| H14 | &#x131BD; | M12A | U+131BD | Two lotus plants | `h-14.svg` | Draft | Master created in `master/h-14.svg` |
| H15 | &#x13217; | N35A | U+13217 | Three ripples of water | `h-15.svg` | Draft | Pilot master created in `master/h-15.svg` |
| H16 | &#x131CB; | M17 | U+131CB | Reed | `h-16.svg` | Draft | Master created in `master/h-16.svg` |

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