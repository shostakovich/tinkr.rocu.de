---
id: 478
title: nahoMailPlugin für Symfony
date: 2009-02-20T21:33:30+00:00
author: SES
layout: post
guid: http://web2.0du.de/?p=317
permalink: /blog/nahomailplugin-fur-symfony/
thumbnail:
  - http://farm1.static.flickr.com/155/356591180_9517eebde3_m.jpg
  - http://farm1.static.flickr.com/155/356591180_9517eebde3_m.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";b:0;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Uncategorized
tags:
  - E-Mail
  - PHP
  - Swift
  - Symfony
---
Seit ein paar Tagen arbeite ich mit ein paar Freunden an einem privaten Projekt. Für mich als eingefleischten Symfony-Entwickler war natürlich klar, dass auch hierfür nichts anderes in Frage kommen würde.

Ich muss sagen, dass sich in den letzten Monaten wirklich erfreulich viel am und um das Framework getan hat und ich war nicht nur überrascht von den zahlreichen Verbesserungen in Symfony 1.2, sondern auch von der reichaltigen Auswahl an Plugins, die es inzwischen gibt.

So bin ich unter anderem auch über das Plugin nahoMail gestolpert, dass es einem ermöglicht elegant E-Mails über Swift zu versenden. Es ähnelt eigentlich sehr dem, was wir bei YiGG selber auf Basis von Swift gebaut haben und kann z.B. Partials sauber in eine E-Mail rendern. Ich glaube, dass es für jemanden der selber noch keinen Code in der Richtung hat eine sehr gute Basis ist.

Zum senden einer E-Mail sind so im Grunde nur 2 Zeilen nötig und man hat die Präsentation schön sauber getrennt von seinem Code.

Besonders gut gefallen mir die Einstellungen: Man kann in seiner app.yml einfach ein Namensformat für seine Mails angeben:
[Mein Projekt] - %s

Beide Teile des Strings laufen dann sauber durch die Internationalisierungsfunktion von Symfony.

Links zum Thema:
[nahoMailPlugin auf www.symfony-project.org](http://www.symfony-project.org/plugins/nahoMailPlugin)
[Swift Mailer](http://www.swiftmailer.org/)
