---
id: 3397
title: 'Hexy the Hexapod - powering issues'
date: 2013-05-30T15:04:16+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=3397
permalink: /blog/hexy-hexapod-powering-issues/
thumbnail:
  - http://tinkr.de/wp-content/uploads/2013/04/hexy_hexypod_05_sml.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";b:0;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Allgemeines
  - Basteln
  - Technik
tags:
  - current
  - Current shunt amplifier
  - Hexapod
  - HExy
  - kickstarter
  - Robot
  - voltage
---
In the last weeks I assembled the Hexy robot together. Soon after building everything together I found out, that the power supply is not capable of powering the robots 19 servo motors.

I use five Eneloop rechargeable batteries. And even those quality batteries are not able to fully power the robot.

So I experienced a few of the following issues when trying to get Hexy up on its legs:



On the manufacturers blog [[link](http://www.hexythehexapod.com/index.php/blog/27-new-hexy-power-source)] they give the advise to try a low cost DC/DC converter in combination with a Lipo battery. This converter can source up to 4A at 5V or 6V DC.
I ordered the converter and will post my results soon.

### Update 01.06.13:

Today I&#8217;ve measured the voltage and the current when powering the Hexy robot. The measurement circuit can be found here: [[link](http://tinkr.de/blog/measuring-current-current-shunt-monitor/)].

Here are my results:
![Hexy diagramm - voltage and current](/assets/2013/06/hexy_diagramm_voltage_current.jpg)

In idle mode the servo motors draw a current up to 1300mA.
When setting all servos to zero the current rises up to 2000mA, but there is a voltage drop at the same time down to 3750mV (orange box).
When trying to get Hexy up (12 servo motors under load), the current rises up to 1500mA, but there is a even bigger voltage drop at the same time down to 3500mV (blue box).

So we can conclude, that powering the Hexy with just five quality Eneloop batteries is not enough. What we need is a power supply, that can deliver more than 2000mA without any voltage drops.
