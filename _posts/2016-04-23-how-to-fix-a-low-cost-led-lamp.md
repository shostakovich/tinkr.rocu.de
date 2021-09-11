---
id: 3778
title: How to fix a low cost LED lamp
date: 2016-04-23T17:46:22+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=3778
permalink: /blog/how-to-fix-a-low-cost-led-lamp/
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:3783;s:11:"_thumb_type";s:5:"thumb";}'
layout_key:
  - ""
post_slider_check_key:
  - "0"
image: http://tinkrde.test.mug.im/wp-content/uploads/sites/7/2016/04/enclosure.jpg
categories:
  - Basteln
  - Technik
  - Uncategorized
tags:
  - 3D printer
  - Constant current source
  - DesignSpark Mechanical
  - LED Lamp
  - LM3410
---
### Introduction

A few years ago I received a nice little LED lamp as a bonus in an online order. The lamp had one issue, the circuit was optimized for costs not for lifetime of the LEDs.

### Initial Ciruit

<div id="attachment_3789" style="width: 616px" >
  <img aria-describedby="caption-attachment-3789" loading="lazy" src="/assets/2016/04/dead_leds.jpg" alt="dead LEDs"    srcset="/assets/2016/04/dead_leds.jpg 606w, /assets/2016/04/dead_leds-300x190.jpg 300w" sizes="(max-width: 606px) 100vw, 606px" />

  <p id="caption-attachment-3789" >
    dead LEDs
  </p>
</div>


After around of 10 hours of accumulated operation, the LEDs started to flicker. The reason was, that the LEDs were not safely supplied by a certain constant supply current. Instead, the circuit supplied the voltage of three AAA cells directly to the LEDs.


<div id="attachment_3781" style="width: 616px" >
  <img aria-describedby="caption-attachment-3781" loading="lazy" src="/assets/2016/04/circuit_led_parallel.jpg" alt="parallel LED circuit"    srcset="/assets/2016/04/circuit_led_parallel.jpg 606w, /assets/2016/04/circuit_led_parallel-300x109.jpg 300w" sizes="(max-width: 606px) 100vw, 606px" />

  <p id="caption-attachment-3781" >
    parallel LED circuit
  </p>
</div>

### Enhanced Circuit

<div id="attachment_3787" style="width: 301px" >
  <img aria-describedby="caption-attachment-3787" loading="lazy" src="/assets/2016/04/circuit_led_current.jpg" alt="constant current circuit"    srcset="/assets/2016/04/circuit_led_current.jpg 291w, /assets/2016/04/circuit_led_current-153x300.jpg 153w" sizes="(max-width: 291px) 100vw, 291px" />

  <p id="caption-attachment-3787" >
    constant current circuit
  </p>
</div>


I used the LM3410 - a Constant Current Boost and SEPIC LED Driver with Internal Compensation - from Texas Instruments. Here you can find further information: <http://www.ti.com/product/LM3410/description>
Schematic examples can be found in the datasheet as well.
I set the constant current to 20mA.

### Building a new enclosure

The LM3410 LED driver on the small PCB didn&#8217;t fit into the old enclosure, so I had to design a new one. I used the tool DesignSpark Mechanical 2.0, the little brother of the MCAD tool Spaceclaim Engineer.


<div id="attachment_3783" style="width: 616px" >
  <img aria-describedby="caption-attachment-3783" loading="lazy" src="/assets/2016/04/enclosure.jpg" alt="enclosure design"    srcset="/assets/2016/04/enclosure.jpg 606w, /assets/2016/04/enclosure-300x214.jpg 300w" sizes="(max-width: 606px) 100vw, 606px" />

  <p id="caption-attachment-3783" >
    enclosure design
  </p>
</div>

### Result

Here you can see the final result, the enclosure - consisting of three printed parts: the outer shell, the sliding center part and the cover panel. The center part is carrying the LED driver PCB and the battery compartment.


<div id="attachment_3784" style="width: 616px" >
  <img aria-describedby="caption-attachment-3784" loading="lazy" src="/assets/2016/04/led_lamp-COLLAGE.jpg" alt="LED Lamp - result"    srcset="/assets/2016/04/led_lamp-COLLAGE.jpg 606w, /assets/2016/04/led_lamp-COLLAGE-150x150.jpg 150w, /assets/2016/04/led_lamp-COLLAGE-300x300.jpg 300w" sizes="(max-width: 606px) 100vw, 606px" />

  <p id="caption-attachment-3784" >
    LED Lamp - result
  </p>
</div>
