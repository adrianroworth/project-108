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

## Implementation notes

- Start with a minimal working prototype.
- Keep the firmware modular so display, timing, and input are separate.
- Record firmware decisions, pinouts, and versioning in the project docs.
