---
id: 1896
title: 'Arduino Pan&#038;Tilt-System'
date: 2010-10-14T22:06:30+00:00
author: SES
layout: page
guid: http://tinkr.de/
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:1920;s:11:"_thumb_type";s:10:"attachment";}'
---
On this page we present the Arduino Pan&Tilt-System.
An Arduino controlls a Canon Ixus Camera and two servos of the camera pan&tilt system from Lynxmotion. We also designed a aluminium plate where all parts are mounted on. You can use this design to make ultra-mega- or even giga-pixel images or make time lapsed movies from single photo shots.

### Hardware

<img loading="lazy" src="/assets/2010/10/pan_tilt_arduino_complette.jpg" alt="" title="Arduino Pan&Tilt system"    />
<img loading="lazy" src="/assets/2010/10/pan_tilt_arduino_schematic.jpg" alt="" title="Arduino schematic - Pan&Tilt-system made with Fritzing"    />
- Arduino Duemilanove (at Ebay, around 20€/$)
- Arduino Prototyping Shield (at Ebay, around 8€/$)
- 7.2V racing battery pack (NiCd or NiMh) (around 15€/$)
- Lynxmotion Pan&Tilt system ([Link](http://www.lynxmotion.com/p-287-lynx-b-pan-and-tilt-kit-black-anodized.aspx) , around 45€/$)
- digital camera (see our hack [here](http://tinkr.de/blog/hack-a-canon-camera-and-controll-it-with-an-arduino/))
- milled 160x170mm aluminium plate (you can create and upload a design to www.schaeffer-ag.de using the Frontplatten-Designer tool, around 35€/$)
You can download the plate design in the download section.
- screws and other assembly material (around 8€/$)

<img loading="lazy" src="/assets/2010/10/frontplatten_designer.png" alt="" title="Frontplatten Designer - aluminium plate" />

### Software

The software is devided into different parts:

#### 1.) Init

Initialization of the driver modules of the servos, (serial interface if needed), button, &#8230; .

#### 2.) Functions

There are two main functions, one for the &#8222;time lapsed mode&#8220; and one for the &#8222;pan&tilt mode&#8220;.

#### 3.) Main loop

In the loop section on of the two main functions is called, depending on the button state during start-up (after power-up or reset).

You can download the code in the download section.

### Download

Code Arduino:
[click here](/assets/2010/10/pan_tilt_arduino_code_101010.zip)

Aluminium plate design (for the Frontplatten-Designer from schaeffer-ag.de):
[click here](/assets/2010/10/pan_tilt_schaeffeag_100704.zip)

### Time lapsed mode

In this mode, the pan&tilt system is positioned to a stationary position. The images are taken every six seconds. You can adjust the delay like you want.
After 255 pictures the Arduino stops to take further pictures.

Combining the 255 images to one video is easy, when you use the freeware tool Virtualdub - Link: [www.virtualdub.org](http://www.virtualdub.org). It&#8217;s free and extremely easy.

This is what you have to do:

Go to &#8218;File -> Open -> Image sequence&#8216; and select your first photo (you can&#8217;t select multiple ones, so just click the first one).
Then make adjustments and &#8218;Save as AVI&#8216; (you might want to use a codec, &#8218;Tools->Compression&#8216;).



### Pan&Tilt mode

In this mode 10 pictures per row are taken, then the camera tilt is decresed and the camera takes again 10 pictures. This continues until the tilt points to the ground. You have 40 or 50 images at the end, that you can stitch together with different kinds of software tools. I used the Microsoft Image Composite Editor (ICE). [Click here](http://tinkr.de/blog/z-pantilt-platform-in-action/) for more information.
