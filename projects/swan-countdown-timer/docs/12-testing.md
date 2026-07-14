# Testing

This document describes testing for the Swan Countdown Timer.

The active test target is the single-digit `first-digit-prototype-r0` milestone.

## Test goals

- Confirm the prototype is mechanically reliable.
- Verify print quality and fit for the first flap batch.
- Validate electronics and firmware control.
- Ensure the countdown behavior functions as expected.

## Test plan

- Functional test: cycle one digit through all positions.
- Stress test: run repeated cycles to detect binding or wear.
- Electrical test: verify wiring, power, and signal integrity.
- User test: confirm the display is readable and cohesive.

## First-digit-prototype-r0 validation metrics

- Homing repeatability: 20 consecutive successful home acquisitions.
- Indexing accuracy: traverse all 52 positions and return to home with no off-by-one mismatch.
- Reliability endurance: at least 500 commanded position changes without unresolved jam.
- Flap behavior: representative pilot subset falls and settles without manual intervention.
- Clearance and retention: no persistent rubbing; no flap detachment during repeated cycling.
- Serviceability: wheel, motor, and at least one flap can be removed and reinstalled without destructive teardown.

## Test evidence requirements

- Record slicer profile, filament, and print orientation per tested part.
- Record measured dimensions for changed geometry and whether change passed/fail.
- Log each failure mode with reproduction steps and corrective action.
- Document firmware revision and pin mapping used for each run.
- Promote validated geometry changes into `artwork/flap-layouts/flap-spec.yaml` or linked CAD parameters.
- Keep evidence provenance explicit: local capture path, date, operator, and run ID.

### External image guidance (including ChatGPT share conversations)

- Images from external chats may be added for context/completeness, but treat them as reference material by default.
- Do not mark stage gates as passed based only on externally hosted images.
- For physical-test evidence, store local copies under `projects/swan-countdown-timer/media/` and reference them from the dated run log.
- When reusing an external image, record original source URL and capture date in the run log notes.

Use `19-first-digit-prototype-r0-test-log-template.md` as the default run-log structure for all `first-digit-prototype-r0` test sessions.

## What to record

- Problems found and how they were fixed.
- Print quality issues and design updates.
- Firmware or electronics changes.
- Any changes to the symbol set or display order.
