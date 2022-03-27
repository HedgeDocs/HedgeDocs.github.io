---
description: Information on deleted levels from Sonic Lost World's final release.
---
There are several levels that have been removed from the game, but entries from them can be found in <code style="color: green;">actstgmission.lua</code>.
``` lua title="actstgmission.lua"
mission_all = {
    {
        missions = {
            --old stage
            -- w2-a03 古代都市
            {
                name        = "w2a03",
                data        = "w2a03",
                player_pos  = { 0.00, 0.00, 51.00 },
                player_dir  = { 0.0, 180.0, 0.0 },
            },
            -- w2-a04 タカアシガニ
            {
                name        = "w2a04",
                data        = "w2a04",
                player_pos  = { 2.19, 0.47, 0.49 },
                player_dir  = { 0.0, 90.0, 0.0 },
                player_mode = "2D",
            },
            -- w2-a05 サンドワーム体内
            {
                name        = "w2a05",
                data        = "w2a05",
                player_pos  = { -1000.29, 540.33, -7.00 },
                player_dir  = { 0.0, 180.0, 0.0 },
                player_mode = "2D",
            },
            -- w3-a07 南国ビーチ2
            {
                name        = "w3a07",
                data        = "w3a07",
                player_pos  = { -0.54, 0.44, 105.00 },
                player_dir  = { 0.0, 180.0, 0.0 },
            },

            -- w1-a02 インディ洞窟
            {
                name        = "w1a02",
                data        = "w1a02",
                player_pos  = { 50.1, -10.55, -188.27 },
                player_dir  = { 0.0, 180.0, 0.0 },
            },
            -- w1-a05 モアイ
            {
                name        = "w1a05",
                data        = "w1a05",
                player_pos  = { 80, 10067.96, 0 },
                player_dir  = { 0.0, 90.0, 0.0 },
                player_mode = "2D",
            },
            -- w1-c01 キン斗雲
            {
                name        = "w1c01",
                data        = "w1c01",
                player_pos  = { 0.00, -95.00, 30.00 },
                player_dir  = { 0.0, 180.0, 0.0 },
            },
            -- w2-a02 スカイチェイス
            {
                name        = "w2a02",
                data        = "w2a02",
                player_pos  = { 2401.1, 63.06, 3125.81 },
                player_dir  = { 0.0, 180.0, 0.0 },
                player_mode = "SKYCHASE"
            },
            -- w4-a02 インディ洞窟2
            {
                name        = "w4a02",
                data        = "w4a02",
                player_pos  = { -0.18, -52.03, -73.52 },
                player_dir  = { 0.0, 180.0, 0.0 },
            },
            -- w4-a03 ilomiloお菓子
            {
                name        = "w4a03",
                data        = "w4a03",
                player_pos  = { -1.08, 3.02, -3.30 },
                player_dir  = { 0.0, 90.0, 0.0 },
                player_mode = "2D",
            },
        },
    },
}
```