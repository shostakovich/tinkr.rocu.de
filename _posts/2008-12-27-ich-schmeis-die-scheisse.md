---
id: 165
title: 'Ich schmeiß die Schei*e aus dem Fenster naus - oder: wenns mal wieder länger dauert mit der Xilinx ISE Installation'
date: 2008-12-27T18:04:39+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=165
permalink: /blog/ich-schmeis-die-scheisse/
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";b:0;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Allgemeines
tags:
  - AVR-Webserver
  - Xilinx ISE Webpack
---
Eigentlich wollte ich schon seit 2 Stunden ein wenig VHDL für mein neues Projekt, dem AVR-Webserver, programmieren. Aber die Installation der Xilinx ISE Webpack zieht sich auf dem leicht älteren Notebook schon geschlagene drei Stunden hin.
Leider habe ich den Fehler gemacht, noch nach Updates zu suchen. Und er installiert und installiert und installiert, vermutlich bis die 160GB voll sind. Dabei hab ich doch extra schon die ollen FPGAs abgewählt, so wie in der Schule den Deutschleistungskurs. Hat nix gebracht, er installiert und installiert trotzdem und ich wurde im Deutsch-Grundkurs auch mit Faust und Co. gefoltert.
(Stand: 18:00)

Update:
18:40
Hmm, schon 31% des Updates installiert. Man geht das schnell. Da könnts vielleicht schon zur Tagesschau fertig sein.

20:01 (Tagesschauzeit)
Hmm, immer noch nicht fertig. 71%. Das dauert und dauert.

21:22
93%. Ha, das kann ja nicht mehr lange dauern.

22:15
Hu, endlich fertig. Von 15:00 bis 22:15. Das ist Rekord. Wo sind die Mädels mit den Puscheln zum Jubeln?

23:28
Das erste Projekt will kompiliert werden. Doch der Floorplaner PACE meckert nur (PACE was unable to parse the HDL source file). Ach toll. Die Herrn Xilinx-Programmierer haben immer noch nicht den Bug gefixt, damit die ISE mit Pfaden mit Leerzeichen umgehen kann. Dabei hat mir sogar die ISE vorgeschlagen, los leg mich hier an als neues Projekt. Aarrrgh!
