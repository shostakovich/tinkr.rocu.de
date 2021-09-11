---
id: 679
title: 'Squid3 unter Mac OS X und &#8222;VPN&#8220; für Arme'
date: 2009-06-11T17:17:13+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=679
permalink: /blog/squid3-unter-mac-os-x-und-vpn-fur-arme/
thumbnail:
  - http://tinkr.de/wp-content/uploads/2009/06/octopus.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:694;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Webkram
tags:
  - Apple
  - HTTP
  - Mac OS X
  - Proxy
  - Squid
  - SquidMan
  - Vserver
---
Endlich ist es so weit. Ich habe vor einiger Zeit schon einmal über SquidMan berichtet, einem kleinen Hilfsprogramm für Mac OS X, mit dem man ohne jeglichen Aufwand Squid auf dem Mac installieren kann.

In der neuen Version 2.5Beta, wird nun endlich anstelle von Squid 2, Squid 3.0 verwendet.

Natürlich habe ich es mir nicht nehmen lassen,  die neuen Beta zu installieren. Ausserdem habe ich mir eine ganz nette Idee überlegt, wie ich sicher und schnell surfen kann ohne viel Geld für ein teures VPN auszugeben. Ich habe dazu einfach Squid 3 auf meinem Vserver installiert und mir per SSH den Squid-Port lokal weitergeleitet.

<img loading="lazy"  title="Shimo Einstellungen" src="/assets/2009/06/shimo.jpg" alt="Shimo Einstellungen"   srcset="/assets/2009/06/shimo.jpg 550w, /assets/2009/06/shimo-300x190.jpg 300w" sizes="(max-width: 550px) 100vw, 550px" />

Weil die Übertragung über SSH immer etwas langsam geht benutze ich lokal SquidMan um lokal ebenfalls eine Kopie, der statischen Inhalte häufig benutzen Webseiten vorzuhalten. Dazu stelle ich als Parent-Proxy einfach bei SquidMan ein und in meinen Netzwerkeinstellungen den Port von SquidMan als HTTP-Proxy.

<div>
  <img loading="lazy"  title="squidMan" src="/assets/2009/06/squidMan.jpg" alt="squidMan"   srcset="/assets/2009/06/squidMan.jpg 578w, /assets/2009/06/squidMan-300x189.jpg 300w" sizes="(max-width: 578px) 100vw, 578px" />
</div>

<div>
  Ich gebe zu, dass ist alles andere als intuitiv - aber letztendlich ist es ein wirkungsvolle Möglichkeit in fremden oder offenen WLAN&#8217;s sicher und schnell zu surfen.
</div>

<div>
  Ich bin relativ glücklich mit der Lösung: Nur mein HTTP-Traffic wird getunnelt - HTTPS nicht.
</div>

<div>
</div>

<div>
  Schön ist übrigens auch, dass wen keine Verbindung per SSH besteht die Konstruktion natürlich nicht arbeitet 🙂
</div>

<div>
</div>

<div>
  Ich kann also sicher sein  - wenn sich eine Seite aufbaut, surfe ich auch sicher.
</div>

### Links zum Thema:

  * [SquidMan - Webseite des Authors](http://web.me.com/adg/squidman/index.html)
  * [Squid - Projektwebseite](http://www.squid-cache.org/)
  * [ShimoApp](http://www.shimoapp.com/)
  * [SSH: Port Forwarding](http://www.ssh.com/support/documentation/online/ssh/adminguide/32/Port_Forwarding.html)
