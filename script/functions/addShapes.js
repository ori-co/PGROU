define ([
  "global",
  "data/palette",
  "functions/gameButtons",
  "functions/dragAndDrop",
  "functions/sounds"

  ], function(
    globals,
    colors,
    gameButtons,
    dragAndDrop,
    sounds
    ) {


// Add the shape and update the counter
function onClickAddAShape(item){
	var shapeName = item.shape;
	
	addShape(shapeName);
	
  var nb = evaluateShapes(shapeName,'shapesInPlace');

	globals.game.global.shapes[shapeName].shapeButton.label.setText(nb);

  // sounds
  sounds.sound_addRemoveShape(shapeName, nb, true);
}


//Function to add shapes to the basket
function addShape(shapeName) { 
    var game = globals.game;
    var position = Math.random()*(game.width-310)+90;
    var tempSprite = game.add.sprite(position, game.height - 155, shapeName);

    tempSprite.originalPosition = tempSprite.position.clone();
    
    tempSprite.tint = colors.palette[0];

    tempSprite.inputEnabled = true;
    tempSprite.input.enableSnap(1, 1, false, true); //Grid of 1 pixel
    tempSprite.input.pixelPerfectOver = true;
    tempSprite.input.enableDrag(false, true, true);
    tempSprite.events.onInputDown.add( onClickOnShape,this);
    tempSprite.events.onDragStop.add( onReleaseShape,this);

    tempSprite.rotationAnimation = tempSprite.animations.add('rotation');

    game.global.shapes[shapeName].shapesInPlace.push(tempSprite);
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


    rotationUI.shapeOriginPosition = {x:tempSprite.x + 65,y:tempSprite.y+65}
    rotationUI.rotationUIPosition = rotationUI.position.clone();

    tempSprite.bringToTop();
}

function removeRotationUI(tempSprite){
  
  if (tempSprite.rotationUI != null) tempSprite.rotationUI.destroy();
}

function onRotationStart(item,pointer){

    item.beginDragPointerPosition = pointer.position.clone();
    item.beginDir = item.shapeSprite.frame;
    item.beginAngle = item.angle;

}

function onRotationUpdate(item,pointer){

   item.position = item.rotationUIPosition.clone();

  if (item.beginDir != undefined) {
    var beginAngle = Phaser.Point.angle(item.beginDragPointerPosition, item.shapeOriginPosition);
    var pointerAngle = Phaser.Point.angle(pointer.position, item.shapeOriginPosition);
    var angle = pointerAngle - beginAngle;
    var maxDir = globals.game.global.shapes[item.shapeSprite.key].nbDir;
    var newDir = (item.beginDir + Math.floor(20* angle / 12)) % maxDir;
    var rotationDirection = (newDir<0) ? newDir+maxDir : newDir;
 
    item.angle = item.beginAngle + angle*60;
    item.shapeSprite.frame =  rotationDirection;

    item.shapeSprite.updateCache();
  }
}

function onRotationEnd(item){

  var tempSprite = item.shapeSprite;
  removeRotationUI(tempSprite);
  addRotationUI(tempSprite, item.angle );
}

function onClickOnShape(tempSprite){
  for (var key in globals.game.global.shapes){
    for (i=0;i<globals.game.global.shapes[key].shapesInPlace.length;i++){
      removeRotationUI(globals.game.global.shapes[key].shapesInPlace[i]);
    }
  }
  dragAndDrop.beginDrag();
  
}

function onReleaseShape(tempSprite){
    // if drag en drop 
    var dist = Phaser.Point.distance(tempSprite.originalPosition, tempSprite.position);
    if (dist>10){
        // disable color if freemode
        // todo

        // snap effect
        dragAndDrop.endDrag(tempSprite);
        tempSprite.originalPosition = tempSprite.position.clone();
    } else {
      // stay at the orginal position
      tempSprite.position.copyFrom(tempSprite.originalPosition); 
      
      // if color chnage color
      //todo
    }

    addRotationUI(tempSprite,0);
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

return {onClickAddAShape:onClickAddAShape, addShape:addShape, evaluateShapes:evaluateShapes};

});