define ([
    "data/wording"
    ], function(
        wordings
        ) {

        function InstructionsSounds(game, mp3Name){
            var helpSound = soundManager.createSound({id : mp3Name, url: wordings[game.language].soundsDir+"/" +mp3Name+".mp3"});
            if(game.canPlay){
                game.canPlay = false;
                soundManager.stopAll();
                game.patrick.speaks(game, helpSound);
                helpSound.play();
            }
        };

        function SoundEffects(game,mp3Name){
            soundManager.createSound({id : mp3Name, url: wordings[game.language].soundsDir+"/" + mp3Name + ".mp3"}).play();
        };




        return {
            InstructionsSounds: InstructionsSounds,
            SoundEffects: SoundEffects
        };
    });