# Contributing to Project 108

Thank you for contributing to Project 108.

## How to contribute

- Open an issue for new ideas, questions, or bugs.
- Use a pull request to propose changes.
- Keep changes focused and document design decisions where appropriate.

## Repository conventions

- Add new completed builds under `projects/`.
- Add proposed future builds under `future-projects/`.
- Keep shared assets in `shared/`.
- Add decisions to `docs/decisions/` or the build-specific `docs/decisions/` folder.
- Use lowercase filenames with hyphens, not spaces.

## Documentation

- Update `README.md` and project `README.md` files when adding a new build.
- Keep `docs/` up to date with project principles and glossary entries.
- Add or update directory-level `README.md` files when creating or reorganizing major folders.
- Use decision records in `docs/decisions/` or project-specific `docs/decisions/` for architecture, design, or process choices.

## Workflow conventions

- Use branch names in the form `<type>/<scope>-<purpose>`.
- Preferred branch types: `docs`, `feat`, `fix`, `chore`, `refactor`, `release`.
- Use Conventional Commits for commit messages.
- Keep unreleased work under the `Unreleased` section in `CHANGELOG.md`.
- When cutting a release, move relevant entries from `Unreleased` into a versioned section and tag the repo with `vX.Y.Z`.

## Review

- Include a short summary of what changed and why.
- For design changes, explain tradeoffs and risks.

## Swan artwork PR checklist

Use this checklist for pull requests that modify Swan symbol artwork.

### Required references

- `projects/swan-countdown-timer/docs/16-artwork-update-runbook.md`
- `projects/swan-countdown-timer/docs/15-artwork-source-of-truth-workflow.md`
- `projects/swan-countdown-timer/docs/03-symbol-inventory.md`
- `projects/swan-countdown-timer/docs/13-lettering-and-flap-graphics.md`

### Files to update together

- Numerals: `projects/swan-countdown-timer/artwork/numerals/n-<digit>.svg` plus `projects/swan-countdown-timer/artwork/numerals/symbol-register.md`
- Hieroglyphs: `projects/swan-countdown-timer/artwork/hieroglyphs/h-<id>.svg` plus `projects/swan-countdown-timer/artwork/hieroglyphs/symbol-register.md`

### PR validation checklist

- Confirm symbol IDs and filename mapping still match `03-symbol-inventory.md`.
- Confirm each changed SVG has a matching register-row update.
- Replace `TBD` values for `Reference tier`, `Evidence ref`, and `Prop accuracy` on changed rows.
- Update `Vector status` for all changed symbols.
- Add `CHANGELOG.md` `Unreleased` notes when the batch is milestone-relevant.
- Add a decision record only if IDs/count/sequence/naming/policy changed.
