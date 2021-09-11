---
id: 3498
title: 'TinkerForge - Weather-Station Kit'
date: 2014-02-16T15:24:52+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=3498
permalink: /blog/tinkerforge-weather-station/
thumbnail:
  - http://tinkr.de/wp-content/uploads/2014/02/tinkerforge_weatherstation_sml.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:3511;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Schaltungen/ICs
  - Technik
tags:
  - Brick
  - Bricklet
  - TinkerForge
---
I won the TinkerForge Weather Station at the Infineon 2013 online Christmas give-away event.

It took a little while for the Infineon reindeer to deliver it, but here it is 🙂

<div id="attachment_3504" style="width: 616px" >
  <img aria-describedby="caption-attachment-3504" loading="lazy" src="/assets/2014/02/tinkerforge_weatherstation_02.jpg" alt="Best wishes from Infineon"    srcset="/assets/2014/02/tinkerforge_weatherstation_02.jpg 606w, /assets/2014/02/tinkerforge_weatherstation_02-240x180.jpg 240w" sizes="(max-width: 606px) 100vw, 606px" />

  <p id="caption-attachment-3504" >
    Best wishes from Infineon
  </p>
</div>

<div id="attachment_3503" style="width: 616px" >
  <img aria-describedby="caption-attachment-3503" loading="lazy" src="/assets/2014/02/tinkerforge_weatherstation_01.jpg" alt="Tinkerforge Weather Station"    srcset="/assets/2014/02/tinkerforge_weatherstation_01.jpg 606w, /assets/2014/02/tinkerforge_weatherstation_01-240x180.jpg 240w" sizes="(max-width: 606px) 100vw, 606px" />

  <p id="caption-attachment-3503" >
    Tinkerforge Weather Station
  </p>
</div>

Assembling the kit (it consisting of a handful of laser cut Plexiglas, lots of screws and nuts and of course some electronic boards) didn’t take long.

It’s quite a nice kit. But there is a catch: it’s a new board design, with new connectors and a new tool chain. It has no interface to boards, like the Arduino or the Raspberry Pi.

I find the toolchain not very self-explanatory. There are &#8222;Bricks&#8220; and &#8222;Bricklet&#8220; modules and there is a &#8222;Brick Daemon&#8220; tool and a &#8222;Brick viewer&#8220;. You’ll find software plugins and firmware, and so on. Boy — this feels like programming a VCR for the first time.

### Demo - Brick Viewer

When I started the Brick Viewer, all was empty I rebooted my PC and oh wonder, that helped:


<div id="attachment_3505" style="width: 616px" >
  <img aria-describedby="caption-attachment-3505" loading="lazy" src="/assets/2014/02/tinkerforge_weatherstation_03.jpg" alt="Brick Viewer - Setup"    />

  <p id="caption-attachment-3505" >
    Brick Viewer - Setup
  </p>
</div>

You can choose between different tabs — one for each Bricklet module:

<div id="attachment_3506" style="width: 616px" >
  <img aria-describedby="caption-attachment-3506" loading="lazy" src="/assets/2014/02/tinkerforge_weatherstation_04.jpg" alt="Brick Viewer - Ambient Light Bricklet View"    />

  <p id="caption-attachment-3506" >
    Brick Viewer - Ambient Light Bricklet View
  </p>
</div>

<div id="attachment_3507" style="width: 616px" >
  <img aria-describedby="caption-attachment-3507" loading="lazy" src="/assets/2014/02/tinkerforge_weatherstation_05.jpg" alt="Brick Viewer - LCD Bricklet View"    />

  <p id="caption-attachment-3507" >
    Brick Viewer - LCD Bricklet View
  </p>
</div>

<div id="attachment_3508" style="width: 616px" >
  <img aria-describedby="caption-attachment-3508" loading="lazy" src="/assets/2014/02/tinkerforge_weatherstation_06.jpg" alt="Brick Viewer - Pressure Bricklet View"    />

  <p id="caption-attachment-3508" >
    Brick Viewer - Pressure Bricklet View
  </p>
</div>

<div id="attachment_3509" style="width: 616px" >
  <img aria-describedby="caption-attachment-3509" loading="lazy" src="/assets/2014/02/tinkerforge_weatherstation_07.jpg" alt="Brick Viewer - Humidity Bricklet View"    />

  <p id="caption-attachment-3509" >
    Brick Viewer - Humidity Bricklet View
  </p>
</div>

### Remaining Questions

I don&#8217;t know what to make of the weather-station. What is your experience with the Bricks/Bricklets and so on?
How does one program a firmware that captures data and sends them to a host?
