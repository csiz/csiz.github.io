---
title: Hextech Mechahand v13
layout: post
---

<div style="display: flex;">

	<iframe width="240" height="420" src="https://www.youtube.com/embed/kJ4OLfqDy5U" title="It&#39;s happening!! Webcam control for 🤖 hand, lots of coding underneath to make it work" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


	<div style="margin-left: 2em;">The robot hand design was iterated, now with a flexible circuit integrated into the palm and fingers powering in-place position sensors and touch/force sensing. The integrated sensors greatly simplify wiring and assembly as the flexible circuits modules plug into eachother and use a single conexion to the main driver board on the forearm. The main driver board has also dropped wires in favour of directly soldering the motor leads into the board. The tendons are carefully routed through a flexible wrist cable protector widget and channeled directly to the motor spindles in the forearm for easy assembly. The name of the game was wire management, for both electrical and tendons. The motor power and sizes have also doubled! ... and yet, they need to double once more for good usability! The hand is controlled via camera hand detection.</div>

</div>

<!--more-->

Hextech Mechahand version 13
============================

Patent pending sensor design! Feel free to check out the [publication document] if you want to fill your head with superflously worded design descriptions.

<span><img src="/assets/images/hand-sensor-circuit-patent.png" width="360" alt="Hand sensor circuit pantent figure."/></span>


Unfortunately the motors are once again the source of all grief. I am asking them for a lot more torque than their little gears are capable of giving, so the little gears give up. We need a planetary gearbox with certainty to distribute the load on at least 3 micro gears. Unfortunately again, there are not many cheap choices for quiet, small DC motors with extremely sturdy planetary gears. The saving grace is that there are many options for brushless motors with planetary gears, but we need a brushless motor driver. Particularly, we need a brushless motor driver with current control (aka FOC control), but of course, no cheap options on the market. So we shall build our own!

And so we have done!

<span><img src="/assets/images/hex-mini-drive-prototype.jpg" width="360" alt="Single brushless motor driver."/></span>

But now we need to drive it with the codes, and the codes require complex maths running at crazy fast speeds (needs to be over 20kHz to prevent audible noise). Thus I decided to also build a motor simulator that accuratly models the physics at the 72MHz clock rate of the STM32 chip that we will use to drive the motor.

Check out the [motor simulator app], it's interactve!

<span><img src="/assets/images/motor-simulator-screenshot.png" width="720" alt="Motor simulator screenshot."/></span>


[publication document]: https://www.ipo.gov.uk/p-ipsum/Document/ApplicationNumber/GB2300185.2/8d5aacec-1162-4a5c-890c-138bb71cc5e2/GB2626014-20240710-Publication%20document.pdf
[motor simulator app]: https://csiz.observablehq.cloud/3-phase-motor-explainer/understanding_3_phase_motors