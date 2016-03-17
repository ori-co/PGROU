//Function at the end of the drag
function endDrag(tempSprite, pointer) {

	if ((game.input.y > bin.y) && (game.input.y < bin.y+bin.height) && (game.input.x > bin.x) && (game.input.x < bin.x+bin.width)) {
		deleteSprite(tempSprite);
	} else {
	    if ((tempSprite.y > 500) ||  (tempSprite.y < 25) || (tempSprite.x > 1000) || (tempSprite.x < 225)) {
            tempSprite.position.copyFrom(tempSprite.originalPosition); 
	    }
	    else {
	    	if (isDrag()) {
            	// utilisation de la variable globale "mode" possible
	            // mutualisation de code avec endDrag-LevelMode.js
			    snapEffect(tempSprite,'freeMode');
                tempSprite.originalPosition = tempSprite.position.clone();
			}
		}
		//colorSprite(tempSprite,'freeMode')
	}
}
