---
id: 3025
title: USB powered high power LED lamp
date: 2012-09-22T16:19:34+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=3025
permalink: /blog/usb-powered-high-power-led-lamp/
thumbnail:
  - http://tinkr.de/wp-content/uploads/2012/09/led_usb_lamp_sml.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:3053;s:11:"_thumb_type";s:10:"attachment";}'
layout_key:
  - ""
post_slider_check_key:
  - "0"
categories:
  - Allgemeines
  - Gebasteltes
  - Schaltungen/ICs
  - Technik
tags:
  - 3d printed parts
  - Arduino
  - Arduino Nano
  - high power led
  - LED
  - pwm
  - USB powered
---
### General

Here is a prototype of my new USB powered high power LED lamp. This design is based on an Arduino Nano and one 1W Olson LED from Osram (LCW_CQ7P.EC). Next to that it has some cool features:
-a 3D printed case
-laser-cutted front glas
-touch sensor

I designed a new nano shield for the Arduino with a touch sensor and a led driver (NUD4001). The brightness of the LED can be adjusted by touching the touch sensor, the Arduino changes then the LED drivers PWM signal.

The yellow ABS case was printed with a printrbot.

<img loading="lazy" src="/assets/2012/09/led_usb_parts.jpg" alt="" title="led lamps parts" width="606" height="463" class="alignnone size-full wp-image-3032" />

### Demonstration



By touching the touch pad the folling states are activated:
(compare software code below)

==>[transistion: touch pad activated]
state 1:
LED on (fading down)

==>[transistion: touch pad activated]
state 2:
LED on (fading stop)

==>[transistion: touch pad activated]
state 3:
LED on (fading up)

==>[transistion: touch pad activated]
state 4:
LED on (fading stop)

### Block diagramm

<img loading="lazy" src="/assets/2012/09/led_usb_blockschaltbild.png" alt="" title="block diagramm" width="606" height="365" class="alignnone size-full wp-image-3026" />

### 3D CAD model

The original models dimensions are 50x50x50mm. This model has modified dimensions, since my Printrbot is not properly calibrated. The model is also rotated about 90° with the front side looking down.
The case can be mounted on a ordinary tripod by using a 1/4&#8243; hex nut in the case. The Arduino has its own slot on top of the case, the slot exposes the touch pad of the touch shield.
The LED is mounted on the back with the heatsink facing to the outside.


In the video you see an older version of the case.

This is the current version:



<img loading="lazy" src="/assets/2012/09/usb_lamp_new_case.jpg" alt="" title="USB LED lamp" width="606" height="428" class="alignnone size-full wp-image-3052" />
<img loading="lazy" src="/assets/2012/09/usb_lamp_new_case_2.jpg" alt="" title="USB LED lamp" width="606" height="428" />

### Schematic

Here you see the schematic for the Nano Shield. You&#8217;ll find the Eagle-Files (.sch and .brd below in the Download section). The
<img loading="lazy" src="/assets/2012/09/usb_led_lamp_schematic.png" alt="" title="schematic" width="606" height="417" class="alignnone size-full wp-image-3041" />

#### Functions:

- the Nano Shield fits exactly on a Arduino Nano
- dimming the power LED (350mA) via PWM with a NUD4001 LED driver [[Datasheet](http://www.onsemi.com/pub_link/Collateral/NUD4001-D.PDF)]
- a touch switch on the back of the board to turn the LED on and off (uses CapSense Lib from Arduino.cc, [Link](http://arduino.cc/playground/Main/CapacitiveSensor?from=Main.CapSense))
<img loading="lazy" src="/assets/2012/08/led_nano_shield_sml.jpg" alt="" title="power led nano-shield" width="606" height="455" class="alignnone size-full wp-image-2944" />

### Arduino Software

[cpp]
/*
LED USB Lamp

This program controls a high power LED via PWM and reads in a touch pad.

The circuit:
* LED attached from digital pin 3 to ground.
* touch pad connected to pin 6 and 5

Created 18 Aug 2012
By Sebastian Schuster

*/

#include <CapSense.h>

CapSense cs\_6\_5 = CapSense(6,5); // 10M resistor between pins 4 & 2, pin 2 is sensor pin, add a wire and or foil if desired
int ledPin = 3; // LED connected to digital pin 9

int actualState = 0;
int nextState = 0;

void setup() {
cs\_6\_5.set\_CS\_AutocaL_Millis(0xFFFFFFFF); // turn off autocalibrate on channel 1 - just as an example
Serial.begin(9600);

actualState = 0;
}

boolean readTouchpad(){
long start = millis();
long touchpad = cs\_6\_5.capSense(30);
boolean onOff=0;

Serial.print(millis() - start); // check on performance in milliseconds
Serial.print("\t"); // tab character for debug windown spacing
Serial.println(touchpad); // print sensor output 1

if (touchpad > 100)
onOff=1;
return onOff;
}

/*
state 0:
LED on (100%)

(transistion: touch pad activated)
state 1:
LED on (fading down)

(transistion: touch pad activated)
state 2:
LED on (fading stop)

(transistion: touch pad activated)
state 3:
LED on (fading up)

(transistion: touch pad activated)
state 4:
LED on (fading stop)

*/

int fadeValue= 255;
long timer_125ms=0;
long timer\_125ms\_old=0;
boolean touchpadPressed_old=0;

void loop() {

timer_125ms = millis();

long timer\_diff\_125ms = timer\_125ms - timer\_125ms_old;

//abfrage alle 500ms
if(timer\_diff\_125ms>125)
{
boolean touchpadPressed = readTouchpad();

switch (actualState) {
case 0:
Serial.println("State: 0");

if((touchpadPressed==1)&&(touchpadPressed_old==0))
nextState = 1;
break;
case 1:
Serial.println("State: 1");

if((touchpadPressed==1)&&(touchpadPressed_old==0))
nextState = 2;
break;
case 2:
Serial.println("State: 2");

if((touchpadPressed==1)&&(touchpadPressed_old==0))
nextState = 3;
break;
case 3:
Serial.println("State: 3");

if((touchpadPressed==1)&&(touchpadPressed_old==0))
nextState = 4;
break;
case 4:
Serial.println("State: 4");

if((touchpadPressed==1)&&(touchpadPressed_old==0))
nextState = 0;
break;
}

touchpadPressed_old=touchpadPressed;
timer\_125ms\_old = millis();
}

//##################################################

if(actualState==0)
{
fadeValue = 255;
analogWrite(ledPin, fadeValue);
}

else if(actualState==1)
{
fadeValue -=3;
analogWrite(ledPin, fadeValue);
}

else if(actualState==3)
{
fadeValue +=3;
analogWrite(ledPin, fadeValue);
}

//##################################################
actualState=nextState;
delay(50);
}
[/cpp]

### Download

Arduino Software: [/assets/2012/09/led\_usb\_lamp.zip](/assets/2012/09/led_usb_lamp.zip)
Arduino CapSense Lib: <http://arduino.cc/playground/Main/CapacitiveSensor?from=Main.CapSense>
Arduino Nano LED+Touch Shield: [/assets/2012/09/LED\_Touch\_shield.zip](/assets/2012/09/LED_Touch_shield.zip)
