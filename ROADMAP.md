# Project 108 Roadmap

## Phase 1 – Foundation

- Establish repository structure and shared documentation
- Define the Project 108 brand and first build scope
- Create the Swan Countdown Timer project folder and docs
- Add directory-level README files and decision record templates

## Phase 2 – Prototype (Single Digit)

- Design and print one working split-flap digit module
- Validate a pilot batch, then one complete 52-position prototype set
- Verify hinge fit, flap movement, homing reliability, and material finish
- Implement a simplified single-digit commissioning API (home, rotate, move-to-position)
- Maintain a stage-specific prototype BOM and master part ledger

## Phase 3 – Build (Multi-Digit Expansion)

- Expand from one verified module to multiple synchronized digit modules
- Complete CAD for the full display mechanism and module-to-module integration
- Finalize electronics, PCB, wiring, and power-distribution architecture for multi-digit operation
- Harden firmware for indexed addressing, fault handling, and recovery across modules

## Phase 4 – Software Integration

- Stand up a dedicated Swan software-control subproject under `projects/` for webapp and API implementation
- Build a web application that acts as the Swan computer interface
- Define and implement the display update API used by firmware and webapp
- Add logging, diagnostics, and a fast operator test path for workshop commissioning
- Add remote-control capability on top of the same API surface

## Phase 5 – Physical Enhancements

- Add audio subsystem for beep, alarm, and system-failure sounds
- Validate speaker placement, amplifier path, and sound-level behavior
- Integrate deferred enhancement items (for example RTC and additional lighting)

## Phase 6 – Release

- Publish assembly, calibration, and testing guides
- Create a BOM and share source assets
- Prepare the first Project 108 release

## Future projects

- Hatch computer
- Orientation film player
- Blast door map
- Dharma label generator
