define ([
  "global",
  "data/palette",
  "functions/gameButtons",
  "functions/dragAndDrop",
  "functions/dragAndDropUtils",
  "functions/sounds"

  ], function(
    globals,
    colors,
    gameButtons,
    dragAndDrop,
    dragAndDropUtils,
    sounds
    ) {


// Add the shape and update the counter
function onClickAddAShape(item){
	var shapeName = item.shape;
	
	addShape(shapeName);

  // sounds
  var nb = evaluateShapes(shapeName,'shapesInPlace');
  sounds.sound_addRemoveShape(shapeName, nb, true);

  if (globals.game.global.mode == "levelMode" ) dragAndDropUtils.removeAStar(globals.game.global.secondChance); // remove a star with condition second chance
}


//Function to add shapes to the basket
function addShape(shapeName) { 
    var game = globals.game;
    var position = Math.random()*(game.width-310)+90;
    var tempSprite = game.add.sprite(position, game.height - 155, shapeName);

    tempSprite.originalPosition = tempSprite.position.clone();
    
    tempSprite.tint = colors.defaultColor;

    tempSprite.inputEnabled = true;
    tempSprite.input.enableSnap(1, 1, false, true); //Grid of 1 pixel
    tempSprite.input.pixelPerfectOver = true;
    tempSprite.input.enableDrag(false, true, true);
    tempSprite.events.onInputDown.add( onClickOnShape,this);
    tempSprite.events.onDragStop.add( onReleaseShape,this);
    //tempSprite.events.onInputUp.add(onReleaseShape, this);

    tempSprite.rotationAnimation = tempSprite.animations.add('rotation');

    game.global.shapes[shapeName].shapesInPlace.push(tempSprite);

    var nb = evaluateShapes(shapeName,'shapesInPlace');

    game.global.shapes[shapeName].shapeButton.label.setText(nb);
  }

function addRotationUI(tempSprite,angle){
    var rotationUI = globals.game.add.sprite(tempSprite.x+65,tempSprite.y+65,'rotation-ui');
    rotationUI.anchor = {x:0.5, y:0.5};
    rotationUI.angle = angle;

    tempSprite.rotationUI = rotationUI;
    rotationUI.shapeSprite = tempSprite;

    rotationUI.inputEnabled =true;
    rotationUI.input.pixelPerfectOver = true;
    rotationUI.input.enableDrag(false);
    rotationUI.events.onDragStart.add(onRotationStart,this);
    rotationUI.events.onDragUpdate.add(onRotationUpdate,this);
    rotationUI.events.onDragStop.add(onRotationEnd,this);


    //rotationUI.shapeOriginPosition = {x:tempSprite.x + 65,y:tempSprite.y+65};
    rotationUI.rotationUIPosition = rotationUI.position.clone();

    tempSprite.bringToTop();
}

function removeRotationUI(tempSprite){
  
  if (tempSprite.rotationUI != null) tempSprite.rotationUI.destroy();
}

function removeAllRotationUI(){
  for (var key in globals.game.global.shapes){
    for (i=0;i<globals.game.global.shapes[key].shapesInPlace.length;i++){
      removeRotationUI(globals.game.global.shapes[key].shapesInPlace[i]);
    }
  }
}

function onRotationStart(item,pointer){

    item.beginDragPosition = pointer.position.clone();
    item.beginDir = item.shapeSprite.frame;
    item.beginAngle = item.angle;

}

function onRotationUpdate(item,pointer){

   item.position = item.rotationUIPosition.clone();

  if (item.beginDir != undefined) {
    var origin = item.position;
    var beginPosition = item.beginDragPosition;
    var currentPosition = pointer.position;

    var angle = (Phaser.Point.angle(origin, currentPosition)-Phaser.Point.angle(origin, beginPosition)) * 57; // conversion en degrés
      
    var maxDir = globals.game.global.shapes[item.shapeSprite.key].nbDir;
    var newDir = item.beginDir + Math.floor(angle / 30);

    item.shapeSprite.frame = (newDir+maxDir) % maxDir;
    item.angle = item.beginAngle + angle ;

    item.shapeSprite.updateCache();
  }
}

function onRotationEnd(item){

  var tempSprite = item.shapeSprite;
  removeRotationUI(tempSprite);
  addRotationUI(tempSprite, item.angle );
}

function onClickOnShape(tempSprite){
  tempSprite.wasSelected = (tempSprite.rotationUI != undefined) ? tempSprite.rotationUI.exists : false;
  removeAllRotationUI();
  if (globals.game.global.mode != 'freeMode') dragAndDrop.beginDrag();
  
}

function onReleaseShape(tempSprite){
    // if drag en drop 
    var dist = Phaser.Point.distance(tempSprite.originalPosition, tempSprite.position);
    if (dist>10){
        // disable color if freemode
        if (globals.game.global.mode == "freeMode"){
          globals.game.global.ui.basket.children[3].forEach(function(colorButton){
            gameButtons.setColorButtonValue(colorButton,false);
          });
        }

        // snap effect
        dragAndDrop.endDrag(tempSprite);
        tempSprite.originalPosition = tempSprite.position.clone();
        if (tempSprite.exists) addRotationUI(tempSprite,0);
    } else {
      // stay at the orginal position
      tempSprite.position.copyFrom(tempSprite.originalPosition); 
      
      // if color chnage color
      if (globals.game.global.mode == "freeMode"){
        globals.game.global.ui.basket.children[3].forEach(function(colorButton){
            tempSprite.tint = colorButton.value ? colorButton.color : tempSprite.tint;
        });
      }

      if (tempSprite.exists && !tempSprite.wasSelected) addRotationUI(tempSprite,0);
    }
}


// evaluate the shapes of the game
// shapeName : square, hexagon, etc.
// groupName : shapesInPlace or shapesOfPattern
function evaluateShapes (shapeName, arrayName){
var game = globals.game;

	var res = 0;
	
	var shapeArray = game.global.shapes[shapeName][arrayName];
	for (i=0; i< shapeArray.length;i++){
			res ++;
	}
	return res;
}



return {onClickAddAShape:onClickAddAShape, addShape:addShape, evaluateShapes:evaluateShapes };

});