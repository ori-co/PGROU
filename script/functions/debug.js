//Debugging Mode
function render() {
    game.debug.style = '#fff';
    game.debug.text('Squares : ' + nbF1, 16, 48);
    game.debug.text('Trapezes : ' + nbF2, 16, 60);
    game.debug.text('Hexagons : ' + nbF3, 16, 72);
    game.debug.text('Triangles : ' + nbF4, 16, 84);
    game.debug.text('Rect Triangles : ' + nbF5, 16, 96);
    game.debug.text('Diamonds : ' + nbF6, 16, 108);
    game.debug.text('Function : ' + test, 16, 120);
    //game.debug.text('End : ' + end, 16, 108);
    game.debug.text('Solution Area: ' + areaSolution, 16, 132);
    game.debug.text('Problem Area: ' + areaPattern, 16, 144);
    game.debug.text('Input Width : ' + game.width, 16, 156);
    game.debug.text('valid: ' + valid, 300, 50);
    //game.debug.text('matProblem : ' + matPattern[180][22], 16, 120);
    //game.debug.text('MatSolution : ' + matSolution[180][22], 16, 132);
    //game.debug.inputInfo(16, 144);
}
