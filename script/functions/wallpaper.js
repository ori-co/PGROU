function gameWallpaper() {

	//Wallpaper
    var myBitmap = game.make.bitmapData(3000, 2000);
    myBitmap.addToWorld();
    var grd = myBitmap.context.createLinearGradient(0, 0, 1000, 1000);
    grd.addColorStop(0, "#66d1f9");
    grd.addColorStop(1, "#bce3f0");
    myBitmap.context.fillStyle = grd;
    myBitmap.context.fillRect(0, 0, 3000, 2000);
	
	game.scale.setResizeCallback(function () {
        updateSize(this);
    }, game);
}

function menuWallpaper(background) {
	var wallpaper = game.add.sprite(0,0, background);
	 
	updateWallpaperSize(wallpaper);
	 
	game.scale.setResizeCallback(function () {
        updateWallpaperSize(wallpaper);
     }, game);	
}