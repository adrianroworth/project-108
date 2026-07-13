# Decision: Stage-Gated Delivery Sequence for Swan Build

- Date: 2026-07-12
- Status: Approved
- Context: The project has several parallel ambitions (mechanics, firmware, webapp, remote control, audio, and power). Without a strict sequence, effort can fragment and hide critical mechanical/firmware reliability issues.

## Options considered

- Option A: Build all tracks in parallel from the beginning.
- Option B: Stage-gated sequence with explicit exit criteria between stages.
- Option C: Software-first simulation, then hardware integration much later.

## Decision

Choose Option B.

Adopt this sequence:

1. Documentation and decision hygiene baseline.
2. One working digit module with homing and indexed movement.
3. Multi-digit expansion only after single-digit reliability gates pass.
4. Swan webapp and shared update API integration.
5. Physical enhancement layer (audio, additional effects), then release hardening.

## Rationale

- Keeps risk concentrated where unknowns are highest (single-digit mechanics + control).
- Avoids scaling design flaws across multiple modules.
- Preserves momentum while still allowing software planning in parallel.

## Consequences

- Each stage needs explicit entry/exit criteria in docs and testing records.
- New features (remote control, audio, advanced power options) are tracked but not allowed to block single-digit commissioning.
- Roadmap and changelog must be updated when a stage gate is passed.
