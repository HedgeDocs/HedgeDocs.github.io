---
description: Cyloop color replacement guide for Sonic Frontiers
---
# Replacing Cyloop Color

!!! info
    Requirements:
    - Playercommon.pac
    - player_common.rfl
    - Hedgearcpack
    - [010 editor](https://www.sweetscape.com/010editor/)
    - [RFL Templates](https://github.com/blueskythlikesclouds/RflTemplates)
    - A brain?

1. First you're going to need to drag playercommon.pac onto hedgearcpack.exe to get a playercommon folder.

2. Find the player_common.rfl file and open it in 010 editor.

3. From the RFL templates, use the PlayerParameters.bt on 010 editor.

- This can be done by going to templates at the top and pressing "Open Template" and selecting the PlayerParameters.bt

![](./assets/1.png)

- Afterwards, you can press "Run Template" and it should bring up a new window in 010 editor.
- ![](./assets/2.png)
- If a new window doesn't appear, restart 010 editor or reload player_common.rfl into the editor
- Run the PlayerParameters.bt and you should see new information in the Variables tab in 010 editor
- Split your editor so that you can see your hex values, the inspector tab, and the variables tab all at once.
- ![](./assets/3.png)
- Now you're ready to hex edit!

4. Open the struct PlayerParameters data in variables, then go into struct CommonPackage common, and find struct PlayerParamCyloop cyloop

![](./assets/4.png)

5. Open thecyloop struct and find CyloopLocusParameter locus, this holds the colors for the cyloop across multiple variables
  i. Each color will look like this (there are 3 of these)

    ![](./assets/5.png)

    Or these (there are 2 of these)

    ![](./assets/6.png)

  ii. When you open these variables, you will see 4 values, float r, g, b, and a
  iii. These values don't make sense so keep up with this:
    1. Float r is alpha
    2. Float g is red
    3. Float b is green
    4. Float a is blue
6. Choose a color with its rgb decimal code (ex: Lawn Green is (124,252,0))

- Take each of your values and divide them by 255
  - Ex: 124/255 = .489 (red)

    252/255 = .988 (green)

    0/255 = 0 (blue)

- Replace the float values with your new values (you dont need to touch float r)
  - Ex: ![](./assets/7.png)
  - Do this for all of the color struct variables from earlier
  - This will replace all of the different parts of the cyloop
  - You can mix colors for different results, like making some of the cyloop variables red, and some white.

7. Once you're happy with your color choices, go to file and save your player_common.rfl

8. Repack your playercommon folder into a .pac

9. Run around with a new cyloop color :)

![](./assets/8.png)
