define ([
    "data/wording"
    ], function(
        wordings
        ) {

        function InstructionsSounds(game, soundName){
            game.soundManager.stopAll();
            game.canPlay = false;
            var helpSound = game.soundManager.add(soundName);
            game.patrick.speaks(game, helpSound);
            helpSound.play();
        };

        function HelpSounds(game, soundName, cpt){
             if (cpt == 0){
                var helpSound = game.soundManager.add(soundName);
                if(game.canPlay){
                    game.canPlay = false;
                    game.soundManager.stopAll();
                    game.patrick.speaks(game ,helpSound);
                    helpSound.play();
                }
            }
        };

        function SoundEffects(game,soundName){
            game.soundManager.add(soundName).play();
        };

        function AddRemoveShape(game, shapeName, nb, add){
            game.soundManager.stopAll();
            game.canPlay = false;

            var suffixe = add ? "on" : "off";
            var playSoundObject = game.soundManager.add(shapeName+"_"+nb+"_"+suffixe);
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