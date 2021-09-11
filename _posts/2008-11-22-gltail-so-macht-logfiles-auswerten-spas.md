---
id: 466
title: 'glTail - So macht Logfiles auswerten Spaß'
date: 2008-11-22T09:29:09+00:00
author: SES
layout: post
guid: http://web2.0du.de/?p=220
permalink: /blog/gltail-so-macht-logfiles-auswerten-spas/
thumbnail:
  - http://farm3.static.flickr.com/2032/1914571048_5237cb1fb4_m.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";b:0;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Webkram
tags:
  - Apache
  - gl_tail
  - Lighttpd
  - Logfiles
  - Ruby
  - Squid
---
Eine wichtige Aufgabe von mir als Webprogrammierer besteht darin regelmäßig zu schauen, wie YiGG genutzt wird und ob es dabei zu Auffälligkeiten kommt.

Da es angesichts der tausenden Requests pro Minute relativ schwierig bis unmöglich ist dieser Aufgabe mit einem tail -f beizubekommen, habe ich mich vor einiger Zeit nach Alternativen umgesehen.

Hängengeblieben bin ich bei gl_tail einem Programm in ruby, dass die Logfiles wirklich sehr nett darstellt:



Installieren kann man sich gl_tail unter Mac OS X ohne Probleme, da es in Ruby geschrieben ist. Mit einem einfachen:

**sudo gem install gltail**

Hat man das nette Programm auf seiner Festplatte - vorrausgesetzt man hat XCode bei sich installiert, welchen man auf seiner Mac OS X-CD findet. GLTail benötigt den bei XCode mitgeliferten C-Compiler, damit es sich eine native OpenGL Bibliothek zusammenbasteln kann.

Gestartet wird das Programm dann im Terminal mit gl_tail, wobei man beim ersten Aufruf eine kleine YAML-Konfigurationsdatei zusammenbasteln muss. Es lassen sich natürlich viel mehr als ein Log zum beobachten angeben.

Das Programm versteht sich natürlich auf eine ganze Menge mehr Logfiles als auf die Apache-Logs - ihr könnt zum Beispiel Sendmail, Ruby und Squid-Logs auch zu bunten Bällchen machen.

So und jetzt wünsch ich euch einen schönen verschneiten Samstag.
