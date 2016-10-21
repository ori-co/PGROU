define ([
        "global"
    ], function(
        globals
        ) {

function patrickSpeak(sound, mouthSprite){
    var game = globals.game;

    sound.options.onplay = function(){
        if (typeof mouthSprite !== 'undefined') mouthSprite.animations.play('talk',8,true);
    } 
    
    sound.options.onfinish = function(){
        if (typeof mouthSprite !== 'undefined') mouthSprite.animations.stop(null,true);
        game.global.canPlay = true;
    }
}

function patrickBlink(eyesSprite){
var game =globals.game;

    eyesSprite.animations.play('blink',10,false);
    var delay = Math.random()*3 +2;
    game.time.events.add(Phaser.Timer.SECOND * delay, function(){patrickBlink(eyesSprite)}, this);
}

return { 
patrickSpeak:patrickSpeak,
patrickBlink:patrickBlink
}

});