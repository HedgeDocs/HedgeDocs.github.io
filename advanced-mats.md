---
description: Advanced Material Editing guide for Sonic Frontiers
---
# Advanced Material Editing

This guide will assume you have at least some understanding of how PBR texturing works.

!!! info
    This guide uses the following tools:

    - [HedgeEdit](/tools/hedgehog-engine/common/levels){ target="_blank"}
    - [Nvidia Texture Tools Exporter](https://developer.nvidia.com/nvidia-texture-tools-exporter){ target="_blank"}

!!! note
    There is a [Substance Painter Export Template](./assets/advanced-mats/Frontiers_PRM1.spexp) if you use Substance to export the PRM map so you don't have to construct it.

## Preparation
This guide expects you to have a model that loads ingame and 5 texture maps for your model:

- An `Ambient Occlusion` Map *(if you do not want this make a solid `1` texture)*
- A `Metallic` Map *(if you do not want this make a solid `0` texture)*
- A `f0 Specular` Map *(if you do not want this make a solid `0.25` texture)*
- A `Roughness` Map *(if you do not want this make a solid `0.8` texture)*
- An `OpenGL, Y+/Y up, Green+/Green up` Map *(if you do not want this make a solid `0.5, 0.5, 1` texture)* (./assets/advanced-mats/normalmap.png)

![](./assets/advanced-mats/01-textures.png)

## Making a PRM map
Hedgehog Engine 2 games use some variation of the PRM texture setup, Frontiers specifically uses the `RGBA` setup, `Specular, Smoothness, Metallic, Ambient Occlusion`. So we need to construct a map using our textures, as long as the textures go into the corresponding channels.

### Photoshop
Add your textures besides the `Normal Map` textures as layers in your photoshop document.

![](./assets/advanced-mats/02-ps-layers.png)

Then open the effects panel and have the **corresponding channel as stated above be the only channel checked**

![](./assets/advanced-mats/02-ps-blending.png)

Lastly select your `Roughness` layer and invert it (Ctrl+I). Smoothness in PBR is just inverted roughness.

![](./assets/advanced-mats/02-ps-finalprm.png)

This will be your PRM map. Save it to your work directory.

## Converting PNG to DDS correctly
Open `Nvidia Texture Tools Exporter` and load your texture you want to convert and make sure `BC7` is selected for the `Color` maps, for your `normal` map make sure `BC5u` is selected *(The normal map will show as yellow in the icon, ignore it)*. Then Save As... `.dds`

![](./assets/advanced-mats/03-nvtt.png)

Example

![](./assets/advanced-mats/03-finaldds.png)


!!! info
    When saving the PRM texture make sure `Premultiplied Alpha Blending` is `unchecked`

    ![](./assets/advanced-mats/03-pmab.png)

## Editing the Hedgehog Engine 2 materials

your model converter will have made .material files, you may even be using them. **Remember their names and delete them.** It is generally better to modify pre existing materials as it will look better because they include all the shader parameters.

*A good base to modify off of is Sonic's cloth, since it is a common prm shader.*

Duplicate and rename the material file you're building off of to the material name the model converter outputted.

![](./assets/advanced-mats/04-mats.png)

Open HedgeEdit, then navigate to `Edit > Material Editor`

![](./assets/advanced-mats/04-he.png)

Once the pop up opened use File > Open to open one of the .material file you made. Then hit the ... next to `Textures (Collection)`

![](./assets/advanced-mats/04-tex.png)

Each of these members are textures the material feeds the shader. What's important is there's 3 and they should correlate to the textures we made earlier.

Select each member and set `TextureName` to the filename of the `.dds` we made earlier **without the file extension**

![](./assets/advanced-mats/04-texedit.png)


!!! note
    If you chose to edit a nondefault material (IE Sonics fur) you may need to go to the `Parameters` section to get the members for the parameters.

    Usually texture suffixes like `fal` go to falloffs, `flw` flow maps, `fur` noise layer overlayed on the diffuse for the fur.

Save the material then you're done.
