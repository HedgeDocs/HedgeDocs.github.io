---
description: Sonic GLvl setup tutorial for Sonic Unleashed
---

# How to use Sonic GLvl with Sonic Unleashed

!!! note
    This guide covers how to setup Sonic Unleashed Xbox 360 levels in GLvl, but does not cover how to use this tool or how to set it up for PS3 levels. It's recommended that you also read the [Sonic Generations GLvl guide](/guides/hedgehog-engine/blueblur/levels/glvl).

!!! info
    This guide uses the following tools:

    - [Sonic GLvl](/tools/hedgehog-engine/blueblur/levels/){ target="_blank"}
    - [Unleashed Mod Toolbox](/tools/hedgehog-engine/unleashed/files){ target="_blank"}  
    - [Unleashed Object Template](assets/glvl/UnleashedObjectTemplate.zip)
    - Xbox 360 SDK, find this yourself

#### Preparing .ar Files
This example will be editing Windmill Isle Act 1 Day. Open your extracted Unleashed game folder and locate your files. In my case, the files are 
````
#ActD_MykonosAct1.ar.00
#ActD_MykonosAct1.arl
ActD_MykonosAct1.ar.00 
ActD_MykonosAct1.ar.01
ActD_MykonosAct1.arl
````

Once located you will need to copy those files to the #files folder inside your Mod Toolbox directory. now open #SUModToolbox.bat and press 3 and enter to decompress the files, press 1 or 2 depending on the system and press enter.
 
Now copy the files inside #output/DecompressedFiles to a seperate folder. In order for GLvl to read the model you need to make a folder called "Packed" and inside your Unleashed game folder go to "Packed" and copy the level folder to the new "Packed" folder next to your decompressed .ar files.

#### Preparing GLvl
Locate your Xbox 360 SDK's bin/win32 folder and copy xbcompress.exe, xbdecompress.exe, xbdm.dll, msvcp71.dll and msvcr71.dll and paste them into your GLvls "bin" directory.

Open your GLvl folder and go to `/database/LevelDatabase.xml`, you will need to add your entry for the level, in my case it would be:

`<Entry name="ActD_MykonosAct1" geometry="ActD_MykonosAct1"    layout_merge=""    slot="WindmillIsle 1"     game="Unleashed/">`

Afterwards the file should look something like this:
````
<LevelDatabase>
  <Entry name="ghz200"     geometry="ghz200"        layout_merge=""     slot="GreenHillZone"     game="Generations" />
  <Entry name="ghz201"     geometry="ghz200"        layout_merge=""     slot="GreenHillZone"     game="Generations" />
  <Entry name="cte200"     geometry="cte200"        layout_merge=""     slot="CityEscapeZone"    game="Generations" />
  <Entry name="ActD_Beach" geometry="ActD_Beach"    layout_merge=""     slot="JungleJoyride"     game="Unleashed" />
  <Entry name="ActD_Africa" geometry="ActD_Africa"    layout_merge=""     slot="SavanaCitadel"     game="Unleashed" />
  <Entry name="ActD_MykonosAct1" geometry="ActD_MykonosAct1"    layout_merge=""     slot="WindmillIsle 1"     game="Unleashed"/>
</LevelDatabase>
````

Open "Unleashed Object Template.zip" and extract the contents here, Replace files if asked.

Save the file, open GLvl, press Ctrl+O and find your decompressed .ar files. Click "Ok" on the first prompt and click "Yes" on the prompt asking about unpacking terrain.

#### Extracting Textures and adding them to GLvl
Inside Unleashed Mod Toolbox delete the files inside #files and #output.
From your Unleashed game folder copy the various Cmn.ar files for your level and paste them inside the #files of the Unleashed ToolBox.

Open #SUModToolbox.bat and press 4 and enter to decompress the files, press 1 and enter and press 1 or 2 depending on the system and press enter. go to #files and delete the contents of the folder. Inside #output you might notice some files have not been extracted. This is because files other than ar.00 and arl don't extract, however you fix this by simply changing the file extension to ar.00, changing the file name and re-extracting them in the ToolBox.

Copy the contents of each folder in #output/ExtractedFiles into GLvl/cache/your-level/resources, replacing files if asked.