# Changelog

## Unreleased

- Marked `projects/swan-countdown-timer/docs/18-first-digit-prototype-r0.md` and `projects/swan-countdown-timer/docs/19-first-digit-prototype-r0-test-log-template.md` as temporarily parked until hardware integration resumes
- Added test-run record `projects/swan-countdown-timer/docs/test-runs/2026-07-14-r0-run-04.md` documenting a passed ESP32 USB-only bring-up (build/upload/serial monitor verification)
- Added `projects/swan-countdown-timer/docs/17-esp32-usb-bring-up-guide.md` as a beginner-first, USB-only ESP32 bring-up prerequisite covering setup, success criteria, troubleshooting, and evidence capture
- Updated Swan docs and milestone flow to link Stage A0 preflight to the new bring-up guide before motor/sensor/external-PSU work
- Updated `projects/swan-countdown-timer/README.md` next-step sequence to run the USB bring-up guide before `18-first-digit-prototype-r0.md`
- Added imported reference images for the Stage A0 USB-only preflight and referenced them from the prototype documentation
- Updated `first-digit-prototype-r0` execution docs to add an explicit ESP32 USB-only Stage A0 preflight before any motor/Hall/external-PSU wiring
- Added firmware and testing guidance for VS Code + PlatformIO preflight validation and evidence provenance at the current pre-implementation stage
- Added policy notes for using external/chat-sourced images as reference context while requiring locally captured evidence for physical validation gates
- Added workspace VS Code extension recommendations file with `platformio.platformio-ide` for firmware development
- Updated Stage 01 and master BOM records to mark purchased 3 mm shaft rods (ASIN `B0CD7SXD6W`) and a 5V 5A PSU (ASIN `B07PPPF1R5`), removed them from Stage 01 outstanding items, and recalculated purchased totals to 123.75 GBP
- Updated Swan overview purchase list to include the newly recorded breadboard packs, shaft rods, and 5V PSU purchases
- Updated Stage 01 and master BOM records to mark 3 purchased packs of 830-point breadboards (ASIN `B07YJTFVB2`) and recalculated purchased totals
- Corrected first-digit Hall sensor wiring docs to use AH3144E VCC from external 5V while keeping Hall OUT pulled up to ESP32 3.3V
- Added explicit Stage 01 and master BOM entries for required 10k pull-up resistor(s) used by Hall OUT
- Clarified `2026-07-13-r0-run-02` notes to keep canonical GPIO18->IN3 and GPIO19->IN4 mapping and record sequence correction as a firmware change
- Marked `2026-07-13-r0-run-02` evidence artifacts as not yet committed so repository state matches recorded references
- Added `projects/swan-countdown-timer/docs/18-first-digit-prototype-r0.md` with a full staged execution guide covering electronics bring-up, mechanical proof parts, indexing firmware, representative pilot printing, and reliability gates
- Added `projects/swan-countdown-timer/docs/19-first-digit-prototype-r0-test-log-template.md` to standardize per-run evidence capture for the active first-digit milestone
- Added `projects/swan-countdown-timer/electronics/wiring/first-digit-prototype-r0-wiring-map.md` as the canonical pre-power connection map and checklist for first physical bring-up
- Added decision record `2026-07-13-first-digit-prototype-r0-milestone-and-validation-gates.md` to formalize milestone scope, sequencing, and closeout criteria
- Updated Stage 01 BOM plan with explicit `first-digit-prototype-r0` execution order and measurable validation gates
- Updated Swan docs index, testing doc, milestone guide, and electronics docs so first-digit run logs and wiring setup use shared canonical references
- Updated Swan README next-step guidance and umbrella roadmap entries to align with the new active implementation milestone

## 0.3.0 - 2026-07-11

- Added decision record `2026-07-10-artwork-source-of-truth-and-reference-hierarchy.md` to formalize master SVG symbols as visual source of truth and Unicode/Gardiner as metadata references
- Updated Swan symbol inventory plus numeral and hieroglyph symbol registers with provenance-oriented metadata (`Unicode reference`, reference tier, evidence reference, prop accuracy)
- Added formal symbol update process guide at `projects/swan-countdown-timer/docs/15-artwork-source-of-truth-workflow.md` and linked it from Swan docs/artwork readmes
- Added end-to-end artwork runbook at `projects/swan-countdown-timer/docs/16-artwork-update-runbook.md` plus embedded quick-checklist sections in both symbol registers
- Added a hieroglyph quality-review rubric and scoring guide to the artwork runbook to standardize shape/style acceptance before promotion to `Approved`
- Added executable artwork generation and QA scripts under `projects/swan-countdown-timer/tools/artwork/` and documented run commands in runbook/tooling docs
- Added dedicated reference image set for `H1-H5` and displayed-digit references (`44444.png`, `55555.png`, `99991.png`) under `projects/swan-countdown-timer/artwork/references/`
- Redrew `H1-H5` source/master hieroglyph vectors from dedicated references and upgraded metadata traceability entries in the hieroglyph register
- Updated numeral source/master vectors and register evidence for `N1`, `N4`, `N5`, and `N9` using new displayed-digit references

## 0.2.0 - 2026-07-10

- Added Swan domain language reference at `projects/swan-countdown-timer/docs/14-domain-language.md` to standardize position/character/panel terminology
- Aligned project docs to 52-position terminology and removed remaining 50-flap/40-position references in active Swan docs
- Switched numeral prototype font preference from Bahnschrift to Arial Black in lettering spec and register-driven master generator
- Added decision record `2026-07-10-numeral-font-freeze-arial-black.md` to formally freeze numeral font choice for prototype-r0
- Replaced hand-drawn placeholder symbol masters with register-driven master generation so `N0-N9` and `H1-H16` are sourced from symbol-register IDs and Unicode mappings
- Added no-dependency SVG asset tooling (`tools/artwork/build-svg-assets.mjs`, `tools/artwork/qa-svg-assets.mjs`) and documented master/generated artwork workflow
- Added pilot subset support to artwork tooling via `--symbols=` for focused generation and QA runs
- Added initial pilot master symbols (`N0`, `N1`, `N8`, `H11`, `H15`) and generated validated split-panel/color variant outputs for those IDs
- Added remaining numeral master SVGs (`N2-N7`, `N9`) so full `N0-N9` numeral batch generation is now available
- Added remaining hieroglyph master SVGs (`H1-H16` complete) so full 26-symbol generation can run from master assets
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
