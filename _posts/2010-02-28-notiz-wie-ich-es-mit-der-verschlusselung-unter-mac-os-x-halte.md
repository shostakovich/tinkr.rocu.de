---
id: 1470
title: 'Notiz: Wie ich es mit der Verschlüsselung unter Mac OS X halte.'
date: 2010-02-28T12:51:08+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=1470
permalink: /blog/notiz-wie-ich-es-mit-der-verschlusselung-unter-mac-os-x-halte/
thumbnail:
  - http://cdn.cloudfiles.mosso.com/c0723052/enigma_small.jpg
yigged:
  - "1"
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:1474;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Allgemeines
tags:
  - Espionage
  - FileVault
  - Mac OS X
---
Jeden Tag einen Laptop mit mehr oder weniger sensiblen Informationen mit sich herumzutragen stellt ein handfestes Sicherheitsproblem dar. Schnell hat man mal ihn mal nicht im Auge und er ist weg.

Meistens sind dann nicht nur Familienfotos sondern auch Kundendaten, Sourcecode und allerhand anderer Kram in fremden Händen.

<img loading="lazy" src="/assets/2010/02/enigma_big.jpg" alt="" title="Enigma Maschnine" width="606" height="455" />

Auf Macfidelity wurde letzte Woche ein kleines Programm vorgestellt, dass Bösen Buben den Zugriff verwehren soll: [Espionage](http://macfidelity.de/2010/02/25/mac-apps-ordner-und-dateien-verschlusseln-mit-espionage/).

So etwas kann zwar durchaus nützlich sein, allerdings halte ich selektives verschlüsseln von Ordnern für den falschen Ansatz - es sei den, man weiß sehr genau was man tut. Ich weiß Fidel hat das so auch nicht empfohlen, ich halte es aber für wichtig sogar explizit davon abzuraten.

Meiner Meinung nach sollte man einfach sein ganzes Nutzerverzeichnis mit FileVault verschlüsseln. Alles zu verschlüsseln ist einfach grundlegend sicherer. Warum? Es ist für normale Benutzer wohl kaum praktikabel, solche Dinge wie alle Caches, Einstellungen und ähnliches Gedöhns für die Verschlüsselung zu &#8222;whitelisten&#8220;. Private und sensible Daten verstecken sich auch an nicht offensichtlichen &#8222;Stellen&#8220; im Benutzerordner.

FileVault bringt allerdings auch das Problem mit sich, dass z.B. TimeMachine nur noch das gesamte Diskimage (in dem der Benutzerordner bei FileVault liegt) sichert, was unter umständen recht lange dauern kann. Eine Zeit lang hat mich daher meine Faulheit davon abgehalten, Filevault zu aktivieren..

Was ist also ein besserer Ansatz? Die Lösung für mich lautet: Das Whitelisten von Zeug, dass nicht sensibel ist wie z.B. Musik und Videos.
Diesen Kram habe ich einfach in den Ordner für alle Benutzer geschoben und einfach [symbolische Verknüpfungen](http://de.wikipedia.org/wiki/Symbolische_Verknüpfung) in meinen Benutzerordner erstellt. Das hat dann natürlich nebenbei auch den Vorteil, dass es jeder Benutzer einsehen kann. Zeugs, dass ihr Mitbenutzern zeigen würdet ist offensichtlich unkritisch genug um es nicht zu verschlüsseln.

Dieser Ansatz bietet einem, einen wirklich guten Schutz. Meistens ist es eher die richtige Denke als zusätzliche Software, die einem zu mehr Sicherheit verhelfen.

Für Tools, wie Espionage mag es natürlich noch andere Anwendungsfälle geben. Z.B. um Daten auf einem USB-Stick von A nach B zu bringen. Im Zweifelsfall ist es dann aber doch besser unkritisches Sachen nicht zu verschlüsseln, als kritische Sachen zu vergessen.

Bildnachweis: [German Enigma Machine](http://www.flickr.com/photos/migulski/2334027222/) von [Bogdan Migulski (Flickr)](http://www.flickr.com/photos/migulski/)
