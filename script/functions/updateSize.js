//Update function that is always running on the background to resize
function updateSize() {

    // Adapt the size of the interface to the screen    
    pipe.height = window.innerHeight - (390 + 212);
    // Basket position
    basketLeft.y = window.innerHeight - (5 + basketLeft.height);
    basketMiddle.x = basketLeft.x + basketLeft.width;
    basketMiddle.y = window.innerHeight - (5 + basketLeft.height);
    basketMiddle.width = window.innerWidth - (basketLeft.width + basketRight.width);
    basketRight.x = window.innerWidth - (5 + basketRight.width);
    basketRight.y = window.innerHeight - (5 + basketRight.height); 
    
    // Buttons on basket
    rotL.y = window.innerHeight - 210;
    rotR.y = window.innerHeight - 210;
    if (mode == "freeMode"){
        col.y =window.innerHeight - 210;
    }
    
    // Menu position
    menuLeft.x = window.innerWidth - (5 + menuLenght + menuLeft.width + menuRight.width);
    menuRight.x = window.innerWidth - (5 + menuRight.width);
    menuMiddle.x = window.innerWidth - (5 + menuLenght + menuRight.width);
    menuMiddle.width = menuLenght;
    
    // Buttons on menu
    mute.x=window.innerWidth - (18 + 1 * 50);
    switch (mode) {
        case "levelMode":
            home.x = window.innerWidth - (18 + 2 * 50);
            ret.x=window.innerWidth - (18 + 3 * 50);
            levelName.x=window.innerWidth - 280;
            break;
        case "freeMode":
            home.x=window.innerWidth - (18 + 4 * 50);
            exp.x = window.innerWidth - (18 + 2 * 50);
            print.x=window.innerWidth - (18 + 3 * 50);
            break;
    }
    
    //Patrick position
    pat.x=basketRight.x+5;
    pat.y=basketRight.y-135;
    
    //positions of shapes in the basket
    forms.forEach(function(F){
        F.forEach(function(tempSprite){
            if ((tempSprite.y > 500) ||  (tempSprite.y < 25) || (tempSprite.x > 1000) || (tempSprite.x < 225)){
                tempSprite.y = window.innerHeight - 155;
                if (tempSprite.x+tempSprite.width > window.innerWidth){
                    tempSprite.x=Math.random()*(window.innerWidth-310)+90;
                }
                 tempSprite.originalPosition = tempSprite.position.clone();
            }
        },this);
    },this);
}
