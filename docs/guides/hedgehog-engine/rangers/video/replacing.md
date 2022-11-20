---
description: Video replacement guide for Sonic Frontiers
---
# Replacing Video (USM)
!!!info
 Tools Needed:
 
    - [Scaleform Video Encoder](./Tools/Scaleform Video Encoder.7z)
    - [ffmpeg](https://ffmpeg.org/download.html) + [ff-prompt.bat](https://github.com/nightwolf93/Electron-Starter/blob/master/lib/ffmpeg/ff-prompt.bat) 
    - Your video (Needs to be 30FPS, and needs to be under or the same length as the original video.)
    - get the filename of the .USM you are going to replace
 
   Place ff-prompt.bat in the root folder of your ffmpeg folder, and add a folder with the name "video" to the "bin" folder. Place your video (30FPS) inside.
  
  ![](./assets/explorer_YNB0YXSzBQ.png)
  ![](./assets/explorer_z62yN58eXr.png)
  ![](./assets/explorer_52bwNmXEev.png)
  
   Start ff-prompt.bat. 
  
  ![](./assets/cmd_tlhn82iXWY.png)
  
   do `ffmpeg -i ./video/video.mp4 ./video/video.wav ./video/video%03d.tga`. ffmpeg will now generate the frames as tga files, and the sound as a wav file. The window should look like something like this when done.
  
  ![](./assets/cmd_xVOvFZb6so.png)
  
   Open Scaleform Video Encoder.
  
  ![](./assets/ScaleformVideoEncoder_6kkRMLqDdu.png)
  
   In the "Input Name", select `video001.tga`.
  
  ![](./assets/ScaleformVideoEncoder_iuxJ0cKVkR.png)
  
   Scroll down to other audio and set it to "Mono/Stereo", and then find and choose `video.wav`.
  
  ![](./assets/ScaleformVideoEncoder_Pmjm355WFA.png)
  ![](./assets/ScaleformVideoEncoder_QbFutOYPK5.png)
  
   On the right, set your Bitrate to 40000 kbps, and Framerate to 30 fps.
  
  ![](./assets/ScaleformVideoEncoder_HKxkrkghLC.png)
  
!!! warning ***Enable `Encode audio as HCA codec`. or audio will not work.***
    ![](./assets/ScaleformVideoEncoder_y5NuUWaT72.png)
  
  - Press "Encode" at the bottom right of the window. Scaleform will now encode your video into HCA, and it will be located in the same folder as the tga and wav. It will be named `video001.usm`.
  
  ![](./assets/ScaleformVideoEncoder_Dx5WIBPtvg.png)
  
  ![](./assets/ScaleformVideoEncoder_FsOI1d90ql.png)
  
  ![](./assets/explorer_41K2jhhnNN.png)
  
   Rename video001.usm to whatever the filename of the USM from the game is. For example, `sonicteam_logo.usm`.
  
  ![](./assets/explorer_fljcWoTS9x.png)
  
   Make a copy of sonicteam_logo.usm and rename the copy to `sonicteam_logo_4k.usm`. (You can make a 4K encode, but it's up to you.)
  
  ![](./assets/explorer_AaO8mIKfVv.png)
  ![](./assets/explorer_qujFOJvxG3.png)
  
   Create a mod in HedgeModManager with the path: "/raw/movie/"
  
  ![](./assets/HedgeModManager_QOg11XzOMt.png)
  
  ![](./assets/HedgeModManager_hDQwj1ERLo.png)
  
  ![](./assets/explorer_29g9xoWG0r.png)
  
  ![](./assets/explorer_bmnzkDZQyG.png)
  
   Add both of your USM files to the /movie/ folder. Enable the mod.
  
   ![](./assets/explorer_9keqbUv5EU.png)
   ![](./assets/SonicFrontiers_HOcaxz7O18.png)
   
