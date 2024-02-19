---
description: Sonic Generations camera type list
---

# Camera Type List

## ObjCamera
| Camera Type     | Description                                                                                                              |
|-----------------|--------------------------------------------------------------------------------------------------------------------------|
| ObjCameraFix    | Stays in its place while pointing at the coordinates defined in TargetPosition                                           |
| ObjCameraNormal | The regular camera                                                                                                       |
| ObjCameraPan    | Has a different behaviour depending on `CameraPositionMode`: `0` - Stays in its place while pointing at Sonic; `1` - ??? |
| ObjCameraPoint  | Follows Sonic, while pointing at the camera object's location                                                            |

## Camera Collisions
| Collision Type     | Description                                                                                                              |
|--------------------|--------------------------------------------------------------------------------------------------------------------------|
| ChangeVolumeCamera | Changes the camera used to the one defined in `Target`                                                                   |