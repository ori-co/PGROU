define ([
    "ui/wallpaper",
    "ui/navigationMenu",
    "ui/levelsMapUI",
    "sounds/autoPlaySounds"
    ], function(
        Wallpaper,
        NavigationMenu,
        LevelsMapUI,
        autoPlaySound
        ) {

        /**
         * Load all assets before the game starts 
         * @class 
         * @memberof Patrimath
         * @param {Phaser.Game} game
         */
        function LevelsMapState(){};

        LevelsMapState.prototype = {
            create : function (){
                this.wallpaper = new Wallpaper(this.game, 'background-home');
                this.navigationMenu = new NavigationMenu(this.game, "levelsMap");
                this.ui = new LevelsMapUI(this.game);
                new autoPlaySound.InstructionsSounds(this.game, "introduction");

                var localContext = this;
                this.game.scale.setResizeCallback(function () {
                    localContext.wallpaper.updateWallpaperSize(localContext.game);
                    localContext.navigationMenu.updatePosition(localContext.game);
                    localContext.ui.updatePosition(localContext.game);
                }, this.game);
            }
        };

        return LevelsMapState;
});