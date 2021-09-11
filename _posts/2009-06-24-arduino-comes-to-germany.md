---
id: 785
title: Arduino comes to Germany
date: 2009-06-24T21:11:43+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=785
permalink: /blog/arduino-comes-to-germany/
thumbnail:
  - http://tinkr.de/wp-content/uploads/2009/06/arduino_sml.png
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:799;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Allgemeines
tags:
  - Arduino
  - Garduino
---
**Update:** für eine Übersicht über unsere Arduino-Projekte klicke [hier](http://tinkr.de/blog/tag/arduino/).

<img loading="lazy" src="/assets/2009/06/ArduinoNG.jpg" alt="Arduino" title="[Quelle: www.arduino.cc]" width="606" height="458" class="alignleft size-full wp-image-799" srcset="/assets/2009/06/ArduinoNG.jpg 606w, /assets/2009/06/ArduinoNG-300x226.jpg 300w" sizes="(max-width: 606px) 100vw, 606px" />

Der Gemeinde um das MAKEzine ist er schon länger bekannt, der Arduino. In Deutschland kennt diese kleine feine Entwicklungsplattform nur eine Hand voll Leute. Um das zu ändern hat freeduino.de ein Gewinnspiel initiiert, die den Arduino bei Deutschen Bloggern bekannt machen soll. [Link.](http://www.freeduino.de/de/blog/arduino-blogparade-und-gewinnspiel) Auch Zipfelmaus möchte nun hiermit seinen Beitrag leisten:

Nachfolgend wollen wir ein paar Beispiele vorstellen, die sich mit dem Arduino realisieren lassen.

### Vorschlag Nr 1. - Pflanzen automatisch wässern und beleuchten.

In der Make-Ausgabe 18 wird hierzu eine Variante des Arduino vorgestellt, der Garduino. Er ermöglicht ein automatisches wässern und beleuchten von Pflanzen, so steht dem Sommerurlaub nichts mehr im Wege, wenn sich nun ein kleines Kästchen Elektronik um die Pflanzen daheim kümmert.

<table style="margin: 10px 0pt;" border="1" bordercolor="#000000" cellpadding="0" cellspacing="0">
  <tr>
    <td>
      <table background="http://www.make-digital.com/make/vol18/include/icons/nav_bg.gif" border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr height="35" valign="middle">
          <td align="left">
            <a href="http://www.make-digital.com/make/vol18/" title="View Volume 18" target="_blank"><img style="margin-left: 5px; margin-right: 5px;" src="http://www.make-digital.com/make/vol18/include/icons/navbar_logo.gif" border="0" height="28" /></a>
          </td>

          <td id="topBar" align="right">
            <font face="Comic Sans MS,Arial,Helvetica" size="1">Look Inside >>&nbsp;</font>
          </td>
        </tr>
      </table>

      <table align="center" border="0" cellpadding="0" cellspacing="0" width="240">
        <tr id="snippetThumbs" align="center">
          <td align="right">
            <a href="http://www.make-digital.com/make/vol18/?pg=94" target="_blank" onclick="name='w'+Math.round(Math.random()*(1000));w=screen.width-10;h=screen.height-40;window.open('http://www.make-digital.com/make/vol18/?pg=94',name,'toolbar=no,menubar=no,resizable=yes,scrollbars=yes,left=0,top=0,width='+w+'height='+h);return false;" title="View Magazine"><img src="http://www.make-digital.com/tcprojects/oreilly/make/inbox/61979/imgpages/tn/makevol18_0094.gif" border="0" /></a>
          </td>

          <td align="left">
            <a href="http://www.make-digital.com/make/vol18/?pg=94" target="_blank" onclick="name='w'+Math.round(Math.random()*(1000));w=screen.width-10;h=screen.height-40;window.open('http://www.make-digital.com/make/vol18/?pg=94',name,'toolbar=no,menubar=no,resizable=yes,scrollbars=yes,left=0,top=0,width='+w+'height='+h);return false;" title=" View Magazine"><img src="http://www.make-digital.com/tcprojects/oreilly/make/inbox/61979/imgpages/tn/makevol18_0095.gif" border="0" /></a>
          </td>
        </tr>
      </table>

      <table background="http://www.make-digital.com/make/vol18/include/icons/nav_bg.gif" border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr height="28" valign="middle">
          <td id="bottomBar" align="center">
            <font face="Comic Sans MS,Arial,Helvetica" size="1">Volume 18</font>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>

<h3 style="clear:both;">
  Vorschlag Nr 2. - Automatisch SMS verschicken
</h3>

Über die serielle Schnittstelle liesse sich ein älteres Handy anschließen. Bei verschiedenen Events, z.B. einem Einbrecher, registriert der Arduino, Moment - hier stimmt was nicht, sag ich mal lieber dem Handy über die serielle Schnittstelle Bescheid, dass es eine SMS schicken soll. Flucks wird man informiert und kann den Täter stellen und ihn vom Millionen-schweren Kunstraub abhalten.
<img loading="lazy" src="/assets/2009/06/zm_handy_sml.png" alt="SMSarduino" title="zm_handy_sml" width="140" height="140" class="alignleft size-full wp-image-792" />

<h3 style="clear:both;">
  Vorschlag Nr 3. - LED-Licht
</h3>

Zipfelmäuse lieben es LED-Lichter zu bauen (wie man in den Projekten sehen kann (Bilder NAV-Leiste)). Das geht natürlich auch mit dem Arduino. Mit den verschiedenen PWM-Ausgängen ließen sich auch RGB-LEDs prima ansteuern und so wunderbare Farben zaubern.
<img loading="lazy" src="/assets/2009/06/zm_led_sml.png" alt="LEDarduino" title="LED" width="140" height="140" class="alignleft size-full wp-image-789" />

<h3 style="clear:both;">
  Vorschlag Nr 4. - Waschmaschinen-Timer
</h3>

Bei uns ist die Waschmaschine im tiefen Keller, da wäre es schon oft geschickt, wenn man einen kleinen Timer hätte, der einem sagt, wann die Schleuderkiste endlich fertig ist, oft genug steht man davor und die dreht noch immer lustig ihre Runden.
