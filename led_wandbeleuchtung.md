---
id: 3
title: Bau dir deine eigene LED-Wandbeleuchtung
date: 2008-03-17T22:41:27+00:00
author: SES
layout: page
guid: http://tinkr.de/blog/?page_id=3
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:880;s:11:"_thumb_type";s:10:"attachment";}'
---
Die Wandbeleuchtung ist mit je 22 orangen und weißen 1W-Luxeon-LEDs in der oberen und mit 22 blauen in der unteren Zeile bestückt
(Gesamtleistung: max. 66 Watt). Die Ansteuerung übernehmen drei 25W-LED-Treiber, wie es sie bei Reichelt oder Conrad kaufen gibt.
Über Taster können die LEDs ein- und ausgeschaltet, sowie gedimmt werden.
Mittig sind RGB-Elemente bestehend aus insgesamt 60 Telux-LEDs verbaut (Gesamtleistung max. 10 Watt). Die Telux-LEDs sind an den
I2C-Baustein MAX6956 angeschlossen. Die Steuerung übernimmt ein ATmega16.

(Video läuft in vierfacher Geschwindigkeit, der Farbwechsel läuft deutlich langsamer ab.)


Wie man in den Bildern unten sieht, ist der Aufbau ganz simpel. Auf einer Pressspannplatte sind zwei Metallbleche befestigt, auf denen die Luxeon-LEDs montiert sind.
Zwischen den beiden Metallwinkeln ist Platz für die RGB-Module gelassen worden. Auf einem RGB-Modul befinden sich je zwei rote, grüne und blaue Telux LEDs.
Als Diffusor kommt eine milchige Plexiglasverkleidung zum Einsatz, die mit Schrauben an die Metallwinkel montiert wird.

### Einkaufsliste

  * Luxeon LEDs
  * Wärmeleitpaste
  * Telux LEDs
  * Plexiglas
  * Aluleisten für die Plexiglas-Kanten
  * Kraft-Doppelseitiges Klebeband zum Aufkleben der Aluleisten
  * Mdf-Platten (o.ä.)
  * Schrauben/Unterlegscheiben/Muttern
  * Draht
  * LED-Treiber/MAX6956/Mikrocontroller (z.B. ATmega16)
  * Netzteil

### Werkezugkiste

  * Schlagbohrer
  * Akkuschrauber
  * Holz-/Metallbohrer
  * Schraubenzieher
  * Schere
  * Abisolierzange
  * Lötkolben, Lot

### Kosten

  * >200€

### Bastelspaß-Dauer

  * >20h (mit Bestellungen, Konstruieren, Verdrahten, &#8230;)

<div id='gallery-6' class='gallery galleryid-3 gallery-columns-3 gallery-size-thumbnail'>
  <dl class='gallery-item'>
    <dt class='gallery-icon landscape'>
      <a href='http://tinkr.de/led_wandbeleuchtung/rgb_module/'><img width="150" height="150" src="http://tinkrde.test.mug.im/wp-content/uploads/sites/7/2008/03/RGB_Module-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="" loading="lazy" /></a>
    </dt>
  </dl>

  <dl class='gallery-item'>
    <dt class='gallery-icon landscape'>
      <a href='http://tinkr.de/led_wandbeleuchtung/rgb_module_1/'><img width="150" height="150" src="http://tinkrde.test.mug.im/wp-content/uploads/sites/7/2008/03/RGB_Module_1-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="" loading="lazy" /></a>
    </dt>
  </dl>

  <dl class='gallery-item'>
    <dt class='gallery-icon landscape'>
      <a href='http://tinkr.de/led_wandbeleuchtung/rgb_module_2/'><img width="150" height="150" src="http://tinkrde.test.mug.im/wp-content/uploads/sites/7/2008/03/RGB_Module_2-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="" loading="lazy" /></a>
    </dt>
  </dl>

  <br style="clear: both" />

  <dl class='gallery-item'>
    <dt class='gallery-icon landscape'>
      <a href='http://tinkr.de/led_wandbeleuchtung/wandbeleuchtung_ohne_verkleidung/'><img width="150" height="150" src="http://tinkrde.test.mug.im/wp-content/uploads/sites/7/2008/03/Wandbeleuchtung_ohne_Verkleidung-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="" loading="lazy" /></a>
    </dt>
  </dl>

  <dl class='gallery-item'>
    <dt class='gallery-icon landscape'>
      <a href='http://tinkr.de/led_wandbeleuchtung/wandbeleuchtung_ohne_verkleidung_1/'><img width="150" height="150" src="http://tinkrde.test.mug.im/wp-content/uploads/sites/7/2008/03/Wandbeleuchtung_ohne_Verkleidung_1-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="" loading="lazy" /></a>
    </dt>
  </dl>

  <dl class='gallery-item'>
    <dt class='gallery-icon landscape'>
      <a href='http://tinkr.de/led_wandbeleuchtung/wandbeleuchtung_ohne_verkleidung_2/'><img width="150" height="150" src="http://tinkrde.test.mug.im/wp-content/uploads/sites/7/2008/03/Wandbeleuchtung_ohne_Verkleidung_2-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="" loading="lazy" /></a>
    </dt>
  </dl>

  <br style="clear: both" />

  <dl class='gallery-item'>
    <dt class='gallery-icon landscape'>
      <a href='http://tinkr.de/led_wandbeleuchtung/wandbeleuchtung_ohne_verkleidung_3/'><img width="150" height="150" src="http://tinkrde.test.mug.im/wp-content/uploads/sites/7/2008/03/Wandbeleuchtung_ohne_Verkleidung_3-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="" loading="lazy" /></a>
    </dt>
  </dl>

  <dl class='gallery-item'>
    <dt class='gallery-icon landscape'>
      <a href='http://tinkr.de/led_wandbeleuchtung/wandbeleuchtung_ohne_verkleidung_4/'><img width="150" height="150" src="http://tinkrde.test.mug.im/wp-content/uploads/sites/7/2008/03/Wandbeleuchtung_ohne_Verkleidung_4-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="" loading="lazy" /></a>
    </dt>
  </dl>

  <br style='clear: both' />
</div>
