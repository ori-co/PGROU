//Function at the end of the drag
function endDrag(tempSprite, pointer) {

	if ((game.input.y > bin.y) && (game.input.y < bin.y+bin.height) && (game.input.x > bin.x) && (game.input.x < bin.x+bin.width)) {
		deleteSprite(tempSprite);
	} else {
	    if ((tempSprite.y > 500) ||  (tempSprite.y < 25) || (tempSprite.x > 1000) || (tempSprite.x < 225)) {
	        tempSprite.x = Math.random()*(game.width-2*90)+90;
	        tempSprite.y = game.height - 155;
	    }
	    else {
	    	if (isDrag()) {
            	// utilisation de la variable globale "mode" possible
	            // mutualisation de code avec endDrag-LevelMode.js
			    snapEffect(tempSprite,'freeMode');
			}
		}
		//colorSprite(tempSprite,'levelMode');
		colorSprite(tempSprite,'freeMode')
	}
}
