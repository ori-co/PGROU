define ([
  "global",
  "functions/sounds",
  "functions/matrixUtils",
  "data/palette"

  ], function(
    globals,
    sounds,
    matrixUtils,
    colors
    ) {

var complete_InPlaceMat = [];
var complete_area = 0;

// to differentiate between a simple click and a real drag
function isDrag() {
    var game = globals.game;

    var distanceFromLastUp = distance(game.input.activePointer.positionDown.x, game.input.activePointer.positionDown.y, game.input.activePointer.x, game.input.activePointer.y);
    if (distanceFromLastUp > 2) { // value 2 determined empiracally
        return true;
    } else {
        return false;
    }
}

// update complete_inPlaceMat and area
function updateInPlaceMatrix(tempSprite){
    var game = globals.game;
    
    var inPlaceInfo = matrixUtils.getInfoInPlaceExclundingCurrentShape(tempSprite);
    complete_InPlaceMat = inPlaceInfo.mat;
    complete_area = inPlaceInfo.area;

}

// to delete a shape on the game
function deleteSprite(tempSprite) {
	var game = globals.game;
    var shapeName = tempSprite.key;

    removeAStar(true); // remove a star for condition "true" : always remove a star
    
    // Remove the shape of the game and the in place array
	game.global.shapes[tempSprite.key].shapesInPlace.splice(game.global.shapes[tempSprite.key].shapesInPlace.indexOf(tempSprite),1);
    tempSprite.destroy();

    // update of the counter
    var nb  = parseInt(game.global.shapes[shapeName].shapeButton.label.text)-1;
    game.global.shapes[shapeName].shapeButton.label.setText(nb);

    // Sounds
	sounds.sound_addRemoveShape(shapeName, nb, false);
    sounds.trashBinSound();
}


// to determine the position of the shape after the snap effect
function snapEffect(tempSprite) {
    var game = globals.game;

    // add the shapes from the pattern into the snap matrix, to get the global contours to which we want to snap
    if (game.global.mode == 'levelMode') {
        var snapMat = matrixUtils.matrixContoursAddition(complete_InPlaceMat, game.global.solution.matPattern);
    } else {
        var snapMat = complete_InPlaceMat;
    }

    // calculate the best position for tempSprite (snap effect)

    var criteria = 0;
    var criteriaTemp = 0;
    var range_i = 30; // must be an even number
    var range_j = 30; // must be an even number
    var i_init = tempSprite.y;
    var j_init = tempSprite.x;
    var i_opt = tempSprite.y; // to store the best position we have found for tempSprite
    var j_opt = tempSprite.x;
    var i_temp;
    var j_temp;

    for (var i = 0; i < range_i; i++) {
        for (var j = 0; j < range_j; j++) {
            i_temp = i_init + (i - range_i / 2);
            j_temp = j_init + (j - range_j / 2);
            //criteriaTemp = calculateCommonContours(tempSprite, i_temp, j_temp);
            criteriaTemp = calculateCommonContours(tempSprite, i_temp, j_temp,snapMat);
            if ((i == 0) && (j == 0)) { // 1st iteration
                criteria = criteriaTemp;
            }
            if (criteriaTemp > criteria) {
                criteria = criteriaTemp;
                i_opt = i_temp;
                j_opt = j_temp;
            } else {
                if (criteriaTemp == criteria) {
                    if (distance(i_init, j_init, i_temp, j_temp) < distance(i_init, j_init, i_opt, j_opt)) {
                        i_opt = i_temp;
                        j_opt = j_temp;
                    }
                }
            }
        }
    }
    tempSprite.x = j_opt;
    tempSprite.y = i_opt;

    // ajdd the optimale solution to complete_InPlaceMat to avoid to calculate again this matrix in update solution
    complete_InPlaceMat = matrixUtils.addShapeToMatrix(tempSprite, complete_InPlaceMat);
    complete_area = complete_area + game.global.shapes[tempSprite.key].area[tempSprite.frame] ;
}


function distance(i1, j1, i2, j2) {
    return Math.sqrt((i1 - i2) * (i1 - i2) + (j1 - j2) * (j1 - j2))
}

function calculateCommonContours(tempSprite, i, j,snapMat) {
	var game = globals.game;
	var matShape = game.global.shapes[tempSprite.key].mat[tempSprite.frame];
    var nbPixels = matShape.length;
    var res = 0;
    for (var ii = 0; ii < nbPixels; ii++) {
        for (var jj = 0; jj < nbPixels; jj++) {
            if (matShape[ii][jj] == 2 && snapMat[i + ii][j + jj] == 2) {
                res++;
            }
        }
    }
    return res;
}

function colorSprite(tempSprite, gameMode) { // gameMode = 'levelMode' or 'freeMode' ...
    var game = globals.game;

    var gameMode = game.global.mode;

    var matPattern= game.global.solution.matPattern;

    if (gameMode != 'freeMode') {
        var isColored = 0;	
		
		var matShape = game.global.shapes[tempSprite.key].mat[tempSprite.frame];

        var nbPixels = matShape.length;
		
        var isIN = 1;
        for (var i = 0; i < nbPixels; i++) {
                for (var j = 0; j < nbPixels; j++) {
                    if (matShape[i][j] == 1) {
                        if (matPattern[tempSprite.y+i][tempSprite.x+j] != 1 && matPattern[tempSprite.y+i][tempSprite.x+j] != 2) {
                        isIN = 0;
                        }
                    }
                }          
        }
        
        if (isIN ==1){
            var patternShapeArray = game.global.shapes[tempSprite.key].shapesOfPattern;
			for (i =0; i< patternShapeArray.length;i++){
                   if (tempSprite.x == patternShapeArray[i].x && tempSprite.y == patternShapeArray[i].y  && tempSprite.frame == patternShapeArray[i].frame ){
                        tempSprite.tint = patternShapeArray[i].wantedColor;
                        isColored = 1;
                    }
			}
            if (isColored == 0){
                tempSprite.tint = colors.palette[Math.floor(Math.random() * colors.palette.length)];
				isColored=1;
            }
        } else {
            tempSprite.tint = colors.palette[0];
			isColored=1;
        }
	} 
}



function checkSolution() {
    var game = globals.game;
	
    // Vérification de la solution    
    var error = 0;

    for (var i = 0; i < game.global.safeAreaSize.y; i++) {
        for (var j = 0; j < game.global.safeAreaSize.x; j++) {
            if (complete_InPlaceMat[i][j] != game.global.solution.matPattern[i][j]) {
                error++;
            }
        }
    }

    var errorMargin = Math.floor(game.global.solution.areaPattern*0.05);
    if (error < errorMargin && complete_area == game.global.solution.areaPattern) {
        game.global.solution.ok = true;
        var currentNb = (game.global.saveData[game.global.levelnum-1] != undefined) ? game.global.saveData[game.global.levelnum-1] : 0;
        game.global.saveData[game.global.levelnum-1] = Math.max(checkStars(), currentNb);
    }
}

function checkStars(){
    var game = globals.game;
    var stars = game.global.ui.basket.children[3];
    var res = 0;

    for (i=0;i<3;i++){
        if (stars.children[i].frame == 0) res ++;
    }

    return res;
}

function removeAStar(condition){
  var game = globals.game;
  var stars = game.global.ui.basket.children[3];
if (condition){
  for (i=0;i<3;i++){
    if (stars.children[i].frame == 0){
      stars.children[i].frame = 2;
      stars.children[i].updateCache();
      break;
    } 
  }
  if (stars.children[2].frame == 2) game.global.solution.ko = true;
}
}


return {
    updateInPlaceMatrix: updateInPlaceMatrix,
    deleteSprite : deleteSprite,
    isDrag : isDrag,
    snapEffect : snapEffect,
    colorSprite : colorSprite,
    checkSolution : checkSolution,
    removeAStar : removeAStar
}

});