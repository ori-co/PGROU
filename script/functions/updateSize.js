//Update function that is always running on the background to resize
function updateSize() {
    //Bring the forms up
    game.world.bringToTop(forms);
    game.world.bringToTop(trash);

    // Adapt the size of the interface to the screen
    pipe.height = window.innerHeight - (390 + 212);
    basketLeft.y = window.innerHeight - 212 - 5;
    basketMiddle.y = window.innerHeight - 212 - 5;
    basketMiddle.width = window.innerWidth - 2 * 142;
    basketRight.x = window.innerWidth - 142 - 5;
    basketRight.y = window.innerHeight - 212 - 5;
    
    var long = 100;
    
    menuLeft.x = window.innerWidth - 5 - long - 2 * 35;
    menuMiddle.x = window.innerWidth - 5 - long - 35;
    menuMiddle.width = long;
    menuRight.x = window.innerWidth - 35 - 5;
    
    rot.y = window.innerHeight - 210;
    col.y = window.innerHeight - 210;
    ret.x = window.innerWidth - (18 + 3 * 50);
    mute.x = window.innerWidth - (18 + 2 * 50);
    exp.x = window.innerWidth - (18 + 1 * 50);
}