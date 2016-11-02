define ([
    "game/gameArea",
    "game/store",
    "game/basket",
    "game/pannel",
    "game/pattern"

    ], function(
        GameArea,
        Store,
        Basket,
        Pannel,
        Pattern

        ) {

        /**
         * 
         * @class 
         * @memberof 
         * @param 
         */
        function GameUI(game, mode, levelNum, levelText){
            this.gameArea = new GameArea(game, 900,600);
            this.gameArea.store = new Store(game, this.gameArea , mode);
            this.gameArea.basket = new Basket(game, this.gameArea, mode);
            this.gameArea.winPannel = new Pannel(game, levelNum);
            if (mode == "levelMode") {
                
                this.gameArea.pattern = new Pattern(game, this.gameArea, levelText);
            }      
        };

        GameUI.prototype = {
            updatePosition : function(game){
                this.gameArea.updatePosition(game);
                this.gameArea.store.updatePosition(game);
                this.gameArea.basket.updatePosition(game);
                this.gameArea.winPannel.updatePosition(game);
                if (this.gameArea.pattern !=null) this.gameArea.pattern.updatePosition(this.gameArea);
            }
        };

        return GameUI;
});