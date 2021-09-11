---
id: 428
title: Langsam nährt sich das Eichhörnchen
date: 2008-04-24T06:04:20+00:00
author: SES
layout: post
guid: http://192.168.2.27/?p=9
permalink: /blog/langsam-nahrt-sich-das-eichhornchen/
thumbnail:
  - http://farm1.static.flickr.com/54/146055666_313f3490e0_m.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";b:0;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Webkram
tags:
  - Blog
  - Cachefly
  - CDN
  - CSS
  - Dashboard
  - DNS
  - Frontend
  - Mint
  - Web 2.0
  - Widget
---
Auch wenn es nicht so aussieht, ich habe an den letzten Tagen einiges an Web 2.0 Du.de geschraubt. Vor allen Dingen habe ich mich mit der Optimierung vom Frontend befasst, damit das Blog in Zukunft schnell wie ein Blitz ausgeliefert werden kann.

<img loading="lazy" src="http://www.rocket-turtle.de/images/uploads/stats/mint.jpg"   alt="Foto: Statistikpanel von Mint" title="Mint" />

Nebenbei habe ich nach einer geeigneten Möglichkeit gesucht meine Besucher auszuspionieren und mich am Ende doch wieder nur für Mint entschieden. Und das aus folgenden Gründen:

  * Mint ist hübsch
  * Ich mag das Dashboardwidget
  * Eure Daten landen nicht bei einem externen Dienstleister
  * Ein DNS-Lookup weniger = mehr Geschwindigkeit für euch

Natürlich dürft ihr euch im Gegenzug auch gerne selber die Statistiken von web2.0du.de anschauen. Habe ich schon erwähnt das Mint hübsch ist?

Neben diesem Schnickschnack habe ich auch nach einem passendem CDN, für die ganzen bunten Bildchen gesucht und bin fürs erste bei CacheFly gelandet. Ich war mit der Performance beim ersten Seitenaufruf allerdings nicht besonders zufrieden: da es recht lange dauert bis Cachefly die erste Antwort zurück liefert, werde ich beim ersten Seitenaufruf das CSS direkt im Quellcode der Seite ausliefern und mit einem kleinen Javascript von Cachefly in den Browsercache befördern. Wie das geht (es ist wirklich nicht spektakulär) wird es hier demnächst zu lesen geben.

Ansonsten wünsche ich der Leserschaft noch einen schönen Donnerstag.
