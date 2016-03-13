<?php
// Load the posted values
$json=$_POST['cache'];
$name =$_POST['nom'];

//Check if the name is valid. If it is empty, print the form with a error message
if(strcmp($name,"")==0){
	
echo"  
	<html>
		<head>
		<meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\" />
		<title></title>
		<link rel=\"stylesheet\" type=\"text/css\" href=\"css/saveStyle.css\">
		<script type=\"text/javascript\" src=\"script/text/fr_buttons.js\"></script>
		<script>
		function buttons(){ 
				document.getElementById('save').value=saveProblem;
				document.getElementById('error').innerHTML=errorNameExport;
				document.getElementById('name').innerHTML=exportInputName;
				}
		
		</script>
		</head>
		
		<body onload=\"buttons();\">
			<br>
			<center>
				<div class=\"error\" id=\"error\"> </div>
					
				<form action=\"save.php\" method=\"post\" >
					<input type=\"hidden\" id=\"cache\" name=\"cache\" value=\"$json\"/>
						<br><br>
					<label id=\"name\"></label>
					<input type=\"text\" id=\"nom\" name=\"nom\" value=\"\"/>
						<br><br>
					<input type=\"submit\" id=\"save\"  value=\"\" />
				</form>
			</center>
		</body>
	</html>
       ";
	
	
	
}else{ // Otherwhise, we save and print a success message

//We save the file on the server
$file='library\\'.$name.'.json';
$fp = fopen($file,'w');
fwrite($fp, $json);
fclose($fp);
 
//We open a window for download
$path = ''; // local path of the json file
$full_path=$path.$file; 

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
}
?>