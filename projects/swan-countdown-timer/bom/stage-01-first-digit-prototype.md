# Stage 01 BOM - First Digit Prototype

Goal: produce one reliable split-flap digit with homing, indexed motion, and repeatable flap switching.

Primary milestone alignment: this stage is executed as `first-digit-prototype-r0`.

## Scope

- Build only one digit module.
- Validate electronics and homing first.
- Validate mechanics second.
- Avoid buying deferred feature hardware until first-digit reliability is proven.

## Purchased items

| Item | ASIN | Qty purchased | Approx price | Implementation use |
|---|---|---:|---:|---|
| DEEPLEE PLA Plus White 1kg | B0DCHXCSZ7 | 1 | 10.99 GBP | White print tests and contrast parts |
| DEEPLEE Rapid PLA Plus Black 1kg | B0DKFJLXSD | 1 | 10.99 GBP | Main prototype print material |
| DEEPLEE PLA Plus Red 1kg | B0DCHVFRB2 | 1 | 15.99 GBP | Red print material for display graphics and accents |
| 2x1 mm N52 magnets (100) | B0FH1W4ZM4 | 1 pack | 5.49 GBP | Magnet-triggered indexing/homing tests |
| AH3144E hall sensors (20) | B0GRGPRV66 | 1 pack | 5.99 GBP | Home sensor and position-detect tests |
| 28BYJ-48 + ULN2003 kit | B09Z27VDHJ | 1 | 8.79 GBP | Stepper drive and indexing control |
| ESP32 DevKitC | B0CJHR8SMK | 1 | 5.99 GBP | Control firmware and state logic |
| 623ZZ bearings (pack) | B0DHRNQZWB | 1 pack | 6.99 GBP | Drum support and reduced friction |
| Dupont jumper wire kit | B01EV70C78 | 1 kit | 6.99 GBP | Breadboard interconnects |
| Hailege 3pcs 830-point breadboard pack | B07YJTFVB2 | 3 packs | 6.99 GBP each | Bench prototyping layout (9 boards total purchased) |
| TA-VIGOR 5pcs stainless steel rods (3 mm x 300 mm) | B0CD7SXD6W | 1 pack | 6.59 GBP | Shaft stock for wheel axle and fit/cut tests |
| Velainwom 5V 5A 25W switching PSU | B07PPPF1R5 | 1 | 10.99 GBP | Purchased inventory; defer until the PSU is enclosed, insulated, and strain-relieved. Use a safer USB charger/power-bank breakout for the first motor-only bench test. |
| M3 screw assortment kit | B0G3PNC4FM | 1 kit | 6.99 GBP | Frame and mechanism assembly |

Running total (purchased): 123.75 GBP

## Still needed for Stage 01

| Item | Qty | Approx price | Why needed now |
|---|---:|---:|---|
| 10k resistors (or resistor assortment including 10k) | 1 pack | ~3-8 GBP | Required Hall OUT pull-up to ESP32 3.3V |
| USB-C female to 2-pin screw-terminal breakout adapter | 1 | ~3-8 GBP | Safer removable 5V motor power breakout for first ULN2003 bench test |
| Super glue (gel) | 1 | ~3-6 GBP | Magnet retention and quick fixture fixes |
| Small side cutters and needle-nose pliers | 1 set | varies | Wiring trim, part handling, and assembly |

## Stage 01 validation milestones

1. ESP32 drives stepper reliably via ULN2003.
2. Hall sensor reliably detects home position.
3. Digit can home and index predictable steps repeatedly.
4. Drum rotates smoothly with bearings and shaft.
5. Initial flap subset flips reliably without jamming.

When all five milestones are met, move deferred items from Stage 02 into active planning.

## First-digit-prototype-r0 execution order

Run the stage in this order so each risk is isolated before adding complexity:

1. Motor-only bring-up (ESP32 + ULN2003 + 28BYJ-48).
2. Hall-only bring-up (AH3144E + magnet polarity verification).
3. Combined homing routine (repeatable zero detection).
4. Early mechanical proof parts (hub, Hall bracket, blank flaps, tolerance coupon, partial wheel).
5. 52-position indexing model and firmware API (`home`, single-step index, absolute move).
6. Representative pilot subset print (approximately 6-10 flap pairs, varied geometry).
7. Reliability run and serviceability checks.

## Validation gates for Stage 01 closeout

- Homing: same home location detected 20 consecutive cycles.
- Indexing: full traversal of 52 logical positions and return-to-home with no off-by-one event.
- Reliability: at least 500 commanded moves without jam.
- Motion quality: representative flaps settle under gravity and do not require manual assist.
- Serviceability: at least one flap, the wheel, and the motor can be removed without destructive teardown.

Record slicer profile, material, measured dimensions, and any failure mode observed in each test run.
