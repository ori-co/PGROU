// Initialisation of the binary quantum matrix for the shapes

var mat_hexagon = new Array(115);
for (var i = 0; i < 115; i++) {
    mat_hexagon[i] = new Array(130);
}
for (var i = 0; i < 115; i++) {
    for (var j = 0; j < 130; j++) {
        mat_hexagon[i][j] = 0;
    }
}
var mat_diamond = new Array(115);
for (var i = 0; i < 115; i++) {
    mat_diamond[i] = new Array(65);
}
for (var i = 0; i < 115; i++) {
    for (var j = 0; j < 65; j++) {
        mat_diamond[i][j] = 0;
    }
}
var mat_square = new Array(65);
for (var i = 0; i < 65; i++) {
    mat_square[i] = new Array(65);
}
for (var i = 0; i < 65; i++) {
    for (var j = 0; j < 65; j++) {
        mat_square[i][j] = 0;
    }
}
var mat_trapeze = new Array(65);
for (var i = 0; i < 65; i++) {
    mat_trapeze[i] = new Array(130);
}
for (var i = 0; i < 65; i++) {
    for (var j = 0; j < 130; j++) {
        mat_trapeze[i][j] = 0;
    }
}
var mat_triangle_equi = new Array(65);
for (var i = 0; i < 65; i++) {
    mat_triangle_equi[i] = new Array(65);
}
for (var i = 0; i < 65; i++) {
    for (var j = 0; j < 65; j++) {
        mat_triangle_equi[i][j] = 0;
    }
}
var mat_triangle_rect = new Array(65);
for (var i = 0; i < 65; i++) {
    mat_triangle_rect[i] = new Array(65);
}
for (var i = 0; i < 65; i++) {
    for (var j = 0; j < 65; j++) {
        mat_triangle_rect[i][j] = 0;
    }
}

//Initialisation of the problem's and the solution's matrix

var matPattern = new Array(1200);
for (var i = 0; i < 1200; i++) {
    matPattern[i] = new Array(800);
}
for (var i = 0; i < 1200; i++) {
    for (var j = 0; j < 800; j++) {
        matPattern[i][j] = 0;
    }
}
var matSolution = new Array(1200);
for (var i = 0; i < 1200; i++) {
    matSolution[i] = new Array(800);
}
for (var i = 0; i < 1200; i++) {
    for (var j = 0; j < 800; j++) {
        matSolution[i][j] = 0;
    }
}