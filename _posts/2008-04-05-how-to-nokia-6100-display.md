---
id: 17
title: 'How to: Nokia 6100 Display (Kurz-Tutorial)'
date: 2008-04-05T10:54:33+00:00
author: SES
layout: post
guid: http://tinkr.de/blog/how-to-nokia-6100-display/
permalink: /blog/how-to-nokia-6100-display/
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";b:0;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Allgemeines
  - Technik
tags:
  - Atmega16
  - Atmega32
  - AVR
  - Bitmap
  - Nokia 6100 Display
  - RGB8
---
-> new: [english version](http://tinkr.de/nokia6100lcd_en/)

Das Ansteuern des Nokia 6100 LCDs ist zugegebener Maßen einwenig tricky. Deswegen möchte ich heute ein paar Webseiten, sowie ein von mir geschriebenes Software-Tool vorstellen, die alles zu einem Kinderspiel werden lassen.

Also, was brauchen wir alles?
1. Das Display selbst, das bekommt man günstig beim Auktionshaus des Vertrauens (ebay.de o. ä.).
2. Noch ein bißchen Hardware (einen AVR-Mikrocontroller (wie den ATmega32) zum Ansteuern des LCD und wer sich die fieselige Lötarbeit am Display ersparen und nicht noch eine zweite Spannung mit einem zweiten Netzteil zur Verfügung stellen will, der kauft noch bei Sparkfun.com eine Anschlussplatine für das LCD [(http://www.sparkfun.com/)](http://www.sparkfun.com/commerce/product_info.php?products_id=600).
3. Dann brauchen wir noch den Sourcecode zum Ansteuern des Displays. Hier sollte man darauf achten, ob man bei Ebay ein LCD mit einer braunen oder einer grünen Platine ersteigert hat. Denn diese haben unterschiedliche Controller.
Zum Code für die braune Platine bitte hier entlang: [braune Platine](http://thomaspfeifer.net/nokia_6100_display.htm)
Zum Code für die grüne Platine bitte hier klicken: [grüne Platine](http://www.e-dsp.com/controlling-a-color-graphic-lcd-epson-s1d15g10-controller-with-an-atmel-avr-atmega32l/)
(Bei dem Link zur grünen Platine gibt es noch einen Schaltplan (welcher die Anschlussplatine von Sparkfun vorraussetzt).)

Ich selber habe nur mit der grünen Platine und dem dazugehörigen Code gearbeitet. Der Sourcecode bietet nur die Möglichkeit, die Pixel einzeln auf dem Display anzusteuern. Nun wäre es ja überaus geschickt eigene Bilder anzuzeigen. Wie löst man nun dieses Problem?
Ganz einfach, man nimmt mein &#8222;Bitmap to RGB8 Converter&#8220;-Tool. Es erzeugt aus einem Bitmap-File ein h.-File mit einem Array aus RGB8-Bytes. Dieses bindet man einfach in das Projekt ein und sendet über die &#8222;LCD\_put\_pixel(color, x, y)&#8220;-Funktion die Bitmap-Pixel an das LCD. Mit den beiden #defines image\_height, image\_width lassen sich die beiden Parameter (Bildhöhe und Bildweite) in der for-Schleife elegant steuern (siehe Codebeispiel unten).

**Download:**
[Bitmap2RBG8-Konvertierungstool](/assets/2008/04/rgb2bmp.exe "Bitmap2RBG8-Konvertierungstool")

(Hinweis: Das Programm ist in C# geschrieben worden und benötigt das neueste .net-Framework, bitte beachte auch das Licence-File)

`<br />
  /*<br />
   &nbsp;&nbsp;Auszug Quelltext<br />
   &nbsp;&nbsp;Enthält angepassten Code der der Seite http://www.e-dsp.com/controlling-a-<br />
   &nbsp;&nbsp;color-graphic-lcd-epson-s1d15g10-controller-with-an-atmel-avr-atmega32l/<br />
  */ </p>
<p> /*<br />
  die beiden defines aus dem vom Bitmap2RBG8-Konvertierungstool erstellten *.h-File</p>
<p>  #define image_width<br />
  #define image_height<br />
*/</p>
<p>  for (y = 0; y < (image_width); y++)
  {
  &nbsp;&nbsp;for (x = image_height; x > 0; x--)<br />
  &nbsp;&nbsp;{<br />
  &nbsp;&nbsp;&nbsp;&nbsp;LCD_put_pixel(0x0, x-1, y);<br />
  &nbsp;&nbsp;}<br />
  }<br />
`
