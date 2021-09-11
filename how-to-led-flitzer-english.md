---
id: 317
title: 'How to: LED-Flitzer (english)'
date: 2009-03-24T19:09:45+00:00
author: SES
layout: page
guid: http://tinkr.de/?page_id=317
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:372;s:11:"_thumb_type";s:10:"attachment";}'
---
(Diesen Artikel gibt es auch in [deutsch](http://tinkr.de/led-flitzer/))

[<img loading="lazy" class="alignleft size-medium wp-image-300" title="LED-Flitzer (3)" src="/assets/2009/03/led_flitzer_3-300x110.jpg" alt="LED-Flitzer (3)" width="300" height="110" srcset="/assets/2009/03/led_flitzer_3-300x110.jpg 300w, /assets/2009/03/led_flitzer_3-1023x377.jpg 1023w, /assets/2009/03/led_flitzer_3.jpg 1989w" sizes="(max-width: 300px) 100vw, 300px" />](/assets/2009/03/led_flitzer_3.jpg)
The LED-Flitzer is a further development of the Dance Messenger that can be found at [Instructables.com](http://www.Instructables.com).
The LED-Flitzer is like the Dance Messenger a persistence of view (POV) toy.
What is it good for? Use it to show your messages to others when you dance, run. Or mount it on the wheels of your bike.



<h3 style="clear: both;">
  How does it work:
</h3>

[<img loading="lazy" class="alignleft size-medium wp-image-270" title="Led-Flitzer POV PCB" src="/assets/2009/02/led_flitzer_0-300x199.jpg" alt="Led-Flitzer POV PCB" width="300" height="199" />](/assets/2009/02/led_flitzer_0.jpg)
A string of 8 LEDs is controlled via a AVR microcontroller. By switching them in a certain way, it is possible to create different kind of forms. This firmware is limited to capital letters. But you can add numbers and figures if you want.

<h3 style="clear: both;">
  Improvements to the Dance Messenger
</h3>

There are several improvements in comparison to the design from [Instructables.com](http://www.Instructables.com):

  * [<img loading="lazy" class="alignleft size-thumbnail wp-image-280" title="USB connector" src="/assets/2009/03/usb_stecker-150x150.jpg" alt="USB connector" width="150" height="150" />](/assets/2009/03/usb_stecker.jpg)USB-interface for easy download of new text strings (no ISP programming necessary for changing the LED texts). The text is then stored nonvolatile in the EEPROM.
<li style="clear:both;">
  <a href="/assets/2009/03/mma7260q.jpg"><img loading="lazy" class="alignleft size-thumbnail wp-image-279" title="MMA7260Q Accelerometer" src="/assets/2009/03/mma7260q-150x150.jpg" alt="MMA7260Q Accelerometer" width="150" height="150" /></a>a three axis acceleration sensor senses the movement of LED-Flitzer, so the LEDs were only turned on, if a moving was detected
</li>
<li style="clear:both;">
  voltage regulator added
</li>
  * polarity protection via diode

<h3 style="clear: both;">
  Prerequisites:
</h3>

  * EAGLE
  * LED Flitzer Proga (Text Download Tool)
  * USB-drivers from FTDI: <http://www.ftdichip.com/Drivers/VCP.htm>
  * ISP programmer for programming the ATmega8
  * some soldering skills

### Schematic and Layout

You can download the schematic and layout in the download section at the bottom of this page. You&#8217;ll need the Eagle schematic/layout program from [cadsoft.com](http://www.cadsoft.com).

### AVR Firmware - Sourcecode

The software for the AVR microcontroller is also available in the download section on this page. It is written in C in the AVR Studio/WinAVR.
Software-Settings: The code is programmed for an ATmega8 running at 1MHz. The UART baudrate is 4800 baud, due to the lowest error vs. speed value. The UART is used to get new texts strings.

<h3 style="clear: both;">
  LED Flitzer Proga - Text download programm:
</h3>

<a style="float: left;" href="/assets/2009/03/flitzer.png"><img loading="lazy" title="LED-Flitzer Text Download Tool" src="/assets/2009/03/flitzer-150x150.png" alt="LED-Flitzer Text Download Tool" width="150" height="150" /></a>
I have progammed a small tool for download new text strings into the LED-Flitzer. It&#8217;s written in C#. Since you can also download the sources, you can also port it from windows to other OSs, like Linux or MAC OS.
This tool uses the virtual serial port, to communicate with the pov device.
Next to this tool (download link at the bottom of this page) you need the latest .net-runtime and the USB-drivers from FTDI: <http://www.ftdichip.com/Drivers/VCP.htm>

<h3 style="clear: both;">
  Downloads:
</h3>

[Downloads](http://tinkr.de/led-flitzer/#downloads)

### Known issues:

Voltage is a certain problem when using batteries. The voltage level decreases over time. The voltage regulator creates 3.3V when more then 4.5V are present at the input. If the batterie voltage drops below that, the voltage regulator will lower the system voltage under 3.3V. In normal use, that is no problem, only the LED brightness will decrease a little bit. But when using the USB interface that might will cause communication problems. The text, that will be stored in the EEPROM might will differ form those, you programmed in. So just take some new batteries, and it should work fine again.

Never compile the firmware in highest optimization (OS). The code will then behave in an unpredictable way. Instead chose O1 or O2.

### Copyright:

<a rel="license" href="http://creativecommons.org/licenses/by-nc/3.0/de/"><img style="border-width:0" src="http://i.creativecommons.org/l/by-nc/3.0/de/88x31.png" alt="Creative Commons License" /></a>
Dieses Werk oder Inhalt ist unter einer <a rel="license" href="http://creativecommons.org/licenses/by-nc/3.0/de/">Creative Commons-Lizenz</a> lizenziert.
