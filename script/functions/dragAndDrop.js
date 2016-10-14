define ([
  "global",
  "functions/gameButtons",
  "functions/dragAndDropUtils",
  "functions/gameAreaBounds"

  ], function(
    globals,
    gameButtons,
    dragAndDropUtils,
    gameAreaBounds
    ) {

// Lock the store if we start to drag a shape
function beginDrag() {
var game = globals.game;

game.global.solution.ok  =false;
	if (!game.global.ui.storeLocked) {
		gameButtons.setUnlockButton(true);
		gameButtons.enableUnlockButton(true);
		
		for (var key in game.global.shapes){
			game.global.shapes[key].shapeButton.inputEnabled=false;
		}
	}
}

//Function at the end of the drag
function endDrag(tempSprite, pointer) {
	var game = globals.game;
	var mode = game.global.mode;
	
	// check if the shape is on the trashbin
	if (Phaser.Rectangle.intersects(tempSprite.getBounds(),game.global.ui.bin.getBounds())){
		if (!game.global.ui.storeLocked) dragAndDropUtils.deleteSprite(tempSprite);
	} else {	
		// check if the shape stay in the game area. if not 
	    if (gameAreaBounds.isOutOfGameArea(tempSprite)) {
            tempSprite.position.copyFrom(tempSprite.originalPosition); 
	    }
	    else {
            if (dragAndDropUtils.isDrag()) {
                dragAndDropUtils.snapEffect(tempSprite,mode);
                dragAndDropUtils.colorSprite(tempSprite,mode);
				tempSprite.originalPosition = tempSprite.position.clone();
            }
		}
	}
	if (mode!="freeMode") {dragAndDropUtils.updateSolution();}
}

return {beginDrag:beginDrag, endDrag:endDrag};

});