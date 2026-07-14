# Electronics

This document defines the electronics approach for the Swan Countdown Timer.

The current implementation milestone is `first-digit-prototype-r0` and focuses on one digit only.

## Goals

- Drive the split-flap mechanism reliably.
- Provide countdown control.
- Support modular digit connections.

## Considerations

- Use a microcontroller with enough GPIO for the digits or a driver board.
- Include power and signal management for the motor/actuator.
- Design the wiring so each digit can be disconnected separately.

## Intended power architecture

- Finished build power source: external enclosed regulated 5V desktop adapter.
- Current selected purchased adapter: Baiyouli 5V 10A 50W (ASIN B0GBVHZVKD).
- Keep 230V mains outside the timer enclosure; route only low-voltage 5V and GND into the build.
- Feed incoming 5V through a low-voltage fuse, then into a distribution point for motor branches and controller/peripheral branches.
- Ensure the full connector path (adapter plug, jack, breakout, wire gauge, and terminals) is rated for expected current.

## Deliverables

- Schematic
- PCB layout
- Wiring diagrams
- Parts list for power, connectors, sensors, and actuators

## First-digit-prototype-r0 wiring scope

- ESP32 DevKitC controls ULN2003 inputs for one 28BYJ-48 motor.
- AH3144E Hall sensor provides home-position trigger using a wheel-mounted magnet.
- Stepper supply uses a dedicated 5V rail.
- ESP32 and motor-driver grounds must be tied together.
- Hall output is treated as open-collector and pulled up to 3.3V for ESP32-safe GPIO input.

Canonical connection mapping lives at `../electronics/wiring/first-digit-prototype-r0-wiring-map.md`.

## Bring-up order

1. Motor-only test: verify stepping sequence and bidirectional motion.
2. Hall-only test: verify magnet polarity trigger and stable signal transitions.
3. Combined homing test: rotate until Hall edge, then confirm repeated home acquisition.

## Evidence to record

- Pin map used in firmware.
- Photo or diagram of tested wiring.
- Measured supply behavior under motion (voltage stability and obvious brownouts).
- Any noise or false-trigger observations during Hall testing.

## Notes

- Keep the electronics design separate from the mechanical frame where possible.
- Document every change in `docs/decisions/`.
