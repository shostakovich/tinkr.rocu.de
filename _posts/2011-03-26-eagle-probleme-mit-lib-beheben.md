---
id: 2316
title: 'Eagle: Probleme mit Lib beheben'
date: 2011-03-26T16:12:01+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=2316
permalink: /blog/eagle-probleme-mit-lib-beheben/
thumbnail:
  - http://tinkr.de/wp-content/uploads/2011/03/eagle_library_sml.png
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:2326;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Allgemeines
tags:
  - Eagle
  - Eagle Library
  - Importieren
  - Problem
---
Heute habe ich eine Lösung für ein altes Problem bei Eagle gefunden: Oft findet man ein Bauteil in einer Library, die allerdings mit einer aktuellen 5er Version erstellt worden ist und man selbst hat noch eine alte 4er auf der Platte. Will man die Lib verwenden, bekommt man z.B. folgende Fehlermeldung:

<img loading="lazy" src="/assets/2011/03/eagle_library_fehlermeldung.png" alt="" title="Eagle Fehlermeldung falsche Version"    />
Um nun doch diese Lib in unserer 4er Version einsetzen zu können, laden wir uns noch die 5er Version herunter und aktivieren sie als Freeware.

Dann gehen wir wie folgt vor:

### 1. Eagle 5.xx

lib öffnen in Eagle 5.xx
Datei-> exportieren-> als Skript
Skript abspeichern
<img loading="lazy" src="/assets/2011/03/eagle_library_skript_export.png" alt="" title="als erstes neue Lib in Eagle 5.xx öffnen und als Script exportieren"    />

### 2. Eagle 4.xx

zurück im Eagle 4.xx
neue Bibliothek öffnen, speichern
Datei Skript ausführen, eben angelegtes Skript ausführen
<img loading="lazy" src="/assets/2011/03/eagle_library_skript_import.png" alt="" title="zurück in der 4.xx Version das Script importieren"    />

Fehlermeldungen können wir erstmal mit einem OK-Klick ignorieren. Und erhalten dann eine unter der 4er Version ausführbare Lib.

<img loading="lazy" src="/assets/2011/03/eagle_library.png" alt="" title="fertig ist die funktionierende Library"    />
