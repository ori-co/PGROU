// Define states
// Preload
var loadState = {
	preload : preload, 
	create : function(){
		// Call the menu state
		game.state.start('freePlay');
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

// LevelMode
var levelPlayState = {
    create: function (){
		game.global.mode = 'levelMode';
		game.global.levelnum = 5;
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