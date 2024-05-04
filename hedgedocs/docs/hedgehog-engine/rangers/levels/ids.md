---
description: Sonic Frontiers level ID map
---

# Level ID Map

## Mapping
Stage IDs are defined like this:
```
{world_id}{stage_type}{stage_number}
```
!!! info "Example"
    w2r01 -> Ares Open Zone 1

### Worlds (Zones)

World ID | World Name
-------- | -----------
w1       | Kronos
w2       | Ares
w3       | Chaos
w5       | The End
w6       | Green Hill
w7       | Chemical Plant
w8       | Sky Sanctuary
w9       | Highway

### Stage Type

Stage Type ID | Stage Type
------------- | -----------
r             | Open Zone
d             | Cyber Space
f             | Fishing (always w1)
h             | Hacking (always w1)

### Stages (Cyberspace)

Stage Name | Level ID
---------- | -----------
1-1        | w6d01
1-2        | w8d01
1-3        | w9d04
1-4        | w6d02
1-5        | w7d04
1-6        | w6d06
1-7        | w9d06
2-1        | w6d05
2-2        | w8d03
2-3        | w7d02
2-4        | w7d06
2-5        | w8d04
2-6        | w6d03
2-7        | w8d05
3-1        | w6d04
3-2        | w6d08
3-3        | w8d02
3-4        | w6d09
3-5        | w6d07
3-6        | w8d06
3-7        | w7d03
4-1        | w7d08
4-2        | w9d02
4-3        | w7d01
4-4        | w9d03
4-5        | w6d10
4-6        | w7d07
4-7        | w9d05
4-8        | w7d05
4-9        | w9d07

### Stages (DLC Cyber Space)

Stage Name | Gedit ID  | Terrain ID
---------- | --------- | ---------
4-A        | w6d21     | w6d02
4-B        | w6d22     | w6d04
4-C        | w6d23     | w6d10
4-D        | w7d21     | w7d01
4-E        | w7d22     | w7d04
4-F        | w7d23     | w7d06
4-G        | w9d21     | w9d02
4-H        | w9d22     | w9d03
4-I        | w9d23     | w9d06

## Oddities
Due to Ouranos and Rhea actually being part of Kronos, their map files are stored in w1:

- w1r04 - Ouranos
- w1r05 - Rhea (uses final Kronos terrain)
- w1r06 - Ouranos (Another Story, uses original Ouranos terrain)

There are also various versions of Kronos in the game files (not present in the PC release), those being:

- w1r01 - Alpha Kronos (uses w1r02 terrain)
- w1r02 - Beta Kronos
- w1r03 - Final Kronos
