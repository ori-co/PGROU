<?php
// Load the posted values
$json=$_POST['cache'];
$nom =$_POST['nom'];

//Check if the name is valid. If it is empty, print the form with a error message
if(strcmp($nom,"")==0){
	
echo"   <center><div style=\"color:red\"> Invalid name! </div>
					<br>
				<form action=\"save.php\" method=\"post\" >
					<input type=\"hidden\" id=\"cache\" name=\"cache\" value=\"$json\"/>
					<label>Name of your problem * : </label>
					<input type=\"text\" id=\"nom\" name=\"nom\" value=\"\"/>
					<br><br>
					<input type=\"submit\" style=\"border:none; padding:6px 0 6px 0;border-radius:8px;background:#70B144;font:bold 13px Arial;color:#fff;width:60px;\" value=\"Submit\" />
              </form></center>
       ";
	
	
	
}else{ // Otherwhise, we save and print a success message
$fichier=$nom.'.json';
$fp = fopen($fichier,'w');
fwrite($fp, $json);
fclose($fp);
 
echo(" <center><br><br><div style=\"color:green\">Enregistrement effectu&eacute;! ");
echo("<br> Le probl&egrave;me a &eacute;t&eacute; enregistr&eacute; dans le dossier PGROU. </div></center>");
}
?>