---
title: Colors Leftovers
description: Information on leftover entries specifically from Sonic Colors in Sonic Lost World.
---
# Colors Leftovers

## Tropical Resort Act 1
There’s an unused Tropical Resort Act 1 entry in Sonic Lost World’s <code style="color: green;">actstgmission.lua</code> file.

``` lua title="actstgmission.lua"
mission_all = {
    -- RSO(リゾート面)
    {
        missions = {
            -- ＡＣＴ１（旧ＡＣＴ１の前半部分）
            {
                name        = "stg110",
                data        = "stg110",
                player_pos  = { -11942.84, 1575.931, 16972.49 },
                player_dir  = { 0.0, -159.2, 0.0 },
                start_event = 1,
                bgm         = "bgm_stg110_rso",
                phantoms    = { "laser", "drill" },
                result_bg   = "result_01_rso_act1",

                --【スコア設定領域】
                score = {
                    rank = {
                        60,   -- S rank (ゴール秒数)
                        120,  -- A rank
                        180,  -- B rank
                        240,  -- C rank
                        320,  -- D rank
                    },
                    time_basis = 320000,
                    time_down = 1100,

                    no_miss = {
                        280000,
                        210000,
                        182000,
                        56000,
                        28000,
                    },

                },
            },
        },
    },
}
```

Only thing changed in this entry from the Sonic Colors version is that <code>player_dir</code> takes in a 3D value, just like every other Sonic Lost World entry.

The entire <code>score</code> block, <code>start_event</code> and <code>result_bg</code> are leftovers from Colors as well, as those values are not read by Sonic Lost World's lua parser function.

### actstgmission.lua
This file is responsible for serving information to the game regarding stages, such as where the player should start at or what folder to read the assets for the stage from.

## Test Levels
Due to the release of Sonic Colors Ultimate we can identify a few test levels from Sonic Colors that were reused in Sonic Lost World.

``` lua title="actstgmission.lua"
test_mission_all = {
   -- プログラマテスト.
   {
	  missions = {
		 -- mission test(stg901)
		 {
			name		= "stg901",
			dir			= "test/stg901",
			player_pos	= { 0, 0, 0 },
			player_dir	= { 0.0, 0.0, 0.0 },
			phantoms    = { "laser", "drill", "spike", "rocket", "rodeo", "astro", "puzzle", "asteroid" },
		   --【スコア設定領域】
			score = {
			   rank = {
				   800000,	-- S rank
				   700000,	-- A rank
				   450000,	-- B rank
				   200000,	-- C rank
			   },
			   time_basis = 10000,
			   time_down = 500,

			   no_miss = {
				  100000,
				  50000,
				  25000,
				  10000,
				  0,
			   },
			},
		 },
		 -- mission test(stg902)
		 {
			name		= "stg902",
			dir			= "test/stg902",
			player_pos	= { 0, 0, 0 },
			player_dir	= { 0.0, -180.0, 0.0 },
			phantoms    = { "laser", "drill", "spike", "rocket", "rodeo", "astro", "puzzle", "asteroid" },
		 },
	  },
   },
}
```

The only difference here when compared to the Colors version is that the entries used take a 3D value for the <code>player_dir</code> tag and the inclusion of the <code style="color: #76CAA0;">asteroid</code> wisp in the <code>phantoms</code> tag.

``` lua title="actstgdata.lua"
stage_all = {
   -- テストステージ
   {
	  title = "テストステージ",

	  stages = {
		 -- オブジェクトテスト用
		 {
		 	name = "stg901",
		 	title = "オブジェクトテストマップ",
		 },
		 -- 西村テストマップ
		 {
			name = "stg902",
			title = "西村テストマップ",
		 },
		 -- Multiオブジェクトテスト用
		 {
		 	name = "stg905",
		 	title = "Multiオブジェクトテストマップ",
		 },
	  },
   },
}
```

The Japanese titles translate to the same values in Sonic Colors Ultimate's files. 

### actstgdata.lua
This file was only meant to be used by the game's debug menu, which does not exist in the final release, thus making the file a leftover.