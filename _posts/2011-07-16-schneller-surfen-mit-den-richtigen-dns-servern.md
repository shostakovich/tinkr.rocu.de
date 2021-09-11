---
id: 2455
title: Schneller Surfen mit den richtigen DNS-Servern
date: 2011-07-16T16:34:42+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=2455
permalink: /blog/schneller-surfen-mit-den-richtigen-dns-servern/
thumbnail:
  - http://tinkr.de/wp-content/uploads/2011/07/namebench_preview.jpg
arkayne-cache-post:
  - |

    <!-- BlogGlue Plugin Progress -->
    <!-- This page is being linked by BlogGlue. -->
    <!-- We will have related links in a few minutes. -->
    <!-- http://www.blogglue.com -->






















arkayne-time-post:
  - "1310906010"
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:2464;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Webkram
tags:
  - Benchmark
  - DNS
  - OpenDNS
  - Performance
---
Falls sich Deine Internetverbindung langsam anfühlt, kann das viele Ursachen haben.

Ein mögliches Problem sind langsame Router, die probieren DNS-Server zu spielen und dabei kläglich versagen. Dadurch kann sich selbst eine sehr schnelle Internetverbindung, sehr langsam anfühlen.

## Was ist ein DNS-Server?

Ein DNS-Server löst Hostnamen wie www.google.de in IP&#8217;s auf. Der Browser muss das bei jeder Seite machen, von der er Ressourcen laden möchte.

## Warum ist ein schneller DNS-Server wichtig?

Da die meisten Seiten nicht nur Ressourcen von einem Host enthält, sondern z.B. auch Dinge wie Google AdSense, Google Analytics, Facebook, YouTube Videos wird dieser Prozess teilweise für einen einzelnen Seitenaufruf mehrere male durchlaufen werden.

Wenn Du einen schwachbrüstigen Router hast, oder der DNS-Server vom Provider langsam ist, kann das einen großen Teil der Wartezeit ausmachen und jeder Seitenaufruf fühlt sich langsam an.

Zum Glück gibt es aber eine ziemlich einfache Methode dieses Problem zu beheben, die zudem in der Regel frei von Nebeneffekten ist.

## Was sollte ich tun?

Mein erster Vorschlag, wenn Du technisch nicht versiert bist und Dich nicht für Details interessierst:

Trage [OpenDNS](http://www.opendns.com/home) oder Google Public DNS als Deinen neuen DNS Server ein.</p>

Eine Anleitung, wie Du das machst findest Du [hier](https://store.opendns.com/setup/).

Ein netter Nebeneffekt dieser Lösung ist, dass OpenDNS und Google Public DNS einige Phishing Attacken verhindern, indem sie den DNS Server keine IP&#8217;s für diese bösen Seiten zurückgeben lassen.

Der zweite Weg ist zu Messen, welche DNS-Server-Kombination bei euch am schnellste ist.

### DNS-Benchmarking unter Mac OS X

<img loading="lazy" src="/assets/2011/07/namebench_main.png" alt="Namebench main" title="namebench_main.png" border="0" width="606" height="397" />

Das Programm Namebench testet eine recht großen Liste von öffentlichen Nameservern durch und findet die schnellsten Kandidaten für deinen Computer heraus.

Am Ende des Tests macht das Programm Vorschläge, welche DNS-Server du verwenden solltest um optimale Resultate zu erzielen.

<img loading="lazy" src="/assets/2011/07/namebench_results.png" alt="Namebench results" title="namebench_results.png" border="0" width="606" height="454" />

### DNS-Benchmarking unter Windows

Für Windows Nutzer empfehle ich ein Programm, auf dass ich etwas neidisch bin. [DNSBench von GRC](http://www.grc.com/dns/benchmark.htm). Dieses sehr schöne Programm macht in etwa das selbe wie Namebench, wirkt aber etwas polierter und auch die Auswertung am Ende gefällt mir wesentlich besser.

<img loading="lazy" src="/assets/2011/07/DNSBench.png" alt="DNSBench" title="DNSBench.png" border="0" width="606" height="687" />

Durch Steve Gibson, den Programmierer des Programms bin ich selber vor einiger Zeit auch erst auf die Problematik aufmerksam geworden.

## Ein paar warnende Worte zum Schluss

Bitte stellt sicher, dass ihr den DNS-Servern die ihr einstellt auch trauen könnt. Einen &#8222;bösen&#8220; DNS-Server einzustellen stellt ein Sicherheitsrisiko dar.

Nameserver können euch z.B. auf andere Seiten umleiten (wie es z.B. die Telekom macht, wenn ihr eine Adresse eingebt, die es nicht gibt. Oder sie können euren Computer auf böse Server weiterleiten, die sich zwischen euren Computer und den Zielserver schalten und lauschen.

Daher achtet also bitte darauf, dass ihr dem Anbieter vertraut OpenDNS, Google Public DNS, Level 3, Arcor vertraue ich z.B. - wenn ihr allerdings einen Namen nicht kennt - verzichtet lieber auf diesen Nameserver.

Und jetzt viel Spaß beim Testen..

### Links zum Thema

  * [Eine kurze Beschreibung, welche Auswirkungen langsame DNS-Server auf die Seitenladezeit haben](http://code.google.com/intl/de-DE/speed/public-dns/docs/performance.html)
  * [Infos zu DNS auf Wikipedia](http://de.wikipedia.org/wiki/Domain_Name_System)
  * Eine Anleitung, wie man andere Nameserver einstellt</li> </ul>
