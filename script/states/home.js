define ([
    "ui/wallpaper",
    "ui/navigationMenu",
    "ui/homeButtons",
    "sounds/autoPlaySounds"
    ], function(
        Wallpaper,
        NavigationMenu,
        HomeButtons,
        autoPlaySound
        ) {

        /**
         * Load all assets before the game starts 
         * @class 
         * @memberof Patrimath
         * @param {Phaser.Game} game
         */
        function HomeState(){
            this.ui={};

            // this.mode="home";
        };

        HomeState.prototype = {
            create : function (){
                this.ui.wallpaper = new Wallpaper(this.game, 'background-home');
                this.ui.navigationMenu = new NavigationMenu(this.game, "home");
                this.ui.buttons = new HomeButtons(this.game);
                new autoPlaySound.InstructionsSounds(this.game, "welcome");

                var localContext = this;
                this.game.scale.setResizeCallback(function () {
                    localContext.ui.wallpaper.updateWallpaperSize(localContext.game);
                    localContext.ui.navigationMenu.updateSize(localContext.game);
                    localContext.ui.buttons.updatePosition(localContext.game);
                }, this.game);
            }
        };

        return HomeState;
});