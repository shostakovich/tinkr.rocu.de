---
id: 463
title: Womit spioniert man am besten seine Besucher aus?
date: 2008-11-18T23:45:58+00:00
author: SES
layout: post
guid: http://web2.0du.de/?p=169
permalink: /blog/womit-spioniert-man-am-besten-seine-besucher-aus/
thumbnail:
  - http://farm4.static.flickr.com/3281/2569400232_dc06df2784_m.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";b:0;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Webkram
tags:
  - Blog
  - Etracker
  - Google
  - Log
  - Mint
  - Server
  - Tracking
  - Web 2.0
  - Woopra
  - Wordpress
---
Ich such nun schon seit einiger Zeit nach dem geeigneten Tracking-Tool für mein Blog. Obwohl ich mir zur Zeit selber noch unschlüssig darüber bin, womit man seine Besucher am geschicktesten ausspioniert, möchte ich euch doch an meinen bisherigen Überlegungen teilhaben lassen.

## Woopra - Java und Eyecandy

Mein Favorit zur Zeit ist Woopra. [Woopra](http://www.woopra.com/) ist seit einigen Monaten in der Beta-Phase und hat inzwischen 50.000 Benutzer freigeschaltet. Zu diesem glücklichen Kreis gehöre auch ich. Der Tracking-Service unterscheidet sich in erster Linie dadurch von der Konkurrenz, dass die Ergebnisse mithilfe einer JAVA-Desktop-Applikation visualisiert werden.
<img loading="lazy" class="alignnone" title="Woopra Desktop-Applikation" src="http://www.rocket-turtle.de/images/uploads/woopra.png" alt="" width="606" height="408" />

Anfänglich hat Woopra ein bisschen gekränkelt und hatte einige Beta-typische Bugs. Während meiner ersten persönlichen Testrunde vor wenigen Monaten musste man z.B. einige kleiner Modifikationen vornehmen, damit das gute Stück überhaupt unter Mac OS X zum laufen zu bewegen war.

Inzwischen hat sich Woopra aber gemausert. Neben neuen Ansichten der Statistik haben die Macher auch ein sehr gutes WordPress-Plugin veröffentlicht. Positiv fällt  die Darstellung der Statistiken direkt aus WordPress heraus auf und dass ich als Schreiberling vom Tracking ausgeschlossen bin.

Sympatisch darüber hinaus ist die von [Hubert Streitenberger](http://blog.streitenberger.net/2008/10/woopra-4-iphone.html) erstellte [Iphone-Woopra-Webapp](http://blog.streitenberger.net/2008/10/woopra-4-iphone.html) auf Basis des WordPress-Plugins. Ich kann hierfür nur tausend Dank sagen, ich weiß das es garantiert einige Stunden gedauert hat und man ihn nicht genug für seinen Einsatz loben kann.

[<img loading="lazy" class="alignnone" title="Iphone-Plugin" src="http://www.rocket-turtle.de/images/uploads/iphone_woopra.png" alt="Woopra 4 IPhone" width="606" height="491" />](http://blog.streitenberger.net/2008/10/woopra-4-iphone.html)

Kurrios finde ich den Ansatz von Woopra das Trackingpixel auszuliefern. Hierfür kriegt jeder Client einen eigen virtuellen Domainname, der vom Javascript transparent aufgerufen wird. Eine Konfiguration des Tracking-Codes entfällt dadurch völlig. (Bei mir hat das Zählpixel zum Beispiel die Url http://web2.0du.de.woopra-ns.com/visit/&#8230;)

## Mint - Selbstgehostet, flexibel und teuer

Meine zweite Alternative ist [Mint](http://www.haveamint.com/ "Webseite von Mint"), das nette Trackingskript von Shaun Inman. Mint installert man einfach selber auf seinem PHP fähigen Webspace, trägt die Zugangsdaten für seine MySQL-Datenbank in einer Konfigurationsdatei ein und schon beginnt das gute Programm zu tracken.
[<img loading="lazy" src="http://www.rocket-turtle.de/images/uploads/mint.png" alt="Mint Statistiken" width="606" height="427" />](http://www.haveamint.com)

Mint ist out of the box sehr schlank gehalten und bietet nur die allerwichtigsten Informationen. Dafür lässt sich Mint allerdings mit Plugins (die lustigerweiser Pepper genannt werden) erweitern, wobei es dann aber trotzdem alles auf einer Seite darstellt.

Auch für Mint gibt es ein [Iphone-Plugin, äh Pepper](http://www.haveamint.com/peppermill/pepper/57/iphone/).

Für den Informationsfluss auf dem heimischen Desktop sorgt Mint, mit seperat erhältlichen Widgets.

<img loading="lazy" class="alignleft" title="Das Mint-Widget für das Mac OS X Dashboard" src="http://www.rocket-turtle.de/images/uploads/mint_widget.gif" alt="" width="388" height="122" />

Nachteil an Mint ist allerdings, dass Shaun einem 30 US-Dollar pro Lizenz abzwackt, die das Skript aber auch unfraglich wert ist.

Positiv sind auch Plugins, die Feedburner-frei die Zugriffe auf den eigenen RSS-Feed tarcken und auch die Zugriffe von Crawlern kann man ohne direkten Zugriff auf die Webserver-Logs analysieren.

Nachreilig ist, dass bei Mint die Datenbank schnell anwächst und das Script ab 30 Megabyte beginnt aufzuräumen. Alte Informationen gehen so verloren und das Script wird ein paar Millisekunden langsamer.

Obwohl Mint zwar schnell ist, ist es trotzdem ein zweites PHP-Script, was während einem Seitenaufruf laufen muss. Für Slashdot definitiv nicht zu gebrauchen. (Ok - mein VServer auch nicht, aber das steht hier nicht zur Debatte 😉

## Etracker Web Controlling - Datenschutzkonform und performant

Der dritte Kandidat, den ich in Betracht ziehe ist Etracker. [Etracker](http://www.etracker.com/de/) ist ein deutscher Tracking-Anbieter, der zu seinen Kunden z.B. T-Online und BMW zählt und bei Seiten bis zu 10.000 PIs im Monat seine Dienste kostenlos anbietet. Der Zählpixel von Etracker lädt sehr schnell und man findet sehr übersichtliche Statistiken in seinem Dashboard vor, auch wenn das ganze vom EyeCandy-Faktor sicher nicht mit Woopra mithält.

Wer mehr als 10.000 Pis hat kann für einen bezahlbaren Preis [größere Pakete buchen](http://www.etracker.com/de/etracker-produkte-echtzeit-web-controlling-visitor-voice/web-controlling-echtzeit-web-analysen-statt-logfile-analyse.html) (ab 1,11€ im Monat). Schade ist, dass auch bei den bezahlten Paketen viele Funktionen nicht einsehbar sind. Wenn ich für 1,11€ im Monat nicht sehen, welche Seiten von mir am häufigsten besucht wurden, schreckt das ziemlich ab, zumal andere Anbieter das kostenlos können.

<img loading="lazy" class="alignnone" title="Etracker Controll Panel" src="http://www.rocket-turtle.de/images/uploads/etracker.png" alt="" width="606" height="425" />

Trotzdem es spricht auch vieles für die Firma. Positiv fällt mir an Etracker auf, das die Jungs kontinuirlich an ihrem Produkt arbeiten und der Service Monat für Monat besser wird. Etracker bietet eine sehr gute Dokumentation zur Integration des Zählpixels an, das man auch ohne Javascript einbinden kann.

Der Hauptgrund der für Etracker spricht ist allerdings, dass Etracker im Einklang mit dem Bundes Datenschutz Gestz trackt und man seinen Besuchern einen Opt-Out-Link anbieten kann, der sie von der Erfassung ausschließt. Da mir Datenschutz wichtig ist und ich als private Person auch keine Serverlogs haben muss und sie deaktiviert habe, möchte ich auch eine Tracking-Lösung die die Daten für mich und nicht in erster Linie für sich erfasst.

Das ist im übrigen auch der Grund warum Google, die Datenranke für mich privat No-Go ist. Ich will mich nicht in den Reigen wilder Verschwörungstheorien einreihen, allerdings halte ich eine komplette Netzabdeckung von Google-Analytics für wenig erstrebenswert.

Was meint ihr? Datenschutz, selbst gehostet oder Eye-Candy? Wie spioniert ihr eure Besucher aus?
