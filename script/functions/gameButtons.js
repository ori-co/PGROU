define ([
  "global",
  "data/palette",
  "functions/sounds"

  ], function(
    globals,
    colors,
    sounds
    ) {

// toggle the buttons of the palette
function colorButton(item){
    globals.game.global.ui.basket.children[3].forEach(function (colorButton){
        if (colorButton != item || item.value){
            setColorButtonValue(colorButton,false);
        } else {
            setColorButtonValue(item,true);
        }
    });    
}

function setColorButtonValue(button,value){
    button.value = value;
    if (value) button.setFrames(3, 0, 1, 0); else button.setFrames(2, 1, 0, 1);
    button.children[0].position = value ? {x:4,y:4} : {x:0,y:0};
}

// Unlock the store once the unlockButton is clicked
function unlockStore(lockButton) {
    var game = globals.game;

    game.global.secondChance = true;
    
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

function exportProblem() {

    var json = '{\"problem\":{\"pattern\":[';
    var game = globals.game;

    for (var key in game.global.shapes){
        var shapeArray = game.global.shapes[key].shapesInPlace;
        
        for (i=0; i<shapeArray.length;i++){
            var formItem = shapeArray[i];
            json = json + '{\"shape\":\"'+ key +'\",\"color\":\"' + formItem.tint + '\",\"rotation\":\"' + formItem.frame + '\",\"anchorPoint\": {\"x\":\"' + formItem.x + '\",\"y\":\"' + formItem.y + '\"}}';
            json += ',';
        }
        
    }
    json = json.slice(0, -1);
    json = json + ']},"distrib" :"on"}';

//Open a pop-up to save the json file
    window.open().document.write(json);
}

return {
// formInteraction:formInteraction,
// rotationRightButton : rotationRightButton,
// rotationLeftButton : rotationLeftButton,
colorButton : colorButton,
setColorButtonValue: setColorButtonValue,
unlockStore : unlockStore,
setUnlockButton : setUnlockButton,
enableUnlockButton : enableUnlockButton,
exportProblem:exportProblem
};

});