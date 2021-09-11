---
id: 1694
title: Logic Analyzer für wenig Geld
date: 2010-06-18T16:43:41+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=1694
permalink: /blog/logic-analyzer-fur-wenig-geld/
thumbnail:
  - http://cdn.cloudfiles.mosso.com/c1855992/logic_analyzer_sml.png
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:1700;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Allgemeines
  - Basteln
  - Technik
tags:
  - Arduino
  - Logic Analyzer
  - Saleae
---
Diese Woche habe ich auf einer FPGA-Konferenz wieder Mikrowellen-große Logic-Analyzer von der Firma mit dem großen A gesehen, bei denen das Kilo gut 2000€ kostet. Also nichts für den Hausgebrauch. Zudem nerven die Dinger vom Geräuschpegel her auf die Dauer ziemlich. Die lieben amerikanischen Entwickler haben anscheinend noch nichts von Silent-Lüftern gehört und so surrt das Ding mit gefühlten 100dB(A) vor sich hin.

Dagegen für den Hausgebrauch geeignet ist der kleine handliche und zudem geräuschlose USB-Logic-Analyzer von Saleae.com. Klein und handlich kommt er daher, verpackt in einer kleinen Tasche samt einem Starter-Zubehör-Set bestehend aus 9 kleinen Greifzangen, einem Kabelsatz, einem Mini-USB-Kabel.

<img loading="lazy" src="/assets/2010/06/saleae_logic_analyzer_kit.jpg" alt="" title="Saleae Logic Analyzer Kit" width="606" height="455" class="alignnone size-full wp-image-1695" srcset="/assets/2010/06/saleae_logic_analyzer_kit.jpg 606w, /assets/2010/06/saleae_logic_analyzer_kit-300x225.jpg 300w" sizes="(max-width: 606px) 100vw, 606px" />

### Specs:

Size and Weight
* 1.62&#8243; x 1.62&#8243; x .32&#8243;
* 22g (.78 oz)

Power
* <1W, sourced from USB What's in the Box \* Logic \* 9x1 Ultra-Flexible Test Lead Set \* x9 E-Z-Hook XKM Micro-Hook \* USB 2.0 Cable (5') \* Soft Case Inputs \* 8 Inputs \* Voltage Range: -0.5 to 5.25V \* Input Low Voltage: -0.5 to 0.8V \* Input High Voltage: 2 to 5.25V \* ESD and over-voltage protection \* Logic threshold not adjustable Sample Rate & Depth \* 24MHz Maximum Sample Rate (?) * 200M+ samples, absolute limit depends on system ram Quelle: <http://www.saleae.com/logic/specs/>

### Software:

<img loading="lazy" src="/assets/2010/06/logic_analyzer2.png" alt="" title="Saleae Logic Analyzer Software" width="800" height="454" class="alignnone size-full wp-image-1698" srcset="/assets/2010/06/logic_analyzer2.png 800w, /assets/2010/06/logic_analyzer2-300x170.png 300w" sizes="(max-width: 800px) 100vw, 800px" />
PWM-Signal erzeugt mittels Arduino für eine H-Brücken-Motorsteuerung.

In der sehr übersichtlichen Software werden alle acht Kanäle gleichzeitig angezeigt. Verschiedene Protokolle und Triggerbedingungen können eingestellt werden, wie z.B. I2C und SPI. Die Sample Rate kann von 1M bis 1000M Samples und die Abtastfrequenz mit 0,2 bis 24MHz eingestellt werden.

Die jeweils aktuelle Software steht gratis zum Download unter: <http://www.saleae.com/downloads/> bereit. Es besteht auch die Möglichkeit ohne den eigentlichen Logic Analyzer mit der Software im Simulationsmodus alles auszuprobieren.

### Messaufbau:

- Arduino und Logic Analyzer
<img loading="lazy" src="/assets/2010/06/saleae_messaufbau.jpg" alt="" title="Saleae Logic Analyzer Messaufbau" width="606" height="455" class="alignnone size-full wp-image-1699" srcset="/assets/2010/06/saleae_messaufbau.jpg 606w, /assets/2010/06/saleae_messaufbau-300x225.jpg 300w" sizes="(max-width: 606px) 100vw, 606px" />
