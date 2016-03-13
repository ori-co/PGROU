// Sound click functions
function trashBinSound() {
    // la variable bin était deja utilisée pour autre chose ! (nom du bouton)
    // attention quand tu utlises des variables locales à ne pas ecraser des variables globales
    bintemp = soundManager.createSound({id : "bin", url: language+"trashbin.mp3"});
	bintemp.play();
}

function clickerBack(){
click = soundManager.createSound({id : "click", url: language+"click.mp3", 
onfinish: function(){ self.location.href='levelsMap.html'}});
click.play();
}

function clickerHome(){
click = soundManager.createSound({id : "click", url: language+"click.mp3", 
onfinish: function(){ self.location.href='index.html'}});
click.play();
}

function clicker(){
	var clicker = soundManager.createSound({id : "clicker", url: language+"click.mp3"});
	clicker.play();
}
	
	// Add Shapes Sounds 
	
function sound_square(nbF1){
 	nbF1 = soundManager.createSound({id : "square"+nbF1, url:"assets/audio/fr/square"+nbF1+".mp3"});
	soundManager.stopAll();
    patrickSpeak(nbF1); // must be before play() instruction
	nbF1.play();
}

function sound_trapeze(nbF2){
 	nbF2 = soundManager.createSound({id : "trapeze"+nbF2, url:"assets/audio/fr/trapeze"+nbF2+".mp3"});
	soundManager.stopAll();
	nbF2.play();
}

function sound_hexagon(nbF3){
 	nbF3 = soundManager.createSound({id : "hexagon"+nbF3, url:"assets/audio/fr/hexagon"+nbF3+".mp3"});
	soundManager.stopAll();
	nbF3.play();
}

function sound_triangle(nbF4){
 	nbF4 = soundManager.createSound({id : "triangle"+nbF4, url:"assets/audio/fr/triangle"+nbF4+".mp3"});
	soundManager.stopAll();
	nbF4.play();
}

function sound_trirec(nbF5){
 	nbF5 = soundManager.createSound({id : "trirec"+nbF1, url:"assets/audio/fr/trirec"+nbF5+".mp3"});
	soundManager.stopAll();
	nbF5.play();
}

function sound_diamond(nbF6){
 	nbF6 = soundManager.createSound({id : "diamond"+nbF6, url:"assets/audio/fr/diamond"+nbF6+".mp3"});
	soundManager.stopAll();
	nbF6.play();
}	
	
	// Remove Shapes sounds

function sound_square_off(nbF1){
 	nbF1 = soundManager.createSound({id : "square_off"+nbF1, url:"assets/audio/fr/square_off"+nbF1+".mp3"});
	soundManager.stopAll();
	nbF1.play();
}	


function sound_trapeze_off(nbF2){
 	nbF2 = soundManager.createSound({id : "trapeze_off"+nbF2, url:"assets/audio/fr/trapeze_off"+nbF2+".mp3"});
	soundManager.stopAll();
	nbF2.play();
}	


function sound_hexagon_off(nbF3){
 	nbF3 = soundManager.createSound({id : "hexagon_off"+nbF3, url:"assets/audio/fr/hexagon_off"+nbF3+".mp3"});
	soundManager.stopAll();
	nbF3.play();
}	


function sound_triangle_off(nbF4){
 	nbF4 = soundManager.createSound({id : "triangle_off"+nbF4, url:"assets/audio/fr/triangle_off"+nbF5+".mp3"});
	soundManager.stopAll();
	nbF4.play();
}	


function sound_trirec_off(nbF6){
 	nbF5 = soundManager.createSound({id : "trirec_off"+nbF5, url:"assets/audio/fr/trirec_off"+nbF5+".mp3"});
	soundManager.stopAll();
	nbF5.play();
}	

function sound_diamond_off(nbF6){
 	nbF6 = soundManager.createSound({id : "diamond_off"+nbF6, url:"assets/audio/fr/diamond_off"+nbF6+".mp3"});
	soundManager.stopAll();
	nbF6.play();
}	

function mute(){
if (!soundManager.muted){
soundManager.mute();}
else
soundManager.unmute();
}	

	



	
	