///////////////////////////////////////////////////////////////////////
// VARIABLES
///////////////////////////////////////////////////////////////////////

//Count the number of shapes created
var nbF1 = 0;
var nbF2 = 0;
var nbF3 = 0;
var nbF4 = 0;
var nbF5 = 0;
var nbF6 = 0;
var nbF = 0;

//Edition mode testing
var test = 0;

//Groups of shapes 
var F1;
var F2;
var F3;
var F4;
var F5;
var F6;

var P1;
var P2;
var P3;
var P4;
var P5;
var P6;

//  Sound variables definition
var trashbin ;
var click;
/*

var index;
var select_class;
var lock;
var import;
var classic;
var firstform;
var matching_cla;
var problem;
var distrib;
var prop_rotation;
var top_validation;
var low_validation;
var popup;
var nextlevel;
var square1;
var triangle-eq1;
var triangle-req1;
var trapeze1;
var diamond1;
var selectfree;
var matching-free;
var crea;
var save;
var advertise;
var print;
var exprt; 
*/

//Area of the pattern and the solution
var areaPattern = 0;
var areaSolution = 0;

//Test the end of the game
var end = 0;

//Do not receive double success message
var nbAlert = 0;

//Used to check if the solution is valid or not
var valid = 0;

// Interface variables
// buttons
var bin;
var rotL;
var rotR;
var col;
var mute;
var ret;
var home;
var exp;
var print;

var buttonSquare;
var buttonTrapezoid;
var buttonTriangleEqui;
var buttonHexagon;
var buttonTriangleRect;
var buttonDiamond;

var labelSquare;
var labelTrapezoid;
var labelTriangleEqui;
var lavbelHexagon;
var labelTriangleRect;
var labelDiamond;

var palette;

var shadows;

var forms;

// responsive elements
var pipe;
var basketLeft;
var basketMiddle;
var basketRight;
var menuRight;
var menuMiddle;
var menuLeft;
var menuLenght;

//Create a new Phaser JS game
var game = new Phaser.Game("100%", "100%", Phaser.CANVAS, 'pgrou', {
    //var game = new Phaser.Game(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.CANVAS, 'pgrou', { 
    //var game = new Phaser.Game(2000, 1000, Phaser.CANVAS, 'pgrou', { 
    preload: preload,
    create: create,
    update: update,
    render: render
});

//////////////////////////////////////////////////////////////////////////////////////////////////
