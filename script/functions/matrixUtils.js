// Functions useful for matrix manipulation

function addShapeMatrix(patternItem,param) {
	var matShape = [];
	if (patternItem.key == 'square') {
        matShape = shapes.square.mat[patternItem.frame];
    }
    if (patternItem.key == 'trapeze') {
        matShape = shapes.trapeze.mat[patternItem.frame];
    }
    if (patternItem.key == 'hexagon') {
        matShape = shapes.hexagon.mat[patternItem.frame];
    }
    if (patternItem.key == 'triangle_equi') {
        matShape = shapes.triangleEqui.mat[patternItem.frame];
    }
    if (patternItem.key === 'triangle_rect') {
        matShape = shapes.triangleRect.mat[patternItem.frame];
    }
    if (patternItem.key === 'diamond') {
        matShape = shapes.diamond.mat[patternItem.frame];
    }
	var pixelShape = 0;
    var pixelRef = 0;
    if (param == 1) { // add the shape matrix into the pattern matrix
   		for (var i = 0; i < nbPixels; i++) {
    	    for (var j = 0; j < nbPixels; j++) {
		        pixelShape = matShape[i][j];
    	        pixelRef = matPattern[Math.floor(Number(patternItem.y) + i)][Math.floor(Number(patternItem.x) + j)];
    	        matPattern[Math.floor(Number(patternItem.y) + i)][Math.floor(Number(patternItem.x) + j)] = Math.max(pixelShape,pixelRef);
    	        // i is the line index --> coord y
    	        // j is the column index --> coord x
    	    }
   		 }
    }
    if (param == 2) { // add the shape matrix into the solution matrix
   		for (var i = 0; i < nbPixels; i++) {
        	for (var j = 0; j < nbPixels; j++) {
	     		pixelShape = matShape[i][j];
          		pixelRef = matSolution[Math.floor(Number(patternItem.y) + i)][Math.floor(Number(patternItem.x) + j)];
          		matSolution[Math.floor(Number(patternItem.y) + i)][Math.floor(Number(patternItem.x) + j)] = Math.max(pixelShape,pixelRef);
	            // i is the line index --> coord y
	            // j is the column index --> coord x
	        }
	    }
    }
    if (param == 3) { // add the shape matrix into the snap matrix
   		for (var i = 0; i < nbPixels; i++) {
        	for (var j = 0; j < nbPixels; j++) {
	     		pixelShape = matShape[i][j];
          		pixelRef = matSnap[Math.floor(Number(patternItem.y) + i)][Math.floor(Number(patternItem.x) + j)];
          		if (pixelShape == 2 && pixelRef == 2) {
          			matSnap[Math.floor(Number(patternItem.y) + i)][Math.floor(Number(patternItem.x) + j)] = 1;
          			// superposition of 2 contours, so it is no more a contour (pixel = 1)
      			} else {
      				matSnap[Math.floor(Number(patternItem.y) + i)][Math.floor(Number(patternItem.x) + j)] = Math.max(pixelShape,pixelRef);
  				}
	            // i is the line index --> coord y
	            // j is the column index --> coord x
	        }
	    }
    }

}
