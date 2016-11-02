define ([
    "ui/shapeButton",
    "sounds/autoPlaySounds"

    ], function(
        ShapeButton,
        autoPlaySounds
        ) {

        /**
         * 
         * @class 
         * @memberof 
         * @param 
         */
        function Store(game, gameArea, mode){
            this.shapeButtons = {};
            this.store = game.add.sprite(5, 5, 'store');
            this.pipe = game.add.sprite(5, 395, 'pipe');
            this.bin = game.add.button(55, 20, 'trashbin', null, this, 2, 1, 0, 1);
            this.bin.cpt = 0;
            this.bin.events.onInputOver.add(function(){autoPlaySounds.HelpSounds(game, 'help_trash',this.bin.cpt)}, this);
            
            var i=0;
            for (var key in game.shapes){
                var posY = Math.floor(i/2) * 90 + 110 ;
                var posX = (i % 2) * 90 + 15;
                this.shapeButtons[key] = new ShapeButton(game, posX, posY, key, gameArea, mode);
                i ++;
            }

            this.ribbon = game.add.button(5, 5, 'ribbon', function(){this.unlockStore(game)}, this, 1, 0, 1, 0);
            this.ribbon.cpt = 0;
            this.ribbon.events.onInputOver.add(function(){autoPlaySounds.HelpSounds(game, 'help_lock', this.ribbon.cpt)}, this);
            
            this.unlockStore(game);
            this.firstChance = true;

            this.updatePosition(game);
        };

        Store.prototype = {

            updatePosition : function(game){
                this.pipe.height = game.height - (390 + 212);
            }
            ,
            unlockStore : function(game){
                this.ribbon.visible = false;
                for (var key in game.shapes){
                    this.shapeButtons[key].sprite.inputEnabled=true;
                }
                this.bin.inputEnabled=true;
                this.firstChance=false;
            }
            ,
            lockStore : function(game, inputEnabled){
                this.ribbon.visible = true;
                this.unableShapesButtons(game);
                this.bin.inputEnabled=false;
                this.ribbon.inputEnabled = inputEnabled;
            }
            ,
            unableShapesButtons:function(game){
                for (var key in game.shapes){
                    this.shapeButtons[key].sprite.inputEnabled=false;
                }
            }
            ,
            unvisibleShapesButtons : function(game){
                for (var key in game.shapes){
                    this.shapeButtons[key].sprite.visible=false;
                }
            }
            ,
            enableShapeButton : function(shapeName){
                this.shapeButtons[shapeName].sprite.visible = true;
                this.shapeButtons[shapeName].sprite.inputEnabled=true;
            }
        };

        return Store;
});