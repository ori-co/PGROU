define ([
		"global",
		"functions/wallpaper",
		"functions/buildMenu",
		"functions/patternCreation",
		"functions/matrixUtils",
		"data/levels",
		"data/objShapes"
	], function(
		globals,
		wallpaper,
		buildMenu,
		patternCreation,
		matrixUtils,
		levels,
		shapes
		) {

// Creation of the game ui and pattern
function create() {
	var game =globals.game;

    //Build the wallpaper and RESIZE
    wallpaper.gameWallpaper();

    //Build the menu
    buildMenu.buildMenu();

	// Build the pattern
	if (game.global.mode == "levelMode") patternCreation(levels[game.global.levelnum]);
}

// to initialisa all game variables
function initGame(){
	var game =globals.game;

	// Game area
	game.global.gameAreaSize = {x:1000, y:600};
	game.global.safeAreaSize = {x:1300, y:1300};
	game.global.gameAreaOrigin = {x:130,y:0};

	//game.global.shapes = { square:objSquare , trapeze:objTrapeze , hexagon:objHexagon , triangleEqui:objTriangleEqui , triangleRect:objTriangleRect , diamond:objDiamond};
	game.global.shapes = shapes;
	// game.global.shapes[key] = { nbDir : .., mat : ..., area : ...,  shapeButton : ... , shapesInPlace : ..., shapesOfPattern : ...}
	for (var key in game.global.shapes) {
		if (game.global.shapes[key].shapesInPlace != undefined) for (i=0; i< game.global.shapes[key].shapesInPlace.length; i++) game.global.shapes[key].shapesInPlace[i].destroy();
		game.global.shapes[key].shapesInPlace =[];
		if (game.global.shapes[key].shapesOfPattern != undefined) for (i=0; i< game.global.shapes[key].shapesOfPattern.length; i++) game.global.shapes[key].shapesOfPattern[i].destroy();
		game.global.shapes[key].shapesOfPattern = [];
	}
	

	// temp initialisatipn of different matrix
	game.global.solution.matPattern = matrixUtils.matrixInitialisation(game.global.safeAreaSize.x,game.global.safeAreaSize.y);
	game.global.solution.areaPattern = 0;

	game.global.secondChance = false;
}

return { create:create, initGame:initGame};

});