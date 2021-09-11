---
id: 2142
title: Die LISP-IDE Odysee
date: 2011-01-09T21:55:55+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=2142
permalink: /blog/die-lisp-ide-odysee-2/
thumbnail:
  - http://tinkr.de/wp-content/uploads/2011/01/emacs_slime_preview.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:2146;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Allgemeines
tags:
  - CUSP
  - Eclipse
  - Emacs
  - IDE
  - Lisp
  - MCLIDE
  - Slime
---
Als ich angefangen habe Lisp auf dem Mac zu programmieren, war ich etwas verzweifelt. Es wollte mir nicht so recht gelingen eine vernünftige IDE für Lisp zu finden.

Früh hatte ich schon von Emacs mit Slime gehört, allerdings komme ich eher vom VI-Lager und da ist eine geringe natürlich Abneigung davor, sich mit unnatürlichen Tastenkombinationen die Finger zu verbiegen, hoffentlich verständlich.

**Was nicht alles probiert habe!!**

### Eclipse und CUSP

[Cusp](http://www.bitfauna.com/projects/cusp/cusp.htm) ist ein Plugin für Eclipse, mit dem man dann Common LISP Projekte anlegen kann. Leider ist es recht schwer zur Mitarbeit zu überreden. Da Timothy Jasko leider keine Zeit mehr für das Projekt hat, ist leider wohl auch keine Besserung in Sicht.

Interessant allerdings finde ich, dass es einen Fork (Ableger) von CUSP gibt und zwar [lispdev](https://bitbucket.org/skolos/lispdev/wiki/Home)

Leider sieht es hier mit der Mac OS X unterstüzung etwas dürftig aus.

### Allegro CL IDE

Allegro CL bringt seine eigene IDE mit. Allerdings muss man sowohl XServer installiert haben, als auch GTK. "Belohnt" wird man dann mit einer IDE, die (noch) kein Syntax-Highlighting kann und leider auch ansonsten nicht sehr Mac OS X like daherkommt.

### Lispworks Personal

Zwar ist hier die Installation einfacher, aber das Userinterface ist so fürchterlich, das es mich leider wirklich abgeschreckt hat.

### MCLIDE

Ich dachte ein feuchter Traum würde war, als ich dann MCLIDE entdeckte - wow dachte ich mir. Genau das was ich suche. Pustekuchen. Leider benötigt MCLIDE Rosetta und selbst mit Rosetta lässst es sich nicht vernünftig zur Mitarbeit überreden. Schade.

### LISPIDE

Danach habe ich eine Zeit lang mit [LISPIDE](http://www.daansystems.com/lispide/) in einer virtuellen Maschine gearbeitet. Das war schon ziemlich genau das, was ich gesucht hatte. Ein Editor, ein REPL, sehr sauber - aber halt leider für Windows. Da es mir keinen Spaß macht, jedesmal Parallels Desktop anzuwerfen musste ich mich leider weiter umsehen.

### Emacs und Slime

<img loading="lazy" src="/assets/2011/01/emacs_slime.jpg" alt="Emacs und Slime" title="emacs_slime" width="606" height="620" class="alignnone size-full wp-image-2144" />

Tja schließlich bin ich dann doch bei Emacs und Slime hängengeblieben. Ich wollte es ja eigentlich vermeiden, aber es scheint wirklich die beste Lösung zu sein.

Da Emacs unter Mac OS X auch so eine Sache ist, hat es auch hier etwas gedauert, die optimale Lösung zu finden. Zuerst habe ich Aquamacs probiert bin dann aber am Ende bei Emacs (ohne jedem Schnickschnack) hängen geblieben. Obwohl es ein Schmerz ist, sich die Tastenkombinationen zu merken. Naja man lernt halt nie aus..

## Links zum Thema:

  * [Eclipse + CUSP](http://www.bitfauna.com/projects/cusp/cusp.htm)
  * [lispdev für Eclipse](https://bitbucket.org/skolos/lispdev/wiki/Home)
  * [MCLIDE](http://mclide.in-progress.com/)
  * [Allegro CL IDE](http://www.franz.com/support/documentation/current/doc/mac-express-ide-installation.htm)
  * [Lispworks Personal](http://www.lispworks.com/)
  * [LISPIDE](http://www.daansystems.com/lispide/)
  * [Emacs + Slime](http://common-lisp.net/project/slime/)
