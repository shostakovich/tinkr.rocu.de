---
id: 267
title: 'Neues Projekt: LED-Flitzer 1.0'
date: 2009-02-28T18:11:30+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=267
permalink: /blog/neues-projekt-led-flitzer-10/
thumbnail:
  - http://tinkr.de/wp-content/uploads/2009/02/led_flitzer_2-300x191.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:270;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Allgemeines
tags:
  - ATmega8
  - AVR
  - Beschleunigungssensor
  - LED-Flitzer
  - POV
---
Es ist vollbracht: der erste Prototyp des LED-Flitzers funktioniert. Was ist das, was kann das? Viele kennen bestimmt die kleinen LED-Gadgets, die dem Anschein nur Blinken, aber wenn sie bewegt werden, Texte anzeigen. Das Stichwort ist hier POV, aber keine Ahnung, was das hier heißt, ich kenne nur die Abk. für Point of View.

Dann schauen wir uns doch gleich mal an, was mein kleiner LED-Flitzer so schreiben kann:
[<img loading="lazy" src="/assets/2009/02/led_flitzer_2-300x191.jpg" alt="Led-Flitzer POV" title="Led-Flitzer POV" width="300" height="191" class="alignnone size-medium wp-image-268" />](/assets/2009/02/led_flitzer_2.jpg)

Bewegt man die Platine etwas langsamer, schaut das Ganze dann so aus:
[<img loading="lazy" src="/assets/2009/02/led_flitzer_1-300x209.jpg" alt="Led-Flitzer POV, Platine" title="Led-Flitzer POV, Platine" width="300" height="209" class="alignnone size-medium wp-image-269" />](/assets/2009/02/led_flitzer_1.jpg)

Nun die Platine im Detail:
[<img loading="lazy" src="/assets/2009/02/led_flitzer_0-300x199.jpg" alt="Led-Flitzer POV Platine" title="Led-Flitzer POV Platine" width="300" height="199" class="alignnone size-medium wp-image-270" />](/assets/2009/02/led_flitzer_0.jpg)

Die Steuerung übernimmt ein ATmega8, der 8 LEDs ansteuert. Neben dem Mikrocontroller ist noch Platz für einen Beschleunigungssensor, der registrieren soll, ob der Flitzer bewegt wird oder nicht und bei Bewegung dann die Ausgabe aktiviert. Auf der Unterseite ist noch eine USB-Anbindung vorgesehen, mit dieser könnten später komfortabel neue Texte aufgespielt werden.
