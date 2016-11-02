define ([
    "data/wording"
    ], function(
        wordings
        ) {

        function InstructionsSounds(game, mp3Name){
            soundManager.stopAll();
            game.canPlay = false;

            var helpSound = soundManager.createSound({id : mp3Name, url: wordings[game.language].soundsDir+"/" +mp3Name+".mp3"});
            game.patrick.speaks(game, helpSound);
            helpSound.play();
        };

        function HelpSounds(game, mp3Name, cpt){
             if (cpt == 0){
                var helpSound = soundManager.createSound({id : mp3Name, url:wordings[game.language].soundsDir+"/" +mp3Name+".mp3"});
                if(game.canPlay){
                    game.canPlay = false;
                    soundManager.stopAll();
                    game.patrick.speaks(game ,helpSound);
                    helpSound.play();
                    cpt++;
                }
            }
        };

        function SoundEffects(game,mp3Name){
            soundManager.createSound({id : mp3Name, url: wordings[game.language].soundsDir+"/" + mp3Name + ".mp3"}).play();
        };

        function AddRemoveShape(game, shapeName, nb, add){
            soundManager.stopAll();
            game.canPlay = false;

            var suffixe = add ? "" : "_off";
            var playSoundObject = soundManager.createSound({id : shapeName+nb, url: wordings[game.language].soundsDir +"/"+ shapeName + suffixe + nb + ".mp3"});
            game.patrick.speaks(game, playSoundObject);
            playSoundObject.play();
        };




        return {
            InstructionsSounds : InstructionsSounds,
            HelpSounds : HelpSounds,
            SoundEffects : SoundEffects,
            AddRemoveShape:AddRemoveShape
        };
    });