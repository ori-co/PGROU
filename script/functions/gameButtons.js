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
            var rand = Math.floor((Math.random() * 5));
			
			switch(tempSprite.tint){
				case 0x93AFBD : tempSprite.tint = 0x83EE00;
				break;
				case 0x83EE00 : tempSprite.tint = 0xFBFE00;
				break;
				case 0xFBFE00 : tempSprite.tint = 0x058AB6;
				break;
				case 0x058AB6 : tempSprite.tint = 0xE4005C;
				break;
				case 0xE4005C : tempSprite.tint = 0x8007BE;
				break;
				case 0x8007BE : tempSprite.tint = 0xFF8300;
				break;
				case 0xFF8300 : tempSprite.tint = 0x83EE00;
				break;
			}
			
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
