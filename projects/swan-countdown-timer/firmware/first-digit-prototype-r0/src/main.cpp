#include <Arduino.h>

static const uint8_t kStepperPins[4] = {16, 17, 18, 19};
static const uint16_t kFiniteMoveHalfSteps = 128;
static const uint32_t kHalfStepIntervalUsDefault = 2000;

// 28BYJ-48 half-step sequence in canonical IN1..IN4 order.
static const uint8_t kHalfStepSequence[8][4] = {
    {1, 0, 0, 0},
    {1, 1, 0, 0},
    {0, 1, 0, 0},
    {0, 1, 1, 0},
    {0, 0, 1, 0},
    {0, 0, 1, 1},
    {0, 0, 0, 1},
    {1, 0, 0, 1},
};

enum MotionMode
{
    kIdle,
    kFinite,
    kContinuous
};

MotionMode motionMode = kIdle;
int8_t motionDirection = 1;
uint16_t finiteStepsRemaining = 0;
uint8_t phaseIndex = 0;
uint32_t halfStepIntervalUs = kHalfStepIntervalUsDefault;
uint32_t nextStepDueUs = 0;

void releaseAllCoils()
{
    for (uint8_t i = 0; i < 4; ++i)
    {
        digitalWrite(kStepperPins[i], LOW);
    }
}

void applyPhase(uint8_t index)
{
    for (uint8_t i = 0; i < 4; ++i)
    {
        digitalWrite(kStepperPins[i], kHalfStepSequence[index][i] ? HIGH : LOW);
    }
}

void stepMotor(int8_t direction)
{
    if (direction > 0)
    {
        phaseIndex = static_cast<uint8_t>((phaseIndex + 1U) % 8U);
    }
    else
    {
        phaseIndex = static_cast<uint8_t>((phaseIndex + 7U) % 8U);
    }

    applyPhase(phaseIndex);
}

void printHelp()
{
    Serial.println();
    Serial.println("Commands:");
    Serial.println("  f - move forward 128 half-steps");
    Serial.println("  r - move backward 128 half-steps");
    Serial.println("  c - continuously move forward");
    Serial.println("  v - continuously move backward");
    Serial.println("  x - stop immediately and release all coils");
    Serial.println("  ? - print help and current configuration");
    Serial.println();
    Serial.println("Configuration:");
    Serial.printf("  GPIO mapping: %u,%u,%u,%u -> IN1,IN2,IN3,IN4\n",
                  kStepperPins[0], kStepperPins[1], kStepperPins[2], kStepperPins[3]);
    Serial.printf("  Half-step interval: %lu us\n", static_cast<unsigned long>(halfStepIntervalUs));
    Serial.printf("  Sequence length: %u half-steps\n", 8U);
}

void startFiniteMove(int8_t direction)
{
    motionMode = kFinite;
    motionDirection = direction > 0 ? 1 : -1;
    finiteStepsRemaining = kFiniteMoveHalfSteps;
    nextStepDueUs = micros();

    Serial.printf("Start finite move: %s %u half-steps\n",
                  motionDirection > 0 ? "forward" : "reverse",
                  static_cast<unsigned int>(kFiniteMoveHalfSteps));
}

void startContinuousMove(int8_t direction)
{
    motionMode = kContinuous;
    motionDirection = direction > 0 ? 1 : -1;
    nextStepDueUs = micros();

    Serial.printf("Start continuous move: %s\n", motionDirection > 0 ? "forward" : "reverse");
}

void stopMotionNow()
{
    motionMode = kIdle;
    finiteStepsRemaining = 0;
    releaseAllCoils();
    Serial.println("Motion stopped. Coils released.");
}

void handleCommand(char command)
{
    switch (command)
    {
    case 'f':
        startFiniteMove(1);
        break;
    case 'r':
        startFiniteMove(-1);
        break;
    case 'c':
        startContinuousMove(1);
        break;
    case 'v':
        startContinuousMove(-1);
        break;
    case 'x':
        stopMotionNow();
        break;
    case '?':
        printHelp();
        break;
    default:
        Serial.printf("Unknown command '%c'. Enter '?' for help.\n", command);
        break;
    }
}

void serviceSerial()
{
    while (Serial.available() > 0)
    {
        const char c = static_cast<char>(Serial.read());

        if (c == '\r' || c == '\n' || c == ' ')
        {
            continue;
        }

        handleCommand(c);
    }
}

void serviceMotion()
{
    if (motionMode == kIdle)
    {
        return;
    }

    const uint32_t nowUs = micros();
    if (static_cast<int32_t>(nowUs - nextStepDueUs) < 0)
    {
        return;
    }

    stepMotor(motionDirection);
    nextStepDueUs = nowUs + halfStepIntervalUs;

    if (motionMode == kFinite)
    {
        if (finiteStepsRemaining > 0)
        {
            --finiteStepsRemaining;
        }

        if (finiteStepsRemaining == 0)
        {
            motionMode = kIdle;
            releaseAllCoils();
            Serial.println("Finite move complete. Coils released.");
        }
    }
}

void setup()
{
    for (uint8_t i = 0; i < 4; ++i)
    {
        pinMode(kStepperPins[i], OUTPUT);
    }
    releaseAllCoils();

    Serial.begin(115200);
    delay(500);

    Serial.println();
    Serial.println("Project 108 motor-only bring-up started");
    Serial.println("WARNING: Keep ESP32 USB-powered only.");
    Serial.println("WARNING: Use separate regulated 5V supply for ULN2003 + 28BYJ-48 motor.");
    Serial.println("WARNING: ESP32 GND and ULN2003/supply GND must be connected.");
    printHelp();
}

void loop()
{
    serviceSerial();
    serviceMotion();
}