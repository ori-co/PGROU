define ([
    ], function(
        ) {

        function InstructionsSounds(game, soundName){
            game.sound.stopAll();
            game.canPlay = false;
            var helpSound = game.sound.add(soundName);
            game.patrick.speaks(game, helpSound);
            helpSound.play();
        };

        function HelpSounds(game, soundName, cpt){
            this.done = false;
            if (cpt == 0){
                var helpSound = game.sound.add(soundName);
                if(game.canPlay){
                    game.canPlay = false;
                    game.sound.stopAll();
                    game.patrick.speaks(game ,helpSound);
                    helpSound.play();
                    this.done=true;
                }
            }
        };

        function SoundEffects(game,soundName){
            game.sound.add(soundName).play();
        };

        function AddRemoveShape(game, shapeName, nb, add){
            game.sound.stopAll();
            game.canPlay = false;

            var suffixe = add ? "on" : "off";
            var playSoundObject = game.sound.add(shapeName+"_"+nb+"_"+suffixe);
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