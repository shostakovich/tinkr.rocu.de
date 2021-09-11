---
id: 455
title: Metabloging
date: 2008-11-13T22:53:40+00:00
author: SES
layout: post
guid: http://web2.0du.de/?p=51
permalink: /blog/metabloging/
thumbnail:
  - http://farm3.static.flickr.com/2128/2231630661_89bb140a05_m.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";b:0;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Webkram
tags:
  - Blog
  - FastCGI
  - Lighttpd
  - Magnet
  - Metablogging
  - Plugin
  - Supercache
  - Wordpress
---
Es gibt nichts schöneres als sich mit dem basteln an seinem Blog zu befassen und daher habe ich mein Blog heute ofiziell auf Worpress umgestellt. Ich habe es inzwischen ganz nach Hause auf mein Macbook umgezogen, wo es brav seine Dienste verrichtet. Die statischen Inhalte kommen zum Teil von einem sehr billigen Webhostingpaket bei 1&1.

Auf meinem Macbook habe ich ein VMware-Image mit Ubuntu+Lighttpd- APM+Magnet+FastCgi aufgesetz, das ganze ist zwar etwas tricky, ist aber mit Googlei in etwa 2 Stunden erledigt gewesen.

Danach habe ich das Plugin Supercache eingespielt. Hilfreich dabei war dieses Snippet von [A Tempest of Thougts](http://tempe.st/2008/05/lightning-speed-wordpress-with-lighttpd-and-supercache-part-ii/).

Hier das Ergebniss: Finde ich sehr anständig 😉

noname:~ shostakovich$ ab -c 4 -n 5000 http://web2.0du.de/  
This is ApacheBench, Version 2.3 <$Revision: 655654 $>  
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/  
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking web2.0du.de (be patient)

Completed 500 requests (..)  
Finished 5000 requests

Server Software:        lighttpd/1.4.19

Server Hostname:        web2.0du.de

Server Port:            80

Document Path:          /  
Document Length:        24574 bytes

Concurrency Level:      4  
Time taken for tests:   160.447 seconds  
Complete requests:      5000  
Failed requests:        0  
Write errors:           0  
Total transferred:      123977425 bytes  
HTML transferred:       122870000 bytes  
Requests per second:    31.16 \[#/sec\] (mean)  
Time per request:       128.357 \[ms\] (mean)  
Time per request:       32.089 \[ms\] (mean, across all concurrent requests)  
Transfer rate:          754.59 [Kbytes/sec] received

Connection Times (ms)  
min  mean[+/-sd] median   max  
Connect:        4   41 537.5     22   19020  
Processing:    21   88  19.3     84     416  
Waiting:        5   20  11.2     18     339  
Total:         54  128 538.9    105   19299

Percentage of the requests served within a certain time (ms)  
50%    105  
66%    114  
75%    120  
80%    127  
90%    151  
95%    160  
98%    171  
99%    180  
100%  252 (longest request)

Last but not least: Lighttpd loggt keine Daten mehr. Irgenwo habe ich doch mal so eine nette Plakette gesehen, wo gibts die?