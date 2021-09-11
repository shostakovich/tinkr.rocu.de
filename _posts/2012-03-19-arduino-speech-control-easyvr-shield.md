---
id: 2814
title: 'Arduino: Speech control with the EasyVR Shield'
date: 2012-03-19T20:52:29+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=2814
permalink: /blog/arduino-speech-control-easyvr-shield/
thumbnail:
  - http://tinkr.de/wp-content/uploads/2012/03/easyvr_shield_arduino_sml.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:2822;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Allgemeines
  - Basteln
  - Gebasteltes
  - Schaltungen/ICs
  - Technik
tags:
  - Arduino
  - EasyVR
  - Farnell
  - Shield
  - Speech control
  - speech recognition
  - Tigal
---
### Introduction

Recently I&#8217;ve found an quite interesting Arduino shield on: <http://www.veear.eu/Products/EasyVRShield.aspx>. Using this shield you can control your Arduino using speech commands.

<img loading="lazy" src="/assets/2012/03/easyvr_shield_arduino.jpg" alt="" title="Arduino - EasyVR Shield"    srcset="/assets/2012/03/easyvr_shield_arduino.jpg 606w, /assets/2012/03/easyvr_shield_arduino-240x180.jpg 240w" sizes="(max-width: 606px) 100vw, 606px" />

The shield consists of these components:
- EasyVR Arduino Shield (includes EasyVR module)
- Microphone

On the website you can also find following free software downloads (see link above):
- User manual
- EasyVR Commander
- Arduino Libraries

Following shops sell the EasyVR shield: <http://www.veear.eu/WheretoBuy.aspx>
It costs around 40€ or 50$.

* * *

### Demo

In this demo I control a LED with my voice and the EasyVR shield.

For this demo I also use an Arduino, that has been kindly provided by [Farnell.com](http://www.farnell.com/).

Overview Arduino: <http://de.farnell.com/arduino>
Arduino schematic: <http://arduino.cc/en/uploads/Main/arduino-uno-schematic.pdf>
Link to product page: <http://de.farnell.com/arduino/a000046/board-arduino-uno/dp/1848687?ICID=i-9ec8-00001000>

#### Step 1: Software Installation

Install the &#8222;EasyVR Commander&#8220; software [[Link](http://www.veear.eu/Support/Downloads.aspx)].
Before you run the software, make sure you run the program with administrator privileges.
But don&#8217;t start the software at the moment.

#### Step 2: Prepare hardware

Put the shield and the Arduino together and connect the mic to the shield (J11).
Put Jumper J12 at position &#8222;PC&#8220;.
Connect the Arduino to the PC via USB.

#### Step 3: Train the EasyVR Shield

Now run &#8222;EasyVR Commander&#8220; and connect to the serial port of the Arduino USB connection.
Click in the group list on Index 0 - Trigger. Add a new command, name it e.g. &#8222;ARDUINO&#8220;. Then click on &#8222;Train Command&#8220;. And speak the word &#8222;Arduino&#8220; in the mic. And a second time, when the software tells you so.
<img loading="lazy" src="/assets/2012/03/easyvr_commander_trigger.jpg" alt="" title="EasyVR Commander: Trigger"    />

Click in the group list on Index 1 - Group. Add a new command, name it e.g. &#8222;LED_ON&#8220;. Then click on &#8222;Train Command&#8220;. And speak the words &#8222;LED on&#8220; in the mic. And a second time, when the software tells you so.
And add a second command &#8222;LED_OFF&#8220; and train this command as well.
<img loading="lazy" src="/assets/2012/03/easyvr_commander_group1.jpg" alt="" title="EasyVR Commander: Group1"    />
Note: LED\_AN is LED\_ON and LED\_AUS is LED\_OFF.

Now your EasyVR is configured. We finally generate some code for the microcontroller inside of the Arduino. In EasyVR Commander click on File->Generate code.

Disconnect your Arduino from USB and change jumper J12 to SW.

#### Step 4: Some Arduino code

Install the EasyVR Arduino libraries (see first link) to the Arduino IDE library folder.

I slightly altered the previously generated code to control a LED. The LED is connected to pin 11:

```
#if defined(ARDUINO) &amp;&amp; ARDUINO &gt;= 100
#include &quot;Arduino.h&quot;
#include &quot;SoftwareSerial.h&quot;
SoftwareSerial port(12,13);
#else // Arduino 0022 - use modified NewSoftSerial
#include &quot;WProgram.h&quot;
#include &quot;NewSoftSerial.h&quot;
NewSoftSerial port(12,13);
#endif

#include &quot;EasyVR.h&quot;
EasyVR easyvr(port);

//Groups and Commands
enum Groups
{
GROUP_0 = 0,
GROUP_1 = 1,
};

enum Group0
{
G0_ARDUINO = 0,
};

enum Group1
{
G1\_LED\_AN = 0,
G1\_LED\_AUS = 1,
};

EasyVRBridge bridge;

int8_t group, idx;

void setup()
{
// bridge mode?
if (bridge.check())
{
cli();
bridge.loop(0, 1, 12, 13);
}
// run normally
Serial.begin(9600);
port.begin(9600);

if (!easyvr.detect())
{
Serial.println(&quot;EasyVR not detected!&quot;);
for (;;);
}

easyvr.setPinOutput(EasyVR::IO1, LOW);
Serial.println(&quot;EasyVR detected!&quot;);
easyvr.setTimeout(5);
easyvr.setLanguage(3);

group = EasyVR::TRIGGER; //&lt;- start group (customize)

pinMode(11, OUTPUT);
digitalWrite(11, LOW); // set the LED off

}

void action();

void loop()
{
easyvr.setPinOutput(EasyVR::IO1, HIGH); // LED on (listening)

Serial.print(&quot;Say a command in Group &quot;);
Serial.println(group);
easyvr.recognizeCommand(group);

do
{
// can do some processing while waiting for a spoken command
}
while (!easyvr.hasFinished());

easyvr.setPinOutput(EasyVR::IO1, LOW); // LED off

idx = easyvr.getWord();
if (idx &gt;= 0)
{
// built-in trigger (ROBOT)
// group = GROUP_X; &lt;- jump to another group X
return;
}
idx = easyvr.getCommand();
if (idx &gt;= 0)
{
// print debug message
uint8_t train = 0;
char name[32];
Serial.print(&quot;Command: &quot;);
Serial.print(idx);
if (easyvr.dumpCommand(group, idx, name, train))
{
Serial.print(&quot; = &quot;);
Serial.println(name);
}
else
Serial.println();
easyvr.playSound(0, EasyVR::VOL_FULL);
// perform some action
action();
}
else // errors or timeout
{
if (easyvr.isTimeout())
Serial.println(&quot;Timed out, try again&#8230;&quot;);
int16_t err = easyvr.getError();
if (err &gt;= 0)
{
Serial.print(&quot;Error &quot;);
Serial.println(err, HEX);
}

group = GROUP_0;
}
}

void action()
{
switch (group)
{
case GROUP_0:
switch (idx)
{
case G0_ARDUINO:
// write your action code here
group = GROUP_1; //&lt;- or jump to another group X for composite commands
break;
}
break;
case GROUP_1:
switch (idx)
{
case G1\_LED\_AN:
// write your action code here
group = GROUP_0; //&lt;- or jump to another group X for composite commands

digitalWrite(11, HIGH); // set the LED on

break;
case G1\_LED\_AUS:
// write your action code here
group = GROUP_0; //&lt;- or jump to another group X for composite commands
digitalWrite(11, LOW); // set the LED off

break;
}
break;
}
}
```

Compile and upload this code. Your Arduino should now do something like this:
