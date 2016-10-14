define ([
        "global"
    ], function(
        globals
        ) {

function patrickSpeak(sound){
    var game = globals.game;

    sound.options.onplay = function(){
        game.global.ui.patMouth.animations.play('talk',8,true);
    } 
    
    sound.options.onfinish = function(){
        game.global.ui.patMouth.animations.stop(null,true);
        game.global.canPlay = true;
    }
}

function patrickBlink(){
var game =globals.game;

    game.global.ui.patEyes.animations.play('blink',10,false);
    var delay = Math.random()*3 +2;
    game.time.events.add(Phaser.Timer.SECOND * delay, patrickBlink, this);
}

return { 
patrickSpeak:patrickSpeak,
patrickBlink:patrickBlink
}

});