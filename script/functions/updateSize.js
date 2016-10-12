function updateWallpaperSize(wallpaper){
	wallpaper.height = game.height;
	wallpaper.width = game.width;
	if (menu != null) menu.x = game.width;
	if (pat != null) pat.y=game.height - 500;
}

//Update function that is always running on the background to resize
function updateSize() {
	
	var mode = game.global.mode;

    // Adapt the size of the interface to the screen    
    pipe.height = game.height - (390 + 212);
    // Basket position
    basketLeft.y = game.height - (5 + basketLeft.height);
    basketMiddle.x = basketLeft.x + basketLeft.width;
    basketMiddle.y = game.height - (5 + basketLeft.height);
    basketMiddle.width = game.width - (basketLeft.width + basketRight.width);
    basketRight.x = game.width - (5 + basketRight.width);
    basketRight.y = game.height - (5 + basketRight.height); 
    
    // Buttons on basket
    rotL.y = game.height - 210;
    rotR.y = game.height - 210;
    if (mode == "freeMode"){
        col.y =game.height - 210;
    }
    
    // Menu position
	menu.x = game.width;

    
    //Patrick position
    pat.x=basketRight.x+5;
    pat.y=basketRight.y-135;
    
    //positions of shapes in the basket
    forms.forEach(function(F){
        F.forEach(function(tempSprite){
            if ((tempSprite.y > 500) ||  (tempSprite.y < 25) || (tempSprite.x > 1000) || (tempSprite.x < 225)){
                tempSprite.y = game.height - 155;
                if (tempSprite.x+tempSprite.width > game.width){
                    tempSprite.x=Math.random()*(game.width-310)+90;
                }
                 tempSprite.originalPosition = tempSprite.position.clone();
            }
        },this);
    },this);
}
