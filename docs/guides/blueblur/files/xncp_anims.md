# XNCP Animations
XNCP animations for a specific scene are listed in **AnimationDictionary**, which behaves the same way as the CastDictionary:

![](./assets/xncp_anims/image2.png)

In **AnimationFrameDataList**, it’s possible to control the amount of keyframes that a specific animation has:

![](./assets/xncp_anims/image1.png)

To control the speed of these animations, we have a single field in the scene that controls the frame rate:

![](./assets/xncp_anims/image4.png)

**AnimationKeyFrameDataList** contains the information for all the keyframes in the animation, as well as the casts that belong in that animation.

![](./assets/xncp_anims/image10.png)

In the screenshot above, we’re seeing the data referring to Animation 0 (**Intro_Anim** when following the dictionary). XNCPs usually follow this naming scheme for animations:

- **Intro_Anim** - Animation that plays when the scene appears
- **Usual_Anim** - Normally a looping animation, is used during the scenes visible state
- **Outro_Anim** - Played before the scene disappears
They can obviously store other animations, and those have their own names.

So, in Intro_Anim, we have several **CastAnimationData**. These control what happens to each cast in this animation. Let’s see what happens to Cast 0 (position, which usually is the parent of all casts in a scene and controls their position)...

![](./assets/xncp_anims/image3.png)

Seems like we have flags! It’s a bitfield, and it controls what actually animates in this cast. Here’s the meaning of each bit:
```
0000 0000 - Nothing
0000 0001 - Unknown
0000 0010 - X Position
0000 0100 - Y Position
0000 1000 - Rotation
0001 0000 - X Scale
0010 0000 - Y Scale
0100 0000 - SubImage
1000 0000 - Colour Mask
```

So, with this info, we now know what animates in the position cast: It’s its X Position.
The **CastAnimationDataSubData1List** is what stores the actual animation data. The amount of entries in this list depends on the number of bits signaled in the **Flags** field. The first entry in the list is referring to the first bit signaled from right to left. So by that logic, the list only has one entry.

![](./assets/xncp_anims/image9.png)

And there we go. This entry is what stores the actual **KeyFrames**. Let’s open one up to see how it is.

![](./assets/xncp_anims/image5.png)

Scary right? I don’t understand much of what’s going on here, but here we go. 

**Frame** defines which global frame this keyframe is in. Remember **AnimationFrameDataList**? Yeah, this animation has a total of 10 frames, and is played at 60 FPS. For each frame, you define the global frame that it refers to. So, since this cast controls the position of the entire scene, and this is the intro animation, maybe the other keyframe has the frame field set to 10? We’ll see about that shortly.

**Data** store the data of this keyframe. The meaning of data changes depending on the flags. Data can be:

- A position
- An angle (for rotation)
- A size (for X and Y scale)
- An index (for SubImage)
- A colour (for ColorMask)

According to the flags of this specific cast, these keyframes are supposed to control the X Position, which means that “data” actually represents the X Position of the cast in this frame.

The **Offset** and **Offset2** fields are unknown. They seem to offset the value in the Data field, but I don’t know their actual meanings. I still don’t know how animations loop, and if that’s even defined in the XNCP. I’d assume it’s in some of these fields, but I’m not sure. Maybe the game just keeps playing the animation and the XNCP doesn’t control that?
Anyway let’s look at the second keyframe then:

![](./assets/xncp_anims/image8.png)

As we suspected, the **Frame** field is now set to 10, meaning this is referring to the last frame in the animation. The value in **Data** has increased, so this means that **this cast slides from left to right** in this animation!

Looking at the remaining **CastAnimationData** entries, we can see that none of them animate, since their **Flags** field is set to 0. So we can conclude that **Intro_Anim** makes the **position** cast slide from **left to right**, and since “position” controls the entire scene, every single cast from this scene slides from left to right in this animation!

![](./assets/xncp_anims/image6.png)

Hope I explained XNCP animations well enough. Have fun!

*PS: there’s also AnimationData2List but...*

![](./assets/xncp_anims/image7.png)