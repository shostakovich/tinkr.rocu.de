---
id: 59
title: Checkliste für Eagle-Platinen
date: 2008-08-15T16:59:05+00:00
author: SES
layout: page
guid: http://tinkr.de/?page_id=59
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:99;s:11:"_thumb_type";s:10:"attachment";}'
---
Das aktuelle Tricorderprojekt hat es einmal wieder gezeigt, der Fehlerteufel scheint mit dem Schaltplan/Platinentool EAGLE einen kleinen Pakt geschlossen zu haben. Daher ist es an der Zeit eine kleine Checkliste zu erstellen, mit deren Hilfe sich kleine Schusselfehler in EAGLE leicht ausmerzen lassen.

### Checkliste:

##### - Bohrungen:

leicht übersieht man, dass die Bohrung in der normalen Board-Ansicht nur als Bestückungsdruck dargestellt ist, der keinen veränderlichen Durchmesser hat. Das kann dazu führen, das Bauteile und Leitungen zu nah an Bohrungen platziert werden, wenn diese größer als der Bestückungsdruck für die Bohrung selber ist. Deswegen sollte der Layer &#8222;Drilling&#8220; bei der Endkontrolle mitbeachtet werden.

##### - Signalpins:

Oft scheint ein Signal richtig verbunden zu sein und taucht trotzdem nur einmal (statt zweimal) in der Netzliste auf (linke Hälfte der Abb.). Darum immer mit dem SHOW Befehl prüfen, ob auch der Pin rot-aufleuchtet und verbunden ist (rechte Hälfte der Abb.).
<img loading="lazy" src="/assets/2008/08/eagle2_sml-300x91.png" alt="" title="Signal an Pin"    />



##### - Copy&Paste:

Wer viel Strg+C und Strg+V in Eagle einsätz, sollte man besonders vorsichtig sein, was die Signalbezeichnung betrifft. Eagle inkrementiert standardmäßig die Bezeichnungen der Signale. So wird aus dem kopierten Signal\_X -> Signal\_X1. Setze daher nach dem Einfügen der kopierten Signale/Bauteile mit dem Befehl NAME den Signalnamen auf den alten Wert zurück, wenn die beiden Signale verbunden bleiben sollen. Die Nachfolgende Abbildung zeigt das Problem:
[<img loading="lazy" src="/assets/2008/08/eagle1_sml-300x152.png" alt="" title="Copy&#038;Paste"    />](/assets/2008/08/eagle1_sml.png)

Wenn du noch andere Punkte kennst, die auch in diese Liste gehören, dann schreib sie einfach in einen Kommentar zu dieser Seite.
