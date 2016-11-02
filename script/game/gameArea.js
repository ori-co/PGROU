define ([
    "game/contourMatrix"

    ], function(
        ContourMatrix

        ) {

        /**
         * 
         * @class 
         * @memberof 
         * @param 
         */
        function GameArea(game, width, height){
            this.width = width;
            this.height = height;
            this.safeArea = game.add.sprite(0,0, 'gameArea');

            this.shapesInPlace = new Phaser.Group(game);
            // this.shapesOfPattern = new Phaser.Group(game);

            this.store=null;
            this.basket=null;

            this.contourMat= [];
            // this.patternMat =[];

            this.updatePosition(game);
        };

        GameArea.prototype = {
            updatePosition : function(game){
                this.safeArea.x= 0.1 * game.width;
                this.safeArea.y = 0.05* game.height;
                this.shapesInPlace.x=this.safeArea.x - 130;
                this.shapesInPlace.y =this.safeArea.y-130;

                // var localgamearea = this;
                // this.shapesInPlace.forEach(function(shape){
                //     shape.reposition(game, localgamearea, !localgamearea.isOutOfGameAreaX(shape), !localgamearea.isOutOfGameAreaY(shape));
                // });

            }
            , 
            isOutOfGameAreaX : function(shape){
                return (shape.x < -100 || shape.x > this.width );
            }
            ,
            isOutOfGameAreaY : function(shape){
                return (shape.y < -100 || shape.y > this.height);
            }
            ,
            isInTrashbin: function(shape){
                return (this.store.bin.inputEnabled && Phaser.Rectangle.intersects(shape.getBounds(),this.store.bin.getBounds()));
            }
            ,
            unableColorsButtons(){
                this.basket.colorsButtons.forEach(function(colorButton){
                    colorButton.setButtonValue(false);
                });
            }
            ,
            getColorFromButtons(shape){
                var color = shape.tint;
                this.basket.colorsButtons.forEach(function(colorButton){
                    if (colorButton.value) color = colorButton.color;
                });
                return color;
            }
            ,
            evaluateInPlaceShapes : function(shapeName){
                var res =0;

                this.shapesInPlace.forEach(function(shape){
                    if (shape.key == shapeName) res ++;
                });
                return res;
            }
            ,
            calculateContourMat_withoutShape: function(shape){
                
                this.contourMat = new ContourMatrix(1300,1300);
                var localgamearea = this;
                this.shapesInPlace.forEach(function(currentShape){
                    if (currentShape != shape) {
                        localgamearea.contourMat.addShapeToMatrix(currentShape.mat[currentShape.frame], currentShape.area[currentShape.frame], currentShape.x, currentShape.y);
                    }
                });
            }
            ,
            getSnapPosition: function(game, mode, shape){
                if (mode == "levelMode"){
                    var contourSnapMat = this.contourMat.matContourAddition(this.pattern.patternMat);
                } else {
                    var contourSnapMat = this.contourMat;
                }   

                // calculate the best position for tempSprite (snap effect)
                var criteria = 0;
                var criteriaTemp = 0;
                var range_i = 30; // must be an even number
                var range_j = 30; // must be an even number
                var i_init = shape.y;
                var j_init = shape.x;
                var i_opt = shape.y; // to store the best position we have found for tempSprite
                var j_opt = shape.x;
                var i_temp;
                var j_temp;

                for (var i = 0; i < range_i; i++) {
                    for (var j = 0; j < range_j; j++) {
                        i_temp = i_init + (i - range_i / 2);
                        j_temp = j_init + (j - range_j / 2);
                        criteriaTemp = this.calculateCommonContours(game, contourSnapMat.mat, shape, i_temp, j_temp);
                        if ((i == 0) && (j == 0)) { // 1st iteration
                            criteria = criteriaTemp;
                        }
                        if (criteriaTemp > criteria) {
                            criteria = criteriaTemp;
                            i_opt = i_temp;
                            j_opt = j_temp;
                        } else {
                            if (criteriaTemp == criteria) {
                                if (Phaser.Point.distance(i_init, j_init, i_temp, j_temp) < Phaser.Point.distance(i_init, j_init, i_opt, j_opt)) {
                                    i_opt = i_temp;
                                    j_opt = j_temp;
                                }
                            }
                        }
                    }
                }

                return {x: j_opt, y:i_opt};
            }
            ,
            calculateCommonContours: function(game, snapMat, shape, i,j){
                var matShape = shape.mat[shape.frame];
                var nbPixels = matShape.length;
                var res = 0;
                for (var ii = 0; ii < nbPixels; ii++) {
                    for (var jj = 0; jj < nbPixels; jj++) {
                        if (matShape[ii][jj] == 2 && snapMat[i + ii][j + jj] == 2) {
                            res++;
                        } else if (matShape[ii][jj] == 3 && snapMat[i + ii][j + jj] == 3) {
                            res = res + 2;
                        }
                    }
                }
                return res;
            }
            ,
            getColorFromPattern : function(shape){

            }
            ,
            compareSolutionAndPattern: function (game){

            }
            ,
            removeStar: function(){

            }
        };

        return GameArea;
});