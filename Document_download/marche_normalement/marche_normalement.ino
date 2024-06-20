#include <Servo.h>
#include <SoftwareSerial.h>

SoftwareSerial BluetoothSerial(11, 10);
Servo servoPG;
Servo servoPD;
Servo servoJG;
Servo servoJD;
int pjg = 100;
int pjd = 40;
int ppd = 110;
int ppg = 110;
int D8 = 8;
const int trigPin = 9;
const int echoPin = 7;
long duree;
int distance;
char var = -1;
//char var1 = 'stop';
//char var2 = 'stop';


void setup() {
  Serial.begin(9600);

  pinMode(D8, OUTPUT);
  pinMode(11, INPUT);
  pinMode(10, OUTPUT);

  BluetoothSerial.begin(9600);

  servoPD.attach(4);
  servoPG.attach(5);
  servoJG.attach(6);
  servoJD.attach(3);

  servoJG.write(pjg);
  servoJD.write(pjd);
  servoPD.write(ppd);
  servoPG.write(ppg);

  pinMode(trigPin, OUTPUT);  // Configuration du port du Trigger comme une SORTIE
  pinMode(echoPin, INPUT);
}


void bruitlong(int a, int b) {
  if (a < b) {
    for (int c = a; c < b; c++) {
      tone(D8, c);
      delay(5);
    }
    noTone(D8);
  } else {
    for (int c = a; c > b; c--) {
      tone(D8, c);
      delay(5);
    }
    noTone(D8);
  }
}
void marcheavant(int i) {
  int c = 0;
  while (c != 33) {
    servoPG.write(ppg + c);
    servoPD.write(ppd + c);
    c = c + 3;
    delay(i);
  }
  detection();

  c = 0;
  while (c != 44) {
    servoJG.write(pjg - c);
    servoJD.write(pjd - c);
    c = c + 4;
    delay(i);
  }
  detection();

  c = 30;
  while (c != -33) {
    servoPD.write(ppd + c);
    servoPG.write(ppg + c);
    c = c - 3;
    delay(i);
  }
  detection();

  c = -40;
  while (c != 40) {
    servoJG.write(pjg + c);
    servoJD.write(pjd + c);
    c = c + 4;
    delay(i);
  }
  detection();

  c = -30;
  while (c != 33) {
    servoPD.write(ppd + c);
    servoPG.write(ppg + c);
    c = c + 3;
    delay(i);
  }
  detection();


  c = 36;
  while (c != -4) {
    servoJG.write(pjg + c);
    servoJD.write(pjd + c);
    c = c - 4;
    delay(i);
  }
  detection();


  c = 30;
  while (c != -3) {
    servoPD.write(ppd + c);
    servoPG.write(ppg + c);
    c = c - 3;
    delay(i);
  }
  detection();
}
void marchearriere(int i) {
  int c = 0;
  while (c != 30) {
    servoPD.write(ppd + c);
    servoPG.write(ppg + c);
    c = c + 3;
    delay(i);
  }
  c = 0;
  while (c != 36) {
    servoJG.write(pjg + c);
    servoJD.write(pjd + c);
    c = c + 4;
    delay(i);
  }

  c = 33;
  while (c != -30) {
    servoPD.write(ppd + c);
    servoPG.write(ppg + c);
    c = c - 3;
    delay(i);
  }

  c = 40;
  while (c != -40) {
    servoJG.write(pjg + c);
    servoJD.write(pjd + c);
    c = c - 4;
    delay(i);
  }
  c = -33;
  while (c != 30) {
    servoPD.write(ppd + c);
    servoPG.write(ppg + c);
    c = c + 3;
    delay(i);
  }
  c = 44;
  while (c != 0) {
    servoJG.write(pjg - c);
    servoJD.write(pjd - c);
    c = c - 4;
    delay(i);
  }
  c = 33;
  while (c != 0) {
    servoPG.write(ppg + c);
    servoPD.write(ppd + c);
    c = c - 3;
    delay(i);
  }
}
void tourne(int i) {
  int c = 0;
  while (c != 33) {
    servoPG.write(ppg + c);
    servoPD.write(ppd + c);
    c = c + 3;
    delay(i);
  }
  detection();

  c = 0;
  while (c != 48) {
    servoJG.write(pjg - c);
    c = c + 4;
    delay(i);
  }
  detection();

  c = 30;
  while (c != -33) {
    servoPG.write(ppg + c);
    servoPD.write(ppd + c);
    c = c - 3;
    delay(i);
  }
  detection();

  c = -40;
  while (c != -8) {
    servoJG.write(pjg + c);
    c = c + 4;
    delay(i);
  }
  detection();

  c = -30;
  while (c != 3) {
    servoPG.write(ppg + c);
    servoPD.write(ppd + c);
    c = c + 3;
    delay(i);
  }
  detection();
}
void droite(int i) {
  int c = 0;
  while (c != 44) {
    servoPG.write(ppg + c);
    c = c + 4;
    delay(i);
  }
  c = 0;
  while (c != -44) {
    servoPD.write(ppd + c);
    c = c - 4;
    delay(i);
  }
  c = 44;
  while (c != 0) {
    servoPG.write(ppg + c);
    c = c - 4;
    delay(i);
  }
  c = -44;
  while (c != 0) {
    servoPD.write(ppd + c);
    c = c + 4;
    delay(i);
  }
}
void gauche(int i) {
  int c = 0;
  while (c != -40) {
    servoPD.write(ppd + c);
    c = c - 4;
    delay(i);
  }
  c = 0;
  while (c != 40) {
    servoPG.write(ppg + c);
    c = c + 4;
    delay(i);
  }

  c = -40;
  while (c != 0) {
    servoPD.write(ppd + c);
    c = c + 4;
    delay(i);
  }
  c = 40;
  while (c != 0) {
    servoPG.write(ppg + c);
    c = c - 4;
    delay(i);
  }
}
void coupdepiedgauche(int i) {
  int c = 0;
  while (c != 32) {
    servoPG.write(ppg + c);
    servoPD.write(ppd + c);
    servoJG.write(pjg - c);
    servoJD.write(pjd - c);
    c = c + 4;
    delay(i);
  }
  c = 32;
  while (c != -4) {
    servoPG.write(ppg + c);
    servoPD.write(ppd + c);
    servoJG.write(pjg - c);
    servoJD.write(pjd - c);
    c = c - 4;
    delay(i);
  }
}
void coupdepieddroite(int i) {
  int c = 0;
  while (c != 32) {
    servoPG.write(ppg - c);
    servoPD.write(ppd - c);
    servoJG.write(pjg + c);
    servoJD.write(pjd + c);
    c = c + 4;
    delay(i);
  }
  c = 32;
  while (c != -4) {
    servoPG.write(ppg - c);
    servoPD.write(ppd - c);
    servoJG.write(pjg + c);
    servoJD.write(pjd + c);
    c = c - 4;
    delay(i);
  }
}

void equilibre(int i) {
  int c = 0;
  servoJG.write(pjg);
  servoJD.write(pjd);
  while (c != 60) {
    servoPD.write(ppd +- c);
    c = c + 3;
    delay(i);
  }
  delay(50);
  c=0;
  while (c != 57) {
    servoPG.write(ppg +- c);
    c = c + 3;
    delay(i);
  }
  // int c = 0;
  // while (c != 33) {
  //   servoPG.write(ppg + c);
  //   servoPD.write(ppd + c);
  //   c = c + 3;
  //   delay(i);
  // }

  // c = 0;
  // while (c != 44) {
  //   servoJG.write(pjg - c);
  //   servoJD.write(pjd - c);
  //   c = c + 4;
  //   delay(i);
  // }

  
}

bool first=true;
void enY(int i) {
  int c = 0;
  servoJG.write(pjg);
  servoJD.write(pjd);
  if(first){
    while (c != 33) {
      servoPG.write(ppg + c);
      servoPD.write(ppd - c);
      c = c + 3;
      delay(i);
    }
  }
}

void detection() {
  // digitalWrite(trigPin, LOW);
  // delayMicroseconds(5);
  // digitalWrite(trigPin, HIGH);
  // delayMicroseconds(10);
  // digitalWrite(trigPin, LOW);
  // duree = pulseIn(echoPin, HIGH);
  // distance = duree * 0.034 / 2;
  // while (distance < 20) {
  //   servoJG.write(pjg);
  //   servoJD.write(pjd);
  //   servoPD.write(ppd);
  //   servoPG.write(ppg);
  //   digitalWrite(trigPin, LOW);
  //   delayMicroseconds(5);
  //   digitalWrite(trigPin, HIGH);
  //   delayMicroseconds(10);
  //   digitalWrite(trigPin, LOW);
  //   duree = pulseIn(echoPin, HIGH);
  //   distance = duree * 0.034 / 2;
  // }
  // while (distance < 10) {
  //   servoJG.write(pjg);
  //   servoJD.write(pjd);
  //   servoPD.write(ppd);
  //   servoPG.write(ppg);
  //   delay(500);
  //   for(int i=0; i<7; i++){
  //     droite(10);
  //   }
  //     digitalWrite(trigPin, LOW);
  // delayMicroseconds(5);
  // digitalWrite(trigPin, HIGH);
  // delayMicroseconds(10);
  // digitalWrite(trigPin, LOW);
  // duree = pulseIn(echoPin, HIGH);
  // distance = duree * 0.034 / 2;
  // }
}

void madison() {
  for (int id = 0; id < 4; id++) {
    droite(10);
    detection();
  }
  coupdepieddroite(25);
  detection();
  for (int ig = 0; ig < 4; ig++) {
    gauche(10);
    detection();
  }
  coupdepiedgauche(25);
  detection();
  marchearriere(14);
  detection();
  for (int i = 0; i < 6; i++) {
    tourne(5);
    detection();
  }
}

void loop() {
  if (BluetoothSerial.available()) {
    char ret = -1;
    while (1) {
      ret = var;
      var = BluetoothSerial.read();
      if (var == -1) {
        var = ret;
      }
      if (var == 'm') {
        madison();
      }
      if (var == 's') {
        servoJG.write(pjg);
        servoJD.write(pjd);
        servoPD.write(ppd);
        servoPG.write(ppg);
      }
      if (var == 'a') {
        marcheavant(10);
      }
      if (var == 't') {
        tourne(8);
      }
      if (var == 'd') {
        droite(9);
      }
      if (var == 'g') {
        gauche(9);
      }
      if (var == 'y') {
        if(first){
          equilibre(10);
        }
        first=false;
      }
      else{
        first=true;
      }
    }
  }
}
