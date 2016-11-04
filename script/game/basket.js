define ([
    "data/palette",
    "ui/colorButton",
    "ui/star",
    "ui/patrick"


    ], function(
        colors,
        ColorButton,
        Star,
        patrick

        ) {

        /**
         * 
         * @class 
         * @memberof 
         * @param 
         */
        function Basket(game, gameArea){
 
            this.elements = new Phaser.Group(game);
            this.elements.addChildAt(game.add.sprite(5, 0, 'basket-left'),0);
            this.elements.addChildAt(game.add.sprite(0, 0, 'basket-middle'),1);
            this.elements.addChildAt(game.add.sprite(0, 0, 'basket-right'),2);

            this.patrick = new patrick.PatrickGame(game,this.elements.children[2]);

            if (game.state.current == "freePlay"){
                this.colorsButtons = this.elements.addChildAt(game.add.group(),3);
                this.colorsButtons.position = {x:15,y:5};
                this.colorsButtons.cpt=0;
                for (var i=0; i< colors.palette.length;i++){
                    var posX = (i%3) * 60;
                    var posY = Math.floor(i/3) * 50;
                    new ColorButton(game, this.colorsButtons, posX, posY, colors.palette[i]);
                }
            } else {
                this.stars = this.elements.addChildAt(game.add.group(),3);
                for (j=0;j<3; j++){
                    new Star(game, this.stars,10+j*60, 20);
                }
            }

            this.updatePosition(game);
        };

        Basket.prototype = {

            updatePosition : function(game){
                this.elements.y = game.height - (5 + this.elements.children[0].height);

                this.elements.children[1].x = this.elements.children[0].x + this.elements.children[0].width;
                this.elements.children[1].width = game.width - (this.elements.children[0].width + this.elements.children[2].width);
                this.elements.children[2].x = game.width - (5 + this.elements.children[2].width);
            }
            ,
            evaluateStars: function(){
                starIndex = 0;
                var currentbasket = this;
                this.stars.forEach(function(star){
                    if (star.frame == 0) starIndex = currentbasket.stars.children.indexOf(star) +1 ;
                });

                return starIndex;
            }
            ,
            deleteStar(index){
                if(index>0){
                    this.stars.children[index-1].frame=2;
                    this.stars.children[index-1].updateCache();
                }
            }
        };

        return Basket;
});



    

 