---
description: Defines the Sonic Colors Light Field format.
---

# Light Field

Light fields are invisible pieces of geometry utilized by Sonic Colors to tint the color of Sonic, and the world around him, as he runs through the stage. Sadly this mechanic is mostly broken in Sonic Colors: Ultimate, but the files still remain.

## Light Field Format

Light Field data is stored in "stgxxx_lfield.orc" BINA containers, which can be found in "stgxxx_obj.arc" archives for a given stage. The format for these files is as follows:

```csharp
class LightFieldHeader {
    uint signature; // "RLFS"
    uint version = 1; // Always "1".
    uint lfArrayHierarchyDepth; // The depth of the Light Field object entry array hierarchy.
    uint lfArrayCount; // The number of entries in the Light Field object entry array.
    uint lfArrayOffset; // The non-absolute offset to the Light Field object entry array.
    uint aabbTreeCount; // The number of entries in the Light Field AABB (Axis Aligned Bounding Box) tree.
    uint lfAabbTreeOffset; // The non-absolute offset to the Light Field AABB tree.
}

enum LightFieldObjectType : uint8 {
    SPHERE = 0,
    CAPSULE = 1,
    BOX = 2,
    OMNIBOX = 3
}

class LightFieldObjectEntry {
    uint nameOffset; // The non-absolute offset to the object name in the BINA string table.
    int index; // The index of the Light Field object, to be referenced in "stgxxx_config.lua" files.
    LightFieldObjectType type; // The type of the Light Field object.
    uint8 padding1; // Padding to pad out the type field to 2 bytes.
    uint16 childrenAABBTreeEntryIndex; // The index to the bounding box of this node's children in the Light Field AABB tree. 0 if the object node has no children.
    float[5] scale; // The scale of the Light Field object. Data format varies depending on the LightFieldObjectType (see below for more information).
    float[3] position; // The position of the Light Field object in 3D space.
    float[4] rotation; // The rotation of the Light Field object in 3D space.
}

class LightFieldAABBTreeNode {
    int leftNodeIndex; // Index to the left node in the Light Field AABB tree.
    int rightNodeIndex; // Index to the right node in the Light Field AABB tree. If leftNodeIndex is 0, this field serves as an index back into the Light Field object array.
    float[3] bBoxMin; // The minimum bounding box vertex position in 3D space.
    float[3] bBoxMax; // The maximum bounding box vertex position in 3D space.
}
```

### Light Field Object Scale

The contents of the "scale" float array in a LightFieldObjectEntry varies depending on the type of LightField object that has been specified.

Type     | Layout
-------- | -----------
Sphere   | radius, margin, 0.0, 0.0, 0.0
Capsule  | radius, height, margin, 0.0, 0.0
Box      | length, width, height, margin1, margin2
Omnibox  | length, width, height, margin, 0.0

## LightFieldConv XML Layout

LightFieldConv was a tool used by Sonic Team to convert Light Field XML data into "binarc" .src files, in preparation for packing the data into a BINA container. The following example XML data can be used to generate an .src file, similar to that which would have been used to create "stg901_lfield.orc" for the test level discovered in Sonic Colors: Ultimate:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Sonic2010LField version="1.0.0">
    <scene>
        <lfield_array>        
            <node id="LFieldBox_01">
                <lfield type="box">
                    <index>2</index>
                    <box>
                        <length>80.0</length>
                        <width>80.0</width>
                        <height>80.0</height>
                        <margin1>10.0</margin1>
                        <margin2>10.0</margin2>
                    </box>
                    <bbox>
                        <min>-40.0 -20.0 -40.0</min>
                        <max>40.0 60.0 40.0</max>
                    </bbox>
                </lfield>
                <translate>0.0 20.0 -40.0</translate>
                <rotate>0.707107 0.0 0.0 0.707107</rotate>
            </node>
            
            <node id="LFieldCapsule_01">
                <lfield type="capsule">
                    <index>3</index>
                    <capsule>
                        <radius>30.0</radius>
                        <height>100.0</height>
                        <margin>5.0</margin>
                    </capsule>
                    <bbox>
                        <min>25.550200 -30.0 -139.162003</min>
                        <max>156.261002 30.0 -8.451360</max>
                    </bbox>
                </lfield>
                <translate>90.905502 79.9999 -73.806702</translate>
                <rotate>0.923880 0.0 -0.382683 -0.000001</rotate>
            </node>
            
            <node id="LFieldSphere_01">
                <lfield type="sphere">
                    <index>4</index>
                    <sphere>
                        <radius>40.0</radius>
                        <margin>10.0</margin>
                    </sphere>
                    <bbox>
                        <min>-126.564003 -40.0 42.505001</min>
                        <max>-46.564201 40.0 122.504997</max>
                    </bbox>
                </lfield>
                <translate>-86.564201 0.0 82.504997</translate>
                <rotate>0.0 0.0 0.0 1.0</rotate>
            </node>
            
            <node id="LFieldOmniBox_01">
                <lfield type="omnibox">
                    <index>5</index>
                    <omnibox>
                        <length>40.0</length>
                        <width>40.0</width>
                        <height>40.0</height>
                        <margin1>10.0</margin1>
                        <margin2>0.0</margin2>
                    </omnibox>
                    <bbox>
                        <min>60.0 -40.0 40.0</min>
                        <max>140.0 40.0 120.0</max>
                    </bbox>
                </lfield>
                <translate>100.0 0.0 80.0</translate>
                <rotate>0.0 0.0 0.0 1.0</rotate>
            </node>
        </lfield_array>
    </scene>
</Sonic2010LField>
```
