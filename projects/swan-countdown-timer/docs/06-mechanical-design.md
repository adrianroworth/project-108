# Mechanical Design

This document captures the overall mechanical design and assembly approach.

The active prototype sequence is defined in `18-first-digit-prototype-r0.md`.

## Key components

- Digit module frame
- Split-flap wheel
- Flap retention and hinge
- Drive mechanism
- Assembly fixtures and guides

## Design priorities

- Modularity: each digit should be serviceable independently.
- Rigidity: the frame must hold the mechanism without flex.
- Accessibility: make it easy to remove and replace flaps and wheels.

## Prototype tasks

- Build one complete digit module.
- Test the wheel assembly, the drive, and the flap path.
- Adjust clearances based on the first physical prototype.

## First-digit-prototype-r0 mechanical deliverables

- Motor shaft test hub with magnet pocket.
- Adjustable Hall sensor bracket with distance tuning.
- Blank upper/lower flap pair for pure geometry validation.
- Hinge-clearance coupon with multiple tolerance variants.
- Partial wheel sector (6-8 positions) before full 52-position wheel.

These are intentionally ordered to reduce print/time cost while testing the most likely failure points first.

## Mechanical acceptance checks

- Flange spacing and wheel thickness do not induce rubbing.
- Selected hinge tolerance is installable, durable, and repeatable.
- Neighboring flaps do not collide at rotation or settle positions.
- Wheel, flap, and motor remain serviceable without destructive teardown.
