
// to create the entire game interface (basket, store and patrick)
function buildMenu() {
	
    buildGameInterface();
	
	buildNavigationMenu();
	
	buildPatrick();
}

// to build only the ui element
function buildGameInterface() {
	// Store Creation
    var store = game.add.sprite(5, 5, 'store');
    pipe = game.add.sprite(5, 395, 'pipe');
    pipe.height = game.height - (390 + 212);

    // Buttons in store
    bin = game.add.button(55, 20, 'trashbin', null, this, 2, 1, 0, 1);
    bin.events.onInputOver.add(sound_trash, this);
    
    var style = {font: "25px Arial", fontWeight: "bold", fill: "#93AFBD"};
    buttonSquare = game.add.button(15, 110, 'button-square', addForm1, this, 2, 1, 0, 1);
    labelSquare = this.game.add.text(53, 130, nbF1, style);
    labelSquare.anchor.x = 0.5;

    buttonTrapezoid = game.add.button(105, 110, 'button-trapeze', addForm2, this, 2, 1, 0, 1);
    labelTrapezoid = this.game.add.text(142, 130, nbF2, style);
    labelTrapezoid.anchor.x = 0.5;

    buttonTriangleEqui = game.add.button(15, 200, 'button-triangle-equi', addForm4, this, 2, 1, 0, 1);
    labelTriangleEqui = this.game.add.text(53, 220, nbF4, style);
    labelTriangleEqui.anchor.x = 0.5;

    buttonHexagon = game.add.button(105, 200, 'button-hexagon', addForm3, this, 2, 1, 0, 1);
    labelHexagon = this.game.add.text(142, 220, nbF3, style);
    labelHexagon.anchor.x = 0.5;

    buttonTriangleRect = game.add.button(15, 290, 'button-triangle-rect', addForm5, this, 2, 1, 0, 1);
    labelTriangleRect = this.game.add.text(53, 310, nbF5, style);
    labelTriangleRect.anchor.x = 0.5;

    buttonDiamond = game.add.button(105, 290, 'button-diamond', addForm6, this, 2, 1, 0, 1);
    labelDiamond = this.game.add.text(142, 310, nbF6, style);
    labelDiamond.anchor.x = 0.5;

    // Basket creation
    basketLeft = game.add.sprite(5, 0, 'basket-left');
    basketMiddle = game.add.sprite(0, 0, 'basket-middle');
    basketRight = game.add.sprite(0, 0, 'basket-right');
    
    basketLeft.y = game.height - (5 + basketLeft.height);
    basketMiddle.x = basketLeft.x + basketLeft.width;
    basketMiddle.y = game.height - (5 + basketLeft.height);
    basketMiddle.width = game.width - (basketLeft.width + basketRight.width);
    basketRight.x = game.width - (5 + basketRight.width);
    basketRight.y = game.height - (5 + basketRight.height);     

    //Add rotation and color buttons
    rotR = game.add.button(75, game.height - 210, 'button-rotate-right', rotationRightButton, this, 2,1, 0, 1);
    rotR.events.onInputOver.add(sound_rotation, this);
    rotL = game.add.button(15, game.height - 210, 'button-rotate-left', rotationLeftButton, this, 2, 1, 0, 1);
    rotL.events.onInputOver.add(sound_rotation, this);
}


// to create patrick and his animations
function buildPatrick() {
	// Add Patrick to the menu
    pat = game.add.group();
    // position
    pat.x = basketRight.x+5;
    pat.y = basketRight.y-135;
    pat.scale.set(0.27, 0.27);
    // independant elements
    var patBody = game.add.sprite(0,0,'patrick');
    pat.add(patBody);
    patMouth = game.add.sprite(217,168,'patrick-mouth');
    pat.add(patMouth);
    patEyes = game.add.sprite(196,80,'patrick-eyes');
    pat.add(patEyes);
    //animations
    patMouth.animations.add('talk');
    patEyes.animations.add('blink');
	
	patrickBlink();

	switch (game.global.mode) {
        case "levelMode":
            sound_begin();
            break;
        case "loadMode":
            sound_begin();     
            break;
        case "freeMode":
        	sound_creation();
            break;
    }
}

// to create the navigation menu top - right corner
// used to create the game interface but also the home and levels map interface
function buildNavigationMenu() {
	
	var mode = game.global.mode;
	
	var buttonHome = new Object;
	buttonHome['name'] = 'button-home';
	buttonHome['action'] = goToHome;
	buttonHome['instructions'] = sound_empty;
	
	var buttonLevelsMap = new Object;
	buttonLevelsMap['name'] = 'button-back';
	buttonLevelsMap['action'] = goToLevelsMap;
	buttonLevelsMap['instructions'] = sound_empty;
	
	var buttonMute = new Object;
	buttonMute['name'] = 'button-mute';
	buttonMute['action'] = toggleMute;
	buttonMute['instructions'] = sound_empty;
	
	var buttonPrint = new Object;
	buttonPrint['name'] = 'button-print';
	buttonPrint['action'] = pdf;
	buttonPrint['instructions'] = sound_print;
	
	var buttonExport = new Object;
	buttonExport['name'] = 'button-export';
	buttonExport['action'] = exportProblem;
	buttonExport['instructions'] = sound_export;

	var buttonLang = new Object;
	buttonLang['name'] = 'button-print';
	buttonLang['action'] = sound_empty;
	buttonLang['instructions'] = sound_empty;	
	
	
	// Menu construction
    switch (mode) {
		case "home":
			navigationMenu("Patrimath", [buttonMute, buttonLang]);
			break;
		case "levelsMap":
			navigationMenu("Mode classique", [buttonHome,buttonMute, buttonLang])
			break;
        case "levelMode":
            navigationMenu(levelTitle+" "+game.global.levelnum,[buttonLevelsMap, buttonHome,buttonMute, buttonLang]);
            break;
        case "loadMode":
            navigationMenu(levelTitleLoad,[buttonLevelsMap, buttonHome,buttonMute, buttonLang])
            break;
        case "freeMode":
			navigationMenu("", [buttonHome, buttonPrint, buttonExport, buttonMute, buttonLang]);

			col = game.add.button(135, game.height - 210, 'button-colors', colorButton, this, 2, 1, 0, 1);
            col.events.onInputOver.add(sound_color,this);
            break;
		case "win":
			navigationMenu(levelTitle+" "+game.global.levelnum,[buttonLevelsMap, buttonHome,buttonMute, buttonLang]);
			break;
    }	    
}

// to create the navigation menu top right corner with the right label and buttons displayed
// label : string
// buttons : array of buttons to display (in the right order)
function navigationMenu(label, buttons){
	
	menu = game.add.sprite(game.width,0,'');
	
	var menuRight = menu.addChild(game.make.sprite(0, 5, 'menu-right'));
	var menuLeft = menu.addChild(game.make.sprite(0, 5, 'menu-left'));
	var menuMiddle = menu.addChild(game.make.sprite(0, 5, 'menu-middle'));
	
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
	menu.addChild(game.make.text(- (50*buttonsNumber + charSize * labelLength +18 ), 23, label, levelStyle));
	
	// add the buttons
	for (i=0; i<buttonsNumber;i++){
		var curButton = game.make.button( - ((buttonsNumber - i)*50 + 18), 10,buttons[i].name, buttons[i].action, this, 2, 1, 0, 1);
		curButton.events.onInputOver.add(buttons[i].instructions, this);
		menu.addChild(curButton);
	}
	
}