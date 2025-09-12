---
layout: page
title: Bi-level optimization for Electric Vehicle Routing and Pricing
description: Guide - Ankur Singh Rana, NIT Tiruchirappalli, Tiruchirappalli, India
img: assets/img/evrp1.png
importance: 3
category: work
---

The electric vehicle routing and pricing problem is solved through a combined reinforcement learning and game theoritical approach.

The routing algorithms are tested on the Sioux Falls road network. The Sioux Falls road network is a network that consists of 24 nodes and 76 edges.

<div class="row">
  <div class="col-12 d-flex justify-content-center mt-3 mt-md-0">
    {% include figure.liquid 
        path="assets/img/siouxfalls.png" 
        title="example image" 
        class="img-fluid rounded z-depth-1" 
        style="max-width:300px; height:auto;" 
    %}
  </div>
</div>

<div class="caption">
    Sioux Falls Road Network. The charging station are marked in red.
</div>

A non-cooperative Stackelberg game-theoretic price model integrated to represent interactions of EV users with charging stations. This formulation promotes pricing to arrive at a Nash equilibrium, whereby user satisfaction as well as station profitability is well balanced. 
<div class="row">
     <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/cs1.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/cs2.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/cs3.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Identifying the Nash Equilibrium at the three charging stations
</div>

A two-layer RL agent is designed to make choices based on both navigation through the road network and charging station selection, taking into account battery levels, charging station availability, and user-specified preferences. The Q-learning, Deep Q-Network (DQN) and Learning To Search algorithms are used to implement the agent, which is optimally trained with objectives to reduce cumulative travel time, charging time, and wait time. 

<div class="row">
     <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/q.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/dq.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/learch.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Route prediction from node 4 to node 24 using Q-learning, Deep Q Networks and Learning to Search Algorithms
</div>

Q-learning proposes a route that is longer and requires intermediate stopping, while DQN and LEARCH produce a more efficient path. <br>

This method enables electric vehicles to identify a route that enables them to reach their destination taking into account dynamic pricing at charging stations and user preferences. Further, the proposed method also ensures profitability to charging stations by leveraging a Game Theory based approach to find the optimal electricity selling price.


