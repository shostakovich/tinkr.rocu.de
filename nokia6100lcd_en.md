---
id: 63
title: 'How to: Nokia 6100 LCD (english)'
date: 2008-06-30T12:27:30+00:00
author: SES
layout: page
guid: http://tinkr.de/?page_id=63
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:70;s:11:"_thumb_type";s:10:"attachment";}'
---
<img loading="lazy"  title="zipfelmaus @ nokia 6100 lcd" src="/assets/2008/07/tricorder_platine_lcd_cut-300x233.jpg" alt=""   />

Upgrading your AVR-microcontroller with a graphical color lcd is much easier then you think. So here is what you&#8217;ll need:
- the lcd: go to ebay and look for the Nokia 6100 LCD, note that there are two different version, one with a green pcb, the other with a brown one
- then you need some further hardware, of course a microcontroller (e.g. ATmega32L) and I recommend you the breakout board form [sparkfun.com](http://www.sparkfun.com/commerce/product_info.php?products_id=600)
- and last but not least some software drivers, depending on the lcd version (mentioned above: green or brown pcb), you should use one of these drivers:
[brown pcb](http://thomaspfeifer.net/nokia_6100_display_en.htm)
[green pcb](http://www.e-dsp.com/controlling-a-color-graphic-lcd-epson-s1d15g10-controller-with-an-atmel-avr-atmega32l/)

But the driver sourcecode doesn&#8217;t help you, when you want to convert a picture to a format, that Nokia lcd can understand. No need to worry anyway, we have a solution for that - the &#8222;Bitmap to RGB8 Converter&#8220;-tool.
It generates an .h-file from a bitmap, which you can easily include in your project. Inside the .h-file is an array that contains all the bitmap-information in the RGB8-format.

**Downloads:**
[Bitmap to RGB8 Converter](/assets/2008/04/rgb2bmp.exe "Bitmap to RGB8 Converter")
[bmp.h file](/assets/2008/07/bmp.h)
[<img  title="zm-test bitmap 132x132" src="/assets/2008/07/zm.bmp" alt="" />](/assets/2008/07/zm.bmp)

(please note: to run the converter program, you need the latest .net-runtime, also note the licence-file)

`<br />
/*<br />
Sample Code<br />
includes code from the website http://www.e-dsp.com/controlling-a-<br />
color-graphic-lcd-epson-s1d15g10-controller-with-an-atmel-avr-atmega32l/<br />
*/`

`#include "bmp.h" //the converted image`

`/* ... */</p>
<p>int main {</p>
<p>/* initialize your mcu and lcd here */<br />
/* ... */</p>
<p>//create bitmap<br />
for (y = 0; y < (image_width); y++)     {       for (x = image_height; x > 0; x--)<br />
{<br />
LCD_put_pixel(0x0, x-1, y);<br />
}<br />
}</p>
<p>/* ... */</p>
<p>`

 `}<br />
`
