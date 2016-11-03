define ([
    "ui/wallpaper",
    "ui/navigationMenu",
    "ui/homeUI",
    "sounds/autoPlaySounds"
    ], function(
        Wallpaper,
        NavigationMenu,
        HomeUI,
        autoPlaySounds
        ) {

        /**
         * Load all assets before the game starts 
         * @class 
         * @memberof Patrimath
         * @param {Phaser.Game} game
         */
        function HomeState(){};

        HomeState.prototype = {
            create : function (){
                this.wallpaper = new Wallpaper(this.game, 'background-home');
                this.navigationMenu = new NavigationMenu(this.game, "home");
                this.ui = new HomeUI(this.game);
                new autoPlaySounds.InstructionsSounds(this.game, "welcome-home");

                var localContext = this;
                this.game.scale.setResizeCallback(function () {
                    localContext.wallpaper.updateWallpaperSize(localContext.game);
                    localContext.navigationMenu.updatePosition(localContext.game);
                    localContext.ui.updatePosition(localContext.game);
                }, this.game);
            }
        };

        return HomeState;
});