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

    // tempSprite.anchor.x = 0;
    // tempSprite.anchor.y = 0;
    tempSprite.originalPosition = tempSprite.position.clone();
    
    tempSprite.tint = colors.palette[0];

    tempSprite.inputEnabled = true;
    tempSprite.input.enableSnap(1, 1, false, true); //Grid of 1 pixel
    tempSprite.input.pixelPerfectOver = true;
    tempSprite.input.enableDrag(false, true, true);
    tempSprite.events.onInputDown.add( onClickOnShape,this);
    tempSprite.events.onDragStop.add( onReleaseShape,this);

   tempSprite.rotationAnimation = tempSprite.animations.add('rotation');
   //tempSprite.rotationAnimation.play(0.1, true);
   //addRotationUI(tempSprite);
    
   //  tempSprite.inputEnabled = true; //Active Input
   //  tempSprite.input.enableDrag(false, true, true); //Mobile (drag)
   //  tempSprite.input.enableSnap(1, 1, false, true); //Grid of 1 pixel
   //  tempSprite.events.onInputDown.add(gameButtons.formInteraction, this); //Edition mode after click
   //  if (game.global.mode == "levelMode") {
   //   tempSprite.events.onDragStart.add(dragAndDrop.beginDrag, this); 
   // }
   //  tempSprite.events.onDragStop.add(dragAndDrop.endDrag, this); //End of drag
    
   //  tempSprite.events.onInputOver.add(function(){
   //   switch (game.global.editingMode){
   //     case 1:
   //     game.canvas.style.cursor="url('assets/images/cursors/rotR.png'),default";
   //     break;
   //     case 2:
   //     game.canvas.style.cursor="url('assets/images/cursors/rotL.png'),default";
   //     break;
   //     case 3:
   //     game.canvas.style.cursor="url('assets/images/cursors/col.png'),default";
   //     break;
   //     default:
   //     game.canvas.style.cusor="default";
   //   } 
   // });



    game.global.shapes[shapeName].shapesInPlace.push(tempSprite);
  }

function addRotationUI(tempSprite){
  var rotationUI = globals.game.add.sprite(tempSprite.x-20,tempSprite.y-20,'rotation-ui');
  tempSprite.rotationUI = rotationUI;
  rotationUI.shapeSprite = tempSprite;

    rotationUI.inputEnabled =true;
    rotationUI.input.pixelPerfectOver = true;
    rotationUI.input.enableDrag(false);
    rotationUI.events.onDragStart.add(onRotationStart,this);
    rotationUI.events.onDragUpdate.add(onRotationUpdate,this);
    rotationUI.events.onDragStop.add(onRotationEnd,this);


    rotationUI.shapeOriginPosition = {x:tempSprite.x + 65,y:tempSprite.y+65}
    rotationUI.beginDrag = rotationUI.position.clone();

    tempSprite.bringToTop();
}

function removeRotationUI(tempSprite){
  
  if (tempSprite.rotationUI != null) tempSprite.rotationUI.destroy();
}

function onRotationStart(item,pointer){

    item.beginDir = item.shapeSprite.frame;

}

function onRotationUpdate(item,pointer){

   item.position = item.beginDrag.clone();

  if (item.beginDir != undefined) {
    var angle = Phaser.Point.angle(pointer.position, item.shapeOriginPosition);
    var maxDir = globals.game.global.shapes[item.shapeSprite.key].nbDir;
    var newDir = (item.beginDir + Math.floor(20* angle / 12)) % maxDir;
    var rotationDirection = (newDir<0) ? newDir+maxDir : newDir;
 
    item.shapeSprite.frame =  rotationDirection;

    item.shapeSprite.updateCache();
  }
}

function onRotationEnd(item){
  removeRotationUI(tempSprite);
  addRotationUI(tempSprite);

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

    addRotationUI(tempSprite);
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