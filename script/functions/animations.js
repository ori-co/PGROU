
function patrickSpeak(sound){
    sound.options.onplay = function(){
        patMouth.animations.play('talk',8,true);
    } 
    
    sound.options.onfinish = function(){
        patMouth.animations.stop(null,true);
        canPlay = true;
    }
}

function patrickBlink(){
    patEyes.animations.play('blink',10,false);
    var delay = Math.random()*3 +2;
    game.time.events.add(Phaser.Timer.SECOND * delay, patrickBlink, this);
}