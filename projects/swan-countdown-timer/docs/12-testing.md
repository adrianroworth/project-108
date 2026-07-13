# Testing

This document describes testing for the Swan Countdown Timer.

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

## Commissioning API tests (single digit)

- Verify `home` repeatability across repeated power cycles.
- Verify `move_absolute` lands on expected index for a sampled set of positions.
- Verify `move_relative` forward/backward deltas from known index.
- Verify fault behavior and recovery for simulated invalid commands.
- Verify `status` availability in idle, motion, and fault states.

See `19-single-digit-commissioning-api.md` for expected command behavior.

## Stage-gate validation intent

- Stage 1 exit: single-digit homing/indexing reliability documented.
- Stage 2 exit: multi-digit synchronization and addressing documented.
- Stage 3 exit: webapp/API integration and operator diagnostics documented.
- Stage 4 exit: enhancement features validated without core regression.

Planning/risk context is maintained in `17-execution-plan-risks-and-next-steps.md`.

## What to record

- Problems found and how they were fixed.
- Print quality issues and design updates.
- Firmware or electronics changes.
- Any changes to the symbol set or display order.
