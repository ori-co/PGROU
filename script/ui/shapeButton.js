define ([
    "game/shape",
    "sounds/autoPlaySounds"

    ], function(
        Shape,
        autoPlaySounds
        ) {

        /**
         * 
         * @class 
         * @memberof 
         * @param 
         */
        function ShapeButton(game, posX, posY, shapeName, gameArea, mode){
            var style = {font: "25px Arial", fontWeight: "bold", fill: "#93AFBD"};

            this.sprite = game.add.button(posX,posY,'button-'+shapeName, function() {this.addShape(game, gameArea, mode, shapeName)}, this, 2,1,0,1);
            this.label = this.sprite.addChild(game.make.text(38, 38, 0, style));
            this.label.anchor.x = 0.5;
            this.label.anchor.y = 0.5;

        };

        ShapeButton.prototype = {
            addShape: function(game, gameArea, mode, shapeName) {
                new autoPlaySounds.SoundEffects(game, 'click');
                new Shape(game, gameArea, mode, shapeName);
                var nb = gameArea.evaluateInPlaceShapes(shapeName);
                this.label.setText(nb);
                new autoPlaySounds.AddRemoveShape( game, shapeName, nb, true);

                if (mode == "levelMode") gameArea.removeStar(game);
            }
            ,
            removeShape: function(game, gameArea, shapeName){
                var nb = gameArea.evaluateInPlaceShapes(shapeName) -1 ;
                this.label.setText(nb);
                new autoPlaySounds.AddRemoveShape( game, shapeName, nb, false);
            }
        };

        return ShapeButton;
});