---
title: Reinforce
layout: post
published: false
---

Implementing reinforcement learning algorithms... is hard!

<!--more-->

Steps:
  * Draw out an actor critic algorithm on the blackboard, implement it and it doesn't work...
  * Read more reinforcement learning papers.
  * Spinning up in reinforcement learning shows up.
  * Start from scratch and implement the most basic Reinforce. Just policy gradient on un-biased reward.
  * Figure out the off by one error where I was reinforcing the reward one step ago. Fixing it makes the algo work.
  * Bias the reward by a value function, still works, but can't tell if better.