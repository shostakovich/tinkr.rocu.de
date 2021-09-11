---
id: 3183
title: Raspberry Pi Stress Test
date: 2013-01-27T13:18:28+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=3183
permalink: /blog/raspberry-pi-stress-test/
thumbnail:
  - http://tinkr.de/wp-content/uploads/2013/01/raspberry_pi_IR_sml_2.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:3193;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Allgemeines
  - Basteln
  - Technik
tags:
  - load test
  - Raspberry Pi
  - stress test
  - thermal image
  - thermal shot
---
We want to host a few of our blogs here at home. Before we start and build a rack to hold all of the Raspberry Pi&#8217;s required, we want to make sure that there are not thermal problems.

Thats why we wanted to stress test one of them.

We used the program stress to generate some load.

We did not however not use the HD option, because we did not want to damage the SD card.

[code]
sudo apt-get install stress
stress -cpu 5 -io 5 -vm 5 -vm-bytes 10M -timeout 3600s
=> stress: info: [11496] dispatching hogs: 5 cpu, 5 io, 5 vm, 0 hdd
```

After a minutes the load average climbed up to 15.

<img loading="lazy" src="/assets/2013/01/raspberry_pi_stresstest.jpg" alt="raspberry_pi_stresstest" width="606" height="385" class="alignnone size-full wp-image-3184" />

We waited for around 30 minutes and took an image of our tortured little Raspberry PI (right), next to one that just runs idle (left).

Here is the image.

<img loading="lazy" src="/assets/2013/01/raspberry_pi_IR_comparision_1.jpg" alt="Raspberry Pi, thermal shot, under load (right), idle (left)" title="Raspberry Pi, thermal shot, under load (right), idle (left)" width="600" height="600" class="size-full wp-image-3191" srcset="/assets/2013/01/raspberry_pi_IR_comparision_1.jpg 600w, /assets/2013/01/raspberry_pi_IR_comparision_1-120x120.jpg 120w" sizes="(max-width: 600px) 100vw, 600px" />

As you notice theres no big difference between the two (about 4°C) and it should be fine to put a few of them next to each other.
