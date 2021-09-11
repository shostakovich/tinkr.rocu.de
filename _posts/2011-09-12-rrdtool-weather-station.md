---
id: 2565
title: We use RRDTool for the weather station!
date: 2011-09-12T17:56:06+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=2565
permalink: /blog/rrdtool-weather-station/
thumbnail:
  - http://tinkr.de/wp-content/uploads/2011/09/rrdtool.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:2582;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Allgemeines
tags:
  - Data
  - Database
  - Javascript
  - Round Robin Database
  - RRD
  - Sinatra
  - Weather Station
---
We completed our weather station a few weeks ago. Thats when I started working on a simple website, to display the received data. My first approach was to store the received samples in an SQL-database and to plot the data via Javascript. It worked fine for a few days, but when I tried to displayed all samples of a week / a month or a year I realized that this approach, was not going to work at all.

Rendering all the samples for 1 year (every 5 seconds so 6311520) via Javascript does not work of course. Just omitting data and taking one random value per day is also not a satisfying way of solving this.

To solve this properly you would have to calculate min/max/average for longer timeframes - ideal would be to have more then 1 length for these periods (for example 30 min for a week and 1 day for a year).. Other problems are handling periods, when no data is received.

I realized if i continued to use sql this was going to be a quite a big project. And probably quite messy.

I was disappointed. As I am lazy I had a look at Cacti, and thats when I discovered <acronym title="Round Robin Database">RRD</acronym>Tool - that Cacti uses to store and render the measurements.

### What is <acronym title="Round Robin Database">RRD</acronym>-Tool?

<acronym title="Round Robin Database">RRD</acronym> stands for Round Robin Database. The concept is quite simple.

### Defining the Database

Imagine you had 100 simple containers that you can fill with values. You start at the first one, then put the second value into the second one and continue until you reach container 100. After you are there you start at the first one again and fill until you are at container 100 again. Round Robin - you get the idea 😉

This would be quite useless in my case - because I want to store a whole year off weatherdata. Thats were the magic happens.

With rrdtool you can create a database that contains more then one <acronym title="Round Robin Archive">RRA</acronym> (Round Robin Archives).

The definition for my Database looks like this:

```
rrdtool create weatherdata.rrd -step 60 \
DS:temperature:GAUGE:120:-50:100 \
DS:voltage:GAUGE:120:0:15 \
DS:humidity:GAUGE:120:0:100 \
DS:light:GAUGE:120:0:1024 \
DS:wind:GAUGE:120:0:100 \
DS:pressure:GAUGE:120:50000:200000 \
RRA:AVERAGE:0.5:1:1440 \
RRA:MIN:0.5:1:1440 \
RRA:MAX:0.5:1:1440 \
RRA:AVERAGE:0.5:30:17520 \
RRA:MIN:0.5:30:17520 \
RRA:MAX:0.5:30:17520
```

Lets disect this:

The database will be stored in a weatherdata.rdd and excepts data every 60 seconds.

The lines like ``` specify which values should be included in the RRD. In this case its the humidity, which can be between 0 and 100 percent.120 means, that after 120 seconds the value is filled out with an **unknown**.

The <acronym title="Round Robin Archive">RRA</acronym> lines define the different Round Robin Archives.

I use an <acronym title="Round Robin Archive">RRA</acronym> that contains a sample every 60 seconds for 1 week.
Then I have 3 bigger <acronym title="Round Robin Archive">RRA</acronym>&#8217;s that store the weather data for up to one year. Every 30 minutes a new entry in this <acronym title="Round Robin Archive">RRA</acronym> is created. One for the maximal-value off the 30 samples, 1 for the minimal value and 1 for the average.

Thats quite nice - because RRD-Tool handles all the uglyness for me. For longer periods of time it stores less data and after a year it will not get any bigger.

### Putting stuff into the database

After the database file is created you can put data into it.

```
rrd update weatherdata.rdd N:10.55:11.452:88:20:5:95654
```

The N means now and the you need to append a &#8222;:&#8220;-seperated list of values. The order is the same as you ordered your values in the database definition.

### Graph values

The last part is drawing some graphs. I found this part the most confusing one.

There are very nice examples on the rrdtool page, but there is no code next to them. The documentation is kind of confusing for me as a beginner.

[code]
rrdtool graph temperature.png \
-height=200 -width=750 \
-color=BACK#FFFFFF \
-start end-1d -vertical-label "°C" -title &quot;Temperatur letzte 24 Stunden&quot; \
DEF:temperature=weatherdata.rdd:temperature:AVERAGE \
LINE2:temperature#3366CC
```

But after a little while I managed to draw some basic graphs.

### The result

<img loading="lazy" src="/assets/2011/09/zweather.jpg" alt="Graphs using RRDTool" title="zweather.jpg" border="0" width="600" height="400" />

You can view the project on [GitHub](https://github.com/shostakovich/ZWeather). After I discovered rrdtool I dropped Rails and replaced it with Sinatra and Rake.

I still use SQL as alternative if I want to have the full resolution of my samples in a few years from now.

The graphs are generated with a cron-job every 5 minutes. With rrdtool a complex problem was reduced to a simple and manageable task. Thanks to the creator for such a wonderfull tool. It will remain in my toolbox, to solve similar problems.

### Ressources

Also I found these ressources quite helpful.

### Ressources

  * [RRD-Tools Homepage&#8220;](http://oss.oetiker.ch/rrdtool/)
  * [Many examples how to produce graphs](http://haroon.sis.utoronto.ca/rrd/scripts/)
  * [Code for the weatherstation](https://github.com/shostakovich/ZWeather)
