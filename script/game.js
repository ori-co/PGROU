define([
	"states/loading",
	"states/home",
	"states/levelsMap",
	"states/play",
    "data/objShapes"
	], function(
		LoadState,
		HomeState,
		LevelsMapState,
		PlayState,
        objShapes
		) {
     /**
     * Game Object 
     * @class 
     * @memberof Patrimath
     * @param {string} lang
     */
    var Game = function(interface){ 

		//Create a new Phaser JS game
		this.game = new Phaser.Game("100", "100",Phaser.CANVAS );
        this.game.name="Patrimath";

		// Initialize value for the global variables of the game
		this.game.canPlay=true;
		this.game.patrick=null;
		this.game.shapes = objShapes;

        // previous results
		this.game.savedData = interface.savedData;

        // Set le language (only for the audio assets dir)
        switch (interface.language) {
            case 'english':
                this.game.language = "en";
                break;
            case 'swahili':
                this.game.language = "sw";
                break;
            default :
                this.game.language = "fr";
        }

		// Add the states of the game
		this.game.state.add('loading', new LoadState());
		this.game.state.add('menu', new HomeState());
		this.game.state.add('levelsMap',new LevelsMapState());
		this.game.state.add('levelPlay', new PlayState());
		this.game.state.add('freePlay', new PlayState());

		// Call the first state of the game
		this.game.state.start('loading');
	};

    var fakeInterface = {
        savedData : [],
        language : 'francais',
        save : save,
        close : close
    };

    function close () {
        console.log("The canvas should be closed now.");
    }

    function save (data) {
        console.log("Kalulu will save your data now.");
    }
	// Instanciate the new game in french and with no saved data
	var test = new Game(fakeInterface);


});