Tools and utilities supporting the Swan Countdown Timer build.

## Artwork tooling

- `artwork/build-svg-assets.mjs`: generate normalized character assets, split flap halves, and color variants from source-of-truth master symbols and flap spec.
- `artwork/qa-svg-assets.mjs`: validate register metadata, source/master presence, and optionally full generated output coverage.

Run from `projects/swan-countdown-timer`:

```powershell
node tools/artwork/build-svg-assets.mjs
node tools/artwork/qa-svg-assets.mjs --strict-generated
```

Tooling usage details are documented in `tools/artwork/README.md`.
