// Sound click functions
function trashBinSound() {
    binSound.play();
}

function clickerBack(){
click = soundManager.createSound({id : "click", url: language+"click.mp3", 
onfinish: function(){ self.location.href='index.html'}});
click.play();
}

function clicker(){
	clickSound.play();
	}
	


	



	
	