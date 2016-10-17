define ([
		"global",
		"functions/addShapes",
		"functions/matrixUtils",
		"functions/gameButtons",
		"data/palette"
	], function(
		globals,
		addShapes,
		matrixUtils,
		gameButtons,
		colors
		) {

return function patternCreation(levelText) {
var game =globals.game;

	// Initially no button on distrib
	for (var key in game.global.shapes){
		game.global.shapes[key].shapeButton.visible=false;
		game.global.shapes[key].shapeButton.inputEnabled=false;
	}
	
	
	//JSON analysis				
    var jsonObj = JSON.parse(levelText);
	var shapeArray = jsonObj.problem.pattern;

    
	//Pattern creation

    for (var i = 0; i < shapeArray.length; i++) {

		var shapeName = shapeArray[i].shape;
		
		var tempSprite = game.add.sprite(Number(shapeArray[i].anchorPoint.x), Number(shapeArray[i].anchorPoint.y), shapeName);
		tempSprite.inputEnabled = true;
		tempSprite.tint =  colors.patternColor;
		tempSprite.frame = Number(shapeArray[i].rotation);
		tempSprite.alpha = 0.3;
		tempSprite.wantedColor = shapeArray[i].color;
		
		if (jsonObj.distrib=="off") {
			addShapes.addShape(shapeName);
		} else {
			game.global.shapes[shapeName].shapeButton.visible=true;
			game.global.shapes[shapeName].shapeButton.inputEnabled=true;
		}
		
		game.global.shapes[shapeName].shapesOfPattern.push(tempSprite);

		//addShapeToMatrix(tempSprite, game.global.solution.matPattern);
		//addShapeToArea(tempSprite,game.global.solution.areaPattern);
	}
	
	if (jsonObj.distrib=="off") {
		game.global.ui.bin.visible = false;
			
		gameButtons.setUnlockButton(true);
		gameButtons.enableUnlockButton(false);
	}
	
	//Update the pattern matrix with the shapes' matrix
	var patternInfo =  matrixUtils.getInfo('shapesOfPattern');
	game.global.solution.matPattern = patternInfo.mat;
	game.global.solution.areaPattern = patternInfo.area;
    
}	

});