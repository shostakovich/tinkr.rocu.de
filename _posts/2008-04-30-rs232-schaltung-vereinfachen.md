---
id: 34
title: RS232-Schaltung vereinfachen
date: 2008-04-30T23:26:49+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=34
permalink: /blog/rs232-schaltung-vereinfachen/
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:35;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Allgemeines
  - Schaltungen/ICs
tags:
  - MAX232
  - MAX3233
  - MAX3235
  - RS232
---
In den meisten Mikrocontroller-Designs ist immer noch der betagte MAX232 als Wandlerbaustein zu finden. Er benötigt in der Regel fünf Elkos, die sich nicht nur in den Bauteilkosten und im Leiterplattenplatz bemerkbar machen.

[<img loading="lazy" src="/assets/2008/04/rs232-300x212.png" alt="RS232-Bausteine MAX232, MAX3233/MAX3235" title="rs232"    />](/assets/2008/04/rs232.png)

In einer meinen aktuellen Schaltungen verwende ich den MAX3233 als Ersatz für den MAX232. Der MAX3233 kommt ganz ohne Elkos aus. Nur der obligatorische 100nF Kondensator zwischen Vcc und GND sollte nicht vergessen werden. Die Forceon- und Forceoff-Pins sollten ebenfalls Beachtung im Design finden, sonst bleiben die Ausgänge des Bausteins stumm.
Der MAX3233 ist für 3V und 3,3V und der MAX3235 für 5V Schaltungen geeignet.

Links:
MAX3233/MAX3235: <http://www.maxim-ic.com/max3233>
MAX232: <http://www.maxim-ic.com/max232>

_Copyright Maxim Integrated Products (<http://www.maxim-ic.com>). Used by permission._
