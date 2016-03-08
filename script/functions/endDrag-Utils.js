function deleteSprite(tempSprite) {
    if (tempSprite.key == 'square') {
        nbF1 = nbF1 - 1;
        labelSquare.text = nbF1;
    }
    if (tempSprite.key == 'trapeze') {
        nbF2 = nbF2 - 1;
        labelTrapezoid.text = nbF2;
    }
    if (tempSprite.key == 'hexagon') {
        nbF3 = nbF3 - 1;
        labelHexagon.text=nbF3;
    }
    if (tempSprite.key == 'triangle_equi') {
        nbF4 = nbF4 - 1;
        labelTriangleEqui.text = nbF4;
    }
    if (tempSprite.key === 'triangle_rect') {
        nbF5 = nbF5 - 1;
        labelTriangleRect.text=nbF5;
    }
    if (tempSprite.key === 'diamond') {
        nbF6 = nbF6 - 1;
        labelDiamond.text=nbF6;
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

    for (var i = 0; i < 1200; i++) {
        for (var j = 0; j < 800; j++) {
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
        if (patternItem.key != tempSprite.key && patternItem.x != tempSprite.x && patternItem.y != tempSprite.y) {
            addShapeMatrix(patternItem, 3);
        }
    }, this);

    F2.forEach(function (patternItem) {
        if (patternItem.key != tempSprite.key && patternItem.x != tempSprite.x && patternItem.y != tempSprite.y) {
            addShapeMatrix(patternItem, 3);
        }
    }, this);

    F3.forEach(function (patternItem) {
        if (patternItem.key != tempSprite.key && patternItem.x != tempSprite.x && patternItem.y != tempSprite.y) {
            addShapeMatrix(patternItem, 3);
        }
    }, this);

    F4.forEach(function (patternItem) {
        if (patternItem.key != tempSprite.key && patternItem.x != tempSprite.x && patternItem.y != tempSprite.y) {
            addShapeMatrix(patternItem, 3);
        }
    }, this);

    F5.forEach(function (patternItem) {
        if (patternItem.key != tempSprite.key && patternItem.x != tempSprite.x && patternItem.y != tempSprite.y) {
            addShapeMatrix(patternItem, 3);
        }
    }, this);

    F6.forEach(function (patternItem) {
        if (patternItem.key != tempSprite.key && patternItem.x != tempSprite.x && patternItem.y != tempSprite.y) {
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
//This matrix is useful in order to check if the tempSprite is in the pattern or not	
        var matTemp = new Array(1200);
        for (var i = 0; i < 1200; i++) {
            matTemp[i] = new Array(800);
        }
        for (var i = 0; i < 1200; i++) {
            for (var j = 0; j < 800; j++) {
                matTemp[i][j] = 0;
            }
        }
			
//***SQUARE***	
        if (tempSprite.key == 'square') {
            var M = shapes.square.mat[tempSprite.frame];

            for (var i = 0; i < 128; i++) {
                for (var j = 0; j < 128; j++) {

                    matTemp[Math.floor(Number(tempSprite.y) + i)][Math.floor(Number(tempSprite.x) + j)] = M[i][j];
                }
            }

            var isIN = 1;

            for (var i = 0; i < 1200; i++) {
                for (var j = 0; j < 800; j++) {
                    if (matTemp[i][j] == 1 && matPattern[i][j] == 0) {
                        isIN = 0;
                    }
                }
            }


            P1.forEach(function (pattern) {
                if (pattern.x == tempSprite.x && pattern.y == tempSprite.y && pattern.shape == tempSprite.shape) {
                    tempSprite.tint = pattern.wantedColor;
                } else {
                    if (isIN == 1) {
                        tempSprite.tint = palette[Math.floor(Math.random() * palette.length)];
                    } else {
                        tempSprite.tint = 0xabdcf1;
                    }
                }
            }, this);
        }

//***TRAPEZE***	
        if (tempSprite.key == 'trapeze') {
            var M = shapes.trapeze.mat[tempSprite.frame];

            for (var i = 0; i < 128; i++) {
                for (var j = 0; j < 128; j++) {

                    matTemp[Math.floor(Number(tempSprite.y) + i)][Math.floor(Number(tempSprite.x) + j)] = M[i][j];
                }
            }

            var isIN = 1;

            for (var i = 0; i < 1200; i++) {
                for (var j = 0; j < 800; j++) {
                    if (matTemp[i][j] == 1 && matPattern[i][j] == 0) {
                        isIN = 0;
                    }
                }
            }


            P2.forEach(function (pattern) {
                if (pattern.x == tempSprite.x && pattern.y == tempSprite.y && pattern.shape == tempSprite.shape) {
                    tempSprite.tint = pattern.wantedColor;
                } else {
                    if (isIN == 1) {
                        tempSprite.tint = palette[Math.floor(Math.random() * palette.length)];
                    } else {
                        tempSprite.tint = 0xabdcf1;
                    }
                }
            }, this);
        }

//***HEXAGON***	
        if (tempSprite.key == 'hexagon') {
            var M = shapes.hexagon.mat[tempSprite.frame];

            for (var i = 0; i < 128; i++) {
                for (var j = 0; j < 128; j++) {

                    matTemp[Math.floor(Number(tempSprite.y) + i)][Math.floor(Number(tempSprite.x) + j)] = M[i][j];
                }
            }

            var isIN = 1;

            for (var i = 0; i < 1200; i++) {
                for (var j = 0; j < 800; j++) {
                    if (matTemp[i][j] == 1 && matPattern[i][j] == 0) {
                        isIN = 0;
                    }
                }
            }
            P3.forEach(function (pattern) {
                if (pattern.x == tempSprite.x && pattern.y == tempSprite.y && pattern.shape == tempSprite.shape) {
                    tempSprite.tint = pattern.wantedColor;
                } else {
                    if (isIN == 1) {
                        tempSprite.tint = palette[Math.floor(Math.random() * palette.length)];
                    } else {
                        tempSprite.tint = 0xabdcf1;
                    }
                }
            }, this);
        }

//***TRIANGLE EQUI***	
        if (tempSprite.key == 'triangle_equi') {
            var M = shapes.triangleEqui.mat[tempSprite.frame];

            for (var i = 0; i < 128; i++) {
                for (var j = 0; j < 128; j++) {

                    matTemp[Math.floor(Number(tempSprite.y) + i)][Math.floor(Number(tempSprite.x) + j)] = M[i][j];
                }
            }

            var isIN = 1;

            for (var i = 0; i < 1200; i++) {
                for (var j = 0; j < 800; j++) {
                    if (matTemp[i][j] == 1 && matPattern[i][j] == 0) {
                        isIN = 0;
                    }
                }
            }


            P4.forEach(function (pattern) {
                if (pattern.x == tempSprite.x && pattern.y == tempSprite.y && pattern.shape == tempSprite.shape) {
                    tempSprite.tint = pattern.wantedColor;
                } else {
                    if (isIN == 1) {
                        tempSprite.tint = palette[Math.floor(Math.random() * palette.length)];
                    } else {
                        tempSprite.tint = 0xabdcf1;
                    }
                }
            }, this);
		}
		
//***TRIANGLE RECT***	
            if (tempSprite.key == 'triangle_rect') {
				
                var M = shapes.triangleRect.mat[tempSprite.frame];

                for (var i = 0; i < 128; i++) {
                    for (var j = 0; j < 128; j++) {

                        matTemp[Math.floor(Number(tempSprite.y) + i)][Math.floor(Number(tempSprite.x) + j)] = M[i][j];
                    }
                }

                var isIN = 1;

                for (var i = 0; i < 1200; i++) {
                    for (var j = 0; j < 800; j++) {
                        if (matTemp[i][j] == 1 && matPattern[i][j] == 0) {
                            isIN = 0;
                        }
                    }
                }


                P5.forEach(function (pattern) {
                    if (pattern.x == tempSprite.x && pattern.y == tempSprite.y && pattern.shape == tempSprite.shape) {
                        tempSprite.tint = pattern.wantedColor;
                    } else {
                        if (isIN == 1) {
                            tempSprite.tint = palette[Math.floor(Math.random() * palette.length)];
                        } else {
                            tempSprite.tint = 0xabdcf1;
                        }
                    }
                }, this);
            }


            //***DIAMOND***	

            if (tempSprite.key == 'diamond') {
                var M = shapes.diamond.mat[tempSprite.frame];

                for (var i = 0; i < 128; i++) {
                    for (var j = 0; j < 128; j++) {

                        matTemp[Math.floor(Number(tempSprite.y) + i)][Math.floor(Number(tempSprite.x) + j)] = M[i][j];
                    }
                }

                var isIN = 1;

                for (var i = 0; i < 1200; i++) {
                    for (var j = 0; j < 800; j++) {
                        if (matTemp[i][j] == 1 && matPattern[i][j] == 0) {
                            isIN = 0;
                        }
                    }
                }


                P6.forEach(function (pattern) {
                    if (pattern.x == tempSprite.x && pattern.y == tempSprite.y && pattern.shape == tempSprite.shape) {
                        tempSprite.tint = pattern.wantedColor;
                    } else {
                        if (isIN == 1) {
                            tempSprite.tint = palette[Math.floor(Math.random() * palette.length)];
                        } else {
                            tempSprite.tint = 0xabdcf1;
                        }
                    }
                }, this);
            }

        }
    }



function updateSolution() {
    for (var i = 0; i < 1200; i++) {
        for (var j = 0; j < 800; j++) {
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
    
    for (var i = 0; i < 1200; i++) {
    	for (var j = 0; j < 800; j++) {
    		if (matSolution[i][j] != matPattern[i][j]) {
                valid++;
            }
    	}
    }
	
	/*
	var i = 0;
	var j = 0;
	while (i < 1200 && valid < 500) {
		while (j < 800 && valid < 500) {
			if (matSolution[i][j] != matPattern[i][j]) {
                valid++;
            }
            j++;
        }
        i++;
    }
    */

    if (valid < 500 && areaSolution == areaPattern) {
        fin = 1;
        if (nbAlert == 0) {
            nbAlert = 1;
            var delay = 500;
            setTimeout(function() {
                alert("Bravo! Vous avez réussi ce niveau!");
            }, delay);
        }
    }
}
