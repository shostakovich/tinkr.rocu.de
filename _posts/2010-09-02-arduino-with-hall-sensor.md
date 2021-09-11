---
id: 1815
title: Arduino with hall sensor
date: 2010-09-02T11:57:03+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=1815
permalink: /blog/arduino-with-hall-sensor/
thumbnail:
  - http://tinkr.de/wp-content/uploads/2010/09/hall_sensor_arduino_sml.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:1825;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Allgemeines
tags:
  - Arduino
  - electronics
  - hall sensor
  - howto
  - Magnet
  - magnetic field
  - tutorial
---
In this article I will show you, how easy it is to sense a magnetic field with an Arduino. At first I will describe the electronic circuit, then I present the small code necessary for this design.

# Electronic circuit:

All we need is a hall sensor, two capacitors, one resistor and some wires and of course an Arduino and a magnet.

<img loading="lazy" src="/assets/2010/09/hall_sensor_arduino.jpg" alt="" title="Arduino - hall sensor test setup"    />

I chose the MLX90248ESE [[datasheet](http://www.melexis.com/Asset/MLX90248_DataSheet_DownloadLink_4764.aspx)] from Melexis. Since it senses an omnipolar magnetic field, we don&#8217;t need to care about, where the north and where the south pole on our magnet is.

Let&#8217;s take a look on the schematic that can be found in the datasheet:
<img loading="lazy" src="/assets/2010/09/hall_sensor_melexis.png" alt="" title="hall sensor schematic"    />
Source: Melexis

In order not to need an additional prototyping shield for soldering the two capacitors and resistor, I soldered them directly on the sensor itself. It&#8217;s kind of tricky, but if you have a certain soldering experience you will get it, otherwise use a prototyping shild instead.
**Please mind, that you should use the 3.3V supply instead of the 5V for powering the sensor.**

<img loading="lazy" src="/assets/2010/09/hall_sensor_melexis_package2.jpg" alt="" title="Hall-sensor with capacitors and resistor"    />

# Code:

```
// constants
const int hallPin = 8; // the number of the hallsensor pin

// variables will change:
int hallState = 0; // variable for reading the pushbutton status

void setup() {
Serial.begin(9600);
// initialize the pushbutton pin as an input:
pinMode(hallPin, INPUT);
}

void loop(){
// read the state of the pushbutton value:
hallState = digitalRead(hallPin);

if (hallState == HIGH) {
Serial.println("no mag");
}
else {
Serial.println("mag detected");
}

delay(200);
}
```

# Video:
