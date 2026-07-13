# Decision: First-digit-prototype-r0 milestone and validation gates

- **Date:** 2026-07-13
- **Status:** Approved
- **Context:** Swan has enough artwork and baseline geometry to begin physical engineering validation. The main risk is mechanism reliability (homing, indexing, flap motion), not additional artwork refinement.
- **Options considered:**
  - Option A: Continue artwork expansion and defer physical prototype integration.
  - Option B: Build a full five-digit assembly immediately.
  - Option C: Run a constrained one-digit engineering milestone with staged gates before scaling.
- **Decision:** Option C. Execute the next phase as `first-digit-prototype-r0` with explicit stage order and measurable closeout gates.
- **Rationale:**
  - Reduces cost and rework risk by proving mechanics and control on one digit first.
  - Produces actionable dimensional and firmware corrections before full-set printing.
  - Keeps deferred features out of critical path until core reliability is demonstrated.
- **Consequences:**
  - Development sequence must prioritize subsystem validation, then integration.
  - Stage 01 BOM/test documentation must include gate metrics and recorded evidence.
  - Full decorated 52-position production and multi-digit expansion are blocked until this milestone closes.

## Required stage order

1. Motor-only bring-up.
2. Hall-only bring-up.
3. Combined homing routine.
4. Early mechanical proof-part prints.
5. 52-position indexing model and firmware commands.
6. Representative pilot flap subset test.
7. Reliability and serviceability test gate.

## Closeout metrics

- Homing repeatability: 20 consecutive successful home detections.
- Indexing integrity: complete 52-position traversal and return-to-home with no off-by-one drift.
- Reliability run: at least 500 commanded moves without unresolved jam.
- Mechanical behavior: representative flaps settle without manual assistance and remain retained.
- Serviceability: wheel, motor, and at least one flap removable without destructive teardown.
