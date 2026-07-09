# AGENTS.md

## Purpose
This file helps AI coding agents understand the repository, the Project 108 umbrella structure, and how to keep documentation and project files aligned as the build evolves.

## Current repository state
- This repository is initialized for Project 108 with a documentation-first structure.
- Active source and asset folders include `projects/swan-countdown-timer/`, `docs/`, `shared/`, and `future-projects/`.
- Project documentation and decision records are the primary artifacts to update as the project evolves.

## What agents should do
- Respect the Project 108 structure: umbrella docs in root and build-specific docs in `projects/swan-countdown-timer/`.
- When a new design decision, issue, bug, or documentable step is introduced, update the appropriate files and add a decision record if applicable.
- Keep documentation consistent by linking related files, not duplicating content across multiple docs.
- Prefer small, focused changes: add or update a single doc page, decision file, roadmap item, or changelog entry for each new action.

## When new information is added
For any new decision, design element, issue, bug, documentable step, or project update, the agent should:
- Add or update a decision record under `docs/decisions/` for umbrella-level choices and `projects/swan-countdown-timer/docs/decisions/` for build-specific choices.
- Update `README.md` if the overall project scope, naming, or build status changes.
- Update `projects/swan-countdown-timer/README.md` for any Swan build-specific scope, goals, or progress changes.
- Update `ROADMAP.md` when milestones, phases, or future project priorities change.
- Update `CHANGELOG.md` for any documented release, milestone, or project status change.
- Update `CONTRIBUTING.md` if contribution workflow or repository conventions change.
- Add or extend relevant docs pages under `docs/` or `projects/swan-countdown-timer/docs/` when a new technical topic or process step is introduced.
- Update `docs/project-principles.md` and `docs/glossary.md` when new project principles or terms become important.

## How to add a new decision or design record
- Create a new markdown file in the appropriate `decisions/` folder with a descriptive filename and the decision template.
- Link the decision file from the relevant documentation page or README when it is relevant to project readers.
- Mark the status as Proposed, Approved, Rejected, or Superseded.

## How to update this file
- Keep the project overview and file guidance aligned with the repository layout.
- If the repository gets new subprojects or a different architecture, update this file to reflect the new structure and key conventions.
- When the repository transitions from setup to active development, add guidance on build/test commands, toolchains, or file naming conventions as needed.
