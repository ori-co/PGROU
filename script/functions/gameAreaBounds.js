define ([
        "global"
    ], function(
        globals
        ) {

 // to check if the sprite stay in the game area
function isOutOfGameArea(tempSprite){
	var game = globals.game;

    var minX = game.global.gameAreaOrigin.x;
    var maxX = game.global.gameAreaOrigin.x + game.global.gameAreaSize.x;
    var minY = game.global.gameAreaOrigin.y;
    var maxY = game.global.gameAreaOrigin.y + game.global.gameAreaSize.y;
    
    return (tempSprite.y > maxY) ||  (tempSprite.y < minY) || (tempSprite.x > maxX) || (tempSprite.x < minX);
}

return {isOutOfGameArea:isOutOfGameArea};

});