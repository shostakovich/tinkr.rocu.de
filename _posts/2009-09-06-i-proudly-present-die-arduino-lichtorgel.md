---
id: 1112
title: 'I proudly present: Die Arduino Lichtorgel'
date: 2009-09-06T10:30:51+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=1112
permalink: /blog/i-proudly-present-die-arduino-lichtorgel/
thumbnail:
  - http://tinkr.de/wp-content/uploads/2009/09/lichtorgel.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:1114;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Basteln
  - Technik
tags:
  - Arduino
  - Lichtorgel
  - Musik
---
Ok. Zugegeben - man mag auch über den Sinn meiner heutigen Erfindung diskutieren können. Aber ich wollte mir einfach ein kleines elektronisches Instrument bauen und da habe ich einfach meinen kleinen Photowiderstand hergenommen, einen Taster und die Lichtorgel gebaut.

Und damit die Werte Leserschaft einen Eindruck davon bekommt, was für ein ausgezeichnetes und wohlklingendes Instrument so eine Lichtorgel ist, habe ich auch ein Video davon gemacht.



<pre name="code" class="cpp">/**
 * Code für eine Lichtorgel
 *
 * Lichtorgel besteht aus Lautsprecher, Taster und einem Lichtsensor der über einen Spannungsteiler abgenommen wird.
 */

int speakerPin = 10;
int portLichtSensor = 5;
int button = 8;

int tempo = 300;

void setup()
{
  pinMode(speakerPin, OUTPUT);
  pinMode(portLichtSensor, INPUT);
  pinMode(button, INPUT);
  digitalWrite(button, HIGH);
}

void loop()
{
  int pressed = digitalRead(button);
  if(pressed == LOW)
  {
    playNote(noteBySensor(), 3 , tempo);
  }
  else
  {
    playNote(noteBySensor(), 2 , tempo);
  }
}

/**
 * Liest den Wert vom Lichtsensor ein und wandelt ihn in eine Note um
 */
char noteBySensor()
{
  int licht = analogRead(portLichtSensor);
  if(licht &lt; 256)
  {
    return 'c';
  }
  else if (licht &lt; 378)
  {
    return 'd';
  }
  else if(licht &lt; 512)
  {
    return 'e';
  }
  else if (licht &lt; 678)
  {
    return 'f';
  }
  else if(licht &lt; 756)
  {
    return 'g';
  }
  else if(licht &lt; 870)
  {
    return 'a';
  }
  else
  {
    return 'h';
  }
}

/**
 * Spielt eine Note für eine bestimmte Zeit
 * @param char Notenname
 * @param integer Oktave
 * @param integer Duration Länge
 */
void playNote(char note, int level, int duration)
{
  int frequency = getNoteFrequency(note, level);
  playFrequency(frequency, duration);
}


/**
 * Erechnet die Frequenz für eine Note in C-Dur
 * @param char Notenname
 * @param integer Oktave
 * @return integer Frequenz in Hz
 */
int getNoteFrequency(char note, int level)
{
  int multiplikator = 1;
  for(int i = 1; i &lt; level; i++)
  {
    multiplikator = multiplikator * 2;
  }

  switch(note)
  {
    case 'c':
      return 132 * multiplikator;
    case 'd':
      return 149 * multiplikator;
    case 'e':
      return 165 * multiplikator;
    case 'f':
      return 176 * multiplikator;
    case 'g':
      return 198 * multiplikator;
    case 'a':
      return 220 * multiplikator;
    case 'h':
      return 248 * multiplikator;
  }
}

/**
 * Spielt eine Frequenz in Hz für eine betsimmte Zeit
 * @param integer Frequenz
 * @param integer Duration Dauer in Millisekunden
 */
void playFrequency(int frequency, int duration)
{
  long delay = 1000000/(2*frequency);
  for (long i = 0; i &lt; duration * 1000L; i += delay * 2)
  {

    digitalWrite(speakerPin, HIGH);
    delayMicroseconds(delay);
    digitalWrite(speakerPin, LOW);
    delayMicroseconds(delay);
  }
}
</pre>
