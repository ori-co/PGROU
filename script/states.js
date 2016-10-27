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


	// Menu
	var menuState = {
		create : function() {
			globals.game.global.mode = 'home';
			wallpaper.menuWallpaper('background-home');
			buildMenu.buildNavigationMenu();
			navigationButtons.homeButtons();
			sounds.homeAutoPlaySound();
		}
	}

	var levelsMapState = {
		create : function(){
			globals.game.global.mode = 'levelsMap';
			wallpaper.menuWallpaper('background-home');
			buildMenu.buildNavigationMenu();
			navigationButtons.levelsButtons();
			sounds.levelsMapAutoPlaySound();
		}
	}

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