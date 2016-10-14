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

  tempSprite.anchor.x = 0;
  tempSprite.anchor.y = 0;
  tempSprite.originalPosition = tempSprite.position.clone();
    //game.world.bringToTop(forms);
    
    tempSprite.tint = colors.palette[0];

    tempSprite.inputEnabled = true; //Active Input
    tempSprite.input.enableDrag(false, true); //Mobile (drag)
    tempSprite.input.enableSnap(1, 1, false, true); //Grid of 1 pixel
    tempSprite.events.onInputDown.add(gameButtons.formInteraction, this); //Edition mode after click
    if (game.global.mode == "levelMode") {
     tempSprite.events.onDragStart.add(dragAndDrop.beginDrag, this); 
   }
    tempSprite.events.onDragStop.add(dragAndDrop.endDrag, this); //End of drag
    
    tempSprite.events.onInputOver.add(function(){
     switch (game.global.editingMode){
       case 1:
       game.canvas.style.cursor="url('assets/images/cursors/rotR.png'),default";
       break;
       case 2:
       game.canvas.style.cursor="url('assets/images/cursors/rotL.png'),default";
       break;
       case 3:
       game.canvas.style.cursor="url('assets/images/cursors/col.png'),default";
       break;
       default:
       game.canvas.style.cusor="default";
     } 
   });

    game.global.shapes[shapeName].shapesInPlace.push(tempSprite);
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