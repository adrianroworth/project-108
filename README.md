# Project 108

Project 108 is an open-source engineering initiative dedicated to recreating iconic technology from the LOST universe. Its first build is the Swan Countdown Timer, a mechanically authentic split-flap display inspired by the Dharma Initiative Swan Station.

## Mission

Build high-quality, mechanically authentic replicas with detailed documentation, open CAD, firmware, electronics, and 3D-printable designs. Start with the Swan Countdown Timer and grow the repository into a collection of LOST-inspired engineering projects.

## Current work

- `projects/swan-countdown-timer/` � the first active build
- `docs/` � shared design and process documentation
- `shared/` � common artwork, fonts, symbols, tools, and firmware libraries
- `future-projects/` � proposed next builds for the Project 108 umbrella

## Repository layout

- `README.md` � this umbrella project introduction
- `LICENSE` � repository license
- `CHANGELOG.md` � change history and version notes
- `ROADMAP.md` � planned milestones
- `CONTRIBUTING.md` � contribution guidelines
- `docs/` � shared principles, glossary, and decisions
- `projects/` � active and completed Project 108 builds
- `shared/` � reusable assets and libraries
- `future-projects/` � ideas and proposed builds to pursue later

## How to use this repo

1. Start with `projects/swan-countdown-timer/README.md` for the current build.
2. Read `docs/project-principles.md` before making major design decisions.
3. Keep shared assets in `shared/` rather than duplicating them across projects.
4. Add new Project 108 builds in `projects/` and new ideas in `future-projects/`.

## Naming and scope

Project 108 is intentionally broader than a single clock. It is the home for a family of related engineering builds inspired by LOST, with each major build treated as a subproject.

## Current status

This repository is in initial setup. The first goal is to validate one working split-flap digit, print a pilot batch followed by one complete 52-position prototype set, and document the build process before scaling the design.
Latest documented milestone: `v0.3.0` (2026-07-11), covering the Swan artwork source-of-truth policy, runbook, and generation/QA tooling workflow.
Planning update (2026-07-12): Swan execution path now formalizes stage-gated delivery (single-digit commissioning -> multi-digit expansion -> webapp/API integration -> enhancement layers).
