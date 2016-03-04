//Function to add shapes from the basket
function addShape(shape, F) { 
    nbF = nbF + 1;
    var position = Math.random()*(game.width-2*90)+90;
    var tempSprite = F.create(position, game.height - 155, shape);
    tempSprite.anchor.x = 0;
    tempSprite.anchor.y = 0;
    
    //tempSprite.tint = Math.random() * 0xffffff;
    //tempSprite.tint= palette[Math.floor(Math.random() * palette.length)];
    //tempSprite.tint = 0xabdcf1;

    tempSprite.inputEnabled = true; //Active Input
    tempSprite.input.enableDrag(false, true); //Mobile (drag)
    tempSprite.input.enableSnap(10, 10, false, true); //Quantisation of 10 pixels
    tempSprite.events.onInputDown.add(formInteraction, this); //Edition mode after click
    tempSprite.events.onDragStop.add(endDrag, this); //End of drag
}

function addForm1(form1, pointer) {
    nbF1 = nbF1 + 1;
    addShape('square', F1);
}

function addForm2(form2, pointer) {
    nbF2 = nbF2 + 1;
    addShape('trapeze', F2);
}

function addForm3(form3, pointer) {
    nbF3 = nbF3 + 1;
    addShape('hexagon', F3);
}

function addForm4(form4, pointer) {
    nbF4 = nbF4 + 1;
    addShape('triangle_equi', F4);
}

function addForm5(form5, pointer) {
    nbF5 = nbF5 + 1;
    addShape('triangle_rect', F5);
}

function addForm6(form6, pointer) {
    nbF6 = nbF6 + 1;
    addShape('diamond', F6);
}
