define ([
    "ui/wallpaper",
    "ui/navigationMenu",
    "ui/gameUI",
    "sounds/autoPlaySounds"
    ], function(
        Wallpaper,
        NavigationMenu,
        GameUI,
        autoPlaySound
        ) {

        /**
         * Load all assets before the game starts 
         * @class 
         * @memberof Patrimath
         * @param {Phaser.Game} game
         */
        function LevelPlayState(){};

        LevelPlayState.prototype = {
            init : function (levelText){
                this.levelText = levelText;
            }
            ,

            create : function (){
                this.wallpaper = new Wallpaper(this.game, 'background-game');
                this.navigationMenu = new NavigationMenu(this.game, "levelMode");
                this.ui = new GameUI(this.game, "levelMode");
                this.pattern = new Pattern(this.game, this.levelText);
                new autoPlaySound.InstructionsSounds(this.game, "help_begin");

                var localContext = this;
                this.game.scale.setResizeCallback(function () {
                    localContext.wallpaper.updateWallpaperSize(localContext.game);
                    localContext.navigationMenu.updatePosition(localContext.game);
                    localContext.ui.updatePosition(localContext.game);
                }, this.game);
            }
        };

        return LevelPlayState;
});