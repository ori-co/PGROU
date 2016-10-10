function buildMenu() {

	var mode = game.global.mode;
	
    // Store Creation
    var store = game.add.sprite(5, 5, 'store');
    pipe = game.add.sprite(5, 395, 'pipe');
    pipe.height = window.innerHeight - (390 + 212);

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
    
    basketLeft.y = window.innerHeight - (5 + basketLeft.height);
    basketMiddle.x = basketLeft.x + basketLeft.width;
    basketMiddle.y = window.innerHeight - (5 + basketLeft.height);
    basketMiddle.width = window.innerWidth - (basketLeft.width + basketRight.width);
    basketRight.x = window.innerWidth - (5 + basketRight.width);
    basketRight.y = window.innerHeight - (5 + basketRight.height);     

    // Menu construction
    switch (mode) {
        case "levelMode":
            menuLenght = 225;
            break;
        case "loadMode":
            menuLenght = 225;
            break;
        case "freeMode":
            menuLenght = 150;
            break;
    }

    menuRight = game.add.sprite(0, 5, 'menu-right');
    menuLeft = game.add.sprite(0, 5, 'menu-left');
    menuMiddle = game.add.sprite(0, 5, 'menu-middle');

    menuLeft.x = window.innerWidth - (5 + menuLenght + menuLeft.width + menuRight.width);
    menuRight.x = window.innerWidth - (5 + menuRight.width);
    menuMiddle.x = window.innerWidth - (5 + menuLenght + menuRight.width);
    menuMiddle.width = menuLenght;

    //Add rotation and color buttons
    rotR = game.add.button(75, window.innerHeight - 210, 'button-rotate-right', rotationRightButton, this, 2,1, 0, 1);
    rotR.events.onInputOver.add(sound_rotation, this);
    rotL = game.add.button(15, window.innerHeight - 210, 'button-rotate-left', rotationLeftButton, this, 2, 1, 0, 1);
    rotL.events.onInputOver.add(sound_rotation, this);
    home = game.add.button(window.innerWidth - (18 + 4 * 50), 10, 'button-home', goToHome, this, 2, 1, 0, 1);
    mute = game.add.button(window.innerWidth - (18 + 1 * 50), 10, 'button-mute', toggleMute, this, 2, 1, 0, 1);


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
    
    shadows = game.add.group();

    switch (mode) {
        case "levelMode":
			var levelnum = game.global.levelnum;
            ret = game.add.button(window.innerWidth - (18 + 3 * 50), 10, 'button-back', goToLevelsMap, this, 2, 1, 0, 1);
            home.x = window.innerWidth - (18 + 2 * 50);
            var levelStyle = {font: "23px Arial", fontWeight: "bold", fill: "#0D004C"};
            levelName = this.game.add.text(window.innerWidth - 280, 23, levelTitle+" "+levelnum, levelStyle);
            sound_begin();
            
            break;
        case "loadMode":
            ret = game.add.button(window.innerWidth - (18 + 3 * 50), 10, 'button-back', goToLevelsMap, this, 2, 1, 0, 1);
            home.x = window.innerWidth - (18 + 2 * 50);
            var levelStyle = {font: "23px Arial", fontWeight: "bold", fill: "#0D004C"};
            levelName = this.game.add.text(window.innerWidth - 280, 23, levelTitleLoad, levelStyle);
            sound_begin();
            
            break;
        case "freeMode":
        	sound_creation();
        	
            exp = game.add.button(window.innerWidth - (18 + 2 * 50), 10, 'button-export', exportProblem, this, 2, 1, 0, 1);
            exp.events.onInputOver.add(sound_export, this);
            print = game.add.button(window.innerWidth - (18 + 3 * 50), 10, 'button-print', pdf, this, 2, 1, 0, 1);
            print.events.onInputOver.add(sound_print, this);
            col = game.add.button(135, window.innerHeight - 210, 'button-colors', colorButton, this, 2, 1, 0, 1);
            col.events.onInputOver.add(sound_color,this);
            break;
    }

}    
