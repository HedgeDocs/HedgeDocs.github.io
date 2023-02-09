---
description: Sega NN Texture List Chunks
---
# Texture Lists

## NNS_TEXFILELIST

!!! important
    This is the "main" (root) struct for all NN texture list chunks.

```c
struct NNS_TEXFILELIST
{
  /* The size of the [pTexFileList] array. */
  uint32_t nTex;

  /* An array of NNS_TEXFILE structs. */
  NNS_TEXFILE* pTexFileList;
};

/*
  Binary-form files can additionally contain embedded
  texture data via setting the [Filename] field
  within one or more NNS_TEXFILE structs to NULL.

  In binary-form files which utilize this feature,
  there is an extra field in NNS_TEXFILELIST after
  [pTexFileList], which is a pointer to an array of
  size [nTex] of NNS_TEXFILEDATA structs, which go like this:
*/

/* NOTE: This name was guessed. */
struct NNS_TEXFILEDATA
{
  /* Seems to be flags? */
  uint32_t Unknown1;

  /* Pointer to the embedded texture data. */
  void* pData;
};

/* Macros used by Text-Form files: */
#define TEXFILELIST(nTex, pTexFileList) { nTex, pTexFileList }
#define TFL_N_TEXFILE(nTex) (nTex)
#define TFL_TEXFILE(pTexFileList) (pTexFileList)
```

!!! todo
    See if there exists any data using the NNS_TEXLIST struct type from Sonic 4 Episode 1 Windows Phone symbols.

## NNS_TEXFILE

```c
struct NNS_TEXFILE
{
  /* Types and flags, as specified by NNE_TEXFTYPE. */
  uint32_t fType;

  /*
    The name of the file this texture is stored in, or NULL if
    this texture's data is embedded within this file. This value
    should be ignored if NND_TEXFTYPE_NO_FILENAME is set in [type].
  */
  char* Filename;

  /*
    The minification filter to use on the texture, as specified by NNE_MIN.
    This value should be ignored if NND_TEXFTYPE_NO_FILTER is set
    in [type];
  */
  uint16_t MinFilter;

  /*
    The magnification filter to use on the texture, as specified by NNE_MAG.
    This value should be ignored if NND_TEXFTYPE_NO_FILTER is set
    in [type];
  */
  uint16_t MagFilter;

  /*
    Unknown. Maybe some games have a global texture array, and
    this is the index into that array to place this texture into?
    This value should always be ignored *unless* NND_TEXFTYPE_LISTGLBIDX
    is set in [type].
  */
  uint32_t GlobalIndex;

  /*
    Unknown. Maybe some games group textures into banks?
    This value should always be ignored *unless* NND_TEXFTYPE_LISTBANK
    is set in [type].
  */
  uint32_t Bank;
};

/* Macros used by Text-Form files: */
#define TEXFILE(filename, filter) { 0, filename, filter, 0, 0 }
#define TF_FILENAME(filename) (filename)
#define TF_FILTER(minFilter, magFilter) (minFilter), (magFilter)
```

## NNE_MAG

All possible texture magnification filters.

```c
enum NNE_MAG
{
  /* Nearest magnification filtering. */
  NND_MAG_NEAREST = 0,

  /* Linear magnification filtering. */
  NND_MAG_LINEAR = 1,

  /* Anisotropic magnification filtering. */
  NND_MAG_ANISOTROPIC = 2
};
```

## NNE_MIN

All possible texture minification filters.

```c
enum NNE_MIN
{
  /* Nearest minification filtering. */
  NND_MIN_NEAREST = 0,

  /* Linear minification filtering. */
  NND_MIN_LINEAR = 1,

  /* TODO */
  NND_MIN_NEAREST_MIPMAP_NEAREST = 2,

  /* TODO */
  NND_MIN_NEAREST_MIPMAP_LINEAR = 3,

  /* TODO */
  NND_MIN_LINEAR_MIPMAP_NEAREST = 4,

  /* TODO */
  NND_MIN_LINEAR_MIPMAP_LINEAR = 5,

  /* TODO */
  NND_MIN_ANISOTROPIC = 6,

  /* TODO */
  NND_MIN_ANISOTROPIC2 = 6,

  /* TODO */
  NND_MIN_ANISOTROPIC_MIPMAP_NEAREST = 7,

  /* TODO */
  NND_MIN_ANISOTROPIC2_MIPMAP_NEAREST = 7,

  /* TODO */
  NND_MIN_ANISOTROPIC_MIPMAP_LINEAR = 8,

  /* TODO */
  NND_MIN_ANISOTROPIC2_MIPMAP_LINEAR = 8,

  /* TODO */
  NND_MIN_ANISOTROPIC4 = 9,

  /* TODO */
  NND_MIN_ANISOTROPIC4_MIPMAP_NEAREST = 10,

  /* TODO */
  NND_MIN_ANISOTROPIC4_MIPMAP_LINEAR = 11,

  /* TODO */
  NND_MIN_ANISOTROPIC8 = 12,

  /* TODO */
  NND_MIN_ANISOTROPIC8_MIPMAP_NEAREST = 13,

  /* TODO */
  NND_MIN_ANISOTROPIC8_MIPMAP_LINEAR = 14
};
```

## NNE_TEXFTYPE

Types and flags for a ```NNS_TEXFILE``` struct.

```c
enum NNE_TEXFTYPE
{
  /*
    =======================================================
    == Masks
    =======================================================
  */


  /* Apply this mask to get just the texture's type, without any flags. */
  NND_TEXFTYPE_TEXTYPE_MASK = 255,



  /*
    =======================================================
    == Types (required; only one must be used at a time)
    =======================================================
  */


  /* The platform's default format (used most of the time). */
  NND_TEXFTYPE_DEFAULT = 0,

  /* The .gim format (used on PSP). */
  NND_TEXFTYPE_GIMTEX = 1,



  /*
    =======================================================
    == Flags (optional; one or more can be used at a time)
    =======================================================
  */


  /* The [FileName] field should be ignored. */
  NND_TEXFTYPE_NO_FILENAME = 256,

  /* The [MinFilter] and [MagFilter] fields should be ignored. */
  NND_TEXFTYPE_NO_FILTER = 512,

  /* The [GlobalIndex] field is used (default is to ignore it). */
  NND_TEXFTYPE_LISTGLBIDX = 1024,

  /* The [Bank] field is used (default is to ignore it). */
  NND_TEXFTYPE_LISTBANK = 2048
};
```

!!! warning
    The symbols from Sonic 4 Episode I for Windows Phone 7
    mention the following types:

    - ```NND_TEXFTYPE_GVRTEX = 0```
    - ```NND_TEXFTYPE_SVRTEX = 1```
    - ```NND_TEXFTYPE_XVRTEX = 2```

    Looking at various NN files, however, these appear to be incorrect?

    Sony NN texture lists that actually do use SVR textures seem to set
    the type to 0 anyway, for example.

    **Don't rely on these type values!**
