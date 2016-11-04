define ([
    "ui/navigationButtons"
    ], function(
        NavigationButton
        ) {

        function NavigationMenu(game, mode, levelNum, gameArea){
            this.menu = new Phaser.Group(game);
            this.updatePosition(game);

            this.label = this.getLabel(game,mode,levelNum);
            this.buttons = this.getButtonsList(game,mode);

            var menuRight = this.menu.addChild(game.make.sprite(0, 5, 'menu-right'));
            var menuLeft = this.menu.addChild(game.make.sprite(0, 5, 'menu-left'));
            var menuMiddle = this.menu.addChild(game.make.sprite(0, 5, 'menu-middle'));
            
            var buttonsNumber = this.buttons.length;
            var labelLength = this.label.length;
            var marginSize = 25;
            var charSize = 12;
            var menuLength = 50*buttonsNumber + charSize * labelLength - 2*marginSize;
            
            menuLeft.x = - (5 + menuLength + menuLeft.width + menuRight.width);
            menuRight.x =  - (5 + menuRight.width);
            menuMiddle.x =  - (5 + menuLength + menuRight.width);
            menuMiddle.width = menuLength;

            // add the label
            var levelStyle = {font: "23px Arial", fontWeight: "bold", fill: "#0D004C"};
            this.menu.addChild(game.make.text(- (50*buttonsNumber + charSize * labelLength +18 ), 23, this.label, levelStyle));

            // Add the buttons
            for (var i=0; i< this.buttons.length; i++){
                new NavigationButton(game, gameArea, levelNum, this.menu, this.buttons[i], buttonsNumber-i);
            }
        };

        NavigationMenu.prototype = {
            getLabel : function(game, mode, levelNum){

                switch (mode) {
                    case "home":
                        return " " + game.name;
                    case "levelsMap":
                        return "";
                    case "levelMode":
                        return " n° " + levelNum.toString();
                    case "freeMode":
                        return "";
                } 
            }
            ,

            getButtonsList : function(game,mode) {

                    // buttons : buttonHome, buttonLevelsMap, buttonMute, buttonPrint, buttonExport, buttonLang
                switch (mode) {
                    case "home":
                        return ["buttonMute"];
                    case "levelsMap":
                        return ["buttonHome","buttonMute"];
                    case "levelMode":
                        return ["buttonRetry", "buttonLevelsMap", "buttonHome", "buttonMute"];
                    case "freeMode":
                        return ["buttonRetry", "buttonHome", "buttonMute", "buttonExport"];
                }     
            }
            ,

            updatePosition : function(game){
                this.menu.x = game.width;
            }
        }

        return NavigationMenu;
});