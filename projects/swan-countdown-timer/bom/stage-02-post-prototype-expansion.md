# Stage 02 BOM - Post-Prototype Expansion

Trigger for this stage: Stage 01 first-digit prototype is mechanically and electronically reliable.

This stage contains items explicitly deferred during initial prototyping.

## Deferred until after first digit works

| Item | Purchase status | Planned role in implementation | Why deferred |
|---|---|---|---|
| Speaker | Not purchased | Provide audible feedback during countdown/alarm behavior | Not required to validate core mechanism |
| Audio amplifier | Not purchased | Drive speaker output from controller cleanly and loudly | Adds complexity before core system is stable |
| LEDs | Not purchased | Add status indicators (power, homed, fault, mode) | Nice-to-have during early prototype stage |
| RTC module | Not purchased | Provide accurate standalone timekeeping and persistence | Timing precision is secondary to mechanism validation |
| Soldering iron | Not purchased | Build durable wiring once prototype circuitry is finalized | Breadboard iteration should happen first |
| Perfboard / PCB | Not purchased | Transition from temporary breadboard wiring to permanent electronics | Premature before architecture and pinout freeze |

## Implementation intent from planning notes

- Stage 01 proves the core loop: home, index, and display position control.
- Stage 02 adds usability and productization layers: audio cues, visual cues, and stable time base.
- Permanent soldered hardware should begin only after firmware pin mapping and module interfaces settle.

## Exit criteria for Stage 02

1. Audio subsystem integrated and tested.
2. RTC-backed timing behavior verified over power cycles.
3. Indicator LEDs mapped to operating states.
4. First stable non-breadboard electronics build completed.
