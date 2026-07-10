# Decision: Symbol Artwork Source of Truth and Reference Hierarchy

- Date: 2026-07-10
- Status: Proposed
- Context: The project must preserve prop-authentic symbol shapes while still keeping Gardiner and Unicode mappings for interoperability and research.

## Options considered

- Option A: Use Unicode glyph rendering as the visual source for production artwork.
- Option B: Use mixed ad-hoc sources (Unicode, fan art, screenshots) without a fixed authority model.
- Option C: Treat project-owned master SVG symbols as the visual source of truth, with a fixed reference hierarchy and explicit provenance metadata.

## Decision

Choose Option C.

- Master symbol vectors are the authoritative visual source for production and generated assets.
- Unicode and Gardiner values are retained as reference metadata only, not visual source artwork.
- Reference priority for redraw and verification is:
  1. Direct screen references (highest quality captures available)
  2. Behind-the-scenes production photos
  3. High-quality fan recreation references
  4. Unicode/Gardiner references (metadata fallback only)
- Symbol registers must track reference provenance and a prop-accuracy rating for each symbol.

## Rationale

- Prevents drift toward academic typeface shapes that do not match the on-screen prop.
- Keeps every downstream artifact (flap panels, print sheets, firmware graphics, docs, UI previews) consistent by deriving from one artwork authority.
- Allows incremental quality improvements by making source evidence and confidence explicit.

## Consequences

- Update symbol documentation to name Unicode as "Unicode reference" rather than artwork.
- Add provenance and prop-accuracy fields to symbol tracking tables.
- Keep generated outputs reproducible from the master symbol set and existing tooling.
- Log future changes to source hierarchy or accuracy criteria as new decision records.
