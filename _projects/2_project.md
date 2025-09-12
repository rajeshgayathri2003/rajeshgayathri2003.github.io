---
layout: page
title: GPT-Fabric++ - Leveraging Pre-trained Foundation Models for fabric manipulation tasks
description: Guide - Daniel Seita, University of Southern California, Los Angeles
img: assets/img/3.jpg
importance: 2
category: work
giscus_comments: true
---

Fabric manipulation has widespread applications in the home and industry. This
problem, however, is highly challenging due to the fabric’s infinite configuration space,
high dimensionality and self-occlusions. Prior work in this field has focussed on
approaches that require large amounts of human-fabric interaction data. To reduce the
required data, we leverage the extensive common sense knowledge of Large Language
Models (LLMs) like GPT. We present GPT-Fabric++, a novel approach that uses GPT
to output low-level fabric manipulation tasks.

In this work, we study fabric folding and fabric smoothing tasks.

In the case of fabric folding, a two-step pipeline is used. Firstly, GPT-4o is given a sequence of subgoal images and asked to output language instructions that describe the folding action. Secondly, the language instruction along with the top-down image of the current fabric to be folded is given to the VLM. The VLM outputs the pick and place points for the given folding task.

<div class="row">
    <div class="d-flex justify-content-center">
        {% include figure.liquid path="assets/img/gptfabricfolding.png" title="example image" class="img-fluid rounded z-depth-1" style="width:100%; height:250px; object-fit:cover;" %}
    </div>
</div>
The SoftGym simulation envrionment used to evaluate the experiments.
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

<div class="row">
    <div class="d-flex justify-content-center">
        {% include figure.liquid path="assets/img/fold_sim_v02.jpg" title="example image" class="img-fluid rounded z-depth-1" style="width:100%; height:250px; object-fit:cover;" %}
    </div>
</div>

<div class="caption">
Representative frame-by-frame rollouts of GPT-Fabric++ in SoftGym simulation where it attempts to select the best single-arm or bimanual pick-and-place action at each frame to match the next subgoal
</div>


<video width="640" height="360" controls poster="assets/img/2dt.png">
  <source src="{{ '/assets/videos/codegenbm.mp4' | relative_url }}" type="video/mp4">
  Your browser does not support the video tag.
</video>
<p><em>Demo of Double Straight Fold</em></p>

In the case of GPT-Fabric++ smoothing, a crumbled T-shirt is given to the robot and it is asked to smoothen the same. A top-down image of the crumbled fabric is given to GPT-4o. The VLM is asked to output a picking point and a direction pull. At the end of `T` timesteps, the current coverage of the fabric is measured. The coverage achieved by the fabric is a number between 0 and 1. 

The stepwise rollout of smoothing is given below
<div class="row">
    <div class="d-flex justify-content-center">
        {% include figure.liquid path="assets/img/smooth_sim_v01.jpg" title="example image" class="img-fluid rounded z-depth-1" style="width:100%; height:250px; object-fit:cover;" %}
    </div>
</div>
<div class="caption">
Two examples of GPT-Fabric++ rollouts for successfully smoothing t-shirts in SoftGym simulation. Each rollout has five pick-and-place actions, indicated with the overlaid black arrows
</div>

<!-- Here is a gif that demonstrates t-shirt folding
<div>
{% include figure.liquid 
   path="assets/img/VCD_TshirtFlatten.gif" 
   title="Flattening a T-shirt" 
   caption="Animated result" 
   class="rounded z-depth-1" 
   style="width:360px; height:360px; object-fit:cover;" 
%}

</div> -->

