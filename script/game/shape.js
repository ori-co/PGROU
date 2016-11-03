define ([
    "data/palette",
    "ui/rotationUI",
    "sounds/autoPlaySounds"

    ], function(
        colors,
        RotationUI,
        autoPlaySounds
        ) {

        /**
         * 
         * @class 
         * @memberof 
         * @param 
         */
        function Shape(game, gameArea, mode, shapeName){
            var posX = Math.floor(Math.random()*(game.width-310))+90 - gameArea.shapesInPlace.x;
            var posY = game.height - 150 - gameArea.shapesInPlace.y;
            Phaser.Sprite.call(this, game, posX, posY, shapeName,0);

            this.tint = colors.defaultColor;
            this.inputEnabled = true;
            this.input.enableSnap(1, 1, false, true); 
            this.input.pixelPerfectOver = true;
            this.input.enableDrag(false, true, true);
            this.events.onInputDown.add( function(){this.onClick(game, gameArea)},this);
            this.events.onDragStop.add( function(){this.onRelease(game, gameArea)},this);

            this.mode =mode;

            this.rotationUI = null;

            this.originalPosition = this.position.clone();

            this.nbDir = game.shapes[shapeName].nbDir;
            this.mat = game.shapes[shapeName].mat;
            this.area = game.shapes[shapeName].area;

            gameArea.shapesInPlace.add(this);
            game.world.bringToTop(gameArea.shapesInPlace);
        };

        Shape.prototype = Object.create(Phaser.Sprite.prototype);

        Shape.prototype.constructor = Shape;

        Shape.prototype.onClick= function(game, gameArea) {
            this.wasSelected = (this.rotationUI != null);
            gameArea.removeAllRotationUI(game);
        };

        Shape.prototype.onRelease= function(game, gameArea){
            var dist = Phaser.Point.distance(this.position, this.originalPosition);
            if (dist>5){ // considered as drag 
                if (this.mode == "freeMode") gameArea.unableColorsButtons();
                this.endDrag(game, gameArea);
            } else { // considered as a click
              this.position.copyFrom(this.originalPosition); 
              if (this.mode == "freeMode") this.tint = gameArea.getColorFromButtons(this);
              if (!this.wasSelected) this.addRotationUI(game,0);
            }
        };

        Shape.prototype.endDrag = function (game, gameArea){
            this.inputEnabled = false;
            gameArea.calculateContourMat_withoutShape(this);

            if (gameArea.isInTrashbin(this)) {
                this.deleteSprite(game, gameArea);
                if (this.mode == "levelMode") gameArea.compareSolutionToPattern(game);
            } else {
                if (this.mode == "levelMode") gameArea.store.lockStore(game,true);
                if (!gameArea.isOutOfGameAreaX(this) && !gameArea.isOutOfGameAreaY(this)){
                    var snapPos = gameArea.getSnapPosition(game, this.mode, this);
                    var shapeTween = game.add.tween(this);
                    shapeTween.to({x:snapPos.x, y:snapPos.y},100,Phaser.Easing.Exponential.In);
                    shapeTween.onComplete.add(function(){this.endOfShapeTween(game,gameArea)}, this);
                    shapeTween.start();
                } else {
                    var shapeTween = game.add.tween(this);
                    shapeTween.to({x:this.originalPosition.x, y:this.originalPosition.y},400,Phaser.Easing.Exponential.Out);
                    shapeTween.onComplete.add(function(){this.endOfShapeTween(game,gameArea)}, this);
                    shapeTween.start();
                }
            }
        };

        Shape.prototype.endOfShapeTween = function(game,gameArea){
            new autoPlaySounds.SoundEffects(game, 'snap');
            this.inputEnabled=true;
            this.addRotationUI(game, 0);
            this.originalPosition = this.position.clone();
            gameArea.contourMat.addShapeToMatrix(this.mat[this.frame], this.area[this.frame], this.x, this.y);
            if (this.mode == "levelMode") {
                this.tint = gameArea.getColorFromPattern(this);
                gameArea.compareSolutionToPattern(game);
            }
        };

        Shape.prototype.deleteSprite = function(game, gameArea) {
            gameArea.removeStar(game); 
            gameArea.store.shapeButtons[this.key].removeShape(game, gameArea, this.key);
            new autoPlaySounds.SoundEffects(game, 'trashbin');
            this.destroy();
        };

        Shape.prototype.reposition= function(game, gameArea, notX, notY){
            var posX = (notX) ? this.x : Math.random()*(game.width-310)+90 - gameArea.shapesInPlace.x;
            var posY = (notY) ? this.y : game.height - 150 - gameArea.shapesInPlace.y;
            this.x = posX;
            this.y= posY;
            this.originalPosition = this.position.clone();
        };

        Shape.prototype.removeRotationUI = function(game){
            this.rotationUI.sprite.destroy();
            this.rotationUI = null;
        };

        Shape.prototype.addRotationUI = function(game, angle){
            this.rotationUI = new RotationUI(game, this, angle);
            this.bringToTop();
        };

        return Shape;
});