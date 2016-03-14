//Main function of the game
function create() {

    //Build the wallpaper and RESIZE
    wallpaper();

    //Heritage Relationships
    F1 = game.add.group();
    F2 = game.add.group();
    F3 = game.add.group();
    F4 = game.add.group();
    F5 = game.add.group();
    F6 = game.add.group();

    P1 = game.add.group();
    P2 = game.add.group();
    P3 = game.add.group();
    P4 = game.add.group();
    P5 = game.add.group();
    P6 = game.add.group();

    forms = game.add.group();
    patterns = game.add.group();
    //trash = game.add.group();

    forms.add(F1);
    forms.add(F2);
    forms.add(F3);
    forms.add(F4);
    forms.add(F5);
    forms.add(F6);

    patterns.add(P1);
    patterns.add(P2);
    patterns.add(P3);
    patterns.add(P4);
    patterns.add(P5);
    patterns.add(P6);

    //Build the menu
    mode = "levelMode";
    buildMenu();

    //Create the wished pattern
    /*
     var pattern1 = P1.create(0, 0, 'square');
     var pattern2 = P2.create(0, 0, 'trapeze');
     var pattern3 = P3.create(0, 0, 'hexagon');
     var pattern4 = P4.create(0, 0, 'triangle_equi');
     var pattern5 = P5.create(0, 0, 'triangle_rect');
     var pattern6 = P6.create(0, 0, 'diamond');
     
     patternStyle(pattern1, 496, 168, 0, "0x83EE00");
     patternStyle(pattern2, 496, 227, 0, "0x83EE00");
     patternStyle(pattern3, 400, 200, 0, "0x83EE00");
     patternStyle(pattern4, 496, 108, 0, "0x83EE00");
     patternStyle(pattern5, 400, 128, 0, "0x83EE00");
     patternStyle(pattern6, 320, 228, 4, "0x83EE00");*/


    function patternStyle(pattern, x, y, angle, color) {
        pattern.x = x;
        pattern.y = y;
        pattern.frame = angle;
        pattern.inputEnabled = true;
        pattern.tint = 0x020303;
        pattern.alpha = 0.4;
        pattern.wantedColor = color;
    }

    var levelText;

    switch (levelnum) {

        case '1' :
            levelText = level1;
            break;
        case 2 :
            levelText = level2;
            break;
        case 3 :
            levelText = level3;
            break;
        case 4 :
            levelText = level4;
            break;
        case 5 :
            levelText = level5;
            break;
        case 6 :
            levelText = level6;
            break;
        case 7 :
            levelText = level7;
            break;
        case 8 :
            levelText = level8;
            break;
        case 9 :
            levelText = level9;
            break;
        case 10 :
            levelText = level10;
            break;
        case 11 :
            levelText = level11;
            break;
        case 12 :
            levelText = level12;
            break;
        case 13 :
            levelText = level13;
            break;
        case 14 :
            levelText = level15;
            break;
        case 15 :
            levelText = level15;
            break;

    }

    patternCreation(levelText);

    //Update the pattern matrix with the shapes' matrix

    P1.forEach(function (patternItem) {
        areaPattern = areaPattern + shapes.square.area[patternItem.frame];
        addShapeMatrix(patternItem, 1);
    }, this);

    P2.forEach(function (patternItem) {
        areaPattern = areaPattern + shapes.trapeze.area[patternItem.frame];
        addShapeMatrix(patternItem, 1);
    }, this);

    P3.forEach(function (patternItem) {
        areaPattern = areaPattern + shapes.hexagon.area[patternItem.frame];
        addShapeMatrix(patternItem, 1);
    }, this);

    P4.forEach(function (patternItem) {
        areaPattern = areaPattern + shapes.triangleEqui.area[patternItem.frame];
        addShapeMatrix(patternItem, 1);
    }, this);

    P5.forEach(function (patternItem) {
        areaPattern = areaPattern + shapes.triangleRect.area[patternItem.frame];
        addShapeMatrix(patternItem, 1);
    }, this);

    P6.forEach(function (patternItem) {
        areaPattern = areaPattern + shapes.diamond.area[patternItem.frame];
        addShapeMatrix(patternItem, 1);
    }, this);

}
