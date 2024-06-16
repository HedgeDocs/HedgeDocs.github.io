---
description: Guide for custom rank times for Sonic Generations
---
# How To Specify Custom Ranks for Sonic Generations

!!! info
    This guide requires the usage of decompiled LUA files, which can be obtained in any console version of the game.

Rank times for all stages are stored in `bb3/#Application.ar.00/ScoreTimeTable.lua`. Opening this file presents you with a list with the A and C rank times (in seconds). The S rank is just the A rank time with a perfect bonus, and the D rank is any time below the C rank time.

## Example
Let's try editing the times for Seaside Hill (Modern). First we need to locate `ssh200`, as that's the codename for the stage.

```lua
ScoreTimeTable["ssh200"] = { 220,  820 }
```

Looking at this, we can see that the A rank for this stage is defined as 220 seconds (3 minutes and 40 seconds), and the C rank is defined as 820 seconds (13 minutes and 40 seconds). So, if we want to change the A rank time to 100 seconds, we can do this:

```lua
ScoreTimeTable["ssh200"] = { 100,  820 }
```

After editing the time, we save the file, repack the AR archive, and try it out in-game!