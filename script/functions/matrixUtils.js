define ([
  "global"

  ], function(
    globals
    ) {


// Functions useful for matrix manipulation

//Initialisation of the problem's and the solution's matrix
function matrixInitialisation(maxX,maxY){
	var mat = new Array(maxY);
	for (var i = 0; i < maxY; i++) {
		mat[i] = new Array(maxX);
		for (var j = 0; j < maxX; j++) {
			mat[i][j] = 0;
		}
	}
	
	return mat;
}

// add the pixels according to the Contour logic
// superposition of 2 contours, so it is no more a contour (pixel = 1) 
// a , b = 0, 1, 2
function pixelsContoursAddition(a,b){

  // superposition with a shape (1,-) ou (-,1) or supperposition of 2 contours (2,2)
  if (a==1 || b==1 || (a==2 && b==2)) return 1;
  // empty space (0,0)
  else if (a==0 && b==0) return 0;
  // only 2 cases remaining : (0,2) ou (2,0)
  else return 2;

}


// add two matrix (same size) according to the contour logic
function matrixContoursAddition(matA, matB){

  if (matA.length == matB.length && matA[0].length == matB[0].length) {
    var maxX = matA[0].length;
    var maxY = matA.length;

   var res = matrixInitialisation(maxX,maxY);

    for (i=0;i<maxY;i++){
      for (j=0; j<maxX; j++){
        res[i][j] = pixelsContoursAddition(matA[i][j], matB[i][j]);
      }
    } 
  }
  return res;
}


// add shape matrix to a bigger one
function addShapeToMatrix(tempSprite, mat){

  var game = globals.game;
  var shapeMat = game.global.shapes[tempSprite.key].mat[tempSprite.frame];
  var originX = Math.floor(tempSprite.x);
  var originY = Math.floor(tempSprite.y);
  // var originX = tempSprite.x;
  // var originY = tempSprite.y;
  var sizeX = shapeMat[0].length;
  var sizeY = shapeMat.length;

  for (i = 0; i< sizeY;i ++){
    for (j=0; j < sizeX; j++) {
      var pixel1 = mat[i+originY][j+originX];
      var pixel2 = shapeMat[i][j];
      mat[i+originY][j+originX] = pixelsContoursAddition(pixel1,pixel2);
    }
  }

  return mat;

}

// add all shapes in place ou in pattern to a matrix
function getInfo(arrayName){
  var game = globals.game;

  var mat = matrixInitialisation(game.global.safeAreaSize.x,game.global.safeAreaSize.y);
  var area = 0;

  for (var key in game.global.shapes){
    var shapeArray = game.global.shapes[key][arrayName];
    for (k=0; k<shapeArray.length;k++){
      mat = addShapeToMatrix(shapeArray[k],mat); 
      area += game.global.shapes[key].area[shapeArray[k].frame] ;
    }
  }
  return {mat:mat, area: area};
}

// f
function getInfoInPlaceExclundingCurrentShape(tempSprite){
  var game = globals.game;

  var mat = matrixInitialisation(game.global.safeAreaSize.x,game.global.safeAreaSize.y);
  var area = 0;

  for (var key in game.global.shapes){
    var shapeArray = game.global.shapes[key].shapesInPlace;
    for (k=0; k<shapeArray.length;k++){
      if (tempSprite != shapeArray[k]) {
        mat = addShapeToMatrix(shapeArray[k],mat); 
        area += game.global.shapes[key].area[shapeArray[k].frame] ;
      }
    }
  }
  return {mat:mat, area : area};
}

//return {matrixInitialisation:matrixInitialisation, addShapeMatrix:addShapeMatrix}
return {
  matrixInitialisation : matrixInitialisation,
  matrixContoursAddition : matrixContoursAddition,
  addShapeToMatrix : addShapeToMatrix,
  getInfo : getInfo,
  getInfoInPlaceExclundingCurrentShape : getInfoInPlaceExclundingCurrentShape
}
});