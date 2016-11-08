define([
	'states/loading',
	'states/home',
	'states/levelsMap',
	'states/play',
    'data/objShapes'
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
    var Game = function (pInterface){ 

		//Create a new Phaser JS game
		this.game = new Phaser.Game("100", "100", Phaser.AUTO);

		// Initialize value for the global variables of the game
		this.game.language = pInterface.language;
		this.game.muteValue=false;
		this.game.canPlay=true;
		this.game.patrick=null;
		this.game.shapes = objShapes;
		this.game._saveData = pInterface.savedData;

        this.game.saveData = {
            get: function () {
                console.log(this);
                return this._saveData;
            },
            set: function (value) {
                this._saveData = value;
                pInterface.save(value);
                return null;
            }
        };

        this.game.soundManager = new Phaser.SoundManager(this.game);

		// Add the states of the game
		this.game.state.add('loading', new LoadState());
		this.game.state.add('menu', new HomeState());
		this.game.state.add('levelsMap',new LevelsMapState());
		this.game.state.add('levelPlay', new PlayState("levelMode"));
		this.game.state.add('freePlay', new PlayState("freeMode"));

		// Call the first state of the game
		this.game.state.start('loading');
	};
    
    return Game;
});