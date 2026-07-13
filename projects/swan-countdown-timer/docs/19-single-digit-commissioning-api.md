# Single-Digit Commissioning API

This document specifies the simplified API used to test and commission one digit module before multi-digit expansion.

## Scope

Use this API for first-digit bring-up, workshop diagnostics, and quick regression tests.

This is intentionally smaller than the eventual production API used by the web application.

## Design goals

- Fast control loop for test operators.
- Clear command semantics for homing and indexed positioning.
- Deterministic responses suitable for scripted tests.
- Easy mapping into later multi-digit API design.

## Minimum command set

Required capabilities:

- `home`: run homing sequence and set current absolute index.
- `move_relative`: move by signed index delta.
- `move_absolute`: move to target absolute index.
- `rotate`: continuous rotation for diagnostic observation.
- `stop`: immediate motion stop.
- `status`: return current index, homing state, and fault state.
- `clear_fault`: clear recoverable fault and return to idle.

## Example JSON command envelope

```json
{
  "cmd": "move_absolute",
  "digit": 0,
  "index": 17,
  "request_id": "test-00041"
}
```

## Example JSON response envelope

```json
{
  "request_id": "test-00041",
  "ok": true,
  "state": {
    "digit": 0,
    "index": 17,
    "homed": true,
    "fault": "none",
    "motion": "idle"
  }
}
```

## Fault vocabulary (initial)

- `none`
- `home_timeout`
- `missed_step`
- `jam_detected`
- `sensor_fault`
- `unsafe_command`

## Behavioral rules

- `move_absolute` must fail with `unsafe_command` if module is not homed.
- `home` should be idempotent: repeated calls should not corrupt index state.
- `rotate` must require explicit `stop` or timeout guard.
- `status` must be available in any state, including fault state.

## Fast test script sequence

1. `status`
2. `home`
3. `move_absolute` to a known index
4. `move_relative` forward and backward by small deltas
5. `rotate` for a short interval
6. `stop`
7. `status`

## Acceptance criteria for Stage 1 exit

- Home repeatability is stable across repeated power cycles.
- Absolute positioning reaches expected index without cumulative drift.
- Fault responses are explicit and recoverable.
- Command/response logs are saved for test sessions.

## Related records

- Decision: `docs/decisions/2026-07-12-single-digit-commissioning-api.md`
- Firmware requirements: `08-firmware.md`
- Test procedures: `12-testing.md`
- Delivery gates and risks: `17-execution-plan-risks-and-next-steps.md`
