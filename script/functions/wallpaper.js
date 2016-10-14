define ([
        "global",
        "functions/updateSize"
    ], function(
        globals,
        update
        ) {

function gameWallpaper() {

	//Wallpaper
    var myBitmap = globals.game.make.bitmapData(3000, 2000);
    myBitmap.addToWorld();
    var grd = myBitmap.context.createLinearGradient(0, 0, 1000, 1000);
    grd.addColorStop(0, "#66d1f9");
    grd.addColorStop(1, "#bce3f0");
    myBitmap.context.fillStyle = grd;
    myBitmap.context.fillRect(0, 0, 3000, 2000);
	
	globals.game.scale.setResizeCallback(function () {
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