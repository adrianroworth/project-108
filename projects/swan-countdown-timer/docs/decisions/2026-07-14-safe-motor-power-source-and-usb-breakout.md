# Decision: Safe first motor-test power source and USB breakout adapter

- **Date:** 2026-07-14
- **Status:** Approved
- **Context:** The first motor-only bring-up needs a safe bench power path for the ULN2003 + 28BYJ-48 while the ESP32 remains USB-powered. The open-frame 5V PSU should not be left loose on the desk during the first test.
- **Options considered:**
  - Use the existing open-frame 5V 5A PSU loose on the desk.
  - Use an enclosed 5V USB charger or power bank with a USB-to-screw-terminal breakout adapter.
  - Delay motor testing until a permanent enclosed DC supply is built.
- **Decision:** Use an enclosed 5V USB charger or power bank feeding a USB-to-screw-terminal breakout adapter for the first motor-only test; keep the open-frame PSU deferred until it is enclosed, insulated, and strain-relieved.
- **Rationale:**
  - Keeps mains wiring out of the bench area for the first test.
  - Matches the safety requirement that ESP32 USB and external motor power remain separate.
  - Gives a simple, removable 5V source for the ULN2003 board and 28BYJ-48 motor.
- **Consequences:**
  - Order the USB breakout adapter before the first motor test.
  - Keep the raw open-frame PSU off the desk until it is enclosed and its mains terminals are protected.
  - Document the chosen charger/power bank and breakout adapter in the next physical test log.