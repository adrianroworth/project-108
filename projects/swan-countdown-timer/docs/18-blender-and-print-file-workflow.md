# Blender and Print File Workflow (Bambu A1)

This document defines the intended workflow for Blender-involved modeling and print-file generation for the Swan Countdown Timer.

## Purpose

- Keep editable design intent in source files.
- Keep print artifacts reproducible for Bambu A1 runs.
- Avoid stale STL/3MF files that cannot be traced back to source edits.

## File roles

- Editable source files live in project source folders (including Blender files when Blender is used for that part).
- Exported print artifacts (`.stl`, `.3mf`) live in artifact/output folders.
- A geometry change is complete only when source and artifacts are updated together.

## Intended folder usage

- CAD source and hybrid design ownership: `../cad/source/`
- Blender-authored or Blender-maintained assets: `../cad/source/` (using clear filename suffixes)
- Exported meshes for slicing: `../cad/stl/`
- Print-oriented package outputs and slicer handoff artifacts: `../cad/step/` and/or documented print-export subfolders
- Render/reference snapshots for review: `../cad/renders/`

## Naming convention (recommended)

Use lowercase, hyphenated names with revision context:

- Source: `digit-wheel-r0.blend`
- Artifact: `digit-wheel-r0-a1-0p20mm.stl`
- Artifact package: `digit-wheel-r0-a1-profile-a.3mf`

## Export policy

For each print-critical part:

1. Update the editable source first.
2. Export mesh artifacts for slicing.
3. Record intended orientation and support assumptions.
4. Record known print constraints (bridges, overhang risk, tolerance-sensitive interfaces).

## Bambu A1 print intent notes

Start with these baseline assumptions and refine from print logs:

- Layer height: 0.20 mm baseline
- Walls: 3
- Infill: 15 percent gyroid (or documented alternative)
- Supports: none unless geometry requires them
- Material family: PLA/PLA Plus unless otherwise documented

## Validation checklist before committing geometry changes

- Source file updated.
- Matching STL/3MF artifacts exported and saved.
- Part orientation and support expectations documented.
- Any tolerance-sensitive dimensions noted in mechanical/testing docs.

## Relationship to other docs

- Mechanical constraints and assembly context: `06-mechanical-design.md`, `10-assembly.md`
- Printing strategy and quality checks: `09-printing.md`
- Execution gates and risks: `17-execution-plan-risks-and-next-steps.md`
- File ownership decision: `docs/decisions/2026-07-12-blender-cad-print-artifact-policy.md`
