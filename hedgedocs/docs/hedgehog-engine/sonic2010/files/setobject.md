---
description: Defines the Sonic Colors Set Object format.
---

# Set Object

The Set Object file format is used in Sonic Colors in order to define stage object layout, serving the same purpose as "Set" and "setdata" XML files in Sonic Unleashed and Sonic Generations respectively. However, unlike in those games, this data is actually stored in binary format for greater efficiency, with the same practice being carried forward in all future titles by Sonic Team.

## Set Object Format

Set object data is stored in "stgxxx_obj_xx.orc" BINA containers, which can be found in "set" folder in "sonic2010_0.cpk". The objects themselves are arranged into 8 "layers", separated into files with suffixes from 00 to 07 in the "set" folder for each stage. In the original Wii release, the data is stored in big-endian format.

```csharp
class SetObjectData {
    uint signature = 1397703242; // "SOBJ" ASCII in big-endian.
    uint version = 1; // Always "1".
    uint objectDictCount; // The number of unique object types.
    uint objectDictOffset; // The non-absolute offset to the object dictionary array.
    uint bvhTreeOffset; // The non-absolute offset to the bounding volume hierarchy tree. This is unused in Colors.
    uint objectOffsetArrayOffset; // The non-absolute offset to the array of offsets to all the objects stored in the file.
    uint objectCount; // The number of objects stored in the file.
    uint bvhTreeNodeCount; // The number of nodes in the bounding volume hierarchy tree.
    uint objectInstanceCount; // The total number of object instances in the object instance array.

    SetObjectDictNode[objectDictCount] objectDictArray; // The dictionary of object types;
    SetObjectIndicesArrayNode[objectDictCount] objectIndicesArray; // An array of nodes, that each store indices to objects in the object array, grouped by object type.
    uint[objectCount] objectOffsetArray; // An array of offsets to all of the objects stored in the file, indexed into by SetObjectIndicesArrayNode entries.
    SetObject[objectCount] objectArray; // The "array" of objects. The term "array" is used loosely here as the objects are not fixed size, due to the custom parameters that can be defined for them.
    SetObjectInstance[objectInstanceCount] objectInstanceArray; // The array of object instances.
}

// One node for every object type in the SOBJ file.
class SetObjectDictNode {
    uint objectTypeNameOffset; // The non-absolute offset to the object type name in the BINA string table.
    uint objectIndicesCount; // The number of indices in the object indices array that are of the corresponding type.
    uint objectIndicesOffset; // The non-absolute offset to the array of object indices for the corresponding type.
}

// One node for every object type in the SOBJ file.
class SetObjectIndicesArrayNode {
    uint[objectIndicesCount] objectIndices; // An array of indices of all the objects of the corresponding type in the object indices array.
}

enum ReplicationAlignment : uint8 {
    NONE = 0,
    GROUND = 1,
    GUIDE = 2,
    GRIND = 3,
    SV = 4, // Side View
    CIRCLE = 5
}

// setcvtr actually treats these enum values as 4 bit uints, with each padded out with a second 4 bit uint to the length of a uint8. For clarity this is documented as a uint8.
enum ReplicationLayout : uint8 {
    FRONT = 0x00,
    SIDE = 0x10,
    UP = 0x20
}

// Set objects can be thought of as templates for object instances. Here common parameters can be defined for later use by multiple instances of the same object.

class SetObject {
    uint replicationObjectIDComposite; // Composite field of object replication parameters (ReplicationAlignment + ReplicationLayout) and the object ID (uint16), stored as a single uint.
    uint classId; // The unique ID assigned to the object class in the SetEdClass XML file.
    uint unknownOffset1 = 0; // Unknown offset, hardcoded to null in setcvtr. Likely intended to be an offset to a node in the unused bvh tree.
    float interval; // The interval between replicated objects.
    float rangeIn; // The distance from Sonic where the object should become visible.
    float rangeOut; // The distance from Sonic where the object should disappear.
    uint objectInstanceArrayOffset; // The non-absolute offset to the object instance array.
    uint objectInstanceArrayCount; // The number of instances in the instance array.
    uint unknownInt = 0; // Unknown uint, hardcoded to 0 in setcvtr.

    // ... Object-specific parameters, defined in SetEdClass XML "<class>" entries.

}

// Object instances, or "units" as they are referred to in Sonic Team's "setcvtr" development tool, are instances of SetObject templates that are described above. By using this system of separating object units from objects themselves, muliple objects can be defined in a level with the same parameters, with minimal repitition.

class SetObjectInstance {
    float[3] position; // The position of the object instance in 3D space.
    float[3] rotation; // The rotation of the object instance in 3D space.
}
```

## setcvtr XML Layouts

"setcvtr" was a tool used by Sonic Team with the purpose of converting set data XML files into binarc ".src" files, in preparation for packing data into BINA containers. This allowed the team to define objects in XML format to make development and testing easier. The tool takes two XML files as input, which are explained below.

### SetEdClass XML Layout

The "SetEdClass" XML layout is used to define the various types of objects, and their respective parameters, that can be utilized within stages.

### SetObject XML Layout

The "SetObject" XML layout is used to define objects, and their respective "units", that should be placed within a stage.