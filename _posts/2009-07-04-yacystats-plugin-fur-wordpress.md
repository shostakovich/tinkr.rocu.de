---
id: 917
title: YaCyStats-Plugin für WordPress
date: 2009-07-04T18:21:21+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=917
permalink: /blog/yacystats-plugin-fur-wordpress/
thumbnail:
  - http://tinkr.de/wp-content/uploads/2009/07/yacy_stats.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:921;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - PHP 5
  - YaCy
tags:
  - PHP
  - Plugin
  - Statistiken
  - Widget
  - Wordpress
  - YaCy
---
Seit dem ich das letzte mal über [YaCy die verteilte Suchmaschine](http://www.yacy.net) geblogt habe, hat sich einiges getan. Ich habe sehr viel Zeit mit der Pflege und Wartung meines Peers zugebracht und durfte mit ansehen, wie YaCy immer stabiler wurde.

Inszwischen ist YaCy in der Version 0.91 und das spürt man. Die Performance hat sich nach einer Umstellung auf die [neue IndexCell Datenstruktur](http://forum.yacy-websuche.de/viewtopic.php?f=5&t=1940) vervielfacht. Die Suche wurde optisch und Funktional wunderbar durch ein wenig Javascript aufgewertet. Man muss seinen Peer nicht mehr alle paar Stunden neustarten: Kurz es macht immer mehr Spaß YaCy zu benutzen.

<img loading="lazy" class="alignleft size-full wp-image-920" title="yacy_stats" src="/assets/2009/07/yacy_stats.jpg" alt="yacy_stats" width="293" height="218" /> Nun lenkt YaCy aber natürlich auch ein wenig vom Bloggen ab und daher habe ich mir mal ein paar  Stunden Zeit genommen und schnell ein kleines WordPress-Plugin zusammengestrickt. Es zeigt den Status eines YaCy Peers in einem WordPress-Widget an und kann in jedem Theme benutzt werden, dass Widgets unterstützt.

Die Daten bezieht das Plugin über die in YaCy integrierte API und benutzt SimpleXML um sie aus der Antwort zu picken.

Um den Peer nicht mit sinnlosen anfragen zu belasten und die Antwortzeiten des Blogs gering zu halten, werden die Statistiken für einen selbst einstellbaren Zeitraum in der Blogdatenbank zwischengespeichert.

Angezeigt werden der Name des Peers, PPM,Wörter und die Anzahl der indexierten URLs.

Das Plugin läuft bei mir stabil - wie immer übernehme ich aber keine Gewähr für perfektes funktionieren, helfe aber gerne bei Fehlern weiter und freue mich über eure Kommentare, Patches oder Anregungen.

Entgegen der sonst bei Zipfelmaus üblichen Lizenz steht das Plugin  unter [GNU General Public License (Version 3)](http://www.gnu.de/documents/gpl.de.html) um später von WordPress.org gehostet werden zu dürfen.

### Version-History

#### Version 0.1.1 Alpha

- Unterdrücke PHP-Warnung, wenn Peer nicht erreichbar
- Bug beghoben, bei dem das Widget möglw. nicht ausgeblendet wird, wenn Peer nicht erreichbar

**Download:**  [yacyPlugin_0.1.1.php](/assets/2009/07/yacyPlugin_0.1.1.php.zip)

#### Version 0.1 Alpha

- Hinzufügen von Konfigurationsmöglichkeiten für die URL des Peers und die Zeit des vorhaltens der Ergebnisse im lokalen Cache
**Download:** [yacyStatsPlugin_0.1](/assets/2009/07/yacyPlugin_0.1.php.zip)
