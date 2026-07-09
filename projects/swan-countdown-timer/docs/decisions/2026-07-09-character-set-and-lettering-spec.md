# Decision: Character Set and Lettering Specification for Flaps

- Date: 2026-07-09
- Status: Proposed
- Context: The project needs a stable way to define flap symbols and typography during first-digit prototyping and later expansion.

## Options considered

- Option A: Keep symbol and lettering details informal in chat only.
- Option B: Document symbol IDs only and leave typography unspecified.
- Option C: Define staged symbol sets plus a dedicated lettering specification document.

## Decision

Choose Option C.

## Rationale

- Keeps character sets stable across CAD, artwork, and firmware.
- Reduces rework when moving from prototype flaps to larger production batches.
- Makes future contributor onboarding much easier.

## Consequences

- Maintain `docs/03-symbol-inventory.md` as the symbol source of truth.
- Maintain `docs/13-lettering-and-flap-graphics.md` as the typography and flap graphics source of truth.
- Log future changes to font-family or active symbol set as new decision records.
