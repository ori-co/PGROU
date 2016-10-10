function homeButtons() {
	var toFreePlayButton = game.add.button(0,0, 'homeButton', goToFreePlay, this,  2,1, 0, 1 );
	var toFreePlayButton = game.add.button(0,100, 'homeButton', goToLevelsMap, this,  2,1, 0, 1 );
}

function levelsButtons(){
	var levelsNumber = levels.length;
	
	for (i=0; i<levelsNumber;i++){
		var li = Math.floor(i/10);
		var col = i%10;
		var temp = game.add.button(col*80,li*80,'levelButton', goToLevelPlay, this, 2,1,0,1);
		temp.number =i+1;
	}
	
	game.add.button(0,li*80 + 100,'importButton', goToImportJSON, this, 2,1,0,1);
}

function goToFreePlay(){
	clicker();
	game.state.start('freePlay');
}

function goToLevelsMap(){
	clicker();
	game.state.start('levelsMap');
}

function goToLevelPlay(item){
	clicker();
	game.global.levelnum = item.number;
	game.state.start('levelPlay');
}

function goToImportJSON() {
	clicker();
	// selection d'un json + go
}

function goToHome() {
	clicker();
	game.state.start('menu');
}