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
    if (game.global.ui.homeUI != null) game.global.ui.homeUI.position = {x:0.5 * game.width,y: 0.5 * game.height};
    if (game.global.ui.levelsUI != null) game.global.ui.levelsUI.position = {x:0.3 * game.width,y: 0.25 * game.height};
}

//Update function that is always running on the background to resize
function updateSize() {
	
    var game = globals.game;
	var mode = game.global.mode;

    // Adapt the size of the interface to the screen    
    game.global.ui.pipe.height = game.height - (390 + 212);

    // Basket position
    game.global.ui.basket.y = game.height - (5 + game.global.ui.basket.children[0].height);
    
    game.global.ui.basket.children[1].width = game.width - (game.global.ui.basket.children[0].width + game.global.ui.basket.children[2].width);
    game.global.ui.basket.children[2].x = game.width - (5 + game.global.ui.basket.children[2].width);
    
    // Menu position
	game.global.ui.menu.x = game.width;

    
    //Patrick position
    game.global.ui.pat.x = game.global.ui.basket.children[2].x+5;
    game.global.ui.pat.y = game.global.ui.basket.y-40;

    // Win UI position
    game.global.ui.winUI.x = game.width;
    game.global.ui.winUI.y = game.height;
    
    //positions of shapes in the basket aka outside of the gamezone
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
