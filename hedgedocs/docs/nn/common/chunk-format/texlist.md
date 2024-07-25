---
description: Sega NN TEXLIST Data Chunk Format Specification
---

# TEXLIST

## NNS_TEXFILELIST

!!! important
    This is the root struct for all TEXLIST data chunks.

A list of texture file entries.

```c
struct NNS_TEXFILELIST
{
  // The number of elements in the [pTexFileList] array.
  int32_t nTex;

  // An array of NNS_TEXFILE structs.
  NNS_TEXFILE* pTexFileList;
};

// Macros used by Text-Form files:
#define TEXFILELIST(nTex, pTexFileList) { nTex, pTexFileList }
#define TFL_N_TEXFILE(nTex) (nTex)
#define TFL_TEXFILE(pTexFileList) (pTexFileList)
```

!!! todo
    Is the following information on embedded texture data correct? This might only apply to NCP files, NOT to NN?

Binary-form files can additionally contain embedded
texture data via setting the `Filename` field
within one or more [NNS_TEXFILE](#nns_texfile) structs to NULL.

In binary-form files which utilize this feature,
there is an extra field in NNS_TEXFILELIST after
`pTexFileList`, which is a pointer to an array of
`nTex` NNS_TEXFILEDATA structs, which go like this:

```c
// NOTE: This name was guessed.
struct NNS_TEXFILEDATA
{
  // Seems to be flags?
  uint32_t Unknown1;

  // Pointer to the embedded texture data.
  void* pData;
};
```

## NNF_TEXFILETYPE

Types and flags for a [NNS_TEXFILE](#nns_texfile) struct.

```c
enum NNF_TEXFILETYPE : uint32_t
{
  // -- Masks --

  // Apply this mask to get the Texture Type.
  NND_TEXFTYPE_TEXTYPE_MASK = 255,


  // -- Texture Types --

  // NOTE: These types were taken from Sonic 4 Episode 1 for Windows Phone 7,
  // but they do NOT appear to be used by ANY known NN games correctly!

  // PS2 NN texture lists that use SVR textures have
  // their type set to 0 (GVR), for example.

  // Please do NOT rely on these values!!!

  NND_TEXFTYPE_GVRTEX = 0,
  NND_TEXFTYPE_SVRTEX = 1,
  NND_TEXFTYPE_XVRTEX = 2,

  // -- Flags --

  // The [FileName] field should be ignored.
  NND_TEXFTYPE_NO_FILENAME = 256,

  // The [MinFilter] and [MagFilter] fields
  // should be ignored; use a default instead.
  NND_TEXFTYPE_NO_FILTER = 512,

  // The [GlobalIndex] field is used (default is to ignore it).
  NND_TEXFTYPE_LISTGLBIDX = 1024,

  // The [Bank] field is used (default is to ignore it).
  NND_TEXFTYPE_LISTBANK = 2048
};
```

## NNF_TEXFILE_MINFILTER

All possible texture minification filters.

```c
enum NNF_TEXFILE_MINFILTER : uint16_t
{
  // Nearest minification filtering.
  NND_MIN_NEAREST = 0,

  // Linear minification filtering.
  NND_MIN_LINEAR = 1,

  NND_MIN_NEAREST_MIPMAP_NEAREST = 2,
  NND_MIN_NEAREST_MIPMAP_LINEAR = 3,
  NND_MIN_LINEAR_MIPMAP_NEAREST = 4,
  NND_MIN_LINEAR_MIPMAP_LINEAR = 5,
  NND_MIN_ANISOTROPIC = 6,
  NND_MIN_ANISOTROPIC2 = 6,
  NND_MIN_ANISOTROPIC_MIPMAP_NEAREST = 7,
  NND_MIN_ANISOTROPIC2_MIPMAP_NEAREST = 7,
  NND_MIN_ANISOTROPIC_MIPMAP_LINEAR = 8,
  NND_MIN_ANISOTROPIC2_MIPMAP_LINEAR = 8,
  NND_MIN_ANISOTROPIC4 = 9,
  NND_MIN_ANISOTROPIC4_MIPMAP_NEAREST = 10,
  NND_MIN_ANISOTROPIC4_MIPMAP_LINEAR = 11,
  NND_MIN_ANISOTROPIC8 = 12,
  NND_MIN_ANISOTROPIC8_MIPMAP_NEAREST = 13,
  NND_MIN_ANISOTROPIC8_MIPMAP_LINEAR = 14
};
```

## NNF_TEXFILE_MAGFILTER

All possible texture magnification filters.

```c
enum NNF_TEXFILE_MAGFILTER : uint16_t
{
  // Nearest magnification filtering.
  NND_MAG_NEAREST = 0,

  // Linear magnification filtering.
  NND_MAG_LINEAR = 1,

  // Anisotropic magnification filtering.
  NND_MAG_ANISOTROPIC = 2
};
```

## NNS_TEXFILE

A texture file entry.

```c
struct NNS_TEXFILE
{
  // Types and flags.
  NNF_TEXFILETYPE fType;

  // The name of the file this texture is stored in, or NULL if
  // this texture's data is embedded within this file. This value
  // should be ignored if NND_TEXFTYPE_NO_FILENAME is set in [fType].
  char* Filename;

  // The minification filter to use on the texture. This value
  // should be ignored if NND_TEXFTYPE_NO_FILTER is set in [fType].
  NNF_TEXFILE_MINFILTER MinFilter;

  // The magnification filter to use on the texture. This value
  // should be ignored if NND_TEXFTYPE_NO_FILTER is set in [fType].
  NNF_TEXFILE_MAGFILTER MagFilter;

  // Unknown. Maybe some games have a global texture array, and
  // this is the index into that array to place this texture into?
  // This value should always be ignored *unless* NND_TEXFTYPE_LISTGLBIDX
  // is set in [fType].
  uint32_t GlobalIndex;

  // Unknown. Maybe some games group textures into banks?
  // This value should always be ignored *unless* NND_TEXFTYPE_LISTBANK
  // is set in [fType].
  uint32_t Bank;
};

// Macros used by Text-Form files:
#define TEXFILE(filename, filter) { 0, filename, filter, 0, 0 }
#define TF_FILENAME(filename) (filename)
#define TF_FILTER(minFilter, magFilter) (minFilter), (magFilter)
```
