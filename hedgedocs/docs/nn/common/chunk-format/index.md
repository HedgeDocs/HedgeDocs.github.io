---
description: Sega NN Chunk Format Specification
---

# NN Chunk Format

!!! warning
    This page is still a work in progress! Any additions and updates are greatly appreciated!

!!! info
    HedgeDocs' initial Sega NN documentation was written by: **Radfordhound**.
    
    Thanks to:

    - **ItsEasyActually**: For sharing his Sega NN findings with me, which
    helped immensely in getting me started on my journey to reverse-engineer
    and document all of Sega NN across all of its many crazy iterations
    and platforms.

    - **ArMM1998**: For sharing his documentation on some more obscure
    NN file types with me (specifically Puyo Puyo stuff, including DS games
    that used NN which I didn't know was a thing); I never would've known about
    these otherwise!

    - **TGE** and **WamWooWam**: For decompiling SEGA's ~~unholy~~ port of Sonic 4
    Episode I to Windows Phone 7, which used the Sega NN library, and just-so-happened
    to include complete symbols for everything (even enum values)! I can't understate
    how much this information has helped me!

    - **SEGA**: For making these games, and for letting us freely mod them.
    Seriously, not many companies let us do this stuff openly, and I think it's awesome.
    (Also, for releasing that awful version of Sonic 4 Episode I on Windows Phone 7 which
    had all the symbols in it. Thanks guys, you're the best!! <3)

The Sega NN Chunk Format is a generic "container" format developed by Sega
somewhere around 2002-2004. It originally appeared in 2004's "Sega Superstars"
(to our knowledge), and has been heavily utilized in many Sega games released since.

The format is heavily based on the older "Sega Ninja Chunk Model" format, which was
originally developed for the Sega Dreamcast and was utilized in many Dreamcast
games (it was even included as part of the Dreamcast's "Katana" SDK).

While the exact meaning of the "NN" in "Sega NN" is still currently unknown, given
that it is so heavily based off of the older Ninja format, it's almost certainly
an acronym for something like "New Ninja" or "Ninja Next".

## Platforms

The NN Chunk Format, much like the older Ninja format it's based on, is
designed heavily around the specific hardware/software requirements of whatever
platform it is intended to be used on.

Unlike the older Ninja format, however (which only supports one platform: the
Sega Dreamcast), the NN Chunk Format is "multi-platform", and therefore comes
in many different platform-specific variants.

All known supported platforms are listed in the following chart:

| ID | Meaning          | CC   | NN Library Version         | Endianness    | Alignment | Description                   |
| -- | ---------------- | ---- | -------------------------- | ------------- | --------- | ----------------------------- |
| NX | Ninja Xbox       | x    | DirectX G1.1               | Little        | 16        | Xbox/Xbox 360                 |
| NS | Ninja Sony       | s    | PlayStation 2              | Little        | 16 ?      | PlayStation 2                 |
| NG | Ninja Gamecube   | g    | GAMECUBE                   | Big           | 32        | Gamecube/Wii                  |
| NC | Ninja Cell       | c ?  | PS3                        | Little ?      | 16 ?      | PlayStation 3                 |
| NU | Ninja Umd ?	    | u/s  | PSP                        | Little        | 16 ?      | PlayStation Portable          |
| DS | DS		        | ?    | ?                          | Little        | 16 ?      | Nintendo DS/3DS               |
| NI | Ninja Ios        | i ?  | OpenGL ES 1.1              | Little        | 16 ?      | iOS/Android/Windows Phone     |
| NE | ?                | ?    | DirectX G2.0 on XBOX360    | Little ?      | 16 ?      | Xbox 360                      |
| NY | ?                | ?    | ?                          | Big           | 16 ?      | Xbox 360/PlayStation 3        |
| NZ | Ninja [Other]    | z    | DirectX G2.0               | Little        | 16        | Other platforms, such as PC   |

## Data Chunks

As the name implies, files in the NN Chunk Format are comprised
of a series of one or more "data chunks", one after another.

A "data chunk" is simply a block of data (structs, arrays, strings, etc.)
that represents a single resource of a specific type.

All known data chunk types are listed in the following chart:

| ID | CC | Type                                | Description                                                       |
| -- | -- | ----------------------------------- | ----------------------------------------------------------------- |
| TL | t  | [TEXLIST](texlist.md)               | A list of textures.                                               |
| EF | ?  | EFFECTLIST                          | A list of effects (shaders).                                      |
| NN | a  | [NODENAMELIST](nodenamelist.md)     | A list of names for the nodes (bones) within an object (a model). |
| OB | o  | OBJECT                              | A model.                                                          |
| CA | ?  | CAMERA                              | Camera parameters.                                                |
| MO | m  | MOTION (node)                       | A node (bone) animation.                                          |
| MC | d  | MOTION (camera)                     | A camera animation.                                               |
| ML | ?  | MOTION (light)                      | A light animation.                                                |
| MM | f  | MOTION (morph)                      | A morph animation.                                                |
| MA | v  | MOTION (material)                   | A material animation.                                             |
| LI | l  | LIGHT                               | A light.                                                          |

!!! todo
    Add the rest of the data chunk types.

For more specific information on the format of these data chunk
types, please refer to the linked pages in the above chart.

## File Types

Just like with the older Ninja format, NN chunk files come in two forms:

- [Binary-Form](#binary-form-file-format)
- [Text-Form](#text-form-file-format) (aka "Ascii-Form")

!!! info
    **The vast majority of NN chunk files in released games are in binary-form.**

    To our knowledge, all released games using NN don't support
    loading text-form files, meaning that **all NN text-form files
    found in the games are unused developer leftovers**!

File extensions for NN chunk files typically consist of three characters:

1. The "CC" (character-code) of the [platform](#platforms).
2. ```n``` for [Binary-Form](#binary-form-file-format) files, or ```t``` for [Text-Form](#text-form-file-format) files.
3. The "CC" (character-code) of the last [data chunk](#data-chunks) contained within the file.

!!! example "Examples"
    | Extension | Meaning                                   |
    | --------- | ----------------------------------------- |
    | .xno      | Xbox \| Binary-Form \| OBJECT             |
    | .gno      | Gamecube \| Binary-Form \| OBJECT         |
    | .xtv      | Xbox \| Text-Form \| MOTION (material)    |
    | .snt      | Sony \| Binary-Form \| TEXLIST            |

## Binary-Form File Format

Binary-Form NN chunk files are just a series of consecutive
"binary chunks", each of which begins with the following struct:

!!! important
    All instances of this struct (and ONLY this struct) are represented in
    **little-endian**, regardless of the endianness specified by the
    [platform](#platforms). **Everything else** in Binary-Form NN chunk files
    is represented in the endianness specified by the [platform](#platforms).

```c
/*
    NOTE: A struct type with this name does not actually exist
    (to my knowledge) in real Sega NN implementations; instead,
    these fields are just embedded directly within every binary
    chunk's header struct. This is just an easier way to think
    about it for our purposes.
*/
struct NNS_BINCNK_HEADER
{
  /*
    The four-character identifier for this binary chunk;
    specifies what type of binary chunk this is.
  */
  uint32_t Id;

  /*
    The offset to the next four-character identifier in the
    file, relative to the end of this struct (such that after
    doing fread(&OfsNextId, sizeof(OfsNextId), 1, file);
    you can just do fseek(file, OfsNextId, SEEK_CUR)).
  */
  uint32_t OfsNextId;
};
```

Immediately following this struct comes all of the data (structs, strings, etc.)
required to represent the binary chunk. The format of this data depends on
the platform and type of binary chunk being represented. Check the Id field
to determine this.

After each binary chunk (including all of its data) has been written, the file
is padded (with ```0```s) to a position that is divisible by the "alignment"
specified by the [platform](#platforms) (usually it's 16, but notably, it's
32 on Gamecube/Wii).

What follows is documentation for all known binary chunk types, in the order
they appear within binary-form NN chunk files.

### Info Chunk

!!! important
    **This chunk is required to be present at the beginning of all binary-form NN chunk files!**
    The Sega NN games I checked actually rely on this behavior, so you can too.

This binary chunk serves as the header for a binary-form NN chunk file,
and contains info needed to parse the file. It is represented as the
following struct:

```c
struct NNS_BINCNK_FILEHEADER
{
  /*
    Binary chunk header; must be present at the beginning of all binary chunks.

    The chunk ID is set to "**IF", where "**" is the "ID" of
    the platform (e.g. "NGIF" for "Ninja Gamecube InFo").
  */
  NNS_BINCNK_HEADER ChunkHeader;

  /* The number of data chunks in the file. */
  uint32_t nChunk;

  /* Absolute offset to the first data chunk in the file. */
  uint32_t OfsData;

  /* The combined size of all of the data chunks in the file, including padding. */
  uint32_t SizeData;

  /* Absolute offset to the (required) NOF0 binary chunk. */
  uint32_t OfsNOF0;

  /*
    Size of the (required) NOF0 binary chunk, including its header.
    Depending on the variant of the format, this size either includes
    the padding that comes after the NOF0 binary chunk, or it doesn't.

    (I haven't figured out exactly which versions include padding yet).

    (It seems PSP files and .[x]ncp files don't count the padding,
    but everything else does?)
  */
  uint32_t SizeNOF0;

  /*
    1 in most files, 0 in some newer variants.
    (Maybe they just stopped using this value?)
  */
  uint32_t Version;
};
```

!!! todo
    Further research NIFL header chunks and add info on those.

### Data Chunk Header

After the [Info Chunk](#info-chunk), comes a sequence of one or more [data chunks](#data-chunks).

In binary-form NN chunk files, each data chunk begins with the following struct:

```c
struct NNS_BINCNK_DATAHEADER
{
  /*
    Binary chunk header; must be present at the beginning of all binary chunks.

    The chunk ID is set to the "ID" of the platform, followed
    by the "ID" of the data chunk type being written (e.g.
    "NXTL" for "Ninja Xbox Texture List").
  */
  NNS_BINCNK_HEADER ChunkHeader;

  /*
    Offset to the "main" (root) struct that makes up this chunk's data
    (e.g. offset to a NNS_NODENAMELIST if the chunk type indicates
    that this is a NODENAMELIST data chunk), relative to the
    position specified by the [OfsData] field from the info chunk.
  */
  uint32_t OfsMainData;

  /* Always 0 in every file I've seen thus far. */
  uint32_t Version;
};
```

Immediately following this struct comes all of the data (structs, strings, etc.)
required to represent the data chunk. The format of this data depends on
the platform and type of data chunk being represented. Check the chunk ID from
the ChunkHeader field in the above struct to determine this.

See the linked pages in the [data chunks chart](#data-chunks).

### Offsets List Chunk

!!! important
    **This chunk is required to be present in all binary-form NN chunk files!**

After all of the data chunks, comes the offsets list chunk.

This binary chunk represents a list of positions for all of the pointers
("offsets") in all of the data chunks in the file, relative to the value
of the ```[OfsData]``` field from the file's info chunk.

```c
struct NNS_BINCNK_NOF0HEADER
{
  /*
    Binary chunk header; must be present at the beginning of all binary chunks.

    The chunk ID is set to "NOF0".
  */
  NNS_BINCNK_HEADER ChunkHeader;

  /* The number of pointer positions listed within this chunk. */
  uint32_t nData;

  /*
    Padding; always 0 in files.
    
    Some games use this value as a marker that states whether or not
    the offsets have been "fixed". In those games, after they're done
    "fixing" all of the pointers listed within this chunk, they will set
    this value to 1 in memory.
  */
  uint32_t Pad;
};
```

Immediately following this struct comes an array of ```uint32_t``` values
of size ```[nData]```. These values represent the positions of every pointer
in all of the data chunks in the file, relative to the ```[OfsData]``` field
from the file's info chunk.

Most Sega NN games use this chunk to quickly "fix" all of the pointers
within the data chunks (that is, to convert all of the offsets into
absolute memory addresses that can then just be used as normal pointers).

Some games, however, (namely: Sonic 4 Episode I for Windows Phone) ignore the
values in this chunk, and instead, just manually add ```[OfsData]``` to
each offset to get an absolute file position whenever they need to jump there.

Regardless of whether the data is used or not, it is still required to be present.

!!! todo
    Add pseudo-code for "fixing" the offsets listed in this chunk.

### File Name Chunk

!!! info
    **This chunk is completely optional** and seems to only be used for
    debugging/internal-tooling purposes.

This chunk simply states the name and extension (without the path) of the file it's contained in.

```c
struct NNS_BINCNK_NFN0HEADER
{
  /*
    Binary chunk header; must be present at the beginning of all binary chunks.

    The chunk ID is set to "NFN0".
  */
  NNS_BINCNK_HEADER ChunkHeader;

  /* Padding; always 0 in files. */
  uint32_t Pad[2];
};
```

Immediately following this header comes a null-terminated string
which represents the file's name and extension (without its path).

### End Chunk

!!! important
    **This chunk is required to be present as the last chunk in all binary-form NN chunk files!**

This is the last chunk in all binary-form NN chunk files. It exists purely
to indicate that there are no more chunks left in the file, so that you
know when to stop reading if you're reading the file one chunk at a time.

```c
struct NNS_BINCNK_NENDHEADER
{
  /*
    Binary chunk header; must be present at the beginning of all binary chunks.

    The chunk ID is set to "NEND".
  */
  NNS_BINCNK_HEADER ChunkHeader;

  /* Padding; always 0 in files. */
  uint32_t Pad[2];
};
```

## Text-Form File Format

Just like text-form Ninja chunk model files, text-form NN chunk files are actually C
header files designed to be directly ```#include```-able from C or C++ code, allowing
developers to literally embed NN data directly into the game's code itself!

They also, however, are designed to serve as a human-readable variant of binary-form NN
chunk files that can be more easily parsed and/or generated by the official Sega NN tooling.

They accomplish all of this by using only a very strict subset of C in a precise
layout, and by heavily utilizing preprocessor defines from other NN library header
files that the developer is supposed to ```#include``` in their code before ```#include```-ing
the text-form NN chunk file.

The general layout is as follows:

!!! important
    Replace these special phrases in all of the following "```text snippets```" as follows:

    - "```\t```": Replace with a tab character (*not* spaces).
    - "```TYPE```": Replace with the name of the type currently being written.
    - "```NAME```": Replace with the name of whatever you're currently writing.

1. A required (?) "header" comment that is comprised of the following, in order:
    1. The name and version number of the tool used to create this file.
    2. "```Create\t: ```" followed by the date this file was created in the "```ddd MMM dd HH:mm:ss yyyy```" .NET DateTime format.
    3. References to each of the "main" (root) structs that makes up the data of every data chunk used in the file, in this format: "```TYPE\t: NAME```", where ```TYPE``` refers to the type of the struct being referenced (e.g. NNS_TEXFILELIST). See the linked pages in the [data chunks chart](#data-chunks).
2. One or more data chunks, each of which is comprised of the following, in order:
    1. A comment with the text: "```TYPE START```", where ```TYPE``` refers to the [data chunk's type](#data-chunks) (e.g. TEXLIST).
    2. All of the data used by this data chunk, represented as C code comprised heavily of special NN preprocessor macros. See the linked pages in the [data chunks chart](#data-chunks).
    3. A comment with the text: "```TYPE END```", where ```TYPE``` refers to the [data chunk's type](#data-chunks) (e.g. TEXLIST).
3. A required (?) comment with the text: "```End of File```".

!!! example "SampleFile.xtt"
    ```c
    /*
    	Sample NN Exporter Version 1.00.00
    	Create	: Wed Feb 08 21:06:46 2023
    	NNS_TEXFILELIST	: nntexfilelist_SampleFile
    */
    
    /* TEXLIST START */
    
    NNS_TEXFILE nntexfile_SampleFile[] =
    {
    	TEXFILE(
    		TF_FILENAME( "SampleTex_dif.dds" ),
    		TF_FILTER( NND_MIN_LINEAR_MIPMAP_NEAREST, NND_MAG_LINEAR )
    	),
    	TEXFILE(
    		TF_FILENAME( "SampleTex_spec.dds" ),
    		TF_FILTER( NND_MIN_LINEAR_MIPMAP_NEAREST, NND_MAG_LINEAR )
    	),
    	TEXFILE(
    		TF_FILENAME( "SampleTex_norm.dds" ),
    		TF_FILTER( NND_MIN_LINEAR_MIPMAP_NEAREST, NND_MAG_LINEAR )
    	),
    };
    
    NNS_TEXFILELIST nntexfilelist_SampleFile[] =
    {
    	TEXFILELIST(
    		TFL_N_TEXFILE( 3 ),
    		TFL_TEXFILE( nntexfile_SampleFile )
    	)
    };
    
    /* TEXLIST END */

    /* End of File */

    ```

!!! info
    All of the following in the above example are struct/enum/preprocessor
    defines from the NN library:

    - ```NNS_TEXFILE```
    - ```TEXFILE```
    - ```TF_FILENAME```
    - ```TF_FILTER```
    - ```NND_MIN_LINEAR_MIPMAP_NEAREST```
    - ```NND_MAG_LINEAR```
    - ```NNS_TEXFILELIST```
    - ```TEXFILELIST```
    - ```TFL_N_TEXFILE```
    - ```TFL_TEXFILE```

    For a complete list of all of these defines, please refer to the individual pages
    linked in the [data chunks chart](#data-chunks) (for this example,
    refer to the [TEXLIST documentation](texlist.md)).

The ordering of the data within each data chunk is generally in "reverse" order,
such that any reference to a value will not be written until *after* the value
it is referencing, as is required by C.

In some cases, the "reverse" order is still not enough to satisfy this requirement,
so the Sega NN exporters will write an extern declaration for the value being referenced.

!!! example "Example snippet from en_Kyozoress.xto in Sonic '06"
    Here, the ```nnvertex_plb_op_en_Kyozoress_head_l__2_w2_Eye``` value is
    declared so that it can be referenced by the ```VTX_LISTPTR``` field in
    ```nnvertexdesc_plb_op_en_Kyozoress_head_l__2_w2_Eye```:

    ```c
    extern NNS_VTXTYPE_XB_PW4INCT nnvertex_plb_op_en_Kyozoress_head_l__2_w2_Eye[];
    
    NNS_VTXLIST_DX_DESC nnvertexdesc_plb_op_en_Kyozoress_head_l__2_w2_Eye[] =
    {
    	VTXDESC(
    		/* ... */
    		VTX_LISTPTR( nnvertex_plb_op_en_Kyozoress_head_l__2_w2_Eye ),
            /* ... */
    	),
    };
    ```

    Then, later on in the file, the referenced
    ```nnvertex_plb_op_en_Kyozoress_head_l__2_w2_Eye```
    value is defined as usual (contents redacted due
    to extreme length):

    ```c
    NNS_VTXTYPE_XB_PW4INCT nnvertex_plb_op_en_Kyozoress_head_l__2_w2_Eye[] =
    {
    	/* ... */
    };
    ```
