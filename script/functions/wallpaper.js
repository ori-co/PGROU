define ([
        "global",
        "functions/updateSize"
    ], function(
        globals,
        update
        ) {

function gameWallpaper() {
    var game = globals.game;

	//Wallpaper
    var wallpaper = game.add.sprite(0,0, 'background-game');
	update.updateWallpaperSize(wallpaper);

	game.scale.setResizeCallback(function () {
        update.updateWallpaperSize(wallpaper);
        update.updateSize(this);
    }, game);

    // Game Area
    var origin = game.global.gameAreaOrigin;
    var size = game.global.gameAreaSize;
    game.add.sprite(origin.x+65,origin.y+65, 'gameArea').scale.setTo(size.x/50,size.y/50);

}

function menuWallpaper(background) {
    var game = globals.game;

	var wallpaper = game.add.sprite(0,0, background);
	 
	update.updateWallpaperSize(wallpaper);
	 
	game.scale.setResizeCallback(function () {
        update.updateWallpaperSize(wallpaper);
     }, game);	
}

return {gameWallpaper:gameWallpaper, menuWallpaper:menuWallpaper};

});