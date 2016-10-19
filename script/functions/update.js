define ([
		"global"
	], function(
		globals
		) {

// When the solution is correct and still is after a delay, launch the win state
return function update(){
    var game = globals.game;

    if (game.global.solution.ok){
	    var delay = 1000;
        setTimeout(function () {
			if (game.global.solution.ok) game.state.start("win");
        }, delay);
    }

    if (game.global.solution.ko){
    	var delay = 200;
        setTimeout(function () {
			game.state.start("levelsMap");
        }, delay);
    }
}

	});