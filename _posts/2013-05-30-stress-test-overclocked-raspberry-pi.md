---
id: 3357
title: Thermal behavior of an overclocked Raspberry Pi
date: 2013-05-30T14:22:18+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=3357
permalink: /blog/stress-test-overclocked-raspberry-pi/
thumbnail:
  - http://tinkr.de/wp-content/uploads/2013/01/raspberry_pi_IR_sml_2.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:3377;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Allgemeines
  - Basteln
  - Schaltungen/ICs
  - Technik
tags:
  - Raspberry Pi
  - stress test
  - thermal shot
---
Recently we stress tested a Raspberry Pi and checked how hot it got [[link](http://tinkr.de/blog/raspberry-pi-stress-test/)].

We were asked to repeat this experiment, with an overclocked RasberryPi. This took a little bit longer then expected but here are the results.

## The test setup

Disclaimer: By no means did we use a nice test setup. So please take this results with a grain of salt.

The room temperate was ~20°C and the RaspberryPi laid on my wooden desktop.

We tried all overclocking presets of **raspi-config** to overclock the Raspberry Pi. We took one snapshot with an idle RaspberryPi and one under stress for each preset. Between the shot are around 20 minutes.

The pictures were taken with a Flir i3 thermal camera.

To generate the load we used Unix tool stress.

[code]
sudo apt-get install stress
stress -cpu 5 -io 5 -vm 5 -vm-bytes 10M -timeout 3600s
=> stress: info: [11496] dispatching hogs: 5 cpu, 5 io, 5 vm, 0 hdd
```

The HDD option was not turned on to avoid damage to the SD-Card.

For your reference this are the settings that raspbi-config uses for overclocking the RaspberryPi:

[code]
"None" "700MHz ARM, 250MHz core, 400MHz SDRAM, 0 overvolt"
"Modest" "800MHz ARM, 250MHz core, 400MHz SDRAM, 0 overvolt"
"Medium" "900MHz ARM, 250MHz core, 450MHz SDRAM, 2 overvolt"
"High" "950MHz ARM, 250MHz core, 450MHz SDRAM, 6 overvolt"
"Turbo" "1000MHz ARM, 500MHz core, 600MHz SDRAM, 6 overvolt"
```
(Taken directly from the <a href="https://github.com/asb/raspi-config/blob/master/raspi-config" target="_blank">source code</a>)

## The results

### None (Idle)

<img loading="lazy" src="/assets/2013/05/IR_0033.jpg" alt="Normal (Idle)" width="600" height="600" />

### None (Load)

<img loading="lazy" src="/assets/2013/05/IR_0035.jpg" alt="Normal (Load)" width="600" height="600" />

### Modest (Idle)

<img loading="lazy" src="/assets/2013/05/IR_0037.jpg" alt="Modest (Idle)" width="600" height="600" />

### Modest (Load)

<img loading="lazy" src="/assets/2013/05/IR_0039.jpg" alt="Modest (Load)" width="600" height="600" />

### Medium (Idle)

<img loading="lazy" src="/assets/2013/05/IR_0041.jpg" alt="Medium (Idle)" width="600" height="600" />

### Medium (Load)

<img loading="lazy" src="/assets/2013/05/IR_0043.jpg" alt="Medium (Load)" width="600" height="600" />

### High (Idle)

<img loading="lazy" src="/assets/2013/05/IR_0045.jpg" alt="High (Idle)" width="600" height="600" />

### High (Load)</p>

###<img loading="lazy" src="/assets/2013/05/IR_0047.jpg" alt="High (Load)" width="600" height="600" />

### Turbo (Idle)</p>

###<img loading="lazy" src="/assets/2013/05/IR_0049.jpg" alt="Turbo (Idle)" width="600" height="600" />

### Turbo (Load)</p>

###<img loading="lazy" src="/assets/2013/05/IR_0051.jpg" alt="Turbo (Load)" width="600" height="600" />

## Conclusion

![The results in a table](/assets/2013/05/raspberry_pi_graph.png)

Of course our test was really rudimentary - but I think it&#8217;s enough to get a rough idea how the RaspberryPi behaves under load.

We can see that the CPU and Ethernet chip have a nearly constant temperature in idle mode (blue and green curve), regardless of their clock speed.

On the other hand the CPU temperature increases nearly linear over the different overclocking modes up to 52.4°C.

The temperature slope of the ethernet chip however is lower then the CPU slope. We think, that the rise Ethernet chip temperature might be caused by spreaded CPU heat, not by the Ethernet chip itself.

If you take into account our low room temperature it might be a really bad idea to use your RaspberryPi over clocked in an enclosing on a hot summer day.
