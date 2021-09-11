---
id: 142
title: AVR-Seite
date: 2008-09-16T21:22:37+00:00
author: SES
layout: page
guid: http://tinkr.de/?page_id=142
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:144;s:11:"_thumb_type";s:10:"attachment";}'
---
Auf dieser Seite möchte ich interessante Schaltungen für AVR-Mikrocontroller vorstellen.

### DAC-Schaltung:

Einen DAC kann man für vieles verwenden, z.B. für feinste Audioschaltungen. Verwendet man einen I2C-DAC gestaltet sich die Ansteuerung recht einfach.
Für einen Sinus braucht es nur eine handvoll Code und den passenden DAC. Hier habe ich den LTC2631 ([Link](http://www.linear.com)) mit 8-Bit Auflösung verwendet. Die beiden Adressleitungen sind auf GND gezogen und der Ref-Pin ist unbeschaltet. Der Rest sollte sich aus dem Datenblatt erschließen.
</br>
</br>

Das Staroffice-Calc-Tool zeigt den Sinus so an:
[<img loading="lazy" src="/assets/2008/09/sinus_sml-300x197.png" alt="" title="Sinus, berechnet" width="300" height="197" class="alignnone size-medium wp-image-143" />](/assets/2008/09/sinus_sml.png)

</br>
</br>

Das Scope zeigt dann am Ausgang des DACs folgendes an:
[<img loading="lazy" src="/assets/2008/09/sinus_scope-300x158.png" alt="" title="Sinus mit Scope aufgezeichnet" width="300" height="158" class="alignnone size-medium wp-image-144" />](/assets/2008/09/sinus_scope.png)
Nicht ganz so schön in 3D wie das Calc-Tool, aber immerhin 😉

</br>
</br>

Code-Schnipsel:
`<br />
  volatile unsigned char sinus[121]={<br />
128, 134, 141, 147, 154, 160, 167, 173, 179, 185, 191, 197, 202, 208, 213, 218,<br />
222, 227, 231, 234, 238, 241, 244, 247, 249, 251, 252, 253, 254, 255, 255, 255,<br />
254, 253, 252, 251, 249, 247, 244, 241, 238, 234, 231, 227, 222, 218, 213, 208,<br />
202, 197, 191, 185, 179, 173, 167, 160, 154, 147, 141, 134, 128, 121, 114, 108,<br />
101,  95,  88,  82,  76,  70,  64,  58,  53,  47,  42,  37,  33,  28,  24,  21,<br />
 17,  14,  11,   8,   6,   4,   3,   2,   1,   0,   0,   0,   1,   2,   3,   4,<br />
  6,   8,  11,  14,  17,  21,  24,  28,  33,  37,  42,  47,  53,  58,  64,  70,<br />
  76, 82,  88,  95, 101, 108, 114, 121, 128};<br />
`

`<br />
  //DAC-function, place in loop and add a delay-function or place in a Timer-ISR<br />
  i2c_start(0x20+I2C_WRITE);     // set device address and write mode<br />
  i2c_write(0x33); //Command-word<br />
  i2c_write(sinus[i]); //DAC-value 8-bit<br />
  i2c_write(0x00);     //don't care value<br />
  i2c_stop();<br />
`
