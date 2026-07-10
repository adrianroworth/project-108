# Domain Language (DSL) for Swan Split-Flap Build

This document defines the controlled vocabulary used across Swan CAD, artwork, firmware, and assembly documentation.

Use these terms consistently in all new docs, filenames, issue notes, and decision records.

## Why this exists

Some words in split-flap projects are overloaded, especially "flap".

This DSL removes ambiguity by separating:

- wheel indexing terms
- visible symbol terms
- physical-part terms
- generated-artwork terms

## Core terms (normative)

- Position: one indexed location around a single digit wheel (`0-51` for the current profile).
- Character: one complete visible symbol state (for example `N3` or `H12`).
- Upper panel: the top physical half-piece of a split character.
- Lower panel: the bottom physical half-piece of a split character.
- Flap pair: the upper and lower panels currently visible together.
- Flap set: all printable upper/lower panels required for one digit module.
- Wheel sequence: ordered list of symbol IDs used to populate positions.
- Pass A / Pass B: first and second 26-position runs of the same 26-symbol sequence.
- Symbol ID: canonical identifier (`N0-N9`, `H1-H16`).

## Recommended language rules

- Use "52 positions" when describing wheel indexing.
- Use "26 unique symbols repeated twice" when describing sequence population.
- Use "upper/lower panels" when describing printable physical parts.
- Use "normalized character artwork" for full-character source SVG.
- Use "split outputs" for generated upper/lower panel SVG files.

## Terms to avoid (unless quoted from historical text)

- "52 flaps" when you mean wheel positions.
- "one flap per character" because it conflicts with split-pair topology.
- "card" as a synonym for panel unless a document explicitly defines it.

## File and output vocabulary

- Machine-readable spec: `artwork/flap-layouts/flap-spec.yaml`
- Normalized character source: `character-<symbol-id>.svg`
- Split outputs: `flap-upper-<symbol-id>.svg`, `flap-lower-<symbol-id>.svg`

## Profile assumptions for current prototype

- Topology: `split-pair`
- Wheel positions: `52`
- Unique symbols: `26`
- Repetitions: `2`

If these assumptions change, add a new decision record and update this DSL document in the same change.

## Scope and precedence

- This document is Swan-build specific.
- Repository-wide generic terms still live in `docs/glossary.md`.
- If wording conflicts occur, this document is authoritative for Swan split-flap implementation details.
