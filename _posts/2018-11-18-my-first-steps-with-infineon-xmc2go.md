---
id: 3860
title: My first steps with Infineons XMC2GO
date: 2018-11-18T17:44:55+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=3860
permalink: /blog/my-first-steps-with-infineon-xmc2go/
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:3867;s:11:"_thumb_type";s:5:"thumb";}'
layout_key:
  - ""
post_slider_check_key:
  - "0"
image: http://tinkrde.test.mug.im/wp-content/uploads/sites/7/2018/11/XMC_03.jpg
categories:
  - Schaltungen/ICs
  - Technik
  - Uncategorized
tags:
  - Infineon
  - IOT
  - Sensors
  - XENSIV
  - XMC1100
  - XMC2GO
---
During the Electronica 2018 Fair in Munich Infineon was very kind and provided me with a brand new XENSIV Sensors IOT Box. This box is not yet available on the market and will launch probably in Q1/2019.

The box features the XMC2GO and XMC1000 bootkit (an Arduino Uno sized ARM Cortex MCU board) as MCU modules and many sensor boards that I will cover in another article.

<div id="attachment_3867" style="width: 810px" class="wp-caption alignnone">
  <img aria-describedby="caption-attachment-3867" loading="lazy" class="size-full wp-image-3867" src="/assets/2018/11/XMC_03.jpg" alt="XENSIV Sensors - Getting Started Box IOT from Infineon" width="800" height="529" srcset="/assets/2018/11/XMC_03.jpg 800w, /assets/2018/11/XMC_03-300x198.jpg 300w, /assets/2018/11/XMC_03-768x508.jpg 768w" sizes="(max-width: 800px) 100vw, 800px" />

  <p id="caption-attachment-3867" class="wp-caption-text">
    XENSIV Sensors - Getting Started Box IOT from Infineon
  </p>
</div>

<div id="attachment_3865" style="width: 810px" class="wp-caption alignnone">
  <img aria-describedby="caption-attachment-3865" loading="lazy" class="size-full wp-image-3865" src="/assets/2018/11/XMC_01.jpg" alt="XENSIV Sensors Box - Content" width="800" height="597" srcset="/assets/2018/11/XMC_01.jpg 800w, /assets/2018/11/XMC_01-300x224.jpg 300w, /assets/2018/11/XMC_01-768x573.jpg 768w" sizes="(max-width: 800px) 100vw, 800px" />

  <p id="caption-attachment-3865" class="wp-caption-text">
    XENSIV Sensors Box - Content
  </p>
</div>

<div id="attachment_3866" style="width: 810px" class="wp-caption alignnone">
  <img aria-describedby="caption-attachment-3866" loading="lazy" class="size-full wp-image-3866" src="/assets/2018/11/XMC_02.jpg" alt="XMC2GO Module" width="800" height="600" srcset="/assets/2018/11/XMC_02.jpg 800w, /assets/2018/11/XMC_02-300x225.jpg 300w, /assets/2018/11/XMC_02-768x576.jpg 768w" sizes="(max-width: 800px) 100vw, 800px" />

  <p id="caption-attachment-3866" class="wp-caption-text">
    XMC2GO Module
  </p>
</div>

Today I wanted to get the XMC2GO module connected to my PC and to download a new demo program via the Arduino IDE to the module. This article describes the necessary steps to follow along.

### Driver Installation

(I&#8217;ll assume you already have installed a >1.5 Arduino IDE on your PC/Mac.)
The integration of the XMC-platform into your Arduino IDE is quite straightforward:

To install the driver I followed the guideline here: <https://github.com/Infineon/XMC-for-Arduino>

### Checking debug connection

When connecting the XMC module for the first time with the Arduino IDE I ran into connection problems. I had to start the Segger J-Link Commander Program to see if the XMC-Module was detected or not.

START -> Segger J-Link -> J-Link Commander

The J-Link Commander tool is nice and simple. Just press „?“ and hit Enter for help and see what kind of functions this tool offers.

Then enter „USB“ - it connects to the XMC module via the J-Link interface.

<div id="attachment_3861" style="width: 989px" class="wp-caption alignnone">
  <img aria-describedby="caption-attachment-3861" loading="lazy" class="size-full wp-image-3861" src="/assets/2018/11/jlink.jpg" alt="J-Link Commander Tool" width="979" height="512" srcset="/assets/2018/11/jlink.jpg 979w, /assets/2018/11/jlink-300x157.jpg 300w, /assets/2018/11/jlink-768x402.jpg 768w" sizes="(max-width: 979px) 100vw, 979px" />

  <p id="caption-attachment-3861" class="wp-caption-text">
    J-Link Commander Tool
  </p>
</div>

During the first successful connection, the tool was asking for a firmware upgrade on the XMCs hardware debugger.

I agreed to upgrade the debugger.

After finishing the firmware upgrade I closed the J-Link Commander and return to the Arduino IDE.

### Demo app

Then I tried the RTC-Sleepmode demo app.

<div id="attachment_3862" style="width: 572px" class="wp-caption alignnone">
  <img aria-describedby="caption-attachment-3862" loading="lazy" class="size-full wp-image-3862" src="/assets/2018/11/xmc_arduinoIDE_demo_program.jpg" alt="XMC Arduino IDE_Demo program" width="562" height="493" srcset="/assets/2018/11/xmc_arduinoIDE_demo_program.jpg 562w, /assets/2018/11/xmc_arduinoIDE_demo_program-300x263.jpg 300w" sizes="(max-width: 562px) 100vw, 562px" />

  <p id="caption-attachment-3862" class="wp-caption-text">
    XMC Arduino IDE_Demo program
  </p>
</div>

The program upload was working fine. And here is the result in the UART-Window:

<div id="attachment_3863" style="width: 478px" class="wp-caption alignnone">
  <img aria-describedby="caption-attachment-3863" loading="lazy" class="size-full wp-image-3863" src="/assets/2018/11/xmc_uart.jpg" alt="XMC Uart Output" width="468" height="372" srcset="/assets/2018/11/xmc_uart.jpg 468w, /assets/2018/11/xmc_uart-300x238.jpg 300w" sizes="(max-width: 468px) 100vw, 468px" />

  <p id="caption-attachment-3863" class="wp-caption-text">
    XMC Uart Output
  </p>
</div>

### Conclusion

The first steps with the XMC2GO are pretty simple and are no big issue even for beginners.
In the upcoming weeks, I will cover the sensor modules that are included in the XENSIV Sensors IOT Box. So stay tuned.

### Update 24.11.18

There is a new Github page dealing with this IOT kit and help you to get started:
[https://github.com/Infineon/Getting\_Started\_Box_IoT](https://github.com/Infineon/Getting_Started_Box_IoT)
