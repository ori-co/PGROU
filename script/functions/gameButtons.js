define ([
  "global",
  "functions/gameAreaBounds",
  "data/palette"
  ], function(
    globals,
    gameAreaBounds,
    colors   
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

    var game = globals.game;

    var problem = {};
    problem.pattern=[];
    problem.basket=[];
    problem.storeEnabled=true;

    for (var key in game.global.shapes){
        var shapeArray = game.global.shapes[key].shapesInPlace;
        
        for (i=0; i<shapeArray.length;i++){
            var formItem = shapeArray[i];
            if (gameAreaBounds.isOutOfGameArea(formItem)){
                problem.basket.push({shape:formItem.key, color:colors.palette.indexOf(formItem.tint), rotation:formItem.frame});
            } else {
                problem.pattern.push({shape:formItem.key, color:colors.palette.indexOf(formItem.tint), rotation:formItem.frame, anchorPoint:{x:formItem.x, y:formItem.y}});
            }
        }
    }


    //Open a pop-up to save the json file
    window.open().document.write(JSON.stringify(problem));
}

function pdf() {

    var pdf = new jsPDF('l','cm','a4');

    pdf.addHTML(document.body,function() {
        pdf.output('datauri');
    });

    pdf.save(exportPDFname+'.pdf');
}

function toggleLang(){
    (globals.game.global.language == "fr") ? globals.game.global.language="test" : globals.game.global.language="fr";
}

return {
colorButton : colorButton,
setColorButtonValue: setColorButtonValue,
unlockStore : unlockStore,
setUnlockButton : setUnlockButton,
enableUnlockButton : enableUnlockButton,
exportProblem:exportProblem,
pdf :pdf,
toggleLang:toggleLang
};

});