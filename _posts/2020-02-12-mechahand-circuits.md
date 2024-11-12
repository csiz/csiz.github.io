---
title: 24 Motor Driver & Hextech Mecha-hand IV
layout: post
published: false
---

I finished the first working version of my robot hand project. Built using a custom made motor driver
to control all 20 degrees of freedom for the hand. I can now set each finger's position from a web browser.

[ ] Picture of driver circuit.
[ ] Short video of hand waving.


<!--more-->


A long time ago, in a [blog post far, far away]({% post_url 2019-06-11-mechahand-assemble %}), I promised
to build the electronics to control the robot hand. With near zero experience designing circuits at the
time, I had a long, steep learning curve to overcome. I started off with an ESP32 board controlling 3
other Arduino Nano boards in turn controlling motors with the very old an inefficient L293D. This designed
worked, but at only 70% efficiency, the motors moved slowly and the board was getting really hot fast. For
the second iteration I used more modern surface mounted driver chips. The SMD chips proved very difficult
to solder by hand, and since I also swapped the motor voltage with the logic level voltage, the chips barely
worked. I decided to take advantage of JLCPCB's new assembly service and designed a single chip that controls
all the motors I needed with a single ESP32. Using only SMD components that are in stock, the chip assembly
was automated; I only had to solder a few through hole connectors. Finally version 2 of the chip design works
like a charm.

[ ] Pic of first circuits (L293D).
[ ] Pic of second circuits (modern SMD drivers).
[ ] Pic of 24drive.

Look at that progress, awww yiss 😎


### 24 Driver

I designed an open-source [24 motor channel driver][24driver] to power the hand. In conjunction with 24
input channels for potentiometers, it can turn 24 DC motors into servos. Each motor driver has a current
sense resistor allowing us to measure per channel power, which we can add to the cost function for any AI.
In addition it has 12 inputs strain gauge measurements which we can measure with an amplifying ADC.

The main target of the chip is small low-cost robots. Most of the components can be machine assembled by
JLCPCB at a cost near $80 per board. The only components left to solder are an ESP32 kit and JST PH
connectors for the motor and sensors cables. The chip pairs nicely with many cheap 6V-12V DC motors and
off the shelf potentiometers. Roughly designed to deliver 6A of current for all motors or 2A per channel.
The board can be powered by 2S to 4S LiPo, and it has a soft power-on switch and cutoff voltage to protect
the batteries. It has a wireless interface for direct control from a computer, phone or remote. Or it
can be wired to an Raspberry PI or a specialized AI board for a self sufficient robot.

Get in touch if you want to build one. I'm still ironing out some bugs on the PCB and solving some wifi
issues, but soon it will be ready to use.

[ ] Macro pictures of the PCB


### Mechahand IV

At last, the first version of the mecha-hand that is fully functional, albeit with a very bad cable day.

[ ] Pic of design.
[ ] Video with hand movements.

This version continues to modular design of mechahand III. With the same wrist design made of 3 geared
motor joints, where the motors are placed directly on the joint. However for the fingers it goes back
to an improved pulley system from mechahand II. The biggest issue with a loop, or belt like, pulley system
is that we need to keep the loop in tension on all sides. For the nylon, PTFE tubing, and PLA combination,
the amount of tension needed would freeze the system from friction. Thus I use a passive spring to un-flex
each joint, and use the nylon cable to drive it in the main direction.

Due to the amount of wires needed for each joint, plus a separate PTFE tube for each, I ran into a massive
cable management issue. The hand works great for small movements, until the amount of cables put so much
pressure or snag, that it gets stuck. For the next iteration I'll move to tubular fingers with special
consideration for handling the cables. As well as a single PTFE tube entry point for all 3 pulleys, with
a carefully placed path for the nylon wires of the most distant joint. The software should be smart enough
to handle intermixed movement of 2 joints, even with the simple PID controller.

Look at all the fingers wiggling:

[ ] Video with all fingers actuated



[24driver]: https://github.com/csiz/hextech-mecha-hand/tree/master/24driver