# Project 108: Swan Countdown Timer

A mechanically authentic, open-source split-flap recreation of the Swan Station countdown timer from LOST. This project is the first active build in Project 108 and combines 3D-printable CAD, electronics, firmware, artwork, and complete assembly documentation.

## Overview

The Swan Countdown Timer is designed as a physical, mechanical split-flap display rather than a screen-based replica. It prioritises a front-facing, authentic appearance, modular construction, and serviceable hardware.

## Goals

- Build a five-digit mechanical split-flap countdown display
- Use durable, 3D-printable parts with a Bambu A1-friendly workflow
- Validate a single working digit before scaling to the full display
- Print a small pilot batch, then one complete 52-position prototype set per digit module, and verify fit, movement, and finish
- Document CAD, electronics, firmware, assembly, calibration, and testing

## Design approach

- Print one complete digit first, not the full display
- Use a 52-position wheel per digit (26 unique symbols repeated twice)
- Treat prototype-r0 panel dimensions as configurable so artwork can scale
- Prefer matte black PLA for flap bodies and white material for lettering
- Keep each module modular and repairable
- Use conventional split upper/lower panels to form each visible character
- Treat master symbol SVG assets as visual source of truth; keep Unicode/Gardiner mappings as metadata references

## Project structure

- `docs/` � build-specific documentation and decision records
- `cad/` � CAD source, STEP exports, STL prints, and renders
- `artwork/` � numerals, hieroglyphs, flap layouts, and SVG assets
- `firmware/` � firmware source and release builds
- `electronics/` � schematics, PCB layouts, and wiring diagrams
- `tools/` � custom utilities and supporting files
- `bom/` � bill of materials and parts lists
- `media/` � photos, videos, and screenshots

## Next step

Start by reading `projects/swan-countdown-timer/docs/01-project-overview.md`, `projects/swan-countdown-timer/docs/17-execution-plan-risks-and-next-steps.md`, and `projects/swan-countdown-timer/docs/19-single-digit-commissioning-api.md`, then commission one digit module before scaling.

## Release status

Latest documented milestone: `v0.3.0` (2026-07-11), establishing master SVGs as visual source-of-truth and formalizing the artwork build and QA workflow.

Current planning update (2026-07-12): stage-gated delivery path and first-digit commissioning API scope documented for prototype-to-integration execution.
