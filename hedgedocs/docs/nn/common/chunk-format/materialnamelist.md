---
description: Sega NN MATERIALNAMELIST Data Chunk Format Specification
---

# MATERIALNAMELIST

## NNE_MATERIALNAME_SORTTYPE

!!! note
    The underlying type of this enum is not specified, thus it
    may differ depending on the platform. In practice, it's always
    an `int32_t` in all known NN games.

This enum indicates the way the [NNS_MATERIALNAME](#nns_materialname) structs are sorted in the `pMaterialNameList` array used in the [NNS_MATERIALNAMELIST](#nns_materialnamelist).

```c
enum NNE_MATERIALNAME_SORTTYPE
{
  // The NNS_MATERIALNAME structs are sorted by their
  // [iMaterial] index field, from least to greatest.
  NNE_MATERIALNAME_SORTTYPE_INDEX,

  // The NNS_MATERIALNAME structs are sorted by their
  // [Name] field, ordered as if by C's strcmp.
  NNE_MATERIALNAME_SORTTYPE_NAME
};
```

## NNS_MATERIALNAMELIST

!!! important
    This is the root struct for all MATERIALNAMELIST data chunks.

A list of the names of the materials in an object (model).

```c
struct NNS_MATERIALNAMELIST
{
  // The way the NNS_MATERIALNAME structs in
  // the [pMaterialNameList] array are sorted.
  NNE_MATERIALNAME_SORTTYPE SortType;

  // The number of elements in the [pMaterialNameList] array.
  int32_t nMaterial;

  // An array of NNS_MATERIALNAME structs.
  NNS_MATERIALNAME* pMaterialNameList;
};

// Macros used by Text-Form files:
#define MATERIALNAMELIST(SortType, nMaterial, pMaterialNameList) \
    { SortType, nMaterial, pMaterialNameList }

#define MANL_TYPE(SortType) (SortType)
#define MANL_N_MATERIAL(nMaterial) (nMaterial)
#define MANL_NAMELIST(pMaterialNameList) (pMaterialNameList)
```

## NNS_MATERIALNAME

The name of a single material.

```c
struct NNS_MATERIALNAME
{
  // The index of the material, in the [pMatPtrList]
  // array in the corresponding NNS_OBJECT.
  int32_t iMaterial;

  // The name of the material.
  const char* Name;
};

// Macros used by Text-Form files:
#define MATERIALNAME(iMaterial, Name) { iMaterial, Name }
#define MANM_IDX(iMaterial) (iMaterial)
#define MANM_NAME(Name) (Name)
```
