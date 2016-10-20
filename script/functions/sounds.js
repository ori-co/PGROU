define ([
		"global",
		"functions/animations"
	], function(
		globals,
		animations
		) {

var cptbegin=0;
var cptrot=0;
var cpttrash=0;
var cptlock=0;
var expo=0;
var cptcol=0;
var crea=0;
var printer=0;
var cptplace = 0;
var cptmodelevels = 0;
var cptmodefree = 0;

var dir = "assets/audio/";

// mute the game
function toggleMute(item){
	var lang = globals.game.global.language;

	if (!soundManager.muted){
		soundManager.mute();
		item.setFrames(3, 0, 1, 0);
		globals.game.global.ui.muteValue = true;
	}else{
		soundManager.unmute();
		click = soundManager.createSound({id : "click", url: dir + globals.game.global.language+"/click.mp3"});
		click.play();
		item.setFrames(2, 1, 0, 1);
		globals.game.global.ui.muteValue = false;
	}
}

// stop all playing sound
function sound_stopAll(){
	soundManager.stopAll();
	globals.game.global.canPlay = true;
}


// Sound click functions
function trashBinSound() { soundManager.createSound({id : "bin", url: dir + globals.game.global.language +"/trashbin.mp3"}).play(); }

function clicker(){ soundManager.createSound({id : "clicker", url: dir + globals.game.global.language+"/click.mp3"}).play();}
	
	// Add Shapes Sounds 

function sound_addRemoveShape(shapeName, nb, add){
	var suffixe = add ? "" : "_off";
	var soundObject = {id : shapeName+nb, url:dir + globals.game.global.language +"/"+ shapeName + suffixe + nb + ".mp3"};
	var playSoundObject = soundManager.createSound(soundObject);

	sound_stopAll();
	globals.game.global.canPlay = false;
	animations.patrickSpeak(playSoundObject);
	playSoundObject.play();
}

// Help sounds - explanations of the commands

// play the instruction sound - play only if the associated counter is null
function playHelp(mp3Name, cpt){
var game = globals.game;

    if (cpt == 0){
        var helpSound = soundManager.createSound({id : mp3Name, url:dir + globals.game.global.language+"/" +mp3Name+".mp3"});
        if(game.global.canPlay){
            game.global.canPlay = false;
            soundManager.stopAll();
            if (typeof patMouth !== 'undefined'){
				patrickSpeak(helpSound);
			} else {
				helpSound.options.onfinish = function(){game.global.canPlay = true;};
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

function sound_levelMode(){playHelp("classic",cptmodelevels);}

function sound_freeMode(){playHelp("free",cptmodefree);}

function sound_empty(){}
	
function unlock_store(){cptlock = playHelp("help_lock",cptlock);}

function homeAutoPlaySound() {sound_stopAll(); playHelp("welcome",0);}

function levelsMapAutoPlaySound() {sound_stopAll();playHelp("introduction",0);}
	
function levelModeAutoPlaySound(){sound_stopAll();playHelp("help_begin",cptbegin);}

function freeModeAutoPlaySound(){sound_stopAll();playHelp("help_creation",crea);}

function winAutoPlaySound() {sound_stopAll();playHelp("success",0);}	

return {
	toggleMute:toggleMute,
	sound_stopAll:sound_stopAll,
	trashBinSound:trashBinSound,
	clicker	:clicker,
	sound_addRemoveShape : sound_addRemoveShape,
	sound_trash:sound_trash,
	sound_rotation:sound_rotation,
	sound_export:sound_export,
	sound_color:sound_color,
	sound_print:sound_print,
	sound_levelMode:sound_levelMode,
	sound_freeMode:sound_freeMode,
	sound_empty:sound_empty,
	unlock_store:unlock_store,
	homeAutoPlaySound:homeAutoPlaySound,
	levelsMapAutoPlaySound:levelsMapAutoPlaySound,
	levelModeAutoPlaySound:levelModeAutoPlaySound,
	freeModeAutoPlaySound:freeModeAutoPlaySound,
	winAutoPlaySound,winAutoPlaySound
};

});

	
	