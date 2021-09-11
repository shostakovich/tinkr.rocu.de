---
id: 3875
title: Intel AI Devcamp in Munich
date: 2018-11-24T19:41:56+00:00
author: SES
layout: post
guid: http://tinkr.de/?p=3875
permalink: /blog/intel-ai-devcamp-in-munich/
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:3878;s:11:"_thumb_type";s:5:"thumb";}'
layout_key:
  - ""
post_slider_check_key:
  - "0"
image: http://tinkrde.test.mug.im/wp-content/uploads/sites/7/2018/11/IMG_20181124_174310.jpg
categories:
  - Technik
tags:
  - CNN
  - Intel
  - Intel AI
  - Intel AI Devcamp
  - ML
  - Movidius
  - Munich
  - TensorFlow
---
<div id="attachment_3878" style="width: 1034px" >
  <img aria-describedby="caption-attachment-3878" loading="lazy" src="/assets/2018/11/IMG_20181124_174310-1024x865.jpg" alt="Intel AI Devcamp"    srcset="/assets/2018/11/IMG_20181124_174310-1024x865.jpg 1024w, /assets/2018/11/IMG_20181124_174310-300x254.jpg 300w, /assets/2018/11/IMG_20181124_174310-768x649.jpg 768w" sizes="(max-width: 1024px) 100vw, 1024px" />

  <p id="caption-attachment-3878" >
    Intel AI Devcamp
  </p>
</div>

Today was quite a rainy day, so I was lucky to be invited to the Intel AI Devcamp in Munich.
The reason I signed up for this event was to find out, what the current workflow of the AI tools is. Quite some time has passed since I last had some contact with this field. Six years ago I did a person detection based on SVM-classifiers and HOG-features embedded in OpenCV. Today&#8217;s workshop showcases Intel&#8217;s frameworks that are embedded in Python, Tensorflow and other APIs.

The devcamp started with the setup of the workshop attendees laptops, followed by some very brief introduction to machine learning and deep learning.
Before lunch, we did a first hands-on lab on an AWS-based Jupyter-notebook. The lab was named: Breeds Data Wrangling - Collect and Prepare Data and Setup for Training.

<div id="attachment_3876" style="width: 1034px" >
  <img aria-describedby="caption-attachment-3876" loading="lazy" src="/assets/2018/11/jupyter_notebook-1024x658.jpg" alt="jupyter notebook"    srcset="/assets/2018/11/jupyter_notebook-1024x658.jpg 1024w, /assets/2018/11/jupyter_notebook-300x193.jpg 300w, /assets/2018/11/jupyter_notebook-768x493.jpg 768w, /assets/2018/11/jupyter_notebook.jpg 1029w" sizes="(max-width: 1024px) 100vw, 1024px" />

  <p id="caption-attachment-3876" >
    jupyter notebook
  </p>
</div>


Our program was trained to look for a certain kind of animal breed.

After lunch, we worked in another hands-on lab in a VMware Ubuntu environment. Here we did a training of a CNN (Convolutional Neural Network) of the MNIST-dataset via CPU and the Movidius Neural Compute Stick. The advantage of the Movidius Stick is, that it basically performs nearly as good as a normal Intel CPU, but at a very low power (30W vs. 1W). Here our program was trained to look for the right numerical value of a handwritten number.


<div id="attachment_3877" style="width: 960px" >
  <img aria-describedby="caption-attachment-3877" loading="lazy" src="/assets/2018/11/vmware_linux_tensorflow.jpg" alt="VMware Linux Tensorflow"    srcset="/assets/2018/11/vmware_linux_tensorflow.jpg 950w, /assets/2018/11/vmware_linux_tensorflow-300x228.jpg 300w, /assets/2018/11/vmware_linux_tensorflow-768x583.jpg 768w" sizes="(max-width: 950px) 100vw, 950px" />

  <p id="caption-attachment-3877" >
    VMware Linux Tensorflow
  </p>
</div>

<div id="attachment_3879" style="width: 810px" >
  <img aria-describedby="caption-attachment-3879" loading="lazy" src="/assets/2018/11/IMG_20181124_144024.jpg" alt="Movidius Neural Compute Stick"    srcset="/assets/2018/11/IMG_20181124_144024.jpg 800w, /assets/2018/11/IMG_20181124_144024-300x193.jpg 300w, /assets/2018/11/IMG_20181124_144024-768x493.jpg 768w" sizes="(max-width: 800px) 100vw, 800px" />

  <p id="caption-attachment-3879" >
    Movidius Neural Compute Stick
  </p>
</div>

After the hands-on labs, two local startups showcased their products. The startup-company ProGlove impressed me most. They offer smart gloves, that are mostly used in car manufacturing. They have an integrated barcode scanner. This helps to reduce the time to document process steps during production.

### Conclusion

It was quite an amazing day, lots to see and learn and eat 😉 The only issue for me was, that the learning curve is very high, so today&#8217;s event was not very beginner friendly. I will try to dive a little bit more into the Tensorflow environment in the next weeks.
