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
    
    forms = game.add.group();
    //trash = game.add.group();
    
    forms.add(F1);
    forms.add(F2);
    forms.add(F3);
    forms.add(F4);
    forms.add(F5);
    forms.add(F6);

    mode = "freeMode";
    //Build the menu
    buildMenu();
    
    }