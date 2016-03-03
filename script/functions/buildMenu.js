function buildMenu() {
	
    // Store Creation
    var bin = game.add.button(60, 20, 'trashbin', null, this, 2, 1, 0, 1);
    trash.add(bin);
    var store = game.add.sprite(5, 5, 'store');
    store.scaleMax = 1;
    store.scaleMin = 1;
    pipe = game.add.sprite(5, 395, 'pipe');
    pipe.height = window.innerHeight - (390 + 212);
    buttonSquare = game.add.button(20, 110, 'button-square', addForm1, this, 2, 1, 0, 1);
    buttonTrapezoid = game.add.button(100, 110, 'button-trapeze', addForm2, this, 2, 1, 0, 1);
    buttonTriangleEqui = game.add.button(20, 200, 'button-triangle-equi', addForm4, this, 2, 1, 0, 1);
    buttonHexagon = game.add.button(100, 200, 'button-hexagon', addForm3, this, 2, 1, 0, 1);
    buttonTriangleRect = game.add.button(20, 290, 'button-triangle-rect', addForm5, this, 2, 1, 0, 1);
    buttonDiamond = game.add.button(100, 290, 'button-diamond', addForm6, this, 2, 1, 0, 1);

    // Basket creation
    basketLeft = game.add.sprite(5, window.innerHeight - 212 - 5, 'basket-left');
    basketMiddle = game.add.sprite(142, window.innerHeight - 212 - 5, 'basket-middle');
    basketMiddle.width = window.innerWidth - 2 * 142;
    basketRight = game.add.sprite(window.innerWidth - 142 - 5, window.innerHeight - 212 - 5, 'basket-right');

    // Menu construction
    menuLenght = 100;
    menuLeft = game.add.sprite(window.innerWidth - 5 - menuLenght - 2 * 35, 5, 'menu-left');
    menuMiddle = game.add.sprite(window.innerWidth - 5 - menuLenght - 35, 5, 'menu-middle');
    menuMiddle.width = menuLenght;
    menuRight = game.add.sprite(window.innerWidth - 35 - 5, 5, 'menu-right');

    //Add rotation and color buttons
    rot = game.add.button(10, window.innerHeight - 210, 'button-rotate', rotationButton, this, 2, 1, 0, 1);
    col = game.add.button(58, window.innerHeight - 210, 'button-colors', colorButton, this, 2, 1, 0, 1);
    ret = game.add.button(window.innerWidth - (18 + 3 * 50), 10, 'button-home', clickerBack, this, 2, 1, 0, 1);
    mute = game.add.button(window.innerWidth - (18 + 2 * 50), 10, 'button-mute', null, this, 2, 1, 0, 1);
    exp = game.add.button(window.innerWidth - (18 + 1 * 50), 10, 'button-export', exportProblem, this, 2, 1, 0, 1);
    
    shadows = game.add.group();
}