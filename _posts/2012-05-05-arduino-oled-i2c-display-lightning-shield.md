---
id: 2836
title: 'Arduino: OLED I2C display and Lightning Shield'
date: 2012-05-05T11:00:04+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=2836
permalink: /blog/arduino-oled-i2c-display-lightning-shield/
thumbnail:
  - http://tinkr.de/wp-content/uploads/2012/05/oled_Sml.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:2841;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Allgemeines
  - Basteln
  - Gebasteltes
  - Schaltungen/ICs
  - Technik
tags:
  - Arduino
  - Arduino Nano
  - austriamicrosystems
  - display
  - I2C
  - Lightning Sensor
  - Lightning Shield
  - OLED
  - OLED I2C display
  - Weather Station
---
Currently I&#8217;m working on two Arduino projects, both will upgrade my weather station.

### OLED I2C display

<img loading="lazy" src="/assets/2012/05/oled.jpg" alt="" title="I2C OLED" width="606" height="793" class="alignnone size-full wp-image-2840" />
The OLED is connected to an Arduino Nano via I2C and it measures the current voltage of the solar powered batteries.
The OLED display is available at [wide.hk](http://www.wide.hk/products.php?product=I2C-0.96%22-OLED-display-module-%28-compatible-Arduino-%29) for 16$.

### Lightning Shield

The other project is pretty cool. I will build a new Arduino Shield for a lightning sensor (AS3935), just announced this week, from austriamicrosystems. [Link](http://www.austriamicrosystems.com/Products/RF-Products/Lightning-Sensor/AS3935) to sensor page.
This sensor is accessible via I2C respectively SPI. It detects both cloud-to-ground and intra-cloud (cloud-to-cloud) flashes within a 40km range. The supply voltage range is from 2.4 to 5.5V.
