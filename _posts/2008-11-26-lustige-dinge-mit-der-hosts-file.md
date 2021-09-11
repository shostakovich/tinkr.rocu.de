---
id: 472
title: Lustige Dinge mit der Hosts-File
date: 2008-11-26T17:31:49+00:00
author: SES
layout: post
guid: http://web2.0du.de/?p=257
permalink: /blog/lustige-dinge-mit-der-hosts-file/
thumbnail:
  - http://cdn.cloudfiles.mosso.com/c4101/081126_hosts_thumb.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";b:0;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Webkram
tags:
  - Cache
  - DNS
  - Firefox
  - Google
  - Hosts
  - internet
  - Linux
  - Mac OS X
  - SSH
  - Unix
---
Ich bin sehr schreibfaul und so suche ich eigentlich immer nach Abkürzungen für alles. Besonders häufig nutze ich dafür meine Hosts-File, die bei Mac OS X unter /etc/hosts versteckt ist.

Diese Datei kommt aus einer Zeit, wo es das DNS-System noch nicht gab und enthielt früher alle Hostnamen, nebst der dazugehörigen IP-Adressen. Auch heute in Zeiten von DNS, gibt es diese Datei noch in jedem gängigen Betriebssystem und um daran Anderungen vorzunehmen muss man kein Raketenwissenschaftler sein.

In diesem kleinen Blogpost möchte ich euch zeigen, dass sich mit dieser Datei neben kurzen Aliasen für Domains auch noch ganz andere sinnvolle Dinge anstellen lassen, die im Repertoire eines jeden Hobbywebmasters sein sollten.

[<img loading="lazy" class="alignnone" title="Transcam / CC" src="http://cdn.cloudfiles.mosso.com/c4101/081126_hosts.png" alt="" width="606" height="477" />](http://www.flickr.com/photos/transkamp/54371294/)

## Tipp 1: Kurzalias mit der Hostfile

Vorneweg, versteht bitte was wir machen, wenn wir eine URL in die Hostfile eintragen. Wir verhindern damit nämlich, dass diese Adresse über einen Nameserver aufgelöst wird. Der berühmte Alias localhost, der auf 127.0.0.1 zeigt ist zum Beispiel in der Hostfile eingetragen.

Genau in diesem Format können nun einfach weitere Einträge vorgenommen werden. Ich muss z.B. sehr häufig auf web2.0du.de per ssh. Da die Adresse meines Blogs doch etwas schwer zu merken ist, habe ich einfach folgendes gemacht.

  * Terminal auf
  * **host web2.0du.de** -> web2.0du.de has address 92.51.134.20
  * **sudo vim /etc/hosts**
  * Passwort eingeben
  * Zeile: **92.51.134.20   web2** einfügen
  * Speichern
  * Freuen
  * **ssh web2** klappt jetzt

Naturgemäß kann man auch Webseiten in die Hostfile eintragen um sich Schreibarbeit zu ersparen, allerdings wird das ganze je nachdem ob Virtual Hosts angelegt sind nicht funktionieren.

## Tipp 2: Webseite vor dem umstellen des DNS-Eintrags testen

Vielleicht kennt ihr das Problem - Webseite auf einen anderen Server umgezogen, der DNS-Eintrag ist noch nicht geändert und jetzt geht WordPress (oder ähnliches) nicht mehr - ihr werdet immer wieder auf eure alte Seite weitergeleitet -testen ist unmöglich?

Wiederholt einfach Schritt 1-7, wobi ihr einen Eintrag wie **92.51.134.123   web2.0du.de** in die Hostfile schreibt. Euer Browser fragt nun ganz einfach nicht mehr den DNS-Server ab, sondern es wird der Eintrag aus der Hosts-Datei genommen.

**Bitte beachtet, das moderne Browser einen kleinen DNS-Cache haben - Firefox speichert die letzten 20 aufgelösten Hostnamen zwischen.**

## Tipp 3: Google Analytics & Co blocken

Auch hierfür muss nur ein Eintrag erstellt werden. Jede dieser Domains leitet ihr einfach auf 127.0.0.1 (euren eigenen Computer) weiter.

Um Woopra auszusperren reicht beispielsweise folgender Eintrag:

**127.0.0.1   woopra-ns.com**

Google Analytics braucht folgende Zeile:

**127.0.0.1 www.google-analytics.com**

Damit sperrt ihr diese beiden Tracking-Services in allen Browsern. Einfach und wirkungsvoll!

## Tipp 4: Anzeigen entfernen

Natürlich lassen sich auch Anzeigen mit der Hosts-File blocken und es gibt sogar eine nette [Liste mit Domains von Werbenetzwerken](http://www.mvps.org/winhelp2002/hosts.txt) die man einfach an das Ende seiner Hosts-File ranpappen kann.

## Tipp 5ff: Seid kreativ

Wie ihr seht, auch mit so einem einfachen Ding wie der Hosts-Datei lassen sich tolle sachen anstellen - probiert es einfach aus.

So - ich hoffe ihr habt wieder eine Kleinigkeit gelernt. Viel Spaß beim ausprobieren und kopiert euch die alte Hostfile besser vorm rumspielen.

Wenn etwas nicht geht, könnt ihr die neuen Einträge mit # vor der Zeile auskommentieren. Analog geht das ganze übrigens natürlich auch unter Linux und Windows 🙂
