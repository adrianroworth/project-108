# First Digit Prototype-r0 Execution Guide

> Status: Parked for now. Resume this guide after the completed USB bring-up stage in `17-esp32-usb-bring-up-guide.md` when hardware integration work restarts.

This guide defines the immediate build milestone for Swan: `first-digit-prototype-r0`.

Primary objective:

> Prove that one digit can home repeatably, index across all 52 positions, and physically switch representative flap pairs without jams.

This is an engineering-validation milestone, not a finish-quality milestone.

## Why this milestone exists now

The project has enough artwork and geometry definition to begin physical validation. The highest-value risk is no longer symbol refinement. The highest-value risk is whether the mechanism can actually home, index, and flip reliably under repeated motion.

## Scope

In scope:

- One working digit module only.
- ESP32 + ULN2003 + 28BYJ-48 motion control.
- AH3144E Hall-based home detection with wheel-mounted magnet.
- Parametric wheel, frame, and flap interface geometry.
- A representative pilot print subset (approximately 6-10 flap pairs).
- Measured validation data for homing, indexing, jamming, and fit.

Out of scope for `first-digit-prototype-r0`:

- Full five-digit chassis and enclosure work.
- Full 52 decorated flap-pair production run.
- Deferred peripherals (audio path, RTC, permanent PCB integration, lighting).
- Cosmetic finish optimization.

## Required outputs

- One functioning single-digit rig that can run unattended test loops.
- CAD models for motor mount, Hall bracket, test hub or wheel, and serviceable frame.
- Firmware implementing homing, single-step index, absolute move to position, and serial telemetry.
- Test logs capturing pass/fail metrics and corrective actions.
- Updated dimensions in `artwork/flap-layouts/flap-spec.yaml` if print fit changes are validated.

## Work sequence

### Stage A - Electronics bring-up (no full wheel required)

Goal: prove each subsystem independently before integration.

Before first power-on, copy and confirm the pin map in `../electronics/wiring/first-digit-prototype-r0-wiring-map.md`.

0. Prerequisite: complete `17-esp32-usb-bring-up-guide.md` (no motor, no Hall, no external PSU)
- Keep only the ESP32 connected by USB.
- Complete the prerequisite bring-up checklist in `17-esp32-usb-bring-up-guide.md`.
- Confirm the board appears on a COM port in Windows Device Manager.
- Use VS Code + PlatformIO (`platformio.platformio-ide`) and upload a minimal serial sketch.
- Confirm serial output at `115200` baud before connecting any other hardware.
- If upload stalls at `Connecting...`, hold BOOT until flashing begins.

1. Motor-only test
- Wire ESP32 GPIO outputs to ULN2003 inputs.
- Use separate 5V motor power and common ground with ESP32.
- Run clockwise and counter-clockwise stepping test.
- Confirm smooth rotation (not vibration-only behavior).

2. Hall-only test
- Wire AH3144E VCC to external 5V, GND to common ground, and OUT to one ESP32 GPIO input.
- Add 10k pull-up from Hall OUT to ESP32 3.3V (open-collector sensor output).
- Move magnet by hand and verify clean digital transitions.
- Mark active magnet pole for consistent assembly.

3. Combined test
- Run homing routine that rotates until Hall trigger is detected.
- Back off and re-approach if needed for repeatable edge capture.
- Report home events and sensor state over serial.

Exit criteria:

- Motor rotates reliably in both directions.
- Hall transitions are repeatable and noise-free.
- Homing routine can detect the same physical home point repeatedly.

Prerequisite exit criteria (from `17-esp32-usb-bring-up-guide.md`):

- ESP32 flashes successfully from VS Code + PlatformIO.
- Serial monitor shows stable expected output at `115200`.
- No motor, Hall sensor, or external 5V PSU was connected during this preflight check.

Reference images for this preflight live in `../media/reference-images/`:

- [2026-07-13-platformio-usb-preflight-01.png](../media/reference-images/2026-07-13-platformio-usb-preflight-01.png)
- [2026-07-13-platformio-usb-preflight-02.png](../media/reference-images/2026-07-13-platformio-usb-preflight-02.png)

### Stage B - Early mechanical proof parts (Blender/CAD entry point)

Goal: introduce only the minimum printed parts needed to test indexing mechanics.

Create in this order:

1. Motor shaft test hub with magnet pocket.
2. Adjustable Hall-sensor bracket.
3. Blank upper/lower flap pair with production geometry and no artwork.
4. Hinge-clearance coupon with multiple tolerance variants.
5. Partial wheel sector (6-8 positions) to test flap spacing and collisions.

After these pass, build the full 52-position wheel prototype with serviceable flange and shaft access.

Exit criteria:

- Magnet-sensor geometry is stable across repeated rotations.
- Selected hinge tolerance installs cleanly and survives flexing.
- Flaps settle by gravity and do not collide at neighboring positions.

### Stage C - Firmware indexing model for 52 positions

Goal: convert homed rotation into reliable logical positions `0..51`.

Implementation requirements:

- `home()`: find position zero from unknown state.
- `step_one_position()`: advance one logical index.
- `move_to(position)`: absolute move to any target `0..51`.
- `full_revolution_check()`: traverse cycle and re-detect home.

Important constraint:

- Do not assume exact integer steps-per-position from nominal values alone.
- Measure real full-revolution step count on your actual mechanism.
- Distribute step counts across 52 positions so total equals measured revolution count.
- Re-home periodically to bound drift accumulation.

Exit criteria:

- No single-position indexing drift after repeated cycles.
- Home is recovered consistently after full-revolution checks.

### Stage D - Representative pilot flaps (not full production)

Goal: test geometry and mechanics with realistic shape variety while keeping print cost low.

Print approximately 6-10 flap pairs, including:

- one simple numeral,
- one wide numeral,
- one dense numeral,
- one simple hieroglyph,
- one wide hieroglyph,
- one dense hieroglyph,
- one previously clipping-prone shape,
- one blank mechanical control pair.

Use temporary lightweight blanks for untested wheel positions.

Exit criteria:

- Representative shapes clear adjacent geometry.
- Artwork details print within safe zones and remain legible.

### Stage E - Reliability and serviceability validation

Run formal tests and record all outcomes.

Target metrics for `first-digit-prototype-r0`:

- Homing: same home location detected 20 consecutive times.
- Indexing: traverse all 52 positions and return home with no off-by-one event.
- Reliability: at least 500 commanded moves without jam.
- Flap motion: representative flaps fall and settle without manual assistance.
- Clearance: no persistent rubbing against wheel/flange/neighboring flap surfaces.
- Retention: flap features remain attached under repeated cycles.
- Servicing: motor, wheel, and at least one flap can be removed without full teardown.

Record for each test run:

- slicer profile and material,
- print orientation,
- measured dimensions,
- observed failures,
- corrective changes and result.

Use `19-first-digit-prototype-r0-test-log-template.md` to capture each run in a consistent structure.

## Definition of done for `first-digit-prototype-r0`

This milestone is complete when all criteria below are true:

- A single digit demonstrably homes and indexes all 52 logical positions.
- Representative flap subset flips reliably with no unresolved jam mode.
- Mechanical and firmware corrections are documented with rationale.
- Updated dimensional defaults are committed where validated.
- Deferred feature work remains deferred until this milestone is closed.

## Suggested implementation checklist

- [ ] Complete `17-esp32-usb-bring-up-guide.md` and record Stage 1 completion.
- [ ] Complete Stage A electronics bring-up logs.
- [ ] Print and validate Stage B proof parts.
- [ ] Implement Stage C homing/indexing firmware API.
- [ ] Print Stage D representative flap subset and validate fit.
- [ ] Run Stage E reliability sequence and capture evidence.
- [ ] Update BOM/docs/decisions from measured outcomes.
