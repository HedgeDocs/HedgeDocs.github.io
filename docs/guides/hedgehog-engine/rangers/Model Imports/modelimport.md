---
description: Model Importing guide for Sonic Frontiers
---
# Model Importing

!!! info
    This guide uses the following tools:

    -  [HedgeArcPack](/tools/hedgehog-engine/common/files/#hedgearcpack){ target="_blank"}
    -[Blender](https://www.blender.org/download/)
    -[ModelConverter.exe](https://hedgedocs.com/tools/general/files/#skythtools)
    -[modelfbx](https://hedgedocs.com/tools/hedgehog-engine/common/models/)
    -[.modelImporter add-on for Blender](https://github.com/Turk645/Hedgehog-Engine-2-Mesh-Blender-Importer)
    -[HedgeNeedle](https://github.com/Radfordhound/HedgeLib/tree/HedgeLib%2B%2B/HedgeTools)

# Extracting Models

### Creating and Extracting the PAC File
Firstly, create a PAC file named after the character and proceed to extract the contents of the archive utilizing the HedgeArcPack tool.

### Converting to FBX and Importing into Blender
Next, convert the `chr_character.model` file into the FBX format using the ModelFBX tool. Please note that certain models may not necessitate conversion into FBX format. 
If you don't need to use the FBX format, use the HedgeNeedle tool, extract the various levels of detail from the `.model` file, and rename `chr_character.0.model` to `chr_character`. 
Subsequently, utilize the model importer add-on to import the model into Blender.

### Rigging and Vertex Count
After the model is imported into Blender, introduce your own model that is intended to be utilized in-game, and proceed to rig it to the original model's skeleton. 
It is crucial to ensure that the vertex count of your model does not surpass the maximum requirements of the model converter, which is approximately 21,000 vertices per object.

### Assigning Weights and Resources
As weights primarily refer to Blender rather than the Hedgehog Engine itself, you should use the following resources as they may be useful in learning how to manage weights:

[Weight Transfer Guide](https://youtu.be/bR_Vke__voU)
[Weight Painting Guide](https://youtu.be/4fICQmBEt4Y)

### Rigging and Exporting the Model
Once the character model has been rigged, select the model and the original skeleton, and proceed to export them as an FBX file. In case the original model is not deleted, choose 'selected objects only' in the export settings. 
Although the other export settings are generally insignificant, it may be necessary to modify the scale to 0.01.

### Converting to .model and Creating PAC File
Utilizing the `ModelConverter` tool, drag the FBX file onto ModelConveter.exe to turn it into a .model file.
Subsequently, place the new .model file into the previously extracted PAC folder. 
To generate a new PAC file, drop the folder onto `HedgeArcPack`. The PAC file may then be used in your mod to observe the changes made.

### Materials and Textures
For assistance with preparing materials and texture for Sonic Frontiers, refer to the [Advanced Material Editing Tutorial](https://hedgedocs.com/guides/hedgehog-engine/rangers/materials/advanced-mats/).

