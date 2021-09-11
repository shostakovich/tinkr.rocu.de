---
id: 1424
title: MySQL Datenbankadministration unter Mac OS X mit Sequel Pro erledigen
date: 2010-02-20T22:22:30+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=1424
permalink: /blog/mysql-datenbankadministration-unter-mac-os-x-mit-sequel-pro-erledigen/
thumbnail:
  - http://cdn.cloudfiles.mosso.com/c0723052/sequel_preview.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:1432;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Allgemeines
tags:
  - Datenbank
  - Mac OS X
  - MySQL
  - SequelPro
  - Server
  - Tool
---
Ich kann mich noch gut daran erinnern, wie nervig es früher war ausgiebiger an einer MySQL-Datenbank rumzuhantieren. Um mal schnell eine Tabelle oder einen Index anzulegen habe ich lange Zeit PHPMyAdmin benutzt und das Tool schon immer relativ unelegant gefunden.

Also habe ich mich vor einigen Monaten auf die Suche nach einem besseren Werkzeug begeben und ein geniales Tool gefunden, um MySQL-Datenbanken zu verwalten.

<img loading="lazy" src="/assets/2010/02/sequel-pro.jpg" alt="" title="sequel-pro"   />
[SequelPro](http://www.sequelpro.com/) ist eine schicke Cocoa-basierte Datenbank-Managment App für Mac OS X.

Der gute Eindruck fängt schon beim verbinden mit der Datenbank an: Natürlich möchte ich mich nicht aus dem Café (oder sagen wir einem Chaos Communication Congress) aus unverschlüsselt mit unserem MySQL-Server verbinden. In Sequel Pro habe ich daher [SSH-Port-Forwarding](http://www.ssh.com/support/documentation/online/ssh/adminguide/32/Port_Forwarding.html) konfiguriert um bombensicher mit dem Server zu kommunizieren.

Neben den Grundfunktionen, die man so oder so ähnlich schon aus PHPMyAdmin kennt überzeugt das Programm auch in Details. Ich kann schick Relationen bearbeiten, mir einen Index anlegen und im Editor Queries erstellen und abschicken. Halte ich eine Abfrage für besonders nützlich, kommt sie einfach in meine Favoriten und ich kann dann später wieder darauf zugreifen. Auf Arbeit ist dadurch ein recht schicker kleiner Berg an &#8222;Favourite Queries&#8220; entstanden, die wir häufig benutzen und in Sequel Pro verwalten.

Unterm Strich wirkt PHPMyAdmin dagegen wie ein Spielzeugtool. Und deswegen ist PHPMyAdmin auch eingemottet. Ein gutes Gefühl 🙂

### Links

  * <a href="http://www.sequelpro.com/" target="_blank"><a href="http://www.sequelpro.com/">SequelPro-Projekthomepage</a></a>
