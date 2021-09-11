---
id: 488
title: PithHelmet unter Safari 4 Beta installieren
date: 2009-03-18T21:47:58+00:00
author: SES
layout: post
guid: http://web2.0du.de/?p=427
permalink: /blog/pithhelmet-unter-safari-4-beta-installieren/
thumbnail:
  - http://web2.0du.de/pictures/pithHelmet_thumb.png
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";b:0;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Weiche Ware
tags:
  - Addons
  - Installation
  - Mac OS X
  - Safari
  - Safari 4
---
Für alle die es nicht wissen sollten: Auch für Safari gibt es Addons. Eine gute Einführung dazu gibt es unter [pimpmysafari.com](http://pimpmysafari.com/). Ich bin kein großer Addon-Narr aber PithHelmet benutze ich dennoch schon seit einigen Jahren.
<img loading="lazy" alt="" src="http://web2.0du.de/pictures/pithHelmet.png" title="PithHelmet unter Safari 4"    />

PithHelmet ist ein ziemlich genialer und effizienter Werbeblocker. Leider versagt das Plugin mit dem sympatischen Tropenhelm unter Safari 4 seinen Dienst, was sich allerdings zum Glück verhältnismäßig leicht beheben lässt. Hier eine kurze Schritt-für-Schritt Anleitung:

  * [PithHelmet 2.8.4 herunterladen](http://www.culater.net/software/PithHelmet/PithHelmet.php)
  * Per Doppelklick entpacken
  * Rechtsklick auf **PithHelmet.mpk**g und **Paketinhalt zeigen** wählen
  * In der Datei Content/distribution.dist den Funktionskörper pithhelmet\_install\_check durch **function pithhelmet\_install\_check() {return true;}** ersetzen und nicht schmunzeln dabei
  * PithHelmet installieren
  * Paketinhalt von Library/Application Support/SIMBL/Plugins/PithHelmet.bundle anzeigen lassen
  * Dort die Datei Contents/Info.plist öffnen
  * Die Zahl unter MaxBundleVersion durch 5528 (das aktuelle Build von Safari) ersetzen
  * Freuen

Ich gehe davon aus, dass das mit an Sicherheit grenzender Wahrscheinlichkeit auch bei Saft und anderen Plugins für Safari funktionieren wird..

Zum Schluss bleibt mir nur euch zu bitten: Wenn ihr PithHelmet benutzt, spendet die 5 Dollar, die der Entwickler gerne hätte 🙂 Ich finde das Plugin ist den Betrag mehr als wert und von den Kleinen klauen ist nicht nett.
