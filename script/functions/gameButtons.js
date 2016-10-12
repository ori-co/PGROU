//Edition Modes (colors and rotation)
function formInteraction(tempSprite, pointer) {
	var test = game.global.editingMode;
	
   	switch (test) {
        case 0:
            break;
        case 1:
            tempSprite.frame ++;
            tempSprite.updateCache();
            break;
        case 2:
            if (tempSprite.frame == 0){
                tempSprite.animations.add('test');
                tempSprite.frame=tempSprite.animations.frameTotal -1;
            } else {
                tempSprite.frame--;
            }
            tempSprite.updateCache();
            break;
        case 3:
			var colorIndex=0;
			for (i=0; i<palette.length-1;i++){
				if (tempSprite.tint == palette[i]) colorIndex = i+1;
			}
			tempSprite.tint = palette[colorIndex];
			
            break;
    }
	game.global.editingMode=test;
}

//Activation of the rotation button
function rotationRightButton(rot, pointer) {
	var test = game.global.editingMode;
    switch (test) {
        case 0:
            test = 1;
            rotR.setFrames(3, 0, 1, 0);
            break;
        case 1:
            test = 0;
            rotR.setFrames(2, 1, 0, 1);
            break;
        case 2:
            test = 1;
            rotR.setFrames(3, 0, 1, 0);
            rotL.setFrames(2, 1, 0, 1);
            break;
        case 3:
            test = 1;
            rotR.setFrames(3, 0, 1, 0);
            col.setFrames(2, 1, 0, 1);
            break;
    }
	game.global.editingMode=test;
    clicker();
}

function rotationLeftButton(rot, pointer) {
	var test = game.global.editingMode;
    switch (test) {
        case 0:
            test = 2;
            rotL.setFrames(3, 0, 1, 0);
            break;
        case 1:
            test = 2;
            rotL.setFrames(3, 0, 1, 0);
            rotR.setFrames(2, 1, 0, 1);
            break;
        case 2:
            test = 0;
            rotL.setFrames(2, 1, 0, 1);
            break;
        case 3:
            test = 2;
            rotL.setFrames(3, 0, 1, 0);
            col.setFrames(2, 1, 0, 1);
            break;
    }
	game.global.editingMode=test;
    clicker();
}

// Change color
function colorButton(col, pointer) {
	var test = game.global.editingMode;
    switch (test) {
        case 0:
            test = 3;
            col.setFrames(3, 0, 1, 0);
            break;
        case 1:
            test = 3;
            rotR.setFrames(2, 1, 0, 1);
            col.setFrames(3, 0, 1, 0);
            break;
        case 2:
            test = 3;
            rotL.setFrames(2, 1, 0, 1);
            col.setFrames(3, 0, 1, 0);
            break;
        case 3:
            test = 0;
            col.setFrames(2, 1, 0, 1);
            break;
    }
	game.global.editingMode=test;
    clicker();
}
