---
description: Troubleshooting guide for Sonic Generations level imports
---
# Troubleshooting

## Common Issues

### Black Textures

Textures must have power of two resolutions. For example, 512x512, 1024x1024, 2048x4096, etc. An arbitrary resolution like 600x600 is not supported by the game when using compressed textures.

### Rainbow Flashing Textures

The game shows a rainbow flashing texture if the texture assigned to a material is missing. Ensure you included the texture in the AR and didn't make a typo in the material.

### Randomly Switching Textures

The material might not have any textures assigned at all. You need to at least assign one diffuse texture, otherwise the game is going to use the texture of whatever was rendered last.

### Missing Terrain Models

* `Terrain.prm.xml` file might require higher memory sizes. Look for the `g_TerrainModelLimitSizeDefault` and `g_TerrainModelLimitSizeWin32` parameters, and increase them. If your stage requires more memory than what is defined in this file, some of your models might not render.
* There is a limit of 8192 instances in the game. If you are trying to render more instances, the game is going to hit this limit and stop rendering.
* Material files might be missing. There is a chance it might not crash and display nothing instead.

### Red Materials

The game fallbacks to displaying a red emissive material if the shader assigned to a material does not exist. If you want to see every available shader in the game, unpack `shader_r_add.ar.00` located inside `bb3.cpk`, and look for files with `.shader-list` extension.

### Low Quality or Missing GI Textures

`Terrain.prm.xml` file might require higher memory sizes. Look for the `g_GITextureLimitSizeDefault` and `g_GITextureLimitSizeWin32` parameters, and increase them.

### Missing Direct Light

If you add a new direct light with a different name, you need to edit `Terrain.stg.xml` to make the stage use it. For example:

```xml
<Light>
  <DataName>MyDirectLight</DataName>
</Light>
```

### Missing Sky Model

If you add a new sky model with a different name, you need to edit `Terrain.stg.xml` to make the stage use it. For example:

```xml
<Sky>
  <Model>MySkyModel</Model>
</Sky>
```

Ensure that the materials of the sky model also use sky shaders such as `Sky_d`.

### Enemies From Other Stages Not Appearing

Certain enemies are loaded manually in stages to save memory. If an enemy does not appear in your stage, you can fix it by editing `EnemyArchiveTree.xml` inside `#Application.ar.00`. In this example, `ghz_cmn` entry was modified to include data from `EnemyEFighter`, which allows egg fighters to be used in both `ghz100` and `ghz200`:

```xml
<DefAppend>
  <Name>ghz_cmn</Name>
  <Archive>EnemyCommon</Archive>
  <Archive>EnemyBeeton</Archive>
  <Archive>EnemyBatabata</Archive>
  <Archive>EnemyGanigani</Archive>
  <Archive>EnemyMotora</Archive>
  <Archive>EnemyEFighter</Archive>
</DefAppend>
```

## Common Crash Reasons

### Missing Material Files

Unlike later games, missing materials can cause a crash in Sonic Generations and Sonic Unleashed.

### Periods in File Names

Having periods in your file names can confuse the game and cause crashes. For example, having a material named `Material.000.material` would make the game think the file has a `.000.material` extension, and not recognize it as a material file.

### Instance Names Starting with "ins"

Instances starting with `ins` are treated differently, and require specialized material shaders. Using any other shader causes a crash. Ensure that none of the instances in your stage start with this word.

### Missing "gi-texture.gi-texture-group-info" File

Run [GI Atlas Converter](/tools/hedgehog-engine/blueblur/levels) on Pre-Render mode to have this file created automatically.

### Missing "light-list.light-list" File

Copy paste `.light` and `.light-list` files from another stage, or add a direct light to your level in the 3D software you use. Latest [Hedgehog Converter](/tools/hedgehog-engine/blueblur/levels) can import direct lights, so ensure your tools are up to date. Use [HedgeGI](/tools/hedgehog-engine/common/lighting) for advanced light editing.

### Mismatching PFD/PFI Files

PFD files are loaded through PFI files. If the `Stage.pfi`/`Stage-Add.pfi` files don't match with the `Stage.pfd`/`Stage-Add.pfd` files in the stage, this causes a crash. Unpack the PFD files, and repack them back with [HedgeArcPack](/tools/hedgehog-engine/common/files) using `-T=pfd` command-line option to generate matching PFI files.

### Unloaded Sonic Animations

The game doesn't load certain Sonic animations to save memory if the gimmick in question is never used. For example, diving animations stored in `SonicDiving.ar.00` are only loaded in Chemical Plant, Speed Highway and Planet Wisp. If diving is used in any other stage, the game is going to crash due to unloaded animations. This behavior can be configured by editing `ArchiveTree.xml` inside `#Application.ar.00`. In this example, `SonicDiving` entry was edited to load in the `ghz200` stage slot:

```xml
<Node>
  <Name>SonicDiving</Name>
  <Archive>SonicDiving</Archive>
  <Order>0</Order>
  <DefAppend>SonicDiving</DefAppend>
  <Node>
    <Name>bne</Name>
    <Archive>bne</Archive>
    <Order>0</Order>
  </Node>
  <Node>
    <Name>cpz200</Name>
    <Archive>cpz200</Archive>
    <Order>0</Order>
  </Node>
  <Node>
    <Name>pla200</Name>
    <Archive>pla200</Archive>
    <Order>0</Order>
  </Node>
  <Node>
    <Name>sph200</Name>
    <Archive>sph200</Archive>
    <Order>0</Order>
  </Node>
  <Node>
    <Name>ghz200</Name>
    <Archive>ghz200</Archive>
    <Order>0</Order>
  </Node>  
</Node>
```

### Lightfield File Too Large
Your game might crash randomly when booting your level if the level's lightfield (.lft) file is too large. Try reducing the sample count or the minimum cell radius in HedgeGI to reduce the lightfield's file size.
