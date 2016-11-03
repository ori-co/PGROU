define ([
    "ui/wallpaper",
    "ui/navigationMenu",
    "game/gameArea",
    "sounds/autoPlaySounds"
    ], function(
        Wallpaper,
        NavigationMenu,
        GameArea,
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
                this.gameArea = new GameArea(this.game, this.playMode, this.levelNum, this.levelText, 900,600);
                this.navigationMenu = new NavigationMenu(this.game, this.playMode, this.levelNum, this.gameArea);
                new autoPlaySound.InstructionsSounds(this.game, "help_"+ this.playMode);

                var localContext = this;
                this.game.scale.setResizeCallback(function () {
                    localContext.wallpaper.updateWallpaperSize(localContext.game);
                    localContext.navigationMenu.updatePosition(localContext.game);
                    localContext.gameArea.updatePosition(localContext.game);
                }, this.game);
            }
        };

        return PlayState;
});