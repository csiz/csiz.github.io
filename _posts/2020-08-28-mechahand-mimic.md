---
title: Hextech Mechahand, Alpha Release
layout: post
---

<img src="/assets/images/mk_9_object_pickup.png" alt="Video of mk 9 picking up squish toy." width="600"/>

I designed an open source robotic hand as a low cost standard for reinforcement learning on dexterity.
The hand has 20 degrees of freedom, mimicking a human range of motion. Each of the joints has position
feedback and force sensing, with 6 extra pressure in the finger tips and palm. All electronics feed
into a compact PCB with WiFi connectivity. The bill of materials is just under $300 amortized over 5 hands.

<!--more-->

Hextech Mechahand
=================

The robot hand is targeted as an accessible standard for reinforcement learning
research as it has full state feedback and complete range of movement with an
opposable thumb and curling pinkie side of palm. Compared to other 3D printed
hands, the Hextech hand has position sensors and bearings embedded in each of
the finger joints. Since the actuating motors are placed on the forearm and
tied with stretchy nylon wire tendons, the in-place position sensing allows for
accurate state feedback. The custom PCB includes current sensors for each motor
to judge power use and rough force sensing, if adjusting for ohmic resistance and
tendon friction.


The demo uses a Leap Motion sensor, which is a little box with cameras under my hand
that uses machine learning to model my hand position. Unfortunately the sensor is
not very good, especially for fine finger movements where the fingers are partially
occluded due to the hand pose. For example when grabbing a pen the hand is sideways
to the camera, hiding half of the fingers. Nevertheless I manage to grab a pen and
scribble on a page.

The PID loop runs at 69Hz and limits burst and continuous current use for each
actuated joint. This limits the forces applied by the hand for safe handling as
well as safety of the hand. The hand was in fact strong enough to tear itself
apart, but fingers crossed that extra thickness and higher infill will fix the
weak point. The WiFi Websocket loop is currently limited to 10Hz. I'm working
on the MQTT interface and loop optimizations, expecting to improve the remote
loop to 30Hz and the inner loop to 200Hz.

The hand is built using off the shelf components and a 3D printed body at an amortized
cost of 300 USD per hand, requiring 30 hours of assembly time. Included in the cost
is the custom PCB designed for automated assembly. All design files for the mechanism,
the control circuit, and driver code is [open sourced on github][git].



[git]: https://github.com/csiz/hextech-mecha-hand

