---
id: 3240
title: 'ECG: measure your heartbeat'
date: 2013-03-31T16:48:12+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=3240
permalink: /blog/ecg-measure-heartbeat/
thumbnail:
  - http://tinkr.de/wp-content/uploads/2013/03/ecg_sml.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:3245;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Allgemeines
  - Basteln
  - Gebasteltes
  - Technik
tags:
  - Arduino
  - ECG
  - EKG
  - Olimex
  - OLIMEXINO-328
  - Shield
  - SHIELD-EKG-EMG
---
Its pretty interesting to measure ones heart beat. A lot of fancy analog circuitry is needed for this. But fortunately there is a Arduino shield for this: the SHIELD-EKG-EMG from Olimex.

<div id="attachment_3242" style="width: 616px" class="wp-caption alignnone">
  <img aria-describedby="caption-attachment-3242" loading="lazy" src="/assets/2013/03/ecg_olimex.jpg" alt="ECG wiring" width="606" height="766" class="size-full wp-image-3242" />

  <p id="caption-attachment-3242" class="wp-caption-text">
    ECG wiring
  </p>
</div>

### Hardware:

- EKG/EMG shield (price: ~24€), Manual: [[Link]](https://www.olimex.com/Products/Duino/Shields/SHIELD-EKG-EMG/resources/SHIELD-EKG-EMG-Revision-C.pdf)
-SHIELD-EKG-EMG-PA - passive electrode for SHIELD-EKG-EMG shield (price: ~12€)
-Olimexino-328 - Arduino Like Development Board (price: ~26€)
-some waterbased lube to improve conductivity with the electrodes

### Software:

-Olimexino-Firmware: [[Link]](https://www.olimex.com/Products/Duino/Shields/SHIELD-EKG-EMG/resources/ShieldEkgEmgDemo.zip), be sure to also install the libraries (TimerOne, FlexiTimer2), see [manual](https://www.olimex.com/Products/Duino/Shields/SHIELD-EKG-EMG/resources/SHIELD-EKG-EMG-Revision-C.pdf) for more information
-visualisation software - ElectricGuru: [[Link]](https://www.olimex.com/Products/EEG/OpenEEG/EEG-SMT/resources/ElecGuru40.zip)

### Preparation:

-OLIMEXINO-328: remove the wire between the R6 pads, this is important, otherwise you will damage your ecg-shield!
-SHIELD-EKG-EMG: jumper settings
REF_E – closed
3.3V/5V – 5V position
D4/D9 – D9 position
ANI_SEL – 1 position (channel)

-connect the shield to the board
-connect OLIMEXINO-328 to the PC
-compile and upload the ShieldEkgEmgDemo.pde
-start the ElectricGuru software, open Preferences -> Serial Port, choose the Arduinos port; open Preferences -> Trace, select just channel 1 and maximize the height
-wire yourself to the electrodes: to your right arm, left arm and the DLR to your right leg
-connect the electrodes to the ECG-shield
-apply some lube to your arms and led between the electrodes and your skin
-ElectricGuru: click the Start EEG button

### Results:

If the conductivity is bad, you might get a noisy image like this:


<div id="attachment_3245" style="width: 616px" class="wp-caption alignnone">
  <img aria-describedby="caption-attachment-3245" loading="lazy" src="/assets/2013/03/electric_guru_noise.png" alt="Electric Guru: noise" width="606" height="320" class="size-full wp-image-3245" />

  <p id="caption-attachment-3245" class="wp-caption-text">
    Electric Guru: noise
  </p>
</div>

Otherwise, if everything works fine and you are still alive, it looks like this:


<div id="attachment_3244" style="width: 616px" class="wp-caption alignnone">
  <img aria-describedby="caption-attachment-3244" loading="lazy" src="/assets/2013/03/electric_guru_ecg.png" alt="Electric Guru: ecg" width="606" height="320" class="size-full wp-image-3244" />

  <p id="caption-attachment-3244" class="wp-caption-text">
    Electric Guru: ECG
  </p>
</div>
