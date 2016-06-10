//Function at the end of the drag
function endDrag(tempSprite, pointer) {
    game.world.bringToTop(forms);
	if ((game.input.y > bin.y) && (game.input.y < bin.y+bin.height) && (game.input.x > bin.x) && (game.input.x < bin.x+bin.width)) {
		if (mode=="freeMode"){deleteSprite(tempSprite);
        } else {
            if (distrib==1){ 
                deleteSprite(tempSprite);
            }
        }
	} else {
	    if ((tempSprite.y > 500) ||  (tempSprite.y < 25) || (tempSprite.x > 1000) || (tempSprite.x < 225)) {
            tempSprite.position.copyFrom(tempSprite.originalPosition); 
	    }
	    else {
                if (isDrag()) {
                    snapEffect(tempSprite,mode);
                    tempSprite.originalPosition = tempSprite.position.clone();
                    if (mode!="freeMode") {colorSprite(tempSprite,'levelMode');}
                }
		}
		
		
	}
	if (mode!="freeMode") {updateSolution();}
}
