---
description: Animation Import and Export guide for Sonic Frontiers
---
# Animation Importing & Exporting
This guide will assume you have at least some understanding of animating in Blender.

!!! info
    This guide uses the following tools:

    - [HedgeArcPack](/tools/hedgehog-engine/common/files/#hedgearcpack){ target="_blank"}
    - [FrontiersAnimDecompress](/tools/hedgehog-engine/rangers/files/anmpxd){ target="_blank"}
    - [Blender](https://www.blender.org/download/){ target="_blank"}

### Setting Up
First, download the required tools and extract them. Open Blender and go to `Edit > Preferences`. Click on `Add-ons`, and then `Install...`. Browse to the FrontiersAnimDecompress folder, and install each of the 4 plugins in this directory, then minimise Blender.

### Extracting the Animation Files
Locate the pac file that contains the animations you want to change. For sonic's animations, look for `raw\character\sonic.pac`. First, make sure you create a copy of the pac file of your choice in a folder somewhere so you don't accidentally replace your game files. Drag and drop the pac file onto HedgeArcPack.exe to extract the file into a folder.

### Conversion
Open the newly created folder and find the animation you want to change. These animation files have the extension `.anm.pxd`. Drag and drop the `.anm.pxd` file onto FrontiersAnimDecompress.exe. This will create a new file with the extension `.anm.pxd.outanim`.

### Importing the Animation
Open Blender again, and go to `File > Import`, then select `Hedgehog Engine (.model)` and browse for your model file.

!!! info
    If you don't know how to get your model, first watch the [Model Import Tutorial](https://www.youtube.com/watch?v=B_-YJ2I1_M4){ target="_blank" }

After importing, select the Armature and go to `File > Import`, and this time select `Hedgehog Engine Compressed (.outanim)`, and browse for your `.outanim` file we created in the previous step. You should now see the animation within Blender!

!!! info
    If you don't know how to edit the animation, please look for a Blender tutorial to learn the basics in order to continue. The animation process is not specific to Sonic Frontiers.
	
### Exporting the Animation
When you have finished making your changes to the animation, go to `File > Export` and select `Hedgehog Engine Compressed (.outanim)`, then browse for somewhere to save your file. You may overwrite the `.outanim` file you imported if you like. You may close Blender now. 

### Finishing Up
Drag and drop the newly exported `.outanim` onto FrontiersAnimDecompress.exe to create a new `.anm.pxd` containing your animation. Rename this file to be exactly the same as the original file you decompressed. If you haven't already, place it back in it's pac folder, and replace the existing file. 

Now drag the pac folder onto HedgeArcPack.exe to repack the file, which you can then use in your mod!