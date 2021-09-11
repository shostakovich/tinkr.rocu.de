---
id: 1399
title: 'Notiz: Unter Mac OS X das VPN einer AVM Fritz Box nutzen'
date: 2010-02-19T20:03:25+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=1399
permalink: /blog/mac-os-x-und-fritz-box-vpn/
thumbnail:
  - http://cdn.cloudfiles.mosso.com/c0723052/vpn_small.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:1403;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Webkram
tags:
  - AVM
  - Fritz Box
  - internet
  - IPSec
  - Mac OS X
  - VPN
---
Das Internet ist ein sehr unsicherer Ort und besonders gefährlich ist es in öffentlichen Netzwerken zu surfen. Es bedarf keiner besonderen technischen Expertise in einem offenen WLAN  Passwörter zu erschnüffeln und wenn man dann nicht nur von Scriptkiddies ausgeht, sondern von einem bösen Buben der sein Handwerk versteht, mag man eigentlich schon gar nicht mehr seinen Laptop im Café um die Ecke aufklappen.

<a title="Bild von clintjcl (Flickr)" href="http://www.flickr.com/photos/clintjcl/" target="_blank"><img loading="lazy" class="alignnone size-full wp-image-1403" title="Besser mit VPN" src="/assets/2010/02/vpn1.jpg" alt="" width="606" height="334" srcset="/assets/2010/02/vpn1.jpg 606w, /assets/2010/02/vpn1-300x165.jpg 300w" sizes="(max-width: 606px) 100vw, 606px" /></a>

Neben Socks über SSH-Tunnel für den Vollnerd und kostenpflichtigen VPN-Anbietern (hier empfehle ich <a href="http://www.swissvpn.net/" target="_blank">SwissVPN</a>) habe ich inzwischen noch eine recht Schicke Alternativlösung für mich gefunden.

Ich verbinde meinen Laptop per IPSec mit meiner AVM Fritz Box 7270 und surfe dann erst ab zu Hause unverschlüsselt.

In diesem kleinen Artikel will ich grob skizzieren, wie man am elegantesten eine Verbindung zwischen einer Fritz Box und einem Macbook herstellt.

  * DynDns-Account anlegen (http://www.dyndns.com/)
  * Unter Einstellungen-> Erweiterte Einstellungen-> Internet->Freigaben-> Dynamic DNS die Zugangsdaten eintragen.
  * Die Fritz Box! ist jetzt von ausserhalb unter diesem Hostnamen zu erreichen.
  * Den <a href="http://www.equinux.com/de/products/vpntracker/vpnhowto.html?device=1337&appversion=61130" target="_blank">VPN Tracker 6 Setup Assistent für die Fritz Box!</a> herunterladen
  * Profil erstellen (Default ist ok) - 2 Dateien werden erzeugt
  * Profil auf der Fritz Box! hochladen (Einstellungen-> Erweiterte Einstellungen-> Internet->Freigaben->VPN)
  * <a href="http://www.lobotomo.com/products/IPSecuritas/" target="_blank">IPSecuritas</a> herunterladen. Macht effeltiv das selbe wie VPN-Tracker und kostet genau 0 Euro.
  * Unter Verbindungen->Verbindungen bearbeiten die Werte aus dem Profil einstellen.

Letztendlich könnt ihr euch dann ganz simpel, für lau und ziemlich elegant von eurem Macbook unterwegs auf der Fritz Box! einwählen und von dort aus surfen. Böse Buben können dank der verschlüsselten Verbindung nichts mitlauschen.
