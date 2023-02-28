---
description: HSON Format Specification
---

# HSON Format

**The Hedgehog Set Object Notation Format** ("HSON") is a custom JSON-based file format
designed collaboratively by **Dario**, **Radfordhound**, **ĐeäTh**, **Skyth**, and
**Sajid** to represent object placement in a "universal" (non-game/editor-specific) way.

It was designed with the following principles in-mind:

- **Be universal.** Specifically, it must be able to represent object placement data from *at least* any mainline 3D Sonic game in a non-game/editor-specific way.
- **Be simple.** Specifically, it must not be difficult to parse and to generate.
- **Be flexible.** Specifically, it must be able to be adapted to do anything future games and tools may require.

## JSON Schema

The official JSON Schema for the HSON Format can be found at the [hson-schema GitHub repository](https://github.com/hedge-dev/hson-schema).

It's useful (but not necessary) to validate .hson files against this schema in editors which support
this feature, as doing so allows you to have autocompletion, descriptions of each property, and
data validation.

To validate *all* .hson files against the schema in your editor of choice, refer to the instructions
in the README from the above repository.

To manually validate against the schema on a per-file basis, include the following line at the
top-level of your HSON file(s), before the HSON file format [version parameter](#1-version).

```json
"$schema": "https://raw.githubusercontent.com/hedge-dev/hson-schema/main/hson.schema.json",
```

If writing tooling that generates HSON, consider having your tooling write this line to generated files.

## Implementations

As of the time of writing, the following known implementations exist:

### C&#35 {#csharp}

- **[libHSON](https://github.com/hedge-dev/libHSON-csharp):**
    The official C# implementation of HSON. Allows for simple, efficient, feature-complete, two-way serialization of HSON data.

### C++ {#cpp}

- **[HedgeLib](https://github.com/Radfordhound/HedgeLib):**
    Radfordhound's open-source library and collection of tools that aims to makes modding games in the Sonic the Hedgehog franchise easier. It contains a feature-complete two-way HSON implementation, which is used in its level-editing tooling.

## Example

The following is an example file in the HSON Format, which represents a "project" called "Sample Project"
that contains 5 objects.

This example file will be referenced periodically throughout the [format specification](#format-specification).

```json
{
  "$schema": "https://raw.githubusercontent.com/hedge-dev/hson-schema/main/hson.schema.json",
  "version": 1,
  "metadata": {
    "name": "Sample Project",
    "author": "Takashi Iizuka, Morio Kishimoto",
    "date": "2023-02-09T22:38:42Z",
    "version": "1.0.0",
    "description": "green hill is looking a lot more like sand hill rn",
    "myCustomEditor": {
      "viewportTabIndex": 0
    }
  },
  "objects": [
    {
      "id": "{fd3e6bc9-5d2d-4da8-a22d-f88e709b3e48}",
      "name": "Spring #1",
      "type": "Spring",
      "position": [ 100.0, 0.0, 0.0 ],
      "rotation": [ 0.0, 0.0, 0.0, 1.0 ],
      "scale": [ 1.0, 1.0, 1.0 ],
      "isEditorVisible": true,
      "isExcluded": false,
      "parameters": {
        "tags": {
          "RangeSpawning": {
            "rangeIn": 100.0,
            "rangeOut": 20.0
          }
        },
        "visual": "Normal",
        "firstSpeed": 420,
        "outOfControl": 2.5,
        "isHorming": true,
        "actions": [
          {
            "action": "On",
            "objectIds": [
                "{2737e92f-4842-46cb-a590-e074f7b882f0}",
                "{38285a58-9969-4c5f-a649-b91440962a71}"
            ],
            "delayTime": 0.5
          },
          {
            "action": "Off",
            "objectIds": [],
            "delayTime": 0.0
          },
          {
            "action": "Off",
            "objectIds": [],
            "delayTime": 0.0
          }
        ],
      }
    },
    {
      "type": "Ring"
    },
    {
      "id": "{2737e92f-4842-46cb-a590-e074f7b882f0}",
      "parentId": "{fd3e6bc9-5d2d-4da8-a22d-f88e709b3e48}",
      "type": "Ring",
      "position": [ 0.0, 1.0, 0.0 ],
      "parameters": {
        "visibility": "Visible",
        "respawnTime": 0.0
      },
      "myCustomValue": 893.5,
      "myCustomEditor": {
        "presetPlacementType": "LINE",
        "presetPlacementDistance": 1.0
      }
    },
    {
      "id": "{38285a58-9969-4c5f-a649-b91440962a71}",
      "instanceOf": "{2737e92f-4842-46cb-a590-e074f7b882f0}",
      "position": [ 0.0, 2.0, 0.0 ],
      "parameters": {
        "respawnTime": 0.5
      }
    },
    {
      "id": "{81fdcaff-aa37-4c47-a665-5b6265a6b780}",
      "parentId": "{00000000-0000-0000-0000-000000000000}",
      "type": "DashPanel"
    }
  ]
}

```

## Format Specification

What follows is a specification of all standard properties supported by the HSON Format.

!!! important
    All of the following properties are **OPTIONAL**, unless otherwise specified.

## 1. version

!!! info
    - **Type**: `number`
    - **Minimum**: 1

    This value is **REQUIRED** to be present in all HSON files.

**The version of the HSON format being used by this file.** It is represented as a number that is restricted in the following ways:

- It must have a zero fractional part (e.g. ```1.5``` would not be allowed, but ```1.0``` or ```1``` are).
- It must be greater than or equal to 1.

Because of these restrictions, it is valid for tooling to parse this value into an ```unsigned int```.

Currently, version 1 is the latest version.

## 2. metadata

!!! info
    - **Type**: `object`

**Metadata for the project represented by this file.**

It is intended to be used purely for tooling display purposes.

metadata is represented as a JSON `object` consisting of the following properties:

### 2.1. name

!!! info
    - **Type**: `string`

**The name of the project represented by this file.**

### 2.2. author

!!! info
    - **Type**: `string`

**The author(s) of the project represented by this file.**

If the project has multiple authors, we recommend writing each author's
name with a comma and space separating them, like so:

!!! example
    ```json
    "author": "Me, Myself, I"
    ```

With that said, this is a recommendation and by no means a requirement.

**Tooling should treat this as an arbitrary string in no particular format.**

### 2.3. date

!!! info
    - **Type**: `string`

**The date/time the project was created at**, represented as a string in the [RFC 3339 format](https://www.rfc-editor.org/rfc/rfc3339)
(a similar standard to ISO 8601).

**It is invalid to represent the date using any other format.**

This limitation makes parsing dates in tooling a lot easier.

!!! example "Getting the current DateTime in RFC 3339 format programmatically"
    Feel free to copy-paste any of these code snippets and do what you want with them.

    **C#:**
    
    ```csharp
    public static string GetRFC3339Time()
    {
        return DateTime.UtcNow.ToString("yyyy-MM-ddTHH:mm:ssK",
            CultureInfo.InvariantCulture);
    }
    ```

    **C++11:**

    ```cpp
    #include <string>
    #include <stdexcept>
    #include <ctime>

    std::string getRFC3339Time()
    {
        char buf[32]; // This is a few extra characters than should be necessary, just to be safe.
        const auto time = std::time(nullptr);
        const auto len = std::strftime(buf, sizeof(buf), "%FT%TZ", std::gmtime(&time));

        if (!len)
        {
            throw std::runtime_error("Failed to get RFC 3339 format time");
        }

        return std::string(buf, len);
    }
    ```

    **C:**

    ```c
    #include <time.h>

    /*
      Returns 0 on failure, or the number of bytes written
      into buf (not including the null terminator) on success.
    */
    int getRFC3339Time(size_t bufSize, char* buf)
    {
        const time_t time = time(NULL);
        return strftime(buf, bufSize, "%FT%TZ", gmtime(&time));
    }
    ```

### 2.4. version

!!! info
    - **Type**: `string`

**The version number of the project**, represented as a string.

How you want to version your project is up to you; these are all valid:

!!! example "Examples"
    ```json
    "version": "1.0.0"
    ```
    ```json
    "version": "1"
    ```
    ```json
    "version": "beta release"
    ```

**Tooling should treat this as an arbitrary string in no particular format.**

### 2.5. description

!!! info
    - **Type**: `string`

**The description of the project represented by this file.**

## 3. objects

!!! info
    - **Type**: `array`

**An array containing all of the objects contained within the project.**

Each object is represented as a JSON `object` consisting of the following properties:

### 3.1. id

!!! info
    - **Type**: `string`

**The UUID (aka GUID) of the object**, represented as a case-insensitive string
formatted like this: `{11111111-2222-3333-4444-555555555555}`.

Note that it is enclosed in curly brackets; this is to make it clear that it is
supposed to be parsed as a UUID, and **NOT** as a number.

The object's UUID is used to reference the object throughout the project.

It must be unique throughout the project; that is, **no two objects within the same
project are allowed to have the same UUID.** That's what makes them *UUIDs*.

It also **cannot be set to the following value**: `{00000000-0000-0000-0000-000000000000}`,
as this value is reserved for "null" object references.

This property can be omitted (leaving the object without a specified UUID) if
the object never needs to be referenced. This helps to save some space.

Tools are free to generate their own UUIDs for objects without a specified UUID, or
to just think of the object as not having a UUID. Whichever is more convenient.

!!! example "Examples"
    **Valid UUID** (lowercase):

    ```json
    "id": "{fd3e6bc9-5d2d-4da8-a22d-f88e709b3e48}"
    ```

    **Valid UUID** (uppercase):

    ```json
    "id": "{FD3E6BC9-5D2D-4DA8-A22D-F88E709B3E48}"
    ```

    **Invalid UUID** (no enclosing curly brackets):

    ```json
    "id": "fd3e6bc9-5d2d-4da8-a22d-f88e709b3e48"
    ```

    **Invalid UUID** (not a UUID):

    ```json
    "id": "{2}"
    ```

    **Invalid UUID** (the special "null" UUID value is not valid to use as the object's id):

    ```json
    "id": "{00000000-0000-0000-0000-000000000000}"
    ```

    **Valid object references** (the special "null" UUID value is valid to use in object references):

    ```json
    "parentId": "{00000000-0000-0000-0000-000000000000}",
    "instanceOf": "{00000000-0000-0000-0000-000000000000}"
    ```

### 3.2. name

!!! info
    - **Type**: `string`

**The name of the object.** This is an arbitrary string that can be anything you want.

It is intended to be used purely for tooling display purposes.

### 3.3. parentId

!!! info
    - **Type**: `string`

**The [id](#31-id) of this object's parent object**, or a null UUID.

If specified as a valid, non-null UUID, this object is a child of the object with the
given UUID, meaning that the object's transform (represented via [`position`](#36-position),
[`rotation`](#37-rotation), and [`scale`](#38-scale)) is relative to the parent's transform
(which is relative to its parent's transform, and so on).

Otherwise, if it is not specified, or is specified as a null UUID,
this object has no parent object, and the transform is global.

!!! example "Parenting Example"
    ```json
    {
      "id": "{2737e92f-4842-46cb-a590-e074f7b882f0}",
      "parentId": "{fd3e6bc9-5d2d-4da8-a22d-f88e709b3e48}",
      "type": "Ring",
      "position": [ 0.0, 1.0, 0.0 ],
      "parameters": {
        "visibility": "Visible",
        "respawnTime": 0.0
      },
      "myCustomValue": 893.5,
      "myCustomEditor": {
        "presetPlacementType": "LINE",
        "presetPlacementDistance": 1.0
      }
    }
    ```

    In this snippet from [the example file](#example), the object has specified
    a position of `[ 0.0, 1.0, 0.0 ]`, and a parentId of `{fd3e6bc9-5d2d-4da8-a22d-f88e709b3e48}`,
    which means that its transform is local to the transform of the
    object which uses that UUID (not included in this snippet).

    This parent object has a position of `[ 100.0, 0.0, 0.0 ]`.

    So, the above object's global position is `[ 100.0, 1.0, 0.0 ]`.

!!! example "Null Reference Example"
    ```json
    {
      "id": "{81fdcaff-aa37-4c47-a665-5b6265a6b780}",
      "parentId": "{00000000-0000-0000-0000-000000000000}",
      "type": "DashPanel"
    }
    ```

    In this snippet from [the example file](#example), the object has specified
    a parentId of `{00000000-0000-0000-0000-000000000000}` (the special UUID
    null value), which is equivalent to not specifying a parentId. This means
    that this object has no parent.

### 3.4. instanceOf

!!! info
    - **Type**: `string`

**The [id](#31-id) of the object to be instanced**, or a null UUID.

If specified as a valid, non-null UUID, this object is an instance of the object with the
given UUID, meaning that it will inherit **ALL** *unspecified properties* from the
instanced object, **with the notable exception of the [`id`](#31-id) property**, instead
of falling back to the usual defaults.

Note that it will **NOT** affect the object's *specified properties*; these will
effectively "override" any properties taken from the instanced object.

Otherwise, if it is not specified, or is specified as a null UUID,
this object is not an instance.

!!! example
    ```json
    {
      "id": "{2737e92f-4842-46cb-a590-e074f7b882f0}",
      "parentId": "{fd3e6bc9-5d2d-4da8-a22d-f88e709b3e48}",
      "type": "Ring",
      "position": [ 0.0, 1.0, 0.0 ],
      "parameters": {
        "visibility": "Visible",
        "respawnTime": 0.0
      },
      "myCustomValue": 893.5,
      "myCustomEditor": {
        "presetPlacementType": "LINE",
        "presetPlacementDistance": 1.0
      }
    },
    {
      "id": "{38285a58-9969-4c5f-a649-b91440962a71}",
      "instanceOf": "{2737e92f-4842-46cb-a590-e074f7b882f0}",
      "position": [ 0.0, 2.0, 0.0 ],
      "parameters": {
        "respawnTime": 0.5
      }
    }
    ```

    In this snippet from [the example file](#example), the second listed object (UUID:
    `38285a58-9969-4c5f-a649-b91440962a71`) is an instance of the first listed object
    (UUID: `2737e92f-4842-46cb-a590-e074f7b882f0`).

    As such, it will inherit all of the *unspecified properties* from the first object, including
    the [`parentId`](#33-parentid), [`type`](#35-type), `myCustomValue`, and `myCustomEditor`
    properties, as well as the `visibility` parameter.

    It will **NOT**, however, inherit the *specified properties*, including the [`id`](#31-id),
    [`instanceOf`](#34-instanceof), and [`position`](#36-position) properties, as well as the
    `respawnTime` parameter.

    This means that the second object in the above snippet will be equivalent to the following object:

    ```json
    {
      "id": "{38285a58-9969-4c5f-a649-b91440962a71}",
      "parentId": "{fd3e6bc9-5d2d-4da8-a22d-f88e709b3e48}",
      "type": "Ring",
      "instanceOf": "{2737e92f-4842-46cb-a590-e074f7b882f0}",
      "position": [ 0.0, 2.0, 0.0 ],
      "parameters": {
        "visibility": "Visible",
        "respawnTime": 0.5
      },
      "myCustomValue": 893.5,
      "myCustomEditor": {
        "presetPlacementType": "LINE",
        "presetPlacementDistance": 1.0
      }
    }
    ```

    As you can see, this is a simple, yet powerful system that allows for many possibilities.

!!! note
    UUIDs have a special exception; they **never** get inherited from the instanced object.

    For example:

    ```json
    {
      "id": "{AAAAAAAA-AAAA-AAAA-AAAA-AAAAAAAAAAAA}",
      "type": "Ring"
    },
    {
      "instanceOf": "{AAAAAAAA-AAAA-AAAA-AAAA-AAAAAAAAAAAA}"
    }
    ```

    The second object listed in the above example will inherit all
    properties from the first object, *except* for the [`id`](#31-id).

    This is due to the fact that every valid object must have its
    own unique UUID.

### 3.5. type

!!! info
    - **Type**: `string`

    This value is **REQUIRED** to be present, **unless this object is an
    [instance of](#34-instanceof) another object**, in which case, it is
    optional, as the type will just be taken from the instanced object.

**The type of the object** (e.g. "Spring", "Ring", etc.).

Note that this value is not game-specific and can be set to anything,
with one exception: **it is not valid for type to be an empty string**.

### 3.6. position

!!! info
    - **Type**: `array`
    - **Default**: `[ 0.0, 0.0, 0.0 ]`

**The position of the object within 3D space.** Represented as a three-dimensional array
of `number`s, representing a vector3 using left-handed coordinates (X-right, Y-up, and Z-forward),
and meters as its units.

If this object is a child of another object, this position value is local to the transform
of the parent object (which is local to the transform of its parent, and so on).

Otherwise, this position value is global.

If this property is not specified, the value `[ 0.0, 0.0, 0.0 ]` will be used as a fallback.

### 3.7. rotation

!!! info
    - **Type**: `array`
    - **Default**: `[ 0.0, 0.0, 0.0, 1.0 ]`

**The rotation of the object within 3D space.** Represented as a four-dimensional array
of `number`s, representing a quaternion using left-handed coordinates.

If this object is a child of another object, this rotation value is local to the transform
of the parent object (which is local to the transform of its parent, and so on).

Otherwise, this rotation value is global.

If this property is not specified, the value `[ 0.0, 0.0, 0.0, 1.0 ]` will be used as a fallback.

!!! note
    Rotation values **must** be represented as a four-dimensional array representing a quaternion.

    It is not valid to represent rotation values using other methods, such as by using
    three-dimensional arrays representing euler angles or binary angle measurement (BAMS).

    When dealing with formats that utilize these (or other) methods, tooling must
    convert to/from quaternions as necessary.

### 3.8. scale

!!! info
    - **Type**: `array`
    - **Default**: `[ 1.0, 1.0, 1.0 ]`

**The scale of the object within 3D space.** Represented as a three-dimensional array
of `number`s, representing a vector3 using left-handed coordinates (X-right, Y-up, and Z-forward),
and meters as its units.

If this object is a child of another object, this scale value is local to the transform
of the parent object (which is local to the transform of its parent, and so on).

Otherwise, this scale value is global.

If this property is not specified, the value `[ 1.0, 1.0, 1.0 ]` will be used as a fallback.

### 3.9. isEditorVisible

!!! info
    - **Type**: `boolean`
    - **Default**: `true`

**Whether the object should be visible in the editor's 3D display** (as applicable).
Note that this is purely for editors, and has no effect on whether the object is visible in-game.

When converting from HSON to game-specific file(s), tooling should ignore this value.

If this property is not specified, the value `true` will be used as a fallback.

### 3.10. isExcluded

!!! info
    - **Type**: `boolean`
    - **Default**: `false`

**Whether the object should be excluded from game data.**

If specified as `true`, editors should (as applicable) hide the object from 3D display,
but still show it in the object hierarchy as a disabled object, and provide a mechanism
for users to un-exclude it.

When converting from HSON to a game format, tooling should treat excluded objects as if
they do not exist, by simply not writing them to the resulting game-specific file(s).

If this property is not specified, the value `false` will be used as a fallback.

### 3.11. parameters

!!! info
    - **Type**: `object`

**All named parameters specific to this object type and/or game.** For example, the `firstSpeed`
parameter for objects of the `Spring` type in Sonic Frontiers, which specifies the speed
the object will launch the player off with.

This is the place to put all parameters that are specific to objects of the specified [`type`](#35-type).
It's also a great place to put game-specific parameters, such as object visibility ranges.

Any number of properties of any JSON type are allowed here, all of which are always entirely optional.

Tooling should treat this as an arbitrary list of key-value pairs, and provide some mechanism that
allows the user to modify **ALL** of them as they please. It does not, however, have to provide a
mechanism to add, remove, or edit the type of these parameters, as this may be undesirable depending
on your use-case.

Tooling should not require any of these parameters to be present. When converting, tooling should,
instead, lookup each parameter by its name as needed, and either error-out or fallback to a
default value if a required parameter is not present.

**Note that the following are not allowed to be used as parameter names:**

- Empty strings
- Strings which contain forward slashes

!!! info
    The "no forward slash" rule allows tooling to access parameters by "path", like so:
    ```json
    "parameters": {
      "tags": {
        "RangeSpawning": {
          "rangeIn": 100.0,
          "rangeOut": 20.0
        }
      }
    }
    ```

    - "`tags/RangeSpawning/rangeIn`": `100.0`
    - "`tags/RangeSpawning/rangeIn`": `20.0`

## Custom Properties

In addition to all of the standard properties listed in the above specification, it is also
completely valid to have your own custom properties which are not part of the specification,
as demonstrated with the ```myCustomEditor``` and ```myCustomValue``` properties shown
in [the example file](#example).

If you use custom properties, it's highly recommended to place them in a property named after
your tooling, as demonstrated with the ```myCustomEditor``` properties in the example.

```json
"myCustomEditor": {
  "presetPlacementType": "LINE",
  "presetPlacementDistance": 1.0
}
```

Doing this helps to reduce potential name collisions with custom properties from other
tools, which might end up sharing the same name(s).

If your custom property is intended to be used across multiple tools (e.g. an unofficial
"extension" to the HSON format), then it's recommended to ignore the above advice and just
use the custom property directly instead, as demonstrated with the ```myCustomValue```
property in the example.

```json
"myCustomValue": 893.5,
```

**Note that the following are not allowed to be used as custom properties names:**

- Names which are used for properties that are part of the HSON specification
- Empty strings
- Strings which contain forward slashes

!!! info
    The "no forward slash" rule allows tooling to access custom properties by "path", like so:
    ```json
    "myCustomEditor": {
      "presetPlacementType": "LINE",
      "presetPlacementDistance": 1.0
    }
    ```

    - "`myCustomEditor/presetPlacementType`": `"LINE"`
    - "`myCustomEditor/presetPlacementDistance`": `1.0`
