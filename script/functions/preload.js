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
    
    game.load.spritesheet('button-rotate-left', 'assets/images/buttons/option-rotateL.png', 48, 48);
    game.load.spritesheet('button-rotate-right', 'assets/images/buttons/option-rotateR.png', 48, 48);
    game.load.spritesheet('button-colors', 'assets/images/buttons/option-colors.png', 48, 48);
    game.load.spritesheet('button-back', 'assets/images/buttons/option-map.png', 48, 48);
    game.load.spritesheet('button-home', 'assets/images/buttons/option-home.png', 48, 48);
    game.load.spritesheet('button-export', 'assets/images/buttons/option-export.png', 48, 48);
    game.load.spritesheet('button-print', 'assets/images/buttons/option-print.png', 48, 48);
    game.load.spritesheet('button-mute', 'assets/images/buttons/option-mute.png', 48, 48);
    
    game.load.image('menu-left', 'assets/images/menu/menu-left.png');
    game.load.image('menu-right', 'assets/images/menu/menu-right.png');
    game.load.image('menu-middle', 'assets/images/menu/menu-middle.png');
    
    game.load.audio('trashbin',language+'trashbin.mp3');
    game.load.audio('click',language+'click.mp3');
    /*
    
    game.load.audio('index',language+'index.mp3');
    game.load.audio('select_class',language+'select_class.mp3');
    game.load.audio('lock',language+'lock.mp3');
    game.load.audio('import',language+'import.mp3');
    game.load.audio('classic',language+'classic.mp3');
    game.load.audio('firstform',language+'firstform.mp3');
    game.load.audio('matching_cla',language+'matching_cla.mp3');
    game.load.audio('problem',language+'problem.mp3');
    game.load.audio('distrib',language+'distrib.mp3');
    game.load.audio('prop_rotation',language+'prop_rotation.mp3');
    game.load.audio('top_validation',language+'top_validation.mp3');
    game.load.audio('low_validation',language+'low_validation.mp3');
    game.load.audio('popup',language+'popup.mp3');
    game.load.audio('nextlevel',language+'nextlevel.mp3');
    game.load.audio('square1',language+'square1.mp3');
    game.load.audio('triangle-eq1',language+'triangle-eq1.mp3');
    game.load.audio('triangle-req1',language+'triangle-req1.mp3');
    game.load.audio('trapeze1',language+'trapeze1.mp3');
    game.load.audio('diamond1',language+'diamond1.mp3');
    game.load.audio('selectfree',language+'selectfree.mp3');
    game.load.audio('matching-free',language+'matching-free.mp3');
    game.load.audio('crea',language+'crea.mp3');
    game.load.audio('save',language+'save.mp3');
    game.load.audio('advertise',language+'advertise.mp3');
    game.load.audio('print',language+'print.mp3');
    game.load.audio('exprt',language+'exprt.mp3');
    */
    
}
