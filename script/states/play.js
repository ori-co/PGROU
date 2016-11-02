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
        function PlayState(mode){
            this.playMode = mode;
        };

        PlayState.prototype = {
            init : function (levelNum, levelText){
                this.levelNum = levelNum;
                this.levelText = (this.playMode == "levelMode") ? levelText : "";    
            }
            ,

            create : function (){
                this.wallpaper = new Wallpaper(this.game, 'background-game');
                this.navigationMenu = new NavigationMenu(this.game, this.playMode, this.levelNum);
                this.ui = new GameUI(this.game, this.playMode, this.levelNum, this.levelText);
                new autoPlaySound.InstructionsSounds(this.game, "help_"+ this.playMode);

                var localContext = this;
                this.game.scale.setResizeCallback(function () {
                    localContext.wallpaper.updateWallpaperSize(localContext.game);
                    localContext.navigationMenu.updatePosition(localContext.game);
                    localContext.ui.updatePosition(localContext.game);
                }, this.game);
            }
        };

        return PlayState;
});