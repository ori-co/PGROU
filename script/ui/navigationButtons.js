define ([
    "game/shape",
    "sounds/autoPlaySounds",
    "data/wording",
    "data/palette"

    ], function(
        Shape,
        autoPlaySounds,
        wordings,
        colors

        ) {

        function NavigationButton(game, gameArea, parentMenu, buttonName, position){
            this.cpt = 0;
            switch (buttonName) {
                case 'buttonHome':
                    this.name = 'button-home';
                    this.action = function() {this.goTo(game, 'menu')};
                    this.instructions = function(){};
                break;
                case 'buttonLevelsMap':
                    this.name = 'button-back';
                    this.action = function(){this.goTo(game, 'levelsMap')};
                    this.instructions = function(){};
                break;
                case 'buttonMute':
                    this.name = 'button-mute';
                    this.action = function(){this.toggleMute(this.button,game)};
                    this.instructions = function(){};
                break;
                case 'buttonPrint':
                    this.name = 'button-print';
                    this.action = function(){this.pdf()};
                    this.instructions = function() {this.playHelpSound(game, 'help_print')};
                break;
                case 'buttonExport':
                    this.name = 'button-export';
                    this.action = function(){this.exportProblem(gameArea)};
                    this.instructions = function() {this.playHelpSound(game, 'help_export')};
                break;
                case 'buttonLang':
                    this.name = 'button-colors';
                    this.action = function(){this.toggleLang(game)};
                    this.instructions = function(){};
                break;
            }

            this.button = game.make.button( - (position*50 + 18), 10, this.name, this.action, this, 2, 1, 0, 1);
            this.button.events.onInputOver.add(this.instructions, this);
            
            parentMenu.addChild(this.button);
                    
            // Check the value of the mute function to update the mute button
            if(buttonName == "buttonMute" && game.muteValue) this.button.setFrames(3, 0, 1, 0);
        };

        NavigationButton.prototype = {
            goTo: function(game, stateName) {
                new autoPlaySounds.SoundEffects(game, 'click');
                game.state.start(stateName);
            }, 

            playHelpSound: function(game, mp3Name){
                var mouthSprite = game.patrick;

                if (this.cpt == 0){
                    var helpSound = soundManager.createSound({id : mp3Name, url:wordings[game.language].soundsDir+"/" +mp3Name+".mp3"});
                    if(game.canPlay){
                        game.canPlay = false;
                        soundManager.stopAll();
                        game.patrick.speaks(game ,helpSound);
                        helpSound.play();
                        this.cpt++;
                    }
                }
            },

            toggleMute: function(item, game){
                if (!soundManager.muted){
                    soundManager.mute();
                    item.setFrames(3, 0, 1, 0);
                    game.muteValue = true;
                }else{
                    soundManager.unmute();
                    new autoPlaySounds.SoundEffects(game, 'click');
                    item.setFrames(2, 1, 0, 1);
                    game.muteValue = false;
                }
            }, 

            pdf : function(){
                var pdf = new jsPDF('l','cm','a4');
                pdf.addHTML(document.body,function() { pdf.output('datauri'); });
                pdf.save(wordings[game.language].exportPDFname+'.pdf');
            }, 

            exportProblem : function(gameArea){
                var problem = {};
                problem.pattern=[];
                problem.basket=[];
                problem.storeEnabled=true;

                gameArea.shapesInPlace.forEach(function(shape){
                    if (shape instanceof  Shape){
                        if (!gameArea.isOutOfGameAreaX(shape) && !gameArea.isOutOfGameAreaY(shape)){
                            problem.pattern.push({shape:shape.key, color:colors.palette.indexOf(shape.tint), rotation:shape.frame, anchorPoint:{x:shape.x, y:shape.y}});
                        } else {
                            problem.basket.push({shape:shape.key /*, color:colors.palette.indexOf(shape.tint), rotation:shape.frame*/ });
                        }
                    }
                });

                //Open a pop-up to save the json file
                window.open().document.write(JSON.stringify(problem));
            }, 

            toggleLang: function(game){
                (game.language == "fr") ? game.language="test" : game.language="fr";
            }
        }

        return NavigationButton;
});