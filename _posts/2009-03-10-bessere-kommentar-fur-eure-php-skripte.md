---
id: 487
title: Bessere Kommentare für eure PHP-Skripte
date: 2009-03-10T20:28:03+00:00
author: SES
layout: post
guid: http://web2.0du.de/?p=421
permalink: /blog/bessere-kommentar-fur-eure-php-skripte/
thumbnail:
  - http://farm1.static.flickr.com/195/519065677_ce5165683f_m.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";b:0;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - PHP 5
tags:
  - IDE
  - Kommentare
  - PHP
  - phpDocumentor
  - Programmieren
---
Als PHP-Programmier erlebe ich häufig eine Geringschätzung gegenüber PHP, die sich bei genauerer Betrachtung oftmals als Unwissen oder Unfähigkeit herausstellt.

Möglicherweise ist der schlechte Ruf von PHP sicher darin verwurzelt, dass man **sehr** unsauber damit programmieren kann und oft kräuseln sich einem beim lesen von Codefragmenten die Zehennägel.

In meiner neuen Kategorie PHP 5 möchte ich euch ein paar Kniffe zeigen, mit denen man seinen eigenen Programmierstyl verbessern kann. Inwiefern diese Ratschläge nützlich sind, sei dem Leser überlassen.

Heute geht es um das leidige Thema Kommentare.

## Warum sind Kommentare wichtig?

Bei YiGG haben wir im laufe der Zeit viele zehntausend Zeilen Quellcode erzeugt. Wir sind ein kleines Team und jeder von uns hat einen Großteil des Codes schon einmal gesehen. Würden wir nicht akribisch auf die Dokumentation des Codes achten, hätten wir schnell einen echtes Problem und würden Stunden damit verbringen herauszufinden, was Funktion xyz genau macht.

<blockquote cite="http://manual.phpdoc.org/HTMLframesConverter/default/">
  <p>
    Writing good documentation is essential to the success of any software project. The quality of documentation can be even more important than the quality of the code itself, as a good first impression will prompt developers to look further into your code.
  </p>
</blockquote>

Um ein guter PHP-Entwickler zu werden, sollte man also gleich von Anfang an darauf achten, vernünftige Kommentare zu schreiben.

## Industriestandard phpDocumentor

Es empfiehlt sich für seine Kommentare ein einheitliches Format zu verwenden, dass von jedem anderen professionellen PHP-Programmierer verstanden wird.

In der PHP-Welt hat sich in den letzten Jahren zusehends das phpDocumentor-Format durchgesetzt. Es hat den großen Vorteil, dass die Dokumentation nicht nur gut für Menschen sondern auch gut durch Maschinen lesbar ist. Konkret bedeutet das: Wer seine Dokumentation mit phpDocumentor schreibt, wird auch in allen IDE&#8217;s später den Komfort der Autocompletion für seinen eigenen Code genießen können.

Ein weiterer Vorteil ist das man mit phpDocumentor auch eine komplette und klickbare Dokumentation all seiner Klassen und Funktionen erstellen lassen kann

Aber lassen wir kurz mal den Code sprechen, damit ihr am Beispiel einer Datei aus einem beliebigen großen PHP-Projekt mal sehen könnt wie so etwas aussieht.

<pre name="code" >&lt; ?php
/**
 * Piwik - Open source web analytics
 *
 * @link http://piwik.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html Gpl v3 or later
 * @version $Id: Auth.php 581 2008-07-27 23:07:52Z matt $
 *
 * @package Piwik
 */

interface Piwik_Auth {
	/**
	 * @return Piwik_Auth_Result
	 */
	public function authenticate();
}

/**
 *
 * @package Piwik
 */
class Piwik_Auth_Result extends Zend_Auth_Result
</pre>

Sowohl jede Datei, als auch jede Klasse und Funktion werden dokumentiert. Die Tags sind dabei genau festgelegt. Als Einstieg empfiehlt es sich folgendes [Cheatsheet](http://2tbsp.com/system/files/phpdoc_cheatsheet.pdf) von [2tbsb.com](http://2tbsp.com/) herunterzuladen. Es lohnt sich, das PDF auszudrucken und immer in Sichtweite zu haben, bis man die wichtigsten Tags verinnerlicht hat.

Nützlich können ausserdem IDE's sein, die die phpDocumentor-Tags automatisch ergänzen.

## Sonstige Konventionen

Oft benutz und auch von vielen IDEs erkannt werden auch Kommentare wie:
//@todo Eine bessere Lösung finden

## Man kann auch zu viel kommentieren!

Leider sieht man manchmal auch Dateien mit zu vielen Kommentaren - Trivialitäten sollten nicht kommentiert werden. Auch wenn sich das einfach anhört, aber zumindest ich habe am Anfang zu viel kommentiert und auch das macht den Code unübersichtlich.

Die Oftmals bessere Lösung ist z.b. das vergeben besserer Variablennamen oder das extrahieren einer Methode, die einen logischen Namen hat.

Der Code sollte an sich kommunizieren, was er tut. Solltet ihr also innerhalb einer Funktion den Drang verspüren zu kommentieren, lohnt es sich eine Sekunde innezuhalten und zu überlegen - kann ich das eleganter lösen? Sollte ich ein refactoring anwenden? Ist die Funktion zu lang? Meistens lautet die Antwort, dass man lieber nachpolieren sollte.

Wie haltet ihr es mit Kommentaren?
