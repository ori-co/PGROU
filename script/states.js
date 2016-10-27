define ([
		"global",
		"functions/preload",
		"functions/wallpaper",
		"functions/buildMenu",
		"functions/navigationButtons",
		"functions/sounds",
		"functions/gameCreation"
	], function(
		globals,
		preload,
		wallpaper,
		buildMenu,
		navigationButtons,
		sounds,
		gameCreation
		) {


// Define the states of the game


	// LevelMode
	var levelPlayState = {
	    create: function (){
			globals.game.global.mode = 'levelMode';
			gameCreation.initGame();
			gameCreation.create();
			sounds.levelModeAutoPlaySound();
		}
	};

	// FreeMode
	var freePlayState = {
	    create: function (){
			globals.game.global.mode = 'freeMode';
			gameCreation.initGame();
			gameCreation.create();
			sounds.freeModeAutoPlaySound();
		}
	};

return {
	menuState:menuState, 
	levelsMapState:levelsMapState, 
	levelPlayState:levelPlayState, 
	freePlayState:freePlayState 
};
});