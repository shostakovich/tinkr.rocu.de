---
id: 1743
title: Hack a Canon camera and controll it with an Arduino
date: 2010-07-20T19:31:01+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=1743
permalink: /blog/hack-a-canon-camera-and-controll-it-with-an-arduino/
thumbnail:
  - http://cdn.cloudfiles.mosso.com/c1952502/2010/07/canon_camera_hack_2_sml.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:1769;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Allgemeines
  - Basteln
  - Technik
tags:
  - Arduino
  - camera hack
  - Canon Ixus
  - Fritzing
  - 'Pan&amp;Tilt'
---
For our Z-Pan-&Tilt-System I needed to controll a camera with an Arduino. My first plan was to use a servo motor to switch the snapshot button of the camera. But this approach would be very complex. So I thought of bypassing the snapshot button with an electronic hack.

At first I disassembled the camera (Canon Ixus 70). A disassmebly video can be found here: <http://www.youtube.com/watch?v=ZsJAYNCPWng>

At the switch there are two points we need to solder a wire to, the ground and signal terminal. They are marked in the picture below:
<img loading="lazy" src="/assets/2010/07/canon_camera_hack.png" alt="" title="Canon Ixus camera hack" width="606" height="529" class="alignnone size-full wp-image-1745" srcset="/assets/2010/07/canon_camera_hack.png 606w, /assets/2010/07/canon_camera_hack-300x261.png 300w" sizes="(max-width: 606px) 100vw, 606px" />
I used a very thin enamelled copper wire because the terminals are very thin.

I extended the enamelled copper wire with normal wire and bond it there, where the damaged lcd once was.

[Update] I found out, that the metal sheet on the back of the lcd must not be removed from the camera, otherwise the CMOS sensor is not correctly shielded and produces noise on the captured image.

So this setup will cause noise on your images:
<img loading="lazy" src="/assets/2010/07/canon_camera_hack_2.jpg" alt="" title="modified Canon Ixus camera" width="606" height="455" class="alignnone size-full wp-image-1747" srcset="/assets/2010/07/canon_camera_hack_2.jpg 606w, /assets/2010/07/canon_camera_hack_2-300x225.jpg 300w" sizes="(max-width: 606px) 100vw, 606px" />

Add the metall sheet, and the noise is gone:
<img loading="lazy" src="/assets/2010/07/canon_camera_hack_3.jpg" alt="" title="Canon Ixus: shielded CMOS sensor" width="606" height="455" class="alignnone size-full wp-image-1767" srcset="/assets/2010/07/canon_camera_hack_3.jpg 606w, /assets/2010/07/canon_camera_hack_3-300x225.jpg 300w" sizes="(max-width: 606px) 100vw, 606px" />

For the cable feedthrough I filed a small hole in the enclosure:
<img loading="lazy" src="/assets/2010/07/canon_camera_hack3.png" alt="" title="Canon Ixus: cable feedthrough" width="606" height="455" class="alignnone size-full wp-image-1748" />

Finally the fully assembled system with the camera and the pan&tilt system.
<img loading="lazy" src="/assets/2010/07/canon_camera_hack4.jpg" alt="" title="camera on the pal&tilt system" width="606" height="455" class="alignnone size-full wp-image-1749" srcset="/assets/2010/07/canon_camera_hack4.jpg 606w, /assets/2010/07/canon_camera_hack4-300x225.jpg 300w" sizes="(max-width: 606px) 100vw, 606px" />

The circuit can be found here:
<img loading="lazy" src="/assets/2010/07/Arduino_CAM_Hack_breadboard.png" alt="" title="Arduino camera hack - breadboard" width="606" height="587" class="alignnone size-full wp-image-1754" srcset="/assets/2010/07/Arduino_CAM_Hack_breadboard.png 606w, /assets/2010/07/Arduino_CAM_Hack_breadboard-300x290.png 300w" sizes="(max-width: 606px) 100vw, 606px" />
The Arduino connects the switch signal to GND via a npn-transistor. With the signal to GND, the camera takes a picture.
Note in the code, that the transistor is inverting.

Code for the Arduino:

`<br />
//-----------------------------------------------------<br />
int CamPin =  8;    // Cam trigger connected to digital pin 8</p>
<p>// The setup() method runs once, when the sketch starts</p>
<p>void setup()   {<br />
  // initialize the digital pin as an output:<br />
  pinMode(CamPin, OUTPUT);<br />
  digitalWrite(CamPin, LOW);    // set the CAM trigger off<br />
}</p>
<p>// the loop() method runs over and over again,<br />
// as long as the Arduino has power</p>
<p>void loop()<br />
{<br />
  digitalWrite(CamPin, HIGH);   // set the CAM trigger on, capture image<br />
  delay(1000);                  // wait for a second<br />
  digitalWrite(CamPin, LOW);    // set the CAM trigger off<br />
  delay(4000);                  // wait for 4 seconds<br />
}<br />
//-----------------------------------------------------<br />
`

Finally the video, don&#8217;t mind the lcd, it was broken before. The camera captures an image every five seconds.


Please note: These instructions need quite a lot of skills in mechanics, soldering and electronics. Don&#8217;t use this project to start with electronics. You may use an old or partly damaged camera, instead of an expensive new one. Use at your own risk.
