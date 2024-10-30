---
description: Shadow Generations level ID map
---

# Level ID Map

## Mapping
Stage IDs are defined like this:
```
{world_id}{stage_type}{stage_number}
```
!!! info "Example"
    w02a10 -> Rail Canyon: Act 1

### Worlds (Zones)

World ID  | World Name
--------  | -----------
w01       | Space Colony Ark
w02       | Rail Canyon
w03       | Kingdom Valley
w04       | Sunset Heights
w05       | Chaos Island
w06       | Radical Highway
w09       | White Space
w11       | Biolizard
w12       | Metal Overlord
w13       | Mephiles
w14       | Devil Doom

### Stage Type

Stage Type ID | Stage Type
------------- | -----------
a             | Normal Stage
b             | Boss Battle
c             | Challenge
h             | Hard Challenge
m             | Movie (Cutscene)

### White Space
Description                     | Level ID
------------------------------- | -----------
White Space                     | w09a10
White Space (Doom Zone)         | w09a20

### Stages
Stage Name                      | Level ID
------------------------------- | -----------
Space Colony Ark: Act 1         | w01a11
Space Colony Ark: Act 2         | w01a20
Rail Canyon: Act 1              | w02a10
Rail Canyon: Act 2              | w02a20
Kingdom Valley: Act 1           | w03a10
Kingdom Valley: Act 2           | w03a20
Sunset Heights: Act 1           | w04a10
Sunset Heights: Act 2           | w04a20
Chaos Island: Act 1             | w05a10
Chaos Island: Act 2             | w05a20
Radical Highway: Act 1          | w06a10
Radical Highway: Act 2          | w06a20

### Boss Battles
Boss Name               | Level ID
----------------------- | -----------
Biolizard               | w11b10
Biolizard (Hard)        | w11b11
Metal Overlord          | w12b10
Metal Overlord (Hard)   | w12b11
Mephiles                | w13b10
Mephiles (Hard)         | w13b11
Devil Doom              | w14b10

## Oddities
The ID of Space Colony Ark: Act 1 is `w01a11` instead of the expected `w01a10`. There are, however, files referencing this last ID. 