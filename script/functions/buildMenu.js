define ([
		"global",
		"functions/sounds",
		"functions/addShapes",
		"functions/gameButtons",
		"functions/animations",
		"functions/navigationButtons",
		"data/wording",
		"data/palette"
	], function(
		globals,
		sounds,
		addShapes,
		gameButtons,
		animations,
		navigationButtons,
		wording,
		colors
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
    game.global.ui.basket = game.add.group();
    var basket = game.global.ui.basket;

    var basketLeft = basket.addChildAt(game.add.sprite(5, 0, 'basket-left'),0);
    var basketMiddle = basket.addChildAt(game.add.sprite(0, 0, 'basket-middle'),1);
    var basketRight = basket.addChildAt(game.add.sprite(0, 0, 'basket-right'),2);

    basket.y = game.height - (5 + basket.children[0].height);

    basketMiddle.x = basketLeft.x + basketLeft.width;
    basketMiddle.width = game.width - (basketLeft.width + basketRight.width);
    basketRight.x = game.width - (5 + basketRight.width);

    if (game.global.mode == "freeMode"){
    	var colorsButtons = basket.addChildAt(game.add.group(),3);
    	colorsButtons.position = {x:15,y:5}

    	for (i=1; i< colors.palette.length;i++){
    		var posX = ((i-1)%3)*60;
    		var posY = Math.floor((i-1)/3)*50;
    		var currentButton = colorsButtons.add(game.add.button(posX, posY, 'button-colors', gameButtons.colorButton, this, 2, 1, 0, 1));
    		currentButton.value = false;
    		currentButton.color = colors.palette[i];
    		currentButton.addChild(game.add.sprite(0, 0,'button-colors-picto'));
    		currentButton.children[0].tint = currentButton.color;

    	}
    } 
	
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
    game.global.ui.pat.x = game.global.ui.basket.children[2].x+5;
    game.global.ui.pat.y = game.global.ui.basket.y-40;
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