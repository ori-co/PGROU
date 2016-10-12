//Create a new Phaser JS game
var game = new Phaser.Game("100%", "100%", Phaser.CANVAS);

game.global = {}

// Current editing mode
// 0 : drag/drop
// 1 : rotation droite
// 2 : rotation gauche
// 3 : changement de couleur
game.global.editingMode=0;

// Current value for mute button
game.global.muteValue=false;

// Add the states of the game
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('levelsMap',levelsMapState);
game.state.add('levelPlay', levelPlayState);
game.state.add('freePlay', freePlayState);
game.state.add('win', winState);

// Call the first state of the game
game.state.start('load');

