//Function at the end of the drag
function endDrag(tempSprite, pointer) {
    if ((game.input.y > 20) && (game.input.y < 96) && (game.input.x > 60) && (game.input.x < 143)) {
        if (tempSprite.key === 'square') {
            nbF1 = nbF1 - 1;
        }
        if (tempSprite.key === 'trapeze') {
            nbF2 = nbF2 - 1;
        }
        if (tempSprite.key === 'hexagon') {
            nbF3 = nbF3 - 1;
        }
        if (tempSprite.key === 'triangle_equi') {
            nbF4 = nbF4 - 1;
        }
        if (tempSprite.key === 'triangle_rect') {
            nbF5 = nbF5 - 1;
        }
        if (tempSprite.key === 'diamond') {
            nbF6 = nbF6 - 1;
        }
        tempSprite.destroy();
        trashBinSound();
    }
}
