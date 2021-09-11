---
id: 456
title: 'Yacy - Eine verteilte Suchmaschine'
date: 2008-11-13T23:22:09+00:00
author: SES
layout: post
guid: http://web2.0du.de/?p=53
permalink: /blog/yacy-eine-verteilte-suchmaschine/
thumbnail:
  - http://www.rocket-turtle.de/images/thumbs/yacy.png
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";b:0;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Gebasteltes
  - Webkram
  - YaCy
tags:
  - CPU
  - Crawler
  - Feed
  - Grafiken
  - Java
  - P2P
  - RSS
  - Suchmaschine
  - Traffic
  - Weltspion
  - YaCy
---
Vor einigen Tagen haben wir auf YiGG den [Weltspion](http://www.yigg.de/weltspion/alles) eingeführt. Die Arbeit daran hat uns allen viel Spaß bereitet, da neben dem PHP-Teil auch eine JAVA-Anwendung geschrieben werden musste, die in regelmäßigen Abständen RSS-Feeds nach neuen Einträgen abgrast.

Nebenher mussten tausende RSS-Feeds kategorisiert werden. Das ganze Team war eine schöne Zeit beschäftigt.

Herausgekommen ist eine Anwendung, die live Anzeigt was gerade in der Welt passiert.

Das Kapital einer solchen Anwendung sind natürlich die RSS-Feeds, die abgeklappert werden. Da mein persönlicher virtueller Dunstkreis doch recht klein ist, habe ich nach einer automatisierten Lösung dafür gesucht neue RSS-Feeds zu finden und bin dabei auf [YaCy](http://yacy.net/), eine P2P Suchmaschine gestoßen.


[YaCy Demonstration 2007](http://vimeo.com/991332) von [Michael Christen](http://vimeo.com/yacy) auf [Vimeo](http://vimeo.com).

Seit etwa einer Woche benutze ich YaCy und mein MacBook grast sich langsam aber sicher durchs Internet. Nach dem Starten des Java-Crawlers kann man auf einer Webseite das geschehen beobachten.Das ganze sieht dann so aus:

<img loading="lazy"  title="Meine YaCy-Statistik (Live)" src="http://tinkr.de:8080/Banner.png?textcolor=ffffff&bgcolor=000000&bordercolor=aaaaaa" alt=""   />

<img loading="lazy"  title="Aktueller Status des YaCy-Netzwerks" src="http://tinkr.de:8080/NetworkPicture.png?width=606&height=320&bgcolor=000000" alt=""   />

Das lustige und tolle daran, diese Grafiken werden Live von YaCy erstellt und man kann sie überall einbinden.

Ein weiteres gelungenes Feature ist die Internet-Visualisierung, die aus dem eigenen Index Bilder von der Linkstruktur belibieger Webseiten bauen kann.

Bemerkenswert ist, das YaCy verhältnismäßig wenig Traffic erzeugt und nicht besonders CPU-hungrig ist.

Mein persönliches Fazit: Ich kann mir schön RSS-Feeds aus dem Index ziehen und YaCy darf dafür schön weiterwerkeln.  Neben allen Vorteilen gibt es natürlich noch die völlig unzensierte verteilte Suche. Wer es ausprobieren möchte, den lade ich ein sich bei [Web 2.0 Dudes YaCy-Suche](http://web2.0du.de:8080) umzusehen.
