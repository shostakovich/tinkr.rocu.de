---
id: 524
title: 'Gerade in Arbeit: das Moodlamp-Projekt'
date: 2009-04-13T17:53:41+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=524
permalink: /blog/gerade-in-arbeit-das-moodlamp-projekt/
thumbnail:
  - http://tinkr.de/wp-content/uploads/2009/04/moodlight_platine_sml240.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:532;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Allgemeines
tags:
  - Atmega16
  - ATmega8
  - Freescale
  - Moodlamp
  - MPR083
  - RGB-LED
  - Touchwheel
---
<img loading="lazy" src="/assets/2009/04/moodlight_platine_sml.jpg" alt="Moodlight-Platine" title="Moodlight-Platine" width="606" height="455" class="alignleft size-full wp-image-525" srcset="/assets/2009/04/moodlight_platine_sml.jpg 606w, /assets/2009/04/moodlight_platine_sml-300x225.jpg 300w" sizes="(max-width: 606px) 100vw, 606px" />

Ja genau, das hat gerade noch gefehlt, das tausenste Moodlamp-Projekt auf diesem Planeten. Bevor nun wieder die Unken kommen und rufen, will ich gleich einmal klarstellen, so schlecht wird die Lampe nämlich gar nicht. Statt mit kleinen Mini-LED-Funzeln rumzubasteln, werden in der fertigen Lampe 3x3W RGB-LEDs ihren Dienst leisten (oben im Bild ist nur eine 3W-RGB-LED angeschlossen). Und eine schicke Fernbedienung via IR soll es auch geben. Ein kapazitives Touchwheel soll die Bedienung der Fernbedienung in ihrer Einfachheit dem Ipod nachempfinden.

Hier die noch nackerten Fernbedienungsplatinen:
<img loading="lazy" src="/assets/2009/04/moodlight_remote.jpg" alt="Moodlight Fernbedinungs-Platinen" title="Moodlight Fernbedinungs-Platinen" width="606" height="347" class="alignleft size-full wp-image-526" srcset="/assets/2009/04/moodlight_remote.jpg 606w, /assets/2009/04/moodlight_remote-300x171.jpg 300w" sizes="(max-width: 606px) 100vw, 606px" />

Die Steuerung übernimmt ein ATmega16, der mit Hilfe von PWM die drei Leistungstransistoren (für jede Farbe einen) ansteuert. Mit der Fernbedienung auf der ein ATmega8 und ein kapazitiver Touchsensor MPR083 von Freescale verbaut sind, sollen dann Farbe und Helligkeit eingestellt werden können.
