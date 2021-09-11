---
id: 1210
title: LED-Flitzer (dt.)
date: 2009-10-04T12:37:20+00:00
author: SES
layout: page
guid: http://tinkr.de/?page_id=1210
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:2082;s:11:"_thumb_type";s:10:"attachment";}'
---
(This article is also available in [english](http://tinkr.de/how-to-led-flitzer-english/))

<img loading="lazy" class="alignnone size-full wp-image-1220" title="POV - tinkr.de" src="/assets/2009/09/led_flitzer_3.jpg" alt="POV - tinkr.de" width="606" height="404" srcset="/assets/2009/09/led_flitzer_3.jpg 606w, /assets/2009/09/led_flitzer_3-300x200.jpg 300w" sizes="(max-width: 606px) 100vw, 606px" />

### Einleitung

Beim LED-Flitzer handelt es sich um ein kleines, tragbares, batteriebetriebenes Spielzeug zum Darstellen von Wörtern mittels des „Persistence Of View“-Prinzips (Nachbildwirkung).
Seine pfiffigen Extras wie USB-Schnittstelle und Beschleunigungssensor machen es zu einem interessanten Bastelprojekt für Zwischendurch.

<img loading="lazy" class="alignnone size-full wp-image-1218" title="LED-Flitzer (Hardware)" src="/assets/2009/09/led_flitzer_1.jpg" alt="LED-Flitzer (Hardware)" width="606" height="404" srcset="/assets/2009/09/led_flitzer_1.jpg 606w, /assets/2009/09/led_flitzer_1-300x200.jpg 300w" sizes="(max-width: 606px) 100vw, 606px" />

### Begriff POV – Persistence Of View

„Persistence Of View“ zu Deutsch Nachbildwirkung, bezeichnet ein mangelhaftes zeitliches Auflösungsvermögen des menschlichen Auges. Sie wird erzeugt durch das Abklingen des Lichtreizes auf der Netzhaut, der für eine kurze Zeit nach seinem Ende nachwirkt. Bilder, die in genügend schneller Bildfrequenz aufeinanderfolgen, verschmelzen im Gehirn zu einer durchgehenden Bewegung. Dieses Prinzip ist somit die physiologische Grundlage des Films und des Fernsehens. (Quelle: wikipedia.de)

<img loading="lazy" class="alignnone size-full wp-image-1219" title="POV" src="/assets/2009/09/led_flitzer_2.jpg" alt="POV" width="606" height="404" srcset="/assets/2009/09/led_flitzer_2.jpg 606w, /assets/2009/09/led_flitzer_2-300x200.jpg 300w" sizes="(max-width: 606px) 100vw, 606px" />

### Funktionsprinzip

Die Nachbildwirkung wird mit acht nebeneinander platzierten hellen LEDs erzeugt, die mit einem sehr kurzen, gleichbleibenden Zeittakt (~ 3ms) angesteuert werden. Zusätzlich muss die Platine dabei bewegt werden, damit der gewünschte Eindruck im Auge erzeugt wird (z.B. an den Fuß geschnallt beim Laufen oder Tanzen oder in der Hand beim Winken).
Für den LED-Flitzer existiert eine Font-lib mit Großbuchstaben. Jeder einzelne Buchstabe benötigt zwischen einem bis fünf LED-Takte. Das Auge kann beim LED-Flitzer etwa Wörter mit bis zu fünf Buchstaben gut erkennen. Längere Wörter können zwar programmiert werden, eignen sich aber nur für Langzeitbelichtungen mit dem Fotoaparat, da der Effekt bei längere Wörtern nicht zustande kommt.

<img loading="lazy" class="alignnone size-full wp-image-1221" title="LED-Flitzer im Außeneinsatz 1" src="/assets/2009/09/led_flitzer_aussen1.jpg" alt="LED-Flitzer im Außeneinsatz 1" width="606" height="404" srcset="/assets/2009/09/led_flitzer_aussen1.jpg 606w, /assets/2009/09/led_flitzer_aussen1-300x200.jpg 300w" sizes="(max-width: 606px) 100vw, 606px" />

<img loading="lazy" class="alignnone size-full wp-image-1222" title="LED-Flitzer im Außeneinsatz 1" src="/assets/2009/09/led_flitzer_aussen2.jpg" alt="LED-Flitzer im Außeneinsatz 1" width="606" height="404" srcset="/assets/2009/09/led_flitzer_aussen2.jpg 606w, /assets/2009/09/led_flitzer_aussen2-300x200.jpg 300w" sizes="(max-width: 606px) 100vw, 606px" />

### Projektumfang

Neben der Hard- und Software für den LED-Flitzer wurde auch ein GUI-Tool entwickelt, um neue Texte ohne aufwendige Firmware-Anpassung via USB auf die Platine laden zu können.
Wer will, kann die USB Schnittstelle und den Beschleunigungssensor auch erst später hinzufügen und den LED-Flitzer in einer abgespeckten Variante betreiben.

### Features:

µC Atmega8L
µC Firmware in C (AVRStudio + gcc)
font-lib für AVR mit Großbuchstaben
USB-Schnittstelle mittels FTDI-Baustein (optional)
3-Achsen Beschleunigungssensor zum Ermitteln von Bewegungen (optional)
GUI-Tool zum Programmieren von neuen Texten mittels USB-Schnittstelle (optional)

### Hardware

Spannungsversorgung:
Der LED-Flitzer bezieht seine Spannung aus 4 AAA-Batterien. Um die Hardware vor Schäden beim falschen Einlegen der Batterien zu schützen, wurde die Diode V1 vor den Spannungsregler geschaltet. Der Spannungsregler LT1129 erzeugt eine Systemspannung von 3,3V.

Mikrocontroller
Beim Mikrocontroller D1 handelt es sich um einen Atmega8L. Im vorliegenden Schaltplan wurde er in der Minimalbeschaltung integriert. Die einzigen externen Komponenten sind ein Pullup-Widerstand für den Reset, ein Koppelkondensator und ein ISP-Programmierstecker.
- Schnittstellen:
Die Firmware wird über den ISP-Programmierstecker geladen. Über die UART-Schnittstelle ist der USB-Baustein (D2) angeschlossen. Außerdem liest der ADC die analogen Ausgangsspannungen des Beschleunigungssensors (D3) ein. Insgesamt acht Kanäle der Ports D und B werden zum Ansteuern der LEDs verwandt. Ein Taster ist an den Interrupt-Pin INT0 angeschlossen.

USB Baustein
Eine vergleichsweise unkomplizierte Anbindung an die USB-Schnittstelle bietet der Baustein FT232R (D2). Er ist in der „USB Bus Powered with Selectable External Logic Supply“-Schaltung aufgebaut (siehe Datenblatt, Link [2]).

Beschleunigungssensor (optional)
Der MMA7260Q (D3) von Freescale ist ein 3-Achsenbeschleunigungssensor und wird zur Bestimmung von Bewegungen des LED-Flitzers verwendet (Datenblatt unter Link [3.]). So können die LEDs angesteuert werden, sobald der Sensor eine Bewegung erkennt.

Dieser Baustein liegt leider nur in einem QFN16-Gehäuse vor, was das Löten zu einer echten Herausforderung macht. Mit dem richtigen Equipment (z.B. Heißluftlötstation) und/oder einiger Löterfahrung lässt sich das allerdings erfolgreich meistern.

Bestückung
Zur Veranschaulichung der Bestückung gibt es hier je ein Bild von der Bestückungs- und von der Lötseite der Platine:
[<img loading="lazy" src="/assets/2009/10/led\_flitzer\_bestueckung\_bs\_sml.jpg" alt="" title=Bestückungsseite LED-Flitzer" width="120" height="90" class="alignnone size-full wp-image-2080" />](/assets/2009/10/led_flitzer_bestueckung_bs.jpg) [<img src="/assets/2009/10/led_flitzer_bestueckung_ls_sml.jpg" alt="Lötseite" title="led_flitzer_bestueckung_ls_sml" class="alignnone size-full wp-image-2082" />](/assets/2009/10/led_flitzer_bestueckung_ls.jpg)

### Komponenten:

### Software

AVR
Die Software wurde in C im AVR-Studio geschrieben und mit dem gcc kompiliert. Mit nur vier Files ist der Code recht übersichtlich und kann leicht angepasst werden.

Ablauf

Initialisierung
Nach dem Reset werden die einzelnen Register des µC gesetzt. Anschließend wird geprüft, ob neue Textdaten an der USB-Schnittstelle vorliegen. Diese werden dann in das EEPROM abgelegt und stehen nach einem Hardware-Reset wieder zur Verfügung. Anschließend wird ein Timer gestartet, in dessen Interrupt-Routine ein Millisekundenzähler inkrementiert wird.

while(1)- Schleife
Der Ablauf der Schleife besteht aus drei Timerabfragen, nach jeweils 3ms, 10ms und 100ms.
Nach 10ms liest der ADC die Werte vom Beschleunigungssensor ein.
Im 100ms-Timer werden die ADC-Werte gemittelt und festgestellt, ob eine Bewegung stattgefunden hat.
Im 3ms-Timer findet schließlich die Ansteuerung der LEDs statt.

PC
Für den PC gibt es ein kleines Tool in C#. Mit dem man über USB neue Texte auf den LED-Flitzer übertragen kann.

<img loading="lazy" class="alignnone size-full wp-image-1217" title="GUI-Tool zum Upload neuer Texte" src="/assets/2009/09/GUI_tool.png" alt="GUI-Tool zum Upload neuer Texte" width="300" height="300" srcset="/assets/2009/09/GUI_tool.png 300w, /assets/2009/09/GUI_tool-150x150.png 150w" sizes="(max-width: 300px) 100vw, 300px" />

Ablauf Übertragen neuer Text-Messages
1.Power Off
2.Anschließen an PC via USB
3.Starten des PC-Tools
4.Power On und gleichzeitiges Betätigen des Tasters auf dem LED-Flitzer
5.Eingabe neuer Text-Message
6.Übertagen der Text-Message
7.Power Off
8.Entfernen der USB-Schnittstelle
9.Power On
10.neue Text-Message geladen

<h3 style="clear: both;" id="downloads">
  Downloads:
</h3>

[Schematic, Layout und BOM V1.1](/assets/2009/10/LED_Flitzer_V1_1_091122.zip)
[Firmware Sourcecode AVR V1.1 - ACHTUNG alte Version/old version](/assets/2009/09/LED_Flitzer_AVR.zip)
[Firmware Sourcecode AVR V1.2, vom 16.10.10 - ACHTUNG alte Version/old version](/assets/2009/10/LED_Flitzer_101016.zip)
[Firmware Sourcecode AVR V1.3, vom 04.12.11 -> additional changes necessary: please change internal crystal speed to 8MHz](/assets/2009/10/LED_Flitzer_111204.zip)</p>

[LED-Flitzer Proga V1.0 (Text Download Tool)](/assets/2009/03/led_flitzer_proga.zip)</ul>

### Links

[1.] <http://www.ftdichip.com/Documents/DataSheets/DS_FT232R.pdf>
[2.] <http://www.freescale.com/files/sensors/doc/data_sheet/MMA7260QT.pdf>

### Veröffentlichung

[http://www.ixbat.de//files/admin/projekte/epjournal/EPJ\_04\_download.pdf](http://www.ixbat.de//files/admin/projekte/epjournal/EPJ_04_download.pdf)

### weitere Apps

Beschleunigungslogger: [Link](http://tinkr.de/blog/led-flitzer-app-beschleunigungslogger/)
Wasserwaage: [Link](http://tinkr.de/blog/neue-led-flitzer-app-wasserwaage/)

### Updates

22.11.09 BOM mit Reichelt-Bestellnummern hinzugefügt [Schematic, Layout und BOM V1.1](/assets/2009/10/LED_Flitzer_V1_1_091122.zip)
30.11.09 BOM aktualisiert: [BOM](/assets/2009/10/partlist_led_flitzer_V1_1_091130.xls)</a>
16.10.10 Firmware aktualisiert: [Firmware Sourcecode AVR V1.2](/assets/2009/10/LED_Flitzer_101016.zip)
04.12.11 Firmware aktualisiert: [Firmware Sourcecode AVR V1.3, vom 04.12.11 -> additional changes necessary: please change internal crystal speed to 8MHz](/assets/2009/10/LED_Flitzer_111204.zip)</p>
