define ([
        "global"
    ], function(
        globals
        ) {

//Load the necessary files before the beginning of the game
var preload = function preload() {

	// Home assets 
	globals.game.load.spritesheet('button-goTo','assets/images/buttons/home.png',300,100);
	globals.game.load.spritesheet('button-level','assets/images/buttons/levels.png',78,77);
	//globals.game.load.spritesheet('button-import','assets/images/buttons/import.png',87,100);
	
	globals.game.load.image('background-home', 'assets/images/backgrounds/backgroundHome.png');
    globals.game.load.image('background-game','assets/images/backgrounds/backgroundGame.png');
    globals.game.load.image('gameArea','assets/images/backgrounds/gameArea.png');
    
	// Shapes assets
    globals.game.load.spritesheet('hexagon','assets/sprites/hexagon.png',130,130);
    globals.game.load.spritesheet('square','assets/sprites/square.png',130,130);
    globals.game.load.spritesheet('diamond','assets/sprites/lozenge.png',130,130);
    globals.game.load.spritesheet('trapeze','assets/sprites/trapezoid.png',130,130);
    globals.game.load.spritesheet('triangleEqui','assets/sprites/triangle-equi.png',130,130);
    globals.game.load.spritesheet('triangle','assets/sprites/triangle.png',130,130);
    
    // Game menu assets (basket, store and buttons)
    globals.game.load.image('store', 'assets/images/menu/store.png');
    globals.game.load.image('pipe', 'assets/images/menu/store-pipe.png');
    
    globals.game.load.spritesheet('trashbin', 'assets/images/buttons/trashbin.png', 83, 76);
    
    globals.game.load.spritesheet('button-square', 'assets/images/buttons/shape-square.png', 78, 77);
    globals.game.load.spritesheet('button-trapeze', 'assets/images/buttons/shape-trapeze.png', 78, 77);
    globals.game.load.spritesheet('button-triangleEqui', 'assets/images/buttons/shape-t-equi.png', 78, 77);
    globals.game.load.spritesheet('button-hexagon', 'assets/images/buttons/shape-hexagon.png', 78, 77);
    globals.game.load.spritesheet('button-triangle', 'assets/images/buttons/shape-triangle.png', 78, 77);
    globals.game.load.spritesheet('button-diamond', 'assets/images/buttons/shape-diamond.png', 78, 77);
    
    globals.game.load.image('basket-left', 'assets/images/menu/basket-left.png');
    globals.game.load.image('basket-right', 'assets/images/menu/basket-right.png');
    globals.game.load.image('basket-middle', 'assets/images/menu/basket-middle.png');
    
    globals.game.load.spritesheet('button-colors', 'assets/images/buttons/option-color.png', 48, 48);
    globals.game.load.spritesheet('button-colors-picto','assets/images/buttons/option-color-picto.png',48,48)
    globals.game.load.spritesheet('button-back', 'assets/images/buttons/option-map.png', 48, 48);
    globals.game.load.spritesheet('button-home', 'assets/images/buttons/option-home.png', 48, 48);
    globals.game.load.spritesheet('button-export', 'assets/images/buttons/option-export.png', 48, 48);
    globals.game.load.spritesheet('button-print', 'assets/images/buttons/option-print.png', 48, 48);
    globals.game.load.spritesheet('button-mute', 'assets/images/buttons/option-mute.png', 48, 48);
    globals.game.load.spritesheet('ribbon', 'assets/images/buttons/ribbon.png', 204, 391);
    
    globals.game.load.image('menu-left', 'assets/images/menu/menu-left.png');
    globals.game.load.image('menu-right', 'assets/images/menu/menu-right.png');
    globals.game.load.image('menu-middle', 'assets/images/menu/menu-middle.png');
    
	// Patrick animations assets
    globals.game.load.image('patrick', 'assets/images/patrick/patrick.png');
    globals.game.load.spritesheet('patrick-mouth','assets/images/patrick/mouth.png',31,22,4);
    globals.game.load.spritesheet('patrick-eyes','assets/images/patrick/eyes.png',80,66,5);
	globals.game.load.image('home-patrick','assets/images/patrick/home-patrick.png',531,970);
	globals.game.load.image('win-patrick','assets/images/patrick/win-patrick.png');
    globals.game.load.spritesheet('win-patrick-mouth','assets/images/patrick/win-mouth.png',28,18,4);
    globals.game.load.spritesheet('fail-patrick-mouth','assets/images/patrick/fail-mouth.png',28,18,4);
    globals.game.load.spritesheet('win-patrick-eyes','assets/images/patrick/win-eyes.png',70,40,7);


    // UI
    globals.game.load.spritesheet('rotation-ui','assets/images/buttons/rotation_ui.png');
    globals.game.load.spritesheet('stars', 'assets/images/stars/reward.png',150,140);
    globals.game.load.spritesheet('level-status', 'assets/images/stars/status.png',68,35);
}

return preload;
});