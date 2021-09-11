---
id: 2472
title: 'Arduino: neues vom Weather-Shield'
date: 2011-07-20T22:13:28+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=2472
permalink: /blog/arduino-neues-vom-weather-shield/
thumbnail:
  - http://tinkr.de/wp-content/uploads/2011/07/weather_shield_sml.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:2476;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Allgemeines
  - Basteln
  - Gebasteltes
  - Schaltungen/ICs
  - Technik
tags:
  - Arduino
  - Arduino Shield
  - BMP085
  - Bosch
  - Drucksensor
  - Weather Shield
---
Eigentlich könnte alles so einfach sein, aber wenns so einfach wäre, könnte es ja jeder, z.B. Elektronik entwickeln. 😉
So zieht sich die Fertigstellung der Hardware des Weather-Shield für die Arduino-Plattform schon wieder ein paar Monate hin.

<img loading="lazy" src="/assets/2011/07/weather_shield.jpg" alt="" title="Arduino Weather-Shield"    srcset="/assets/2011/07/weather_shield.jpg 606w, /assets/2011/07/weather_shield-240x180.jpg 240w" sizes="(max-width: 606px) 100vw, 606px" />

Der Schuldige ist auch ausgemacht, es ist der Barometrische Luftdrucksensor BMP085 von Bosch. (Der Baustein über dem Positionsdruck [zirc.de](http://zirc.de) - der Short-URL von tinkr.de) Dieser zeigt sich ein wenig divenhaft, was das Löten betrifft. Mehrere Versuche unter dem Mikroskop und schließlich mit dem Heissluft-Föhn waren nötig, damit die [Software-Treiber](http://bildr.org/2011/06/bmp085-arduino/) endlich auf den Baustein zugreifen konnte.
Leider stellte sich dann heraus, dass der Baustein defekt zu sein scheint. Er zeigt nämlich dauernd konstant etwa 1500hPa und 210°C an. Die Werte änderten sich auch nicht. Es könnte sein, dass der Baustein entweder die vielen Lötversuche oder das Waschen mit dem Platinenreiniger nicht vertragen hat.

Der Baustein musste abermals getauscht werden und scheint nun auch einigermaßen richtig zu funktionieren, wir man an dieser Plot der seriellen Schnittstelle zeigt:

<img loading="lazy" src="/assets/2011/07/weather_shield_serial.png" alt="" title="Arduino Weather Shield - serial data"    />

Daher folgende Tipps zum Löten des Bausteins BMP085:
- nicht mit Leiterplatten-Reiniger oder sonstigen Flüssigkeiten die Platine waschen
- möglichst mit Heißluft-Föhn oder Ofen das Bauteil auflöten.
- am besten vorher Pads von unten her hauchdünn verzinnen
