---
description: Defines the Sonic Colors Set Object format.
---

# Set Object

The Set Object file format is used in Sonic Colors in order to define stage object layout, serving the same purpose as "Set" and "setdata" XML files in Sonic Unleashed and Sonic Generations respectively. However, unlike in those games, this data is actually stored in binary format for greater efficiency, with the same practice being carried forward in all future titles by Sonic Team.

## Set Object Format

Set object data is stored in "stgxxx_obj_xx.orc" BINA containers, which can be found in "set" folder in "sonic2010_0.cpk". The objects themselves are arranged into 8 "layers" for each stage, separated into files with suffixes from 00 to 07 in the "set" folder. In the original Wii release, the data is stored in big-endian format.

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

// Object instances, or "units" as they are referred to in Sonic Team's "setcvtr" development tool, are instances of SetObject templates that are described above. By using this system of separating object units from objects themselves, clusters of objects can be defined in a level with the same parameters, with minimal repitition.

class SetObjectInstance {
    float[3] position; // The position of the object instance in 3D space.
    float[3] rotation; // The rotation of the object instance in 3D space.
}
```

## setcvtr XML Layouts

"setcvtr" was a tool used by Sonic Team with the purpose of converting set data XML files into binarc ".src" files, in preparation for packing data into BINA containers. This allowed the team to define objects in XML format to make development and testing easier. The tool takes two XML files as input, which are explained below.

### SetEdClass XML Layout

The "SetEdClass" XML layout is used to define the various types of objects, and their respective parameters, that can be utilized within stages. The following XML demonstrates how a SetEdClass XML can be defined, alongside object classes and parameters:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<SetEdClass>
    <class name="DummyObjectClass1" crc="1">
        <param_desc_array>
            <param_desc name="boolParam" type="bool" />
            
            <param_desc name="sint8Param" type="sint8" default="1" />
            <param_desc name="sint16Param" type="sint16" />
            <param_desc name="sint32Param" type="sint32" />
            
            <param_desc name="uint8Param" type="uint8" />
            <param_desc name="uint16Param" type="uint16" />
            <param_desc name="uint32Param" type="uint32" />
            
            <!--
                Accepts normal integers, but doesn't appear to take hex input correctly.
            -->
            <param_desc name="uint32HexParam" type="uint32_hex" />
            
            <param_desc name="floatParam" type="float" />

            <!--
                Arrays are not fixed size at the class level, count is declared when the parameter is used in the SetObject XML.
            -->
            <param_desc name="sint32ArrayParam" type="array_sint32" />
            <param_desc name="floatArrayParam" type="array_float" />
        </param_desc_array>
    </class>
    
    <class name="DummyObjectClass2" crc="2">
        <param_desc_array>
            <param_desc name="enumParam" type="enum" default="test2">
                <!--
                    When used in the SetObject XML, numbers can be also used in place of item names.
                -->
                <item name="enum1" caption="Enum 1 Description" />
                <item name="enum2" caption="Enum 2 Description" />
                <item name="enum3" caption="Enum 3 Description" />
            </param_desc>
            
            <param_desc name="bitsetParam" type="bitset">
                <field name="bit1" pos="0" />
                <field name="bit2" pos="1" />
                <field name="bit3" pos="2" />
                <field name="bit4" pos="3" />
            </param_desc>
            
            <!--
                Valid parameter type, but doesn't appear to function correctly - causes setcvtr to fail on declaration.
            -->
            <!-- <param_desc name="stringParam" type="string" /> -->
            
            <param_desc name="positionParam" type="position" />
            
            <param_desc name="targetParam" type="target" />
            
        </param_desc_array>
    </class>
</SetEdClass>
```

### SetObject XML Layout

The "SetObject" XML layout is used to define objects, and their respective "units", that should be placed within a stage. The following XML demonstrates how a SetObject XML can be defined, utilizing objects from the SetEdClass in the previous example and defining the parameters:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<SetObject>
    <object id="1" class="DummyObjectClass1" range_in="100" range_out="120">
        <param_array>
            <param name="boolParam">true</param>
            
            <param name="sint8Param">5</param>
            <param name="sint16Param">10</param>
            <param name="sint32Param">15</param>
            
            <param name="uint8Param">20</param>
            <param name="uint16Param">25</param>
            <param name="uint32Param">30</param>
            
            <param name="uint32HexParam">100</param>
            
            <param name="floatParam">1.5</param>
            
            <param name="sint32ArrayParam" count="5">1 2 3 4 5</param>
            <param name="floatArrayParam" count="3">1 2 3</param>
        </param_array>
        
        <unit_array interval="0" alignment="none" layout="front">
            <unit position="10 10 10" rotation="0.0 0.0 0.0"/>
            <unit position="30 30 30" rotation="0.0 0.0 0.0"/>
            <unit position="50 50 50" rotation="0.0 0.0 0.0"/>
        </unit_array>
    </object>
    
    <object id="2" class="DummyObjectClass2" range_in="110" range_out="130">
        <param_array>
            <!--
                Bits are set to true by defining them in the parameter. If a bit is omitted, it's set to false.
            -->
            <param name="bitsetParam">
                <bit name="bit1" />
                <bit name="bit2" />
                <bit name="bit4" />
            </param>
            
            <param name="enumParam">enum2</param>
            
            <!-- <param name="stringParam">demostring</param> -->
            
            <param name="positionParam">10 20 30</param>
            
            <param name="targetParam">1</param>
        </param_array>
        <unit_array interval="1" alignment="circle" layout="side">
            <unit position="5 5 5" rotation="0.707107 0.0 0.0"/>
            <unit position="25 25 25" rotation="0.923880 0.0 -0.382683"/>
        </unit_array>
    </object>
</SetObject>
```
