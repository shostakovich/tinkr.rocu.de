---
id: 3171
title: 'Raspberry Pi: thermal images'
date: 2013-01-18T21:07:57+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=3171
permalink: /blog/raspberry-pi-thermal-images/
thumbnail:
  - http://tinkr.de/wp-content/uploads/2013/01/raspberry_pi_IR_sml.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:3174;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Allgemeines
  - Technik
tags:
  - Raspberry Pi
  - thermal images
  - thermal shot
---
There are some heatsinks for the Raspberry Pi and I wanted to evaluate if I need one.

So I decided to take some thermal images of it under typical load. I used my FLIR camera. Here are the first results.

<img loading="lazy" src="/assets/2013/01/raspberry_pi_unboxing_03.jpg" alt="Raspberry Pi - cabled" width="606" height="456" class="alignnone size-full wp-image-3167" srcset="/assets/2013/01/raspberry_pi_unboxing_03.jpg 606w, /assets/2013/01/raspberry_pi_unboxing_03-240x180.jpg 240w" sizes="(max-width: 606px) 100vw, 606px" />

After 10min in idle mode (96% idle): 39°C CPU temperature

<img loading="lazy" src="/assets/2013/01/raspberry_pi_IR_0019.jpg" alt="Raspberry - thermal image, after 10min " width="600" height="600" class="alignnone size-full wp-image-3172" srcset="/assets/2013/01/raspberry_pi_IR_0019.jpg 600w, /assets/2013/01/raspberry_pi_IR_0019-120x120.jpg 120w" sizes="(max-width: 600px) 100vw, 600px" />

After 50min in idle mode (96% idle): 42.4°C CPU temperature
<img loading="lazy" src="/assets/2013/01/raspberry_pi_IR_0021.jpg" alt="Raspberry - thermal image, after 50min " width="600" height="600" class="alignnone size-full wp-image-3173" srcset="/assets/2013/01/raspberry_pi_IR_0021.jpg 600w, /assets/2013/01/raspberry_pi_IR_0021-120x120.jpg 120w" sizes="(max-width: 600px) 100vw, 600px" />

The hottest spot is not the CPU, but the companion chip.

In the next days I will post some thermal images of the Rasp.Pi working under heavy load.

**Update: 27.01.13:**
Here is the stress test thermal shot: [Link](http://tinkr.de/blog/raspberry-pi-stress-test/)
