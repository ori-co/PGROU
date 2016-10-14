define ([
		"global",
		"functions/sounds",
		"data/wording",
		"data/levels"
	], function(
		globals,
		sounds,
		wording,
		levels
		) {

function homeButtons() {
	var game = globals.game;

	var goToStyle = {font: "23px Arial", fontWeight: "bold", fill: "#0D004C"};

	var goToLevelsMapButton = game.add.button(600,500, 'button-goTo', goToLevelsMap, this,  2,1, 0, 1 );
	goToLevelsMapButton.events.onInputOver.add(sounds.sound_levelMode, this);
	goToLevelsMapButton.addChild(game.make.text(30,30,wording.levelmode,goToStyle));
	
	var goToFreeModeButton = game.add.button(600,600, 'button-goTo', goToFreePlay, this,  2,1, 0, 1 );
	goToFreeModeButton.events.onInputOver.add(sounds.sound_freeMode,this);
	goToFreeModeButton.addChild(game.make.text(30,30,wording.freemode,goToStyle));
	
	game.global.ui.pat = game.add.sprite(100,game.height - 500,'home-patrick');
	game.global.ui.pat.scale.setTo(0.5,0.5);
}

function levelsButtons(){
	var game = globals.game;

	var levelStyle = {font: "30px Arial", fontWeight: "bold", fill: "#0D004C"};
	
	var levelsNumber = levels.length;
	
	for (i=0; i<levelsNumber-1;i++){
		var li = Math.floor(i/6);
		var col = i%6;
		var temp = game.add.button(col*80+600,li*80+200,'button-level', goToLevelPlay, this, 2,1,0,1);
		temp.number =i+1;
		temp.addChild(game.make.text(30,30,temp.number,levelStyle));
	}
	
	//game.add.button(600,li*80 + 100+200,'button-import', goToImportJSON, this, 2,1,0,1);
}

function winButtons(){
	var game = globals.game;

	var levelStyle = {font: "30px Arial", fontWeight: "bold", fill: "#0D004C"};
	
	var curLevel = game.global.levelnum;
	var again = game.add.button(600,500, 'button-again', goToLevelPlay, this,  2,1, 0, 1 );
	again.number = curLevel;
	again.addChild(game.make.text(30,30,again.number,levelStyle));
	
	if ( curLevel < levels.length -1){
		var next = game.add.button(700,500, 'button-next', goToLevelPlay, this,  2,1, 0, 1 );
		next.number = curLevel+1;
		next.addChild(game.make.text(30,30,next.number,levelStyle));
	}
	
	game.add.sprite(300,300,'win-patrick');
}

function goToFreePlay(){
	sounds.clicker();
	globals.game.state.start('freePlay');
}

function goToLevelsMap(){
	sounds.clicker();
	globals.game.state.start('levelsMap');
}

function goToLevelPlay(item){
	sounds.clicker();
	globals.game.global.levelnum = item.number;
	globals.game.state.start('levelPlay');
}

// function goToImportJSON(item) {
// 	sounds.clicker();
// 	// selection d'un json + go
// }

function goToHome() {
	sounds.clicker();
	globals.game.state.start('menu');
}


return {
	homeButtons:homeButtons,
	levelsButtons:levelsButtons,
	winButtons:winButtons,
	goToFreePlay:goToFreePlay,
	goToLevelsMap:goToLevelsMap,
	goToLevelPlay : goToLevelPlay,
	// goToImportJSON:goToImportJSON,
	goToHome:goToHome
};

});