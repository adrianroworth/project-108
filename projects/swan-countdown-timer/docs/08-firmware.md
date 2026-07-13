# Firmware

This document outlines the firmware requirements for the Swan Countdown Timer.

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

## Single-digit commissioning path

Before full multi-digit orchestration, firmware should expose a minimal commissioning API for one digit module.

Required commissioning capabilities:

- homing
- relative movement
- absolute indexed positioning
- status/fault reporting
- emergency stop and recoverable fault clear

Detailed command semantics are defined in `19-single-digit-commissioning-api.md`.

## Integration trajectory

- Stage 1: one-digit control and reliability using commissioning API
- Stage 2: multi-digit addressing and synchronization
- Stage 3: webapp-driven updates through a shared API contract
- Stage 4: enhancement integration (audio, remote-control layer, and power-aware behavior)

## Implementation notes

- Start with a minimal working prototype.
- Keep the firmware modular so display, timing, and input are separate.
- Record firmware decisions, pinouts, and versioning in the project docs.
- Keep commissioning commands deterministic so they can be scripted for regression tests.
