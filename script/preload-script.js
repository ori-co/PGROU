function preload() {
    var lang = "assets/audio/fr/";
    var url_img = "assets/images/game/";
    var url_sprites = "assets/sprites/";

    this.load.text('txt_hexagon', url_sprites + 'hexagon.txt');
    this.load.text('txt_lozenge', url_sprites + 'lozenge.txt');
    this.load.text('txt_square', url_sprites + 'square.txt');
    this.load.text('txt_trapezoid', url_sprites + 'trapezoid.txt');
    this.load.text('txt_triangle_equi', url_sprites + 'triangle-equi.txt');
    this.load.text('txt_triangle_rect', url_sprites + 'triangle-rect.txt');

    this.load.image('img_hexagon', url_sprites + 'hexagon.png');
    this.load.image('img_lozenge', url_sprites + 'lozenge.png');
    this.load.image('img_square', url_sprites + 'square.png');
    this.load.image('img_trapezoid', url_sprites + 'trapezoid.png');
    this.load.image('img_triangle_equi', url_sprites + 'triangle-equi.png');
    this.load.image('img_triangle_rect', url_sprites + 'triangle-rect.png');

    this.load.image('store', url_img + 'store.png');
    this.load.image('pipe', url_img + 'store-pipe.png');
    this.load.spritesheet('poubelle', url_img + 'buttons/trashbin.png', 83, 76);
    this.load.spritesheet('button-square', url_img + 'buttons/shape-square.png', 78, 77);
    this.load.spritesheet('button-trapezoid', url_img + 'buttons/shape-trapezoid.png', 78, 77);
    this.load.spritesheet('button-triangle-equi', url_img + 'buttons/shape-t-equi.png', 78, 77);
    this.load.spritesheet('button-hexagon', url_img + 'buttons/shape-hexagon.png', 78, 77);
    this.load.spritesheet('button-triangle-rect', url_img + 'buttons/shape-t-rect.png', 78, 77);
    this.load.spritesheet('button-lozenge', url_img + 'buttons/shape-lozenge.png', 78, 77);

    this.load.image('basket-left', url_img + 'basket-left.png');
    this.load.image('basket-right', url_img + 'basket-right.png');
    this.load.image('basket-middle', url_img + 'basket-middle.png');

    this.load.spritesheet('button-rotate', url_img + 'buttons/option-rotate.png', 48, 48);
    this.load.spritesheet('button-colors', url_img + 'buttons/option-colors.png', 48, 48);
    this.load.spritesheet('button-home', url_img + 'buttons/option-home.png', 48, 48);
    this.load.spritesheet('button-export', url_img + 'buttons/option-export.png', 48, 48);
    this.load.spritesheet('button-mute', url_img + 'buttons/option-mute.png', 48, 48);

    this.load.image('menu-left', url_img + 'menu-left.png');
    this.load.image('menu-right', url_img + 'menu-right.png');
    this.load.image('menu-middle', url_img + 'menu-middle.png');

    this.load.audio('corbeille', lang + 'corbeille.mp3');
    /*this.load.audio('clic', lang + 'clic.mp3');
    this.load.audio('rotation', lang + 'rotation.mp3');
    this.load.audio('accueil', lang + 'accueil.mp3');
    this.load.audio('select_class', lang + 'select_class.mp3');
    this.load.audio('verrouille', lang + 'verrouille.mp3');
    this.load.audio('importation', lang + 'importation.mp3');
    this.load.audio('classique', lang + 'classique.mp3');
    this.load.audio('firstform', lang + 'firstform.mp3');
    this.load.audio('remplissage_cla', lang + 'remplissage_cla.mp3');
    this.load.audio('patron', lang + 'patron.mp3');
    this.load.audio('distrib', lang + 'distrib.mp3');
    this.load.audio('prop_rotation', lang + 'prop_rotation.mp3');
    this.load.audio('top_validation', lang + 'top_validation.mp3');
    this.load.audio('low_validation', lang + 'low_validation.mp3');
    this.load.audio('popup', lang + 'popup.mp3');
    this.load.audio('nextlevel', lang + 'nextlevel.mp3');
    this.load.audio('square1', lang + 'square1.mp3');
    this.load.audio('triangle-eq1', lang + 'triangle-eq1.mp3');
    this.load.audio('triangle-req1', lang + 'triangle-req1.mp3');
    this.load.audio('trapez1', lang + 'trapez1.mp3');
    this.load.audio('lozenge1', lang + 'lozenge1.mp3');
    this.load.audio('selectfree', lang + 'selectfree.mp3');
    this.load.audio('remplissage-free', lang + 'remplissage-free.mp3');
    this.load.audio('crea', lang + 'crea.mp3');
    this.load.audio('save', lang + 'save.mp3');
    this.load.audio('advertise', lang + 'advertise.mp3');
    this.load.audio('print', lang + 'print.mp3');
    this.load.audio('exprt', lang + 'exprt.mp3');*/


}

