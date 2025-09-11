---
layout: page
title: Low-light Image Enhancement using U-net and Modified U-net architectures
description: Guide - Prof Kaushik Mitra, IIT Madras, Chennai, India
img: assets/img/cil4.jpg
importance: 1
category: work
related_publications: true
---

Enhanced extreme low-light images with illuminance in the 0.1 to 5 lux range using U-net and modified U-net architectures.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/unet.png" title="example image" class="img-fluid rounded z-depth-1" style="width:100%; height:250px; object-fit:cover; %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/modifiedUnet.png" title="example image" class="img-fluid rounded z-depth-1" style="width:100%; height:250px; object-fit:cover;%}
    </div>
</div>
<div class="caption">
    U-net architecture & modified U-net architecture
</div>

This is a sample of an extreme low-light image given as input to the network.

<div class="row">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/lowlight.png" title="example image" class="img-fluid rounded z-depth-1" style="width:100%; height:250px; object-fit:cover;%}
    </div>
</div>

These are the results obtained using the U-net architecture.


<div class="row">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/cil1.jpg" title="example image" class="img-fluid rounded z-depth-1" style="width:100%; height:250px; object-fit:cover;%}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/cil2.jpg" title="example image" class="img-fluid rounded z-depth-1" style="width:100%; height:250px; object-fit:cover;%}
    </div>
</div>
<div class="caption">
    The ground truth image is on the left and the enhanced image is on the right.
</div>


These are the results obtained using the modified U-net architecture.


<div class="row">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/cil6.jpg" title="example image" class="img-fluid rounded z-depth-1" style="width:100%; height:250px; object-fit:cover;%}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/cil8.jpg" title="example image" class="img-fluid rounded z-depth-1" style="width:100%; height:250px; object-fit:cover;%}
    </div>
</div>
<div class="caption">
    The ground truth image is on the left and the enhanced image is on the right.
</div>

<!-- {% raw %}

<!-- ```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
``` 

{% endraw %} -->
