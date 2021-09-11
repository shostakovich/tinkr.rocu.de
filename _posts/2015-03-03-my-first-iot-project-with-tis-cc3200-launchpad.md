---
id: 3648
title: my first IOT project with TIs CC3200 LaunchPad
date: 2015-03-03T20:34:04+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=3648
permalink: /blog/my-first-iot-project-with-tis-cc3200-launchpad/
thumbnail:
  - http://tinkr.de/wp-content/uploads/2015/03/cc3200_launchpad_sml.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:3652;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Allgemeines
tags:
  - CC3200
  - exosite
  - IOT
  - LaunchPad
  - Texas Instruments
  - TI
---
Headlines with _IOT_ or the _Internet of Things_ can be found everywhere. I was curious too. So I ordered TIs _CC3200 LaunchPad_ - an interesting IOT platform.

<div id="attachment_3650" style="width: 616px" class="wp-caption alignnone">
  <img aria-describedby="caption-attachment-3650" loading="lazy" src="/assets/2015/03/cc3200_launchpad.jpg" alt="CC3200 Launchpad" width="606" height="367" class="size-full wp-image-3650" />

  <p id="caption-attachment-3650" class="wp-caption-text">
    CC3200 Launchpad
  </p>
</div>

TI partnered with several service providers to help you to bring your device online. Namely: 2lemetry, Arrayent, Exosite, IBM and Xively.

After a quick review over all service providers I tried Exosite: [https://support.exosite.com/hc/en-us/articles/202271424-CC3200-Wi-Fi-Launchpad](https://support.exosite.com/hc/en-us/articles/202271424--CC3200-Wi-Fi-Launchpad)

While I followed the steps, there were some issues with the UniFlash tool - I had to do a full erase first, before I could continue.
The other issue is the SOP2 header, you have to attach and de-attach it during the programming process. Just be sure to read the steps very carefully, otherwise the program won&#8217;t start, e.g. if you have the SOP2 header populated.

Finally after a few hours I finally got it running. Now I can monitor the boards temperature, set an LED and see if the boards accelerometer has been triggered.

<div id="attachment_3652" style="width: 616px" class="wp-caption alignnone">
  <img aria-describedby="caption-attachment-3652" loading="lazy" src="/assets/2015/03/exosite_iot.jpg" alt="Exosite IOT website" width="606" height="498" class="size-full wp-image-3652" />

  <p id="caption-attachment-3652" class="wp-caption-text">
    Exosite IOT website
  </p>
</div>
