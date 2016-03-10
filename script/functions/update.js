//Update function that is always running on the background


function update() {
    //Bring the forms up
    game.world.bringToTop(forms);
    //game.world.bringToTop(trash);

    // Update of the shadows
    shadows.removeAll();
    forms.forEach(function(F){
        F.forEach(function(sprite){
            var aShadow = game.add.sprite(sprite.x+3,sprite.y+3,sprite.generateTexture());
            shadows.add(aShadow);
            aShadow.anchor.x=0;
            aShadow.anchor.y=0;
            aShadow.tint=0x000000;
            aShadow.alpha=0.3;           
        });
    });
    
    //updateSize();


}
