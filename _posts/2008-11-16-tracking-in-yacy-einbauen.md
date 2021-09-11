---
id: 459
title: Tracking in YaCy einbauen
date: 2008-11-16T11:04:03+00:00
author: SES
layout: post
guid: http://web2.0du.de/?p=100
permalink: /blog/tracking-in-yacy-einbauen/
thumbnail:
  - http://farm1.static.flickr.com/194/440397143_27d929be46_m.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";b:0;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - YaCy
tags:
  - Blog
  - Bookmarks
  - Proxy
  - Template
  - YaCy
---
Vor einigen Tagen hatte ich bereits über YaCy berichtet. Ganz vergessen dabei hatte ich, das YaCy neben seiner eher offensichtlichen Funktionalität auch noch weitere Vorteile für den stolzen Besitzer eines eigenen kleinen Homeservers birgt.

So liefert YaCy einen echten eigenen kleinen Caching-Proxy, der bei richtiger Konfiguration das gesamte kleine Netzwerk zu Hause mit seinen Diensten versorgen kann, ausserdem kann YaCy als kleiner kollektiver Bookmarkmanager verwendet werden, bietet ein Blog und ein kleines Wiki, sowie ein Verzeichnis in das statische Dateien über den YaCy-Webserver verteilt werden können.

<div style="width: 510px" >
  <a href="http://www.flickr.com/photos/supeermario/"><img loading="lazy" title="Suchmaschine" src="http://farm4.static.flickr.com/3289/2737412505_3abbda8f75.jpg" alt="Suchmaschine von Supeermario (Flickr)"   /></a>

  <p >
    Suchmaschine von Supeermario (Flickr)
  </p>
</div>

Nun habe ich zwar nicht vor, mein Blog zu YaCy umzuziehen aber immerhin habe ich heute YaCy mal neben dem Port 8080 auch den Port 80 gegeben hier zu Hause und eine eigene IP. Die Suche ist also [hier hin umgezogen](http://yacy.web2.0du.de/).

(UPDATE: jetzt liegt YaCy auf meinem Webserver (http://tinkr.de:8080))

Evtl. packe ich in das Verzeichnis http://yacy.web2.0du.de/www/, wenn ich die Zeit finde eine kleine Webseite über YaCy hinein.

Nach der ganzen Arbeit nahm allerdings mal wieder mein ausgeprägter Drang hinaus meine Besucher &#8222;auszuspionieren&#8220; überhand. Daher habe ich den Tracking-Code von Etracker in mein YaCy-Frontend mit hineingeflochten. Wenn man sich dabei zivilisiert verhält, kann man nichts kaputt machen.

Kopiert wird der Code ganz einfach in YACYROOT/htroot/env/templates/footer.template .  Nützlich wäre hier evtl. ein kleines Feld im Backend, in das man solchen Code einfach reinpasten kann.

Wer näheres über YaCy erfahren wil, probiert es am besten gleich aus:

<http://www.yacy.net/>
