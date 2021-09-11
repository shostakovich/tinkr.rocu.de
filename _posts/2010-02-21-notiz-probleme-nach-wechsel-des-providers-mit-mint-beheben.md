---
id: 1437
title: 'Notiz: Probleme nach Wechsel des Providers mit Mint beheben'
date: 2010-02-21T17:42:17+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=1437
permalink: /blog/notiz-probleme-nach-wechsel-des-providers-mit-mint-beheben/
thumbnail:
  - http://cdn.cloudfiles.mosso.com/c0723052/mint_preview.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:1440;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Webkram
tags:
  - CRC32
  - Mint
  - PHP
  - Problem
---
Zum zweiten mal hatte ich nun das Problem, dass nach dem Umzug von Zipfelmaus von einem Provider/Server zum nächsten die Statistiken komplett verdreht und offensichtlich falsch waren. Nachdem ich beim ersten mal ziemlich lange für den Grund gesucht hatte, wusste ich diesmal woran es liegt: Die CRC32 Prüfsummen die Mint für die URL&#8217;s errechnet unterscheiden sich zwischen 32 und 64-Bit Systemen.

<img loading="lazy" src="/assets/2010/02/mint1.jpg" alt="" width="606" height="376" />

> This function returns an unsigned integer from a 64-bit Linux platform. It does return the signed integer from other 32-bit platforms even a 64-bit Windows one.
>
> The reason is because the two constants PHP\_INT\_SIZE and PHP\_INT\_MAX have different values on the 64-bit Linux platform.

Letztendlich kann man also von keinem echten Problem mit Mint selber sprechen. Da Shaun Inman offensichtlich recht viele Leute um Hilfe gefragt haben hat [er ein kleines Script](http://haveamint.com/tmp/checksums.php.zip) geschrieben, dass die Prüfsummen korrigiert. Danach arbeitet Mint wieder wie gewohnt 😉
