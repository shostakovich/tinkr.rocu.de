---
id: 477
title: Python 3.0 unter Mac OS X
date: 2009-01-18T18:16:48+00:00
author: SES
layout: post
guid: http://web2.0du.de/?p=311
permalink: /blog/python-30-unter-mac-os-x/
thumbnail:
  - http://cdn.cloudfiles.mosso.com/c12031/python_thumb.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";b:0;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Weiche Ware
tags:
  - Mac OS X
  - Python
---
Seit einiger Zeit ist Python 3.0 fertig und daher habe ich beschlossen Python 3 auf meinem Mac zu installieren.

Im folgenden Zeige ich euch, wie ich das ganze gemacht habe.

**Zuerst Python runterladen und entpacken:**
curl http://www.python.org/ftp/python/3.0/Python-3.0.tgz > Python.tgz
tar -xvf Python.tgz
cd Python-3.0/

<img loading="lazy" alt="" src="http://cdn.cloudfiles.mosso.com/c12031/python.png" title="Burmese python 3 from Tambako the Jaguar (Flickr)" class="alignnone" width="606" height="467" />

**Konfigurieren und installieren:**
./configure -enable-framework MACOSX\_DEPLOYMENT\_TARGET=10.5 -with-universal-archs=all
make
make test

**Installieren:**
sudo make frameworkinstall

**Pfad einrichten:**
Als letztes editiert man einfach die Datei **.bash_profile** in seinem Benutzerordner und fügt die Zeile PATH=&#8220;/Library/Frameworks/Python.framework/Versions/3.0/bin:${PATH}&#8220;

Wenn ihr keinen Editor bedienen könnt benutzt einfach in eurem Benutzerverzeichnis
echo &#8222;PATH=\&#8220;/Library/Frameworks/Python.framework/Versions/3.0/bin:${PATH}\&#8220;&#8220; > .bash_profile

Von nun an kann man Python einfach per **python3.0** starten.
