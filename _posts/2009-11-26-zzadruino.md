---
id: 1343
title: ZZAdruino, eine Steuerung für den ZZA
date: 2009-11-26T10:29:24+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=1343
permalink: /blog/zzadruino/
thumbnail:
  - http://cdn.cloudfiles.mosso.com/c0723082/zza_run_sml.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";b:0;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Allgemeines
tags:
  - Arduino
  - München
  - MVG
  - Ubahn
  - ZZA
---
[<img loading="lazy" src="/assets/2009/11/zza_run.jpg" alt="Zugzielanzeiger blättert" title="Zugzielanzeiger blättert"    srcset="/assets/2009/11/zza_run.jpg 606w, /assets/2009/11/zza_run-300x225.jpg 300w" sizes="(max-width: 606px) 100vw, 606px" />](/assets/2009/11/zza_run.jpg)

Die Woche habe ich dazu genutzt, mit der Arduino-Plattform ein wenig warm zu werden. Was nach ein paar Fluchen auch recht gut geklappt hat. Als erstes Projekt habe ich mir eine Steuerung für meinen U-Bahn-ZZA (Zugzielanzeiger) ausgeguckt. Allerdings sind der ZZA und der Arduino noch nicht von Haus aus kompatibel zu einander. Ohne eine kleine Transistorstufe zwischen den beiden würde der Arduino schnell zum Rauchzeichengerät werden.

<img loading="lazy" src="/assets/2009/11/zzarduino.jpg" alt="ZZArduino" title="ZZ-A-rduino"    srcset="/assets/2009/11/zzarduino.jpg 640w, /assets/2009/11/zzarduino-300x225.jpg 300w" sizes="(max-width: 640px) 100vw, 640px" />

So habe ich auf einer Lochrasterplatine eine kleine Schaltung mit einem I2C-IO-Expander (MAX6956) und 20 MOSFETS aufgebaut. Leider habe ich festgestellt, dass der olle Arduino nicht ganz so dufte für Lochrasterkarten ausgelegt ist, warum weiß ich auch nicht. Aber mit Bud Spencer-Haudrauf-Mentalität geht auch das wieder.
Und nach ein paar fiesen Bitdrehereien und Invertierung der Invertierung in der Software macht der ZZA auch das was er soll, rattarattaratta und tolle Sachen anzeigen 🙂
Die Schaltung habe ich dann ZZArduino getauft.
