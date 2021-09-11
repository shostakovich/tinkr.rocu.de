---
id: 1044
title: 'VHDL-AMS-Tools - oder Programme, die komplizierter nicht sein könnten'
date: 2009-08-09T18:39:53+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=1044
permalink: /blog/vhdl-ams-tools-oder-programme-die-komplizierter-nicht-sein-konnten/
thumbnail:
  - http://tinkr.de/wp-content/uploads/2009/08/smash240.png
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:1049;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Allgemeines
  - Passion Fernstudium
tags:
  - Dolphin
  - Fernstudium
  - Hamster
  - SMASH
  - SystemVision
  - VHDL
  - VHDL-AMS
---
In meinem Fernstudium dreht sich eine Vorlesung um die VHDL-Erweiterung VHDL-AMS, mit der neben Digitalen Schaltwerken auch analoge und Mixed-Signal-Schaltungen entwickelt und simuliert werden können.
Als großes Ärgernis beim Durcharbeiten des Skripts haben sich dabei die am Markt erhältlichen Tools herausgestellt. Hierbei sind mir nur drei Hersteller solcher Tools bekannt:
- Mentor mit [SystemVision](http://www.mentor.com/products/sm/system_integration_simulation_analysis/systemvision/)
- Ansoft mit [Simplorer](http://www.ansoft.com/products/em/simplorer/), früher [hAMSter](http://www.theoinf.tu-ilmenau.de/~twangl/VHDL-AMS_online_en/Home.html)
- Dolphin mit [SMASH](http://www.dolphin.fr/medal/smash/smash_overview.php)

Die aktuelle Eval.-Version von SystemVision (Version 5.4) hat eine Installationsmacke. Die Simulationen kann man daher nicht damit ausführen. Mentor tut aber so, als sei ich schuld und nicht das Programm. Auch geht die Installation unter Vista nicht. Ich frage mich, wie lange es dauert ein Programm für dieses &#8222;neue&#8220; Betriebssystem anzupassen. Bei Simplorer schaut die Vista-Kompatibilität auch nicht besser aus.
Der Simplorer ist von der Bedienung ein wenig gewöhnungsbedürftigt. Er arbeitet mit einer Schaltplaneingabe, statt mit einem Top-VHDL. Mir hat da der alte hAMSter viel besser gefallen. Nur ist dieser sehr eingeschränkt in seinem Umfang.

[<img loading="lazy" src="/assets/2009/08/smash606.png" alt="SMASH-IDE " title="SMASH-IDE "    srcset="/assets/2009/08/smash606.png 606w, /assets/2009/08/smash606-300x235.png 300w" sizes="(max-width: 606px) 100vw, 606px" />](/assets/2009/08/smash.png)
Last but not least gibt es da noch SMASH von dem französischem Hersteller Dolphin. Dieser Simulator vermag auch schon in der Eval-Version sehr viel zu leisten, nur finde ich die Benutzung sehr eigenartig. Dauernd schließt sich mein VHDL-File, wenn ich neu-kompiliere und statt eines Projekt-Wizards klicke ich in kryptischen Untermenus rum und muss noch in dem .pat-File Einträge machen, damit der Herr SMASH seinen Allerwertesten bewegt. Aber mittlerweile funzen auch meine ADC-Schaltungen, da bin ich schon ein kleinwenig stolz auf mich 🙂
