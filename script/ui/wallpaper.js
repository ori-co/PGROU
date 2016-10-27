define ([
    ], function(
        ) {

        function Wallpaper(game, imgName){
            this.img = game.add.sprite(0,0, imgName);
            this.updateWallpaperSize(game);
        };

        Wallpaper.prototype = {
            updateWallpaperSize : function(game) {
                this.img.height = game.height;
                this.img.width = game.width;
            }
        }


return Wallpaper;

});