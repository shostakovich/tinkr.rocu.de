---
id: 100
title: Eine neue Wetterstation ist in Sicht
date: 2008-08-15T18:49:55+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=100
permalink: /blog/eine-neue-wetterstation-ist-in-sicht/
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:101;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Allgemeines
tags:
  - Atmega32
  - AVR
  - CPLD
  - DCF77
  - VHDL
  - Wetterstation
  - XBee
  - Xilinx
---
Das Wetter ist nicht gerade so wirklich toll, also ist wieder Zeit zum Basteln angesagt. Zeit meine Wetterstation zu überarbeiten.

Was soll Sie denn nun alles können, die liebe Wetterstation? Und wie misst sie den jeweilien Wert?
Temperatur messen (MAX6633, Temperatursensor mit I2C),
Luftdruck messen (Luftdrucksensor von Freescale, analog-Out),
Feuchtigkeit messen (SHT15),
Wind messen (Bausatz mit Reedkontakt),
Helligkeit messen (Photowiderstand),
Zeit (DCF77) messen (Conrad-DCF-Empfänger)
und dann den ganzen Kram über Funk (XBee-Modul) zu mir in die Butze schicken.

Hier gibts schon einmal den Grobentwurf der Platine:

[<img loading="lazy" src="/assets/2008/08/weatherstation_overview-300x212.png" alt="" title="Wetterstation Übersicht"    />](/assets/2008/08/weatherstation_overview.png)

Neben dem Mikrocontroller, einem ATmega32L, kommt noch ein Xilinx CPLD zum Einsatz. Es wird die Signale vom DCF-Empfänger und Windmesser (Anemometer) aufbereiten. Entweder nur durch reines Entprellen oder wenn mein VHDL-Geschick groß genug, die Daten fix und fertig aufbereitet über I2C zum AVR schicken.

Für die Wetterstation habe ich nun eine eigene Seite angelegt -><http://tinkr.de/bau-dir-deine-eigene-wetterstation/>. Dort wird in den kommenden Wochen immer wieder Neues zur Wetterstation hinzugefügt.
