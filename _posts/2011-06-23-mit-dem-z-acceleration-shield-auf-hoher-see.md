---
id: 2389
title: Mit dem Z-Acceleration-Shield auf hoher See
date: 2011-06-23T21:12:39+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=2389
permalink: /blog/mit-dem-z-acceleration-shield-auf-hoher-see/
thumbnail:
  - http://tinkr.de/wp-content/uploads/2011/06/acceleration_shield_01_sml.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:2400;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Allgemeines
  - Technik
tags:
  - Adventure of the Seas
  - Arduino
  - Beschleunigungssensor
  - Kreuzfahrt
  - z-Acceleration-Shield
---
Anfang Juni waren wir auf hoher See unterwegs mit dem Kreuzfahrtschiff &#8222;Adventure of the Seas&#8220;. Wir berichteten hierzu bereits auf [geekcruise.de](http://geekcruise.de/index.php/2011/06/kreuzfahrt-tagebuch-adventure-of-the-seas-westl-mittelmeer-ab-malaga/).
Das Zipfelmaus-Team hatte natürlich nicht nur Sonnencreme im Gepäck, sondern auch ein paar Technik-Gadgets mit dabei. Neben einer kleinen Fotoausrüstung und einen Garmin GPS zum [Aufzeichnen der Route](http://geekcruise.de/wp-content/uploads/sites/7/2011/06/adventure_of_the_seas_route_sommer_2011_gps_gross.jpg) hatten wir auch ein Arduino-Kit mit dem Z-Acceleration-Shield an Bord. Hiermit wollten wir den Seegang unseres Schiffes aufzeichnen.

<img loading="lazy" src="/assets/2011/06/acceleration_shield_00.jpg" alt="" title="Z-Acceleration-Shield Box" width="606" height="455" class="alignnone size-full wp-image-2398" srcset="/assets/2011/06/acceleration_shield_00.jpg 606w, /assets/2011/06/acceleration_shield_00-240x180.jpg 240w" sizes="(max-width: 606px) 100vw, 606px" />
<img loading="lazy" src="/assets/2011/06/acceleration_shield_01.jpg" alt="" title="Z-Acceleration-Shield Box - geöffnet" width="606" height="455" class="alignnone size-full wp-image-2399" srcset="/assets/2011/06/acceleration_shield_01.jpg 606w, /assets/2011/06/acceleration_shield_01-240x180.jpg 240w" sizes="(max-width: 606px) 100vw, 606px" />

Das Dumme war nur, es gab keinen nennenswerten Seegang. Die See im Mittelmeer war sehr ruhig. Man konnte kaum Ausschläge in der Visualisierungssoftware erkennen. Mit [Processing](http://www.processing.org) hatte ich hierfür eingens ein kleines Tool geschrieben, mit dem man die Beschleunigungs- und Drehratenwerte der Beschleunigungssensoren anzeigen lassen kann. Die Ausschläge blieben insgesamt bescheiden und man erkennt höchstens die Eigenvibrationen des Schiffes. Diese traten auch auf, als das Schiff fest vertaut an der Pier lag.

<img loading="lazy" src="/assets/2011/06/6dof_110605_225136.png" alt="" title="Aufzeichnung von dem Arduino z-Acceleration-Shield während der Kreuzfahrt" width="606" height="732" class="alignnone size-full wp-image-2392" />

Zum Glück stehen bald noch weitere Fahrten auf hoher See an, bei denen ich größere Ausschläge erwarte.
