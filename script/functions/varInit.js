///////////////////////////////////////////////////////////////////////
// VARIABLES
///////////////////////////////////////////////////////////////////////

//Number of levels
var nbLevels = 35;

// Game mode 'levelMode' or 'freeMode'
var mode;

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
var levelName;
var pat;
var patMouth;
var patEyes;

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
var patterns;

//Lock panel on the store
var unlockButton;
var storeLocked = false;

// responsive elements
var pipe;
var basketLeft;
var basketMiddle;
var basketRight;
var menuRight;
var menuMiddle;
var menuLeft;
var menuLenght;

// sounds

var cptrot=0;
var cpttrash=0;
var cptlock=0;
var begin=0;
var expo=0;
var crea=0;
var printer=0;
var totalshape=0;

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
