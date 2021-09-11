---
id: 2364
title: Bau dir ein Apple-Solar-Ladegerät
date: 2011-05-07T12:48:58+00:00
author: SES
layout: page
guid: http://tinkr.de/?page_id=2364
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:2381;s:11:"_thumb_type";s:10:"attachment";}'
---
## Update

19.09.12: Unter <http://tinkr.de/blog/upgrade-solar-usb-charger/> habe ich die Erweiterung um ein OLED-Display und eine Strom-/Spannungsmessung mit einem Arduino Nano beschrieben.

* * *

### Idee

Warum nicht seine eigenen Apple-Geräte mit Solar-Strom laden, wenn man über eine entsprechend Leistungsfähige Anlage verfügt?

### Einleitung

**Wichtiger Hinweis: Bitte beachte, der Einsatz eines selbstgebauten Netzteils kann Auswirkungen auf die Garantie des Herstellers machen. Ein Nachbau erfolgt nur auf eigene Gefahr.**
<img loading="lazy" src="/assets/2011/05/apple_solar_charger_3.jpg" alt="" title="Iphone mit dem Apple-Solar-Lagegerät" width="606" height="439" class="alignnone size-full wp-image-2365" />

Mit einer kleinen Zusatzschaltung kann ich meine 20W-Solaranlage im Garten (für die Wetterstation) dazu verwenden, die mobilen Geräte aus dem Hause Apple zu laden. Hierzu zählen die iPods, iPhones und die iPads.
<img loading="lazy" src="/assets/2011/05/apple_solar_charger_solar_anlage.jpg" alt="" title="Garten Solaranlage - 20W" width="606" height="455" class="alignnone size-full wp-image-2367" srcset="/assets/2011/05/apple_solar_charger_solar_anlage.jpg 606w, /assets/2011/05/apple_solar_charger_solar_anlage-240x180.jpg 240w" sizes="(max-width: 606px) 100vw, 606px" />
<img loading="lazy" src="/assets/2011/05/apple_solar_charger_4.jpg" alt="" title="Zusammengebautes Gehäuse vom Ladegerät" width="606" height="455" class="alignnone size-full wp-image-2366" srcset="/assets/2011/05/apple_solar_charger_4.jpg 606w, /assets/2011/05/apple_solar_charger_4-240x180.jpg 240w" sizes="(max-width: 606px) 100vw, 606px" />

Die Schaltung wandelt über einen DC/DC-Wandler die 14-12V DC der Solaranlage runter auf Apple-verträgliche 5V und stellt diese an einer USB-Buchse zur Verfügung. Über ein Widerstandsnetzwerk kann man den Geräten vorgaukeln, man sei ein original-Apple-Netzteil und schon ziehen die Geräte einen Ladestrom von 2A statt 0,5A. Oder im iPad-Fall würde es ohne dieses Netzwerk keine Aufladung des internen Akkus stattfinden, da das Gerät nur mit 2A geladen werden möchte.

##############################
Update 10.08.11: Wir haben festgestellt, dass der Ladestrom doch nur 1A beträgt. Das hier vorgestellte Widerstandsnetzwerk schaltet intern leider nicht die 2A-Ladung frei, sondern nur die Ladung mit 1A.
##############################

Das Laden des iPhones (3GS) dauert genauso lange wie mit dem mitgelieferten Netzteil, 1,5h. Das iPad2 dauert recht lange, aber das ist mit dem Netzteil genauso.

### Schaltplan

[<img loading="lazy" src="/assets/2011/05/solar_lader_zm_110507_sch_sml.jpg" alt="" title="Apple-Solar-Lader Schaltplan" width="606" height="418" class="alignnone size-full wp-image-2371" />](/assets/2011/05/solar_lader_zm_110507_sch.jpg)

Was muss unsere Hardware genau tun? Wir müssen aus ca. 12V am Eingang von der Solaranlage - ausgangsseitig 5V zur Verfügung stellen. Desweiteren müssen wir die USB-Data+ und -Data- Leitung speziell beschalten, damit uns die Apple-Hardware für ein Originalnetzteil (liefert bis zu 2A) und nicht für eine poppelige USB-Buchse hält, die nur 0,5A liefern kann.
Demnach muss unsere Spannungsquelle auch mehr als 2A zur Verfügung stellen können. Ein 7805 kommt daher nicht in Frage, der Wirkungsgrad wäre erstens sehr schlecht (um die 35%) und der max. Strom liegt nur bei 1A.
Eingangsseitig haben wir eine nominale Spannung des Solar-Systems von 12V, nominal bedeutet, dass die Spannung schwanken kann, sagen wir zwischen 14,5V und 9V. Aus diesem Grund habe ich einen DC/DC-Wandler verbaut, der aus diesem Spannungsbereich eine Ausgangsspannung von 5V erzeugt.

Einen Eagle-Schaltplan und -Layout gibt es unter dem Punkt &#8222;Download&#8220;.

### Stückliste

C15 150uF Elko
C16 150uF Elko
R32 50k0 R0805
R33 50k0 R0805
R34 150k0 R0805
R35 100k0 R0805
T1 THN15-1211 oder THN15-2411WI
X40
X41

Gehäuse [Conrad 523130 - 62](http://www.conrad.de/ce/de/product/523130/EURO-KUNSTSTOFF-GEHAeUSE-GELB)
USB-Buchse zur Montage
Neutrik-Buchse
Frontbleche siehe Downloads

### Downloads

[Apple-Solarlader - Schaltplan und Layout](/assets/2011/05/solar_lader_zm_110507.zip)
[Apple-Solarlader - Frontbleche für Frontplatten-Designer von Schaeffer AG](/assets/2011/05/solarlader_schaeffer_ag_110410.zip)

Bitte beachte: der Einsatz eines selbstgebauten Netzteils kann Auswirkungen auf die Garantie des Herstellers machen. Ein Nachbau nur auf eigene Gefahr.
