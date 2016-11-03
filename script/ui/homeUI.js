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
            goToLevelsMapButton.events.onInputOver.add(function() {new autoPlaySounds.HelpSounds(game, 'help-levelMode',0)}, this);
            goToLevelsMapButton.addChild(game.make.text(30,30,wordings[game.language].levelmode,goToStyle));
            
            var goToFreeModeButton = this.buttons.addChild(game.add.button(0,50, 'button-goTo', function() {this.goTo(game,'freePlay')}, this,  2,1, 0, 1 ));
            goToFreeModeButton.events.onInputOver.add(function () {new autoPlaySounds.HelpSounds(game, 'help-freeMode',0)},this);
            goToFreeModeButton.addChild(game.make.text(30,30,wordings[game.language].freemode,goToStyle));

            
        };

        HomeUI.prototype = {
            updatePosition : function(game){
               this.buttons.position = {x:0.5 * game.width,y: 0.5 * game.height};
            }
            ,
            goTo: function(game, stateName) {
                new autoPlaySounds.SoundEffects(game, 'sound-click');
                game.state.start(stateName);
            }
        };

        return HomeUI;
});