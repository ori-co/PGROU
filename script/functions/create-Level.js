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
    trash = game.add.group();

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

    // Sound Management
    binSound = game.add.audio('trashbin');
    clickSound = game.add.audio('click');

    //Build the menu
    buildMenu();

    //Create the wished pattern
	
	var pattern1 = P1.create(0, 0, 'img_square');
    var pattern2 = P2.create(0, 0, 'img_trapeze');
    var pattern3 = P3.create(0, 0, 'img_hexagon');
    var pattern4 = P4.create(0, 0, 'img_triangle_equi');
    var pattern5 = P5.create(0, 0, 'img_triangle_rect');
    var pattern6 = P6.create(0, 0, 'img_diamond');

    patternStyle(pattern1, 700, 200, 0);
    patternStyle(pattern2, 667, 265, 0);
    patternStyle(pattern3, 570, 208, 0);
    patternStyle(pattern4, 700, 144, 0);
    patternStyle(pattern5, 603, 175, 0);
    patternStyle(pattern6, 537, 154, 0);					
						

    function patternStyle(pattern, x, y, angle) {
        pattern.x = x;
        pattern.y = y;
        pattern.angle = angle;
        pattern.inputEnabled = true;
        pattern.tint = 0x020303;
        pattern.alpha = 0.4;
    }

    //Update the pattern matrix with the shapes' matrix
    
    // TODO gérer l'orientation de la forme
    
    P1.forEach(function(patternItem) {
        areaPattern = areaPattern + shapes.square.area1;
        addShapeMatrix(patternItem,1);
    }, this);

    P2.forEach(function(patternItem) {
        areaPattern = areaPattern + shapes.trapeze.area1;
        addShapeMatrix(patternItem,1);
    }, this);

    P3.forEach(function(patternItem) {
        areaPattern = areaPattern + shapes.hexagon.area1;
        addShapeMatrix(patternItem,1);
    }, this);

    P4.forEach(function(patternItem) {
        areaPattern = areaPattern + shapes.triangleEqui.area1;
        addShapeMatrix(patternItem,1);
    }, this);

    P5.forEach(function(patternItem) {
        areaPattern = areaPattern + shapes.triangleRect.area1;
        addShapeMatrix(patternItem,1);
    }, this);

    P6.forEach(function(patternItem) {
        areaPattern = areaPattern + shapes.diamond.area1;
        addShapeMatrix(patternItem,1);
    }, this);

}
