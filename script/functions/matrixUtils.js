// Functions useful for matrix manipulation

// TODO gérer l'orientation des formes et l'interdiction de superposition
function addShapeMatrix(patternItem,param) {
	var matShape = [];
	if (patternItem.key == 'img_square') {
        matShape = shapes.square.mat1;
    }
    if (patternItem.key == 'img_trapeze') {
        matShape = shapes.trapeze.mat1;
    }
    if (patternItem.key == 'img_hexagon') {
        matShape = shapes.hexagon.mat1;
    }
    if (patternItem.key == 'img_triangle_equi') {
        matShape = shapes.triangleEqui.mat1;
    }
    if (patternItem.key === 'img_triangle_rect') {
        matShape = shapes.triangleRect.mat1;
    }
    if (patternItem.key === 'img_diamond') {
        matShape = shapes.diamond.mat1;
    }
	var pixelShape = 0;
    var pixelRef = 0;
    if (param == 1) { // add the shape matrix into the pattern matrix
   		for (var i = 0; i < nbPixels; i++) {
    	    for (var j = 0; j < nbPixels; j++) {
		        pixelShape = matShape[i][j];
    	        pixelRef = matPattern[Math.floor(patternItem.y + i)][Math.floor(patternItem.x + j)];
    	        matPattern[Math.floor(patternItem.y + i)][Math.floor(patternItem.x + j)] = Math.max(pixelShape,pixelRef);
    	        // i is the line index --> coord y
    	        // j is the column index --> coord x
    	    }
   		 }
    }
    if (param == 2) { // add the shape matrix into the solution matrix
   		for (var i = 0; i < nbPixels; i++) {
        	for (var j = 0; j < nbPixels; j++) {
	     		pixelShape = matShape[i][j];
          		pixelRef = matSolution[Math.floor(patternItem.y + i)][Math.floor(patternItem.x + j)];
          		matSolution[Math.floor(patternItem.y + i)][Math.floor(patternItem.x + j)] = Math.max(pixelShape,pixelRef);
	            // i is the line index --> coord y
	            // j is the column index --> coord x
	        }
	    }
    }
}
