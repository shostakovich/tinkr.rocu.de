---
id: 3792
title: 'Entry-Level USB Scopes: BitScope vs. PicoScope 2204A'
date: 2016-04-30T09:26:38+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=3792
permalink: /blog/entry-level-usb-scopes-bitscope-vs-picoscope-2204a/
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:3804;s:11:"_thumb_type";s:5:"thumb";}'
layout_key:
  - ""
post_slider_check_key:
  - "0"
image: http://tinkrde.test.mug.im/wp-content/uploads/sites/7/2016/04/2016-04-27-20h12_08.gif
categories:
  - Uncategorized
tags:
  - awg
  - BitScope
  - oscilloscopes
  - PicoScope
  - signal generator
  - USB Scopes
  - wave form generator
---
### Introduction

A few weeks ago I have found a link the BitScope website. BitScope is a manufacturer of handy low cost USB scopes. At their website everything looked nice and easy to use, so I ordered one of their tiny USB scopes. After the first test things looked a little different. In fact, I was quite disappointed, so disappointed I ordered another USB scope - this time from Pico, a PicoScope.

So let&#8217;s examine, what scope might be a good choice for you.

<img loading="lazy" src="/assets/2016/04/scopes.jpg" alt=""    srcset="/assets/2016/04/scopes.jpg 627w, /assets/2016/04/scopes-300x264.jpg 300w" sizes="(max-width: 627px) 100vw, 627px" />

### Comparison Table

At first we have a look at the numbers and features of the scopes. But be aware, there are other features you should also take into account before deciding which scope is best, like software and software usability. We will discuss this in the section below.

[table]
Scope, Price, Enclosure, Probes, Bandwidth, Resolution, Samples, AWG, Power Supply
Bitscope, 150€ (with BNC Adapter), no, no, 20Mhz, 12Bits, 40 MS/s, yes, via USB
PicoScope 2204A, 155€, yes, yes (2), 10Mhz, 8Bits, 50 MSa/s, yes, via USB
[/table]

So from the numbers we see the Bitscope has a higher Bandwidth and a higher Resolution. But it lacks an enclosure and probes.

### Software

-Bitscope: The guys from Bitscope follow the slogan, we fill your desktop till it&#8217;s full (every tool also puts its readme file on your more or less tidy desktop).


<div id="attachment_3808" style="width: 203px" >
  <img aria-describedby="caption-attachment-3808" loading="lazy" src="/assets/2016/04/2016-04-28_22h40_56.jpg" alt="fill your desktop with icons"    srcset="/assets/2016/04/2016-04-28_22h40_56.jpg 193w, /assets/2016/04/2016-04-28_22h40_56-134x300.jpg 134w" sizes="(max-width: 193px) 100vw, 193px" />

  <p id="caption-attachment-3808" >
    fill your desktop with icons
  </p>
</div>


So they give you a little tool for every functionality.

-PicoScope: here you have only one installation and one icon


<div id="attachment_3809" style="width: 145px" >
  <img aria-describedby="caption-attachment-3809" loading="lazy" src="/assets/2016/04/2016-04-28_22h44_24.jpg" alt="single icon"    />

  <p id="caption-attachment-3809" >
    single icon
  </p>
</div>

### Software

##### Connection

-Bitscope: no auto connection, user has to find the right USB serial com port and assign it every time. If the port is not between 1-10, the software can not reach the device at all.
-PicoScope: auto connection via USB

##### Signal Generator

The nice way to test the scopes capabilities is to turn its signal generator on and to read the signal back to an input.

-Bitscope:
As you can see here the wave form generator function is a little limited, I was unable to change the pulse duty cycle and the voltage levels. There is also no sweep functionality.


<div id="attachment_3812" style="width: 702px" >
  <img aria-describedby="caption-attachment-3812" loading="lazy" src="/assets/2016/04/2016-04-30-10h32_55.gif" alt="BitScope - wave form generator"    />

  <p id="caption-attachment-3812" >
    BitScope - wave form generator
  </p>
</div>

-PicoScope:
PicoScopes wave form generator function is quite nice. There are the normal sinus, ramp and square waveforms. You can also change the frequencies, voltage levels and offsets. In the sweep mode you can state the start, stop and the increment frequencies.


<div id="attachment_3804" style="width: 930px" >
  <img aria-describedby="caption-attachment-3804" loading="lazy" src="/assets/2016/04/2016-04-27-20h12_08.gif" alt="PicoScope - Software"    />

  <p id="caption-attachment-3804" >
    PicoScope - Software
  </p>
</div>


PicoScopes signal generator also has a AWG function (Arbitrary Waveform Generator). Quite a nice tool. Here you can create the wave form you exactly need in your design.


<div id="attachment_3813" style="width: 733px" >
  <img aria-describedby="caption-attachment-3813" loading="lazy" src="/assets/2016/04/awg_picoscope.jpg" alt="AWG PicoScope"    srcset="/assets/2016/04/awg_picoscope.jpg 723w, /assets/2016/04/awg_picoscope-300x195.jpg 300w" sizes="(max-width: 723px) 100vw, 723px" />

  <p id="caption-attachment-3813" >
    AWG PicoScope
  </p>
</div>

### Conclusion

If you would ask me which scope I would recommend I would definitely say, the PicoScope. Both scopes nearly have the same price tag. But they do come in quite a different functionality and maturity of their software. The PicoScope software is so rich in its functionality, so I will post more about it in the near future.
