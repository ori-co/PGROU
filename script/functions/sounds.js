var cptbegin=0;
var cptrot=0;
var cpttrash=0;
var cptlock=0;
var expo=0;
var cptcol=0;
var crea=0;
var printer=0;
var cptplace = 0;
var totalshape=0;
var canPlay=true;

// mute the game
function toggleMute(item){
	if (!soundManager.muted){
		soundManager.mute();
		item.setFrames(3, 0, 1, 0);
	}else{
		soundManager.unmute();
		click = soundManager.createSound({id : "click", url: language+"click.mp3"});
		click.play();
		item.setFrames(2, 1, 0, 1);
	}
}

// stop all playing sound
function sound_stopAll(){
	soundManager.stopAll();
	canPlay = true;
}


// Sound click functions
function trashBinSound() {
    bintemp = soundManager.createSound({id : "bin", url: language+"trashbin.mp3"});
	bintemp.play();
}

function clicker(){
	var clicker = soundManager.createSound({id : "clicker", url: language+"click.mp3"});
	clicker.play();
}
	
	// Add Shapes Sounds 
	
function sound_square(nbF1){
 	nb1 = soundManager.createSound({id : "square"+nbF1, url:language+"square"+nbF1+".mp3"});
	soundManager.stopAll();
    patrickSpeak(nb1); // must be before play() instruction
	nb1.play();
}

function sound_trapeze(nbF2){
 	nb2 = soundManager.createSound({id : "trapeze"+nbF2, url:language+"trapeze"+nbF2+".mp3"});
	soundManager.stopAll();
	patrickSpeak(nb2);
	nb2.play();
}

function sound_hexagon(nbF3){
 	nb3 = soundManager.createSound({id : "hexagon"+nbF3, url:language+"hexagon"+nbF3+".mp3"});
	soundManager.stopAll();
	patrickSpeak(nb3);
	nb3.play();
}

function sound_triangle(nbF4){
 	nb4 = soundManager.createSound({id : "triangle"+nbF4, url:language+"triangle"+nbF4+".mp3"});
	soundManager.stopAll();
	patrickSpeak(nb4);
	nb4.play();
}

function sound_trirec(nbF5){
 	nb5 = soundManager.createSound({id : "trirec"+nbF5, url:language+"trirec"+nbF5+".mp3"});
	soundManager.stopAll();
	patrickSpeak(nb5);
	nb5.play();
}

function sound_diamond(nbF6){
 	nb6 = soundManager.createSound({id : "diamond"+nbF6, url:language+"diamond"+nbF6+".mp3"});
	soundManager.stopAll();
	patrickSpeak(nb6);
	nb6.play();
}	
	
	// Remove Shapes sounds

function sound_square_off(nbF1){
 	n1 = soundManager.createSound({id : "square_off"+nbF1, url:language+"square_off"+nbF1+".mp3"});
	soundManager.stopAll();
	patrickSpeak(n1);
	n1.play();
}	


function sound_trapeze_off(nbF2){
 	n2 = soundManager.createSound({id : "trapeze_off"+nbF2, url:language+"trapeze_off"+nbF2+".mp3"});
	soundManager.stopAll();
	patrickSpeak(n2);
	n2.play();
}	


function sound_hexagon_off(nbF3){
 	n3 = soundManager.createSound({id : "hexagon_off"+nbF3, url:language+"hexagon_off"+nbF3+".mp3"});
	soundManager.stopAll();
	patrickSpeak(n3);
	n3.play();
}	


function sound_triangle_off(nbF4){
 	n4 = soundManager.createSound({id : "triangle_off"+nbF4, url:language+"triangle_off"+nbF4+".mp3"});
	soundManager.stopAll();
	patrickSpeak(n4);
	n4.play();
}	


function sound_trirec_off(nbF6){
 	n5 = soundManager.createSound({id : "trirec_off"+nbF5, url:language+"trirec_off"+nbF5+".mp3"});
	soundManager.stopAll();
	patrickSpeak(n5);
	n5.play();
}	

function sound_diamond_off(nbF6){
 	n6 = soundManager.createSound({id : "diamond_off"+nbF6, url:language+"diamond_off"+nbF6+".mp3"});
	soundManager.stopAll();
	patrickSpeak(n6);
	n6.play();
}

// Help sounds - explanations of the commands

// play the instruction sound - play oncly if the associated counter is null
function playHelp(mp3Name, cpt){
    if (cpt == 0){
        var helpSound = soundManager.createSound({id : mp3Name, url:language+mp3Name+".mp3"});
        if(canPlay){
            canPlay = false;
            soundManager.stopAll();
            if (typeof patMouth !== 'undefined'){
				patrickSpeak(helpSound);
			} else {
				helpSound.options.onfinish = function(){canPlay = true;};
			}
            helpSound.play();
            cpt++;
        }
    }
    return cpt;
}

function sound_trash(){ cpttrash = playHelp("help_trash",cpttrash); }
    
function sound_rotation(){ cptrot= playHelp("help_rot",cptrot);}

function sound_export(){expo = playHelp("help_export",expo);}

function sound_color(){cptcol = playHelp("help_color",cptcol);}

function sound_print(){printer = playHelp("help_print",printer);}

function sound_levelMode(){playHelp("classic",0);}

function sound_freeMode(){playHelp("free",0);}

function sound_empty(){}
	
function unlock_store(){cptlock = playHelp("help_lock",cptlock);}

function homeAutoPlaySound() {sound_stopAll(); playHelp("welcome",0);}

function levelsMapAutoPlaySound() {sound_stopAll();playHelp("introduction",0);}
	
function levelModeAutoPlaySound(){sound_stopAll();playHelp("help_begin",cptbegin);}

function freeModeAutoPlaySound(){sound_stopAll();playHelp("help_creation",crea);}

function winAutoPlaySound() {sound_stopAll();playHelp("success",0);}	

		




	
	