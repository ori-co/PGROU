//Update function that is always running on the background
function update() {

    updateSize();

    // Vérification de la solution    
    valid = 0;

	var i = 0;
	var j = 0;
	while (i < 1200 && valid < 500) {
		while (j < 800 && valid < 500) {
			if (matSolution[i][j] != matPattern[i][j]) {
                valid++;
            }
            j++;
        }
        i++;
    }

    if (valid < 500 && areaSolution == areaPattern) {
        fin = 1;
        if (nbAlert == 0) {
            nbAlert = 1;
            var delay = 500;
            setTimeout(function() {
                alert("Bravo! Vous avez réussi ce niveau!");
            }, delay);
        }
    }

}
