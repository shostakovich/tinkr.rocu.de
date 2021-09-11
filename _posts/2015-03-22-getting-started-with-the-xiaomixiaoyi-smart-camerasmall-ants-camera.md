---
id: 3659
title: getting started with the Xiaomi/XIAOYI Smart Camera/small ants camera
date: 2015-03-22T14:31:25+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=3659
permalink: /blog/getting-started-with-the-xiaomixiaoyi-smart-camerasmall-ants-camera/
thumbnail:
  - http://tinkr.de/wp-content/uploads/2015/03/yi_cam_sml.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:3682;s:11:"_thumb_type";s:10:"attachment";}'
layout_key:
  - ""
post_slider_check_key:
  - "0"
categories:
  - Allgemeines
tags:
  - small ants camera
  - Smart Camera
  - wifi camera
  - Xiaomi
  - XIAOYI
---
Last weekend I received my Xiaomi/XIAOYI Smart Camera/small ants camera (I am a little confused what the real official name is, since it has also a YI on the box, and I thought that the Yi is more a kind of a GoPro camera). It is a nice inexpensive WiFi camera, that is similar to the Dropcam, but much less expensive. I paid around 38$ including shipping.

<div id="attachment_3679" style="width: 616px" >
  <img aria-describedby="caption-attachment-3679" loading="lazy"  src="/assets/2015/03/yi_cam_03.jpg" alt="Yi Cam"   />

  <p id="caption-attachment-3679" >
    Yi Cam
  </p>
</div>

<http://www.aliexpress.com/item/Original-XIAOMI-XIAOYI-Smart-Camera-wireless-control-works-with-App-For-Smart-Phones/32221764310.html>

other specs:

  * 1280&#215;720 HD resolution
  * 111° wide-angle, 4x zoom
  * Two-way voice communication
  * micro-SD card slot

&nbsp;

<div id="attachment_3681" style="width: 616px" >
  <img aria-describedby="caption-attachment-3681" loading="lazy"  src="/assets/2015/03/yi_cam_05.jpg" alt="Yi Cam - Screenshot 1"   />

  <p id="caption-attachment-3681" >
    Yi Cam - Screenshot 1
  </p>
</div>

<div id="attachment_3680" style="width: 616px" >
  <img aria-describedby="caption-attachment-3680" loading="lazy"  src="/assets/2015/03/yi_cam_04.jpg" alt="Yi Cam - Screenshot 2"   srcset="/assets/2015/03/yi_cam_04.jpg 606w, /assets/2015/03/yi_cam_04-576x1024.jpg 576w" sizes="(max-width: 606px) 100vw, 606px" />

  <p id="caption-attachment-3680" >
    Yi Cam - Screenshot 2
  </p>
</div>

<div id="attachment_3678" style="width: 616px" >
  <img aria-describedby="caption-attachment-3678" loading="lazy"  src="/assets/2015/03/yi_cam_01.jpg" alt="Yi Cam - Screenshot 3"   />

  <p id="caption-attachment-3678" >
    Yi Cam - Screenshot 3
  </p>
</div>

### Quick start guide

Get the camera running was not that easy since the official unofficial English guide skipped some important details. The English guide and the app can be found here:
<http://en.miui.com/thread-65175-1-1.html>

Let us assume you have, just like me, a protected WiFi. And there are no other open WiFis around because in Germany you have such nice laws like Mitstörerhaftung :/
1. you install the apk-App from the above link on your smartphone and start the app, you&#8217;ll add your WiFi credentials in the app
2. you power up the camera via USB
3. you notice that the cameras LED is orange for 10 seconds and then blinks blue. The user guide tells you, the LED has to turn orange again before you can connect to the camera. (it does basically mean, that the camera doesn&#8217;t have a wireless connection)
4. you try to search the camera via the app, but you don&#8217;t get a connection to the camera, via the password protected WiFi
5. you have to open your WiFi for a moment, so the camera can get a connection to the internet (maybe a power reset or a 5 sec reset at the reset button is necessary), use the app to search for the camera and sync the WiFi credentials
6. then protect your WiFi again, the camera should reconnect itself to the protected WiFi
7. use the app to see the camera stream

&nbsp;

### VLC-Player

<div id="attachment_3677" style="width: 616px" >
  <img aria-describedby="caption-attachment-3677" loading="lazy"  src="/assets/2015/03/network_scanner.jpg" alt="Network Scan Tool"   />

  <p id="caption-attachment-3677" >
    Network Scan Tool
  </p>
</div>

What do to, when you want to see the camera stream on your PC without the app?
1. get the cameras IP address, via your routers localhost website or use a tool like Netscan
2. install (if you already haven&#8217;t installed it) and open your VLC Player
3. open a network stream by typing: rtsp://192.168.2.120:554/ch0_0.h264
(change the IP to your camera IP)

more information about RTSP can be found in this forum entry:
<http://en.miui.com/forum.php?mod=viewthread&tid=70205&highlight=rtsp>
