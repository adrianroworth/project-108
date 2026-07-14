# ESP32 USB Bring-Up Guide

This guide is the minimum path to prove ESP32 USB bring-up before starting `18-first-digit-prototype-r0.md`.

## Objective

By the end of this guide, you should have proved:

- The ESP32 receives power over USB.
- The USB cable and any USB hub or dock carry data.
- Windows recognizes the ESP32 USB bridge.
- The CP210x driver is installed and working.
- VS Code and PlatformIO can compile firmware.
- PlatformIO can upload firmware to the ESP32.
- The ESP32 sends expected text to the Serial Monitor at `115200` baud.

Do not connect motor/driver/sensor/breadboard/external 5V power during this stage.

## Quick Path (First Success)

1. Connect only `Laptop -> USB -> ESP32`.
2. Open Windows Device Manager and identify the board status:

| What you see | Meaning | Action |
|---|---|---|
| `Silicon Labs CP210x USB to UART Bridge (COMx)` in Ports | Driver and data path are OK | Note COM port and continue |
| `CP2102 USB to UART Bridge Controller` in Other devices | Data path OK, driver missing | Install Silicon Labs CP210x driver, reconnect board |
| No device change when plugging/unplugging | Board not detected over data path | Try another cable/port/hub path and retry |

3. Open/create PlatformIO project at `projects/swan-countdown-timer/firmware/first-digit-prototype-r0/` using `esp32dev` + Arduino.
4. Use this `platformio.ini` minimum config:

```ini
[env:esp32dev]
platform = espressif32
board = esp32dev
framework = arduino
monitor_speed = 115200
```

If you want explicit port selection (recommended when COM auto-detect is unreliable), set both ports directly:

```ini
[env:esp32dev]
platform = espressif32
board = esp32dev
framework = arduino
upload_port = COM5
monitor_port = COM5
monitor_speed = 115200
```

Replace `COM5` with the COM value shown in Device Manager.

5. Load this USB test sketch into `src/main.cpp`:

```cpp
#include <Arduino.h>

void setup()
{
  Serial.begin(115200);
  delay(1000);

  Serial.println();
  Serial.println("Project 108 ESP32 test started");
}

void loop()
{
  Serial.println("ESP32 is working");
  delay(1000);
}
```

6. Upload the firmware with PlatformIO.
  - In VS Code, click the PlatformIO Upload button, or run `PlatformIO: Upload` from the Command Palette.
  - Wait for the upload to finish successfully.
7. Open the PlatformIO Serial Monitor at `115200`.
  - Use the PlatformIO Serial Monitor button, or run `PlatformIO: Serial Monitor`.
  - Confirm the board prints the startup line once, then the heartbeat line once per second.

Expected serial output:

```text
Project 108 ESP32 test started
ESP32 is working
ESP32 is working
ESP32 is working
```

## Pass/Fail Checklist

- [ ] ESP32 power LED turns on from USB.
- [ ] CP2102 appears as a COM device in Windows.
- [ ] PlatformIO build succeeds.
- [ ] PlatformIO upload succeeds.
- [ ] `upload_port` and `monitor_port` are set correctly if explicit port mode is used.
- [ ] Serial Monitor at `115200` shows `Project 108 ESP32 test started` followed by repeating `ESP32 is working` lines.
- [ ] No external electronics or external power used.

## Safety Boundary

Only this connection is allowed:

```text
Laptop
  |
  | USB
  v
ESP32
```

Do not connect:

- 28BYJ-48 stepper motor
- ULN2003 motor-driver board
- AH3144E Hall-effect sensor
- Breadboard power rails
- External 5V power supply
- Loose jumper wires

## Troubleshooting

Use this section by symptom:

- `Please specify upload_port`: add `upload_port` and `monitor_port` in `platformio.ini` using your Device Manager COM value.
- Red LED on but no COM device: check `Other devices`, install CP210x driver, then retry with another known data-capable cable/USB port.
- Upload stuck at `Connecting...`: hold BOOT, start upload, release BOOT when writing starts.
- Blank serial monitor: confirm upload success, selected COM port, and `115200`; press EN/RESET once.
- Unreadable serial text: baud mismatch; set both firmware and monitor to `115200`.
- COM busy/access denied: close other tools using the same COM port.

## Evidence To Record

Create a run log and capture:

- Date
- Computer and Windows version
- Connection path (direct or hub)
- USB cable used
- ESP32 board
- Assigned COM port
- Build result
- Upload result
- Serial monitor output result
- Problems encountered
- Corrective action
- Final status

Reference test-run template:

- `19-first-digit-prototype-r0-test-log-template.md`

## Notes

- Hardware required: ESP32 dev board (CP2102), data-capable USB cable, Windows PC, optional hub/dock.
- Software required: VS Code, PlatformIO IDE extension (`platformio.platformio-ide`), Silicon Labs CP210x driver if needed.
- Red power LED confirms power only; it does not prove USB data.

## Stage Completion Statement

Use this statement when all checks pass:

> Stage 1 passed. The ESP32 is powered over USB, detected by Windows through the CP2102 USB-to-UART bridge, programmable through PlatformIO, and producing expected serial output at 115200 baud. No external electronics or power supplies were connected.

## Next Stage

Proceed to Stage A motor bring-up in `18-first-digit-prototype-r0.md`:

- Keep USB connected for ESP32 logic power.
- Add one ULN2003 board and one 28BYJ-48 motor only.
- Keep wiring controlled and test one subsystem at a time.
