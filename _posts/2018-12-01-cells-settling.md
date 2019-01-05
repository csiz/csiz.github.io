---
layout: post
title: Cell Membrane Simulation
---

I [simulated the behaviour of cell membranes][simulation] for a research collaboration with my wife, Catalina Spatarelu, and her colleague Dung Nguyen. It's written in [Observable] using a literate programming style; that is prose, code and visualisation intermixed. Visualisations are all done using [d3] and the physics interactions are optimised using a [quadtree]. The goal of the project is to analyse the jamming/unjamming transition and a poster has been accepted for presentation at [CMBE 2019].

<video autoplay muted loop width="360">
  <source src="/assets/images/simulation-fast.mp4" type="video/mp4"/>
  Video of the cell simulation.
</video>

<!--more-->

Check out the live [simulation] and play with the controls!


[simulation]: https://beta.observablehq.com/@csiz/cell-settling
[observable]: https://beta.observablehq.com/
[d3]: https://d3js.org/
[quadtree]: https://en.wikipedia.org/wiki/Quadtree
[CMBE 2019]: https://www.bmes.org/cmbeconf2019