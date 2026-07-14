# Swan Countdown Timer Master BOM

This is the master list for all parts in the Swan Countdown Timer project.

Status values:
- Planned
- Purchased
- Tested
- Replaced

## Master part ledger

| Category | Item | Source / reference | ASIN | Stage | Qty target | Qty purchased | Status | Approx unit price | Notes |
|---|---|---|---|---|---:|---:|---|---:|---|
| Printing | DEEPLEE PLA Plus 1.75mm White 1kg | Amazon UK | B0DCHXCSZ7 | Stage 01 | 1 | 1 | Purchased | 10.99 GBP | White parts and test prints |
| Printing | DEEPLEE Rapid PLA Plus 1.75mm Black 1kg | Amazon UK | B0DKFJLXSD | Stage 01 | 1 | 1 | Purchased | 10.99 GBP | Primary black prototype prints |
| Printing | DEEPLEE PLA Plus 1.75mm Red 1kg | Amazon UK | B0DCHVFRB2 | Stage 01 | 1 | 1 | Purchased | 15.99 GBP | Red flap graphics and accent prints |
| Mechanical | 2x1 mm N52 neodymium magnets (100 pack) | Amazon UK | B0FH1W4ZM4 | Stage 01 | 1 pack | 1 pack | Purchased | 5.49 GBP | Indexing and magnetic detection |
| Sensing | AH3144E hall sensors (20 pack) | Amazon UK | B0GRGPRV66 | Stage 01 | 1 pack | 1 pack | Purchased | 5.99 GBP | Home/index sensor experiments |
| Motion | 28BYJ-48 + ULN2003 stepper kit | Amazon UK | B09Z27VDHJ | Stage 01 | 1 | 1 | Purchased | 8.79 GBP | First-digit motion prototype |
| Control | ESP32 DevKitC board | Amazon UK | B0CJHR8SMK | Stage 01 | 1 | 1 | Purchased | 5.99 GBP | Firmware and control logic |
| Mechanical | 623ZZ bearings (30 pack) | Amazon UK | B0DHRNQZWB | Stage 01 | 2 | 30 | Purchased | 6.99 GBP per pack | Use 2, keep spares |
| Wiring | Dupont jumper wire kit (120 pcs) | Amazon UK | B01EV70C78 | Stage 01 | 1 kit | 1 kit | Purchased | 6.99 GBP | Breadboard wiring |
| Electronics | 10k resistors (or resistor assortment including 10k) | TBD | TBD | Stage 01 | 1 pack | 0 | Planned | ~3-8 GBP | Hall OUT pull-up to ESP32 3.3V |
| Power / Wiring | USB-C female to 2-pin screw-terminal breakout adapter | TBD | TBD | Stage 01 | 1 | 0 | Planned | ~3-8 GBP | Safer removable 5V motor power breakout for first ULN2003 bench test |
| Fasteners | M3 screw/nut/washer assortment | Amazon UK | B0G3PNC4FM | Stage 01 | 1 kit | 1 kit | Purchased | 6.99 GBP | General assembly |
| Prototyping | Hailege 3pcs 830-point solderless breadboard pack | Amazon UK | B07YJTFVB2 | Stage 01 | 1 pack | 3 packs | Purchased | 6.99 GBP per pack | 9 boards total purchased; exceeds minimum Stage 01 requirement |
| Power | Velainwom 5V 5A 25W switching PSU | Amazon UK | B07PPPF1R5 | Stage 01 | 1 | 1 | Purchased | 10.99 GBP | Purchased inventory; deferred for the first motor-only bench test until enclosed, insulated, and strain-relieved |
| Power | Baiyouli 5V 10A 50W enclosed desktop adapter | Amazon UK | B0GBVHZVKD | Stage 02 | 1 | 1 | Purchased | 15.99 GBP | Intended finished-build external PSU; keeps mains outside timer enclosure |
| Mechanical | TA-VIGOR 5pcs stainless steel rods (3 mm x 300 mm) | Amazon UK | B0CD7SXD6W | Stage 01 | 1 pack | 1 pack | Purchased | 6.59 GBP | Better than printed axle; cut/deburr to final shaft length |
| Consumables | Super glue (gel preferred) | TBD | TBD | Stage 01 | 1 | 0 | Planned | ~3-6 GBP | Magnet and fixture work |
| Tools | Side cutters + needle-nose pliers | TBD | TBD | Stage 01 | 1 set | 0 | Planned | varies | Assembly convenience |
| UX/Audio | Speaker | TBD | TBD | Stage 02 | 1 | 0 | Planned | TBD | Add sound feedback after core reliability |
| UX/Audio | Audio amplifier | TBD | TBD | Stage 02 | 1 | 0 | Planned | TBD | Required to drive external speaker properly |
| UX/Visual | LEDs | TBD | TBD | Stage 02 | 1 set | 0 | Planned | TBD | Status indication and visual diagnostics |
| Timekeeping | RTC module | TBD | TBD | Stage 02 | 1 | 0 | Planned | TBD | Stable time base for standalone operation |
| Fabrication | Soldering iron | TBD | TBD | Stage 02 | 1 | 0 | Planned | TBD | For transitioning off breadboard |
| Electronics | Perfboard or PCB | TBD | TBD | Stage 02 | 1 | 0 | Planned | TBD | Permanent electronics once prototype is stable |

## Notes

- Prices are approximate and should be updated when purchases are confirmed.
- Stage assignment is design-intent based and can change if implementation changes.
- Keep this file as the source of truth; stage files are focused working views.
- Running total (purchased items): 139.74 GBP.