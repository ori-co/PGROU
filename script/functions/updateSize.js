define ([
        "global",
        "functions/gameAreaBounds"
    ], function(
        globals,
        gameAreaBounds
        ) {

function updateWallpaperSize(wallpaper){
    var game = globals.game;

	wallpaper.height = game.height;
	wallpaper.width = game.width;
	if (game.global.ui.menu != null) game.global.ui.menu.x = game.width;
	if (game.global.ui.pat != null) game.global.ui.pat.y=globals.game.height - 500;
}

//Update function that is always running on the background to resize
function updateSize() {
	
    var game = globals.game;
	var mode = game.global.mode;

    // Adapt the size of the interface to the screen    
    game.global.ui.pipe.height = game.height - (390 + 212);
    // Basket position
    game.global.ui.basketLeft.y = game.height - (5 + game.global.ui.basketLeft.height);
    game.global.ui.basketMiddle.x = game.global.ui.basketLeft.x + game.global.ui.basketLeft.width;
    game.global.ui.basketMiddle.y = game.height - (5 + game.global.ui.basketLeft.height);
    game.global.ui.basketMiddle.width = game.width - (game.global.ui.basketLeft.width + game.global.ui.basketRight.width);
    game.global.ui.basketRight.x = game.width - (5 + game.global.ui.basketRight.width);
    game.global.ui.basketRight.y = game.height - (5 + game.global.ui.basketRight.height); 
    
    // Buttons on basket
   // game.global.ui.rotL.y = game.height - 210;
   // game.global.ui.rotR.y = game.height - 210;
    if (mode == "freeMode"){
        game.global.ui.col.y =game.height - 210;
    }
    
    // Menu position
	game.global.ui.menu.x = game.width;

    
    //Patrick position
    game.global.ui.pat.x=game.global.ui.basketRight.x+5;
    game.global.ui.pat.y=game.global.ui.basketRight.y-85;
    
    //positions of shapes in the basket aka outside of the gamezone
	var minX = game.global.gameAreaOrigin.x;
	var maxX = game.global.gameAreaOrigin.x + game.global.gameAreaSize.x;
	var minY = game.global.gameAreaOrigin.y;
	var maxY = game.global.gameAreaOrigin.y + game.global.gameAreaSize.y;
	
	for (var key in game.global.shapes){
		var shapeArray = game.global.shapes[key].shapesInPlace;
		for (i=0;i<shapeArray.length;i++){
			var tempSprite = shapeArray[i];
			if (gameAreaBounds.isOutOfGameArea(tempSprite)) {
				tempSprite.y = game.height - 155;
                if (tempSprite.x+tempSprite.width > game.width){
                    tempSprite.x=Math.random()*(game.width-310)+90;
                }
                 tempSprite.originalPosition = tempSprite.position.clone();
			}	
		}
	}
}

return {updateWallpaperSize:updateWallpaperSize, updateSize:updateSize};

});
