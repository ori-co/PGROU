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

	game.global.ui.homeUI = game.add.group();
	var homeUI = game.global.ui.homeUI;
	homeUI.position = {x:0.5 * game.width,y: 0.5 * game.height};

	var goToStyle = {font: "23px Arial", fontWeight: "bold", fill: "#0D004C"};

	var goToLevelsMapButton =homeUI.addChild(game.add.button(0,-50, 'button-goTo', goToLevelsMap, this,  2,1, 0, 1 ));
	goToLevelsMapButton.events.onInputOver.add(sounds.sound_levelMode, this);
	goToLevelsMapButton.addChild(game.make.text(30,30,wording.levelmode,goToStyle));
	
	var goToFreeModeButton = homeUI.addChild(game.add.button(0,50, 'button-goTo', goToFreePlay, this,  2,1, 0, 1 ));
	goToFreeModeButton.events.onInputOver.add(sounds.sound_freeMode,this);
	goToFreeModeButton.addChild(game.make.text(30,30,wording.freemode,goToStyle));

	var patrick = homeUI.addChild(game.make.sprite(-300,-50,'home-patrick'));
	patrick.scale.setTo(0.5,0.5);

}

function levelsButtons(){
	var game = globals.game;

	game.global.ui.levelsUI = game.add.group();
	var levelsUI = game.global.ui.levelsUI;
	levelsUI.position = {x:0.3 * game.width,y: 0.25 * game.height};

	var levelStyle = {font: "30px Arial", fontWeight: "bold", fill: "#0D004C"};
	
	var levelsNumber = levels.length;
	
	for (i=0; i<levelsNumber-1;i++){
		var li = Math.floor(i/7);
		var col = i%7;
		var temp = levelsUI.addChild(game.add.button(col*90,li*90,'button-level', goToLevelPlay, this, 2,1,0,1));
		temp.number =i+1;
		temp.addChild(game.make.text(30,35,temp.number,levelStyle));
		var status = (i<game.global.saveData.length) ? game.global.saveData[i] : 0 ;
		temp.addChild(game.make.sprite(4,5,'level-status',status));
	}
	
	//game.add.button(600,li*80 + 100+200,'button-import', goToImportJSON, this, 2,1,0,1);
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

function goToHome() {
	sounds.clicker();
	globals.game.state.start('menu');
}


return {
	homeButtons:homeButtons,
	levelsButtons:levelsButtons,
	// winButtons:winButtons,
	goToFreePlay:goToFreePlay,
	goToLevelsMap:goToLevelsMap,
	goToLevelPlay : goToLevelPlay,
	// goToImportJSON:goToImportJSON,
	goToHome:goToHome
};

});