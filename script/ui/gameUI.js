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
            if (mode == "levelMode") {
                this.gameArea.pattern = new Pattern(game, this.gameArea, levelText);
                this.winPannel = new Pannel(game, levelNum);  
            }      
        };

        GameUI.prototype = {
            updatePosition : function(game){
                this.gameArea.updatePosition(game);
                this.gameArea.store.updatePosition(game);
                this.gameArea.basket.updatePosition(game);
                if (this.gameArea.winPannel != null) this.gameArea.winPannel.updatePosition(game);
            }
        };

        return GameUI;
});