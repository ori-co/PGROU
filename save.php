<?php
// Load the posted values
$json=$_POST['cache'];
$name =$_POST['nom'];

//Check if the name is valid. If it is empty, print the form with a error message
if(strcmp($name,"")==0){
	
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
$file=$name.'.json';
$fp = fopen($file,'w');
fwrite($fp, $json);
fclose($fp);
 
/*
$path = 'C:\Users\Laura\Documents\xampp\htdocs\PGROU\\'; // local path of the json file
$full_path=$path.$fichier; 

$file_name = basename($full_path);
 
ini_set('zlib.output_compression', 0);
$date = gmdate(DATE_RFC1123);
 
header('Pragma: public');
header('Cache-Control: must-revalidate, pre-check=0, post-check=0, max-age=0');
 
header('Content-Tranfer-Encoding: none');
header('Content-Length: '.filesize($full_path));
header('Content-MD5: '.base64_encode(md5_file($full_path)));
header('Content-Type: application/octetstream; name="'.$file_name.'"');
header('Content-Disposition: attachment; filename="'.$file_name.'"');
 
header('Date: '.$date);
header('Expires: '.gmdate(DATE_RFC1123, time()+1));
header('Last-Modified: '.gmdate(DATE_RFC1123, filemtime($full_path)));
 
readfile($full_path);
exit;
*/ 
 
 
 
echo(" <center><br><br><div style=\"color:green\">Enregistrement effectu&eacute;! ");

}
?>