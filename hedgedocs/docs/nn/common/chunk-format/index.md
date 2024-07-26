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

    - **Shadowth117** for a ton of extremely useful information and help throughout,
    especially with regards to the PSO2 variants of the formats!

    - **SEGA**: For making these games, and for letting us freely mod them.
    Seriously, not many companies let us do this stuff openly, and I think it's awesome.
    (Also, for releasing that awful version of Sonic 4 Episode I on Windows Phone 7 which
    had all the symbols in it. Thanks guys, you're the best!! <3)

The Sega NN Chunk Format is a generic "container" format developed by Sega's CS R&D Department,
dating back to 2002. It originally appeared in 2004's "Sega Superstars" (to our knowledge),
and has been heavily utilized in many Sega games released since.

The format is heavily based on the older "Sega Ninja Chunk Model" format, which was
originally developed for the Sega Dreamcast and was utilized in many Dreamcast
games (it was even included as part of the Dreamcast's "Katana" SDK).

While the exact meaning of the "NN" in "Sega NN" is still currently unknown, given
that it is so heavily based off of the older Ninja format, it's almost certainly
an acronym for something like "New Ninja" or "Ninja Next".

## Common Definitions

Please see the [Common Definitions](common-definitions.md) page for a list of
definitions (structs, enums, etc.) that are referenced throughout this specification.

## Platforms

The NN Chunk Format, much like the older Ninja format it's based on, is
designed heavily around the specific hardware/software requirements of whatever
platform it is intended to be used on.

Unlike the older Ninja format, however (which only supports one platform: the
Sega Dreamcast), the NN Chunk Format is "multi-platform", and therefore comes
in many different platform-specific variants.

All known used platforms are listed in the following chart:

| ID | CC   | Used on                     | Endianness  | Alignment | NN Library Version        |
| -- | ---- | --------------------------- | ----------- | --------- | ------------------------- |
| NS | s    | PlayStation 2               | Little      | 16        | PlayStation 2             |
| NG | g    | Gamecube/Wii                | Big         | 32        | GAMECUBE                  |
| NX | x    | Xbox/Xbox 360/Windows       | Little      | 16        | DirectX G1.1              |
| NL | l    | Sega Lindberg               | Little      | 16        | Lindberg                  |
| NU | u/s  | PlayStation Portable        | Little      | 16        | PSP                       |
| NC | c    | PlayStation 3               | Big         | 16        | PS3                       |
| NY | y ?  | Xbox 360/PlayStation 3      | ?           | 16 ?      | ?                         |
| NE | e    | Xbox 360                    | Little      | 16        | DirectX G2.0 on XBOX360   |
| NZ | z    | Windows                     | Little      | 16        | DirectX G2.0 on WINDOWS   |
| NI | i ?  | iOS/Android/Windows Phone   | Little      | 16        | OpenGL ES 1.1             |
| DS | ?    | Nintendo DS/3DS             | Little      | 16        | ?                         |

## Data Chunks

As the name implies, files in the NN Chunk Format are comprised
of a series of one or more "data chunks", one after another.

A "data chunk" is simply a block of data (structs, arrays, strings, etc.)
that represents a single resource of a specific type.

All known data chunk types are listed in the following chart:

| ID | CC   | Type                                      | Description                                                               |
| -- | ---- | ----------------------------------------- | ------------------------------------------------------------------------- |
| TL | t    | [TEXLIST](texlist.md)                     | A list of textures.                                                       |
| EF | e    | EFFECTLIST                                | A list of effects (shaders).                                              |
| NN | a    | [NODENAMELIST](nodenamelist.md)           | A list of names for the nodes (bones) within an object (a model).         |
| MN | u    | [MATERIALNAMELIST](materialnamelist.md)   | A list of names for the materials within an object (a model).             |
| TN | ?    | MTNAMELIST                                | A list of names for the morph targets within an object (a model).         |
| OB | j/o  | OBJECT                                    | A model. Uses o as its CC if its TEXLIST is embedded, and j otherwise.    |
| MO | m    | [MOTION](motion.md)                       | A node (bone) animation.                                                  |
| MM | f    | [MOTION](motion.md)                       | A morph animation.                                                        |
| MC | d    | [MOTION](motion.md)                       | A camera animation.                                                       |
| ML | ?    | [MOTION](motion.md)                       | A light animation.                                                        |
| MA | v    | [MOTION](motion.md)                       | A material animation.                                                     |
| LI | l    | LIGHT                                     | A light.                                                                  |
| CA | c    | CAMERA                                    | A camera.                                                                 |
| MT | g    | MORPH                                     | A morph target.                                                           |
| NT | ?    | NODE_TREE_OBJECT ?                        | ?                                                                         |
| ME | ?    | MESH_OBJECT ?                             | ?                                                                         |
| SF | ?    | SHADERFILE                                | ?                                                                         |
| SI | ?    | SHADERIDX                                 | ?                                                                         |

Each data chunk has a "root struct" associated with it, which is the starting
point for the data in the chunk, and usually references other data
(structs, arrays, strings, etc.).

For information on the formats of the data contained within these
data chunk types, please refer to the linked pages in the above chart.

## File Types

Just like with the older Ninja format, NN chunk files come in two forms:

- [Binary-Form](#binary-form-file-format)
- [Text-Form](#text-form-file-format) (aka "Ascii-Form")

!!! info
    **The vast majority of NN chunk files in released games are in binary-form.**

    To our knowledge, all released games using NN don't support loading
    text-form files at runtime, meaning that **all NN text-form files
    found in the games are unused developer leftovers**!

Both of these forms represent the same thing: A series of one or more data chunks.
However, they do so in different ways.

File extensions for NN chunk files typically consist of three characters:

1. The "CC" (character-code) of the [platform](#platforms).
2. `n` for [Binary-Form](#binary-form-file-format) files, or `t` for [Text-Form](#text-form-file-format) files.
3. The "CC" (character-code) of the last [data chunk](#data-chunks) contained within the file.

!!! example "Examples"
    | Extension | Meaning                                   |
    | --------- | ----------------------------------------- |
    | .xno      | Xbox \| Binary-Form \| OBJECT             |
    | .gno      | Gamecube \| Binary-Form \| OBJECT         |
    | .xtv      | Xbox \| Text-Form \| MOTION (material)    |
    | .snt      | Sony \| Binary-Form \| TEXLIST            |

## Binary-Form File Format

Binary-Form NN chunk files are represented as a series of consecutive
"binary chunks", each of which begins with the following data:

!!! important
    All instances of this struct (and ONLY this struct) are represented in
    **little-endian**, regardless of the endianness specified by the
    [platform](#platforms). **Everything else** in Binary-Form NN chunk files
    is represented in the endianness specified by the [platform](#platforms).

!!! note
    A struct type with this name does not actually exist (to my knowledge)
    in real Sega NN implementations; these fields are just embedded directly
    within every NNS_BINCNK_ struct. This is just an easier way to think
    about it for our purposes.

```c
struct NNS_BINCNK_HEADER
{
  // The four-character identifier for this binary chunk;
  // specifies what type of binary chunk this is.
  uint32_t Id;

  // The offset to the next four-character identifier in the
  // file, relative to the end of this struct (such that after
  // doing `fread(&OfsNextId, sizeof(OfsNextId), 1, file)`
  // you can just do `fseek(file, OfsNextId, SEEK_CUR)`.
  int32_t OfsNextId;
};
```

Immediately following this struct comes all of the data (structs, strings, etc.)
required to represent the binary chunk. The format of this data depends on
the value of the Id field.

After each binary chunk (including all of its data) has been written, the file
is padded (with null bytes) to a position that is divisible by the "alignment"
specified by the [platform](#platforms) (usually it's 16, but notably, it's
32 on Gamecube/Wii).

What follows is documentation for all known binary chunk types, in the order
that they appear within binary-form NN chunk files.

### Info Chunk

!!! important
    **This chunk is required to be present at the beginning of all binary-form NN chunk files!**
    The Sega NN games I've checked actually rely on this behavior, so you can too.

This binary chunk serves as the header for a binary-form NN chunk file,
and contains info needed to parse the file. It is represented as the
following struct:

```c
struct NNS_BINCNK_FILEHEADER
{
  // Binary chunk header; must be present at the beginning of all binary chunks.
  //
  // The chunk ID is set to "**IF", where "**" is the "ID" of
  // the platform (e.g. "NGIF" for Gamecube binary chunk headers).
  NNS_BINCNK_HEADER ChunkHeader;

  // The number of data chunks in the file.
  int32_t nChunk;

  // The absolute offset to the first data chunk in the file.
  int32_t OfsData;

  // The combined size of all of the data chunks in the file, in bytes, including any padding.
  int32_t SizeData;

  // The absolute offset to the (required) NOF0 binary chunk.
  int32_t OfsNOF0;

  // Size of the (required) NOF0 binary chunk, including its header.
  // Depending on the variant of the format, this size either includes
  // the padding that comes after the NOF0 binary chunk, or it doesn't.
  // 
  // TODO: Figure out exactly which versions include padding.
  // It seems PSP files and .[x]ncp files don't count the padding,
  // but everything else does??
  int32_t SizeNOF0;

  // 1 in most files, 0 in some newer variants.
  // (Maybe they just stopped using this value?)
  int32_t Version;
};
```

!!! todo
    Further research NIFL header chunks and add info on those.

### Data Chunk Header

After the [Info Chunk](#info-chunk), comes the main contents of the file:
A sequence of one or more [data chunks](#data-chunks).

In binary-form NN chunk files, each data chunk begins with the following struct:

```c
struct NNS_BINCNK_DATAHEADER
{
  // Binary chunk header; must be present at the beginning of all binary chunks.
  //
  // The chunk ID is set to the "ID" of the platform, followed
  // by the "ID" of the data chunk type being written (e.g.
  // "NXOB" for Xbox OBJECT data chunks).
  NNS_BINCNK_HEADER ChunkHeader;

  // The offset to the root struct that makes up this data chunk
  // (e.g. an offset to a NNS_NODENAMELIST if the chunk type indicates
  // that this is a NODE_NAME data chunk), relative to the
  // position specified by the [OfsData] field from the info chunk.
  //
  // Please refer to the linked pages in the data chunks chart
  // to learn about their root structs.
  int32_t OfsMainData;

  // Always 0 in every file I've seen thus far.
  int32_t Version;
};
```

Immediately following this struct comes all of the data (structs, strings, etc.)
required to represent the data chunk. The format of this data depends on
the value of the Id field.

See the linked pages in the [data chunks chart](#data-chunks).

### Offsets List Chunk

!!! important
    **This chunk is required to be present in all binary-form NN chunk files!**

After all of the data chunks, comes the offsets list chunk.

This binary chunk represents a list of positions for all of the pointers
("offsets") in all of the data chunks in the file, relative to the value
of the `[OfsData]` field from the info chunk.

```c
struct NNS_BINCNK_NOF0HEADER
{
  // Binary chunk header; must be present at the beginning of all binary chunks.
  // 
  // The chunk ID is set to "NOF0".
  NNS_BINCNK_HEADER ChunkHeader;

  // The number of pointer positions listed within this chunk.
  int32_t nData;

  // Padding; must always be 0 in files.
  //
  // This is because some games use this value as a marker that states
  // whether or not the pointers have been "fixed".
  //
  // In those games, after they're done "fixing" all of the pointers
  // listed within this chunk, they will set this value to 1 in memory.
  int32_t Pad;
};
```

Immediately following this struct comes an array of `uint32_t` values
of size `[nData]`. These values represent the positions of every pointer
in all of the data chunks in the file, relative to the `[OfsData]` field
from the info chunk.

Most Sega NN games use this chunk to quickly "fix" all of the pointers
within the data chunks (that is, to convert all of the offsets into
absolute memory addresses that can then just be used as normal pointers).

Some games, however, (namely: Sonic 4 Episode I for Windows Phone) ignore the
values in this chunk, and instead, just manually add `[OfsData]` to
each offset to get an absolute file position whenever they need to jump there.

Regardless of whether the data is actually used or not, it is always
present in valid files.

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
  // Binary chunk header; must be present at the beginning of all binary chunks.
  //
  // The chunk ID is set to "NFN0".
  NNS_BINCNK_HEADER ChunkHeader;

  // Padding; always 0 in files.
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
know when to stop reading if you're reading the file sequentially, one
chunk at a time.

```c
struct NNS_BINCNK_NENDHEADER
{
  // Binary chunk header; must be present at the beginning of all binary chunks.
  //
  // The chunk ID is set to "NEND".
  NNS_BINCNK_HEADER ChunkHeader;

  // Padding; always 0 in files.
  uint32_t Pad[2];
};
```

## Text-Form File Format

Text-form NN chunk files, just like the text-form Ninja chunk model files that precede
them, are text files comprised of code in what is actually a very limited subset of the
C programming language, heavily utilizing special NN types/preprocessor defines, which are,
presumably, defined within the official Sega NN SDK.

This allows them to both be parsable by tooling (it is unclear if they actually do this),
and to be directly `#include`d within the C or C++ files which make up their game's
source code, embedding the data directly within the game's executable!

Their general layout is as follows:

!!! important
    Replace these special phrases in all of the following `text snippets` as follows:

    - `\t`: Replace with one or more tab characters (**NOT** spaces), used to align the text.
    - `TYPE`: Replace with the name of the type currently being written.
    - `NAME`: Replace with the name of whatever you're currently writing.

1. A (required?) "header" comment that is comprised of the following, in order:
    1. The name and version number of the tool used to create this file.
    2. `Create\t: ` followed by the date this file was created in the `ddd MMM dd HH:mm:ss yyyy` .NET DateTime format.
    3. The names of each of the root structs for every data chunk in the file, in this format: `TYPE\t: NAME`, where `TYPE` refers to the root struct's type (e.g. `NNS_TEXFILELIST`). See the linked pages in the [data chunks chart](#data-chunks).
2. One or more data chunks, each of which is comprised of the following, in order:
    1. A comment with the text: `TYPE START`, where `TYPE` refers to the [data chunk's type](#data-chunks) (e.g. `TEXLIST`).
    2. All of the data used by this data chunk, represented as C code comprised heavily of special NN preprocessor macros. See the linked pages in the [data chunks chart](#data-chunks).
    3. A comment with the text: `TYPE END`, where `TYPE` refers to the [data chunk's type](#data-chunks) (e.g. `TEXLIST`).
3. A (required?) comment with the text: `End of File`.

The files also always use tab characters (`\t`) for indentation, rather than spaces.

Here's a sample Text-form NN chunk file, to better understand the format:

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
    All of the following in the above example are type/preprocessor
    defines from the NN library:

    - `NNS_TEXFILE`
    - `TEXFILE`
    - `TF_FILENAME`
    - `TF_FILTER`
    - `NND_MIN_LINEAR_MIPMAP_NEAREST`
    - `NND_MAG_LINEAR`
    - `NNS_TEXFILELIST`
    - `TEXFILELIST`
    - `TFL_N_TEXFILE`
    - `TFL_TEXFILE`

    For a complete list of all of these defines, please refer to the individual pages
    linked in the [data chunks chart](#data-chunks) (for the ones used in this example,
    refer to the [TEXLIST documentation](texlist.md)).

Note that in C, code is parsed sequentially: left-to-right, top-to-bottom.

If a name is used in the file before it has been declared, that's an error.

Thus, the ordering of the data within each data chunk is generally written to
the file in "reverse" order, such that any reference to a value will not be
written until *after* the value it is referencing has been written, avoiding
this problem.

In some cases, the Sega NN exporters will instead declare the value early,
and define it later on in the file, using an extern declaration like so:

!!! example "Example snippet from en_Kyozoress.xto in Sonic '06"
    Here, the `nnvertex_plb_op_en_Kyozoress_head_l__2_w2_Eye` value is
    declared so that it can be referenced by the `VTX_LISTPTR` field in
    `nnvertexdesc_plb_op_en_Kyozoress_head_l__2_w2_Eye`:

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
    `nnvertex_plb_op_en_Kyozoress_head_l__2_w2_Eye`
    value is defined as usual (contents redacted due
    to extreme length):

    ```c
    NNS_VTXTYPE_XB_PW4INCT nnvertex_plb_op_en_Kyozoress_head_l__2_w2_Eye[] =
    {
    	/* ... */
    };
    ```
