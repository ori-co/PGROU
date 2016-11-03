define ([
    "ui/patrick",
    "data/levels",
    "ui/levelButton",
    "sounds/autoPlaySounds"


    ], function(
        patrick,
        levels,
        LevelButton,
        autoPlaySounds

        ) {

        /**
         * 
         * @class 
         * @memberof 
         * @param 
         */
        function Pannel(game, num){
            this.levelNum=num;
            this.elements = new Phaser.Group(game);

            this.pat = new patrick.PatrickPannel(game, this.elements);
            new LevelButton(game, this.elements, -220, -100, num, 4);
            if (num <levels.length -1) new LevelButton(game, this.elements, -140, -100, num+1, 5);

            this.elements.visible = false;
            this.updatePosition(game);
        };

        Pannel.prototype = {
            showPannel: function (game, nbStars){
                if (nbStars >0) {
                    this.pat.setHappyMouth(game);
                } else {
                    this.pat.setSadMouth(game);
                }
                autoPlaySounds.InstructionsSounds(game, 'endOfGame-'+nbStars);
                
                this.elements.visible= true;
            }
            ,
            isDisplayed(){
                return this.elements.visible;
            }
            ,
            updatePosition : function(game){
                this.elements.x=game.width;
                this.elements.y=game.height;
            }
            ,
            saveResult(game, score){
                var oldScore = (game.saveData[this.levelNum-1] ==undefined) ? 0 : game.saveData[this.levelNum-1]; 
                game.saveData[this.levelNum-1]=Math.max(oldScore, score);;
            }
        };

        return Pannel;
});



    
