// Lock the store if we start to drag a shape
function beginDrag(tempSprite) {
	if (!storeLocked) {
		unlockButton = game.add.button(90, 250, 'button-back', unlockStore, this, 2, 1, 0, 1);
		storeLocked = true;
		buttonSquare.inputEnabled = false;
		buttonTrapezoid.inputEnabled = false;
   		buttonTriangleEqui.inputEnabled = false;
    	buttonHexagon.inputEnabled = false;
   		buttonTriangleRect.inputEnabled = false;
    	buttonDiamond.inputEnabled = false;
	}
}

// Unlock the store once the unlockButton is clicked
function unlockStore(lockButton, pointer) {
	lockButton.destroy();
	storeLocked = false;
	buttonSquare.inputEnabled = true;
	buttonTrapezoid.inputEnabled = true;
   	buttonTriangleEqui.inputEnabled = true;
    buttonHexagon.inputEnabled = true;
   	buttonTriangleRect.inputEnabled = true;
    buttonDiamond.inputEnabled = true;
}
