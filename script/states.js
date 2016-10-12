// Define the states of the game
// Preload :load all assets once
var loadState = {
	preload : preload, 
	create : function(){
		game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
		// Call the menu state
		game.state.start('menu');
	}
}

// Menu
var menuState = {
	create : function() {
		game.global.mode = 'home';
		menuWallpaper('background-home');
		buildNavigationMenu();
		homeButtons();
	}
}

var levelsMapState = {
	create : function(){
		game.global.mode = 'levelsMap';
		menuWallpaper('background-home');
		buildNavigationMenu();
		levelsButtons();
	}
}

// LevelMode
var levelPlayState = {
    create: function (){
		game.global.mode = 'levelMode';
		create();
	}
};

// FreeMode
var freePlayState = {
    create: function (){
		game.global.mode = 'freeMode';
		create();
	}
};

// Win
var winState = {
	create : function () {
		game.global.mode = 'win';
		menuWallpaper('background-win');
		buildNavigationMenu();
		winButtons();
	}
}