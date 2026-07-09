# Project 108: Swan Countdown Timer

A mechanically authentic, open-source split-flap recreation of the Swan Station countdown timer from LOST. This project is the first active build in Project 108 and combines 3D-printable CAD, electronics, firmware, artwork, and complete assembly documentation.

## Overview

The Swan Countdown Timer is designed as a physical, mechanical split-flap display rather than a screen-based replica. It prioritises a front-facing, authentic appearance, modular construction, and serviceable hardware.

## Goals

- Build a five-digit mechanical split-flap countdown display
- Use durable, 3D-printable parts with a Bambu A1-friendly workflow
- Validate a single working digit before scaling to the full display
- Print a small pilot batch of flaps and verify fit, movement, and finish
- Document CAD, electronics, firmware, assembly, calibration, and testing

## Design approach

- Print one complete digit first, not the full display
- Validate 50 flaps before committing to the full print run
- Prefer matte black PLA for flap bodies and white material for lettering
- Keep each module modular and repairable
- Use a 40-position split-flap wheel with numerals, letters, and a small set of symbols

## Project structure

- `docs/` — build-specific documentation and decision records
- `cad/` — CAD source, STEP exports, STL prints, and renders
- `artwork/` — numerals, hieroglyphs, flap layouts, and SVG assets
- `firmware/` — firmware source and release builds
- `electronics/` — schematics, PCB layouts, and wiring diagrams
- `tools/` — custom utilities and supporting files
- `bom/` — bill of materials and parts lists
- `media/` — photos, videos, and screenshots

## Next step

Start by reading `projects/swan-countdown-timer/docs/01-project-overview.md` and then validate the first batch of 50 flaps before moving to the full build.
