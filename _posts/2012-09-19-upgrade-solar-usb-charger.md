---
id: 2975
title: 'Upgrade: Solar-USB-Charger'
date: 2012-09-19T17:28:17+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=2975
permalink: /blog/upgrade-solar-usb-charger/
thumbnail:
  - http://tinkr.de/wp-content/uploads/2012/09/solar_usb_charger_sml.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:3002;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Basteln
  - Gebasteltes
  - Schaltungen/ICs
  - Technik
tags:
  - 3d printed part
  - 3D printer
  - current sense amplifier
  - current shunt monitor
  - OLED
  - solar apple charger
  - USB
---
### Introduction

During the last weeks I upgraded my solar-usb-charger system.
Here you can find the original design: <http://tinkr.de/bau-dir-ein-apple-solar-ladegerat/> (german article).

What the old design basically did was converting the 12V DC from the solar powered battery system to USB friendly 5V DC.

### New Features

I added a couple of features:
-OLED-I2C-display (from [wide.hk](http://www.wide.hk))
-Arduino Nano
-current sense amplifier board (more information about this board can be found [here](http://tinkr.de/blog/measuring-current-current-shunt-monitor/))
-3d printed case for the OLED display (link below)

### Wiring

<img loading="lazy" src="/assets/2012/09/solar_usb_charger_05.jpg" alt="" title="wiring usb charger"    />
Wiring all boards together is fairly simple:

OLED-I2C-display is connected to the I2C (SDA and SCL) and voltage pins (5V and GND) of the Arduino Nano.
The current sense amplifier board output pin is connected to the ADC1 pin of the Arduino Nano. The boards input and load pin are placed into the voltage supply cabling from the solar battery to the DC/DC converter.

There is also a voltage devider connected to the solar battery (input) and the Arduinos ADC0 pin (output of the voltage devider).

A switch connects the 5V power supply from the DC/DC converter to the Arduino 5V pin.

### Software

The Arduino measures two voltages with it&#8217;s ADC, the first one is the solar battery voltage (nominal 12V DC) and the second voltage comes from the current sense amplifier. It represents the current flowing into the DC/DC converter (12V to 5V).
After measuring both voltages, they are used to calculate the solar battery voltage and the current. Both values are then displayed on the OLED display.

```
//==========================================================//
//&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;-WWW.WIDE.HK&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;-//
//&#8212;-i2c OLED example&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;-//
//&#8212;-Function : show 128&#215;64 Graphic , Word and animation-//
//&#8212;-SCL = A5 , SDA = A4 , VCC = 3.3V-5V , GND&#8212;&#8212;&#8212;-//
//==========================================================//

#include <Wire.h>
//&#8212;&#8212;&#8212;&#8212;&#8212;FONT + GRAPHIC&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;-//
#include <C:\Coding\i2c_OLED\data.c>
//==========================================================//

#define OLED_address 0x3c

unsigned char fill_OLED=0x55;
char oledString1[]="Spannung:";
char oledString2[]="Strom:";

extern unsigned char myFont[][8];
extern unsigned char logo[];
extern unsigned char ip[];

char charBuf[50];

int ADCpin0 = A0; // ADC0 for voltage measurement
int ADCpin1 = A1; // ADC1 for current shunt measurement (via TS1100)

long voltage = 0;
long current = 0;

//==========================================================//
void print\_a\_char(unsigned char ascii=0)
{
unsigned char i=0;
for(i=0;i<8;i++)
{
SendChar(myFont\[ascii-0x20\]\[i\]);
}
}

//==========================================================//
void setup()
{

Wire.begin();
init_OLED();
delay(10);
clear_display();
delay(50);

sendcommand(0x20); //Set Memory Addressing Mode
sendcommand(0x02); //Set Memory Addressing Mode ab Page addressing mode(RESET)
sendcommand(0xa6); //Set Normal Display (default)

setXY(2,0);
sendStr(oledString1);

setXY(4,0);
sendStr(oledString2);

}

//==========================================================//
void loop()
{

//get ADC values
voltage = analogRead(ADCpin0);//*5000/1024;
current = analogRead(ADCpin1);//*5000/1024;

//calc voltage: get the "real" ADC-input voltage and multiply by the gain of the voltage devider (1/4)
voltage = voltage*5000;
voltage = voltage/1024;
voltage = voltage*4;

//calc current: Vout=2V equals 1A
current = current*5000;
current = current/1024;
current = current/2;

String stringVoltage;
stringVoltage += voltage;
stringVoltage += "mV ";
stringVoltage.toCharArray(charBuf, 50);

setXY(3,1);
sendStr(charBuf);

String stringCurrent;
stringCurrent += current;
stringCurrent += "mA ";
stringCurrent.toCharArray(charBuf, 50);

setXY(5,1);
sendStr(charBuf);

delay(1000);
}

//==========================================================//
void sendcommand(char com)
{
Wire.beginTransmission(OLED_address); //begin transmitting
Wire.write(0x80); //command mode
Wire.write(com);
Wire.endTransmission(); // stop transmitting
}

//==========================================================//
void clear_display(void)
{
unsigned char i,k;
for(k=0;k<8;k++)
{
setXY(k,0);
{
for(i=0;i<128;i++) //clear all COL
{
SendChar(0); //clear all COL
//delay(10);
}
}
}
}

//==========================================================//
void SendChar(char data)
{
Wire.beginTransmission(OLED_address); // begin transmitting
Wire.write(0x40);//data mode
Wire.write(data);
Wire.endTransmission(); // stop transmitting
}

//==========================================================//
void setXY(unsigned char row,unsigned char col)
{
sendcommand(0xb0+row); //set page address
sendcommand(0x00+(8*col&0x0f)); //set low col address
sendcommand(0x10+((8*col>>4)&0x0f)); //set high col address
}

//==========================================================//
void sendStr(char *string)
{
unsigned char i=0;
//setXY(0,0);
while(*string)
{
for(i=0;i<8;i++)
{
SendChar(myFont\[*string-0x20\]\[i\]);

// SendChar(*string);
delay(10);
}
*string++;
}
}

//==========================================================//
void init_OLED(void)
{

sendcommand(0xae); //display off
delay(50);
//&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;-REVERSE comments&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;-//
// sendcommand(0xa0); //seg re-map 0->127(default)
// sendcommand(0xa1); //seg re-map 127->0
// sendcommand(0xc8);
// delay(1000);
//&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;-REVERSE comments&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;-//

sendcommand(0xaf); //display on
delay(50);

}

```

### Mechanics

The 3D part for the OLED display can be found here:

<https://tinkercad.com/things/gpoEs7xHyvj-oled-display-case>

After printing the part, I glued the switch and the oled display into the part with silicone glue.

<img loading="lazy" src="/assets/2012/09/solar_usb_charger_02.jpg" alt="" title="3d printed part"    />
<img loading="lazy" src="/assets/2012/09/solar_usb_charger_03.jpg" alt="" title="mounting the printed part to the enclosure"   />
<img loading="lazy" src="/assets/2012/09/solar_usb_charger_04.jpg" alt="" title="finished enclosure"   />

### In operation



### Download

-Arduino software: [zip file](/assets/2012/09/i2c_arduino.zip) (be sure to add the oled-display-library from wide.hk)
-link to oled-display-library: <http://www.wide.hk/products.php?product=I2C-0.96%22-OLED-display-module-%28-compatible-Arduino-%29>
-current sense amplifier board: <http://tinkr.de/blog/measuring-current-current-shunt-monitor/>
-3d part: <https://tinkercad.com/things/gpoEs7xHyvj-oled-display-case>
