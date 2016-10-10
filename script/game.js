//Create a new Phaser JS game
var game = new Phaser.Game("100%", "100%", Phaser.CANVAS, 'patrimath');

game.global = {
	// var init ...
	// global.levelnum
	// global.mode
	// global.levelText ??
}


// Add the states of the game
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('levelsMap',levelsMapState);
game.state.add('levelPlay', levelPlayState);
game.state.add('freePlay', freePlayState);
game.state.add('win', winState);

// Call the first state of the game
game.state.start('load');

