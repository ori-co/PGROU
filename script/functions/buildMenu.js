define ([
		"global",
		"functions/sounds",
		"functions/addShapes",
		"functions/gameButtons",
		"functions/animations",
		"functions/navigationButtons",
		"data/wording"
	], function(
		globals,
		sounds,
		addShapes,
		gameButtons,
		animations,
		navigationButtons,
		wording
		) {

// to create the entire game interface (basket, store and patrick)
function buildMenu() {
	
    buildGameInterface();
	
	buildNavigationMenu();
	
	buildPatrick();
}

// to build only the ui element
function buildGameInterface() {
    var game = globals.game;

	// Store Creation
    var store = game.add.sprite(5, 5, 'store');
    game.global.ui.pipe = game.add.sprite(5, 395, 'pipe');
    game.global.ui.pipe.height = game.height - (390 + 212);

    // Buttons in store
    game.global.ui.bin = game.add.button(55, 20, 'trashbin', null, this, 2, 1, 0, 1);
    game.global.ui.bin.events.onInputOver.add(sounds.sound_trash, this);
    
    var style = {font: "25px Arial", fontWeight: "bold", fill: "#93AFBD"};
	var position = 0;
	for (var key in game.global.shapes){
		var yposition = Math.floor(position/2);
		var xposition = position % 2;
		var currButton = game.add.button(15+xposition*90, 110+yposition*90, 'button-'+key, addShapes.onClickAddAShape, this, 2, 1, 0, 1);
		currButton.shape = key;
		game.global.shapes[key].shapeButton = currButton;
		var currLab = currButton.addChild(game.make.text(38, 38, 0, style));
		currButton.label = currLab;
		currLab.anchor.x = 0.5;
		currLab.anchor.y = 0.5;
		
		position ++;
	}

    // Basket creation
    game.global.ui.basketLeft = game.add.sprite(5, 0, 'basket-left');
    game.global.ui.basketMiddle = game.add.sprite(0, 0, 'basket-middle');
    game.global.ui.basketRight = game.add.sprite(0, 0, 'basket-right');
    
    game.global.ui.basketLeft.y = game.height - (5 + game.global.ui.basketLeft.height);
    game.global.ui.basketMiddle.x = game.global.ui.basketLeft.x + game.global.ui.basketLeft.width;
    game.global.ui.basketMiddle.y = game.height - (5 + game.global.ui.basketLeft.height);
    game.global.ui.basketMiddle.width = game.width - (game.global.ui.basketLeft.width + game.global.ui.basketRight.width);
    game.global.ui.basketRight.x = game.width - (5 + game.global.ui.basketRight.width);
    game.global.ui.basketRight.y = game.height - (5 + game.global.ui.basketRight.height);     

    //Add rotation and color buttons
    game.global.ui.rotR = game.add.button(75, game.height - 210, 'button-rotate-right', gameButtons.rotationRightButton, this, 2,1, 0, 1);
    game.global.ui.rotR.events.onInputOver.add(sounds.sound_rotation, this);
    game.global.ui.rotL = game.add.button(15, game.height - 210, 'button-rotate-left', gameButtons.rotationLeftButton, this, 2, 1, 0, 1);
    game.global.ui.rotL.events.onInputOver.add(sounds.sound_rotation, this);
	
	game.global.ui.unlockButton = game.add.button(5, 5, 'ribbon', gameButtons.unlockStore, this, 1, 0, 1, 0);
	game.global.ui.unlockButton.events.onInputOver.add(sounds.unlock_store, this);
	gameButtons.setUnlockButton(false);
}


// to create patrick and his animations
function buildPatrick() {
	var game = globals.game;

	// Add Patrick to the menu
    game.global.ui.pat = game.add.group();
    // position
    game.global.ui.pat.x = game.global.ui.basketRight.x+5;
    game.global.ui.pat.y = game.global.ui.basketRight.y-135;
    game.global.ui.pat.scale.set(0.27, 0.27);
    // independant elements
    var patBody = game.add.sprite(0,0,'patrick');
    game.global.ui.pat.add(patBody);
    game.global.ui.patMouth = game.add.sprite(217,168,'patrick-mouth');
    game.global.ui.pat.add(game.global.ui.patMouth);
    game.global.ui.patEyes = game.add.sprite(196,80,'patrick-eyes');
    game.global.ui.pat.add(game.global.ui.patEyes);
    //animations
    game.global.ui.patMouth.animations.add('talk');
    game.global.ui.patEyes.animations.add('blink');
	
	animations.patrickBlink();
}

// to create the navigation menu top - right corner
// used to create the game interface but also the home and levels map interface
function buildNavigationMenu() {
	var game = globals.game;
	var mode = game.global.mode;
	
	var buttonHome = new Object;
	buttonHome['name'] = 'button-home';
	buttonHome['action'] = navigationButtons.goToHome;
	buttonHome['instructions'] = sounds.sound_empty;
	
	var buttonLevelsMap = new Object;
	buttonLevelsMap['name'] = 'button-back';
	buttonLevelsMap['action'] = navigationButtons.goToLevelsMap;
	buttonLevelsMap['instructions'] = sounds.sound_empty;
	
	var buttonMute = new Object;
	buttonMute['name'] = 'button-mute';
	buttonMute['action'] = sounds.toggleMute;
	buttonMute['instructions'] = sounds.sound_empty;
	
	// // Unused buttons (lang, print and export)
	// var buttonPrint = new Object;
	// buttonPrint['name'] = 'button-print';
	// buttonPrint['action'] = pdf;
	// buttonPrint['instructions'] = sound_print;
	
	var buttonExport = new Object;
	buttonExport['name'] = 'button-export';
	buttonExport['action'] = gameButtons.exportProblem;
	buttonExport['instructions'] = sounds.sound_export;

	// var buttonLang = new Object;
	// buttonLang['name'] = 'button-print';
	// buttonLang['action'] = sound_empty;
	// buttonLang['instructions'] = sound_empty;	
	
	// Menu construction
    switch (mode) {
		case "home":
			navigationMenu("Patrimath", [buttonMute]);
			break;
		case "levelsMap":
			navigationMenu("Mode classique", [buttonHome,buttonMute])
			break;
        case "levelMode":
            navigationMenu(wording.levelTitle+" "+game.global.levelnum,[buttonLevelsMap, buttonHome,buttonMute]);
            break;
        case "loadMode":
            navigationMenu(levelTitleLoad,[buttonLevelsMap, buttonHome,buttonMute])
            break;
        case "freeMode":
			navigationMenu("", [buttonHome, buttonMute, buttonExport]);

			game.global.ui.col = game.add.button(135, game.height - 210, 'button-colors', gameButtons.colorButton, this, 2, 1, 0, 1);
            game.global.ui.col.events.onInputOver.add(sounds.sound_color,this);
            break;
		case "win":
			navigationMenu(wording.levelTitle+" "+game.global.levelnum,[buttonLevelsMap, buttonHome,buttonMute]);
			break;
    }	    
}

// to create the navigation menu top right corner with the right label and buttons displayed
// label : string
// buttons : array of buttons to display (in the right order)
function navigationMenu(label, buttons){
	var game = globals.game;

	game.global.ui.menu = game.add.sprite(game.width,0,'');
	
	var menuRight = game.global.ui.menu.addChild(game.make.sprite(0, 5, 'menu-right'));
	var menuLeft = game.global.ui.menu.addChild(game.make.sprite(0, 5, 'menu-left'));
	var menuMiddle = game.global.ui.menu.addChild(game.make.sprite(0, 5, 'menu-middle'));
	
	var buttonsNumber = buttons.length;
	var labelLength = label.length;
	var marginSize = 25;
	var charSize = 12;
	var menuLength = 50*buttonsNumber + charSize * labelLength - 2*marginSize;
	
	menuLeft.x = - (5 + menuLength + menuLeft.width + menuRight.width);
    menuRight.x =  - (5 + menuRight.width);
    menuMiddle.x =  - (5 + menuLength + menuRight.width);
    menuMiddle.width = menuLength;
	
	// add the label
	var levelStyle = {font: "23px Arial", fontWeight: "bold", fill: "#0D004C"};
	game.global.ui.menu.addChild(game.make.text(- (50*buttonsNumber + charSize * labelLength +18 ), 23, label, levelStyle));
	
	// add the buttons
	for (i=0; i<buttonsNumber;i++){
		var curButton = game.make.button( - ((buttonsNumber - i)*50 + 18), 10,buttons[i].name, buttons[i].action, this, 2, 1, 0, 1);
		curButton.events.onInputOver.add(buttons[i].instructions, this);
		game.global.ui.menu.addChild(curButton);
		
		// Check the value of the mute function to update the mute button
		if(buttons[i].name == "button-mute" && game.global.muteValue) curButton.setFrames(3, 0, 1, 0);
	}
	
}

return {buildMenu:buildMenu,buildNavigationMenu:buildNavigationMenu};

});