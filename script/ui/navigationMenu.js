define ([
    "ui/navigationButtons",
    "data/wording"
    ], function(
        NavigationButton,
        wordings
        ) {

        function NavigationMenu(game, mode){
            this.menu = new Phaser.Group(game);
            this.updateSize(game);

            this.label = this.getLabel(game,mode);
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
                new NavigationButton(game, this.menu, this.buttons[i], buttonsNumber-i);
            }
        };

        NavigationMenu.prototype = {
            getLabel : function(game, mode){
                var wording = wordings[game.language];

                switch (mode) {
                    case "home":
                        return wording.gameName;
                    case "levelsMap":
                        return wording.levelsMapTitle;
                    case "levelMode":
                        return wording.levelTitle+" "+game.global.levelnum;
                    case "freeMode":
                        return wording.freemodeTitle;
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
                        return ["buttonLevelsMap", "buttonHome", "buttonMute"];
                    case "freeMode":
                        return ["buttonHome", "buttonMute", "buttonExport"];
                }     
            }
            ,

            updateSize : function(game){
                this.menu.x = game.width;
            }
        }

        return NavigationMenu;
});