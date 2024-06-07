#include <Servo.h>                      // library for Servomotor

#define Pin_servoPG 5                   // declaration of global variables for pin
#define Pin_servoPD 4
#define Pin_servoJG 6
#define Pin_servoJD 3

Servo servoPG;                          // declaration of 4 servomotor object
Servo servoPD;
Servo servoJG;
Servo servoJD;

int pjg = 100;                          // declaration of global variables for position of balance of each motor
int pjd = 40;
int ppd = 110;
int ppg = 110;


void setup() {
  Serial.begin(9600);                   // for communicate with the serial monitor well

  servoPD.attach(Pin_servoPD);          // attached each pin to the corrected motor
  servoPG.attach(Pin_servoPG);
  servoJG.attach(Pin_servoJG);
  servoJD.attach(Pin_servoJD);

  servoJG.write(pjg);                   // otto stands up every time he starts up, waits half a second
  servoJD.write(pjd);
  servoPD.write(ppd);
  servoPG.write(ppg);
  delay(500);                           //waits half a second (500ms)
}

void walk(int i) {
  int c = 0;
  while (c != 33) {                     // first foot move
    servoPG.write(ppg + c);
    servoPD.write(ppd + c);
    c = c + 3;
    delay(i);
  }

  c = 0;
  while (c != 44) {
    servoJG.write(pjg - c);
    servoJD.write(pjd - c);
    c = c + 4;
    delay(i);
  }

  c = 30;
  while (c != -33) {
    servoPD.write(ppd + c);
    servoPG.write(ppg + c);
    c = c - 3;
    delay(i);
  }

  c = -40;
  while (c != 40) {
    servoJG.write(pjg + c);
    servoJD.write(pjd + c);
    c = c + 4;
    delay(i);
  }

  c = -30;
  while (c != 33) {
    servoPD.write(ppd + c);
    servoPG.write(ppg + c);
    c = c + 3;
    delay(i);
  }

  c = 36;
  while (c != -4) {
    servoJG.write(pjg + c);
    servoJD.write(pjd + c);
    c = c - 4;
    delay(i);
  }

  c = 30;
  while (c != -3) {
    servoPD.write(ppd + c);
    servoPG.write(ppg + c);
    c = c - 3;
    delay(i);
  }
}


void loop(){
  walk(10);                             // walk in a loop
}
