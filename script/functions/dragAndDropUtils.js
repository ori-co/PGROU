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


function colorSprite(tempSprite) { // gameMode = 'levelMode' or 'freeMode' ...
    var game = globals.game;

    var gameMode = game.global.mode;

    var matPattern= game.global.solution.matPattern;

    if (gameMode != 'freeMode') {		
		var matShape = game.global.shapes[tempSprite.key].mat[tempSprite.frame];

        var nbPixels = matShape.length;
		
        var inPixels = 0;
        for (var i = 0; i < nbPixels; i++) {
            for (var j = 0; j < nbPixels; j++) {
                if (matShape[i][j] == 1) {
                    if (matPattern[tempSprite.y+i][tempSprite.x+j] != 0) {
                    inPixels ++;
                    }
                }
            }          
        }
        

        var errorMargin = game.global.shapes[tempSprite.key].area[tempSprite.frame] * 0.85;
        if (inPixels > errorMargin){ 
            // random color within palette 
            tempSprite.tint = colors.palette[Math.floor(Math.random() * colors.palette.length)];

            // check the position with the shapes of the pattern
            var patternShapeArray = game.global.shapes[tempSprite.key].shapesOfPattern;
			for (i =0; i< patternShapeArray.length;i++){
                   if (tempSprite.x == patternShapeArray[i].x && tempSprite.y == patternShapeArray[i].y  && tempSprite.frame == patternShapeArray[i].frame ){
                        tempSprite.tint = patternShapeArray[i].wantedColor;
                    }
			}
        } else {
            tempSprite.tint = colors.defaultColor;
        }
	} 
}



function checkSolution() {
    var game = globals.game;
	
    // Vérification de la solution    
    var error = 0;
    if (!game.global.ui.winUI.visible){ // no solution update if the win ui is already on screen
        for (var i = 0; i < game.global.safeAreaSize.y; i++) {
            for (var j = 0; j < game.global.safeAreaSize.x; j++) {
                if (complete_InPlaceMat[i][j] != game.global.solution.matPattern[i][j]) {
                    error++;
                }
            }
        }

        var errorMargin = Math.floor(game.global.solution.areaPattern*0.05);
        var areaError = complete_area - game.global.solution.areaPattern;

        if (error < errorMargin && areaError <errorMargin) {
            var previousScore = (game.global.saveData[game.global.levelnum-1] != undefined) ? game.global.saveData[game.global.levelnum-1] : 0;
            var newScore = checkStars();
            game.global.saveData[game.global.levelnum-1] = Math.max(newScore, previousScore);

            endOfGame(500, newScore); 
        }
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
  if (!game.global.ui.winUI.visible){ // no change of the stars if the win ui is already on screen
    if (condition){
      for (i=0;i<3;i++){
        if (stars.children[i].frame == 0){
          stars.children[i].frame = 2;
          stars.children[i].updateCache();
          break;
        } 
      }
      if (stars.children[2].frame == 2) endOfGame(500,0);
    }
    }
}

// param : win / full win / fail
function endOfGame(delay, score){
    var game = globals.game;

    var hiddenMouthIndex = (score==0) ? 1 : 2;
    var visibleMouthIndex = (score==0) ? 2 : 1;

    setTimeout(function () {
        game.global.ui.winUI.visible=true;
        game.global.ui.winUI.children[0].children[hiddenMouthIndex].visible = false;
        sounds.sound_endOfGame(game.global.ui.winUI.children[0].children[visibleMouthIndex],score);
        }, delay);
    }


return {
    updateInPlaceMatrix: updateInPlaceMatrix,
    completeInPlaceInfo:completeInPlaceInfo,
    deleteSprite : deleteSprite,
    snapEffect : snapEffect,
    colorSprite : colorSprite,
    checkSolution : checkSolution,
    removeAStar : removeAStar
}

});