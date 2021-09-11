---
id: 1093
title: 'Nutzlose Programme mit dem Arduino 1 - RGB LED + Photowiederstand'
date: 2009-09-02T21:44:29+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=1093
permalink: /blog/nutzlose-programme-mit-dem-arduino-1-rgb-led-photowiederstand/
thumbnail:
  - http://tinkr.de/wp-content/uploads/2009/09/arduino_rgb_preview.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:1109;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Basteln
tags:
  - Arduino
  - Bausteln
  - Physical Computing
---
Heute ist er endlich angekommen - mein Arduino Duemilanove. Bevor ich nun lange zu erklären versuch, was so ein Arduino ist, lasse ich einfach mal Wikipedia zu Wort kommen:

> Die Arduino-Plattform ist eine aus Soft- und Hardware bestehende Physical Computing-Plattform. Beide Komponenten sind im Sinne von Open Source quelloffen. Die Hardware besteht aus einem einfachen I/O-Board mit einem Mikrocontroller und analogen und digitalen Ein- und Ausgängen. Die Entwicklungsumgebung beruht auf Processing und Wiring, (Java-Dialekten), die insbesondere Künstlern, Designern, Hobbyisten und anderen Interessierten den Zugang zur Programmierung und zu Mikrocontrollern erleichtern soll.

Hatte ich schon vor einigen Monaten einige zaghafte Versuche mit dem LED-Flitzer, einer Eigenentwicklung von Zipfelmaus unternommen, war mir damals die Lernkurve doch deutlich zu steil.

Der Arduino ist anders. Endlich habe ich mal etwas kleines, mit einem Mikrocontroller zustande bekommen und bin stolz wie Oscar. Dabei ist es ein Riesenvorteil, dass der Arduino einfach in den Mac gestöpselt wird, man die Software installiert und loslegt. Ohne Krämpfe 🙂

Letzte Woche habe ich mir das Buch &#8222;Arduino - Physical Computing für Bastler, Designer & Geeks&#8220; gekauft und mir auch direkt bei [bausteln.de](http://bausteln.de) ein [Arduino Einsteigerset](http://bausteln.de/shop/arduino/arduino-einsteigerset.html) besorgt. Zwar gäbe es den Arduino an sich billiger, aber das Set bietet ein paar Bauteile mit denen man im Grunde direkt loslegen kann. Das Set ist sehr liebevoll zusammengestellt und ich habe eine Menge Ideen, was ich daraus basteln werde um mich Fit zu machen für ein größeres Projekt.

Ich bin begeistert vom didaktischen Ansatz des Buches, vom Set aber auch vom Arduino selbst. Heute Abend hat es jedenfalls einen Riesenspaß gemacht und ein Erfolgserlebnis hat das nächste gejagt.

Zum Ende hin habe ich etwas nutzloses (ok vielleicht auch nicht) gebaut, das ich mit euch Teilen möchte - und wenn auch nur, damit der Werte Leser einen Eindruck von der sehr einfachen (aus meiner Warte als PHP-Programmierer) Programmiersprache bekommt.

Ich stelle vor: die welterste (ok ist sicher gelogen, aber zumindest meine erste) lichtsensitive RGB-LED.

<img loading="lazy" src="/assets/2009/09/arduino_rgb.jpg" alt="arduino_rgb" title="arduino_rgb" width="606" height="455" class="alignnone size-full wp-image-1105" srcset="/assets/2009/09/arduino_rgb.jpg 606w, /assets/2009/09/arduino_rgb-300x225.jpg 300w" sizes="(max-width: 606px) 100vw, 606px" />

[cpp]
/**
* Kleines Programm zum steuern der Farbe einer RGB-LED mittels Lichtsensor
* @see Angelehnt an Arduino / Physical Computing für Bastler, Designer & Geeks
*
* Arduino Duemilanove
*
* Aufbau RGB-LED
* - Blau 1 an Port 3
* - Blau 2 an Port 6
* - Gruen an Port 9
* - Rot an Port 5
* - Lichtsensor an analogem Port 5
*/

#define BLUE 1
#define GREEN 2
#define RED 3

int portLedBlau1 = 3;
int portLedBlau2 = 6;
int portLedGruen = 9;
int portLedRot = 5;

int portLichtSensor = 5;

int logarithmus[64] = {0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,16,18,20,22,25,28,30,33,36,
39,42,46,53,56,60,64,68,72,77,81,86,90,95,100,105,110,116,121,
127,132,138,144,150,156,163,169,176,182,189,196,203,210,218,225,
233,240,248,255};

void setup()
{
pinMode(portLedBlau1, OUTPUT);
pinMode(portLedBlau2, OUTPUT);
pinMode(portLedGruen, OUTPUT);
pinMode(portLedRot, OUTPUT);
}

/**
* Liest den Lichtsensot aus und setzt je nach Wert eine Farbe
*/
void loop()
{
int licht = analogRead(portLichtSensor) / 4;
setColorByValue(licht);
}

/**
* Sucht für einen Wert zwischen 1 und 255 eine Farbe aus dem Farbkreis
* @param integer value (0-255)
*/
void setColorByValue(int value)
{
int blue;
int green;
int red;

if(value < 64) // Rot zu Gruen
{
red = 63 - value;
green = value;
blue = 0;
}
else if(value < 128) // Gruen nach Blau
{
red = 0;
green = 127 - value;
blue = value - 64;
}
else if(value < 192) // Blau nach Rot
{
red = value - 128;
green = 0;
blue = 191 - value;
}
else // Rot nach Weiß
{
red = 63;
green = 255 - value;
blue = 255 - value;
}

setColor(logarithmus[red], logarithmus[green], logarithmus[blue]);
}

/**
* Stellt die LED auf eine Farbe um
* @param integer blue (0-255)
* @param integer green(0-255)
* @param integer blue(0-255)
*/
void setColor(int red, int green, int blue)
{
setLed(BLUE, blue);
setLed(GREEN, green);
setLed(RED, red);
}

/**
* Setzt die LEDs einer Farbe (bzw. 2 für Blau)
* @param integer (1-3) BLUE = 1, GREEN = 2, RED = 3
*/
void setLed(int color, int intensity)
{
switch(color)
{
case BLUE:
analogWrite(portLedBlau1, intensity);
analogWrite(portLedBlau2, intensity);
break;
case GREEN:
analogWrite(portLedGruen, intensity);
break;
case RED:
analogWrite(portLedRot, intensity);
break;
}
}
[/cpp]
