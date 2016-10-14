define ([
  "global",
  "data/palette",
  "functions/sounds"

  ], function(
    globals,
    colors,
    sounds
    ) {

//Edition Modes (colors and rotation)
function formInteraction(tempSprite) {
	var game = globals.game;
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
			for (i=0; i<colors.palette.length-1;i++){
				if (tempSprite.tint == colors.palette[i]) colorIndex = i+1;
			}
			tempSprite.tint = colors.palette[colorIndex];
			
            break;
    }
	game.global.editingMode=test;
}

//Activation of the rotation button
function rotationRightButton() {
    var game = globals.game;
	var test = game.global.editingMode;
    switch (test) {
        case 0:
            test = 1;
            game.global.ui.rotR.setFrames(3, 0, 1, 0);
            break;
        case 1:
            test = 0;
            game.global.ui.rotR.setFrames(2, 1, 0, 1);
            break;
        case 2:
            test = 1;
            game.global.ui.rotR.setFrames(3, 0, 1, 0);
            game.global.ui.rotL.setFrames(2, 1, 0, 1);
            break;
        case 3:
            test = 1;
            game.global.ui.rotR.setFrames(3, 0, 1, 0);
            game.global.ui.col.setFrames(2, 1, 0, 1);
            break;
    }
	game.global.editingMode=test;
    sounds.clicker();
}

function rotationLeftButton() {
    var game = globals.game;
	var test = game.global.editingMode;
    switch (test) {
        case 0:
            test = 2;
            game.global.ui.rotL.setFrames(3, 0, 1, 0);
            break;
        case 1:
            test = 2;
            game.global.ui.rotL.setFrames(3, 0, 1, 0);
            game.global.ui.rotR.setFrames(2, 1, 0, 1);
            break;
        case 2:
            test = 0;
            game.global.ui.rotL.setFrames(2, 1, 0, 1);
            break;
        case 3:
            test = 2;
            game.global.ui.rotL.setFrames(3, 0, 1, 0);
            game.global.ui.col.setFrames(2, 1, 0, 1);
            break;
    }
	game.global.editingMode=test;
    sounds.clicker();
}

// Change color
function colorButton() {
    var game = globals.game;
	var test = game.global.editingMode;
    switch (test) {
        case 0:
            test = 3;
            game.global.ui.col.setFrames(3, 0, 1, 0);
            break;
        case 1:
            test = 3;
            game.global.ui.rotR.setFrames(2, 1, 0, 1);
            game.global.ui.col.setFrames(3, 0, 1, 0);
            break;
        case 2:
            test = 3;
            game.global.ui.rotL.setFrames(2, 1, 0, 1);
            game.global.ui.col.setFrames(3, 0, 1, 0);
            break;
        case 3:
            test = 0;
            game.global.ui.col.setFrames(2, 1, 0, 1);
            break;
    }
	game.global.editingMode=test;
    sounds.clicker();
}

// Unlock the store once the unlockButton is clicked
function unlockStore(lockButton) {
    var game = globals.game;
    
	setUnlockButton(false);
	for (var key in game.global.shapes){
			globals.game.global.shapes[key].shapeButton.inputEnabled=true;
	}
}

function setUnlockButton(value){
    var game = globals.game;

	game.global.ui.storeLocked = value;
	game.global.ui.unlockButton.visible=value;
}

function enableUnlockButton(value){
    var game = globals.game;

	game.global.ui.unlockButton.inputEnabled = value;
}

return {
formInteraction:formInteraction,
rotationRightButton : rotationRightButton,
rotationLeftButton : rotationLeftButton,
colorButton : colorButton,
unlockStore : unlockStore,
setUnlockButton : setUnlockButton,
enableUnlockButton : enableUnlockButton
};

});