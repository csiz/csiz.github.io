---
title: Hextech Mecha-hand, Frozen mk II, and Chunky mk III
layout: post
published: false
---

I iterated on the physical hand design whilst waiting for the driver circuit components to arrive.

[ ] Scrouge for picture of hand.

<!--more-->

### Mechahand II

[ ] Pic of design

Redesigned the hand to use different potentiometers. Initially ordered 3mm sized trim-pots which I realized
were absolutely tiny when they arrived. Un-burdened by any foresight, I went ahead and redesigned the finger
to use them, and got a pretty compact design. Unfortunately the pots, besides being tiny are also super fragile,
and they kept breaking down the middle when I was trying to mount them. Not surprising since I was using a fair
bit of force so that the parts snap into a nice pivot. Alas, I gave up on that after the 3rd one that broke.

After more searching I found other cheap trim-pots that are 6mm wide. More manageable, but the spec sheet says
they only hold out for 20 cycles. Which is like 1 minute of hand use, so I went for more expensive Piher PT6 pots.
These have a hex hole in the middle which allows for a much sturdier construction by using a hex rod as the pivot
point instead of plastic snap-ins. Hex rods are also apparently impossible to buy, but I've settled for chopping
up the appropriately sized hex key.

Finished finger re-iteration using the Piher pots, and it looks much sturdier than both other versions. It's
significantly smaller than the original version, but I think it would beat it in sturdiness. It's also a lot
easier to print, with all parts having enough surface area to adhere to the bed. Nothing too tiny, and no
stress points that make the parts curl up during printing. I need to await the hex rods to finish a prototype!

After receiving the first set of control circuits, I started assembling the hand and wires it up. Unfortunately
due to the very sharp angles that the nylon was passing through, the system was frozen by friction when tensioned.
This was compounded by the large voltage drop in the old L293D motor drivers I used, causing more inefficiencies.


### Mechahand III

With mechahand II unusable, I went back to first principles and decided to put the motors directly on the fingers.
Assuming I can make the gear mechanism small enough and pack the motors as close as I can it should result in
efficient torque.

[ ] Pic of design.

After the difficulty in designing the previous hands, I decided to implement a quick modular design. I tested
small gear modules, then I created 3 connecting mechanisms to turn 3 modules into a finger, and 5 fingers into
the hand. Similarly I created a higher geared and sturdier module for the wrist joints. I designed and assembled
this hand version within a week from scrapping mk II; the modular design was very quick.

[ ] Pics of finger module.

With some of the circuit boards completed this hand worked as proof of concept, but it was even larger than the
first version. And the joints were not as sturdy as needed due to connecting via the small gear from size constraints.
With the addition of the large mass of the motors, the low gear speed, the fingers oscillate a lot after each movement.

[ ] Pics of big hand

