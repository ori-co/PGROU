function homeButtons() {
	var goToStyle = {font: "23px Arial", fontWeight: "bold", fill: "#0D004C"};

	var goToLevelsMapButton = game.add.button(600,500, 'button-goTo', goToLevelsMap, this,  2,1, 0, 1 );
	goToLevelsMapButton.addChild(game.make.text(30,30,levelmode,goToStyle));
	var goToFreeMode = game.add.button(600,600, 'button-goTo', goToFreePlay, this,  2,1, 0, 1 );
	goToFreeMode.addChild(game.make.text(30,30,freemode,goToStyle));
}

function levelsButtons(){
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

function goToImportJSON(item) {
	clicker();
	// var input = item;

    // var reader = new FileReader();
    // reader.onload = function(){
      // var dataURL = reader.result;
      // var output = document.getElementById('output');
      // output.src = dataURL;
    // };
    //reader.readAdArrayBuffer(input.files[0]);
	// selection d'un json + go
}

function goToHome() {
	clicker();
	game.state.start('menu');
}