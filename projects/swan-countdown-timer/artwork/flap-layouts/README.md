# Flap Layouts

This folder contains layout templates for the visible flap face.

## Purpose

- Define flap canvas size and safe areas.
- Place glyphs consistently on every flap.
- Export final art for printing, decals, or transfer processes.

## Recommended files

- `flap-template.svg`: base flap layout with guides.
- `flap-template-print.svg`: print-ready template without construction guides.
- `flap-<symbol-id>.svg`: one file per symbol (for example `flap-n0.svg`, `flap-h1.svg`).

## Optional source files

- `flap-template.blend`: Blender source for layout or rendering experiments.
- `flap-<symbol-id>.blend`: optional Blender source files for symbol-specific flap compositions.
- Keep Blender files as source-only assets; SVG remains the production interchange format.

## Rules

- Keep layout geometry aligned with `docs/13-lettering-and-flap-graphics.md`.
- Use symbol IDs and naming from `docs/03-symbol-inventory.md`.
- Do not modify final exported dimensions without a matching decision record.
