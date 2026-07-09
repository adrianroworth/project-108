# Swan Countdown Timer Overview

Project 108's first active build is the Swan Countdown Timer: a mechanical split-flap display inspired by the Dharma Initiative Swan Station countdown timer from LOST.

This document describes what the project is, why it exists, and the initial scope for the first prototype.

## Purpose

- Capture the look and feel of a true split-flap countdown timer.
- Build a working, modular five-digit display.
- Use 3D-printed parts, custom electronics, and firmware to drive the mechanism.
- Document the build process clearly so others can reproduce it.

## Initial scope

- One working split-flap digit prototype.
- Pilot batch of approximately 50 flaps for fit, finish, and movement validation.
- Modular digit modules that can be combined into the full display.
- A reusable file and asset structure for CAD, artwork, firmware, electronics, and documentation.

## Prototype status

- This project is currently in the prototype phase with a focus on the first digit split-flap module.
- BOM documentation is now staged so planning and purchasing can be tracked by phase.
- Source of truth for parts: `projects/swan-countdown-timer/bom/master-bom.md`.

## BOM documentation strategy

- `projects/swan-countdown-timer/bom/master-bom.md`: all purchased and planned parts.
- `projects/swan-countdown-timer/bom/stage-01-first-digit-prototype.md`: current prototype-phase items and milestones.
- `projects/swan-countdown-timer/bom/stage-02-post-prototype-expansion.md`: intentionally deferred items for post-prototype integration.
- `projects/swan-countdown-timer/bom/stage-03-full-display-build.md`: placeholder for final scale-up quantities.

## Current prototype purchases

- DEEPLEE PLA Plus 1.75mm Filament White 1kg — 1 spool, ~£10.99
- DEEPLEE Rapid PLA Plus Filament 1.75mm Black 1kg — 1 spool, ~£10.99
- 100 Pack 2×1mm Strong Mini Round N52 Neodymium Magnets — 1 pack, ~£5.49
- Huba 20 PCS AH3144E Hall Sensor pack — 1 pack, ~£5.99
- Fasizi ELA2318 stepper motor — 1 unit, ~£8.79 (used price on Amazon listing)
- ESP-32 DevKitC ESP-32 Development Board — 1 unit, ~£5.99
- Saipor 30Pcs 623ZZ bearings — 1 pack, ~£6.99
- ELEGOO 120pcs multicolored Dupont wire kit — 1 kit, ~£6.99
- Moqinai 1200 PCS M3 screw set — 1 kit, ~£6.99

## Deferred post-prototype items

These are intentionally deferred until the first digit works reliably:

- Speaker
- Audio amplifier
- LEDs
- RTC module
- Soldering iron
- Perfboard/PCB

## Success criteria for the first phase

- One digit module assembles and cycles reliably.
- Flaps fit cleanly and flip without binding.
- The display uses a consistent character set and slot order.
- The first build documentation is complete enough to guide a repeatable prototype.
