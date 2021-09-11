---
id: 2181
title: FFT-Analyzer mit VGA-Ausgang
date: 2011-01-31T20:45:19+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=2181
permalink: /blog/fft-analyzer-mit-vga-ausgang/
thumbnail:
  - http://tinkr.de/wp-content/uploads/2011/01/fft_sml.png
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:2184;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Allgemeines
  - Technik
tags:
  - Altera
  - Eclipse
  - FFT
  - FPGA
  - NIOS
---
Was lange wärt, wird endlich gut. Hier eine erste Demo vom FFT-Analyzer, den wir im Rahmen einer Studienarbeit erarbeitet haben. Leider hat uns die NIOS-Entwicklungsumgebung (basierend auf Eclipse) mehr Kummer und Ärger bereitet, als Arbeit abgenommen. Wir hoffen nur, dass die Tool-Fritzen da endlich mal ausmisten und das ganze Fool-proof machen.

Der Analyzer wurde auf einem CycloneII-Board von Terasic implementiert. Mehrere VHDL/Verilog Cores (Audio In, VGA-Controller) und ein Nios-Softcore-Prozessor erzeugen eine FFT und zeigen diese auf einem VGA-Bildschirm an.
