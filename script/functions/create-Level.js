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
	
    var pattern1 = P1.create(0, 0, 'square');
    var pattern2 = P2.create(0, 0, 'trapeze');
    var pattern3 = P3.create(0, 0, 'hexagon');
    var pattern4 = P4.create(0, 0, 'triangle_equi');
    var pattern5 = P5.create(0, 0, 'triangle_rect');
    var pattern6 = P6.create(0, 0, 'diamond');

    patternStyle(pattern1, 496, 168, 0);
    patternStyle(pattern2, 496, 227, 0);
    patternStyle(pattern3, 400, 200, 0);
    patternStyle(pattern4, 496, 108, 0);
    patternStyle(pattern5, 400, 128, 0);
    patternStyle(pattern6, 320, 228, 4);					
						

    function patternStyle(pattern, x, y, angle) {
        pattern.x = x;
        pattern.y = y;
        pattern.frame = angle;
        pattern.inputEnabled = true;
        pattern.tint = 0x020303;
        pattern.alpha = 0.4;
    }

    //Update the pattern matrix with the shapes' matrix
    
    // TODO gérer l'orientation de la forme
    
    P1.forEach(function(patternItem) {
        areaPattern = areaPattern + shapes.square.area[0];
        addShapeMatrix(patternItem,1);
    }, this);

    P2.forEach(function(patternItem) {
        areaPattern = areaPattern + shapes.trapeze.area[0];
        addShapeMatrix(patternItem,1);
    }, this);

    P3.forEach(function(patternItem) {
        areaPattern = areaPattern + shapes.hexagon.area[0];
        addShapeMatrix(patternItem,1);
    }, this);

    P4.forEach(function(patternItem) {
        areaPattern = areaPattern + shapes.triangleEqui.area[0];
        addShapeMatrix(patternItem,1);
    }, this);

    P5.forEach(function(patternItem) {
        areaPattern = areaPattern + shapes.triangleRect.area[0];
        addShapeMatrix(patternItem,1);
    }, this);

    P6.forEach(function(patternItem) {
        areaPattern = areaPattern + shapes.diamond.area[0];
        addShapeMatrix(patternItem,1);
    }, this);

}
