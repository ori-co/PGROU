// Functions useful for matrix manipulation

// TODO gérer l'orientation des formes et l'interdiction de superposition

function addShapeMatrix(patternItem,param) {
	var matShape = [];
	if (patternItem.key == 'square') {
        matShape = shapes.square.mat[0];
    }
    if (patternItem.key == 'trapeze') {
        matShape = shapes.trapeze.mat[0];
    }
    if (patternItem.key == 'hexagon') {
        matShape = shapes.hexagon.mat[0];
    }
    if (patternItem.key == 'triangle_equi') {
        matShape = shapes.triangleEqui.mat[0];
    }
    if (patternItem.key === 'triangle_rect') {
        matShape = shapes.triangleRect.mat[0];
    }
    if (patternItem.key === 'diamond') {
        matShape = shapes.diamond.mat[0];
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
    if (param == 3) { // add the shape matrix into the snap matrix
   		for (var i = 0; i < nbPixels; i++) {
        	for (var j = 0; j < nbPixels; j++) {
	     		pixelShape = matShape[i][j];
          		pixelRef = matSnap[Math.floor(patternItem.y + i)][Math.floor(patternItem.x + j)];
          		if (pixelShape == 2 && pixelRef == 2) {
          			matSnap[Math.floor(patternItem.y + i)][Math.floor(patternItem.x + j)] = 1;
          			// superposition of 2 contours, so it is no more a contour (pixel = 1)
      			} else {
      				matSnap[Math.floor(patternItem.y + i)][Math.floor(patternItem.x + j)] = Math.max(pixelShape,pixelRef);
  				}
	            // i is the line index --> coord y
	            // j is the column index --> coord x
	        }
	    }
    }
}


function calculateCommonContours(tempSprite, i, j) {

	var matShape = [];
	if (tempSprite.key == 'square') {
        matShape = shapes.square.mat[0];
    }
    if (tempSprite.key == 'trapeze') {
        matShape = shapes.trapeze.mat[0];
    }
    if (tempSprite.key == 'hexagon') {
        matShape = shapes.hexagon.mat[0];
    }
    if (tempSprite.key == 'triangle_equi') {
        matShape = shapes.triangleEqui.mat[0];
    }
    if (tempSprite.key === 'triangle_rect') {
        matShape = shapes.triangleRect.mat[0];
    }
    if (tempSprite.key === 'diamond') {
        matShape = shapes.diamond.mat[0];
    }
    
	var res = 0;
	for (var ii = 0; ii < nbPixels; ii++) {
    	for (var jj = 0; jj < nbPixels; jj++) {
    		if (matShape[ii][jj] == 2 && matSnap[i+ii][j+jj] == 2) {
    			res++;
    		}
    	}
	}
	return res;
}














