---
id: 497
title: 'Symfony - Whoops. Hashfunktionen sind langsam :)'
date: 2009-04-05T09:44:12+00:00
author: SES
layout: post
guid: http://tinkr.de/blog/symfony-whoops-hashfunktionen-sind-langsam/
permalink: /blog/symfony-whoops-hashfunktionen-sind-langsam/
thumbnail:
  - http://farm2.static.flickr.com/1303/1261246167_31dc1f9b03_m.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";b:0;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - PHP 5
  - Webkram
  - Weiche Ware
tags:
  - Debugging
  - internet
  - PHP
  - Programmieren
  - Symfony
---
Zitat aus dem [Symfony-Blog:](http://www.symfony-project.org/blog/2009/04/02/your-apps-are-faster)

> When the cache was switched on in settings.yml a partial&#8217;s variables were _always_ passed through <code style="font-family: 'Bitstream Vera Sans Mono', monospace;">md5(serialize($vars))</code>

[![](http://farm2.static.flickr.com/1303/1261246167_31dc1f9b03.jpg)](http://www.flickr.com/photos/boltofblue/1261246167/ "Cache from Bolt of Blue(Flickr)")

Weiterhin schreibt Kris Wallsmith, das MD5 auf riesige Datenmengen anzuwenden doch recht langsam ist - wo ich nur zustimmen kann 🙂

Vor 3 Tagen hat Kris das ganze gefixt (von md5() ) befreit und es scheint, dass wir bei YiGG nun endlich noch mehr Zeug cachen werden können. Leider hatten wir bisher das Problem, dass besonders bei vielen gecachten Fragmenten die Performance anstelle sich zu verbessern in den Keller ging.

Vielen dank Kris! Manchmal stecken solche Fehler im Detail. Wen die ganze Story interessiert, der möge doch bitte einfach im <a href="http://www.symfony-project.org/blog/2009/04/02/your-apps-are-faster" title="Symfony Blog - Your Apps are Faster!" target="_blank">Symfony-Blog nachlesen</a>.
