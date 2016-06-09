function deleteSprite(tempSprite) {
    if (tempSprite.key == 'square') {
        nbF1 = nbF1 - 1;
        labelSquare.text = nbF1;
        sound_square_off(nbF1);
    }
    if (tempSprite.key == 'trapeze') {
        nbF2 = nbF2 - 1;
        labelTrapezoid.text = nbF2;
        sound_trapeze_off(nbF2);
    }
    if (tempSprite.key == 'hexagon') {
        nbF3 = nbF3 - 1;
        labelHexagon.text = nbF3;
        sound_hexagon_off(nbF3);
    }
    if (tempSprite.key == 'triangle_equi') {
        nbF4 = nbF4 - 1;
        labelTriangleEqui.text = nbF4;
        sound_triangle_off(nbF4);
    }
    if (tempSprite.key == 'triangle_rect') {
        nbF5 = nbF5 - 1;
        labelTriangleRect.text = nbF5;
        sound_trirec_off(nbF5);
    }
    if (tempSprite.key == 'diamond') {
        nbF6 = nbF6 - 1;
        labelDiamond.text = nbF6;
        sound_diamond_off(nbF6);

    }
    tempSprite.destroy();
    trashBinSound();

}

// to differentiate between a simple click and a real drag
function isDrag() {
    var distanceFromLastUp = distance(game.input.activePointer.positionDown.x, game.input.activePointer.positionDown.y, game.input.activePointer.x, game.input.activePointer.y);
    if (distanceFromLastUp > 2) { // value 2 determined empiracally
        return true;
    } else {
        return false;
    }
}

function snapEffect(tempSprite, gameMode) {

    for (var i = 0; i < 1300; i++) {
        for (var j = 0; j < 1300; j++) {
            matSnap[i][j] = 0;
        }
    }

    if (gameMode == 'levelMode') {
        // add the shapes from the pattern into the snap matrix, to get the global contours to which we want to snap
        P1.forEach(function (patternItem) {
            addShapeMatrix(patternItem, 3);
        }, this);

        P2.forEach(function (patternItem) {
            addShapeMatrix(patternItem, 3);
        }, this);

        P3.forEach(function (patternItem) {
            addShapeMatrix(patternItem, 3);
        }, this);

        P4.forEach(function (patternItem) {
            addShapeMatrix(patternItem, 3);
        }, this);

        P5.forEach(function (patternItem) {
            addShapeMatrix(patternItem, 3);
        }, this);

        P6.forEach(function (patternItem) {
            addShapeMatrix(patternItem, 3);
        }, this);
    }
    // add the shapes already in the game (except the shape that has just been dragged)
    // in order to update the contours to which we want to snap
    F1.forEach(function (patternItem) {
        if (patternItem.x != tempSprite.x || patternItem.y != tempSprite.y) {
            addShapeMatrix(patternItem, 3);
        }
    }, this);

    F2.forEach(function (patternItem) {
        if (patternItem.x != tempSprite.x || patternItem.y != tempSprite.y) {
            addShapeMatrix(patternItem, 3);
        }
    }, this);

    F3.forEach(function (patternItem) {
        if (patternItem.x != tempSprite.x || patternItem.y != tempSprite.y) {
            addShapeMatrix(patternItem, 3);
        }
    }, this);

    F4.forEach(function (patternItem) {
        if (patternItem.x != tempSprite.x || patternItem.y != tempSprite.y) {
            addShapeMatrix(patternItem, 3);
        }
    }, this);

    F5.forEach(function (patternItem) {
        if (patternItem.x != tempSprite.x || patternItem.y != tempSprite.y) {
            addShapeMatrix(patternItem, 3);
        }
    }, this);

    F6.forEach(function (patternItem) {
        if (patternItem.x != tempSprite.x || patternItem.y != tempSprite.y) {
            addShapeMatrix(patternItem, 3);
        }
    }, this);


    // calculate the best position for tempSprite (snap effect)

    var criteria = 0;
    var criteriaTemp = 0;
    var range_i = 30; // must be an even number
    var range_j = 30; // must be an even number
    var i_init = tempSprite.y;
    var j_init = tempSprite.x;
    var i_opt = tempSprite.y; // to store the best position we have found for tempSprite
    var j_opt = tempSprite.x;
    var i_temp;
    var j_temp;

    for (var i = 0; i < range_i; i++) {
        for (var j = 0; j < range_j; j++) {
            i_temp = i_init + (i - range_i / 2);
            j_temp = j_init + (j - range_j / 2);
            criteriaTemp = calculateCommonContours(tempSprite, i_temp, j_temp);
            if ((i == 0) && (j == 0)) { // 1st iteration
                criteria = criteriaTemp;
            }
            if (criteriaTemp > criteria) {
                criteria = criteriaTemp;
                i_opt = i_temp;
                j_opt = j_temp;
            } else {
                if (criteriaTemp == criteria) {
                    if (distance(i_init, j_init, i_temp, j_temp) < distance(i_init, j_init, i_opt, j_opt)) {
                        i_opt = i_temp;
                        j_opt = j_temp;
                    }
                }
            }
        }
    }
    tempSprite.x = j_opt;
    tempSprite.y = i_opt;
}

function distance(i1, j1, i2, j2) {
    return Math.sqrt((i1 - i2) * (i1 - i2) + (j1 - j2) * (j1 - j2))
}

function calculateCommonContours(tempSprite, i, j) {

    var matShape = [];
    if (tempSprite.key == 'square') {
        matShape = shapes.square.mat[tempSprite.frame];
    }
    if (tempSprite.key == 'trapeze') {
        matShape = shapes.trapeze.mat[tempSprite.frame];
    }
    if (tempSprite.key == 'hexagon') {
        matShape = shapes.hexagon.mat[tempSprite.frame];
    }
    if (tempSprite.key == 'triangle_equi') {
        matShape = shapes.triangleEqui.mat[tempSprite.frame];
    }
    if (tempSprite.key === 'triangle_rect') {
        matShape = shapes.triangleRect.mat[tempSprite.frame];
    }
    if (tempSprite.key === 'diamond') {
        matShape = shapes.diamond.mat[tempSprite.frame];
    }

    var res = 0;
    for (var ii = 0; ii < nbPixels; ii++) {
        for (var jj = 0; jj < nbPixels; jj++) {
            if (matShape[ii][jj] == 2 && matSnap[i + ii][j + jj] == 2) {
                res++;
            }
        }
    }
    return res;
}

function colorSprite(tempSprite, gameMode) { // gameMode = 'levelMode' or 'freeMode'
    if (gameMode == 'levelMode') {
        var isColored = 0;	
        switch (tempSprite.key){
            case 'square':
            var M = shapes.square.mat[tempSprite.frame];
            break;
            case 'trapeze':
            var M = shapes.trapeze.mat[tempSprite.frame];
            break;
            case 'hexagon':
            var M = shapes.hexagon.mat[tempSprite.frame];
            break;
            case 'triangle_equi':
            var M = shapes.triangleEqui.mat[tempSprite.frame];
            break;
            case 'triangle_rect':
            var M = shapes.triangleRect.mat[tempSprite.frame];
            break;
            case 'diamond':
            var M = shapes.diamond.mat[tempSprite.frame];
            break;
            
        } 
        var isIN = 1;
        for (var i = 0; i < nbPixels; i++) {
                for (var j = 0; j < nbPixels; j++) {
                    if (M[i][j] == 1) {
                        if (matPattern[tempSprite.y+i][tempSprite.x+j] != 1 && matPattern[tempSprite.y+i][tempSprite.x+j] != 2) {
                        isIN = 0;
                        }
                    }
                }          
        }
        
        if (isIN ==1){
            patterns.forEach(function (P){
               P.forEach(function (pattern){
                   if (tempSprite.key == pattern.key && pattern.x == tempSprite.x && pattern.y == tempSprite.y && pattern.frame == tempSprite.frame){
                        tempSprite.tint = pattern.wantedColor;
                        isColored = 1;
                    }
               },this);
            },this);
            if (isColored == 0){
                tempSprite.tint = palette[Math.floor(Math.random() * palette.length)];
				isColored=1;
            }
        } else {
            tempSprite.tint = 0x93AFBD;
			isColored=1;
        }
}
}



function updateSolution() {
    for (var i = 0; i < 1300; i++) {
        for (var j = 0; j < 1300; j++) {
            matSolution[i][j] = 0;
        }
    }
    // update matSolution
    areaSolution = 0;

    F1.forEach(function (patternItem) {
        areaSolution = areaSolution + shapes.square.area[patternItem.frame];
        addShapeMatrix(patternItem, 2);
    }, this);

    F2.forEach(function (patternItem) {
        areaSolution = areaSolution + shapes.trapeze.area[patternItem.frame];
        addShapeMatrix(patternItem, 2);
    }, this);

    F3.forEach(function (patternItem) {
        areaSolution = areaSolution + shapes.hexagon.area[patternItem.frame];
        addShapeMatrix(patternItem, 2);
    }, this);

    F4.forEach(function (patternItem) {
        areaSolution = areaSolution + shapes.triangleEqui.area[patternItem.frame];
        addShapeMatrix(patternItem, 2);
    }, this);

    F5.forEach(function (patternItem) {
        areaSolution = areaSolution + shapes.triangleRect.area[patternItem.frame];
        addShapeMatrix(patternItem, 2);
    }, this);

    F6.forEach(function (patternItem) {
        areaSolution = areaSolution + shapes.diamond.area[patternItem.frame];
        addShapeMatrix(patternItem, 2);
    }, this);


    // Vérification de la solution    
    valid = 0;

    for (var i = 0; i < 1300; i++) {
        for (var j = 0; j < 1300; j++) {
            if (matSolution[i][j] != matPattern[i][j]) {
                valid++;
            }
        }
    }


    if (valid < 500 && areaSolution == areaPattern) {
        fin = 1;
            var delay = 500;
            setTimeout(function () {
                //alert("Bravo! Vous avez réussi ce niveau!");
                document.getElementById("final").style.display = "block";
                pat.visible=false;
                sound_sucess();
				if (levelnum!="-"){
                    if (parseInt(levelnum)==nbLevels){
                        document.getElementById("next").style.display = "none";
                    }else{ 
                        document.getElementById("next").value = parseInt(levelnum)+1;
                    }
                    document.getElementById("again").value = parseInt(levelnum);
                }
            }, delay);
    }
}
