---
id: 3886
title: Starting issues with the Infineon Xensiv Sensor 2Go Kit
date: 2019-01-31T22:25:27+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=3886
permalink: /blog/starting-issues-with-the-infineon-xensiv-sensor-2go-kit/
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:3889;s:11:"_thumb_type";s:5:"thumb";}'
layout_key:
  - ""
post_slider_check_key:
  - "0"
image: http://tinkrde.test.mug.im/wp-content/uploads/sites/7/2019/01/image.png
categories:
  - Basteln
  - Schaltungen/ICs
  - Technik
  - Uncategorized
tags:
  - Infineon
  - Optiga
  - Sensor2GO
  - XENSIV
  - XMC2GO
---
Starting with a new hardware platform often has its own issues. The same principle applies also to the Infineon Xensiv Sensor 2Go Kit.

Here are the issues I have encountered so far:

**Wrong silk screen:** One pin is marked as NC, but instead some functionality is connected to the pin. (Page 4 Optiga board, Pin 12).<figure >

<img loading="lazy"   src="/assets/2019/01/image.png" alt=""  srcset="/assets/2019/01/image.png 603w, /assets/2019/01/image-300x165.png 300w" sizes="(max-width: 603px) 100vw, 603px" /> </figure>

Another issue is the **documentation** itself, <g  id="5" data-gr-id="5">it&#8217;s also not <g  id="4" data-gr-id="4">error</g></g><g  id="4" data-gr-id="4"> free</g>. The Optiga Quickstart Guide tells you to connect the board to the MCU board in the wrong way. (Link: [https://www.infineon.com/dgdl/Infineon-OPTIGA%20TM%20Trust%20E%20\_Security%20Shield2Go-GS-v07\_18-EN.pdf?fileId=5546d46264a8de7e0164ace776d5417c](https://www.infineon.com/dgdl/Infineon-OPTIGA%20TM%20Trust%20E%20_Security%20Shield2Go-GS-v07_18-EN.pdf?fileId=5546d46264a8de7e0164ace776d5417c) (Date: 2018-07-17) ). They want you to make a damn short circuit between Vcc and GND. Unfortunately this error can be found in all of the current Quick Start Guides of the different 2Go boards of the Xensiv box.

<figure >

<img loading="lazy"   src="/assets/2019/01/image-1-1024x565.png" alt=""  srcset="/assets/2019/01/image-1-1024x565.png 1024w, /assets/2019/01/image-1-300x165.png 300w, /assets/2019/01/image-1-768x423.png 768w, /assets/2019/01/image-1.png 1353w" sizes="(max-width: 1024px) 100vw, 1024px" /> </figure>

The third issue I have found is, that the boards often don&#8217;t have a unique form factor and there are no markings where <g  id="109" data-gr-id="109">top</g> side is. So it&#8217;s often unclear how to connect them and to tell where the top side of the board is (e.g. Shield2Go Adapter board). So my guess the guy from Infineon telling you to connect Vcc and GND was also a little confused how to connect the boards.<figure >

<img loading="lazy"   src="/assets/2019/01/image-2-1024x527.png" alt=""  srcset="/assets/2019/01/image-2-1024x527.png 1024w, /assets/2019/01/image-2-300x154.png 300w, /assets/2019/01/image-2-768x395.png 768w, /assets/2019/01/image-2.png 1038w" sizes="(max-width: 1024px) 100vw, 1024px" /> <figcaption>Can you spot the TOP-side?</figcaption></figure>
