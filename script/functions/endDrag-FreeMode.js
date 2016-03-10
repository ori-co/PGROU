//Function at the end of the drag
function endDrag(tempSprite, pointer) {

	if ((game.input.y > bin.y) && (game.input.y < bin.y+bin.height) && (game.input.x > bin.x) && (game.input.x < bin.x+bin.width)) {
		deleteSprite(tempSprite);
	} else {
            // utilisation de la variable globale "mode" possible
            // mutualisation de code avec endDrag-LevelMode.js
		snapEffect(tempSprite,'freeMode');
		colorSprite(tempSprite,'freeMode');
	}

}
