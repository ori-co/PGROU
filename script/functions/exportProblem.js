///////////////////////////////////////////////////////////////////////////////////////////////////
            // Exporting
            // The export function builds a string with all the problem's inforation.
            // This string needs to follow a specific syntax to enable the loading of this problem afterwards.
			

            
            function exportProblem() {
            
                var json = '{\"problem\":{\"pattern\":[';
                var cpt = 0;
            
			
				for (var key in game.global.shapes){
					var shapeArray = game.global.shapes[key].shapesInPlace;
					
					for (i=0; i<shapeArray.length;i++){
						var formItem = shapeArray[i];
						json = json + '{\"shape\":\"'+ key +'\",\"color\":\"' + formItem.tint + '\",\"rotation\":\"' + formItem.frame + '\",\"anchorPoint\": {\"x\":\"' + formItem.x + '\",\"y\":\"' + formItem.y + '\"}}';
						if (i!= shapeArray.length -1 ) json += ',';
					}
					
				}
				
				json = json + ']},"distrib" :"on"}';
				
/*                 //Square
                F1.forEach(function (formItem) {
                    if (cpt !== 0) {
                        json = json + ',{\"shape\":\"square\",\"color\":\"' + formItem.tint + '\",\"rotation\":\"' + formItem.frame + '\",\"anchorPoint\": {\"x\":\"' + formItem.x + '\",\"y\":\"' + formItem.y + '\"}}';
                    } else {
                        json = json + '{\"shape\":\"square\",\"color\":\"' + formItem.tint + '\",\"rotation\":\"' + formItem.frame + '\",\"anchorPoint\": {\"x\":\"' + formItem.x + '\",\"y\":\"' + formItem.y + '\"}}';
                        cpt = 1;
                    }
                }, this);
            
                //Trapeze
                F2.forEach(function (formItem) {
                    if (cpt !== 0) {
                        json = json + ' ,{\"shape\":\"trapeze\",\"color\":\"' + formItem.tint + '\",\"rotation\":\"' + formItem.frame + '\",\"anchorPoint\": {\"x\":\"' + formItem.x + '\",\"y\":\"' + formItem.y + '\"}}';
                    } else {
                        json = json + '{\"shape\":\"trapeze\",\"color\":\"' + formItem.tint + '\",\"rotation\":\"' + formItem.frame + '\",\"anchorPoint\": {\"x\":\"' + formItem.x + '\",\"y\":\"' + formItem.y + '\"}}';
                        cpt = 1;
                    }
            
                }, this);
            
                //Hexagon
                F3.forEach(function (formItem) {
                    if (cpt !== 0) {
                        json = json + ',{\"shape\":\"hexagon\",\"color\":\"' + formItem.tint + '\",\"rotation\":\"' + formItem.frame + '\",\"anchorPoint\": {\"x\":\"' + formItem.x + '\",\"y\":\"' + formItem.y + '\"}}';
                    } else {
                        json = json + '{\"shape\":\"hexagon\",\"color\":\"' + formItem.tint + '\",\"rotation\":\"' + formItem.frame + '\",\"anchorPoint\": {\"x\":\"' + formItem.x + '\",\"y\":\"' + formItem.y + '\"}}';
                        cpt = 1;
                    }
                }, this);
            
                //Triangle Equilatéral
                F4.forEach(function (formItem) {
                    if (cpt !== 0) {
                        json = json + ',{\"shape\":\"triangleEqui\",\"color\":\"' + formItem.tint + '\",\"rotation\":\"' + formItem.frame + '\",\"anchorPoint\": {\"x\":\"' + formItem.x + '\",\"y\":\"' + formItem.y + '\"}}';
                    } else {
                        json = json + '{\"shape\":\"triangleEqui\",\"color\":\"' + formItem.tint + '\",\"rotation\":\"' + formItem.frame + '\",\"anchorPoint\": {\"x\":\"' + formItem.x + '\",\"y\":\"' + formItem.y + '\"}}';
                        cpt = 1;
                    }
                }, this);
            
                //Rectangular Triangle
                F5.forEach(function (formItem) {
                    if (cpt !== 0) {
                        json = json + ',{\"shape\":\"triangleRect\",\"color\":\"' + formItem.tint + '\",\"rotation\":\"' + formItem.frame + '\",\"anchorPoint\": {\"x\":\"' + formItem.x + '\",\"y\":\"' + formItem.y + '\"}}';
                    } else {
                        json = json + '{\"shape\":\"triangleRect\",\"color\":\"' + formItem.tint + '\",\"rotation\":\"' + formItem.frame + '\",\"anchorPoint\": {\"x\":\"' + formItem.x + '\",\"y\":\"' + formItem.y + '\"}}';
                        cpt = 1;
                    }
            
                }, this);
            
                //Diamond
                F6.forEach(function (formItem) {
                    if (cpt !== 0) {
                        json = json + ',{\"shape\":\"diamond\",\"color\":\"' + formItem.tint + '\",\"rotation\":\"' + formItem.frame + '\",\"anchorPoint\": {\"x\":\"' + formItem.x + '\",\"y\":\"' + formItem.y + '\"}}';
                    } else {
                        json = json + '{\"shape\":\"diamond\",\"color\":\"' + formItem.tint + '\",\"rotation\":\"' + formItem.frame + '\",\"anchorPoint\": {\"x\":\"' + formItem.x + '\",\"y\":\"' + formItem.y + '\"}}';
                        cpt = 1;
                    }
                }, this);
            
                json = json + ']},"distrib" :"on"}'; */
            
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