---
id: 1155
title: 'Arduino + EthernetShield + Shaun Inman&#8217;s Mint + LCD-Display = ZipfelMint'
date: 2009-09-28T17:23:47+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=1155
permalink: /blog/arduino-ethernetshield-shaun-inmans-mint-lcd-display-zipfelmint/
thumbnail:
  - http://tinkr.de/wp-content/uploads/2009/09/IMG_0318.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";b:0;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Allgemeines
tags:
  - Arduino
  - Code
  - Ethernet
  - LCD
  - Mint
  - Pepper
  - Shield
  - Stats
---
I&#8217;m addicted. In every spare minute I have to have a look at the ongoings on my website. So I decided to build a little device, that helps me to keep track of the current visitors on tinkr.de.

While you are watching this you have already increased the Number of Today&#8217;s unique visitors on my little device. Thanks!

## The ingedirents

  * Aduino
  * Arduino ethernet shield
  * Some wires
  * A little breadboard
  * A LiquidCristal Display for 2,95€
  * Shaun Inman&#8217;s Mint
  * A little pepper for [Mint](http://haveamint.com/)

## Putting everything together

First i attached the EthernetShield. Then I hooked up the LCD-Display, which was quite a challenge for me! I found it a little confusing. Luckily there&#8217;s a great [LCD-Tutorial at Arduino.cc](http://www.arduino.cc/en/Tutorial/LiquidCrystal) which was a great help for me.

It tourned out, that my LCD was slightly different and that I had to use differnet ports then the ports in the Tutorial, because some of theme were already taken by the Ethernet Shield.

## The Code

First I wrote a little Pepper (thats an Addon) for Mint that returns Visitors/Page Impression for Today/Week/Month and packs that into a very simple format. An example response of the Pepper looks like that:

<71|168|694|1549|2317|5201>

Its just a string limited by **<** and **>** which contains a few numbers delimited by | 🙂

Last week then i managed to fix my initial problems with the example code for the Ethernet Library. So I was pretty sure, that the part of getting data from Mint would be the easy part of this project. After pointing my modified version of the example code to the URL with the stats on my blog nothing happened.

So - what to do? Google it! I found a post at the official Arduino Forum, that the Arduino Library is not able to connect to Lighttpd. That was like a slap in my face. I do not want to modify the Ethernet library. I&#8217;m just a poor Webdeveloper without any expertise in C++. So I decided to take the pragmatic way and used a proxy instead.

If you&#8217;re own website uses Apache you may find this unnecessary and point your Arduino directly to you&#8217;re Server.

Notice, that you would have to slightly modify the Code in the line with the Get-Request.

The rest of the Sourcecode was pretty straightforward. I used the serial console to debug and finally I ended up with a big mess of code that worked well. After some minutes of refactoring I even understood, what the code was doing exactly.

## The result



## Whats next

Currently I am waiting for a little real time clock, which I will attach to this device. Then I will box it into a nice case and consider the hardware part as finished..

Luckily the device is quite generic and I plan to implement a little clock - that fetches its time over NTP and a display for the current load of our Servers at YiGG.

I might also decide to add a little nice WebInterface for the device.

## Source-Code

Like always I put the source code at the end. I hope that it explains itself. If not - please don&#8217;t hesitate to ask! You are free to use it and modify it under the terms and conditions of the Creative Commons License. And last but not least - please tell me if you have build something similar or derive something from my work!

[cpp]
/*
ZipfelMint - A little device that shows Vistor Statistics for the website

@author Robert Curth <http://tinkr.de/
@see http://www.arduino.cc/en/Tutorial/LiquidCrystal
*/

#include <Ethernet.h>
#include <LiquidCrystal.h>

int RS = 9;
int E = 3;
int D4 = 2;
int D5 = 8;
int D6 = 4;
int D7 = 5;
LiquidCrystal lcd(RS, E, D4, D5, D6, D7 ); // Initializing Liquid Cristal display

byte mac[] = { 0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED };
byte ip[] = { 192, 168, 178, 25 };
byte gateway[] = { 192, 168, 178, 1 };
byte server[] = { 217,237,151,51 }; // Change that to a http-proxy of your choice

// Variables for the Visitors.
char dayUnique[7];
char dayTotal[7];
char weekUnique[7];
char weekTotal[7];
char monthUnique[7];
char monthTotal[7];

boolean hasStats = false; // Until this is true default text will be displayed

void setup()
{
Serial.begin(9600);
lcd.begin(16, 2);
Ethernet.begin(mac, ip, gateway);
delay(1000);
}

void loop()
{
updateVisitStats();
if(hasStats)
{
printStats();
}
else
{
printDefaultText();
}
}

/**
* Update the stats from mint
*/
void updateVisitStats()
{
Client client(server, 80);
if (client.connect())
{
sendRequest(client);
Serial.println("Connected");
}
else
{
Serial.println("connection failed");
return;
}

extractMintData(client);
client.stop();
}

/**
* Send the request to the Server
*/
void sendRequest(Client client)
{
client.println("GET http://tinkr.de/mint/pepper/garrettmurray/ego_helper/stats.php HTTP/1.0");
client.println("host: tinkr.de");
client.println("user-agent: Arduino-ZipfelMint");
client.println();
}

/**
* Extract the data and set the variables
*/
void extractMintData(Client client)
{
char currentValue[7];
boolean dataFlag = false; // True if data has started
boolean endFlag = false; // True if end is reached
int j = 0; //Number of dataset
int i=0;

while(client.connected() && false == endFlag)
{
char c = client.read();
if(c == &#8218;<&#8218;) // Start of data
{
dataFlag = true;
hasStats=true;
}
else if(dataFlag && c == &#8218;>&#8216;) // End of data
{
setStatValue(j, currentValue);
endFlag = true;
}
else if(dataFlag && c == &#8218;|&#8216;) // Next dataset
{
setStatValue(j++, currentValue);
char currentValue[7];
i=0;
}
else if(dataFlag) // Data
{
currentValue[i++] = c;
}
}
}

/**
* Set a single stat value depending on the position in the string returned by mint
* @param integer position
* @param string value
*/
void setStatValue(int position, char value[])
{
switch(position){
case 0:
for(int i=0; i<7; i++)
{
dayUnique[i] = value[i];
}
return;
case 1:
for(int i=0; i<7; i++)
{
dayTotal[i] = value[i];
}
return;
case 2:
for(int i=0; i<7; i++)
{
weekUnique[i] = value[i];
}
return;
case 3:
for(int i=0; i<7; i++)
{
weekTotal[i] = value[i];
}
return;
case 4:
for(int i=0; i<7; i++)
{
monthUnique[i] = value[i];
}
return;
case 5:
for(int i=0; i<7; i++)
{
monthTotal[i] = value[i];
}
return;
}
}

/**
* Print the different statistical values in a predefined sequence
*/
void printStats()
{
printStat("Day (unique)", dayUnique);
printStat("Day (hits)", dayTotal);
printStat("Week (unique)", weekUnique);
printStat("Week (hits)", weekTotal);
printStat("Month (unique)", monthUnique);
printStat("Month (hits)", monthTotal);
}

/**
* Print a single statistical value
* @param string Label of the stat eg Today(Unique)
* @param strin Visits (only numbers will be printed)
*/
void printStat(char label[], char visits[])
{
lcd.begin(16, 2);
lcd.print(label);
lcd.setCursor(0,1);

for(int i = 0; i < 7; i++)
{
if(47 < visits[i] && 58 > visits[i]) // If char is a number ..
{
lcd.print(visits[i]);
}
}
delay(1000);
}

/**
* Print a default text
*/
void printDefaultText()
{
lcd.setCursor(0,0);
lcd.print("Mint-Stats for");
lcd.setCursor(0,1);
lcd.print("tinkr.de");
delay(2000);
}
[/cpp]
