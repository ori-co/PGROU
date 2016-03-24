// Sound click functions
function trashBinSound() {
    // la variable bin était deja utilisée pour autre chose ! (nom du bouton)
    // attention quand tu utlises des variables locales à ne pas ecraser des variables globales
    bintemp = soundManager.createSound({id : "bin", url: language+"trashbin.mp3"});
	bintemp.play();
}

function sound_trash(){
	if (cpttrash==0){
	trash = soundManager.createSound({id : "trash", url:language+"trash.mp3" });
	soundManager.stopAll();
	trash.play();}
	cpttrash ++;
	}

function clickerBack(){
click = soundManager.createSound({id : "click", url: language+"click.mp3", 
onfinish: function(){ self.location.href='levelsmap.html'}});
click.play();
}

function clickerHome(){
click = soundManager.createSound({id : "click", url: language+"click.mp3", 
onfinish: function(){ self.location.href='index.html'}});
click.play();
}

function clicker(){
	var clicker = soundManager.createSound({id : "clicker", url: language+"click.mp3",onfinish: function(){sound_placement();}});
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
 	nb2 = soundManager.createSound({id : "pentagon"+nbF2, url:language+"pentagon"+nbF2+".mp3"});
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
 	nb5 = soundManager.createSound({id : "trirec"+nbF1, url:language+"trirec"+nbF5+".mp3"});
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
 	n2 = soundManager.createSound({id : "pentagon_off"+nbF2, url:language+"pentagon_off"+nbF2+".mp3"});
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
 	n4 = soundManager.createSound({id : "triangle_off"+nbF4, url:language+"triangle_off"+nbF5+".mp3"});
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

function sound_rotation(){
	if (cptrot==0){
	rot = soundManager.createSound({id : "rot", url:language+"rot.mp3" });
	soundManager.stopAll();
	rot.play();}
	cptrot ++;
	}
	

function unlock_store(){
	if (cptlock==0){
	lock = soundManager.createSound({id : "lock", url:language+"lock.mp3" });
	soundManager.stopAll();
	patrickSpeak(lock);
	lock.play();}
	cptlock ++;
	}	

function  sound_begin(){
if (begin==0){
	begin = soundManager.createSound({id : "begin", url:language+"begin.mp3" });
	soundManager.stopAll();
	patrickSpeak(begin);
	begin.play();}
	begin ++;
	}		
	
function  sound_export(){
if (expo==0){
	exprt = soundManager.createSound({id : "exprt", url:language+"export.mp3" });
	soundManager.stopAll();
	//patrickSpeak(begin);
	exprt.play();}
	expo ++;
	}	
	
function  sound_color(){

	color = soundManager.createSound({id : "color", url:language+"color.mp3" });
	soundManager.stopAll();
	//patrickSpeak(begin);
	color.play();

	}		
	
function  sound_creation(){
if (crea==0){
	creation = soundManager.createSound({id : "creation", url:language+"creation.mp3", onfinish: function(){sound_color();}});
	soundManager.stopAll();
	//patrickSpeak(begin);
	creation.play();}
	crea ++;
	}			


function  sound_print(){
if (printer==0){
	printable = soundManager.createSound({id : "printable", url:language+"print.mp3" });
	soundManager.stopAll();
	//patrickSpeak(begin);
	printable.play();}
	printer ++;
	}
	

function  sound_placement(){
if (totalshape==1){
	alert("ca marche");
	placement = soundManager.createSound({id : "placement", url:language+"place.mp3" });
	soundManager.stopAll();
	//patrickSpeak(begin);
	placement.play();}
	
	}	
	
function  sound_sucess(){
	success= soundManager.createSound({id : "success", url:language+"success.mp3" });
	soundManager.stopAll();
	success.play();
	}		


function mute(){
if (!soundManager.muted){
soundManager.mute();}
else
soundManager.unmute();
}	





	



	
	