# Decision: Blender/CAD Print Artifact Policy for Bambu A1 Workflow

- Date: 2026-07-12
- Status: Approved
- Context: The project needs a clear policy for which files are editable source, which files are print artifacts, and how Blender fits into a reproducible Bambu A1 workflow.

## Options considered

- Option A: Keep only STL files and skip editable source files.
- Option B: Use both editable source files and exported print artifacts with documented ownership and export rules.
- Option C: Maintain Blender as the only source for every mechanical part.

## Decision

Choose Option B.

- Keep editable source files in project-controlled source folders (including Blender files where Blender is used).
- Treat exported STL/3MF as generated print artifacts derived from source files.
- Document Bambu A1-oriented slicing assumptions and print intent in project docs.

## Rationale

- Supports reproducibility and change tracking.
- Prevents loss of design intent that occurs when only mesh artifacts are saved.
- Keeps flexibility for mixed tooling (parametric CAD and Blender) while preserving a single documented workflow.

## Consequences

- CAD and printing docs must describe source-file ownership and export procedure.
- Future contributors should update source and artifact files together when geometry changes.
- Print validation notes should reference source revision and export timestamp/version context.
