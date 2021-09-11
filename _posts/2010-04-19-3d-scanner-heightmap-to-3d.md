---
id: 1583
title: '3D-Scanner: Heightmap to 3D'
date: 2010-04-19T17:45:50+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=1583
permalink: /blog/3d-scanner-heightmap-to-3d/
thumbnail:
  - http://c1252712.cdn.cloudfiles.rackspacecloud.com/3dscan_matlab_sml.png
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:1590;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Allgemeines
  - Gebasteltes
tags:
  - 3D-Scanner
  - Arm-Roboter
  - Heightmap
  - Matlab
---
Gestern haben wir eine Grayscale Heightmap aus unserem 3D-Scanner erhalten. Ich fragte mich nun, wie ich daraus möglichst einfach eine 3D-Visualisierung erhalten kann. Ich hatte alles mögliche abgeklappert, Blender, Povray, OpenGL, aber alles war eher kompliziert als einfach, gerade, wenn man die Tools nur alle paar Jahre verwendet.

[<img src="/assets/2010/04/5_bidir_high_haus_spiegel.bmp" alt="" title="heigthmap gespiegelt" class="alignnone size-full wp-image-1587" />](/assets/2010/04/5_bidir_high_haus_spiegel.bmp)

Heute kam ich dann auf die Idee es mal mit Matlab zu versuchen und mit einem kleinen Stolperstein hat es dann auch wunderbar geklappt.
Wer es selber probieren möchte, kopiert die 3D-Scan-Heightmap in sein Matlab-Verzeichnis und verwendet diesen Code:

`<br />
P=imread('5_bidir_high_haus_spiegel.bmp');<br />
P=double(P);<br />
mesh(P)<br />
`

<img loading="lazy" src="/assets/2010/04/3dscan_matlab2.png" alt="" title="3D Visualisierung der Heightmap - 1" width="606" height="520" class="alignnone size-full wp-image-1585" srcset="/assets/2010/04/3dscan_matlab2.png 606w, /assets/2010/04/3dscan_matlab2-300x257.png 300w" sizes="(max-width: 606px) 100vw, 606px" />

<img loading="lazy" src="/assets/2010/04/3dscan_matlab.png" alt="" title="3D Visualisierung der Heightmap - 2" width="606" height="520" class="alignnone size-full wp-image-1586" srcset="/assets/2010/04/3dscan_matlab.png 606w, /assets/2010/04/3dscan_matlab-300x257.png 300w" sizes="(max-width: 606px) 100vw, 606px" />
