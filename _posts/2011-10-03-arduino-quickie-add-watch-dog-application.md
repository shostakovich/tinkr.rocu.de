---
id: 2594
title: 'Arduino quickie: add a watch-dog to your application'
date: 2011-10-03T19:02:44+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=2594
permalink: /blog/arduino-quickie-add-watch-dog-application/
thumbnail:
  - http://tinkr.de/wp-content/uploads/2011/10/arduino.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:2597;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Allgemeines
tags:
  - Arduino
  - programming
  - watch-dog
  - watchdog
  - Weather Station
---
This is a small hint, how to add a watch-dog to your Arduino application.

I&#8217;m using the Arduino in 24/7 mode in my weather station. For unknow reason the software sends no data to our host system, it got stucked somewhere. So I added the watch-dog to prevent this.

Adding this functionality is fairly simple.

1. you need to include the wdt.h File:
[cpp]#include <avr/wdt.h>[/cpp]

2. in the setup routine you add:
[cpp]wdt\_enable(WDTO\_2S);[/cpp]
WDT0_2S means, that the time out is 2s. so you have to reset the watch-dog within that period, otherwise it will reset the complete Arduino microcontroller.

other values are also possible: 15 ms, 30 ms, 60 ms, 120 ms, 250 ms, 500 ms, 1 s, 2 s, 4 and 8 s.

3. in the loop routine you add:
[cpp]wdt_reset(); [/cpp]
to reset the watch-dog timer within the watch-dog timeout.

see also: <http://tushev.org/articles/electronics/48-arduino-and-watchdog-timer> for more information.
