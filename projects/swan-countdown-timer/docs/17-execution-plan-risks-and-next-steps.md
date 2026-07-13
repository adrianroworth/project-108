# Execution Plan, Risks, and Next Steps

This document captures the current intended delivery path, major concerns, and recommended immediate actions for the Swan Countdown Timer.

## Captured intent (current)

1. Document all current work thoroughly and keep decisions and references accurate.
2. Define how Blender files and print artifacts will be created for Bambu A1 production workflow.
3. Build one working digit with reliable rotation, homing, and absolute positioning through a simplified test API.
4. Expand to multiple digit modules after the first digit repeatedly passes reliability tests.
5. Build a full webapp that acts as the Swan computer and updates display state through an API.
6. Add physical enhancement layers, including audio cues (beep, alarm, system-failure sounds).
7. Add remote-control capability.
8. Define and implement robust power architecture for the full system.

## Stage order and gate criteria

### Stage 0: Documentation baseline

Exit criteria:

- Key intent and constraints are recorded in docs and decisions.
- Changes are tracked in changelog.
- No known broken internal markdown links.

### Stage 1: One-digit mechanical and firmware commissioning

Exit criteria:

- Digit homes to the same index repeatably.
- Digit can move to requested absolute positions without drift.
- Commissioning API commands are stable and scripted tests pass.
- At least one endurance test run is documented.

### Stage 2: Multi-digit expansion

Exit criteria:

- Module-to-module mechanical tolerance is acceptable.
- Addressing and synchronization behavior are validated.
- Harnessing and power distribution are documented for multiple modules.

### Stage 3: Webapp and shared API integration

Exit criteria:

- Software stack is implemented in a dedicated sibling subproject with a stable integration contract to the physical timer.
- Webapp can issue display updates through a documented API.
- API error handling and recovery behavior are verified.
- Basic operator diagnostics are available.

### Stage 4: Enhancement and release hardening

Exit criteria:

- Audio and optional enhancement features integrate without destabilizing core behavior.
- Power path is stable under expected load.
- Assembly/calibration/test docs support repeatable builds.

## Concerns and risks to track now

- Mechanical tolerance stack-up may only appear after repeated prints and reassembly cycles.
- Homing reliability can degrade if sensor mounting and indexing strategy are not fixture-controlled.
- If API design drifts between firmware test mode and webapp mode, integration cost rises sharply.
- Power planning deferred too long can force late rewiring and enclosure changes.
- Audio subsystem can inject electrical noise into control electronics if grounding and decoupling are not planned early.
- Remote-control features add reliability and security complexity; should be layered after local control is solid.

## Missing items to add to the active plan

- Explicit fault taxonomy (`jam`, `missed-step`, `home-timeout`, `sensor-fault`, `overcurrent`).
- Structured test logs and acceptance thresholds (not only pass/fail notes).
- Versioned configuration for steps-per-position, homing offsets, and acceleration limits.
- Power budget worksheet for single-digit and full multi-digit loads.
- Service and recovery procedure for field issues (manual index reset, module swap, recalibration).

## Recommended immediate next steps

1. Lock the single-digit commissioning API and implement command/response tests.
2. Define Blender/CAD file ownership and export workflow for Bambu A1 artifacts.
3. Build and document a first bring-up checklist (mechanical, electrical, firmware).
4. Add a small automated validation path for reference integrity and key docs consistency.
5. Start a power-budget draft before multi-digit electronics are committed.

## Related records

- `docs/decisions/2026-07-12-stage-gated-delivery-sequence.md`
- `docs/decisions/2026-07-12-blender-cad-print-artifact-policy.md`
- `docs/decisions/2026-07-12-single-digit-commissioning-api.md`
- `../../../docs/decisions/2026-07-12-swan-software-control-subproject-boundary.md`
- `08-firmware.md`
- `12-testing.md`
