///////////////////////////////////////////////////////////////////////////////////////////////////
            // Exporting
            // The export function builds a string with all the problem's inforation.
            // This string needs to follow a specific syntax to enable the loading of this problem afterwards.
			
			function convertColor (c){
				var col ="";
				switch (c){
					case 8646144 : col= "0x83EE00";
					break;
					case 16514560 : col= "0xFBFE00";
					break;
					case 363190 : col= "0x058AB6";
					break;
					case 14942300 : col= "0xE4005C";
					break;
					case 8390590 : col= "0x8007BE";
					break;
					case 16745216 : col= "0xFF8300";
					break;
					default : col = "0x93AFBD";
					break;	
				}
				return col;
			}
            
            function exportProblem() {
            
                var json = '{\n\
                             \"problem\":\n\
                                            {\n\
                                            \"pattern\":[\n\
                            ';
                var cpt = 0;
            
                //Square
                F1.forEach(function (formItem) {
                    if (cpt !== 0) {
                        json = json + ',\n\
                                {\n\
                                \"shape\":\"square\",\n\
                                \"color\":\"' + convertColor(formItem.tint) + '\",\n\
                                \"rotation\":\"' + formItem.frame + '\",\n\
                                \"anchorPoint\": {\n\
                                                     \"x\":\"' + formItem.x + '\",\n\
                                                     \"y\":\"' + formItem.y + '\"}\n\
                                }';
                    } else {
                        json = json + '{\n\
                                \"shape\":\"square\",\n\
                                \"color\":\"' + formItem.tint + '\",\n\
                                \"rotation\":\"' + formItem.frame + '\",\n\
                                \"anchorPoint\": {\n\
                                                     \"x\":\"' + formItem.x + '\",\n\
                                                     \"y\":\"' + formItem.y + '\"}\n\
                                }';
                        cpt = 1;
                    }
                }, this);
            
                //Trapeze
                F2.forEach(function (formItem) {
                    if (cpt !== 0) {
                        json = json + ' ,\n\
                                {\n\
                                \"shape\":\"trapeze\",\n\
                                \"color\":\"' + formItem.tint + '\",\n\
                                \"rotation\":\"' + formItem.frame + '\",\n\
                                \"anchorPoint\": {\n\
                                                     \"x\":\"' + formItem.x + '\",\n\
                                                     \"y\":\"' + formItem.y + '\"}\n\
                                }';
                    } else {
                        json = json + '{\n\
                                \"shape\":\"trapeze\",\n\
                                \"color\":\"' + formItem.tint + '\",\n\
                                \"rotation\":\"' + formItem.frame + '\",\n\
                                \"anchorPoint\": {\n\
                                                     \"x\":\"' + formItem.x + '\",\n\
                                                     \"y\":\"' + formItem.y + '\"}\n\
                                }';
                        cpt = 1;
                    }
            
                }, this);
            
                //Hexagon
                F3.forEach(function (formItem) {
                    if (cpt !== 0) {
                        json = json + ',\n\
                                {\n\
                                \"shape\":\"hexagon\",\n\
                                \"color\":\"' + formItem.tint + '\",\n\
                                \"rotation\":\"' + formItem.frame + '\",\n\
                                \"anchorPoint\": {\n\
                                                     \"x\":\"' + formItem.x + '\",\n\
                                                     \"y\":\"' + formItem.y + '\"}\n\
                                }';
                    } else {
                        json = json + '{\n\
                                \"shape\":\"hexagon\",\n\
                                \"color\":\"' + formItem.tint + '\",\n\
                                \"rotation\":\"' + formItem.frame + '\",\n\
                                \"anchorPoint\": {\n\
                                                     \"x\":\"' + formItem.x + '\",\n\
                                                     \"y\":\"' + formItem.y + '\"}\n\
                                }';
                        cpt = 1;
                    }
                }, this);
            
                //Triangle Equilatéral
                F4.forEach(function (formItem) {
                    if (cpt !== 0) {
                        json = json + ',\n\
                                {\n\
                                \"shape\":\"triangleEqui\",\n\
                                \"color\":\"' + formItem.tint + '\",\n\
                                \"rotation\":\"' + formItem.frame + '\",\n\
                                \"anchorPoint\": {\n\
                                                     \"x\":\"' + formItem.x + '\",\n\
                                                     \"y\":\"' + formItem.y + '\"}\n\
                                }';
                    } else {
                        json = json + '{\n\
                                \"shape\":\"triangleEqui\",\n\
                                \"color\":\"' + formItem.tint + '\",\n\
                                \"rotation\":\"' + formItem.frame + '\",\n\
                                \"anchorPoint\": {\n\
                                                     \"x\":\"' + formItem.x + '\",\n\
                                                     \"y\":\"' + formItem.y + '\"}\n\
                                }';
                        cpt = 1;
                    }
                }, this);
            
                //Rectangular Triangle
                F5.forEach(function (formItem) {
                    if (cpt !== 0) {
                        json = json + ',\n\
                                {\n\
                                \"shape\":\"triangleRect\",\n\
                                \"color\":\"' + formItem.tint + '\",\n\
                                \"rotation\":\"' + formItem.frame + '\",\n\
                                \"anchorPoint\": {\n\
                                                     \"x\":\"' + formItem.x + '\",\n\
                                                     \"y\":\"' + formItem.y + '\"}\n\
                                }';
                    } else {
                        json = json + '{\n\
                                \"shape\":\"triangleRect\",\n\
                                \"color\":\"' + formItem.tint + '\",\n\
                                \"rotation\":\"' + formItem.frame + '\",\n\
                                \"anchorPoint\": {\n\
                                                     \"x\":\"' + formItem.x + '\",\n\
                                                     \"y\":\"' + formItem.y + '\"}\n\
                                }';
                        cpt = 1;
                    }
            
                }, this);
            
                //Diamond
                F6.forEach(function (formItem) {
                    if (cpt !== 0) {
                        json = json + ',\n\
                                {\n\
                                \"shape\":\"diamond\",\n\
                                \"color\":\"' + formItem.tint + '\",\n\
                                \"rotation\":\"' + formItem.frame + '\",\n\
                                \"anchorPoint\": {\n\
                                                     \"x\":\"' + formItem.x + '\",\n\
                                                     \"y\":\"' + formItem.y + '\"}\n\
                                }';
                    } else {
                        json = json + '{\n\
                                \"shape\":\"diamond\",\n\
                                \"color\":\"' + formItem.tint + '\",\n\
                                \"rotation\":\"' + formItem.frame + '\",\n\
                                \"anchorPoint\": {\n\
                                                     \"x\":\"' + formItem.x + '\",\n\
                                                     \"y\":\"' + formItem.y + '\"}\n\
                                }';
                        cpt = 1;
                    }
                }, this);
            
                json = json + '\n\
                        ]\n\
                        }\n\
                        }';
            
                //Open a pop-up to save the json file
                popup = window.open('', 'popup', 'height=300, width=600,left=' + ((screen.width - 400) / 2) + ',top=' + ((screen.height - 500) / 2));
                popup.document.write('<html><head><meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\"/><link rel=\"stylesheet\" type=\"text/css\" href=\"css/saveStyle.css\"></head><body><br>');
				popup.document.write('<center><form action="save.php" method="post" >');
                popup.document.write('<input type="hidden" id="cache" name="cache" value=""/>');
                popup.document.write('<label>'+exportInputName+' * : </label>');
                popup.document.write('<input type="text" id="nom" name="nom" value=""/>');
                popup.document.write('<br><br>');
                popup.document.getElementById('cache').value = json;
                popup.document.write('<input type="submit" id="save" value="'+saveProblem+'" />');
                popup.document.write('</form></center></body></html>');
               
            }