//Update function that is always running on the background to resize
function updateSize() {
    //Bring the forms up
    game.world.bringToTop(forms);
    game.world.bringToTop(trash);

    // Update of the shadows
    shadows.removeAll();
    forms.forEach(function(F){
        F.forEach(function(sprite){
            var aShadow = game.add.sprite(sprite.x+3,sprite.y+3,sprite.generateTexture());
            shadows.add(aShadow);
            aShadow.anchor.x=0.5;
            aShadow.anchor.y=0.5;
            aShadow.tint=0x000000;
            aShadow.alpha=0.3;           
        });
    });

    // Adapt the size of the interface to the screen
    pipe.height = window.innerHeight - (390 + 212);
    basketLeft.y = window.innerHeight - 212 - 5;
    basketMiddle.y = window.innerHeight - 212 - 5;
    basketMiddle.width = window.innerWidth - 2 * 142;
    basketRight.x = window.innerWidth - 142 - 5;
    basketRight.y = window.innerHeight - 212 - 5;
    
    menuLeft.x = window.innerWidth - 5 - menuLenght - 2 * 35;
    menuMiddle.x = window.innerWidth - 5 - menuLenght - 35;
    menuMiddle.width = menuLenght;
    menuRight.x = window.innerWidth - 35 - 5;
    
    rot.y = window.innerHeight - 210;
    col.y = window.innerHeight - 210;
    ret.x = window.innerWidth - (18 + 3 * 50);
    mute.x = window.innerWidth - (18 + 2 * 50);
    exp.x = window.innerWidth - (18 + 1 * 50);
}