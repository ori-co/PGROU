<?php
// On récupère les valeurs postées
$json=$_POST['cache'];
$nom =$_POST['nom'];

//Si le nom est vide, on réaffiche le formulaire avec un message d'erreur
if(strcmp($nom,"")==0){
	
echo"   <center><div style=\"color:red\"> Le nom saisi est invalide </div>
					<br>
				<form action=\"enregistrer.php\" method=\"post\" >
					<input type=\"hidden\" id=\"cache\" name=\"cache\" value=\"$json\"/>
					<label>Nom de votre patron * : </label>
					<input type=\"text\" id=\"nom\" name=\"nom\" value=\"\"/>
					<br><br>
					<input type=\"submit\" style=\"border:none; padding:6px 0 6px 0;border-radius:8px;background:#70B144;font:bold 13px Arial;color:#fff;width:60px;\" value=\"Valider\" />
              </form></center>
       ";
	
	
	
}else{ // Sinon, on enregistre et on affiche un message de validation
$fichier=$nom.'.json';
$fp = fopen($fichier,'w');
fwrite($fp, $json);
fclose($fp);
 
echo(" <center><br><br><div style=\"color:green\">Enregistrement réussi ! ");
echo("<br> Votre patron a bien été enregistré dans le dossier PGROU. </div></center>");
}
?>