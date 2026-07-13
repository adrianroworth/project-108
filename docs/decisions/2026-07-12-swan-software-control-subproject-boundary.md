# Decision: Swan Software Control Stack as a Separate Subproject

- Date: 2026-07-12
- Status: Approved
- Context: The Swan webapp and API are logically separate from the physical timer build. They evolve at a different pace, have different tooling/runtime concerns, and interface with hardware through a defined contract.

## Options considered

- Option A: Keep webapp and API inside `projects/swan-countdown-timer/`.
- Option B: Create a dedicated software subproject under `projects/` that integrates with the physical timer via a shared API contract.
- Option C: Keep software outside this repository.

## Decision

Choose Option B.

- The physical module build remains in `projects/swan-countdown-timer/`.
- The software control stack (webapp + API) should be created as a dedicated sibling project under `projects/` when implementation begins.
- Integration between the two is managed through a documented API and test contract.

## Rationale

- Maintains clear ownership boundaries and cleaner repository structure.
- Allows independent release cadence for hardware and software components.
- Reduces coupling and makes interface regressions easier to detect.

## Consequences

- Document a cross-project API contract and compatibility notes.
- Add integration tests that validate hardware-software command semantics.
- Keep shared domain terms in umbrella docs to avoid drift across subprojects.
