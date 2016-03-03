//Function at the end of the drag
function endDrag(tempSprite, pointer) {

    if ((game.input.y > 20) && (game.input.y < 96) && (game.input.x > 60) && (game.input.x < 143)) {
        if (tempSprite.key == 'img_square') {
            nbF1 = nbF1 - 1;
        }
        if (tempSprite.key == 'img_trapeze') {
            nbF2 = nbF2 - 1;
        }
        if (tempSprite.key == 'img_hexagon') {
            nbF3 = nbF3 - 1;
        }
        if (tempSprite.key == 'img_triangle_equi') {
            nbF4 = nbF4 - 1;
        }
        if (tempSprite.key === 'img_triangle_rect') {
            nbF5 = nbF5 - 1;
        }
        if (tempSprite.key === 'img_diamond') {
            nbF6 = nbF6 - 1;
        }
        tempSprite.destroy();
        trashBinSound();
    }

    for (var i = 0; i < 1200; i++) {
        for (var j = 0; j < 800; j++) {
            matSolution[i][j] = 0;
        }
    }

    areaSolution = 0;
    
    // TODO gérer l'orientation des formes

    F1.forEach(function(patternItem) {
        areaSolution = areaSolution + shapes.square.area1;
        addShapeMatrix(patternItem,2);
    }, this);

    F2.forEach(function(patternItem) {
        areaSolution = areaSolution + shapes.trapeze.area1;
        addShapeMatrix(patternItem,2);
    }, this);

    F3.forEach(function(patternItem) {
        areaSolution = areaSolution + shapes.hexagon.area1;
        addShapeMatrix(patternItem,2);
    }, this);

    F4.forEach(function(patternItem) {
        areaSolution = areaSolution + shapes.triangleEqui.area1;
        addShapeMatrix(patternItem,2);
    }, this);

    F5.forEach(function(patternItem) {
        areaSolution = areaSolution + shapes.triangleRect.area1;
        addShapeMatrix(patternItem,2);
    }, this);

    F6.forEach(function(patternItem) {
        areaSolution = areaSolution + shapes.diamond.area1;
        addShapeMatrix(patternItem,2);
    }, this);


}
