define ([

    ], function(

        ) {

        /**
         * 
         * @class 
         * @memberof 
         * @param 
         */
        function Star(game, parentGroup, posX, posY, color){
            Phaser.Sprite.call(this, game, posX, posY, 'stars',0);
            this.scale.setTo(0.4,0.4);
            parentGroup.add(this);
        };

        Star.prototype = Object.create(Phaser.Sprite.prototype);

        Star.prototype.constructor = Star;

        return Star;
});