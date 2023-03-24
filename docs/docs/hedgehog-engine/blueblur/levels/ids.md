---
description: Sonic Generations Level ID Map
---

# Level ID Map

## Mapping
Stage IDs are defined like this:
```
{stage_short_name}{stage_type}
```
!!! info "Example"
    cte200 -> City Escape Modern

    cte100 -> City Escape Classic

    cte101 -> City Escape Classic Mission 1
	

### Levels 

Level Short Name | Level Name          | Location
-----------------| --------------------|----------  
ghz              | Green Hill          | `disk/bb`
cpz              | Chemical Plant      | `disk/bb`
ssz              | Sky Sanctuary       | `disk/bb`
sph              | Speed Highway       | `disk/bb`
cte              | City Escape         | `disk/bb`
ssh              | Seaside Hill        | `disk/bb2`
csc              | Crisis City         | `disk/bb2`
euc              | Rooftop Run         | `disk/bb2`
pla              | Planet Wisp         | `disk/bb2`
cnz              | Casino Night Zone   | `disk/bb2`

Level Type ID                        | Level Type
-------------------------------------|--------------
100                                  | Classic Sonic Stage
200                                  | Modern Sonic Stage
10<code style="color: red;">x</code> | Classic Sonic Mission
20<code style="color: red;">x</code> | Modern Sonic Mission

!!! note Note 
    There's some missions which have their own terrain, and missions which are using original level's terrain.

    So, for first type of missions, you have mission's own terrain and `#` file in the root of the CPK. 
    For the second type of missions, you have original level's terrain and `#` file in the root of the CPK. 

    Example: mission `ghz103` has its own terrain, `ghz101` and `ghz102` doesn't have it, so they're using terrain from `ghz100`.

### Bosses

Boss ID  | Boss Name       | Location
-------- | ----------------|---------
bms      | Metal Sonic     | `disk/bb2`
bde      | Death Egg Robot | `disk/bb`
bsd      | Shadow          | `disk/bb2`
bpc      | Perfect Chaos   | `disk/bb`
bsl      | Silver          | `disk/bb2`
bne      | Egg Dragoon     | `disk/bb`
blb      | Time Eater      | `disk/bb`

### HUB Worlds

HUB ID | HUB Name                                 | Location
-------|------------------------------------------|---------
fig000 | Statue Room                              | `disk/bb2`
pam000 | Full White World                         | `disk/bb2`
pam001 | White World before completing Green Hill | `disk/bb2`