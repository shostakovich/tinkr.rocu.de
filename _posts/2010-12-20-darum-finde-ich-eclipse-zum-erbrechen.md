---
id: 2051
title: Darum finde ich Eclipse zum Erbrechen
date: 2010-12-20T18:38:43+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=2051
permalink: /blog/darum-finde-ich-eclipse-zum-erbrechen/
thumbnail:
  - http://tinkr.de/wp-content/uploads/2010/12/eclipse_sml.png
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:2056;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Allgemeines
  - Weiche Ware
tags:
  - Altera
  - Eclipse
  - IDE
  - NIOS2
---
Die Liebevorweihnachtszeit muss ich nicht mit Geschenkesuchen verplämpern, sondern mit einer Studienarbeit. Das Thema ist eigentlich ganz interessant, einen Softcore-Prozessor in ein FPGA reinpflanzen und ein bisschen Trallala machen. Alles kein Drama, wenn nicht das liebe Eclipse wär. Irgendein besonders sadistischer Vollnerd ist vor ein paar Jahren auf die Idee gekommen, das Tool, das unter Java durchaus zu gebrauchen ist, auch im Embedded Bereich über all einzusetzen. Und so sprießen die IDEs, die auf Ecplise basieren, nur so aus dem Boden.
Dass das irgendwie alles nicht so ganz koscher ist, merkt der arme Entwickler schnell, wenn es heißt, ein neues Projekt aufzusetzen. So bombardiert mich die NIOS II IDE mit reihenweise Fehlermeldungen, von denen eine kryptischer ist als die andere.

Hier ein paar Beispiele - alle beim Anlegen eines Projektes passiert, die Lösung ist auch gleich darunter verfasst oder verlinkt:

### Fehlermeldung:

&#8222;Failed to execute: ./create-this-app -no-make&#8220;
_Lösung:_
<http://www.altera.com/support/kdb/solutions/rd10082010_852.html>

### Fehlermeldung:

&#8222;Error creating project. Reason: Invalid project description&#8220;
_Lösung:_
[http://courses.cit.cornell.edu/ece576/NiosII\_doc/ug\_nios2\_ide\_help.pdf](http://courses.cit.cornell.edu/ece576/NiosII_doc/ug_nios2_ide_help.pdf) - Seite 159 unten

### Fehlermeldung:

unable to create project in workspace directory
_Lösung:_
&#8222;You cannot create a project anywhere in or under the same directory where your eclipse workspace is located. This is an eclipse-ism introduced in the latest version of the tools. So create your projects under a separate directory from your eclipse workspace. &#8220; Von <http://www.alteraforum.com/forum/showthread.php?t=19783>

Liebe Eclipse-Missbrauchenden-IDE-Entwickler, bitte denkt daran, dass nicht jeder Embedded-Entwickler ein GNU-Chaintool Crack ist und jede nichtssagende Fehlermeldung zu interpretieren weiß. Danke.
