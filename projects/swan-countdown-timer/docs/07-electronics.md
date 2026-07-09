# Electronics

This document defines the electronics approach for the Swan Countdown Timer.

## Goals

- Drive the split-flap mechanism reliably.
- Provide countdown control.
- Support modular digit connections.

## Considerations

- Use a microcontroller with enough GPIO for the digits or a driver board.
- Include power and signal management for the motor/actuator.
- Design the wiring so each digit can be disconnected separately.

## Deliverables

- Schematic
- PCB layout
- Wiring diagrams
- Parts list for power, connectors, sensors, and actuators

## Notes

- Keep the electronics design separate from the mechanical frame where possible.
- Document every change in `docs/decisions/`.
