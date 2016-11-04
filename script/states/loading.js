define ([
    ], function(
        ) {

        /**
         * Load all assets before the game starts 
         * @class 
         * @memberof Patrimath
         * @param {Phaser.Game} game
         */
        function LoadState(){};

        LoadState.prototype = {
            preload : function () {
                // Backgrounds
                this.game.load.image('background-home', 'assets/images/backgrounds/backgroundHome.png');
                this.game.load.image('background-game','assets/images/backgrounds/backgroundGame.png');
                this.game.load.image('gameArea','assets/images/backgrounds/gameArea.png');

                // Buttons
                this.game.load.spritesheet('button-goTo-freemode','assets/images/buttons/freemode.png',300,215);
                this.game.load.spritesheet('button-goTo-levelmode','assets/images/buttons/levelmode.png',300,215);
                this.game.load.spritesheet('button-level','assets/images/buttons/levels.png',78,77);
                
                // Shapes assets
                this.game.load.spritesheet('hexagon','assets/sprites/hexagon.png',130,130);
                this.game.load.spritesheet('square','assets/sprites/square.png',130,130);
                this.game.load.spritesheet('diamond','assets/sprites/lozenge.png',130,130);
                this.game.load.spritesheet('trapeze','assets/sprites/trapezoid.png',130,130);
                this.game.load.spritesheet('triangleEqui','assets/sprites/triangle-equi.png',130,130);
                this.game.load.spritesheet('triangle','assets/sprites/triangle.png',130,130);
                
                // Game menu assets (basket, store and buttons)
                this.game.load.image('store', 'assets/images/menu/store.png');
                this.game.load.image('pipe', 'assets/images/menu/store-pipe.png');
                
                this.game.load.spritesheet('trashbin', 'assets/images/buttons/trashbin.png', 83, 76);
                
                this.game.load.spritesheet('button-square', 'assets/images/buttons/shape-square.png', 78, 77);
                this.game.load.spritesheet('button-trapeze', 'assets/images/buttons/shape-trapeze.png', 78, 77);
                this.game.load.spritesheet('button-triangleEqui', 'assets/images/buttons/shape-t-equi.png', 78, 77);
                this.game.load.spritesheet('button-hexagon', 'assets/images/buttons/shape-hexagon.png', 78, 77);
                this.game.load.spritesheet('button-triangle', 'assets/images/buttons/shape-triangle.png', 78, 77);
                this.game.load.spritesheet('button-diamond', 'assets/images/buttons/shape-diamond.png', 78, 77);
                
                this.game.load.image('basket-left', 'assets/images/menu/basket-left.png');
                this.game.load.image('basket-right', 'assets/images/menu/basket-right.png');
                this.game.load.image('basket-middle', 'assets/images/menu/basket-middle.png');
                
                this.game.load.spritesheet('button-colors', 'assets/images/buttons/option-color.png', 48, 48);
                this.game.load.spritesheet('button-colors-picto','assets/images/buttons/option-color-picto.png',48,48)
                this.game.load.spritesheet('button-back', 'assets/images/buttons/option-map.png', 48, 48);
                this.game.load.spritesheet('button-home', 'assets/images/buttons/option-home.png', 48, 48);
                this.game.load.spritesheet('button-export', 'assets/images/buttons/option-export.png', 48, 48);
                this.game.load.spritesheet('button-print', 'assets/images/buttons/option-print.png', 48, 48);
                this.game.load.spritesheet('button-mute', 'assets/images/buttons/option-mute.png', 48, 48);
                this.game.load.spritesheet('button-retry', 'assets/images/buttons/option-retry.png', 48, 48);
                this.game.load.spritesheet('ribbon', 'assets/images/buttons/ribbon.png', 204, 391);
                
                this.game.load.image('menu-left', 'assets/images/menu/menu-left.png');
                this.game.load.image('menu-right', 'assets/images/menu/menu-right.png');
                this.game.load.image('menu-middle', 'assets/images/menu/menu-middle.png');
                
                // Patrick animations assets
                this.game.load.image('patrick', 'assets/images/patrick/patrick.png');
                this.game.load.spritesheet('patrick-mouth','assets/images/patrick/mouth.png',31,22,4);
                this.game.load.spritesheet('patrick-eyes','assets/images/patrick/eyes.png',80,66,5);
                this.game.load.image('home-patrick','assets/images/patrick/home-patrick.png',531,970);
                this.game.load.image('win-patrick','assets/images/patrick/win-patrick.png');
                this.game.load.spritesheet('win-patrick-mouth','assets/images/patrick/win-mouth.png',28,18,4);
                this.game.load.spritesheet('fail-patrick-mouth','assets/images/patrick/fail-mouth.png',28,18,4);
                this.game.load.spritesheet('win-patrick-eyes','assets/images/patrick/win-eyes.png',70,40,7);


                // UI
                this.game.load.spritesheet('rotation-ui','assets/images/buttons/rotation_ui.png');
                this.game.load.spritesheet('stars', 'assets/images/stars/reward.png',150,140);
                this.game.load.spritesheet('level-status', 'assets/images/stars/status.png',68,35);

                // Sounds 
                var dir = "assets/audio/" + this.game.language + "/";
                this.game.load.audio('welcome-home', dir + 'welcome.mp3');
                this.game.load.audio('welcome-levelsMap', dir+'introduction.mp3');
                this.game.load.audio('welcome-levelPlay', dir+'help_levelMode.mp3');
                this.game.load.audio('welcome-freePlay', dir+'help_freeMode.mp3');
                this.game.load.audio('help-levelMode', dir+'classic.mp3');
                this.game.load.audio('help-freeMode', dir+'free.mp3');
                this.game.load.audio('help-trashbin', dir+'help_trash.mp3');
                this.game.load.audio('help-color', dir+'help_color.mp3');
                this.game.load.audio('help-print', dir+'help_print.mp3');
                this.game.load.audio('help-lock', dir+'help_lock.mp3');
                this.game.load.audio('help-export', dir+'help_export.mp3');
                this.game.load.audio('help-placement', dir+'help_placement.mp3');
                this.game.load.audio('sound-trashbin', dir+'trashbin.mp3');
                this.game.load.audio('sound-click', dir+'click.mp3');
                this.game.load.audio('sound-snap', dir+'snap.mp3');
                for (var i=0;i<4;i++) this.game.load.audio('endOfGame-'+i, dir+'end-'+i+'.mp3');
                for (var key in this.game.shapes){
                    for (var i=0; i<15; i++) {
                        this.game.load.audio(key + "_" + (i+1) + "_" + "on", dir+key+(i+1)+".mp3");
                        this.game.load.audio(key + "_" + i + "_" + "off", dir+key+"_off"+i+".mp3");
                    }
                }

            }, 

            create : function (){
                this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
                this.game.scale.fullScreenScaleMode =  Phaser.ScaleManager.RESIZE;
                // Call the menu state
                this.game.state.start('menu');
            }
        };

        return LoadState;
});