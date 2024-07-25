---
description: Sega NN Chunk Format Common Definitions
---

# Common Definitions

What follows is a non-exhaustive list of common definitions used by the Sega NN Chunk Format.

## NNS_VECTOR

Represents a Vector3.

```c
struct NNS_VECTOR
{
    float x;
    float y;
    float z;
};
```

## NNS_VECTOR2D

Represents a Vector2.

```c
struct NNS_VECTOR2D
{
    float x;
    float y;
};
```

## NNS_RGB

Represents an RGB color value.

```c
struct NNS_RGB
{
    float r;
    float g;
    float b;
};
```

## NNS_TEXCOORD

Represents a two-dimensional UV texture coordinate.

```c
struct NNS_TEXCOORD
{
    float u;
    float v;
};
```

## NNS_ROTATE_A32

Represents a fixed-point 32-bit angle rotation.

```c
struct NNS_ROTATE_A32
{
    int32_t x;
    int32_t y;
    int32_t z;
};

// Macros used by Text-Form files:
#define NNM_DEGtoA32(deg) (int32_t)((deg) * 182.04444f)
#define NNM_DEGtoA32FLT(deg) ((deg) * 182.04444f)
#define NNM_A32toDEG(val) ((val) * 0.0054931641f)
```

## NNS_ROTATE_A16

Represents a fixed-point 16-bit angle rotation.

```c
struct NNS_ROTATE_A16
{
    int16_t x;
    int16_t y;
    int16_t z;
};

// Macros used by Text-Form files:
#define NNM_DEGtoA16(deg) (int16_t)((deg) * 182.04444f)
#define NNM_DEGtoA16FLT(deg) ((deg) * 182.04444f)
#define NNM_A16toDEG(val) ((val) * 0.0054931641f)
```

## NNS_QUATERNION

Represents a quaternion rotation.

```c
// NOTE: On PS3, this seems to be aligned by 16.
// On all other platforms, it does not seem to have
// any special alignment.
struct NNS_QUATERNION
{
    float x;
    float y;
    float z;
    float w;
};
```
