---
id: 1568
title: Ein 3D-Scanner für (Fast-)Arme
date: 2010-04-18T15:14:45+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=1568
permalink: /blog/ein-3d-scanner-fur-fast-arme/
thumbnail:
  - http://c1252712.cdn.cloudfiles.rackspacecloud.com/5_bidir_high_haus_sml.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:1579;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Allgemeines
  - Basteln
tags:
  - 3D-Scan
  - Arm-Roboter AL5D
  - Lynxmotion
---
Den Arm-Roboter AL5D von Lynxmotion haben wir schon in der vergangenen Woche vorgestellt. Mit einem kleinen Upgrade durch einen Sharp-Entfernungsensor GP2D12, verwandeln wir den Roboter in einen 3D-Scanner. Viel programmieren müssen wir auch nicht, da die RIOS-Software des Arm-Roboters schon alles mitbringt.

<img loading="lazy" src="/assets/2010/04/screeshot_rios_3dscan.png" alt="" title="Screeshot RIOS 3D-Scan Tool"    srcset="/assets/2010/04/screeshot_rios_3dscan.png 606w, /assets/2010/04/screeshot_rios_3dscan-300x238.png 300w" sizes="(max-width: 606px) 100vw, 606px" />

Der Entfernungssensor wird an der Hand des Roboters fixiert, die drei Kabel (Vcc, GND und V_out) werden zum SSC32-Servocontroller-Board geführt und an den Stecker J3 angeschlossen (siehe Manual SSC32-Servocontroller).

<img loading="lazy" src="/assets/2010/04/021.jpg" alt="" title="Sharp-Entfernungsensor GP2D12 auf Roboter-Arm-Hand montiert"    srcset="/assets/2010/04/021.jpg 606w, /assets/2010/04/021-300x200.jpg 300w" sizes="(max-width: 606px) 100vw, 606px" />

Der Scan-Aufbau sieht so aus:
[<img loading="lazy" src="/assets/2010/04/015.jpg" alt="" title="abgescanntes Haus-Modell"    srcset="/assets/2010/04/015.jpg 606w, /assets/2010/04/015-300x200.jpg 300w" sizes="(max-width: 606px) 100vw, 606px" />](/assets/2010/04/015.jpg)

Diese Scans zeigen das Haus in unterschiedlichen Auflösungsstufen:
- low Resolution
<img loading="lazy" src="/assets/2010/04/4_bidir_low_haus.jpg" alt="" title="3D-Scan, Haus, bidirektional, low Resolution"    srcset="/assets/2010/04/4_bidir_low_haus.jpg 256w, /assets/2010/04/4_bidir_low_haus-150x150.jpg 150w" sizes="(max-width: 256px) 100vw, 256px" />
- medium Resolution
<img loading="lazy" src="/assets/2010/04/3_bidir_norm_haus.jpg" alt="" title="3D-Scan, Haus, bidirektional, medium Resolution"    srcset="/assets/2010/04/3_bidir_norm_haus.jpg 256w, /assets/2010/04/3_bidir_norm_haus-150x150.jpg 150w" sizes="(max-width: 256px) 100vw, 256px" />
- high Resolution
<img loading="lazy" src="/assets/2010/04/5_bidir_high_haus.jpg" alt="" title="3D-Scan, Haus, bidirektional, high Resolution"    srcset="/assets/2010/04/5_bidir_high_haus.jpg 256w, /assets/2010/04/5_bidir_high_haus-150x150.jpg 150w" sizes="(max-width: 256px) 100vw, 256px" />
Hierzu waren drei einzelne Scans notwendig, die Scanzeit ist proportional zur Auflösung, bei der kleinsten Auflösung dauert der Scan ca. 1,5min, bei der höchsten schon fast eine halbe Stunde.

### Literatur:

Manual RIOS-Software: [[Link]](http://www.lynxmotion.com/images/data/rios106h.pdf), Seite 23: 3D Scanner,
Manual SSC32-Servocontroller: [[Link]](http://www.lynxmotion.com/images/data/ssc-32.pdf), Seite 14 Schematic
Datenblatt Sharp-Entfernungsensor GP2D12: [[Link]](http://www.acroname.com/robotics/parts/SharpGP2D12-15.pdf)
