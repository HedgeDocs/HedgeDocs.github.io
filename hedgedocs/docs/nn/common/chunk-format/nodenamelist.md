---
description: Sega NN NODENAMELIST Data Chunk Format Specification
---

# NODENAMELIST

## NNS_NODENAMELIST

!!! important
    This is the "main" (root) struct for all NN node (bone) name list chunks.

```c
struct NNS_NODENAMELIST
{
    /* The sorting type */
    NNE_NODENAME_SORTTYPE SortType;

    /* The size of [pNodeNameList] array */
    uint32_t nNode;

    /* An array of NNS_NODENAME structs */ 
    NNS_NODENAME* pNodeNameList;
};
```

!!! todo
    Find the macros used in the text-form file format

## NNS_NODENAME

The actual node (bone) name

```c
struct NNS_NODENAME
{
    /* The node index */
    uint32_t iNode;

    /* The node name */
    char* Name;
};
```

## NNE_NODENAME_SORTTYPE

This enum indicates the sorting type used in the node name list.

```c
enum NNE_NODENAME_SORTTYPE
{
    /* Sorting by index */
    NNE_NODENAME_SORTTYPE_INDEX,

    /* Sorting by name */ 
    NNE_NODENAME_SORTTYPE_NAME
};
```

!!! todo
    Find the macros used in the text-form file format