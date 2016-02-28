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
    }

    for (var i = 0; i < 1200; i++) {
        for (var j = 0; j < 800; j++) {
            matSolution[i][j] = 0;
        }
    }

    areaSolution = 0;

    F1.forEach(function(patternItem) {
        areaSolution = areaSolution + areaSquare;
        for (var i = 0; i < mat_square.length; i++) {
            for (var j = 0; j < mat_square[0].length; j++) {
                if (mat_square[i][j] == 1) {
                    matSolution[Math.floor(patternItem.y + i * Math.cos(patternItem.angle * 2 * 3.14159 / 360) - j * Math.sin(patternItem.angle * 2 * 3.14159 / 360))][Math.floor(patternItem.x + i * Math.sin(patternItem.angle * 2 * 3.14159 / 360) + j * Math.cos(patternItem.angle * 2 * 3.14159 / 360))] = 1;
                }
            }
        }

    }, this);

    F2.forEach(function(patternItem) {
        areaSolution = areaSolution + areaTrapeze;
        for (var i = 0; i < mat_trapeze.length; i++) {
            for (var j = 0; j < mat_trapeze[0].length; j++) {
                if (mat_trapeze[i][j] == 1) {
                    matSolution[Math.floor(patternItem.y + i * Math.cos(patternItem.angle * 2 * 3.14159 / 360) - j * Math.sin(patternItem.angle * 2 * 3.14159 / 360))][Math.floor(patternItem.x + i * Math.sin(patternItem.angle * 2 * 3.14159 / 360) + j * Math.cos(patternItem.angle * 2 * 3.14159 / 360))] = 1;
                }
            }
        }

    }, this);

    F3.forEach(function(patternItem) {
        areaSolution = areaSolution + areaHexagon;
        for (var i = 0; i < mat_hexagon.length; i++) {
            for (var j = 0; j < mat_hexagon[0].length; j++) {
                if (mat_hexagon[i][j] == 1) {
                    matSolution[Math.floor(patternItem.y + i * Math.cos(patternItem.angle * 2 * 3.14159 / 360) - j * Math.sin(patternItem.angle * 2 * 3.14159 / 360))][Math.floor(patternItem.x + i * Math.sin(patternItem.angle * 2 * 3.14159 / 360) + j * Math.cos(patternItem.angle * 2 * 3.14159 / 360))] = 1;
                }
            }
        }

    }, this);

    F4.forEach(function(patternItem) {
        areaSolution = areaSolution + areaTriangleEqui;
        for (var i = 0; i < mat_triangle_equi.length; i++) {
            for (var j = 0; j < mat_triangle_equi[0].length; j++) {
                if (mat_triangle_equi[i][j] == 1) {
                    matSolution[Math.floor(patternItem.y + i * Math.cos(patternItem.angle * 2 * 3.14159 / 360) - j * Math.sin(patternItem.angle * 2 * 3.14159 / 360))][Math.floor(patternItem.x + i * Math.sin(patternItem.angle * 2 * 3.14159 / 360) + j * Math.cos(patternItem.angle * 2 * 3.14159 / 360))] = 1;
                }
            }
        }

    }, this);

    F5.forEach(function(patternItem) {
        areaSolution = areaSolution + areaTriangleRect;
        for (var i = 0; i < mat_triangle_rect.length; i++) {
            for (var j = 0; j < mat_triangle_rect[0].length; j++) {
                if (mat_triangle_rect[i][j] == 1) {
                    matSolution[Math.floor(patternItem.y + i * Math.cos(patternItem.angle * 2 * 3.14159 / 360) - j * Math.sin(patternItem.angle * 2 * 3.14159 / 360))][Math.floor(patternItem.x + i * Math.sin(patternItem.angle * 2 * 3.14159 / 360) + j * Math.cos(patternItem.angle * 2 * 3.14159 / 360))] = 1;
                }
            }
        }

    }, this);

    F6.forEach(function(patternItem) {
        areaSolution = areaSolution + areaDiamond;
        for (var i = 0; i < mat_diamond.length; i++) {
            for (var j = 0; j < mat_diamond[0].length; j++) {
                if (mat_diamond[i][j] == 1) {
                    matSolution[Math.floor(patternItem.y + i * Math.cos(patternItem.angle * 2 * 3.14159 / 360) - j * Math.sin(patternItem.angle * 2 * 3.14159 / 360))][Math.floor(patternItem.x + i * Math.sin(patternItem.angle * 2 * 3.14159 / 360) + j * Math.cos(patternItem.angle * 2 * 3.14159 / 360))] = 1;
                }
            }
        }

    }, this);

}