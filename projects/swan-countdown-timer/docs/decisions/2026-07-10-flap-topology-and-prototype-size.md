# Decision: Flap Topology and Prototype-r0 Panel Size

- Date: 2026-07-10
- Status: Proposed
- Context: The project needs a fixed mechanical topology and initial panel dimensions to begin generating split-flap artwork and printable panel sets without blocking on final enclosure scale.

## Options considered

- Option A: Keep topology undefined until later CAD stages.
- Option B: Use single full-height cards per character.
- Option C: Use conventional split upper/lower panels with a replaceable prototype-r0 size profile.

## Decision

Choose Option C.

- Mechanical topology: split-pair (upper panel + lower panel per visible character).
- Wheel model: 52 positions per digit, populated by 26 unique symbols repeated twice.
- Prototype-r0 panel dimensions: 54 mm width x 43 mm half-height x 1.0 mm thickness.
- Master parameters are stored in `projects/swan-countdown-timer/artwork/flap-layouts/flap-spec.yaml`.

## Rationale

- Matches established split-flap mechanism behavior and terminology.
- Unblocks artwork generation now while keeping dimensions replaceable in one spec file.
- Reduces ambiguity between position count and printable panel count.

## Consequences

- Use position/character/panel terminology consistently in docs.
- Generate upper/lower panel outputs from normalized character artwork.
- Treat prototype-r0 values as defaults for testing, not final locked dimensions.
- Log any future topology or profile changes as new decision records.
