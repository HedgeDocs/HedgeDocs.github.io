---
description: Sega NN NODENAMELIST Data Chunk Format Specification
---

# NODENAMELIST

## NNE_NODENAME_SORTTYPE

!!! note
    The underlying type of this enum is not specified, thus it
    may differ depending on the platform. In practice, it's always
    an `int32_t` in all known NN games.

This enum indicates the way the [NNS_NODENAME](#nns_nodename) structs are sorted in the `pNodeNameList` array used in the [NNS_NODENAMELIST](#nns_nodenamelist).

```c
enum NNE_NODENAME_SORTTYPE
{
    // The NNS_NODENAME structs are sorted by their
    // [iNode] index field, from least to greatest.
    NNE_NODENAME_SORTTYPE_INDEX,

    // The NNS_NODENAME structs are sorted by their
    // [Name] field, ordered as if by C's strcmp.
    NNE_NODENAME_SORTTYPE_NAME
};
```

## NNS_NODENAMELIST

!!! important
    This is the root struct for all NODENAMELIST data chunks.

A list of the names for the nodes (bones) that make up an object (model).

```c
struct NNS_NODENAMELIST
{
    // The way the NNS_NODENAME structs in
    // the [pNodeNameList] array are sorted.
    NNE_NODENAME_SORTTYPE SortType;

    // The number of elements in the [pNodeNameList] array.
    int32_t nNode;

    // An array of NNS_NODENAME structs.
    NNS_NODENAME* pNodeNameList;
};

// Macros used by Text-Form files:
#define NODENAMELIST(SortType, nNode, pNodeNameList) { SortType, nNode, pNodeNameList }
#define NDNL_TYPE(SortType) (SortType)
#define NDNL_N_NODE(nNode) (nNode)
#define NDNL_NAMELIST(pNodeNameList) (pNodeNameList)
```

## NNS_NODENAME

A name for a single node (bone).

```c
struct NNS_NODENAME
{
    // The index of the node, in the [pNodeList]
    // array in the corresponding NNS_OBJECT.
    int32_t iNode;

    // The name of the node.
    const char* Name;
};

// Macros used by Text-Form files:
#define NODENAME(iNode, Name) { iNode, Name }
#define NDNM_IDX(iNode) (iNode)
#define NDNM_NAME(Name) (Name)
```
