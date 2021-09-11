---
id: 1300
title: Mini Apache Logfile-Analyzer in Python v 0.1
date: 2009-11-22T11:28:52+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=1300
permalink: /blog/mini-apache-logfile-analyzer-in-python/
thumbnail:
  - http://cdn.cloudfiles.mosso.com/c12031/python_thumb.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";b:0;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Weiche Ware
---
Heute habe ich einen kleinen Apache-Logfile Analyzer in Python geschrieben. Warum? Ich muss manchmal durch unsere Logfiles und nach Auffälligkeiten suchen. Da ich das wiederkehrend mache muss es automatisiert sein.

Da das Ding für den Hausgebrauch ist, kann es auch nur dass was ich direkt wollte und zwar:

  * nach Script Tags in Referer und User-Agent suchen
  * Seiten mit Fehler 500 analysiere
  * Sehen wie häufig eine einzelne IP vorkommt

Wenn ihr mehr wissen wollt, dann schreibt euch einfach eure eigene Analyzer-Klasse mit den Methoden **processedParsedLine** und **printStats** und hängt sie in Zeile 73 mit ein **analyzers = [HttpStatusCodeAnalyzer(500), ClientIpAnalyzer(&#8222;64.127.102.82&#8220;), SecurityAnalyzer(), _meinNeuerAnalyzer()_]**

Ich warne gleich vor: Ich kenne mich nicht mit Python aus.

[sourcecode language=&#8220;python&#8220;]#!/usr/bin/python
import sys, re

APACHE\_LOG\_REGEX = re.compile(r'(\d+\.\d+\.\d+\.\d+) ([^ ]\*) ([^ ]\*) \[([^\]]\*)\] "([^"]\*)" (\d+) ([^ ]\*) "([^"]\*)" "([^"]*)"&#8216;)

\# Counts HTTP-Response Codes
class HttpStatusCodeAnalyzer(object):
_\_error\_count = 0
_\_error\_dict = {}

\# Sets the error code for this analyser
def \_\_init\_\_(self, error_code):
self._\_error\_code = error_code

def processParsedLine(self, parsed_line):
if(int(parsed\_line[5]) == self.\_\_error\_code):
self._\_error\_count += 1
if(parsed\_line[4] not in self.\_\_error\_dict):
self._\_error\_dict[parsed_line[4]] = 0
self._\_error\_dict[parsed_line[4]] += 1

\# Print Error statistics
def printStats(self):
print "Statistic for Error ", self._\_error\_code, " :"
print self._\_error\_count, " Total errors"
error\_pages = self.\_\_error\_dict.keys().sort()
for error in error_pages:
print self._\_error\_dict[error], "x : ", error

\# Get hit-countStatistics for a single ip-adress
class ClientIpAnalyzer(object):
_\_ip\_count = 0

def \_\_init\_\_(self, client_ip):
self._\_client\_ip = client_ip

def processParsedLine(self, parsed_line):
if(parsed\_line[0] == self.\_\_client\_ip):
self._\_ip\_count += 1

def printStats(self):
print "Statistic for Client with Ip ", self._\_client\_ip, " :"
print self._\_ip\_count, " Total Hits"

\# Looks if a <script>-tag was send in the header-fields
class SecurityAnalyzer(object):
__javascript = re.compile(r"<script")
_\_hacker\_dict = {}

def processParsedLine(self, parsed_line):
referer\_check = self.\_\_javascript.search(parsed\_line[7])
browser\_check = self.\_\_javascript.search(parsed\_line[8])

if(referer\_check or browser\_check):
if(parsed\_line[0] not in self.\_\_hacker\_dict):
self._\_hacker\_dict[parsed\_line[0]] = parsed\_line

def printStats(self):
hacker\_ips = self.\_\_hacker\_dict.keys()
print "Hacker Statistics:"
for ip in hacker_ips:
print ip, " Log example :", self._\_hacker\_dict[ip]

\# Parses a line of a logfile into a nice structure
def parseLine(line):
matched\_line = APACHE\_LOG_REGEX.match(line)
if(matched_line == None):
return
parsed\_line = matched\_line.groups()
return parsed_line

input = open(sys.argv[1], "r")
analyzers = [HttpStatusCodeAnalyzer(500), ClientIpAnalyzer("64.127.102.82"), SecurityAnalyzer()]

for line in input:
parsed_line = parseLine(line)
if(parsed_line == None):
continue
for analyzer in analyzers:
analyzer.processParsedLine(parsed_line)

input.close()
for analyzer in analyzers:
analyzer.printStats()
sys.exit(0)</pre>
[/sourcecode]

Die Bedienung ist übrigens (unter *nix) wie folgt:

  * Zuerst ausführbar machen
  * ./parser.py logfile.log
Oder auch gerne etwas wie ./parser.py logfile.log > auswertung.txt

So. Das war mein heutiges 60 Minuten-Programm in Python. Solltet ihr euch mit Python auskennen irgend etwas besonders schlecht finden, dann schreibt es bitte in den Kommentaren. Solltet ihr eine eigene Analyzer-Klasse bauen, dann bitte auch 🙂
