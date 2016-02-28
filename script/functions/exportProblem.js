///////////////////////////////////////////////////////////////////////////////////////////////////
            // Exporting
            // The export function builds a string with all the problem's inforation.
            // This string needs to follow a specific syntax to enable the loading of this problem afterwards.
            
            
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
                                \"color\":' + formItem.tint + ',\n\
                                \"rotation\":' + formItem.angle + ',\n\
                                \"anchorPoint\": {\n\
                                                     \"x\":' + formItem.x + ',\n\
                                                     \"y\":' + formItem.y + '}\n\
                                }';
                    } else {
                        json = json + '{\n\
                                \"shape\":\"square\",\n\
                               \"color\":' + formItem.tint + ',\n\
                                \"rotation\":' + formItem.angle + ',\n\
                                \"anchorPoint\": {\n\
                                                     \"x\":' + formItem.x + ',\n\
                                                     \"y\":' + formItem.y + '}\n\
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
                               \"color\":' + formItem.tint + ',\n\
                                \"rotation\":' + formItem.angle + ',\n\
                                \"anchorPoint\": {\n\
                                                     \"x\":' + formItem.x + ',\n\
                                                     \"y\":' + formItem.y + '}\n\
                                }';
                    } else {
                        json = json + '{\n\
                                \"shape\":\"trapeze\",\n\
                                \"color\":' + formItem.tint + ',\n\
                                \"rotation\":' + formItem.angle + ',\n\
                                \"anchorPoint\": {\n\
                                                     \"x\":' + formItem.x + ',\n\
                                                     \"y\":' + formItem.y + '}\n\
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
                                \"color\":' + formItem.tint + ',\n\
                                \"rotation\":' + formItem.angle + ',\n\
                                \"anchorPoint\": {\n\
                                                     \"x\":' + formItem.x + ',\n\
                                                     \"y\":' + formItem.y + '}\n\
                                }';
                    } else {
                        json = json + '{\n\
                                \"shape\":\"hexagon\",\n\
                                \"color\":' + formItem.tint + ',\n\
                                \"rotation\":' + formItem.angle + ',\n\
                                \"anchorPoint\": {\n\
                                                     \"x\":' + formItem.x + ',\n\
                                                     \"y\":' + formItem.y + '}\n\
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
                               \"color\":' + formItem.tint + ',\n\
                                \"rotation\":' + formItem.angle + ',\n\
                                \"anchorPoint\": {\n\
                                                     \"x\":' + formItem.x + ',\n\
                                                     \"y\":' + formItem.y + '}\n\
                                }';
                    } else {
                        json = json + '{\n\
                                \"shape\":\"triangleEqui\",\n\
                               \"color\":' + formItem.tint + ',\n\
                                \"rotation\":' + formItem.angle + ',\n\
                                \"anchorPoint\": {\n\
                                                     \"x\":' + formItem.x + ',\n\
                                                     \"y\":' + formItem.y + '}\n\
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
                               \"color\":' + formItem.tint + ',\n\
                                \"rotation\":' + formItem.angle + ',\n\
                                \"anchorPoint\": {\n\
                                                     \"x\":' + formItem.x + ',\n\
                                                     \"y\":' + formItem.y + '}\n\
                                }';
                    } else {
                        json = json + '{\n\
                                \"shape\":\"triangleRect\",\n\
                               \"color\":' + formItem.tint + ',\n\
                                \"rotation\":' + formItem.angle + ',\n\
                                \"anchorPoint\": {\n\
                                                     \"x\":' + formItem.x + ',\n\
                                                     \"y\":' + formItem.y + '}\n\
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
                                \"color\":' + formItem.tint + ',\n\
                                \"rotation\":' + formItem.angle + ',\n\
                                \"anchorPoint\": {\n\
                                                     \"x\":' + formItem.x + ',\n\
                                                     \"y\":' + formItem.y + '}\n\
                                }';
                    } else {
                        json = json + '{\n\
                                \"shape\":\"diamond\",\n\
                               \"color\":' + formItem.tint + ',\n\
                                \"rotation\":' + formItem.angle + ',\n\
                                \"anchorPoint\": {\n\
                                                     \"x\":' + formItem.x + ',\n\
                                                     \"y\":' + formItem.y + '}\n\
                                }';
                        cpt = 1;
                    }
                }, this);
            
                json = json + '\n\
                        ]\n\
                        }\n\
                        }';
            
                //Open a pop-up to save the json file
                popup = window.open('', 'popup', 'height=200, width=400,left=' + ((screen.width - 400) / 2) + ',top=' + ((screen.height - 500) / 2));
                popup.document.write('<center><form action="save.php" method="post" >');
                popup.document.write('<input type="hidden" id="cache" name="cache" value=""/>');
                popup.document.write('<label>Name of your problem * : </label>');
                popup.document.write('<input type="text" id="nom" name="nom" value=""/>');
                popup.document.write('<br><br>');
                popup.document.getElementById('cache').value = json;
                popup.document.write('<input type="submit" style="border:none; padding:6px 0 6px 0;border-radius:8px;background:#70B144;font:bold 13px Arial;color:#fff;width:60px;" value="Submit" />');
                popup.document.write('</form></center>');
               
            }