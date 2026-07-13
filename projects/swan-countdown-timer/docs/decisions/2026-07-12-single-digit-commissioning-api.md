# Decision: Simplified Single-Digit Commissioning API

- Date: 2026-07-12
- Status: Approved
- Context: During first-digit bring-up, firmware and mechanics need a fast, repeatable control surface that is simpler than the eventual full display API.

## Options considered

- Option A: Jump directly to final multi-digit network API.
- Option B: Introduce a minimal commissioning API for one digit, then layer the production API on top.
- Option C: Use ad-hoc firmware code edits with no stable test interface.

## Decision

Choose Option B.

Define and document a small commissioning API focused on:

- Home to reference position.
- Relative rotation/step movement.
- Absolute move to wheel index.
- Query position/state and fault information.
- Emergency stop/reset behavior for test sessions.

## Rationale

- Speeds up firmware and mechanical debugging loops.
- Provides a stable operator interface for quick workshop tests.
- Reduces risk before scaling to multi-digit orchestration.

## Consequences

- Firmware docs must define command semantics and expected responses.
- Testing docs must include commissioning API validation scenarios.
- Production webapp/API work should reuse commissioning semantics where practical.
