//Function at the end of the drag
function endDrag(tempSprite, pointer) {

	if ((game.input.y > 20) && (game.input.y < 96) && (game.input.x > 60) && (game.input.x < 143)) {
		deleteSprite(tempSprite);
	} else {
		snapEffect(tempSprite,'freeMode');
		colorSprite(tempSprite,'freeMode');
	}

}
