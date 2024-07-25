---
description: Sega NN MOTION Data Chunk Format Specification
---

# MOTION

## NNF_MOTIONTYPE

Types and flags for a [NNS_MOTION](#nns_motion) struct.

```c
enum NNF_MOTIONTYPE : uint32_t
{
  // -- Masks --

  // Apply this mask to get the Motion Type.
  NND_MOTIONTYPE_CATEGORY_MASK = 31,

  // Apply this mask to get the Repeat Type.
  NND_MOTIONTYPE_REPEAT_MASK = 0x1F0040U,


  // -- Motion Types --

  NND_MOTIONTYPE_NODE = 1,
  NND_MOTIONTYPE_CAMERA = 2,
  NND_MOTIONTYPE_LIGHT = 4,
  NND_MOTIONTYPE_MORPH = 8,
  NND_MOTIONTYPE_MATERIAL = 16,


  // -- Repeat Types --

  // The motion is paused, until it is triggered by the game.
  NND_MOTIONTYPE_TRIGGER = 64,

  // The motion plays one time, and never again.
  NND_MOTIONTYPE_NOREPEAT = 0x10000U,

  // TODO: Find out the difference between this and NOREPEAT ?
  NND_MOTIONTYPE_CONSTREPEAT = 0x20000U,

  // The motion plays, then it repeats itself from the beginning, forever.
  NND_MOTIONTYPE_REPEAT = 0x40000U,

  // The motion plays, then it repeats itself in reverse, then forwards again, forever.
  NND_MOTIONTYPE_MIRROR = 0x80000U,

  // Unknown. This type does not seem to be supported by any games?
  NND_MOTIONTYPE_OFFSET = 0x100000U,


  // -- Flags --

  // Specifies that this motion uses version 2 of the motion format.
  // NOTE: This is the only version which we've seen be used so far.
  NND_MOTIONTYPE_VERSION2 = 0x10000000U
};
```

## NNS_MOTION

!!! important
    This is the root struct for all MOTION data chunks.

A motion is an animation of something. It's made up of one or more submotions,
which represent the actual animation data.

```c
struct NNS_MOTION
{
  // Types and flags.
  NNF_MOTIONTYPE fType;

  // The frame this motion starts playing at.
  float StartFrame;

  // The frame this motion stops playing at.
  float EndFrame;

  // The number of elements in the [pSubmotion] array.
  uint32_t nSubmotion;

  // An array of NNS_SUBMOTION structs.
  NNS_SUBMOTION* pSubmotion;

  // How many frames of the motion are shown each second.
  // NOTE: This field is only present if NND_MOTIONTYPE_VERSION2
  // is set in [fType].
  float FrameRate;

  // Reserved value that was never used; always 0.
  // NOTE: This field is only present if NND_MOTIONTYPE_VERSION2
  // is set in [fType].
  uint32_t Reserved0;

  // Reserved value that was never used; always 0.
  // NOTE: This field is only present if NND_MOTIONTYPE_VERSION2
  // is set in [fType].
  uint32_t Reserved1;
};

// Macros used by Text-Form files:
#define MOTION(fType, StartFrame, EndFrame, nSubmotion, pSubmotion) \
  { fType, StartFrame, EndFrame, nSubmotion, pSubmotion, 30.0f, 0, 0 }

#define MOT_TYPE(fType) (fType)
#define MOT_START_KEYFRAME(StartFrame) (StartFrame)
#define MOT_END_KEYFRAME(EndFrame) (EndFrame)
#define MOT_N_SUBMOT(nSubmotion) (nSubmotion)
#define MOT_SUBMOTLIST(pSubmotion) (pSubmotion)

#define MOTION2(fType, StartFrame, EndFrame, nSubmotion, pSubmotion, FrameRate, Reserved0, Reserved1) \
  { fType, StartFrame, EndFrame, nSubmotion, pSubmotion, FrameRate, Reserved0, Reserved1 }

// NOTE: MOT_TYPE, MOT_NSUBMOT, and MOT_SUBMOTLIST are still used by V2.

#define MOT_START_FRAME(StartFrame) (StartFrame) // Used instead of MOT_START_KEYFRAME for V2
#define MOT_END_FRAME(EndFrame) (EndFrame) // Used instead of MOT_END_KEYFRAME for V2
#define MOT_FRAMERATE(FrameRate) (FrameRate)
#define MOT_RSV0(Reserved0) (Reserved0)
#define MOT_RSV1(Reserved1) (Reserved1)
```

## NNF_SUBMOTION_TYPE

```c
enum NNF_SUBMOTION_TYPE : uint32_t
{
  // -- Frame Types --

  // The frame index is stored as a float.
  NND_SMOTTYPE_FRAME_FLOAT = 1,
  // The frame index is stored as an int16_t.
  NND_SMOTTYPE_FRAME_SINT16 = 2,
  // Apply this mask to get the Frame Type.
  NND_SMOTTYPE_FRAME_MASK = 3,


  // -- Angle Types --

  // This value represents an angle as a float which represents
  // the rotation in radians. Use NNM_RADtoDEG from the
  // "Common Definitions" page to translate this value into a
  // float which represents the rotation in degrees.
  //
  // NOTE: This value is never used, to our knowledge, in any games.
  NND_SMOTTYPE_ANGLE_RADIAN = 4,

  // This value represents an angle as a fixed-point int32_t.
  // Use NNM_A32toDEG() from the "Common Definitions" page to
  // translate this value into a float which represents the
  // rotation in degrees.
  NND_SMOTTYPE_ANGLE_ANGLE32 = 8,

  // This value represents an angle as a fixed-point int16_t.
  // Use NNM_A16toDEG() from the "Common Definitions" page to
  // translate this value into a float which represents the
  // rotation in degrees.
  NND_SMOTTYPE_ANGLE_ANGLE16 = 0x10,

  // Apply this mask to get the Angle Type.
  NND_SMOTTYPE_ANGLE_MASK = 0x1C,


  // -- Value Types --

  // Apply this mask to get the Value Type.
  NND_SMOTTYPE_VALUETYPE_MASK = 0xFFFFFF00U,


  // -- Translation Value Types --
  // These value types can be applied to a node, a light, or a camera.

  NND_SMOTTYPE_TRANSLATION_X = 0x100U,
  NND_SMOTTYPE_TRANSLATION_Y = 0x200U,
  NND_SMOTTYPE_TRANSLATION_Z = 0x400U,

  NND_SMOTTYPE_TRANSLATION_XYZ = (
    NND_SMOTTYPE_TRANSLATION_X |
    NND_SMOTTYPE_TRANSLATION_Y |
    NND_SMOTTYPE_TRANSLATION_Z
  ),

  // Apply this mask to get the Translation Value Type.
  NND_SMOTTYPE_TRANSLATION_MASK = 0x700U,


  // -- Rotation Value Types --
  // These value types can be applied to a node, a light, or a camera.

  // The value affects the euler angles rotation along the X axis.
  NND_SMOTTYPE_ROTATION_X = 0x800U,

  // The value affects the euler angles rotation along the Y axis.
  NND_SMOTTYPE_ROTATION_Y = 0x1000U,

  // The value affects the euler angles rotation along the Z axis.
  NND_SMOTTYPE_ROTATION_Z = 0x2000U,

  // The value affects the euler angles rotation along all axes.
  NND_SMOTTYPE_ROTATION_XYZ = (
    NND_SMOTTYPE_ROTATION_X |
    NND_SMOTTYPE_ROTATION_Y |
    NND_SMOTTYPE_ROTATION_Z
  ),

  // The value affects the quaternion rotation.
  NND_SMOTTYPE_QUATERNION = 0x4000U,

  // Apply this mask to get the Rotation Value Type.
  NND_SMOTTYPE_ROTATION_MASK = 0x7800U,


  // -- Scaling Value Types --
  // These value types can only be applied to a node.

  NND_SMOTTYPE_SCALING_X = 0x8000U,
  NND_SMOTTYPE_SCALING_Y = 0x10000U,
  NND_SMOTTYPE_SCALING_Z = 0x20000U,

  NND_SMOTTYPE_SCALING_XYZ = (
    NND_SMOTTYPE_SCALING_X |
    NND_SMOTTYPE_SCALING_Y |
    NND_SMOTTYPE_SCALING_Z
  ),

  // Apply this mask to get the Scaling Value Type.
  NND_SMOTTYPE_SCALING_MASK = 0x38000U,


  // -- Other Node Value Types --
  // These value types can only be applied to a node.

  // The value is uint32_t user data; its purpose depends on the game.
  NND_SMOTTYPE_USER_UINT32 = 0x40000U,

  // The value is float user data; its purpose depends on the game.
  NND_SMOTTYPE_USER_FLOAT = 0x80000U,

  // Apply this mask to get the User Data Value Type.
  NND_SMOTTYPE_USER_MASK = 0xC0000U,

  // The value affects whether the node is hidden or not (it acts like a boolean).
  NND_SMOTTYPE_NODEHIDE = 0x100000U,


  // -- Target Value Types --
  // These value types can be applied to a light, or a camera.

  NND_SMOTTYPE_TARGET_X = 0x40000U,
  NND_SMOTTYPE_TARGET_Y = 0x80000U,
  NND_SMOTTYPE_TARGET_Z = 0x100000U,

  NND_SMOTTYPE_TARGET_XYZ = (NND_SMOTTYPE_TARGET_X |
      NND_SMOTTYPE_TARGET_Y | NND_SMOTTYPE_TARGET_Z),

  // Apply this mask to get the Target Value Type.
  NND_SMOTTYPE_TARGET_MASK = 0x1C0000U,


  // -- Camera Value Types --
  // These value types can only be applied to a camera.

  NND_SMOTTYPE_ROLL = 0x200000U,
  NND_SMOTTYPE_UPTARGET_X = 0x400000U,
  NND_SMOTTYPE_UPTARGET_Y = 0x800000U,
  NND_SMOTTYPE_UPTARGET_Z = 0x1000000U,

  NND_SMOTTYPE_UPTARGET_XYZ = (NND_SMOTTYPE_UPTARGET_X |
      NND_SMOTTYPE_UPTARGET_Y | NND_SMOTTYPE_UPTARGET_Z),

  // Apply this mask to get the Up Target Value Type.
  NND_SMOTTYPE_UPTARGET_MASK = 0x1C00000U,

  NND_SMOTTYPE_UPVECTOR_X = 0x2000000U,
  NND_SMOTTYPE_UPVECTOR_Y = 0x4000000U,
  NND_SMOTTYPE_UPVECTOR_Z = 0x8000000U,

  NND_SMOTTYPE_UPVECTOR_XYZ = (NND_SMOTTYPE_UPVECTOR_X |
      NND_SMOTTYPE_UPVECTOR_Y | NND_SMOTTYPE_UPVECTOR_Z),

  // Apply this mask to get the Up Vector Value Type.
  NND_SMOTTYPE_UPVECTOR_MASK = 0xE000000U,

  NND_SMOTTYPE_FOVY = 0x10000000U,
  NND_SMOTTYPE_ZNEAR = 0x20000000U,
  NND_SMOTTYPE_ZFAR = 0x40000000U,
  NND_SMOTTYPE_ASPECT = 0x80000000U,

  // -- Light Value Types --
  // These values can only be applied to a light.

  NND_SMOTTYPE_LIGHT_COLOR_R = 0x200000U,
  NND_SMOTTYPE_LIGHT_COLOR_G = 0x400000U,
  NND_SMOTTYPE_LIGHT_COLOR_B = 0x800000U,

  NND_SMOTTYPE_LIGHT_COLOR_RGB = (NND_SMOTTYPE_LIGHT_COLOR_R |
      NND_SMOTTYPE_LIGHT_COLOR_G | NND_SMOTTYPE_LIGHT_COLOR_B),

  // Apply this mask to get the Light Color Value Type.
  NND_SMOTTYPE_LIGHT_COLOR_MASK = 0xE00000U,

  NND_SMOTTYPE_LIGHT_ALPHA = 0x1000000U,
  NND_SMOTTYPE_LIGHT_INTENSITY = 0x2000000U,

  NND_SMOTTYPE_FALLOFF_START = 0x4000000U,
  NND_SMOTTYPE_FALLOFF_END = 0x8000000U,

  NND_SMOTTYPE_INNER_ANGLE = 0x10000000U,
  NND_SMOTTYPE_OUTER_ANGLE = 0x20000000U,
  NND_SMOTTYPE_INNER_RANGE = 0x40000000U,
  NND_SMOTTYPE_OUTER_RANGE = 0x80000000U,

  // -- Morph types --
  // These values can only be applied to a morph.

  NND_SMOTTYPE_MORPH_WEIGHT = 0x1000000U,


  // -- Material types --
  // These values can only be applied to a material.

  // TODO
  NND_SMOTTYPE_HIDE = 0x100U,

  NND_SMOTTYPE_DIFFUSE_R = 0x200U,
  NND_SMOTTYPE_DIFFUSE_G = 0x400U,
  NND_SMOTTYPE_DIFFUSE_B = 0x800U,

  NND_SMOTTYPE_DIFFUSE_RGB = (NND_SMOTTYPE_DIFFUSE_R |
      NND_SMOTTYPE_DIFFUSE_G | NND_SMOTTYPE_DIFFUSE_B),

  // Apply this mask to get the Diffuse Value Type.
  NND_SMOTTYPE_DIFFUSE_MASK = 0xE00U,

  NND_SMOTTYPE_ALPHA = 0x1000U,

  NND_SMOTTYPE_SPECULAR_R = 0x2000U,
  NND_SMOTTYPE_SPECULAR_G = 0x4000U,
  NND_SMOTTYPE_SPECULAR_B = 0x8000U,

  NND_SMOTTYPE_SPECULAR_RGB = (NND_SMOTTYPE_SPECULAR_R |
      NND_SMOTTYPE_SPECULAR_G | NND_SMOTTYPE_SPECULAR_B),

  // Apply this mask to get the Specular Value Type.
  NND_SMOTTYPE_SPECULAR_MASK = 0xE000U,

  NND_SMOTTYPE_SPECULAR_LEVEL = 0x10000U,
  NND_SMOTTYPE_SPECULAR_GLOSS = 0x20000U,

  NND_SMOTTYPE_AMBIENT_R = 0x40000U,
  NND_SMOTTYPE_AMBIENT_G = 0x80000U,
  NND_SMOTTYPE_AMBIENT_B = 0x100000U,

  NND_SMOTTYPE_AMBIENT_RGB = (NND_SMOTTYPE_AMBIENT_R |
      NND_SMOTTYPE_AMBIENT_G | NND_SMOTTYPE_AMBIENT_B),

  // Apply this mask to get the Ambient Value Type.
  NND_SMOTTYPE_AMBIENT_MASK = 0x1C0000U,

  NND_SMOTTYPE_TEXTURE_INDEX = 0x200000U,
  NND_SMOTTYPE_TEXTURE_BLEND = 0x400000U,

  NND_SMOTTYPE_OFFSET_U = 0x800000U,
  NND_SMOTTYPE_OFFSET_V = 0x1000000U,
  NND_SMOTTYPE_OFFSET_UV = (NND_SMOTTYPE_OFFSET_U | NND_SMOTTYPE_OFFSET_V),

  // Apply this mask to get the Offset Value Type.
  NND_SMOTTYPE_OFFSET_MASK = 0x1800000U,

  // Apply this mask to get the Texture Value Type.
  NND_SMOTTYPE_TEXTURE_MASK = 0x1E00000U,

  // TODO
  NND_SMOTTYPE_MATCLBK_USER = 0x2000000U
};
```

## NNF_SMOTIPTYPE

```c
enum NNF_SMOTIPTYPE : uint32_t
{
  // -- Interpolation type --

  NND_SMOTIPTYPE_SPLINE = 1,
  NND_SMOTIPTYPE_LINEAR = 2,
  NND_SMOTIPTYPE_CONSTANT = 4,
  NND_SMOTIPTYPE_BEZIER = 16,
  NND_SMOTIPTYPE_SI_SPLINE = 32,
  NND_SMOTIPTYPE_TRIGGER = 64,
  NND_SMOTIPTYPE_QUAT_LERP = 512,
  NND_SMOTIPTYPE_QUAT_SLERP = 1024,
  NND_SMOTIPTYPE_QUAT_SQUAD = 3072,

  NND_SMOTIPTYPE_IP_MASK = 3703,


  // -- Repeat type --

  NND_SMOTIPTYPE_NOREPEAT = 65536U,
  NND_SMOTIPTYPE_CONSTREPEAT = 131072U,
  NND_SMOTIPTYPE_REPEAT = 262144U,
  NND_SMOTIPTYPE_MIRROR = 524288U,
  NND_SMOTIPTYPE_OFFSET = 1048576U,

  NND_SMOTIPTYPE_REPEAT_MASK = 2031616U,
};
```

## NNS_SUBMOTION

A submotion represents actual animation data, for some aspect of something (e.g. the X rotation of a node).

```c
struct NNS_SUBMOTION
{
  // Types and flags.
  NNF_SUBMOTION_TYPE fType;

  // Types and flags related to how this submotion is interpolated.
  NNF_SMOTIPTYPE fIPType;

  union
  {
    // The index of the thing (node, material, etc.) being animated.
    int32_t Id;

    // Sub-indices to something. I'm not sure exactly how this works
    // or how the game decides whether to use these vs. [Id] directly?
    struct
    {
      int16_t Id0;
      int16_t Id1;
    };
  };

  // The frame of the motion that this submotion starts playing at.
  float StartFrame;

  // The frame of the motion that this submotion stops playing at.
  float EndFrame;

  // The first frame that has a keyFrame assigned to it within this submotion.
  float StartKeyFrame;

  // The last frame that has a keyFrame assigned to it within this submotion.
  float EndKeyFrame;

  // The number of keyFrames in the [pKeyList] array.
  int32_t nKeyFrame;

  // The size of each individual keyFrame within the [pKeyList] array. */
  int32_t KeySize;

  // An array of keyFrames. The type of each individual
  // keyFrame varies based on the value of [fType].
  // Refer to the "Motion Keys" section below.
  void* pKeyList;
};

// Macros used by Text-Form files:
#define SUBMOT(fType, fIPType, Id, StartFrame, EndFrame, StartKeyFrame, EndKeyFrame, nKeyFrame, KeySize, pKeyList) \
  { fType, fIPType, Id, StartFrame, EndFrame, StartKeyFrame, EndKeyFrame, nKeyFrame, KeySize, pKeyList }

#define SMOT_TYPE(fType) (fType)
#define SMOT_IPTYPE(fIPType) (fIPType)
#define SMOT_ID(Id) (Id)

#ifdef IS_PLATFORM_BIG_ENDIAN // Replace this with your own check
  #define SMOT_SUBID0_SUBID1(Id0, Id1) \
    (((Id0) << 16) | (Id1))
#else
  #define SMOT_SUBID0_SUBID1(Id0, Id1) \
    (((Id1) << 16) | (Id0))
#endif

#define SMOT_STARTFRAME(StartFrame) (StartFrame)
#define SMOT_ENDFRAME(EndFrame) (EndFrame)
#define SMOT_STARTKEY(StartKeyFrame) (StartKeyFrame)
#define SMOT_ENDKEY(EndKeyFrame) (EndKeyFrame)
#define SMOT_N_KEYFRAME(nKeyFrame) (nKeyFrame)
#define SMOT_KEYSIZE(KeySize) (KeySize)
#define SMOT_KEYLIST(pKeyList) (pKeyList)
```

### Motion Keys

The `pKeyList` field of the submotion points to an array of keyFrames.

Each keyFrame is represented with a "motion key", which is simply a
struct that represents the transformation that should be made by
this specific keyFrame.

The type of the motion key struct that is used depends on the values
of both the `fType`, and the `fIPType` fields in the submotion.

As such, there are very many types of motion key structs.

Not every game which uses Sega NN actually supports all of these types.

Futher, not every possible combination of the `fType` and `fIPType`
fields even has a corresponding motion key struct for it; though most do.

The combinations that do not have a corresponding motion key struct for
them are not supported by any existing NN games at the time of writing,
though they theoretically could be supported in future titles.

What follows, is a list of every known supported motion key struct:

```c
typedef struct
{
  NNS_VECTOR2D In;
  NNS_VECTOR2D Out;
}
NNS_MOTION_BEZIER_HANDLE;

typedef struct
{
  float In;
  float Out;
}
NNS_MOTION_SI_SPLINE_HANDLE;

typedef struct
{
  float Frame;
  float Value;
}
NNS_MOTION_KEY_FLOAT,
NNS_MOTION_KEY_TRANSLATION_X,
NNS_MOTION_KEY_TRANSLATION_Y,
NNS_MOTION_KEY_TRANSLATION_Z,
NNS_MOTION_KEY_SCALING_X,
NNS_MOTION_KEY_SCALING_Y,
NNS_MOTION_KEY_SCALING_Z,
NNS_MOTION_KEY_USER_FLOAT,
NNS_MOTION_KEY_MORPH_WEIGHT,
NNS_MOTION_KEY_TARGET_X,
NNS_MOTION_KEY_TARGET_Y,
NNS_MOTION_KEY_TARGET_Z,
NNS_MOTION_KEY_UPTARGET_X,
NNS_MOTION_KEY_UPTARGET_Y,
NNS_MOTION_KEY_UPTARGET_Z,
NNS_MOTION_KEY_UPVECTOR_X,
NNS_MOTION_KEY_UPVECTOR_Y,
NNS_MOTION_KEY_UPVECTOR_Z,
NNS_MOTION_KEY_ZNEAR,
NNS_MOTION_KEY_ZFAR,
NNS_MOTION_KEY_ASPECT,
NNS_MOTION_KEY_DIFFUSE_R,
NNS_MOTION_KEY_DIFFUSE_G,
NNS_MOTION_KEY_DIFFUSE_B,
NNS_MOTION_KEY_ALPHA,
NNS_MOTION_KEY_SPECULAR_R,
NNS_MOTION_KEY_SPECULAR_G,
NNS_MOTION_KEY_SPECULAR_B,
NNS_MOTION_KEY_SPECULAR_LEVEL,
NNS_MOTION_KEY_SPECULAR_GLOSS,
NNS_MOTION_KEY_AMBIENT_R,
NNS_MOTION_KEY_AMBIENT_G,
NNS_MOTION_KEY_AMBIENT_B,
NNS_MOTION_KEY_TEXTURE_BLEND,
NNS_MOTION_KEY_OFFSET_U,
NNS_MOTION_KEY_OFFSET_V,
NNS_MOTION_KEY_LIGHT_COLOR_R,
NNS_MOTION_KEY_LIGHT_COLOR_G,
NNS_MOTION_KEY_LIGHT_COLOR_B,
NNS_MOTION_KEY_LIGHT_INTENSITY,
NNS_MOTION_KEY_FALLOFF_START,
NNS_MOTION_KEY_FALLOFF_END,
NNS_MOTION_KEY_INNER_RANGE,
NNS_MOTION_KEY_OUTER_RANGE;

typedef struct
{
  float Frame;
  float Value;
  NNS_MOTION_BEZIER_HANDLE Bhandle;
}
NNS_MOTION_KEY_FLOAT_BEZIER,
NNS_MOTION_KEY_TRANSLATION_X_BEZIER,
NNS_MOTION_KEY_TRANSLATION_Y_BEZIER,
NNS_MOTION_KEY_TRANSLATION_Z_BEZIER,
NNS_MOTION_KEY_SCALING_X_BEZIER,
NNS_MOTION_KEY_SCALING_Y_BEZIER,
NNS_MOTION_KEY_SCALING_Z_BEZIER,
NNS_MOTION_KEY_USER_FLOAT_BEZIER,
NNS_MOTION_KEY_MORPH_WEIGHT_BEZIER,
NNS_MOTION_KEY_TARGET_X_BEZIER,
NNS_MOTION_KEY_TARGET_Y_BEZIER,
NNS_MOTION_KEY_TARGET_Z_BEZIER,
NNS_MOTION_KEY_UPTARGET_X_BEZIER,
NNS_MOTION_KEY_UPTARGET_Y_BEZIER,
NNS_MOTION_KEY_UPTARGET_Z_BEZIER,
NNS_MOTION_KEY_UPVECTOR_X_BEZIER,
NNS_MOTION_KEY_UPVECTOR_Y_BEZIER,
NNS_MOTION_KEY_UPVECTOR_Z_BEZIER,
NNS_MOTION_KEY_ZNEAR_BEZIER,
NNS_MOTION_KEY_ZFAR_BEZIER,
NNS_MOTION_KEY_ASPECT_BEZIER,
NNS_MOTION_KEY_DIFFUSE_R_BEZIER,
NNS_MOTION_KEY_DIFFUSE_G_BEZIER,
NNS_MOTION_KEY_DIFFUSE_B_BEZIER,
NNS_MOTION_KEY_ALPHA_BEZIER,
NNS_MOTION_KEY_SPECULAR_R_BEZIER,
NNS_MOTION_KEY_SPECULAR_G_BEZIER,
NNS_MOTION_KEY_SPECULAR_B_BEZIER,
NNS_MOTION_KEY_SPECULAR_LEVEL_BEZIER,
NNS_MOTION_KEY_SPECULAR_GLOSS_BEZIER,
NNS_MOTION_KEY_AMBIENT_R_BEZIER,
NNS_MOTION_KEY_AMBIENT_G_BEZIER,
NNS_MOTION_KEY_AMBIENT_B_BEZIER,
NNS_MOTION_KEY_TEXTURE_BLEND_BEZIER,
NNS_MOTION_KEY_OFFSET_U_BEZIER,
NNS_MOTION_KEY_OFFSET_V_BEZIER,
NNS_MOTION_KEY_LIGHT_COLOR_R_BEZIER,
NNS_MOTION_KEY_LIGHT_COLOR_G_BEZIER,
NNS_MOTION_KEY_LIGHT_COLOR_B_BEZIER,
NNS_MOTION_KEY_LIGHT_INTENSITY_BEZIER,
NNS_MOTION_KEY_FALLOFF_START_BEZIER,
NNS_MOTION_KEY_FALLOFF_END_BEZIER,
NNS_MOTION_KEY_INNER_RANGE_BEZIER,
NNS_MOTION_KEY_OUTER_RANGE_BEZIER;

typedef struct
{
  float Frame;
  float Value;
  NNS_MOTION_SI_SPLINE_HANDLE Shandle;
}
NNS_MOTION_KEY_FLOAT_SI_SPLINE,
NNS_MOTION_KEY_TRANSLATION_X_SI_SPLINE,
NNS_MOTION_KEY_TRANSLATION_Y_SI_SPLINE,
NNS_MOTION_KEY_TRANSLATION_Z_SI_SPLINE,
NNS_MOTION_KEY_SCALING_X_SI_SPLINE,
NNS_MOTION_KEY_SCALING_Y_SI_SPLINE,
NNS_MOTION_KEY_SCALING_Z_SI_SPLINE,
NNS_MOTION_KEY_USER_FLOAT_SI_SPLINE,
NNS_MOTION_KEY_MORPH_WEIGHT_SI_SPLINE,
NNS_MOTION_KEY_TARGET_X_SI_SPLINE,
NNS_MOTION_KEY_TARGET_Y_SI_SPLINE,
NNS_MOTION_KEY_TARGET_Z_SI_SPLINE,
NNS_MOTION_KEY_UPTARGET_X_SI_SPLINE,
NNS_MOTION_KEY_UPTARGET_Y_SI_SPLINE,
NNS_MOTION_KEY_UPTARGET_Z_SI_SPLINE,
NNS_MOTION_KEY_UPVECTOR_X_SI_SPLINE,
NNS_MOTION_KEY_UPVECTOR_Y_SI_SPLINE,
NNS_MOTION_KEY_UPVECTOR_Z_SI_SPLINE,
NNS_MOTION_KEY_ZNEAR_SI_SPLINE,
NNS_MOTION_KEY_ZFAR_SI_SPLINE,
NNS_MOTION_KEY_ASPECT_SI_SPLINE,
NNS_MOTION_KEY_DIFFUSE_R_SI_SPLINE,
NNS_MOTION_KEY_DIFFUSE_G_SI_SPLINE,
NNS_MOTION_KEY_DIFFUSE_B_SI_SPLINE,
NNS_MOTION_KEY_ALPHA_SI_SPLINE,
NNS_MOTION_KEY_SPECULAR_R_SI_SPLINE,
NNS_MOTION_KEY_SPECULAR_G_SI_SPLINE,
NNS_MOTION_KEY_SPECULAR_B_SI_SPLINE,
NNS_MOTION_KEY_SPECULAR_LEVEL_SI_SPLINE,
NNS_MOTION_KEY_SPECULAR_GLOSS_SI_SPLINE,
NNS_MOTION_KEY_AMBIENT_R_SI_SPLINE,
NNS_MOTION_KEY_AMBIENT_G_SI_SPLINE,
NNS_MOTION_KEY_AMBIENT_B_SI_SPLINE,
NNS_MOTION_KEY_TEXTURE_BLEND_SI_SPLINE,
NNS_MOTION_KEY_OFFSET_U_SI_SPLINE,
NNS_MOTION_KEY_OFFSET_V_SI_SPLINE,
NNS_MOTION_KEY_LIGHT_COLOR_R_SI_SPLINE,
NNS_MOTION_KEY_LIGHT_COLOR_G_SI_SPLINE,
NNS_MOTION_KEY_LIGHT_COLOR_B_SI_SPLINE,
NNS_MOTION_KEY_LIGHT_INTENSITY_SI_SPLINE,
NNS_MOTION_KEY_FALLOFF_START_SI_SPLINE,
NNS_MOTION_KEY_FALLOFF_END_SI_SPLINE,
NNS_MOTION_KEY_INNER_RANGE_SI_SPLINE,
NNS_MOTION_KEY_OUTER_RANGE_SI_SPLINE;

typedef struct
{
  float Frame;
  NNS_TEXCOORD Value;
}
NNS_MOTION_KEY_TEXCOORD,
NNS_MOTION_KEY_OFFSET_UV;

typedef struct
{
  float Frame;
  NNS_VECTOR Value;
}
NNS_MOTION_KEY_FLOAT3,
NNS_MOTION_KEY_TRANSLATION_XYZ,
NNS_MOTION_KEY_TARGET_XYZ,
NNS_MOTION_KEY_UPTARGET_XYZ,
NNS_MOTION_KEY_UPVECTOR_XYZ,
NNS_MOTION_KEY_SCALING_XYZ;

typedef struct
{
  float Frame;
  NNS_RGB Value;
}
NNS_MOTION_KEY_COLOR_RGB,
NNS_MOTION_KEY_DIFFUSE_RGB,
NNS_MOTION_KEY_SPECULAR_RGB,
NNS_MOTION_KEY_AMBIENT_RGB,
NNS_MOTION_KEY_LIGHT_COLOR_RGB;

typedef struct
{
  float Frame;
  NNS_QUATERNION Value;
}
NNS_MOTION_KEY_QUATERNION,
NNS_MOTION_KEY_ROTATION_QUAT;

typedef struct
{
  float Frame;
  int32_t Value;
}
NNS_MOTION_KEY_ANGLE32,
NNS_MOTION_KEY_ROTATION_X,
NNS_MOTION_KEY_ROTATION_Y,
NNS_MOTION_KEY_ROTATION_Z,
NNS_MOTION_KEY_ROLL,
NNS_MOTION_KEY_FOVY,
NNS_MOTION_KEY_INNER_ANGLE,
NNS_MOTION_KEY_OUTER_ANGLE;

typedef struct
{
  float Frame;
  int32_t Value;
  NNS_MOTION_BEZIER_HANDLE Bhandle;
}
NNS_MOTION_KEY_ANGLE32_BEZIER,
NNS_MOTION_KEY_ROTATION_X_BEZIER,
NNS_MOTION_KEY_ROTATION_Y_BEZIER,
NNS_MOTION_KEY_ROTATION_Z_BEZIER,
NNS_MOTION_KEY_ROLL_BEZIER,
NNS_MOTION_KEY_FOVY_BEZIER,
NNS_MOTION_KEY_INNER_ANGLE_BEZIER,
NNS_MOTION_KEY_OUTER_ANGLE_BEZIER;

typedef struct
{
  float Frame;
  int32_t Value;
  NNS_MOTION_SI_SPLINE_HANDLE Shandle;
}
NNS_MOTION_KEY_ANGLE32_SI_SPLINE,
NNS_MOTION_KEY_ROTATION_X_SI_SPLINE,
NNS_MOTION_KEY_ROTATION_Y_SI_SPLINE,
NNS_MOTION_KEY_ROTATION_Z_SI_SPLINE,
NNS_MOTION_KEY_ROLL_SI_SPLINE,
NNS_MOTION_KEY_FOVY_SI_SPLINE,
NNS_MOTION_KEY_INNER_ANGLE_SI_SPLINE,
NNS_MOTION_KEY_OUTER_ANGLE_SI_SPLINE;

typedef struct
{
  float Frame;
  int32_t Value;
}
NNS_MOTION_KEY_SINT32,
NNS_MOTION_KEY_HIDE,
NNS_MOTION_KEY_TEXTURE_INDEX,
NNS_MOTION_KEY_NODEHIDE;

typedef struct
{
  float Frame;
  uint32_t Value;
}
NNS_MOTION_KEY_UINT32,
NNS_MOTION_KEY_MATCLBK_USER,
NNS_MOTION_KEY_USER_UINT32;

typedef struct
{
  float Frame;
  NNS_ROTATE_A32 Value;
}
NNS_MOTION_KEY_ROTATION_A32,
NNS_MOTION_KEY_ROTATION_XYZ;

typedef struct
{
  int16_t Frame;
  int16_t Value;
}
NNS_MOTION_KEY_ANGLE16,
NNS_MOTION_KEY_ROTATION_X_A16,
NNS_MOTION_KEY_ROTATION_Y_A16,
NNS_MOTION_KEY_ROTATION_Z_A16,
NNS_MOTION_KEY_ROLL_A16,
NNS_MOTION_KEY_FOVY_A16,
NNS_MOTION_KEY_INNER_ANGLE_A16,
NNS_MOTION_KEY_OUTER_ANGLE_A16;

typedef struct
{
  int16_t Frame;
  int16_t Value;
  NNS_MOTION_SI_SPLINE_HANDLE Shandle;
}
NNS_MOTION_KEY_ANGLE16_SI_SPLINE,
NNS_MOTION_KEY_ROTATION_X_A16_SI_SPLINE,
NNS_MOTION_KEY_ROTATION_Y_A16_SI_SPLINE,
NNS_MOTION_KEY_ROTATION_Z_A16_SI_SPLINE,
NNS_MOTION_KEY_ROLL_A16_SI_SPLINE,
NNS_MOTION_KEY_FOVY_A16_SI_SPLINE,
NNS_MOTION_KEY_INNER_ANGLE_A16_SI_SPLINE,
NNS_MOTION_KEY_OUTER_ANGLE_A16_SI_SPLINE;

typedef struct
{
  int16_t Frame;
  NNS_ROTATE_A16 Value;
}
NNS_MOTION_KEY_ROTATION_A16,
NNS_MOTION_KEY_ROTATION_XYZ_A16;

// Macros used by Text-Form files:
#define MOTKEY(Frame, Value) { Frame, Value }
#define MOTKEY_SISP(Frame, Value, Shandle) { Frame, Value, Shandle }
#define MOTKEY_BZR(Frame, Value, Bhandle) { Frame, Value, Bhandle }

#define MFRM_FLT(Frame) (Frame)
#define MFRM_S16(Frame) (Frame)

#define SISP_IN(deg) (deg)
#define SISP_OUT(deg) (deg)
#define SISP_IN_A32(deg) (NNM_DEGtoA32FLT(deg))
#define SISP_OUT_A32(deg) (NNM_DEGtoA32FLT(deg))
#define SISP_IN_A16(deg) (NNM_DEGtoA16FLT(deg))
#define SISP_OUT_A16(deg) (NNM_DEGtoA16FLT(deg))

#define MHDL_SISP(In, Out) { In, Out }

#define BZR_IN(x, y) { (x), (y) }
#define BZR_OUT(x, y) { (x), (y) }
#define BZR_IN_A32(x, deg) { (x), NNM_DEGtoA32FLT(deg) }
#define BZR_OUT_A32(x, deg) { (x), NNM_DEGtoA32FLT(deg) }

#define MHDL_BZR(In, Out) { In, Out }

#define MVAL_FLT(val) (val)
#define MVAL_FLT_2(x, y) { x, y }
#define MVAL_FLT_3(x, y, z) { x, y, z }
#define MVAL_FLT_4(x, y, z, w) { x, y, z, w }
#define MVAL_A32(deg) (NNM_DEGtoA32(deg))
#define MVAL_A32_3(x, y, z) { NNM_DEGtoA32(x), NNM_DEGtoA32(y), NNM_DEGtoA32(z) }
#define MVAL_S32(val) (val)
#define MVAL_S32_3(x, y, z) { x, y, z }
#define MVAL_A16(deg) (NNM_DEGtoA16(deg))
#define MVAL_A16_3(x, y, z) { NNM_DEGtoA16(x), NNM_DEGtoA16(y), NNM_DEGtoA16(z) }
#define MVAL_U32(val) (val)
```
