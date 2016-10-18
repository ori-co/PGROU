requirejs([
		"states", 
		"global"
	], function(
		states, 
		globals
		) {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".


//Create a new Phaser JS game
var game = new Phaser.Game("100%", "100%", Phaser.CANVAS);

globals.game = game;

game.global = {};

game.global.language = "fr";
	
game.global.ui = {};
game.global.solution = {};

// Current value for mute button
game.global.muteValue=false;


// Add the states of the game
game.state.add('load', states.loadState);
game.state.add('menu', states.menuState);
game.state.add('levelsMap',states.levelsMapState);
game.state.add('levelPlay', states.levelPlayState);
game.state.add('freePlay', states.freePlayState);
game.state.add('win', states.winState);

// Call the first state of the game
game.state.start('load');

});