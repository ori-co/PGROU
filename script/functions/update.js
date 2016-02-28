//Update function that is always running on the background
function update() {

    updateSize();

    // Vérification de la solution    
    valid = 0;

    for (var i = 0; i < 1200; i++) {
        for (var j = 0; j < 800; j++) {
            if (matSolution[i][j] != matPattern[i][j]) {
                valid++;
            }
        }
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