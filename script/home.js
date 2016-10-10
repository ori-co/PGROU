function homeButtons() {
	var toFreePlayButton = game.add.button(0,0, 'homeButton', goToFreePlay, this,  2,1, 0, 1 );
	var toFreePlayButton = game.add.button(0,100, 'homeButton', goToLevelPlay, this,  2,1, 0, 1 );
}

function goToFreePlay(){
	game.state.start('freePlay');
}

function goToLevelPlay(){
	game.state.start('levelPlay');
}