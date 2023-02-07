---
description: List of functions that can be used in Sonic Frontiers' LUA scripts
---

# Functions
!!! warning
    This list is still a work in progress! Any additions and updates are greatly appreciated!

Functions are listed below in the following format:
```
Function(arguments, ...) : returnType
```
---


### 🗒️ AchivementUnlock(string, number) : unknown
#### Description
Unlocks an achievement.

#### Input Parameters
- (^^**string**^^, number): Name of the achievement to unlock
- (string, ^^**number**^^): *Unknown...*

#### Return Value
*Unknown...*

### 🗒️ ActivityComplete(number) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ ActivityStart(number) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ ActivityTaskComplete(number, number) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ ActivityTaskEnd() : unknown
#### Description
This function is unused.
#### Parameters
*Unknown...*
#### Return Value
*Unknown...*

### 🗒️ ActivityTaskStart(number, number) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ AddPracticeNotifierPermissionDeny(string) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ AmbSoundCoordinator() : unknown
#### Description
This function is unused.
#### Parameters
*Unknown...*
#### Return Value
*Unknown...*

### 🗒️ AmbSoundEmitterBaseNoise() : unknown
#### Description
This function is unused.
#### Parameters
*Unknown...*
#### Return Value
*Unknown...*

### 🗒️ AmbSoundEmitterNearPoint() : unknown
#### Description
This function is unused.
#### Parameters
*Unknown...*
#### Return Value
*Unknown...*

### 🗒️ AmbSoundEmitterRelativeWind() : unknown
#### Description
This function is unused.
#### Parameters
*Unknown...*
#### Return Value
*Unknown...*

### 🗒️ AutoSave(string) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ BeginTalkMode(string) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ ChangeEventCamera(string)
#### Description
Change to an event camera.

#### Parameters
- (^^**string**^^): Camera name

### 🗒️ ChangeMotion(string)
#### Description

#### Parameters

### 🗒️ ChangePlayerAnimInHold(string, number) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ ChangePlayerMotion(string, number) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ ChangeSavePermission(string) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ ChangeWeather(number, string) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ ClearIsland() : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ ClearObjectTarget() : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ ClearPracticeNotifier() : unknown
#### Description
This function is unused.
#### Parameters
*Unknown...*
#### Return Value
*Unknown...*

### 🗒️ ClearQuestTarget() : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ ClearTutorialUI(boolean) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ ClearUserGuidUI() : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ DebugPrint() : unknown
#### Description
This function is unused.
#### Parameters
*Unknown...*
#### Return Value
*Unknown...*

### 🗒️ DeletePracticeNotifierPermissionDeny(string) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ EndLetterBoxUI() : unknown
#### Description
This function is unused.
#### Parameters
*Unknown...*
#### Return Value
*Unknown...*

### 🗒️ EndTalkMode() : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ EndTimeGimmick() : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ Exit()
#### Description
End the script.

### 🗒️ FadeIn(number) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ FadeOut(number, string) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ GetBlock(number) : number
#### Description

#### Parameters

#### Return Value

### 🗒️ GetChaosEmerald(string) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ GetChaosEmeraldNum() : number
#### Description

#### Parameters

#### Return Value

### 🗒️ GetClearTowerNum() : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ GetDebugFlag(string) : number
#### Description

#### Parameters

#### Return Value

### 🗒️ GetGuardLevel(number) : number
#### Description

#### Parameters

#### Return Value

### 🗒️ GetHackingAliveEnemyNum() : unknown
#### Description
This function is unused.
#### Parameters
*Unknown...*
#### Return Value
*Unknown...*

### 🗒️ GetHackingCurrentWaveId() : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ GetHasChaosEmeraldNum() : number
#### Description

#### Parameters

#### Return Value

### 🗒️ GetMaxGuardLevel() : number
#### Description

#### Parameters

#### Return Value

### 🗒️ GetMaxPowerLevel(number) : number
#### Description

#### Parameters

#### Return Value

### 🗒️ GetMaxRingLevel() : number
#### Description

#### Parameters

#### Return Value

### 🗒️ GetMaxSpeedLevel() : number
#### Description

#### Parameters

#### Return Value

### 🗒️ GetMinigameQuestProgress(string) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ GetObjStatus(string, number, number) : boolean
#### Description

#### Parameters

#### Return Value

### 🗒️ GetPinballStatus(string) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ GetPlayerItemInfo(string) : number
#### Description

#### Parameters

#### Return Value

### 🗒️ GetPlayerStatus(string) : number
#### Description

#### Parameters

#### Return Value

### 🗒️ GetPowerLevel(number) : number
#### Description

#### Parameters

#### Return Value

### 🗒️ GetPowerupRequiredKodamaNum() : unknown
#### Description
This function is unused.
#### Parameters
*Unknown...*
#### Return Value
*Unknown...*

### 🗒️ GetRingLevel(number) : number
#### Description

#### Parameters

#### Return Value

### 🗒️ GetSelectResult(number) : number
#### Description

#### Parameters

#### Return Value

### 🗒️ GetSpeedLevel(number) : number
#### Description

#### Parameters

#### Return Value

### 🗒️ GetValue(string, number) : number
#### Description
Get the value of a flag based on the flag name and flag number

#### Parameters
- (^^**string**^^, number): Flag name
- (string, ^^**number**^^): Flag number

#### Return Value
The value of the requested flag

### 🗒️ GiantOrbReleaseTemporarilyReset() : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ GiantOrbTemporarilyReset() : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ GoToCyberStage() : unknown
#### Description
This function is unused.
#### Parameters
*Unknown...*
#### Return Value
*Unknown...*

### 🗒️ HideObjectInEvent(string) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ HoldPlayer()
#### Description
Disable all player movement

### 🗒️ IsAvailableKodamaElderLvUp() : number
#### Description

#### Parameters

#### Return Value

### 🗒️ IsHackingCurrentWaveIdInRange(number, number) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ IsInScreenView(string, number, number) : boolean
#### Description

#### Parameters

#### Return Value

### 🗒️ IsLoadingLevel(number) : number
#### Description

#### Parameters

#### Return Value

### 🗒️ IsPlayingDiEvent(string) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ IsPlayingDiEventAll(number) : number
#### Description

#### Parameters

#### Return Value

### 🗒️ IsPlayingQuest() : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ KillPinballObjects() : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ LoadDiEvent(string) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ LoadDiEventFrozen(string) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ LoadLevel(string) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ MakeElectricLine(string) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ MovedPlayer(string) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ NextBlock(number) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ NextSequence() : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ NotifyAction(string, string) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ PlayDiEvent(string) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ PlayDiEventFrozen(string) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ PlayerGetItem(string, number) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ PlayerNonOperation() : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ PlayVoice(string) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ QuitMinigameQuest() : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ ReleaseHoldPlayer()
#### Description
Enables player movement.

### 🗒️ ReleasePresentSkill(string) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ ResetCamera()
#### Description
Changes camera to the player-operated camera.

### 🗒️ ResetMenuDisabledMinigameQuest() : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ ResetPinball() : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ ResetWeather(number) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ Save(string) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ SendMsgToObj(string, string) : unknown
!!! warning
    This function might not exist anymore! Please update when there's a confirmation!
#### Description
Send a message to the specified GameObject.

#### Parameters
- (^^**string**^^, string): *Unknown...*
- (string, ^^**string**^^): *Unknown...*

#### Return Value
*Unknown...*

### 🗒️ SetBossKnightLayerEnabled(boolean) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ SetHackingBulletPatternGlobalVelTimes(number) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ SetHackingBulletPatternVelRange(number, number) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ SetHUDEnabled(string, boolean) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ SetLayerEnabled(string, number) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ SetLayerEnabledInEvent(string, number) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ SetLookAt(number, number, number) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ SetMenuDisabledMinigameQuest(string) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ SetObjStatus(string, number, number) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ SetPlayerAbilityEnabled(string, boolean)
#### Description
Toggles whether the specified ability can be used by the player.

#### Parameters
- (^^**string**^^, boolean): Ability name

---

Name          | Description
------------- | ----------
Boost         | Toggles the ability to boost.
ComboAttack   | Toggles the ability to perform combo attacks.
ControlCamera | Toggles the ability to move the camera.
Cyloop        | Toggles the ability to perform Cyloop.
HomingAttack  | Toggles the ability to homing attack.
Jump          | Toggles the ability to jump.
Lockon        | Toggles the ability to lock onto enemies.
Parry         | Toggles the ability to parry.
WallAction    | Toggles the ability to climb walls.

---

- (string, ^^**boolean**^^): Value

#### Return Value
None.

### 🗒️ SetTime(number, number) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ SetTimePause(boolean) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ SetValue(string, number, number)
#### Description
Sets a value for the specified flag.

#### Parameters
- (^^**string**^^, number, number): Flag name
- (string, ^^**number**^^, number): Flag number
- (string, number, ^^**number**^^): Value

### 🗒️ SetVisibleKodama() : unknown
#### Description
This function is unused.
#### Parameters
*Unknown...*
#### Return Value
*Unknown...*

### 🗒️ ShootBulletPattern(string) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ ShowHeaderWindowUI(string, string) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ ShowObjectTarget(string) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ ShowPracticeNotifier(number, number, number) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ ShowQuestTarget(string) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ ShowRobberTargetUI() : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ ShowSelectBox(string, string, string, string) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ ShowSelectBoxNoWaitVoice(string, string, string, string, string) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ ShowSequenceUI(string) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ ShowTalkCaption(string)
#### Description

#### Parameters

### 🗒️ ShowTalkCaptionOverFade() : unknown
#### Description
This function is unused.
#### Parameters
*Unknown...*
#### Return Value
*Unknown...*

### 🗒️ ShowToastUI(string) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ ShowTutorialUI(string, string) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ ShowUserGuidUI(string) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ ShowYesNoWindowUI() : unknown
#### Description
This function is unused.
#### Parameters
*Unknown...*
#### Return Value
*Unknown...*

### 🗒️ SoundDirector() : unknown
#### Description
This function is unused.
#### Parameters
*Unknown...*
#### Return Value
*Unknown...*

### 🗒️ SpawnHackingEnemy(string) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ SpawnPinballObjects() : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ SpawnPinballObjectsAfterClearing() : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ StartClearCheck() : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ StartLetterBoxUI() : unknown
#### Description
This function is unused.
#### Parameters
*Unknown...*
#### Return Value
*Unknown...*

### 🗒️ StartMinigameQuest(string) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ StartPinball() : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ StartTimeGimmick() : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ StartupGimmickInfo() : unknown
#### Description
This function is unused.
#### Parameters
*Unknown...*
#### Return Value
*Unknown...*

### 🗒️ StartWaitMinigameQuest() : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ UnloadDiEvent() : unknown
#### Description
This function is unused.
#### Parameters
*Unknown...*
#### Return Value
*Unknown...*

### 🗒️ UnloadLevel() : unknown
#### Description
This function is unused.
#### Parameters
*Unknown...*
#### Return Value
*Unknown...*

### 🗒️ WaitFromChaosEmeraldNum() : unknown
#### Description
This function is unused.
#### Parameters
*Unknown...*
#### Return Value
*Unknown...*

### 🗒️ WaitFromFlag() : unknown
#### Description
This function is unused.
#### Parameters
*Unknown...*
#### Return Value
*Unknown...*

### 🗒️ WaitTime(number)
#### Description
Wait for a specified time (seconds)

#### Parameters
- (^^**number**^^): Time, in seconds, to wait
