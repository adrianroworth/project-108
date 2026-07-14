# First Digit Prototype-r0 Test Log Template

> Status: Parked for now. Use this template again when hardware integration work resumes and physical motor/Hall/flap testing starts.

Use this page as a copy-ready template for each physical test run during `first-digit-prototype-r0`.

Recommended filename format for run logs:

- `projects/swan-countdown-timer/docs/test-runs/YYYY-MM-DD-r0-run-XX.md`

If you keep logs in another location, keep the section structure below unchanged so results remain comparable.

## Run metadata

- Date:
- Operator:
- Run ID:
- Milestone: `first-digit-prototype-r0`
- Physical build state: pre-build planning / ESP32 USB-only preflight / bench wiring / partial assembly / assembled digit
- Firmware revision/commit:
- CAD revision/commit:
- Slicer profile name/version:
- Material(s):
- Ambient notes (optional):

## Hardware and wiring

- Controller board:
- Motor + driver:
- Hall sensor part:
- Power supply details:
- Pin map used:
- Wiring changes since previous run:

## Printed parts in this run

| Part name | Revision | Orientation | Key dimensions checked | Pass/Fail | Notes |
|---|---|---|---|---|---|
| | | | | | |

## Stage gate checks

### Homing repeatability (target: 20/20)

- Attempts:
- Successes:
- Failures:
- Notes:

### Indexing integrity across 52 positions

- Full traversal attempted: Yes/No
- Returned to home correctly: Yes/No
- Off-by-one events observed:
- Positions involved (if any):
- Notes:

### Reliability endurance (target: >= 500 moves)

- Commanded moves completed:
- Jam events:
- Recovery required:
- Notes:

### Flap motion and settling

- Representative flap set used:
- Settling behavior summary:
- Manual intervention required: Yes/No
- Notes:

### Clearance and retention

- Persistent rubbing observed: Yes/No
- Location(s):
- Flap retention failures: Yes/No
- Notes:

### Serviceability check

- Removed and reinstalled at least one flap: Yes/No
- Removed and reinstalled wheel: Yes/No
- Removed and reinstalled motor: Yes/No
- Non-destructive process maintained: Yes/No
- Notes:

## Failures and corrective actions

| Failure mode | Reproduction steps | Suspected cause | Corrective action | Outcome |
|---|---|---|---|---|
| | | | | |

## Measurements and parameter updates

- Measured values changed this run:
- Proposed CAD parameter updates:
- Proposed `flap-spec.yaml` updates:
- Decision record required: Yes/No
- Follow-up issue(s):

## Evidence references

- Photos:
- Video:
- Serial logs:
- Oscilloscope or meter captures (if any):
- External reference images/links (if used):
- Example preflight images:
	- `projects/swan-countdown-timer/media/reference-images/2026-07-13-platformio-usb-preflight-01.png`
	- `projects/swan-countdown-timer/media/reference-images/2026-07-13-platformio-usb-preflight-02.png`

## Run outcome summary

- Overall status: Pass / Partial / Fail
- Gate(s) satisfied in this run:
- Blocking issue(s):
- Next run objective:

If the run passed, put the exact stage completion statement in the run log outcome summary after these bullets.
