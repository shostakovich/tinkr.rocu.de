---
id: 2869
title: 'OLIMEXINO-328: the better Arduino?'
date: 2012-06-04T19:13:13+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=2869
permalink: /blog/olimexino-328-arduino/
thumbnail:
  - http://tinkr.de/wp-content/uploads/2012/06/OLIMEXINO-328_sml.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:2871;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Basteln
  - Gebasteltes
  - Schaltungen/ICs
  - Technik
tags:
  - Arduino
  - Olimex
  - OLIMEXINO-328
---
<img loading="lazy" src="/assets/2012/06/OLIMEXINO-328.jpg" alt="" title="OLIMEXINO-328 overview" width="606" height="455" class="alignnone size-full wp-image-2870" />

Today I would like to introduce you to a nice Arduino Duemilanove clone, the OLIMEXINO-328 from Olimex. It has been kindly provided by [de.farnell.com](http://de.farnell.com/).

Some information about the board can be found here:
OLIMEXINO-328 manual: [http://www.olimex.com/dev/DUINO/OLIMEXINO-328/OLIMEXINO-328-REVB.pdf](http://www.olimex.com/dev/DUINO/OLIMEXINO-328/OLIMEXINO-328-REVB.pdf "manual")
OLIMEXINO-328 schematic: [http://www.olimex.com/dev/DUINO/OLIMEXINO-328/OLIMEXINO-328-schematic.pdf](http://www.olimex.com/dev/DUINO/OLIMEXINO-328/OLIMEXINO-328-schematic.pdf "schematic")
Link to product page: [http://de.farnell.com/olimex/olimexino-328/bord-dev-olimexino-atmega328/dp/2061327?Ntt=OLIMEXINO-328](http://de.farnell.com/olimex/olimexino-328/bord-dev-olimexino-atmega328/dp/2061327?Ntt=OLIMEXINO-328 "product page")

The board is fully compatible with the Arduino IDE. Connecting and uploading to the board worked without any problem.

Olimex did some nice design improvements. I want to list the most important ones (more can be found in the manual):
1. exchangeable crystal
2. input power range from 9 to 30V DC
3. industial temperature range -25+85C (original design: commercial range from 0-70C operating temperature)
4. the original Arduino design is not good for portable applications, due to the power consumption of the linear voltage regulators. The OLIMEXINO uses an ultra low power voltage regulator and the consumption is only few microamps, which enables handheld and battery powered applications.
5. added Li-Ion rechargable battery power supply option with BUILD-IN on board charger, so when you attach battery it is automatically charged and kept in this state until the other power source (USB or external adapter) is removed and it AUTOMATICALLY will power the board - no jumpers, no switches.
6. works in 3.3V and 5V mode which is selectable with a switch
7. added UEXT connector for RF, ZIGBEE, GSM, GPS modules
8. added noise immunity
9. LEDs and buttons are easier accessible (are placed on the edge of the board)
10. all components are LOWER than the connectors, so the shields do not interference with them
11. mini USB connector
12. use of perfo board is possible
13. 4 mount holes make board attachment easier (original design: 3)

The price is pretty much the same to the original board: around 25€
