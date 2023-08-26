---
description: List of functions that can be used in Sonic Frontiers' Lua scripts
---

# Functions
!!! warning
    This list is still a work in progress! Any additions and updates are greatly appreciated!

Functions are listed below in the following format:
```
Function(arguments, ...) : returnType
```
---


### 🗒️ AchivementUnlock(string, number)
#### Description
Unlocks an achievement.

#### Parameters
- (^^**string**^^, number): Name of the achievement to unlock
- (string, ^^**number**^^): *Unknown...*

### 🗒️ ActivityComplete(number) : unknown
#### Description
This function has no callback function.
#### Parameters
*Unknown...*
#### Return Value
*Unknown...*

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
This function is unused and has no callback function.
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

### 🗒️ AutoSave(string)
#### Description
Saves the current game data into the autosave slot.
#### Parameters
- (^^**string**^^): Save mode

---

Mode           | Description
-------------- | -----------
forceimmediate | The most common and seemingly default save mode.
immediate      | *Unknown...*

---

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
Changes animations for dialogue events.

#### Parameters
- (^^**string**^^): Animation name

---

Name       |
---------- |
happy      |
no         |
rod        |
take       |
talk       |
talk_start |
think      |
yes        |

---

### 🗒️ ChangePlayerAnimInHold(string, number) : yield
#### Description
Plays an animation from an `*.asm` file using the friendly (upper-case) name when the player is frozen using HoldPlayer().

#### Parameters
- (^^**string**^^, string): Animation name
- (string, ^^**number**^^): *Unknown...*

### 🗒️ ChangePlayerMotion(string, number) : yield
#### Description
Plays an animation from an `*.asm` file using the friendly (upper-case) name where available.

#### Parameters
- (^^**string**^^, string): Animation name
- (string, ^^**number**^^): *Unknown...*

### 🗒️ ChangeSavePermission(string)
#### Description
Toggles whether the player has permission to save.

#### Parameters
- (^^**string**^^): Permission state

---

State |
----- |
allow |
deny  |

---

### 🗒️ ChangeWeather(number, string)
#### Description
Changes the current weather.

#### Parameters
- (^^**number**^^, string): *Unknown...*
- (number, ^^**string**^^): Weather name

---

Name      |
--------- |
Cloudy    |
Rainy     |
SandStorm |
Sunny     |

---

### 🗒️ ClearIsland()
#### Description
Sets the cleared state of the current island and proceeds to the next.

### 🗒️ ClearObjectTarget() : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ ClearPracticeNotifier() : yield
#### Description
Clears the Training Simulator notification on the top-right of the heads-up display.

### 🗒️ ClearQuestTarget() : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ ClearTutorialUI(boolean) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ ClearUserGuidUI() : yield
#### Description
Clears an input guide.

### 🗒️ DebugPrint() : number
#### Description
This function is unused and has a stripped callback function.
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
Ends the current script sequence.

### 🗒️ FadeIn(number)
#### Description
Fades the screen into gameplay from black within the specified duration.

#### Parameters
- (^^**number**^^): Duration (seconds) (optional)

### 🗒️ FadeOut(number, string) : yield
#### Description
Fades the screen out within the specified duration.

#### Parameters
- (^^**number**^^, string): Duration (seconds) (optional)
- (number, ^^**string**^^): Colour type (optional)

---

Colours         |
--------------- |
black (default) |
white           |

---

### 🗒️ GetBlock() : number
#### Description
Gets the current internal block ID for Lua conditions within update functions.

#### Return Value
The current block ID.

### 🗒️ GetChaosEmerald(string) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ GetChaosEmeraldNum() : number
#### Description
Gets the total number of Chaos Emeralds.

#### Return Value
The total number of Chaos Emeralds.

### 🗒️ GetClearTowerNum() : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ GetDebugFlag(string) : number
#### Description
Gets the value of any flag Sonic Team wants to check within Lua scripts.

#### Parameters
- (^^**string**^^): Flag name

---

Name             |
---------------- |
isTutorialEnable |

---

#### Return Value
The value of the requested flag.

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
Gets the total number of currently obtained Chaos Emeralds.

#### Return Value
The total number of currently obtained Chaos Emeralds.

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
Returns the value of status flags for the player.

#### Parameters
- (^^**string**^^): Flag name

---

Name     | Description
-------- | -----------
Hold     | Checks if the player is frozen via HoldPlayer()
OnGround | Checks if the player is grounded

---

#### Return Value
A 0/1 number representing the requested state.

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
Get the value of a flag based on the flag name and flag number.

#### Parameters
- (^^**string**^^, number): Flag name
- (string, ^^**number**^^): Flag number

#### Return Value
The value of the requested flag.

### 🗒️ GiantOrbReleaseTemporarilyReset() : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ GiantOrbTemporarilyReset() : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ GoToCyberStage(string) : yield
#### Description
This function is unused.
#### Parameters
*Unknown...*

### 🗒️ HideObjectInEvent(string)
#### Description
Hides the specified object during an event.

#### Parameters
- (^^**string**^^): Object name

### 🗒️ HoldPlayer()
#### Description
Disables player movement.

### 🗒️ IsAvailableKodamaElderLvUp() : boolean
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

### 🗒️ IsLoadingLevel() : number
#### Description
Returns whether a level is actively being loaded via the LoadLevel() function for pausing the script until it's finished.

#### Return Value
A 0/1 number representing if a level is being loaded.

### 🗒️ IsPlayingDiEvent(string) : number
#### Description
Returns whether the specified event is currently playing.

#### Parameters
- (^^**string**^^): Event name

#### Return Value
A 0/1 number representing if the specified event is currently playing.

### 🗒️ IsPlayingDiEventAll() : number
#### Description
Returns whether any event is playing.

#### Return Value
A 0/1 number representing if any event is playing.

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
Loads an archive (`*.pac`) using its respective `*.level` file.

#### Parameters
- (^^**string**^^): Level name

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

### 🗒️ NextSequence(number)
#### Description
Exits the current script sequence and loads the next one via the input ID.

#### Parameters
- (^^**number**^^): Sequence ID

### 🗒️ NotifyAction(string, string)
#### Description
Sends a message to the specified object in the `*.gedit` files. Typically used to turn camera volumes on or off.

#### Parameters
- (^^**string**^^, string): Internal name of the object to signal.
- (string, ^^**string**^^): Message to send to the object.

---

Name  | Description
----- | -----------
on    | Activates the object.
off   | Deactivates the object.
start | *Unknown...*

---

### 🗒️ PlayDiEvent(string) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ PlayDiEventFrozen(string) : unknown
#### Description

#### Parameters

#### Return Value

### 🗒️ PlayerGetItem(string, number)
#### Description
Gives the player a specific number of specific items.

#### Parameters
- (^^**string**^^, number): Item name
- (string, ^^**number**^^): Item count

---

Name     |
-------- |
Ring     |
ExpPoint |

---

### 🗒️ PlayerNonOperation() : yield
#### Description
Disables player movement.

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
Restores the player-operated camera.

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

### 🗒️ Save() : yield
#### Description

#### Parameters

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

### 🗒️ SetHUDEnabled(string, boolean)
#### Description
Toggles whether certain menus are available to the player.

#### Parameters
- (^^**string**^^, boolean): Menu name

---

Name                 | Description
-------------------- | -----------
MainMenu             | Toggles access to the pause menu.
MapMenu              | Toggles access to the map screen.

---

- (string, ^^**boolean**^^): Enabled

### 🗒️ SetLayerEnabled(string, boolean)
#### Description
Toggles whether an object layout layer is visible.

#### Parameters
- (^^**string**^^, boolean): Layer name
- (string, ^^**boolean**^^): Enabled

### 🗒️ SetLayerEnabledInEvent(string, boolean)
#### Description
Toggles whether an object layout layer is visible during an event.

#### Parameters
- (^^**string**^^, boolean): Layer name
- (string, ^^**boolean**^^): Enabled

### 🗒️ SetLookAt(number, number, number)
#### Description
Forces the camera to always look towards the specified position.

#### Parameters
- (^^**number**^^, number, number): X
- (number, ^^**number**^^, number): Y
- (number, number, ^^**number**^^): Z

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
------------- | -----------
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

### 🗒️ SetTime(number, number)
#### Description
Sets the current time.

#### Parameters
- (^^**number**^^, number): Hour
- (number, ^^**number**^^): Minute

### 🗒️ SetTimePause(boolean)
#### Description
Toggles the passage of time.

#### Parameters
- (^^**boolean**^^): Enabled

### 🗒️ SetValue(string, number, number)
#### Description
Sets a value for the specified flag.

#### Parameters
- (^^**string**^^, number, number): Flag name
- (string, ^^**number**^^, number): Flag number
- (string, number, ^^**number**^^): Value

### 🗒️ SetVisibleKodama(string)
#### Description
This function does not work.

#### Parameters
- (^^**string**^^): Visibility state

---

States |
------ |
hide   |
show   |

---

### 🗒️ ShootBulletPattern(string)
#### Description
Shoots a pre-defined pattern of bullets for the Hacking minigame.

#### Parameters
- (^^**string**^^): Pattern name

### 🗒️ ShowHeaderWindowUI(string, string)
#### Description
Displays a dialog using a caption and body entry from a `*.cnvrs-text` file.

#### Parameters
- (^^**string**^^, string): Caption name
- (string, ^^**string**^^): Body name

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

### 🗒️ ShowSequenceUI(string)
#### Description
Displays a menu depending on the current sequence.

#### Parameters
- (^^**string**^^): Menu name

---

Name                 | Description
-------------------- | -----------
MainMenu             | *Unknown...*
MainMenu_ForTutorial | Displays the pause menu for highlighting the Cyloop skill.
MapMenu              | *Unknown...*
PauseMenu            | *Unknown...*

---

### 🗒️ ShowTalkCaption(string)
#### Description

#### Parameters

### 🗒️ ShowTalkCaptionOverFade(string) : yield
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

### 🗒️ ShowUserGuidUI(string)
#### Description
Displays an input guide for the specified control method.

#### Parameters
- (^^**string**^^): Name

!!! info "Notice"
    Only three of these are *actually* used, as Sonic Team moved to using internal methods for displaying these guides, rather than using Lua.
    
    Some names are unknown as they use string hashes that have no source yet.

---

Name                | Internal ID | Description
------------------- | ----------- | -----------
CameraControl       | 0           | Displays a graphic for the right stick with the text "Camera".
*Unknown...*        | 1           | Displays a quad direction graphic with no text.
Jump *(unused)*     | 2           | Displays a graphic for the A button with no text.
Boost *(unused)*    | 3           | Displays a graphic for the right trigger with no text.
HomingAttack        | 4           | Displays a graphic for the X button with the text "Homing Attack".
Lockon *(unused)*   | 5           | Displays a graphic for the right stick button with the text "Lock On".
Cyloop *(unused)*   | 6           | Displays a graphic for the Y button with the text "Cyloop (while moving)".
CyloopBattle        | 7           | Displays a graphic for the Y button with the text "Cyloop (while moving)".
*Unknown...*        | 8           | Displays a graphic for the left bumper with no text.
WallRun *(unused)*  | 9           | Displays two graphics, one with a quad direction graphic with the text "Climb", and another with a graphic for the right trigger with the text "Wall Run (while climbing)".
Boarding *(unused)* | 10          | Displays two graphics, one with a quad direction graphic with the text "Climb", and another with a graphic for the A button with no text.
*Unknown...*        | 11          | Displays two graphics, one with a left/right direction graphic with no text, and another with a graphic for the left trigger with no text.
Diving *(unused)*   | 12          | Displays a graphic for the right trigger with no text.
*Unknown...*        | 13          | Displays two graphics, one with a quad direction graphic with the text "Move the target", and another with a graphic for the A button with the text "Cast the line".
*Unknown...*        | 14          | Displays a graphic for the B button with the text "Quit".
*Unknown...*        | 15          | Displays a graphic for the A button with the text "Reel it in".
*Unknown...*        | 16          | Displays a graphic for the A button with the text "Hook the fish".
*Unknown...*        | 17          | Displays a graphic for the A button with no text.
*Unknown...*        | 18          | Displays a graphic for the A button with no text.
*Unknown...*        | 19          | Displays a graphic for the X button with the text "Place cannonball".
*Unknown...*        | 20          | Displays a graphic for the X button with the text "Load cannon".

---


### 🗒️ ShowYesNoWindowUI(string, string) : yield
#### Description
Displays a Yes/No dialog using a caption and body entry from a `*.cnvrs-text` file.

#### Parameters
- (^^**string**^^, string): Caption name
- (string, ^^**string**^^): Body name

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
Waits for a specified amount of time (in seconds).

#### Parameters
- (^^**number**^^): Seconds
