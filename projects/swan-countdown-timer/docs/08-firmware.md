# Firmware

This document outlines the firmware requirements for the Swan Countdown Timer.

For the active `first-digit-prototype-r0` milestone, firmware scope is limited to one digit and deterministic homing/indexing behavior.

## Objectives

- Drive the display through countdown states.
- Handle stepper or actuator control for each digit.
- Support calibration and homing routines.
- Provide a simple update path for future features.

## Features

- Countdown timing behavior
- Digit advance control
- Error handling for missed positions
- Optional user input for start/stop/reset

## First-digit-prototype-r0 minimum command set

- `home()` from unknown position using Hall sensor trigger.
- `step_one_position()` to advance a single logical index.
- `move_to(position)` for absolute position targeting in range `0..51`.
- `full_revolution_check()` to verify index accounting and home recovery.
- Serial telemetry output of current logical position and sensor state.

## Indexing model requirements

- Treat 52 logical positions as primary behavior contract.
- Measure real full-revolution step count on the physical mechanism.
- Distribute steps across 52 positions so the total equals measured revolution steps.
- Re-home periodically to prevent long-run drift accumulation.

## Implementation notes

- Start with a minimal working prototype.
- Keep the firmware modular so display, timing, and input are separate.
- Record firmware decisions, pinouts, and versioning in the project docs.
