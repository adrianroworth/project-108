# Decision: Finished build external 5V adapter selection and power boundary

- **Date:** 2026-07-14
- **Status:** Approved
- **Context:** The finished Swan timer should avoid bringing exposed mains wiring into the custom enclosure while still providing enough current headroom for five digit modules, control, and deferred peripherals.
- **Options considered:**
  - Continue with an open-frame PSU as the finished-build supply.
  - Use a lower-current enclosed 5V adapter (for example 5V 3A).
  - Use an enclosed 5V high-current desktop adapter and keep mains external.
- **Decision:** Use an enclosed external 5V desktop adapter as the finished-build design baseline, with current purchased selection Baiyouli 5V 10A 50W (ASIN B0GBVHZVKD).
- **Rationale:**
  - Keeps 230V mains outside the timer enclosure and shifts the build interior to low-voltage wiring only.
  - Provides current headroom for multi-digit motion peaks, controller load, and later audio/lighting additions.
  - Matches a safer and more serviceable architecture for a hobby enclosure.
- **Consequences:**
  - Route incoming 5V through a low-voltage fuse before internal distribution.
  - Verify connector, breakout, and wiring current ratings for the expected load path.
  - Keep the open-frame Velainwom PSU as deferred inventory and not the default finished-product supply.
