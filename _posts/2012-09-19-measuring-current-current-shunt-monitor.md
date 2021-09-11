---
id: 3006
title: 'Arduino: measuring current: use a current shunt monitor'
date: 2012-09-19T20:14:31+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=3006
permalink: /blog/measuring-current-current-shunt-monitor/
thumbnail:
  - http://tinkr.de/wp-content/uploads/2012/09/current_shunt_monitor_sml.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:3010;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Schaltungen/ICs
  - Technik
tags:
  - adc
  - Arduino
  - current sense amplifier
  - current shunt monitor
  - maxim
  - measuring current
  - touchstone semiconductor
  - TS1100
---
Measuring current with an Arduino or any other microcontroller is not as simple as measuring voltages directly with the Arduinos/microcontrollers ADC.

In most cases a designer would use a current shunt amplifier/monitor.
<img loading="lazy" src="/assets/2012/08/current_shunt_monitor.jpg" alt="" title="current shunt monitor"    />

At first I started with the MAX9634F current shunt amplifier (CSA) in my design. The company Touchstone Semiconductor offers a pin and specification equivalent alternative to the Maxim part, the TSM9634T. Touchstone also offers an improved version of this amplifier, the TS1100. It has a much lower offset voltage then the MAX9634F/TSM9634T.

### Datasheets

<http://datasheets.maximintegrated.com/en/ds/MAX9634.pdf>
<http://touchstonesemi.com/products/tsm9634>
<http://touchstonesemi.com/products/ts1100>

### Schematic

This design uses a current shunt monitor (e.g. TS1100-25) with a gain of 25. The output voltage is:

V\_out=I\_load x R\_sense x R\_out/R1,

with
R_sense = 0.08 Ohm
R_out = 10k Ohm
R1 = 400 Ohm

<img loading="lazy" src="/assets/2012/09/csa_schematic.jpg" alt="" title="Schematic"    />

### Arduino Code

Here is a sample code, that you can use in your Arduino.

```
int ADCpin1 = A1; // ADC1 for current shunt measurement (via TS1100)

void setup()
{

}

void loop()
{

current = analogRead(ADCpin1);//*5000/1024;

//calc current: Vout=2V equals 1A
current = current*5000;
current = current/1024;
current = current/2;

delay(1000);
}
```

### Wiring Diagram

This is how you connect the CSA to the Arduino and the load. I measure also the voltage at the load, via the Arduino Analog Pin A0.
![current shunt amplifier - wiring diagram](/assets/2013/06/csa_overview.jpg "current shunt amplifier - wiring diagram")

### Downloads

[Eagle Schematic and Layout](/assets/2012/09/CSA_board_120919.zip)
