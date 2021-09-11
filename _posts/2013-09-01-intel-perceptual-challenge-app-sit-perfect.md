---
id: 3449
title: 'Intel Perceptual Challenge App: Sit Perfect'
date: 2013-09-01T16:38:27+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=3449
permalink: /blog/intel-perceptual-challenge-app-sit-perfect/
thumbnail:
  - http://tinkr.de/wp-content/uploads/2013/09/sit_prefect_0240.jpg
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:3454;s:11:"_thumb_type";s:10:"attachment";}'
categories:
  - Technik
tags:
  - Intel Perceptual Challenge
  - Posture
  - SDK
  - Sit Perfect
  - Webcam
---
This app (written in Processing) is our entry for the Intel Perceptual Challenge. It tries to help computer users maintaining a better posture.

<div id="attachment_3454" style="width: 616px" class="wp-caption alignnone">
  <img aria-describedby="caption-attachment-3454" loading="lazy" src="/assets/2013/09/sit_prefect_06061.jpg" alt="Sit Perfect App" width="606" height="620" class="size-full wp-image-3454" />

  <p id="caption-attachment-3454" class="wp-caption-text">
    Sit Perfect App
  </p>
</div>

Sit Perfect detects the users face and determines, if the user sits too near or too far away from the monitor.

We use the face detection algorithm of the Intel Perceptual SDK to detect landmarks on the users face. The app captures the initial values and compares them to values, that we get during runtime.

We determine if the user is too near or too far way from the monitor or if he or she sits right.
We also implemented an alarming sound, so the app don&#8217;t need to be present on the desktop all the time and can be running in the background.

Soft-/Hardware Requirements:
-we tested the app under win7 and win8
-a normal webcam is required, a webcam with a depth sensor is not required
-the Intel perceptual SDK must be installed

Here is a short demo:
