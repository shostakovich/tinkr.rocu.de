---
id: 2480
title: Mit dem Z-Acceleration-Shield auf hoher See, Teil 2
date: 2011-08-02T12:41:40+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=2480
permalink: /blog/mit-dem-z-acceleration-shield-auf-hoher-see-teil-2/
thumbnail:
  - http://tinkr.de/wp-content/uploads/2011/08/acceleration_shield_plot_0_sml.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:2496;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Allgemeines
  - Basteln
  - Schaltungen/ICs
  - Technik
tags:
  - Arduino. Kreuzfahrt
  - FFT
  - hohe See
  - Matlab
  - z-Acceleration-Shield
---
Vergangene Woche waren wir wieder auf <a href="http://geekcruise.de/index.php/reiseberichte/celebrity-silhouette-jungfernfahrt-von-hamburg-nach-rom-%E2%80%93-23-07-2011/" target="_blank">hoher See unterwegs</a>. Mit dabei war auch das Z-Acceleration-Shield. Beim <a href="http://tinkr.de/blog/mit-dem-z-acceleration-shield-auf-hoher-see/" target="_blank">ersten Teil</a> war die See leider zu ruhig gewesen.

<img loading="lazy" src="/assets/2011/08/acceleration_shield_0.jpg" alt="" title="Netbook mit Acceleration-Shield-Box auf der Celebrity Silhouette" width="606" height="455" class="alignnone size-full wp-image-2482" srcset="/assets/2011/08/acceleration_shield_0.jpg 606w, /assets/2011/08/acceleration_shield_0-240x180.jpg 240w" sizes="(max-width: 606px) 100vw, 606px" />

Dank des stärkeren Seeganges in der Nordsee konnte man auch deutliche Ausschläge in den Sensor-Graphen erkennen.

<img loading="lazy" src="/assets/2011/08/110724_105600.png" alt="" title="Sensor-Daten in Processing: 110724_105600" width="606" height="732" class="alignnone size-full wp-image-2481" />

Dieses Mal habe ich auch Matlab verwendet, um den die [aufgezeichneten Daten](/assets/2011/08/110723_232800.txt) weiter auszuwerten und eine FFT drüberlaufen zu lassen.
Mit dem Import-Wizard kann man die Daten ganz einfach lesen.
In der Matrix x110723_232800 sind dann alle Daten der Datei in sechs einzelnen Spalten gespeichert (3 Beschleunigungsachsen- und 3 Gyro-Achsenwerte).

`<br />
z_accel=x110723_232800(:,3);<br />
z_accel=z_accel+1020; %wir normalisieren die Werte um Null<br />
plot(z_accel)<br />
`

<img loading="lazy" src="/assets/2011/08/acceleration_shield_plot_0.jpg" alt="" title="Beschleunigungs-Sensor z-Achse" width="561" height="421" class="alignnone size-full wp-image-2483" srcset="/assets/2011/08/acceleration_shield_plot_0.jpg 561w, /assets/2011/08/acceleration_shield_plot_0-240x180.jpg 240w" sizes="(max-width: 561px) 100vw, 561px" />

Mit folgendem Code erzeuge ich die FFT:

`</p>
<p>fs=50;<br />
N = length(z_accel);<br />
w = ([-N/2:N/2-1]/N)*fs;<br />
X=fft(z_accel);<br />
plot(w,abs(fftshift(X)))<br />
`

<img loading="lazy" src="/assets/2011/08/acceleration_shield_plot_2.jpg" alt="" title="FFT der z-Achsen-Werte" width="561" height="421" />
<img loading="lazy" src="/assets/2011/08/acceleration_shield_plot_1.jpg" alt="" title="Zoom in die Peaks der FFT" width="561" height="421" />

Auswertung:
Wir erhalten einen Peak bei 0,29Hz, also 3,46sek.

Download:
[Sensor-Daten vom 230711 - 23:28](/assets/2011/08/110723_232800.txt)
