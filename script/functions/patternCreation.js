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

function patternCreation(levelText) {
	var game =globals.game;
	//JSON analysis				
    var problem = JSON.parse(levelText);
	var pattern = problem.pattern;
	var basket = problem.basket;
	var storeEnabled = problem.storeEnabled;

	// Initially no button on distrib
	for (var key in game.global.shapes) switchShapeButton(key, false);

	//Pattern creation
    for (var i = 0; i < pattern.length; i++) {
    	addShapeToPattern(pattern[i].shape, pattern[i].anchorPoint, pattern[i].color, pattern[i].rotation);
    	if (storeEnabled) switchShapeButton(pattern[i].shape, true);
    }

    // Add shapes in basket
    for (var i = 0; i < basket.length; i++) {
		addShapes.addShape(basket[i].shape);
		if (storeEnabled) switchShapeButton(basket[i].shape, true);
	}
	
	// Unabled store if necessary
	if (!storeEnabled) {
		game.global.ui.bin.visible = false;
			
		gameButtons.setUnlockButton(true);
		gameButtons.enableUnlockButton(false);
	}
	
	//Update the pattern matrix with the shapes' matrix
	var patternInfo =  matrixUtils.getInfo('shapesOfPattern');
	game.global.solution.matPattern = patternInfo.mat;
	game.global.solution.areaPattern = patternInfo.area;
    
}	

function addShapeToPattern(shapeName, anchorPosition, color, rotation){
	var game =globals.game;

	var tempSprite = game.add.sprite(Number(anchorPosition.x), Number(anchorPosition.y), shapeName);
	tempSprite.inputEnabled = true;
	tempSprite.tint =  colors.patternColor;
	tempSprite.frame = Number(rotation);
	tempSprite.alpha = 0.3;
	tempSprite.wantedColor = color;

	// add to shapes Of pattern list
	game.global.shapes[shapeName].shapesOfPattern.push(tempSprite);
}

function switchShapeButton(shapeName, value){
	var game =globals.game;
	game.global.shapes[shapeName].shapeButton.visible=value;
	game.global.shapes[shapeName].shapeButton.inputEnabled=value;
}

return { patternCreation:patternCreation};
});