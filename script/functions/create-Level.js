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
    var levelText;
    levelText = levels[levelnum];

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
