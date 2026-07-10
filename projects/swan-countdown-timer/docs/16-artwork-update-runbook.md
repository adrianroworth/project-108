# Artwork Update Runbook (Start to Finish)

This runbook describes the full operational process for updating Swan numeral and hieroglyph artwork from first reference capture to commit.

Use this together with `15-artwork-source-of-truth-workflow.md`.

## Scope

- Numerals: `N0-N9` (`artwork/numerals/n-0.svg` to `n-9.svg`)
- Hieroglyphs: `H1-H16` (`artwork/hieroglyphs/h-1.svg` to `h-16.svg`)

## Inputs required before starting

1. Target symbol IDs to update.
2. Best available references for each symbol.
3. Decision on batch type:
   - single-symbol test
   - mixed pair (for example one numeral plus one hieroglyph)
   - full numeral or full hieroglyph batch

## Phase 1: Plan the batch

1. Open `03-symbol-inventory.md` and confirm IDs/sequence are unchanged.
2. Confirm file naming follows canonical mapping (`N8 -> n-8.svg`, `H11 -> h-11.svg`).
3. Create a short batch note in commit message scope, for example:
   - `N8,H11 seed`
   - `N0-N9 tier-2 refresh`

## Phase 2: Collect and rank references

For each symbol, assign one reference tier:

- Tier 1: Direct screen references
- Tier 2: Behind-the-scenes production photos
- Tier 3: High-quality fan recreations
- Tier 4: Unicode/Gardiner fallback

Record the evidence identifier you will write into the register `Evidence ref` column.

## Hieroglyph review rubric

Apply this rubric whenever a hieroglyph moves from `Draft` to `Review` or `Approved`.

### 1) Silhouette match

- Compare the outer contour against the best available reference.
- Target: major contour landmarks align (head/body/tail or equivalent shape anchors).
- Fail if the symbol is recognizable as a different sign at a glance.

### 2) Internal feature fidelity

- Check defining interior lines, gaps, loops, and intersections.
- Preserve intentional simplifications, but keep sign-defining features intact.
- Fail if a simplification removes the sign's primary distinguishing feature.

### 3) Proportion and balance

- Verify width-to-height proportion against reference.
- Check optical center inside flap safe area.
- Ensure the symbol does not feel top-heavy or corner-biased unless reference demands it.

### 4) Stroke strategy and consistency

- Keep stroke weights consistent across the set for the same confidence tier.
- Avoid accidental mixed styles (calligraphic vs geometric) in one batch.
- Normalize corners and joins so adjacent symbols look like one designed family.

### 5) Screen-readability at distance

- Evaluate at expected viewing distance and reduced scale.
- Confirm silhouette remains readable under likely contrast combinations.
- Remove tiny details that do not survive viewing distance.

### 6) Prop-style alignment

- Prefer visual behavior seen on the prop: simplified, bold, camera-readable forms.
- Do not chase academic font exactness when it conflicts with prop character.
- Keep Unicode/Gardiner as metadata only.

### 7) Register traceability completeness

- `Reference tier` is set and justified by evidence quality.
- `Evidence ref` is specific enough to reproduce review.
- `Prop accuracy` reflects current confidence honestly.
- `Notes` capture non-obvious design tradeoffs.

## Rubric scoring guide

Use this mapping when assigning `Prop accuracy`:

- `A`: Passes all rubric checks with high-confidence Tier 1 or strong Tier 2 evidence.
- `B`: Passes silhouette and proportion checks; minor interior/stroke uncertainty remains.
- `C`: Usable shape but one or more defining checks need refinement.
- `D`: Placeholder or fallback-derived form pending real reference-driven redraw.

## Phase 3: Update SVG source-of-truth files

1. Edit or create the target SVG file in the proper folder.
2. Keep geometry aligned with `13-lettering-and-flap-graphics.md` safe-area and baseline rules.
3. Preserve filename and ID mapping exactly.
4. Do not change symbol IDs during shape-only updates.

## Phase 4: Update symbol registers immediately

For each edited symbol row, update:

- `Vector status`
- `Reference tier`
- `Evidence ref`
- `Prop accuracy`
- `Notes` (only if needed)

Suggested status progression:

- `Pending` -> `Draft` -> `Review` -> `Approved`

Prop accuracy scale:

- `A`: Near-prop match (high confidence)
- `B`: Strong match with minor uncertainty
- `C`: Usable approximation pending better reference
- `D`: Temporary placeholder derived from weak reference

## Phase 5: Validate consistency

Generate and validate outputs with tooling commands from `projects/swan-countdown-timer`:

```powershell
node tools/artwork/build-svg-assets.mjs
node tools/artwork/qa-svg-assets.mjs --strict-generated
```

For focused iteration during redraw:

```powershell
node tools/artwork/build-svg-assets.mjs --symbols=H11,H15,N8
```

Run this checklist before commit:

1. Every changed SVG has a matching register row update.
2. No changed row still has `TBD` for tier/evidence/accuracy.
3. IDs and filenames still match inventory rules.
4. No unintended symbol-set/order changes were introduced.

## Phase 6: Decision and documentation gate

Create a decision record only if you changed any of these:

- Symbol count or IDs
- Wheel sequence rules
- Naming conventions
- Core geometry policy
- Reference hierarchy policy

If you only improved existing symbol geometry, no decision record is required.

## Phase 7: Changelog and commit

1. Add an `Unreleased` line in `CHANGELOG.md` when the batch is milestone-relevant.
2. Commit in coherent batches:
   - one process trial pair
   - full numeral batch
   - full hieroglyph batch
3. Use Conventional Commits, for example:
   - `feat(artwork): update N0-N9 vectors with tier-2 references`
   - `docs(artwork): refresh symbol provenance metadata`

## Operator quick-start

If you have no prior context, do this exact path:

1. Read `15-artwork-source-of-truth-workflow.md`.
2. Pick one symbol ID from `03-symbol-inventory.md`.
3. Update its SVG source file.
4. Update that row in the correct symbol register.
5. Confirm tier/evidence/accuracy are non-`TBD`.
6. Add changelog note if milestone-worthy.
7. Commit.
