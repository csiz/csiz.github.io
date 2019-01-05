---
layout: post
title:  "It's a Stick-up (part 1)"
---

[My first project][stickup] on my quest to build a walking robot using neural nets. It's my physical build of the classic [pendulum] control problem. The goal is to swing a stick and keep it balanced so it stays upright. Turns out, [reinforcement learning is pretty hard][hard rl], so I can't show a working version yet. The build I have so far is a Raspberry Pi connected to 4 servos through control board [I programmed][servo]. There's a string tied to the servos on which a stick is held and on the stick there's a [gyroscope][gyro]. The Raspberry Pi connects through websockets to my computer and I sample the measurements and output the servo positions. Hopefully an actor-critic algorithm will control it soon, but for now, here's me fiddling with it.

<video autoplay muted loop width="360">
  <source src="/assets/images/itsastickup.mp4" type="video/mp4"/>
  Video of my pendulum setup.
</video>

<!--more-->

PS. Feel free to use my code for the async interface for the [servo] and [gyro], but beware that [setting up the Raspberry PI][setup] is a bit tricky.

[stickup]: https://github.com/csiz/itsastickup
[pendulum]: https://gym.openai.com/envs/Pendulum-v0/
[hard rl]: https://www.alexirpan.com/2018/02/14/rl-hard.html
[servo]: https://github.com/csiz/pi_scripts/blob/master/servo.py
[gyro]: https://github.com/csiz/pi_scripts/blob/master/gyro.py
[setup]: https://github.com/csiz/pi_scripts/blob/master/pi_setup.txt