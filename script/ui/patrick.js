define ([
    "sounds/autoPlaySounds",
    "data/wording"

    ], function(
        autoPlaySounds,
        wordings
        ) {
            
         /**
         * 
         * @class 
         * @memberof 
         * @param 
         */
        function Patrick(game){
            this.body = null;
            this.mouth =null;
            this.eyes = null;
        };

        Patrick.prototype = {
            blinks : function(game){
                this.eyes.animations.play('blink',10,false);
                var delay = Math.random()*3 +2;

                var localContext = this;
                game.time.events.add(Phaser.Timer.SECOND * delay, function(){localContext.blinks(game)}, this);

            }
            ,
            speaks : function(game, soundObject){
                var localContext = this;
                soundObject.options.onplay = function(){
                    game.canPlay=false;
                    if (localContext.mouth != null) localContext.mouth.animations.play('talk',8,true);
                };

                soundObject.options.onfinish = function(){
                    if (localContext.mouth != null) localContext.mouth.animations.stop(null,true);
                    game.canPlay = true;
                };
            }
        };


        // Sub class of Patrick for Home Page
        function PatrickHome(game,parentGroup){
            Patrick.call(game);

            this.body = parentGroup.addChild(game.make.sprite(-300,-50,'home-patrick'));
            this.body.scale.setTo(0.5,0.5);
            this.eyes = this.body.addChild(game.make.sprite(320,80,'patrick-eyes'));
            this.eyes.scale.setTo(-1,1);
            this.eyes.animations.add('blink');
            this.mouth = this.body.addChild(game.make.sprite(300,170,'patrick-mouth'));
            this.mouth.scale.setTo(-1,1);
            this.mouth.animations.add('talk');

            this.blinks(game);
            game.patrick = this; // to create animation of patrick mouth thanks to this.speaks(game, soundObject)
        };

        PatrickHome.prototype = Object.create(Patrick.prototype);
        PatrickHome.prototype.constructor = PatrickHome;



        // Sub class of Patrick for Game state
        function PatrickGame(){
            Patrick.call(game);
        };

        PatrickGame.prototype = Object.create(Patrick.prototype);
        PatrickGame.prototype.constructor = PatrickGame;



        // Sub class of Patrick for win state
        function PatrickWin(){
            Patrick.call(game);
        };

        PatrickWin.prototype = Object.create(Patrick.prototype);
        PatrickWin.prototype.constructor = PatrickWin;



        // Sub class of Patrick for fail state
        function PatrickFail(){
            Patrick.call(game);
        };

        PatrickFail.prototype = Object.create(Patrick.prototype);
        PatrickFail.prototype.constructor = PatrickFail;



        return {
            PatrickHome : PatrickHome,
            PatrickGame : PatrickGame,
            PatrickWin : PatrickWin, 
            PatrickFail : PatrickFail
        };

});
