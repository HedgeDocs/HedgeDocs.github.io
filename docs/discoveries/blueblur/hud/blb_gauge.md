---
description: Info about an unused Time Eater gauge in Sonic Generations
---
# Unused Time Eater Gauge
There's an unused gauge that was supposed to be used in the Time Eater boss battle. The gauge is present in `bb.cpk/SonicActionCommonHud/ui_gameplay.xncp`, in the `blb_gauge` XNCP scene. Unfortunately, this gauge isn't functional in-game, and its usage also remains unknown.

Visually, this element appears to be finished, and it even features animations. Below you can see the available animations for this element. Some were recorded in-game, but others were recorded using a WIP build of [Shuriken](https://github.com/crash5band/Shuriken), which may not be 100% accurate.

## Intro_Anim
Following the naming scheme of almost every XNCP animation made for Generations, this was supposed to be played whenever the HUD element showed up on screen. Simple slide-in animation.

<video autoplay loop muted defaultmuted playsinline>
  <source src="../assets/blb_gauge/intro_anim.webm" type="video/webm">
</video>

## change_c2g / change_g2c
These animations are played whenever you switch between Classic Sonic to Modern Sonic and vice versa. The video below shows a recording of the animation in-game.

<video autoplay loop muted defaultmuted playsinline>
  <source src="../assets/blb_gauge/change.mp4" type="video/mp4">
</video>

## change_c2w / change_g2w
Seems like these were supposed to be animations for changing to an intermediate state between Classic and Modern Sonic, like in the final part of the boss battle. The "w" means "double" in japanese.

<video autoplay loop muted defaultmuted playsinline>
  <source src="../assets/blb_gauge/change_c2w.webm" type="video/webm">
</video>

## cl_gauge_size_1
Animation for Classic Sonic's gauge.

![cl_gauge_size_1](assets/blb_gauge/cl_gauge_size_1.gif)

## gn_gauge_size_1
Animation for Modern Sonic's gauge.

![gn_gauge_size_1](assets/blb_gauge/gn_gauge_size_1.gif)
