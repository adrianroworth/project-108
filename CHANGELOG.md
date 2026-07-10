# Changelog

## Unreleased

- Added Swan domain language reference at `projects/swan-countdown-timer/docs/14-domain-language.md` to standardize position/character/panel terminology
- Aligned project docs to 52-position terminology and removed remaining 50-flap/40-position references in active Swan docs
## 0.2.0 - 2026-07-10

- Switched numeral prototype font preference from Bahnschrift to Arial Black in lettering spec and register-driven master generator
- Added decision record `2026-07-10-numeral-font-freeze-arial-black.md` to formally freeze numeral font choice for prototype-r0
- Replaced hand-drawn placeholder symbol masters with register-driven master generation so `N0-N9` and `H1-H16` are sourced from symbol-register IDs and Unicode mappings
- Added no-dependency SVG asset tooling (`tools/artwork/build-svg-assets.mjs`, `tools/artwork/qa-svg-assets.mjs`) and documented master/generated artwork workflow
- Added pilot subset support to artwork tooling via `--symbols=` for focused generation and QA runs
- Added initial pilot master symbols (`N0`, `N1`, `N8`, `H11`, `H15`) and generated validated split-panel/color variant outputs for those IDs
- Added remaining numeral master SVGs (`N2-N7`, `N9`) so full `N0-N9` numeral batch generation is now available
- Added remaining hieroglyph master SVGs (`H1-H16` complete) so full 26-symbol generation can run from master assets
- Added Swan domain language reference at `projects/swan-countdown-timer/docs/14-domain-language.md` to standardize position/character/panel terminology
- Aligned project docs to 52-position terminology and removed remaining 50-flap/40-position references in active Swan docs
- Added split-panel topology terminology (`position`, `character`, `upper panel`, `lower panel`, `flap pair`, `flap set`) to the shared glossary
- Added prototype-r0 flap specification file at `projects/swan-countdown-timer/artwork/flap-layouts/flap-spec.yaml`
- Added decision record `2026-07-10-flap-topology-and-prototype-size.md` for topology and initial panel dimensions
- Added a dedicated numeral symbol register and linked both numeral/hieroglyph SVG tracking workflows
- Documented lightweight workflow conventions for branch naming, Conventional Commits, changelog usage, and release tagging
- Added starter flap SVG template files and documented optional Blender source conventions for flap artwork
- Standardized hieroglyphs to permanent `H1`-`H16` IDs and updated the known symbol names in the register
- Added full Gardiner-code mapping, descriptions, and external reference links for all H1-H16 hieroglyph symbols
- Corrected several Gardiner/Unicode mappings to match the standard sign list and marked unresolved project-specific sign mapping as `TBD`
- Added DEEPLEE PLA Plus Red 1kg (ASIN B0DCHVFRB2) to purchased Stage 01 and master BOM lists
- Added explicit purchased-items running total: 85.20 GBP
- Added explicit named hieroglyph entries (including Folded cloth, Spiral, Fire drill) with H01-H16 register tracking
- Added per-digit flap foreground/background color matrix for all five display modules
- Aligned remaining display and flap documentation with the 52-flap canonical set and removed legacy batch-label examples
- Consolidated hieroglyph naming so symbol names/status are maintained only in the hieroglyph symbol register
