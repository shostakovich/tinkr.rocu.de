---
id: 2507
title: 'Arduino: Weather-Shield - schematics, layout, code, &#8230; - everything you need'
date: 2011-08-14T17:34:17+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=2507
permalink: /blog/arduino-weather-shield-schematics-layout-code-everything-you-need/
thumbnail:
  - http://tinkr.de/wp-content/uploads/2011/08/weather_shield_1_sml.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:2514;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Basteln
  - Gebasteltes
  - Schaltungen/ICs
  - Technik
  - Umweltmaus
tags:
  - Arduino
  - Shields
  - Weather Shield
  - Wetterstation
---
I&#8217;ve been working quite a while on my weather station project. Since the first version of the hardware had some bugs, I redesigned the electronics from scratch and created a weather shield for the Arduino. So here it is:

### Overview:

<img loading="lazy" src="/assets/2011/08/weather_shield_1.jpg" alt="" title="Weather Shield - Overview" width="606" height="455" class="alignnone size-full wp-image-2508" srcset="/assets/2011/08/weather_shield_1.jpg 606w, /assets/2011/08/weather_shield_1-240x180.jpg 240w" sizes="(max-width: 606px) 100vw, 606px" />
The shield has several sensors:
- barometric pressure sensor - BMP085, from Bosch, I2C interface
- humidity sensor - SHT11, from Sensirion, proprietary serial interface
- light sensor, connected to an ADC-In
- DIO, e.g. for a wind meter
- ADC-Ins for measuring the voltage in the solar system part of the system

<img loading="lazy" src="/assets/2011/08/weather_station_1.jpg" alt="" title="Weather Station - Enclosure" width="606" height="455" class="alignnone size-full wp-image-2510" srcset="/assets/2011/08/weather_station_1.jpg 606w, /assets/2011/08/weather_station_1-240x180.jpg 240w" sizes="(max-width: 606px) 100vw, 606px" />

Apart from the weather shield I also attached a Xbee shield in order to transmit data wirelessly to a server PC, because I want to display the data on a website.

<img loading="lazy" src="/assets/2011/08/weather_station_2.jpg" alt="" title="Weather-Station" width="606" height="455" class="alignnone size-full wp-image-2511" srcset="/assets/2011/08/weather_station_2.jpg 606w, /assets/2011/08/weather_station_2-240x180.jpg 240w" sizes="(max-width: 606px) 100vw, 606px" />

<img loading="lazy" src="/assets/2011/08/weather_station_sample_data.png" alt="" title="weather station - sample data" width="606" height="661" class="alignnone size-full wp-image-2514" />
Before 10:00 a.m. there was no data available. Live sensor data was captured after 10:00 a.m.

### Downloads:

#### Hardware:</h3>

- Schematic and Layout (Eagle)
[weather\_shield\_data_110814.zip](/assets/2011/08/weather_shield_data_110814.zip)
Notes:
In the schematic/layout you&#8217;ll also find a MAX6633 temperature sensor, it&#8217;s not necessary to place this IC on your board, since the humididy sensor and the pressure sensor also measure the temperature. Furthermore it&#8217;s not necessary to place the PCA9306 on the board. Instead use the jumpers JU10 and JU11 and equip only the pull-up resistors R21 and R22, not R23 and R24. Just compare the part placement with the image of the board at the beginning of the article.

#### Software for Arduino:</h3>

[wheater\_app\_110807.zip](/assets/2011/08/wheater_app_110807.zip)
