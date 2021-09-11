---
id: 2788
title: 'MSP430 LaunchPad: Demo - Graphical programming with Grace'
date: 2012-03-11T14:42:09+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=2788
permalink: /blog/msp430-launchpad-demo-graphical-programming-grace/
thumbnail:
  - http://tinkr.de/wp-content/uploads/2012/03/TI_launchpad_sml.png
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:2804;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Allgemeines
tags:
  - Code Composer Studio
  - Demo
  - Gravce
  - LaunchPad
  - MSP430
  - Texas Instruments
  - tutorial
---
Around one year ago Texas Instruments launched a new ultra low cost MCU platform for it&#8217;s MSP430 series, the LaunchPad. You can get it for just 4,30$ in the [TI eStore](https://estore.ti.com/).

<img loading="lazy" src="/assets/2012/03/TI_launchpad.png" alt="" title="TI LaunchPad" width="606" height="451" class="alignnone size-full wp-image-2803" srcset="/assets/2012/03/TI_launchpad.png 606w, /assets/2012/03/TI_launchpad-240x180.png 240w" sizes="(max-width: 606px) 100vw, 606px" />

When I first tried to get started with the LaunchPad, I had some difficulties with the Code Composer Studio, the software IDE for the microcontroller. I got compilation errors and whatever. But I think that is quite a common issue with Eclipse based IDEs. I also had my problems with ALTERAs [NIOS II Studio](http://tinkr.de/blog/darum-finde-ich-eclipse-zum-erbrechen/).

Now half a year later, I tried the current version of the Code Composer Studio. And I had much more success.

You can download the IDE here [[Link]](http://processors.wiki.ti.com/index.php/Download_CCS). I had some compiling problems with the new beta 5.2.0.00032. So you may try the version 5.1.1.00031 instead.

Code Composer Studio also comes with a nice graphical programming tool, called Grace. [Link to Grace introduction](http://processors.wiki.ti.com/index.php/Grace_Quick_Start_Guide?DCMP=Grace&HQS=Other+OT+grace#Welcome). Grace helps you with configuring the registers of the controller without to study the datasheet. Next to register configuration, it also gives code examples how to access the controllers peripherals with the C code.

In this tutorial we use the 3 on board peripherals, that are accessible by the microcontroller: two LEDs and one switch.
The LED at P1.6 will be toggled every 100ms and the LED at P1.0 will be controlled by the state of the switch at P1.3.

### Step1

I assume, you have installed Code Composer Studio and you have one LaunchPad.
I installed the IDE at C:\ti\ and I put the Eclipse workspace at C:\ti\workspace\_v5\_1.

### Step2

To create a new project you go to the menu and select File->New->CCS Project.

Choose a project name - e.g. grace_test.

Then you select the populated MCU in your LaunchPad (just read the ICs marking) - e.g. MSP430G2231.

Then select in &#8222;Project templates and examples&#8220; -> Grace Examples -> Blink LED from the CPU.

<img loading="lazy" src="/assets/2012/03/TI_launchpad_code_composer_studio_new_project.png" alt="" title="Code Composer Studio - new project" width="445" height="569" class="alignnone size-full wp-image-2797" />

### Step3

Then open the led.cfg file (for the Grace GUI) (1.). Select Device Overview, then left click on the Port P1 (2.)

<img loading="lazy" src="/assets/2012/03/TI_launchpad_code_composer_studio_grace1.png" alt="" title="Code Composer Studio Grace - Device Overview" width="606" height="430" class="alignnone size-full wp-image-2799" />

### Step4

Then you click on &#8222;Pinout TSSOP/PDIP&#8220;.
P1.0 and P1.6 must be configured as outputs. The other pins of Port P1 are inputs.

<img loading="lazy" src="/assets/2012/03/TI_launchpad_code_composer_studio_grace2.png" alt="" title="Code Composer Studio Grace - GPIO" width="606" height="430" class="alignnone size-full wp-image-2800" />

Now we finished the register configuration with Grace and can start to write some software code.

### Step5

Open the led.c file in the project explorer. You can replace your code with this.

[cpp]
//\***\***\***\***\***\***\***\***\***\***\***\***\***\***\***\***\***\***\***\***\***\***\***\***\*****
// Blink LED Example
//
// Description: Toggles P1.6 by xor&#8217;ing P1.6 inside of a software loop.
// Additionally the LED at P1.0 is controlled by the switch
// at P1.3.
//
//
// MSP430
// &#8212;&#8212;&#8212;&#8212;&#8212;-
// /|\| XIN|-
// | | |
// -|RST XOUT|-
// | |
// | P1.0|->LED
// | P1.6|->LED
// switch->|P1.3 |
//
// tinkr.de, S. Schuster, 03/11/12
//\***\***\***\***\***\***\***\***\***\***\***\***\***\***\***\***\***\***\***\***\***\***\***\***\*****

/*
* ======== Standard MSP430 includes ========
*/
#include <msp430.h>

/*
* ======== Grace related includes ========
*/
#include <ti/mcu/msp430/csl/CSL.h>

/*
* ======== main ========
*/
void main(void)
{
CSL_init(); // Activate Grace-generated configuration

while (1) {
P1OUT ^= BIT6; // Toggle LED on P1.6

// Check P1.3 input status
if (!(P1IN & BIT3)) {
// P1.3 input level = logic high
// Drive P1.0 output high
P1OUT |= (BIT0);
}

// Check P1.3 input status
if (P1IN & BIT3) {
// P1.3 input level = logic low
// Drive P1.0 output low
P1OUT &= ~(BIT0);
}
_\_delay\_cycles(100000); // Wait ~100ms at default DCO of ~1MHz
}
}
[/cpp]

### Step6

Save every altered file (led.c and led.cfg) and then click the Debug button, wait till the project is compiled and downloaded into your LaunchPad. Then hit the start/play button.

### Step7

Your Launchpad should now do this:
