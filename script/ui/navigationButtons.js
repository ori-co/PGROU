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
                    this.instructions = "";
                break;
                case 'buttonLevelsMap':
                    this.name = 'button-back';
                    this.action = function(){this.goTo(game, 'levelsMap')};
                    this.instructions = "";
                break;
                case 'buttonMute':
                    this.name = 'button-mute';
                    this.action = function(){this.toggleMute(this.button,game)};
                    this.instructions = "";
                break;
                case 'buttonPrint':
                    this.name = 'button-print';
                    this.action = function(){this.pdf()};
                    this.instructions = "help-print";
                break;
                case 'buttonExport':
                    this.name = 'button-export';
                    this.action = function(){this.exportProblem(gameArea)};
                    this.instructions = "help-export";
                break;
                case 'buttonLang':
                    this.name = 'button-colors';
                    this.action = function(){this.toggleLang(game)};
                    this.instructions = "";
                break;
            }

            this.button = game.make.button( - (position*50 + 18), 10, this.name, this.action, this, 2, 1, 0, 1);
            var that = this;
            this.button.events.onInputOver.add(function() {new autoPlaySounds.HelpSounds(game, that.instructions, that.cpt);that.cpt=1;});
            
            parentMenu.addChild(this.button);
                    
            // Check the value of the mute function to update the mute button
            if(buttonName == "buttonMute" && game.muteValue) this.button.setFrames(3, 0, 1, 0);
        };

        NavigationButton.prototype = {
            goTo: function(game, stateName) {
                new autoPlaySounds.SoundEffects(game, 'sound-click');
                game.state.start(stateName);
            }, 

            toggleMute: function(item, game){
                if (!game.soundManager.mute){
                    game.soundManager.mute = true;
                    item.setFrames(3, 0, 1, 0);
                    game.muteValue = true;
                }else{
                    game.soundManager.mute=false;
                    new autoPlaySounds.SoundEffects(game, 'sound-click');
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