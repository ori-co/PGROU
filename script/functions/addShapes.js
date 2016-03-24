//Function to add shapes from the basket
function addShape(shape, F) { 
    nbF = nbF + 1;
    var position = Math.random()*(game.width-310)+90;
    var tempSprite = F.create(position, game.height - 155, shape);
    tempSprite.anchor.x = 0;
    tempSprite.anchor.y = 0;
    tempSprite.originalPosition = tempSprite.position.clone();
    game.world.bringToTop(forms);
    
    //tempSprite.tint = Math.random() * 0xffffff;
    //tempSprite.tint= palette[Math.floor(Math.random() * palette.length)];
    tempSprite.tint = 0x93AFBD;

    tempSprite.inputEnabled = true; //Active Input
    tempSprite.input.enableDrag(false, true); //Mobile (drag)
    tempSprite.input.enableSnap(1, 1, false, true); //Grid of 1 pixel
    tempSprite.events.onInputDown.add(formInteraction, this); //Edition mode after click
    if (mode == "levelMode") {
	    tempSprite.events.onDragStart.add(beginDrag, this); 
	}
    tempSprite.events.onDragStop.add(endDrag, this); //End of drag
    
    tempSprite.events.onInputOver.add(function(){
       switch (test){
           case 1:
               this.game.canvas.style.cursor="url('assets/images/cursors/rotR.png'),default";
               break;
           case 2:
               this.game.canvas.style.cursor="url('assets/images/cursors/rotL.png'),default";
               break;
           case 3:
               this.game.canvas.style.cursor="url('assets/images/cursors/col.png'),default";
               break;
           default:
               this.game.canvas.style.cusor="default";
       } 
    });
    totalshape++;

}

function addForm1(form1, pointer) {
    nbF1 = nbF1 + 1;
    labelSquare.text = nbF1;
    addShape('square', F1);
  	sound_square(nbF1);
}

function addForm2(form2, pointer) {
    nbF2 = nbF2 + 1;
    labelTrapezoid.text = nbF2;
    addShape('trapeze', F2);
    sound_trapeze(nbF2);
}

function addForm3(form3, pointer) {
    nbF3 = nbF3 + 1;
    labelHexagon.text=nbF3;
    addShape('hexagon', F3);
    sound_hexagon(nbF3);
}

function addForm4(form4, pointer) {
    nbF4 = nbF4 + 1;
    labelTriangleEqui.text = nbF4;
    addShape('triangle_equi', F4);
    sound_triangle(nbF4)
}

function addForm5(form5, pointer) {
    nbF5 = nbF5 + 1;
    labelTriangleRect.text=nbF5;
    addShape('triangle_rect', F5);
    sound_trirec(nbF5);
}

function addForm6(form6, pointer) {
    nbF6 = nbF6 + 1;
    labelDiamond.text=nbF6;
    addShape('diamond', F6);
    sound_diamond(nbF6);
}
