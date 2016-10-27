requirejs([
	"states/loading",
	"states/home",
	"states/levelsMap",
	"states/levelPlayState"
	"states", 
	"global"
	], function(
		LoadState,
		HomeState,
		LevelsMapState,
		LevelPlayState,
		states, 
		globals
		) {

     /**
     * Game Object 
     * @class 
     * @memberof Patrimath
     * @param {string} lang
     */
    var Game = function(lang,saveData){ 

		//Create a new Phaser JS game
		this.game = new Phaser.Game("100", "100",Phaser.CANVAS );

		// Initialize value for the global variables of the game
		this.game.language = lang;
		this.game.muteValue=false;
		this.game.canPlay=true;
		this.game.patrick=null;
		this.game.saveData = saveData;

		// Add the states of the game
		this.game.state.add('loading', new LoadState());
		this.game.state.add('menu', new HomeState());
		this.game.state.add('levelsMap',new LevelsMapState());
		this.game.state.add('levelPlay', new LevelPlayState());
		// this.game.state.add('freePlay', states.freePlayState);

		// Call the first state of the game
		this.game.state.start('preload');
	};

	// Instanciate the new game in french and with no saved data
	var test = new Game("fr",[]);


});