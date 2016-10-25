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

	if (!game.global.ui.storeLocked) {
		gameButtons.setUnlockButton(true);
		gameButtons.enableUnlockButton(true);
		
		for (var key in game.global.shapes){
			game.global.shapes[key].shapeButton.inputEnabled=false;
		}
	}
}

//Function at the end of the drag
function endDrag(tempSprite) {
	var game = globals.game;
	var mode = game.global.mode;
	
	dragAndDropUtils.updateInPlaceMatrix(tempSprite);
	// check if the shape is on the trashbin
	if (Phaser.Rectangle.intersects(tempSprite.getBounds(),game.global.ui.bin.getBounds())){
		if (!game.global.ui.storeLocked || game.global.ui.unlockButton.inputEnabled) dragAndDropUtils.deleteSprite(tempSprite);
	} else {	
		// check if the shape stay in the game area. if not 
	    if (gameAreaBounds.isOutOfGameArea(tempSprite)) {
            tempSprite.position.copyFrom(tempSprite.originalPosition); 
            dragAndDropUtils.completeInPlaceInfo(tempSprite);
	    }
	    else {
                dragAndDropUtils.snapEffect(tempSprite);
                dragAndDropUtils.completeInPlaceInfo(tempSprite);
                dragAndDropUtils.colorSprite(tempSprite);
				tempSprite.originalPosition = tempSprite.position.clone();
		}
	}
	if (mode!="freeMode") dragAndDropUtils.checkSolution();
}

return {beginDrag:beginDrag, endDrag:endDrag};

});