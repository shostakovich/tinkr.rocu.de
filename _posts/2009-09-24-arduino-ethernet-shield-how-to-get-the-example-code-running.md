---
id: 1137
title: Arduino Ethernet Shield. Issues with Lighttpd and/or router. How to get the example code running.
date: 2009-09-24T18:07:46+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=1137
permalink: /blog/arduino-ethernet-shield-how-to-get-the-example-code-running/
thumbnail:
  - http://tinkr.de/wp-content/uploads/2009/09/2398504278_75edbeeb0e_m.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:1141;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Allgemeines
tags:
  - Arduino
  - Ethernet
  - Lighttpd
  - Problem
  - Router
  - Shield
---
A few days ago i tried to get the WebClient example in Arduino working. After some hours of frustration I finally stopped working and googled for a solution. Soon I realized that I was not the only person having this problem. The [example code](http://www.arduino.cc/en/Reference/Ethernet) does not work behind a router.

(UPDATE: It does also has issues with Lighttpd - Fix in the second example)

<div id="attachment_1140" style="width: 589px" >
  <a href="http://www.flickr.com/photos/mbiddulph/2398504278/sizes/l/"><img aria-describedby="caption-attachment-1140" loading="lazy" src="/assets/2009/09/2398504278_75edbeeb0e_b1.jpg" alt="Arduino with Ethernet Shield (Matt Biddulph / Flickr)" title="2398504278_75edbeeb0e_b"    srcset="/assets/2009/09/2398504278_75edbeeb0e_b1.jpg 579w, /assets/2009/09/2398504278_75edbeeb0e_b1-300x224.jpg 300w" sizes="(max-width: 579px) 100vw, 579px" /></a>

  <p id="caption-attachment-1140" >
    Arduino with Ethernet Shield (Matt Biddulph / Flickr)
  </p>
</div>

The solution was easy. I found it in the german book &#8222;Arduino - Physical Computing für Bastler, Designer & Geeks&#8220;. The Ethernet.beginn() method takes 2 more optional parameters:

**[Ethernet.begin(mac, ip, gateway, subnet);](http://arduino.cc/en/Reference/EthernetBegin)**

That was not mentioned in the example code and obviously i was not the only person that had troubles because of this little mistake.

I propose to add a hint to the example or to change it, since a router is the normal case for an Arduino.

Here is my slightly modified version of the example code that finally worked 🙂

```
#include <Ethernet.h>

byte mac[] = { 0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED };
byte ip[] = { 192, 168, 178, 25 };
byte gateway[] = { 192, 168, 178, 1 };
byte server[] = { 74, 125, 77, 104 }; // Google

Client client(server, 80);

void setup()
{
Ethernet.begin(mac, ip, gateway);
Serial.begin(9600);

delay(1000);

Serial.println("connecting&#8230;");

if (client.connect()) {
Serial.println("connected");
client.println("GET /search?q=arduino HTTP/1.0");
client.println();
} else {
Serial.println("connection failed");
}
}

void loop()
{
if (client.available()) {
char c = client.read();
Serial.print(c);
}

if (!client.connected()) {
Serial.println();
Serial.println("disconnecting.");
client.stop();
for(;;)
;
}
}
```

## UPDATE:

The Ethernet Library does not work with Lighttpd. You can however easily circumvent this if you use a HTTP-proxy server.
You have to set server variable to the IP of the proxy and send something like the following example to the proxy. The rest works pretty much the same then..

```
client.println("GET http://www.google.com/search?q=arduino HTTP/1.0");
client.println("host: www.google.com"); // You have to send a host-header for many domains
client.println();
```
