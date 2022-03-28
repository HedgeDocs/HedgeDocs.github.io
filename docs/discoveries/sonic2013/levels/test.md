---
description: Information on leftover Test Level entries in Sonic Lost World.
---
There are several entries for test levels leftover in Sonic Lost World's <code style="color: green;">testmission.lua</code> file.

Some of these entries are using the naming scheme from Sonic Colors for stage names, that being <code><span style="color: green;">stgX</span><span style="color: red;">YY</span></code>.<br>
Another chunk of the entries are named according to the scheme standardized in Sonic Lost World, <code><span style="color: green;">w0</span><span style="color: blue;">x</span><span style="color: red;">YY</span></code>.

``` lua title="testmission.lua"
---------------------------------------------------------------
-- @file	testmission.lua
-- @author	Kawabata Yoshitaka
-- @brief	テスト用ミッションを定義するファイルです
---------------------------------------------------------------

test_mission_all = {

   -- プログラマテスト.
   {
	  missions = {
		 -- mission test(w0a01)
		 {
			name		= "w0a01",
			dir			= "test/w0a01",
			player_pos	= { -1111.71, 49.99, -594.29 },
			player_mode = "3D",
			player_dir	= { 0.0, 270.0, 0.0 },
			dead_line       = -50000,
			phantoms    = { "laser", "drill", "spike", "rocket", "rodeo", "astro", "puzzle" },
		 },
		 -- mission test(w0c99)デザインテストマップ
		 {
			name		= "w0c99",
			dir			= "test/w0c99",
			player_pos	= { 0, 0, 0 },
			player_dir	= { 0.0, -180.0, 0.0 },
			dead_line       = -500,
			phantoms    = { "laser", "drill", "spike", "rocket", "rodeo", "astro", "puzzle", "asteroid" },
		 },
		 -- mission test(w0c99)撮影所
		 {
			name		= "w0c99_2",
			dir			= "test/w0c99",
			player_pos	= { -1200, 0, -1200 },
			player_dir	= { 0.0, -180.0, 0.0 },
			dead_line       = -500,
			phantoms    = { "laser", "drill", "spike", "rocket", "rodeo", "astro", "puzzle", "asteroid" },
		 },
		 -- mission test(w0c98)シェーダーテストマップ
		 {
			name		= "w0c98",
			dir			= "test/w0c98",
			player_pos	= { 0, 0, 0 },
			player_dir	= { 0.0, -180.0, 0.0 },
			dead_line       = -500,
			phantoms    = { "laser", "drill", "spike", "rocket", "rodeo", "astro", "puzzle", "asteroid" },
		 },
		 -- mission test(w0c97)デザインテストマップ2(暗い面)
		 {
			name		= "w0c97",
			dir			= "test/w0c97",
			player_pos	= { 0, 0, 0 },
			player_dir	= { 0.0, -180.0, 0.0 },
			dead_line       = -500,
			phantoms    = { "laser", "drill", "spike", "rocket", "rodeo", "astro", "puzzle", "asteroid" },
		 },
		 -- mission test(w0c96)コリジョンテストマップ
		 {
			name		= "w0c96",
			dir			= "test/w0c96",
			player_pos	= { 0, 0, 0 },
			player_dir	= { 0.0, -180.0, 0.0 },
			dead_line       = -500,
			phantoms    = { "laser", "drill", "spike", "rocket", "rodeo", "astro", "puzzle", "asteroid" },
		 },
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
		 -- mission test(stg811)
		 {
			name		= "stg811",
			dir			= "test/stg811",
			player_pos	= { -0.65, 0.09, 50.8 },
			player_dir	= { 0.0, 180.0, 0.0 },
		 },
		 -- mission test(stg812)
		 {
			name		= "stg812",
			dir			= "test/stg812",
			player_pos	= { 0, -50, -60 },
			player_dir	= { 0.0, 180.0, 0.0 },
		 },
		 -- mission test(stg813)
		 {
			name		= "stg813",
			dir			= "test/stg813",
			player_pos	= { 4000.0, -2500.0, 7050.0 },
			player_dir	= { 0.0, 180.0, 0.0 },
		 },
		 -- mission test(stg814)
		 {
			name		= "stg814",
			dir			= "test/stg814",
			player_pos	= { 0,0.5, 55 },
			player_dir	= { 0.0, 180.0, 0.0 },
		 },
		 -- mission test(stg815)
		 {
			name		= "stg815",
			dir			= "test/stg815",
			player_pos	= { -7677.16, 841.78, 50.83 },
			player_dir	= { 0.0, 180.0, 0.0 },
		 },
		  -- mission test(stg816)
		 {
			name		= "stg816",
			dir			= "test/stg816",
			player_pos	= { 1.92, -32.61, 237.17 },
			player_mode = "2D",
			player_dir	= { 0.0, 90.0, 0.0 },
			dead_line       = -50000,
			phantoms    = { "laser", "drill", "spike", "rocket", "rodeo", "astro", "puzzle" },
		 },
		  -- mission test(stg817)
		 {
			name		= "stg817",
			dir			= "test/stg817",
			player_pos	= { 0.04, 466.24, -6.63 },
			player_mode = "3D",
			player_dir	= { 0.0, 180.0, 0.0 },
			dead_line       = -50000,
			phantoms    = { "laser", "drill", "spike", "rocket", "rodeo", "astro", "puzzle" },
		 },
		  -- mission test(stg818)
		 {
			name		= "stg818",
			dir			= "test/stg818",
			player_pos	= { 3.47, 320.30, -1.62 },
			player_mode = "3D",
			player_dir	= { 0.0, 180.0, 0.0 },
			dead_line       = -50000,
			phantoms    = { "laser", "drill", "spike", "rocket", "rodeo", "astro", "puzzle" },
		 },
		  -- mission test(stg819)
		 {
			name		= "stg819",
			dir			= "test/stg819",
			player_pos	= { 1240.18, 1923.53, -15.45 },
			player_mode = "3D",
			player_dir	= { 0.0, 180.0, 0.0 },
			dead_line       = -50000,
			phantoms    = { "laser", "drill", "spike", "rocket", "rodeo", "astro", "puzzle" },
		 },
		  -- mission test(stg820)
		 {
			name		= "stg820",
			dir			= "test/stg820",
			player_pos	= { 0, 0, 0 },
			player_dir	= { 0.0, 0.0, 0.0 },
			player_mode = "2D",
		 },
		  -- mission test(stg821)
		 {
			name		= "stg821",
			dir			= "test/stg821",
			player_pos	= { 80, 72, 0 },
			player_dir	= { 0.0, 90.0, 0.0 },
			player_mode = "2D",
		 },
		  -- mission test(stg822)
		 {
			name		= "stg822",
			dir			= "test/stg822",
			player_pos	= { 0, 0, 0 },
			player_dir	= { 0.0, 180.0, 0.0 },
			player_mode = "2D",
		 },
		  -- mission test(stg823)
		 {
			name		= "stg823",
			dir			= "test/stg823",
			player_pos	= { 1393.38, 42.29, 774.04 },
			player_dir	= { 0.0, 180.0, 0.0 },
			player_mode = "SKYCHASE",
		 },
		  -- mission test(w0a03)
		 {
			name		= "w0a03",
			dir			= "test/w0a03",
			player_pos	= { -267.95, 905.79, -2215.56 },
			player_dir	= { 0.0, 0.0, 0.0 },
			player_mode = "3D",
		 },
		  -- mission test(w0a04)
		 {
			name		= "w0a04",
			dir			= "test/w0a04",
			player_pos	= { 0.0, 0.0, 0.0 },
			player_dir	= { 0.0, 0.0, 0.0 },
			player_mode = "2D",
		 },
		  -- mission test(w0a05)
		 {
			name		= "w0a05",
			dir			= "test/w0a05",
			player_pos	= { -1.21, -87.9, 24.48 },
			player_dir	= { 0.0, 180.0, 0.0 },
			player_mode = "3D",
		 },
		  -- mission test(w0a06)
		 {
			name		= "w0a06",
			dir			= "test/w0a06",
			player_pos	= { 721.07, 994.32, -6.55 },
			player_dir	= { 0.0, 180.0, 0.0 },
			player_mode = "2D",
		 },
		  -- mission test(w0a07)
		 {
			name		= "w0a07",
			dir			= "test/w0a07",
			player_pos	= { 51.82, 40.93, -74.29 },
			player_dir	= { 0.0, 0.0, 0.0 },
			player_mode = "2D",
		 },
		  -- mission test(w0a08)
		 {
			name		= "w0a08",
			dir			= "test/w0a08",
			player_pos	= { 514.80, 648.50, 4219.32 },
			player_dir	= { 0.0, 180.0, 0.0 },
			player_mode = "3D",
		 },
		  -- mission test(w0a09)
		 {
			name		= "w0a09",
			dir			= "test/w0a09",
			player_pos	= { -5694.29, 672.14, -295.32 },
			player_dir	= { 0.0, 0.0, 0.0 },
			player_mode = "2D",
		 },
		  -- mission test(w0a10)
		 {
			name		= "w0a10",
			dir			= "test/w0a10",
			player_pos	= { -0.0, 50.0, 450.00 },
			player_dir	= { 0.0, 180.0, 0.0 },
			player_mode = "3D",
		 },
		  -- mission test(w0a11)
		 {
			name		= "w0a11",
			dir			= "test/w0a11",
			player_pos	= { 0.0, -32.86, 41.54 },
			player_dir	= { 0.0, 0.0, 0.0 },
			player_mode = "2D",
		 },
		  -- mission test(w0a12)
		 {
			name		= "w0a12",
			dir			= "test/w0a12",
			player_pos	= { 0.0, 510.0, 151.0 },
			player_mode = "TOP",
			player_dir	= { 0.0, 0.0, 0.0 },
		 },
		  -- mission test(w0a13)
		 {
			name		= "w0a13",
			dir			= "test/w0a13",
			player_pos	= { -331.97, 600.15, -260.02 },
			player_dir	= { 0.0, 180.0, 0.0 },
			player_mode = "2D",
		 },
		  -- mission test(w0a14)
		 {
			name		= "w0a14",
			dir			= "test/w0a14",
			player_pos	= { -2624.82, -1925.34, 7370.24 },
			player_dir	= { 0.0, 180.0, 0.0 },
			player_mode = "3D",
		 },
		  -- mission test(w0a15)
		 {
			name		= "w0a15",
			dir			= "test/w0a15",
			player_pos	= { 500, -47, -15 },
			player_dir	= { 0.0, 180.0, 0.0 },
			player_mode = "3D",
		 },
		  -- mission test(w0a16)
		 {
			name		= "w0a16",
			dir			= "test/w0a16",
			player_pos	= { 218.12, -501.53, -613.49 },
			player_dir	= { 0.0, 0.0, 0.0 },
			player_mode = "2D",
		 },
		 -- mission test(stg902)
		 {
			name		= "stg902",
			dir			= "test/stg902",
			player_pos	= { 0, 0, 0 },
			player_dir	= { 0.0, -180.0, 0.0 },
			phantoms    = { "laser", "drill", "spike", "rocket", "rodeo", "astro", "puzzle", "asteroid" },
		 },
		 -- mission test(w0a90)
		 {
			name		= "w0a90",
			dir			= "test/w0a90",
			player_pos	= { 0, 0, 0 },
			player_dir	= { 0.0, 90.0, 0.0 },
			player_mode = "2D",
			phantoms    = { "laser", "drill", "spike", "rocket", "rodeo", "astro", "puzzle", "asteroid" },
		 },
		 -- mission test(stg978)
		 {
			name		= "stg978",
			dir			= "test/stg978",
			player_pos	= { 8147, -360, -18974 },
			player_mode = "3D",
			player_dir	= { 0.0, 180.0, 0.0 },
			dead_line       = -50000,
			phantoms    = { "laser", "drill", "spike", "rocket", "rodeo", "astro", "puzzle" },
		 },
		 -- mission test(stg981)
		 {
			name		= "stg981",
			dir			= "test/stg981",
			player_pos	= { 0, 5.00, -37.43 },
			player_mode = "2D",
			player_dir	= { 0.0, 180.0, 0.0 },
			dead_line       = -50000,
			phantoms    = { "laser", "drill", "spike", "rocket", "rodeo", "astro", "puzzle", "asteroid" },
		 },
		 -- mission test(stg985)
		 {
			name		= "stg985",
			dir			= "test/stg985",
			player_pos	= { 1065.00, 49.91, -594.88 },
			player_mode = "3D",
			player_dir	= { 0.0, 270.0, 0.0 },
			dead_line       = -50000,
		 },
		 -- mission test(stg988)
		 {
			name		= "stg988",
			dir			= "test/stg988",
			player_pos	= { -1111.71, 49.99, -594.29 },
			player_mode = "3D",
			player_dir	= { 0.0, 270.0, 0.0 },
			dead_line       = -50000,
		 },
		 -- mission test(stg989)
		 {
			name		= "stg989",
			dir			= "test/stg989",
			player_pos	= { 0, -138.52, -301.15 },
			player_mode = "2D",
			player_dir	= { 0.0, 180.0, 0.0 },
			dead_line       = -50000,
		 },
	  },
   },
}
```