define ([
        "global",
        "functions/updateSize"
    ], function(
        globals,
        update
        ) {

function gameWallpaper() {

	//Wallpaper
    var wallpaper = globals.game.add.sprite(0,0, 'background-game');
	update.updateWallpaperSize(wallpaper);

	globals.game.scale.setResizeCallback(function () {
        update.updateWallpaperSize(wallpaper);
        update.updateSize(this);
    }, globals.game);
}

function menuWallpaper(background) {
	var wallpaper = globals.game.add.sprite(0,0, background);
	 
	update.updateWallpaperSize(wallpaper);
	 
	globals.game.scale.setResizeCallback(function () {
        update.updateWallpaperSize(wallpaper);
     }, globals.game);	
}

return {gameWallpaper:gameWallpaper, menuWallpaper:menuWallpaper};

});