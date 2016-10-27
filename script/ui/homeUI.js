define ([
    "sounds/autoPlaySounds",
    "data/wording",
    "ui/patrick"

    ], function(
        autoPlaySounds,
        wordings,
        patrick
        ) {

        /**
         * 
         * @class 
         * @memberof 
         * @param 
         */
        function HomeUI(game){
            this.buttons = new Phaser.Group(game);
            this.updatePosition(game);

            var goToStyle = {font: "23px Arial", fontWeight: "bold", fill: "#0D004C"};

            new patrick.PatrickHome(game, this.buttons);

            var goToLevelsMapButton =this.buttons.addChild(game.add.button(0,-50, 'button-goTo', function() {this.goTo(game,'levelsMap')}, this,  2,1, 0, 1 ));
            goToLevelsMapButton.events.onInputOver.add(function() {this.playHelpSound(game, 'classic')}, this);
            goToLevelsMapButton.addChild(game.make.text(30,30,wordings[game.language].levelmode,goToStyle));
            
            var goToFreeModeButton = this.buttons.addChild(game.add.button(0,50, 'button-goTo', function() {this.goTo(game,'freePlay')}, this,  2,1, 0, 1 ));
            goToFreeModeButton.events.onInputOver.add(function () {this.playHelpSound(game, 'free')},this);
            goToFreeModeButton.addChild(game.make.text(30,30,wordings[game.language].freemode,goToStyle));

            
        };

        HomeUI.prototype = {
            updatePosition : function(game){
               this.buttons.position = {x:0.5 * game.width,y: 0.5 * game.height};
            }
            ,
            goTo: function(game, stateName) {
                new autoPlaySounds.SoundEffects(game, 'click');
                game.state.start(stateName);
            }
            ,
            playHelpSound: function(game, mp3Name){
                var mouthSprite = game.patrick;

                var helpSound = soundManager.createSound({id : mp3Name, url:wordings[game.language].soundsDir+"/" +mp3Name+".mp3"});
                if(game.canPlay){
                    game.canPlay = false;
                    soundManager.stopAll();
                    game.patrick.speaks(game, helpSound);
                    helpSound.play();
                }
            }

        };

        return HomeUI;
});