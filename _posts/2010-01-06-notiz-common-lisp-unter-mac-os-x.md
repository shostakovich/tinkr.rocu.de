---
id: 1385
title: 'Notiz: Common Lisp unter Mac OS X'
date: 2010-01-06T12:26:37+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=1385
permalink: /blog/notiz-common-lisp-unter-mac-os-x/
thumbnail:
  - http://cdn.cloudfiles.mosso.com/c0723062/Lisplogo_alien.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";b:0;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Weiche Ware
tags:
  - Emacs
  - Lisp
  - Lispworks
  - Mac OS X
---
In den letzten Tagen probiere ich mich etwas in [Common Lisp](http://de.wikipedia.org/wiki/Common_Lisp) einzuarbeiten.

Bisher ist mir das im Prinzip nicht langweilig geworden aber leider scheint LISP so wenige Fans zu haben, dass es Anfangs wirklich eine sehr frustrierende Erfahrung ist damit zu Rande zukommen. Vernünftige Tools scheint es nicht zu geben - ausserdem gibt es dutzende Verschiedene Implementierungen.

Man wundert sich kaum warum unser Roomba so oft gegen die Wand fährt sollte es nichts besseres geben.

Nachdem ich nun einiges ausprobiert habe und sowohl Emacs als auch Lispworks wirklich nicht mag, habe ich mich einfach entschieden Textmate zu verwenden.

Dazu habe ich mir [Steel Bank Common Lisp](http://www.sbcl.org/) instaliert, mir [dieses Bundle hier](http://zoetrope.speakermouth.com/2008/4/9/lisp-bundle-for-textmate)r heruntergeladen und es dann um einen kleinen Befehl zum ausführen meiner (noch) stümperhaften Programme erweitert.

<img loading="lazy" alt="" src="http://hwcdn.net/m4i2m3j4/cds/zipfelmaus/photos/lisp_bundle.jpg" title="Lisp-Bundle"    />

`<br />
#!/bin/bash</p>
<p>osascript <<- APPLESCRIPT
	tell app "Terminal"
	    launch
	    activate
	    do script "
		cd ${TM_DIRECTORY};
		clear;
         sbcl < ${TM_FILEPATH};"
	end tell
APPLESCRIPT
`

Ich habe damit fürs erste eine ganz annehmbare Lösung gefunden um vernünftig weiterüben zu können. Vielleicht hat ja noch der ein oder andere einen Tipp auf Lager und kann mir erzählen welche Alternativen es ausser Emacs/Slime, Lispworks und meiner noch gibt.

(Anmerkung: Meine Abneigung gegenüber Emacs ist religiöser Natur)
