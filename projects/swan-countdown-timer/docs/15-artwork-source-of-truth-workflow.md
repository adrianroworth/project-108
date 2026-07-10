# Artwork Source-of-Truth Workflow

This workflow defines how to update Swan symbol artwork while keeping traceability and quality metadata consistent.

Use this for both numerals (`N0-N9`) and hieroglyphs (`H1-H16`).

For full operations from intake through commit, use `16-artwork-update-runbook.md`.
For hieroglyph quality evaluation, use the `Hieroglyph review rubric` section in `16-artwork-update-runbook.md`.
For generation and QA commands, use `../tools/artwork/README.md`.

## Purpose

- Keep one authoritative vector file per symbol.
- Keep provenance and quality metadata current in symbol registers.
- Prevent drift between artwork files and production documentation.

## Source-of-truth rules

1. The SVG file is the visual source of truth.
2. The symbol-register row is the traceability source of truth.
3. Unicode and Gardiner values are reference metadata, not visual source artwork.
4. Symbol IDs and order are controlled by `03-symbol-inventory.md`.

## File locations

- Numeral artwork files: `../artwork/numerals/n-0.svg` through `n-9.svg`
- Hieroglyph artwork files: `../artwork/hieroglyphs/h-1.svg` through `h-16.svg`
- Numeral register: `../artwork/numerals/symbol-register.md`
- Hieroglyph register: `../artwork/hieroglyphs/symbol-register.md`
- Symbol set and naming rules: `03-symbol-inventory.md`
- Lettering and color constraints: `13-lettering-and-flap-graphics.md`

## Update process (single symbol)

1. Select the target symbol ID (`N#` or `H#`).
2. Edit or create the corresponding SVG file in the correct artwork folder.
3. Keep geometry aligned with documented safe-area and baseline rules.
4. Update the matching row in the correct symbol register.
5. Save evidence and confidence metadata in the register row.
6. Verify naming and ID consistency before commit.

## Register fields to update

For each edited symbol, update these columns in the register:

- `Vector status`
- `Reference tier`
- `Evidence ref`
- `Prop accuracy`
- `Notes` (if needed)

Suggested status progression:

- `Pending` -> `Draft` -> `Review` -> `Approved`

Reference tier values:

- `Tier 1`: Direct screen references
- `Tier 2`: Behind-the-scenes production photos
- `Tier 3`: High-quality fan recreations
- `Tier 4`: Unicode/Gardiner fallback references

Prop accuracy scale:

- `A`: Near-prop match (high confidence)
- `B`: Strong match with minor uncertainty
- `C`: Usable approximation pending better reference
- `D`: Temporary placeholder derived from weak reference

## Batch update process (multiple symbols)

1. Update SVGs first, one symbol at a time.
2. Update each corresponding register row immediately after each SVG change.
3. Use consistent wording for evidence references in the batch.
4. Complete all changed rows before changing any symbol IDs or sequence docs.

## When a decision record is required

Create a new decision record under `docs/decisions/` when you change:

- Symbol IDs or count
- Wheel sequence rules
- Naming conventions
- Core geometry policy used by all symbols
- Source-reference hierarchy

If only an existing symbol shape improves and IDs/rules are unchanged, no new decision record is required.

## Definition of done

A symbol update is done when:

1. The target SVG exists with correct filename.
2. Register row is updated with non-`TBD` values for traceability fields.
3. Status and notes reflect current confidence and evidence.
4. Changes are recorded in `CHANGELOG.md` under `Unreleased` when the update is part of a documented milestone.

## Commit guidance

Prefer one commit per coherent batch, for example:

- One symbol pair (`N8` + `H11`) for process trial
- Full numeral batch (`N0-N9`)
- Full hieroglyph batch (`H1-H16`)

Use Conventional Commits, for example:

- `docs(artwork): add source-of-truth workflow for symbol updates`
- `feat(artwork): add draft vectors for N0-N9 and update provenance metadata`
