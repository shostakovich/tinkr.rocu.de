---
id: 2302
title: 'Strato HiDrive: Verbindung mit Tücken'
date: 2011-03-24T19:59:29+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=2302
permalink: /blog/strato-hidrive-verbindung-mit-tucken/
thumbnail:
  - http://tinkr.de/wp-content/uploads/2011/03/strato_hidrive_sml.png
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:2308;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Allgemeines
tags:
  - online drive
  - Onlinefestplatte
  - Onlinespeicher
  - Strato
  - Strato HiDrive
---
<img loading="lazy" src="/assets/2011/03/strato_hidrive_1.png" alt="" title="Strato HiDrive Angebot"    />
[Quelle: Strato.de]
100GByte Onlinespeicher für ein Jahr für einen Euro? Das klingt doch interessant. Aber das so ein Lockangebot so seine Tücken hat, das stellt sich natürlich erst immer im Nachhinein raus.
Mit der Kombination aus Win7 und Fritzbox ist das Ganze schon eine mittlere Foltertortur, bis es schließlich läuft. Zwar gibt es jede Menge Online-Hilfen und FAQs bei Strato, aber wie soll das denn Oma Hilde hinbekommen? Muss man erst studiert sein, damit es klappt? Anscheinend ja. Wir sehen gleich warum.

### 1. Schnellstart - oder doch Schneckenstart ?

<img loading="lazy" src="/assets/2011/03/strato_hidrive.png" alt="" title="Strato HiDrive - Schnellstart"    />
[Quelle: Strato.de]
Wer wie ich Win7 und eine Fritzbox einsetzt, bei dem führt der &#8222;Schnellstart&#8220; eher in eine Sackgasse als zum HiDrive. [[Link]](http://www.strato-faq.de/pdf_anleitungen/STRATO_HiDrive_Schnellstart.pdf) Wir bekommen keine Verbindung zu stande. Auf den FAQ-Seiten finden wir den Hinweis, dass Fritzboxen böse sind (was das HiDrive angeht).

### 2. Ohje, ein VPN muss her

Die Strato-Lösung lautet: Ein VPN muss her. So muss man erst mit einen VPN zum HiDrive durch den Router tunneln. [[Link]](http://www.strato-faq.de/2288)

### 3. schon fast am Ziel, aber nur fast

Nun scheint es mit der Verbindung zu klappen und man wird nach den Zugangsdaten gefragt. Allerdings wäre Strato nicht Strato, wäre da nicht noch eine fiese Falle eingebaut. Hier zeigt sich, dass die top-Elite unter den Webspezialisten am Werke war: der Username (z.B. account-1234) enthält ein &#8222;-&#8220; Zeichen und das mag Win7 überhaupt gar nicht in einem Username sehen und verweigert die Authentifizierung. Obwohl Username und Passwort ja im Prinzip korrekt wären.

### 4. Lösung

Des Rätsels Lösung? Auf der HiDrive-Webseite unter den Einstellungen den Username ändern (am besten nur das &#8222;-&#8220; Zeichen weg. Kurz warten, dann mit dem VPN neu einwählen und schon geht es.

### 5. Fertig

Schön, dass es so einfach war. Oma Hilde hätte sicher gedanklich gekotzt. Oder wäre zur Konkurenz gegangen.
