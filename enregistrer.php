<?php
$json=$_POST['cache'];
$nom =$_POST['nom'];

$fichier=$nom.'.json';
$fp = fopen($fichier,'w');
fwrite($fp, $json);
fclose($fp);
 
echo("Enregistrement réussi ! ")
?>