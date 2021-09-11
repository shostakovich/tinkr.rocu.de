---
id: 3555
title: Adding an e-ink display to the Raspberry Pi
date: 2014-03-24T06:36:59+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=3555
permalink: /blog/adding-e-ink-display-raspberry-pi/
thumbnail:
  - http://tinkr.de/wp-content/uploads/2014/03/repaper_epaper_02_sml.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:3559;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Allgemeines
tags:
  - Arduino
  - e-ink
  - e-paper
  - epaper
  - Kindle
  - Raspberry Pi
---
### Introduction

Most people know e-ink or e-paper displays from reading devices like the &#8222;Amazon Kindle&#8220;.

For a few months there are e-paper displays available that can be directly accessed by an Arduino or a Raspberry Pi.

One popular e-paper display kit is the &#8222;Repaper display kit&#8220;, that is available with displays in different sizes (between 1.44” and 2.7”).
More information can be found here: <http://repaper.org/reference.html>

### E-paper kit

I bought the 2.7&#8243; version. Here is what is included in the kit:


<div id="attachment_3556" style="width: 616px" class="wp-caption alignnone">
  <img aria-describedby="caption-attachment-3556" loading="lazy" src="/assets/2014/03/repaper_epaper_01.jpg" alt="Repaper 2.7&quot; kit" width="606" height="455" class="size-full wp-image-3556" srcset="/assets/2014/03/repaper_epaper_01.jpg 606w, /assets/2014/03/repaper_epaper_01-240x180.jpg 240w" sizes="(max-width: 606px) 100vw, 606px" />

  <p id="caption-attachment-3556" class="wp-caption-text">
    Repaper 2.7&#8243; kit
  </p>
</div>

-one e-paper display 2.7&#8243; from [Pervasive Displays](http://www.pervasivedisplays.com/)
-one pcb
-and a wiring kit

### Ressources

wiring info and drivers can be found here:
-Raspberry Pi / Beaglebone users, use this link:
<http://learn.adafruit.com/repaper-eink-development-board-arm-linux-raspberry-pi-beagle-bone-black/overview>

-Arduino users go this way:
<http://learn.adafruit.com/repaper-eink-development-board>

### Demo

So if you have everything wired correctly and loaded and installed all the drivers, you can run some demos:

<div id="attachment_3559" style="width: 616px" class="wp-caption alignnone">
  <img aria-describedby="caption-attachment-3559" loading="lazy" src="/assets/2014/03/repaper_epaper_03.jpg" alt="E-paper kit wired to Raspberry Pi" width="606" height="362" class="size-full wp-image-3559" />

  <p id="caption-attachment-3559" class="wp-caption-text">
    E-paper kit wired to Raspberry Pi
  </p>
</div>

And you also can try, what will happen to the display, when you remove the power supply - the display information will be retained 🙂


<div id="attachment_3557" style="width: 616px" class="wp-caption alignnone">
  <img aria-describedby="caption-attachment-3557" loading="lazy" src="/assets/2014/03/repaper_epaper_02.jpg" alt="E-paper display holds image without power supply" width="606" height="455" class="size-full wp-image-3557" srcset="/assets/2014/03/repaper_epaper_02.jpg 606w, /assets/2014/03/repaper_epaper_02-240x180.jpg 240w" sizes="(max-width: 606px) 100vw, 606px" />

  <p id="caption-attachment-3557" class="wp-caption-text">
    E-paper display holds image without power supply
  </p>
</div>

### Costs

around 40€ for the epaper kit

### Duration

wiring and setup time: around 30min to one hour
