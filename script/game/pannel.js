define ([
    "ui/patrick",
    "data/levels",
    "ui/levelButton"


    ], function(
        patrick,
        levels,
        LevelButton

        ) {

        /**
         * 
         * @class 
         * @memberof 
         * @param 
         */
        function Pannel(game, num){
 
            this.elements = new Phaser.Group(game);
            
            new patrick.PatrickPannel(game, this.elements);
            
            new LevelButton(game, this.elements, -220, -100, num, 4);

            if (num <levels.length -1){
                new LevelButton(game, this.elements, -140, -100, num+1, 5);
            }

            this.elements.visible = false;

            this.updatePosition(game);
        };

        Pannel.prototype = {

            showPannel: function (game, nbStars){

                if (nbStars >0) {
                    this.elements.children[0].setHappyFace(game);
                } else {
                    this.elements.children[0].setSadFace(game);
                }
                autoPlaySounds.InstructionsSounds(game, 'end-'+nbStars);
                
                this.elements.visible= true;

            }
            ,
            updatePosition : function(game){
                this.elements.x=game.width;
                this.elements.y=game.height;
            }
        };

        return Pannel;
});



    
