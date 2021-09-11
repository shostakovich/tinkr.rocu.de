---
id: 137
title: Bau dir deine eigene Wetterstation
date: 2008-08-29T19:59:34+00:00
author: SES
layout: page
guid: http://tinkr.de/?page_id=137
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:725;s:11:"_thumb_type";s:10:"attachment";}'
---
<img loading="lazy" src="http://c0724452.cdn.cloudfiles.rackspacecloud.com/wetterstat_jpg.jpg" alt="" title="Wetterstation" width="480" height="643" class="alignnone size-full wp-image-153" />

## Einführung

Im Conrad und Co. werden mit vielen bunten Bildchen Wetterstationen noch und nöcher feilgeboten. Doch die meisten haben einen gravierenden Nachteil, sie zeigen ihre Daten nur auf einem popeligen kleinen Displays an und für tolle Aufzeichnungen über längere Zeiträume (Jahreszeiten oder gar Jahre) ischt des nix gescheits, auch ist die Funk-Datenschnittstelle nicht so wirklich offengelegt.

<img loading="lazy" src="/assets/2008/09/wetterstation.jpg" alt="" title="Wetterstation 2.0" width="500" height="366" class="alignnone size-full wp-image-138" />

Drum wärs doch geschickt, des mal richtig zumachen. Aber was soll Sie denn nun alles können, die liebe Wetterstation und wie misst sie den jeweilien Wert?

#### Sensorik

  * Temperatur messen (MAX6633, Temperatursensor mit I2C)
  * Luftdruck messen (Luftdrucksensor von Freescale, analog-Out)
  * Feuchtigkeit messen (SHT15)
  * Wind messen (Bausatz mit Reedkontakt)
  * Helligkeit messen (Photowiderstand)
  * Zeit (DCF77) messen (Conrad-DCF-Empfänger)

#### Funkschnittstelle

So weit so gut, die Daten sind nun noch draußen gefangen in der wilden Natur, wie kommen die nun zu mir ins mollig warme Wohnzimmer? Warum nicht per Funk?
Nichts leichter als das. Da gibt es die kleinen feinen XBee-Module von Digi, die schicken das ganze auf dem Zigbee-Standard-basierend zu mir in die Butze.
(Update:)
Leider scheinen bei mir die Xbees nicht funktionieren zu wollen. Drum wurden die erst einmal durch Easy-Radio-Komponenten ersetzt. Mit denen funkt man im ISM-Band ohne viel Schnickschnack zwischen einem Sender und Empfänger serielle Daten.

#### Steuerung

Neben dem Mikrocontroller, einem ATmega32L, kommt noch ein Xilinx CPLD zum Einsatz. Es wird die Signale vom DCF-Empfänger und Windmesser (Anemometer) aufbereiten. Dieser dient momentan nur zum Entprellen der Daten vom DCF-Empfänger und Windmesser.

#### Spannungsversorgung

Zur Stromversorgung verwende ich eine 10W-Solarzelle mit Regler und Gel-Bleiakku. Die liefert 12V, die mit einem DC/DC-Wandler auf elektronikfreundliche 3,3V heruntergedingst werden.

Das nachfolgende Bild stellt die Wetterstation als Blockschaltbild dar.

<img loading="lazy" src="http://c0724432.cdn.cloudfiles.rackspacecloud.com/weatherstation_overview.png" alt="" title="Wetterstation Übersicht" width="300" height="212" class="alignnone size-medium wp-image-101" />

</br>

## Schaltplan/Platine

kommt noch

## Software Wetterstations-Modul

kommt noch
- AVR: in der Entwicklung.
- CPLD: aufgrund der knappen Macrozellen konnte nicht, wie gewünscht, ein I2C-Slave in VHDL umgesetzt werden. Stattdessen entprellt das VHDL nur die Signale vom DCF Empfänger und vom Windmesser.

## Hard-/Software Host-Modul

in der Entwicklung.
Geplant ist ein Embedded Webserver, der die Daten der Wetterstation über Funk empfängt und aufbereitet auf einem Display und über Ethernet darstellt. Mehr dazu im neuen Jahr.

## Wie baue ich das ganze draußen auf?

Meinen Vorschlag sieht man in der obersten Abbildung. Im Prinzip wurde alles auf einem Balkonständer montiert, der eigentlich für Satellitenantennen und Co gedacht war (bei Ebay gucken). Die schwere Bodenplatte gibts beim Obi-Biber.
Damit der böse Regen der Elektronik nicht zusetzt, gab es für diese eine Haube. Auch das Batteriemodul, nebst Regler, fanden in einer wettergeschützten Metallkiste platz.

## Wo bekomme ich was?

- Windmesser-Bausatz: <http://www.schubert-gehaeuse.de/anemometer.htm>
- Bauteile bei div. Distributoren (Reichelt, Conrad, Segor,&#8230;) oder als Muster bestellen z.B. bei [Maxim-IC.com](http://www.maxim-ic.com).
- Bleche auslasern und biegen lassen kann man sich bei mm4u.com, Knauser bestellen bei der Conrad-Apotheke Bleche zum Selberbiegen.
- Software: kommt noch

## Was kostet der Spaß?

Zugegebener Maßen ist diese Wetterstation nicht auf billig oder low-cost getrimmt. Aber es steht jedem frei, das zu verbauen, was er für richtig hält. Bei mir fielen unter anderem folgende Kosten an:

- Elektronik (mit gefertigter Platine) ca: 150€
- Mechanik (Balkonständer, Kabel, Haube, Schrauben, …) ca: 200€
- Solarmodul (mit Bleigelakku und Solarregler): 200€
- Windmesser: 35€

## Bisherige Probleme

Neben dem Problem mit dem Xbee-Funkmodem macht mir noch ein bisschen die Leistung der Solarzelle zu schaffen. Leider ist die Sonneneinstrahlung auf meinem Modul nicht besonders optimal, da u.a. ein Giebel eines anderen Hauses die direkte Sonne für mehrere Stunden am Tag wegfängt. Und besonders zur Winterzeit ist es doch allgemein eher dunkel als hell.
Die Spannung der Batterie brach mir deshalb nach etwa sieben Tagen Dauerbetrieb zusammen.
Ein zweites Panel sollte nun für genügend Leistung, auch bei weniger hellen Perioden, sorgen.

## Update Juni 2009

<img loading="lazy" src="/assets/2008/08/wetterstation_2_panels.jpg" alt="Wetterstation mit 2 Solarpanels" title="Wetterstation mit 2 Solarpanels" width="606" height="485" class="alignnone size-full wp-image-725" srcset="/assets/2008/08/wetterstation_2_panels.jpg 606w, /assets/2008/08/wetterstation_2_panels-300x240.jpg 300w" sizes="(max-width: 606px) 100vw, 606px" />

Nun wurde ein zweites Solarpanel installiert. Hierzu mussten einige Umbaumaßnahmen getroffen werden: die Batterie-Box brauchte noch eine Kabelverschraubung, der Mast noch einen breiteren Ausleger um ein zweites Panel aufnehmen zu können.

<img loading="lazy" src="/assets/2008/08/wetterstation_box.jpg" alt="Wetterstation Batteriebox" title="Wetterstation Batteriebox" width="606" height="455" class="alignnone size-full wp-image-723" srcset="/assets/2008/08/wetterstation_box.jpg 606w, /assets/2008/08/wetterstation_box-300x225.jpg 300w" sizes="(max-width: 606px) 100vw, 606px" />
Nun zeigt das Multimeter auch Traumwerte am Bleiakku an.
