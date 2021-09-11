---
id: 1715
title: Wie Nerds Geld zählen
date: 2010-07-02T23:19:00+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=1715
permalink: /blog/wie-nerds-geld-zahlen/
thumbnail:
  - http://cdn.cloudfiles.mosso.com/c1952502/bild0_aufnahme_sml.png
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:1721;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Allgemeines
tags:
  - Bildverarbeitung
---
Heute hatten wir ein Seminar zum Thema Bildverarbeitung. Im Labor hatten wir Gelegenheit verschiedene kleine Übungen zur Bildverarbeitung durchzuführen. Ich habe mich an ein Thema aus dem Skript angelehnt und ein paar Münzen versucht, über Bildverarbeitung von einander zu unterscheiden:

Auf einem Durchlichtmodul wurden sechs unterschiedliche Münzen platziert (1, 2, 5, 10, 20 Cent und 1 Euro). Mit einer GigE-Kamera wurde die Münzen in Durchlichtbeleuchtung aufgenommen.
<img loading="lazy" src="/assets/2010/07/bild0_aufnahme.png" alt="" title="Kamera-Aufnahme Münzen" width="606" height="456" class="alignnone size-full wp-image-1721" srcset="/assets/2010/07/bild0_aufnahme.png 606w, /assets/2010/07/bild0_aufnahme-300x225.png 300w" sizes="(max-width: 606px) 100vw, 606px" />

Das Histogramm sieht folgendermaßen aus:
<img loading="lazy" src="/assets/2010/07/bild2_histogramm.png" alt="" title="Histogramm Münzen" width="512" height="256" class="alignnone size-full wp-image-1718" srcset="/assets/2010/07/bild2_histogramm.png 512w, /assets/2010/07/bild2_histogramm-300x150.png 300w" sizes="(max-width: 512px) 100vw, 512px" />
Hintergrund und Münzen sind bereits sehr gut von einander zu unterscheiden (hoher Grauwertunterschied).

Anschließend wurde das Bild binarisiert:
<img loading="lazy" src="/assets/2010/07/bild1_binaer.png" alt="" title="Münzen - binarisiert" width="606" height="456" class="alignnone size-full wp-image-1717" srcset="/assets/2010/07/bild1_binaer.png 606w, /assets/2010/07/bild1_binaer-300x225.png 300w" sizes="(max-width: 606px) 100vw, 606px" />

Über einen Label-Algorithmus wurden die einzelnen Münzen gelabelt und der Umkreis mit einer ein-Pixel-breiten Linie dargestellt:
<img loading="lazy" src="/assets/2010/07/bild4_zaehlen.png" alt="" title="Münzen zählen/labeln" width="606" height="452" class="alignnone size-full wp-image-1720" srcset="/assets/2010/07/bild4_zaehlen.png 606w, /assets/2010/07/bild4_zaehlen-300x223.png 300w" sizes="(max-width: 606px) 100vw, 606px" />
Bei Label 5 und 7 kann man die typischen Ränder der 10 und 20 Cent Münzen erkennen.

Ebenso kann eine Tabelle mit den Flächen der einzelnen Münzen ausgegeben werden:

Maßeinheit: Pixel

Index Fläche Koordinaten (links,oben,rechts,unten) Schwerpunkt
1 3604,000 1,000000 1,000000 1030,000 774,0000 515,0000 387,0000
2 18701,00 400,0000 162,0000 553,0000 315,0000 476,0000 238,0000
3 23862,00 639,0000 162,0000 812,0000 336,0000 725,0000 249,0000
4 13978,00 216,0000 171,0000 348,0000 303,0000 282,0000 237,0000
5 20421,00 173,0000 391,0000 334,0000 552,0000 253,0000 471,0000
6 28624,00 626,0000 399,0000 816,0000 589,0000 720,0000 493,0000
7 26115,00 374,0000 401,0000 556,0000 583,0000 465,0000 492,0000

Alle Schritte wurden in der Software Ad Oculus ausgeführt.
