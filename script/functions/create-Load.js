//Fonction Create principale du jeu
function create() {

    //Build the wallpaper and RESIZE
    wallpaper();

    //Heritage Relationships
    F1 = game.add.group();
    F2 = game.add.group();
    F3 = game.add.group();
    F4 = game.add.group();
    F5 = game.add.group();
    F6 = game.add.group();

    P1 = game.add.group();
    P2 = game.add.group();
    P3 = game.add.group();
    P4 = game.add.group();
    P5 = game.add.group();
    P6 = game.add.group();

    forms = game.add.group();
    patterns = game.add.group();
    trash = game.add.group();

    forms.add(F1);
    forms.add(F2);
    forms.add(F3);
    forms.add(F4);
    forms.add(F5);
    forms.add(F6);

    patterns.add(P1);
    patterns.add(P2);
    patterns.add(P3);
    patterns.add(P4);
    patterns.add(P5);
    patterns.add(P6);

    // Sound Management
    binSound = game.add.audio('trashbin');

    //Build the menu
    buildMenu();

    // Build the binary matrix for each shape and calculate the areas

    var temp1_hexagon = game.cache.getText('txt_hexagon');
    // temp1_hexagon is a long string (all the .txt file)
    var temp2_hexagon = temp1_hexagon.split('\n');
    // temp2_hexagon is a string (the list of lines)
    for (var i = 0; i < temp2_hexagon.length - 1; i++) {
        var temp3_hexagon = temp2_hexagon[i].split('\t');
        // temp3_hexagon is a character vector
        for (var j = 0; j < temp3_hexagon.length; j++) {
            mat_hexagon[i][j] = parseInt(temp3_hexagon[j], 10);
            areaHexagon = areaHexagon + mat_hexagon[i][j];
        }
    }

    var temp1_diamond = game.cache.getText('txt_diamond');
    var temp2_diamond = temp1_diamond.split('\n');
    for (var i = 0; i < temp2_diamond.length - 1; i++) {
        var temp3_diamond = temp2_diamond[i].split('\t');
        for (var j = 0; j < temp3_diamond.length; j++) {
            mat_diamond[i][j] = parseInt(temp3_diamond[j], 10);
            areaDiamond = areaDiamond + mat_diamond[i][j];
        }
    }

    var temp1_square = game.cache.getText('txt_square');
    var temp2_square = temp1_square.split('\n');
    for (var i = 0; i < temp2_square.length - 1; i++) {
        var temp3_square = temp2_square[i].split('\t');
        for (var j = 0; j < temp3_square.length; j++) {
            mat_square[i][j] = parseInt(temp3_square[j], 10);
            areaSquare = areaSquare + mat_square[i][j];
        }
    }

    var temp1_trapeze = game.cache.getText('txt_trapeze');
    var temp2_trapeze = temp1_trapeze.split('\n');
    for (var i = 0; i < temp2_trapeze.length - 1; i++) {
        var temp3_trapeze = temp2_trapeze[i].split('\t');
        for (var j = 0; j < temp3_trapeze.length; j++) {
            mat_trapeze[i][j] = parseInt(temp3_trapeze[j], 10);
            areaTrapeze = areaTrapeze + mat_trapeze[i][j];
        }
    }

    var temp1_triangle_equi = game.cache.getText('txt_triangle_equi');
    var temp2_triangle_equi = temp1_triangle_equi.split('\n');
    for (var i = 0; i < temp2_triangle_equi.length - 1; i++) {
        var temp3_triangle_equi = temp2_triangle_equi[i].split('\t');
        for (var j = 0; j < temp3_triangle_equi.length; j++) {
            mat_triangle_equi[i][j] = parseInt(temp3_triangle_equi[j], 10);
            areaTriangleEqui = areaTriangleEqui + mat_triangle_equi[i][j];
        }
    }

    var temp1_triangle_rect = game.cache.getText('txt_triangle_rect');
    var temp2_triangle_rect = temp1_triangle_rect.split('\n');
    for (var i = 0; i < temp2_triangle_rect.length - 1; i++) {
        var temp3_triangle_rect = temp2_triangle_rect[i].split('\t');
        for (var j = 0; j < temp3_triangle_rect.length; j++) {
            mat_triangle_rect[i][j] = parseInt(temp3_triangle_rect[j], 10);
            areaTriangleRect = areaTriangleRect + mat_triangle_rect[i][j];
        }
    }

    //Create the wished pattern

    var pattern = [];

    //Get the JSON content
    var result = document.getElementById('cache').innerText;
    document.getElementById('json').style.display = 'none';

    //JSON analysis
    var jsonObj = JSON.parse(result);

    //Pattern creation
    for (var i = 0; i < jsonObj.problem.pattern.length; i++) {
        switch (jsonObj.problem.pattern[i].kind) {
            case "square":
                pattern[i] = P1.create(jsonObj.problem.pattern[i].anchorPoint.x, jsonObj.problem.pattern[i].anchorPoint.y, 'img_square');
                pattern[i].inputEnabled = true;
                pattern[i].tint = 0x020303;
                pattern[i].angle = jsonObj.problem.pattern[i].rotation;
                pattern[i].alpha = 0.4;
                break;
            case "trapeze":
                pattern[i] = P2.create(jsonObj.problem.pattern[i].anchorPoint.x, jsonObj.problem.pattern[i].anchorPoint.y, 'img_trapeze');
                pattern[i].inputEnabled = true;
                pattern[i].tint = 0x020303;
                pattern[i].angle = jsonObj.problem.pattern[i].rotation;
                pattern[i].alpha = 0.4;
                break;
            case "hexagon":
                pattern[i] = P3.create(jsonObj.problem.pattern[i].anchorPoint.x, jsonObj.problem.pattern[i].anchorPoint.y, 'img_hexagon');
                pattern[i].inputEnabled = true;
                pattern[i].tint = 0x020303;
                pattern[i].angle = jsonObj.problem.pattern[i].rotation;
                pattern[i].alpha = 0.4;
                break;
            case "triangleEqui":
                pattern[i] = P4.create(jsonObj.problem.pattern[i].anchorPoint.x, jsonObj.problem.pattern[i].anchorPoint.y, 'img_triangle_equi');
                pattern[i].inputEnabled = true;
                pattern[i].tint = 0x020303;
                pattern[i].angle = jsonObj.problem.pattern[i].rotation;
                pattern[i].alpha = 0.4;
                break;
            case "triangleRect":
                pattern[i] = P5.create(jsonObj.problem.pattern[i].anchorPoint.x, jsonObj.problem.pattern[i].anchorPoint.y, 'img_triangle_rect');
                pattern[i].inputEnabled = true;
                pattern[i].tint = 0x020303;
                pattern[i].angle = jsonObj.problem.pattern[i].rotation;
                pattern[i].alpha = 0.4;
                break;
            case "diamond":
                pattern[i] = P6.create(jsonObj.problem.pattern[i].anchorPoint.x, jsonObj.problem.pattern[i].anchorPoint.y, 'img_diamond');
                pattern[i].inputEnabled = true;
                pattern[i].tint = 0x020303;
                pattern[i].angle = jsonObj.problem.pattern[i].rotation;
                pattern[i].alpha = 0.4;
                break;

        }
    }


    //Update the pattern matrix with the shapes' matrix
    P1.forEach(function(patternItem) {
        areaPattern = areaPattern + areaSquare;
        for (var i = 0; i < mat_square.length; i++) {
            for (var j = 0; j < mat_square[0].length; j++) {
                if (mat_square[i][j] == 1) {
                    matPattern[Math.floor(patternItem.y + i)][Math.floor(patternItem.x + j)] = 1;
                    // i is the line index --> coord y
                    // j is the column index --> coord x
                }
            }
        }

    }, this);

    P2.forEach(function(patternItem) {
        areaPattern = areaPattern + areaTrapeze;
        for (var i = 0; i < mat_trapeze.length; i++) {
            for (var j = 0; j < mat_trapeze[0].length; j++) {
                if (mat_trapeze[i][j] == 1) {
                    matPattern[Math.floor(patternItem.y + i)][Math.floor(patternItem.x + j)] = 1;
                }
            }
        }

    }, this);

    P3.forEach(function(patternItem) {
        areaPattern = areaPattern + areaHexagon;
        for (var i = 0; i < mat_hexagon.length; i++) {
            for (var j = 0; j < mat_hexagon[0].length; j++) {
                if (mat_hexagon[i][j] == 1) {
                    matPattern[Math.floor(patternItem.y + i)][Math.floor(patternItem.x + j)] = 1;
                }
            }
        }

    }, this);

    P4.forEach(function(patternItem) {
        areaPattern = areaPattern + areaTriangleEqui;
        for (var i = 0; i < mat_triangle_equi.length; i++) {
            for (var j = 0; j < mat_triangle_equi[0].length; j++) {
                if (mat_triangle_equi[i][j] == 1) {
                    matPattern[Math.floor(patternItem.y + i)][Math.floor(patternItem.x + j)] = 1;
                }
            }
        }

    }, this);

    P5.forEach(function(patternItem) {
        areaPattern = areaPattern + areaTriangleRect;
        for (var i = 0; i < mat_triangle_rect.length; i++) {
            for (var j = 0; j < mat_triangle_rect[0].length; j++) {
                if (mat_triangle_rect[i][j] == 1) {
                    matPattern[Math.floor(patternItem.y + i)][Math.floor(patternItem.x + j)] = 1;
                }
            }
        }

    }, this);

    P6.forEach(function(patternItem) {
        areaPattern = areaPattern + areaDiamond;
        for (var i = 0; i < mat_diamond.length; i++) {
            for (var j = 0; j < mat_diamond[0].length; j++) {
                if (mat_diamond[i][j] == 1) {
                    matPattern[Math.floor(patternItem.y + i)][Math.floor(patternItem.x + j)] = 1;
                }
            }
        }

    }, this);

}