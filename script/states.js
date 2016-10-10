// Define states
// Preload
var loadState = {
	preload : preload, 
	create : function(){
		// Call the menu state
		game.state.start('menu');
	}
}

// Menu
var menuState = {
	create : function() {
		//Build the wallpaper and RESIZE
		menuWallpaper();
		homeButtons();
	}
}

var levelsMapState = {
	create : function(){
		menuWallpaper();
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
		
	}
}