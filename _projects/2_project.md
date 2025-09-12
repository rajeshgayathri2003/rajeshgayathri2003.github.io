---
layout: page
title: Leveraging Pre-trained Foundation Models for fabric manipulation tasks
description: Guide - Daniel Seita, University of Southern California, Los Angeles
img: assets/img/3.jpg
importance: 2
category: work
giscus_comments: true
---

Used Vision Language Models like GPT-4o to obtain low-level robot manipulation action for fabric manipulation tasks like fabric folding and fabric smoothing.

These are the results of the double straight fold.
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/0ds.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1ds.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/2ds.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Results of the Double Straight fold in simulation
</div>

These are the results of the double triangle fold.
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/0dt.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1dt.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/2dt.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Results of the Double Triangle fold in simulation
</div>

These are the results of the Corners Edges Inwards.
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/0.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/2.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Results of the Corners Edges Inwards fold in simulation
</div>

{% include video.liquid 
   path="assets/videos/codegenbm.mp4" 
   width="640" 
   height="360" 
   controls=true 
   autoplay=false 
   loop=false 
   muted=false 
   poster="assets/img/2dt.png" 
   caption="Demo of Double Straight Fold" 
%}


Here is a gif that demonstrates t-shirt folding
<div>
{% include figure.liquid path="assets/img/VCD_TshirtFlatten.gif" title="Flattening a T-shirt" caption="Animated result" %}
</div>

