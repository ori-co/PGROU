// Lock the store if we start to drag a shape
function beginDrag(tempSprite) {
	if (!storeLocked) {
		unlockButton = game.add.button(5, 5, 'ribbon', unlockStore, this, 1, 0, 1, 0);
		unlockButton.events.onInputOver.add(unlock_store, this);
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
	if( distrib == 1){ 
	lockButton.destroy();
	storeLocked = false;
	buttonSquare.inputEnabled = true;
	buttonTrapezoid.inputEnabled = true;
   	buttonTriangleEqui.inputEnabled = true;
    buttonHexagon.inputEnabled = true;
   	buttonTriangleRect.inputEnabled = true;
    buttonDiamond.inputEnabled = true;}
}
