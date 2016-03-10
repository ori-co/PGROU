// Language Definition
var language = "assets/audio/fr/";  

//Load the necessary files before the beginning of the game
function preload() {
    
    game.load.spritesheet('hexagon','assets/sprites/hexagon.png',130,130);
    game.load.spritesheet('square','assets/sprites/square.png',130,130);
    game.load.spritesheet('diamond','assets/sprites/lozenge.png',130,130);
    game.load.spritesheet('trapeze','assets/sprites/trapezoid.png',130,130);
    game.load.spritesheet('triangle_equi','assets/sprites/triangle-equi.png',130,130);
    game.load.spritesheet('triangle_rect','assets/sprites/triangle-rect.png',130,130);
    
    
    game.load.image('store', 'assets/images/menu/store.png');
    game.load.image('pipe', 'assets/images/menu/store-pipe.png');
    
    game.load.spritesheet('trashbin', 'assets/images/buttons/trashbin.png', 83, 76);
    
    game.load.spritesheet('button-square', 'assets/images/buttons/shape-square.png', 78, 77);
    game.load.spritesheet('button-trapeze', 'assets/images/buttons/shape-trapeze.png', 78, 77);
    game.load.spritesheet('button-triangle-equi', 'assets/images/buttons/shape-t-equi.png', 78, 77);
    game.load.spritesheet('button-hexagon', 'assets/images/buttons/shape-hexagon.png', 78, 77);
    game.load.spritesheet('button-triangle-rect', 'assets/images/buttons/shape-t-rect.png', 78, 77);
    game.load.spritesheet('button-diamond', 'assets/images/buttons/shape-diamond.png', 78, 77);
    
    game.load.image('basket-left', 'assets/images/menu/basket-left.png');
    game.load.image('basket-right', 'assets/images/menu/basket-right.png');
    game.load.image('basket-middle', 'assets/images/menu/basket-middle.png');
    
    game.load.spritesheet('button-rotate', 'assets/images/buttons/option-rotate.png', 48, 48);
    game.load.spritesheet('button-colors', 'assets/images/buttons/option-colors.png', 48, 48);
    game.load.spritesheet('button-home', 'assets/images/buttons/option-home.png', 48, 48);
    game.load.spritesheet('button-export', 'assets/images/buttons/option-export.png', 48, 48);
    game.load.spritesheet('button-mute', 'assets/images/buttons/option-mute.png', 48, 48);
    
    game.load.image('menu-left', 'assets/images/menu/menu-left.png');
    game.load.image('menu-right', 'assets/images/menu/menu-right.png');
    game.load.image('menu-middle', 'assets/images/menu/menu-middle.png');

    
    
}
