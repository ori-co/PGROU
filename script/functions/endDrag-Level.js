//Function at the end of the drag
function endDrag(tempSprite, pointer) {
    
	if ((game.input.y > bin.y) && (game.input.y < bin.y+bin.height) && (game.input.x > bin.x) && (game.input.x < bin.x+bin.width)) {
		deleteSprite(tempSprite);
	} else {
	    if ((game.input.y > (0.7*game.height)) ||  (game.input.y < (0.12*game.height)) || (game.input.x > (0.8*game.width)) || (game.input.x < (0.2*game.width))) {
	        tempSprite.x = Math.random()*(game.width-2*90)+90;
	        tempSprite.y = game.height - 155;
	    }
	    else {
                if (isDrag()) {
                    // utilisation de la variable globale "mode" possible
                    // mutualisation de code avec endDrag-LevelMode.js
                        snapEffect(tempSprite,'levelMode');
                        //colorSprite(tempSprite,'levelMode');
                }
		}
		colorSprite(tempSprite,'levelMode');
	}
	updateSolution();
}
