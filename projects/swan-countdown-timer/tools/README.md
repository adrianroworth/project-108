# Tools

Utilities supporting the Swan Countdown Timer build.

## Artwork pipeline

- `artwork/build-svg-assets.mjs`: generates full-character, split-panel, color-variant SVGs and wheel manifest from `artwork/flap-layouts/flap-spec.yaml`.
- `artwork/qa-svg-assets.mjs`: validates spec consistency and master SVG quality constraints.

Run from `projects/swan-countdown-timer/`:

```bash
node tools/artwork/generate-masters-from-registers.mjs
node tools/artwork/build-svg-assets.mjs
node tools/artwork/qa-svg-assets.mjs
```

Pilot subset run:

```bash
node tools/artwork/build-svg-assets.mjs --symbols=N0,N1,N8,H11,H15
node tools/artwork/qa-svg-assets.mjs --symbols=N0,N1,N8,H11,H15
```
