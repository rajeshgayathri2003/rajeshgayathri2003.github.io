---
layout: page
title: Low-light Image Enhancement using U-net and Modified U-net architectures
description: Guide - Prof Kaushik Mitra, IIT Madras, Chennai, India
img: assets/img/cil4.jpg
importance: 1
category: work
related_publications: false
---

Images are often captured in sub-optimal lighting conditions and they cannot be used for further information extraction. They have very low illuminance in the range of 0.1 to 5 lux. <br>
This project explores the use of two architectures:
<list>
<ul> U-net </ul>
<ul> Modified U-net </ul>
</list>

The networks are trained on the outdoor dataset collected at IIT Madras.

<div class="row">
  <div class="col-12 d-flex justify-content-center mt-3 mt-md-0">
    {% include figure.liquid 
        path="assets/img/unet.png" 
        title="example image" 
        class="img-fluid rounded z-depth-1" 
        style="max-width:300px; height:auto;" 
    %}
  </div>
</div>
<div class="caption">
    U-net architecture
</div>

<div class="row">
  <div class="col-12 d-flex justify-content-center mt-3 mt-md-0">
    {% include figure.liquid 
        path="assets/img/modifiedUnet.png" 
        title="example image" 
        class="img-fluid rounded z-depth-1" 
        style="max-width:300px; height:auto;" 
    %}
  </div>
</div>
<div class="caption">
Modified U-net architecture
</div>

This is a sample of an extreme low-light image given as input to the network.

<div class="row">
  <div class="col-12 d-flex justify-content-center mt-3 mt-md-0">
    {% include figure.liquid 
        path="assets/img/lowlight.png" 
        title="example image" 
        class="img-fluid rounded z-depth-1" 
        style="max-width:300px; height:auto;" 
    %}
  </div>
</div>

<p> The Seeing in the Dark U-net takes in a four-channel image as its input. The RAW image data
obtained from the Bayer array is rearranged into RGBG channels and the spatial dimension is
reduced by a factor of two. While training on the Outdoor Dataset, the input given is a three
channel RGB image. Hence, the number of channels in the first input layer is changed to three. </p>

These are the results obtained using the U-net architecture.
<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/cil1.jpg" title="example image" class="img-fluid rounded z-depth-1" style="width:100%; height:250px; object-fit:cover;" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/cil2.jpg" title="example image" class="img-fluid rounded z-depth-1" style="width:100%; height:250px; object-fit:cover;" %}
    </div>
</div>
<div class="caption">
    The ground truth image is on the left and the enhanced image is on the right.
</div>

<p>The modified U-net architecture replaces the U-net style encoder and decoder with three encoders - the Lower
Scale Encoder (operating at 1⁄2 resolution), Medium Scale Encoder (operating at 1⁄8 resolution)
and High Scale Encoder (operating at 1/32 resolution). The HSE contains most of the
convolutional blocks and the Residual Dense Block due to its low resolution. The various scales
operate in parallel, and hence the process speeds up.
The original network takes a RAW image as its input and has four input channels. To account
for the change in the number of channels, an additional convolutional layer is added at each
step.</p>


<div class="row">
  <div class="col-12 d-flex justify-content-center mt-3 mt-md-0">
    {% include figure.liquid 
        path="assets/img/modifiedUnet2.png" 
        title="example image" 
        class="img-fluid rounded z-depth-1" 
        style="max-width:300px; height:auto;" 
    %}
  </div>
</div>


<div class="caption">
Changes made to the modified U-net architecture to account for the change in the number of channels
</div>
These are the results obtained using the modified U-net architecture.


<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/cil6.jpg" title="example image" class="img-fluid rounded z-depth-1" style="width:100%; height:250px; object-fit:cover;" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/cil8.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The ground truth image is on the left and the enhanced image is on the right.
</div>

The quality of the output images improves as the average value of PSNR (Peak-Signal-to-Noise ratio) increases. The standard U-net architecture has higher PSNR compared to the modified network. 

