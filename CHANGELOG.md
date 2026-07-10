# Changelog

## Unreleased

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

## 0.1.0 - Initial repository setup

- Created `Project 108` umbrella repository structure
- Added the `Swan Countdown Timer` subproject
- Added starter documentation and contribution guidance
- Added directory-level `README.md` files for major folders and decision template guides
- Restructured Swan BOM into master and stage files with explicit purchased vs planned tracking
- Documented deferred post-prototype items and implementation intent
- Added character-set specification, wheel population rules, and lettering/font-family standards for flap graphics
- Added explicit chat-agreed 26-symbol set / 52-flap mapping and per-digit-group flap color specification
- Added hieroglyph symbol register for H01-H16 artwork tracking
- Removed SPACE/COLON/DASH/DOT from active symbol inventory scope to match the documented 52-flap production set
- Added explicit named hieroglyph entries (including Folded cloth, Spiral, Fire drill) with H01-H16 register tracking
- Added per-digit flap foreground/background color matrix for all five display modules
- Aligned remaining display and flap documentation with the 52-flap canonical set and removed legacy batch-label examples
- Consolidated hieroglyph naming so symbol names/status are maintained only in the hieroglyph symbol register
