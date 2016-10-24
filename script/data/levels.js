define ([
	], function(
		) {

var levels = [];
levels[1] = '{"problem":{ "pattern":[{ "shape":"square","color":"0xE4005C","rotation":"0", "anchorPoint": {"x":"955","y":"359"} }, { "shape":"square","color":"0x83EE00","rotation":"0", "anchorPoint": {"x":"891","y":"359"} }, { "shape":"square","color":"0xE4005C","rotation":"0", "anchorPoint": {"x":"827","y":"359"} }, { "shape":"square","color":"0x83EE00","rotation":"0", "anchorPoint": {"x":"740","y":"361"} }, { "shape":"square","color":"0x83EE00","rotation":"0", "anchorPoint": {"x":"955","y":"295"} }, { "shape":"square","color":"0xE4005C","rotation":"0", "anchorPoint": {"x":"891","y":"295"} }, { "shape":"square","color":"0x83EE00","rotation":"0", "anchorPoint": {"x":"827","y":"295"} }, { "shape":"square","color":"0xE4005C","rotation":"0", "anchorPoint": {"x":"955","y":"231"} }, { "shape":"square","color":"0x83EE00","rotation":"0", "anchorPoint": {"x":"891","y":"231"} }, { "shape":"square","color":"0xE4005C","rotation":"0", "anchorPoint": {"x":"827","y":"231"} }, { "shape":"square","color":"0xE4005C","rotation":"0", "anchorPoint": {"x":"740","y":"297"} }, { "shape":"square","color":"0x83EE00","rotation":"0", "anchorPoint": {"x":"676","y":"297"} }, { "shape":"square","color":"0xE4005C","rotation":"0", "anchorPoint": {"x":"676","y":"361"} }, { "shape":"square","color":"0x83EE00","rotation":"0", "anchorPoint": {"x":"580","y":"361"} }]}}';
levels[2] = '{"problem":{ "pattern":[{ "shape":"square","color":"0x83EE00","rotation":"1", "anchorPoint": {"x":"721","y":"127"} }, { "shape":"square","color":"0xE4005C","rotation":"1", "anchorPoint": {"x":"777","y":"159"} }, { "shape":"square","color":"0x83EE00","rotation":"1", "anchorPoint": {"x":"833","y":"191"} }, { "shape":"square","color":"0x83EE00","rotation":"1", "anchorPoint": {"x":"745","y":"215"} }, { "shape":"square","color":"0xE4005C","rotation":"1", "anchorPoint": {"x":"689","y":"183"} }, { "shape":"square","color":"0xE4005C","rotation":"1", "anchorPoint": {"x":"801","y":"247"} }, { "shape":"square","color":"0x83EE00","rotation":"1", "anchorPoint": {"x":"769","y":"303"} }, { "shape":"square","color":"0xE4005C","rotation":"1", "anchorPoint": {"x":"713","y":"271"} }, { "shape":"square","color":"0x83EE00","rotation":"1", "anchorPoint": {"x":"657","y":"239"} }]},"distrib" :"on"}';
levels[3] = '{"problem":{ "pattern":[{ "shape":"triangleEqui","color":"0xFBFE00","rotation":"2", "anchorPoint": {"x":"658","y":"245"} }, { "shape":"triangleEqui","color":"0xFF8300","rotation":"0", "anchorPoint": {"x":"626","y":"253"} }, { "shape":"triangleEqui","color":"0xFF8300","rotation":"0", "anchorPoint": {"x":"690","y":"253"} }, { "shape":"triangleEqui","color":"0xFF8300","rotation":"0", "anchorPoint": {"x":"658","y":"198"} }]},"distrib" :"on"}';
levels[4] = '{"problem":{ "pattern":[{ "shape":"square","color":"0xE4005C","rotation":"0", "anchorPoint": {"x":"743","y":"345"} }, { "shape":"square","color":"0xE4005C","rotation":"0", "anchorPoint": {"x":"679","y":"345"} }, { "shape":"square","color":"0xE4005C","rotation":"0", "anchorPoint": {"x":"743","y":"281"} }, { "shape":"square","color":"0xE4005C","rotation":"0", "anchorPoint": {"x":"679","y":"281"} }, { "shape":"triangleEqui","color":"0x058AB6","rotation":"0", "anchorPoint": {"x":"679","y":"221"} }, { "shape":"triangleEqui","color":"0x058AB6","rotation":"0", "anchorPoint": {"x":"743","y":"221"} }, { "shape":"triangleEqui","color":"0x058AB6","rotation":"2", "anchorPoint": {"x":"711","y":"213"} }, { "shape":"triangleEqui","color":"0x058AB6","rotation":"0", "anchorPoint": {"x":"710","y":"165"} }]},"distrib" :"off"}';
levels[5] = '{"problem":{ "pattern":[{ "shape":"square","color":"0xFF8300","rotation":"0", "anchorPoint": {"x":"998","y":"410"} }, { "shape":"square","color":"0xFF8300","rotation":"0", "anchorPoint": {"x":"998","y":"346"} }, { "shape":"square","color":"0xFF8300","rotation":"0", "anchorPoint": {"x":"934","y":"410"} }, { "shape":"square","color":"0xFF8300","rotation":"0", "anchorPoint": {"x":"934","y":"346"} }, { "shape":"square","color":"0xFF8300","rotation":"0", "anchorPoint": {"x":"998","y":"282"} }, { "shape":"square","color":"0xFF8300","rotation":"0", "anchorPoint": {"x":"934","y":"282"} }, { "shape":"square","color":"0xFF8300","rotation":"0", "anchorPoint": {"x":"998","y":"218"} }, { "shape":"square","color":"0xFF8300","rotation":"0", "anchorPoint": {"x":"934","y":"218"} }, { "shape":"square","color":"0x058AB6","rotation":"0", "anchorPoint": {"x":"870","y":"410"} }, { "shape":"square","color":"0x8007BE","rotation":"0", "anchorPoint": {"x":"806","y":"410"} }, { "shape":"square","color":"0x8007BE","rotation":"0", "anchorPoint": {"x":"742","y":"410"} }, { "shape":"square","color":"0x058AB6","rotation":"0", "anchorPoint": {"x":"678","y":"410"} }, { "shape":"square","color":"0x058AB6","rotation":"0", "anchorPoint": {"x":"870","y":"346"} }, { "shape":"square","color":"0x058AB6","rotation":"0", "anchorPoint": {"x":"870","y":"282"} }, { "shape":"square","color":"0x8007BE","rotation":"0", "anchorPoint": {"x":"806","y":"346"} }, { "shape":"square","color":"0x8007BE","rotation":"0", "anchorPoint": {"x":"742","y":"346"} }, { "shape":"square","color":"0x058AB6","rotation":"0", "anchorPoint": {"x":"806","y":"282"} }, { "shape":"square","color":"0x058AB6","rotation":"0", "anchorPoint": {"x":"742","y":"282"} }, { "shape":"square","color":"0x058AB6","rotation":"0", "anchorPoint": {"x":"678","y":"346"} }, { "shape":"square","color":"0x058AB6","rotation":"0", "anchorPoint": {"x":"678","y":"282"} }, { "shape":"square","color":"0xFF8300","rotation":"0", "anchorPoint": {"x":"614","y":"410"} }, { "shape":"square","color":"0xFF8300","rotation":"0", "anchorPoint": {"x":"614","y":"346"} }, { "shape":"square","color":"0xFF8300","rotation":"0", "anchorPoint": {"x":"614","y":"282"} }, { "shape":"square","color":"0xFF8300","rotation":"0", "anchorPoint": {"x":"550","y":"410"} }, { "shape":"square","color":"0xFF8300","rotation":"0", "anchorPoint": {"x":"550","y":"346"} }, { "shape":"square","color":"0xFF8300","rotation":"0", "anchorPoint": {"x":"550","y":"282"} }, { "shape":"square","color":"0xFF8300","rotation":"0", "anchorPoint": {"x":"614","y":"218"} }, { "shape":"square","color":"0xFF8300","rotation":"0", "anchorPoint": {"x":"550","y":"218"} }, { "shape":"triangleEqui","color":"0x8007BE","rotation":"0", "anchorPoint": {"x":"999","y":"158"} }, { "shape":"triangleEqui","color":"0x8007BE","rotation":"0", "anchorPoint": {"x":"613","y":"158"} }, { "shape":"triangleEqui","color":"0x8007BE","rotation":"2", "anchorPoint": {"x":"581","y":"150"} }, { "shape":"triangleEqui","color":"0x8007BE","rotation":"0", "anchorPoint": {"x":"549","y":"158"} }, { "shape":"triangleEqui","color":"0x8007BE","rotation":"0", "anchorPoint": {"x":"582","y":"102"} }, { "shape":"triangleEqui","color":"0x8007BE","rotation":"2", "anchorPoint": {"x":"967","y":"150"} }, { "shape":"triangleEqui","color":"0x8007BE","rotation":"0", "anchorPoint": {"x":"935","y":"158"} }, { "shape":"triangleEqui","color":"0x8007BE","rotation":"0", "anchorPoint": {"x":"966","y":"102"} }]},"distrib" :"on"}';
levels[6] = '{"problem":{ "pattern":[{ "shape":"triangleRect","color":"0x83EE00","rotation":"0", "anchorPoint": {"x":"682","y":"216"} }, { "shape":"triangleRect","color":"0x83EE00","rotation":"2", "anchorPoint": {"x":"683","y":"248"} }, { "shape":"triangleRect","color":"0xE4005C","rotation":"2", "anchorPoint": {"x":"650","y":"216"} }, { "shape":"triangleRect","color":"0xE4005C","rotation":"0", "anchorPoint": {"x":"649","y":"184"} }, { "shape":"triangleRect","color":"0xE4005C","rotation":"0", "anchorPoint": {"x":"714","y":"249"} }, { "shape":"triangleRect","color":"0xE4005C","rotation":"2", "anchorPoint": {"x":"715","y":"281"} }]},"distrib" :"on"}';
levels[7] = '{"problem":{ "pattern":[{ "shape":"triangleRect","color":"0x8007BE","rotation":"0", "anchorPoint": {"x":"680","y":"159"} }, { "shape":"triangleRect","color":"0xFBFE00","rotation":"2", "anchorPoint": {"x":"681","y":"191"} }, { "shape":"triangleRect","color":"0xE4005C","rotation":"0", "anchorPoint": {"x":"649","y":"191"} }, { "shape":"triangleRect","color":"0xE4005C","rotation":"2", "anchorPoint": {"x":"649","y":"223"} }, { "shape":"triangleRect","color":"0xE4005C","rotation":"0", "anchorPoint": {"x":"713","y":"191"} }, { "shape":"triangleRect","color":"0xFBFE00","rotation":"0", "anchorPoint": {"x":"681","y":"223"} }, { "shape":"triangleRect","color":"0xE4005C","rotation":"2", "anchorPoint": {"x":"713","y":"223"} }, { "shape":"triangleRect","color":"0x8007BE","rotation":"2", "anchorPoint": {"x":"681","y":"255"} }]},"distrib" :"on"}';
levels[8] = '{"problem":{ "pattern":[{ "shape":"square","color":"0x058AB6","rotation":"0", "anchorPoint": {"x":"662","y":"231"} }, { "shape":"triangleRect","color":"0xFBFE00","rotation":"0", "anchorPoint": {"x":"662","y":"183"} }, { "shape":"triangleRect","color":"0xFBFE00","rotation":"1", "anchorPoint": {"x":"710","y":"231"} }, { "shape":"triangleRect","color":"0xFBFE00","rotation":"3", "anchorPoint": {"x":"614","y":"230"} }, { "shape":"triangleRect","color":"0xFBFE00","rotation":"2", "anchorPoint": {"x":"662","y":"279"} }]},"distrib" :"off"}';
levels[9] = '{"problem":{ "pattern":[{ "shape":"triangleEqui","color":"0xFF8300","rotation":"2", "anchorPoint": {"x":"630","y":"293"} }, { "shape":"triangleEqui","color":"0xFF8300","rotation":"0", "anchorPoint": {"x":"628","y":"181"} }, { "shape":"triangleRect","color":"0xFBFE00","rotation":"0", "anchorPoint": {"x":"629","y":"257"} }, { "shape":"triangleRect","color":"0x83EE00","rotation":"1", "anchorPoint": {"x":"613","y":"241"} }, { "shape":"triangleRect","color":"0x83EE00","rotation":"3", "anchorPoint": {"x":"645","y":"240"} }, { "shape":"triangleRect","color":"0xFBFE00","rotation":"2", "anchorPoint": {"x":"628","y":"225"} }]},"distrib" :"on"}';
levels[10] = '{"problem":{ "pattern":[{ "shape":"square","color":"0x058AB6","rotation":"0", "anchorPoint": {"x":"680","y":"218"} }, { "shape":"triangleEqui","color":"0x83EE00","rotation":"0", "anchorPoint": {"x":"680","y":"158"} }, { "shape":"triangleRect","color":"0x058AB6","rotation":"1", "anchorPoint": {"x":"728","y":"217"} }, { "shape":"triangleRect","color":"0x058AB6","rotation":"3", "anchorPoint": {"x":"632","y":"218"} }, { "shape":"triangleRect","color":"0x83EE00","rotation":"0", "anchorPoint": {"x":"616","y":"235"} }, { "shape":"triangleRect","color":"0x83EE00","rotation":"2", "anchorPoint": {"x":"615","y":"203"} }, { "shape":"triangleRect","color":"0x83EE00","rotation":"2", "anchorPoint": {"x":"678","y":"266"} }]},"distrib" :"on"}';
levels[11] = '{"problem":{ "pattern":[{ "shape":"diamond","color":"0x83EE00","rotation":"0", "anchorPoint": {"x":"751","y":"156"} }, { "shape":"diamond","color":"0xFBFE00","rotation":"0", "anchorPoint": {"x":"783","y":"212"} }, { "shape":"diamond","color":"0x83EE00","rotation":"0", "anchorPoint": {"x":"751","y":"268"} }, { "shape":"diamond","color":"0xFBFE00","rotation":"0", "anchorPoint": {"x":"719","y":"212"} }]}, "distrib":"on"}';
levels[12] = '{"problem":{ "pattern":[{ "shape":"diamond","color":"0xE4005C","rotation":"4", "anchorPoint": {"x":"784","y":"212"} }, { "shape":"diamond","color":"0xFF8300","rotation":"0", "anchorPoint": {"x":"736","y":"240"} }, { "shape":"diamond","color":"0xE4005C","rotation":"2", "anchorPoint": {"x":"784","y":"268"} }, { "shape":"diamond","color":"0xE4005C","rotation":"4", "anchorPoint": {"x":"688","y":"268"} }, { "shape":"diamond","color":"0xE4005C","rotation":"2", "anchorPoint": {"x":"688","y":"212"} }]},"distrib":"on"}';
levels[13] = '{"problem":{"pattern":[{"shape":"hexagon","color":"0x058AB6","rotation":"0","anchorPoint": {"x":"498","y":"342"}},{"shape":"hexagon","color":"0x8007BE","rotation":"0","anchorPoint": {"x":"594","y":"398"}},{"shape":"hexagon","color":"0x8007BE","rotation":"0","anchorPoint": {"x":"498","y":"230"}},{"shape":"hexagon","color":"0x058AB6","rotation":"0","anchorPoint": {"x":"690","y":"342"}},{"shape":"hexagon","color":"0xFBFE00","rotation":"0","anchorPoint": {"x":"594","y":"286"}},{"shape":"hexagon","color":"0x058AB6","rotation":"0","anchorPoint": {"x":"594","y":"174"}},{"shape":"hexagon","color":"0x8007BE","rotation":"0","anchorPoint": {"x":"690","y":"230"}}]},"distrib" :"on"}';
levels[14] = '{"problem":{ "pattern":[{ "shape":"hexagon","color":"0xE4005C","rotation":"0", "anchorPoint": {"x":"699","y":"208"} }, { "shape":"triangleEqui","color":"0x83EE00","rotation":"3", "anchorPoint": {"x":"602","y":"209"} }, { "shape":"diamond","color":"0xFF8300","rotation":"2", "anchorPoint": {"x":"683","y":"292"} }, { "shape":"diamond","color":"0xFF8300","rotation":"4", "anchorPoint": {"x":"682","y":"124"} }]},"distrib" :"off"}';
levels[15] = '{"problem":{ "pattern":[{ "shape":"square","color":"0xE4005C","rotation":"0", "anchorPoint": {"x":"569","y":"192"} }, { "shape":"square","color":"0xE4005C","rotation":"0", "anchorPoint": {"x":"569","y":"128"} }, { "shape":"square","color":"0xE4005C","rotation":"0", "anchorPoint": {"x":"569","y":"64"} }, { "shape":"square","color":"0x83EE00","rotation":"0", "anchorPoint": {"x":"633","y":"192"} }, { "shape":"square","color":"0x83EE00","rotation":"0", "anchorPoint": {"x":"633","y":"128"} }, { "shape":"square","color":"0xFF8300","rotation":"0", "anchorPoint": {"x":"697","y":"192"} }, { "shape":"hexagon","color":"0x8007BE","rotation":"0", "anchorPoint": {"x":"697","y":"280"} }, { "shape":"triangleEqui","color":"0x8007BE","rotation":"2", "anchorPoint": {"x":"569","y":"244"} }, { "shape":"triangleEqui","color":"0x8007BE","rotation":"2", "anchorPoint": {"x":"825","y":"244"} }, { "shape":"diamond","color":"0x8007BE","rotation":"4", "anchorPoint": {"x":"617","y":"308"} }, { "shape":"diamond","color":"0x8007BE","rotation":"2", "anchorPoint": {"x":"617","y":"252"} }, { "shape":"diamond","color":"0x8007BE","rotation":"4", "anchorPoint": {"x":"777","y":"252"} }, { "shape":"diamond","color":"0x8007BE","rotation":"2", "anchorPoint": {"x":"777","y":"308"} }]},"distrib" :"off"}';
levels[16] = '{"problem":{ "pattern":[{ "shape":"trapeze","color":"0x058AB6","rotation":"0", "anchorPoint": {"x":"612","y":"203"} }, { "shape":"trapeze","color":"0xFF8300","rotation":"6", "anchorPoint": {"x":"613","y":"260"} }]},"distrib" :"on"}';
levels[17] = '{"problem":{ "pattern":[{ "shape":"trapeze","color":"0xE4005C","rotation":"0", "anchorPoint": {"x":"748","y":"334"} }, { "shape":"trapeze","color":"0xE4005C","rotation":"6", "anchorPoint": {"x":"749","y":"279"} }, { "shape":"trapeze","color":"0xFBFE00","rotation":"2", "anchorPoint": {"x":"675","y":"299"} }, { "shape":"trapeze","color":"0xFBFE00","rotation":"10", "anchorPoint": {"x":"821","y":"300"} }]},"distrib" :"on"}';
levels[18] = '{"problem":{ "pattern":[{ "shape":"trapeze","color":"0xFBFE00","rotation":"6", "anchorPoint": {"x":"675","y":"301"} }, { "shape":"trapeze","color":"0xFBFE00","rotation":"0", "anchorPoint": {"x":"674","y":"244"} }, { "shape":"trapeze","color":"0x83EE00","rotation":"6", "anchorPoint": {"x":"675","y":"189"} }, { "shape":"trapeze","color":"0x83EE00","rotation":"0", "anchorPoint": {"x":"674","y":"356"} }, { "shape":"trapeze","color":"0x058AB6","rotation":"6", "anchorPoint": {"x":"770","y":"245"} }, { "shape":"trapeze","color":"0x058AB6","rotation":"6", "anchorPoint": {"x":"578","y":"245"} }]},"distrib" :"on"}';
levels[19] = '{"problem":{ "pattern":[{ "shape":"trapeze","color":"0xE4005C","rotation":"9", "anchorPoint": {"x":"692","y":"232"} }, { "shape":"trapeze","color":"0xE4005C","rotation":"3", "anchorPoint": {"x":"743","y":"231"} }, { "shape":"trapeze","color":"0xFF8300","rotation":"9", "anchorPoint": {"x":"804","y":"232"} }, { "shape":"trapeze","color":"0xFF8300","rotation":"3", "anchorPoint": {"x":"631","y":"233"} }]},"distrib" :"on"}';
levels[20] = '{"problem":{ "pattern":[{ "shape":"square","color":"0x83EE00","rotation":"0", "anchorPoint": {"x":"750","y":"303"} }, { "shape":"square","color":"0x83EE00","rotation":"0", "anchorPoint": {"x":"750","y":"239"} }, { "shape":"trapeze","color":"0x058AB6","rotation":"6", "anchorPoint": {"x":"756","y":"363"} }, { "shape":"trapeze","color":"0x058AB6","rotation":"0", "anchorPoint": {"x":"852","y":"362"} }, { "shape":"trapeze","color":"0x058AB6","rotation":"0", "anchorPoint": {"x":"660","y":"362"} }, { "shape":"triangleRect","color":"0x83EE00","rotation":"0", "anchorPoint": {"x":"749","y":"191"} }, { "shape":"triangleRect","color":"0x83EE00","rotation":"3", "anchorPoint": {"x":"766","y":"175"} }, { "shape":"triangleRect","color":"0x83EE00","rotation":"2", "anchorPoint": {"x":"750","y":"159"} }, { "shape":"triangleRect","color":"0x83EE00","rotation":"1", "anchorPoint": {"x":"734","y":"174"} }, { "shape":"diamond","color":"0xFBFE00","rotation":"1", "anchorPoint": {"x":"774","y":"97"} }]},"distrib" :"off"}';
levels[21] = '{"problem":{ "pattern":[{ "shape":"trapeze","color":"0xE4005C","rotation":"6", "anchorPoint": {"x":"704","y":"322"} }, { "shape":"trapeze","color":"0xFBFE00","rotation":"4", "anchorPoint": {"x":"757","y":"246"} }, { "shape":"trapeze","color":"0xFBFE00","rotation":"8", "anchorPoint": {"x":"651","y":"246"} }, { "shape":"trapeze","color":"0xE4005C","rotation":"6", "anchorPoint": {"x":"704","y":"210"} }]},"distrib" :"on"}';
levels[22] = '{"problem":{ "pattern":[{ "shape":"trapeze","color":"0xFBFE00","rotation":"0", "anchorPoint": {"x":"718","y":"315"} }, { "shape":"trapeze","color":"0xFBFE00","rotation":"2", "anchorPoint": {"x":"644","y":"280"} }, { "shape":"trapeze","color":"0xFBFE00","rotation":"4", "anchorPoint": {"x":"645","y":"184"} }, { "shape":"trapeze","color":"0xFBFE00","rotation":"6", "anchorPoint": {"x":"719","y":"148"} }, { "shape":"trapeze","color":"0xFBFE00","rotation":"8", "anchorPoint": {"x":"793","y":"184"} }, { "shape":"trapeze","color":"0xFBFE00","rotation":"10", "anchorPoint": {"x":"791","y":"280"} }, { "shape":"triangleEqui","color":"0xFBFE00","rotation":"0", "anchorPoint": {"x":"867","y":"315"} }, { "shape":"triangleEqui","color":"0xFBFE00","rotation":"2", "anchorPoint": {"x":"716","y":"411"} }, { "shape":"triangleEqui","color":"0xFBFE00","rotation":"0", "anchorPoint": {"x":"563","y":"304"} }, { "shape":"triangleEqui","color":"0xFBFE00","rotation":"2", "anchorPoint": {"x":"877","y":"141"} }, { "shape":"triangleEqui","color":"0xFBFE00","rotation":"0", "anchorPoint": {"x":"718","y":"46"} }, { "shape":"triangleEqui","color":"0xFBFE00","rotation":"2", "anchorPoint": {"x":"561","y":"142"} }]},"distrib" :"on"}';
levels[23] = '{"problem":{ "pattern":[{ "shape":"trapeze","color":"0x83EE00","rotation":"6", "anchorPoint": {"x":"709","y":"100"} }, { "shape":"trapeze","color":"0x83EE00","rotation":"0", "anchorPoint": {"x":"742","y":"211"} }, { "shape":"triangleEqui","color":"0x058AB6","rotation":"2", "anchorPoint": {"x":"709","y":"148"} }, { "shape":"triangleEqui","color":"0x058AB6","rotation":"0", "anchorPoint": {"x":"741","y":"156"} }]},"distrib" :"on"}';
levels[24] = '{"problem":{ "pattern":[{ "shape":"trapeze","color":"0x83EE00","rotation":"0", "anchorPoint": {"x":"712","y":"161"} }, { "shape":"trapeze","color":"0x83EE00","rotation":"6", "anchorPoint": {"x":"711","y":"218"} }, { "shape":"triangleEqui","color":"0x8007BE","rotation":"2", "anchorPoint": {"x":"712","y":"266"} }, { "shape":"triangleEqui","color":"0x8007BE","rotation":"0", "anchorPoint": {"x":"711","y":"106"} }]},"distrib" :"on"}';
levels[25] = '{"problem":{ "pattern":[{ "shape":"square","color":"0xFBFE00","rotation":"0", "anchorPoint": {"x":"763","y":"309"} }, { "shape":"square","color":"0xFBFE00","rotation":"0", "anchorPoint": {"x":"763","y":"245"} }, { "shape":"square","color":"0xFBFE00","rotation":"0", "anchorPoint": {"x":"699","y":"309"} }, { "shape":"square","color":"0xFBFE00","rotation":"0", "anchorPoint": {"x":"699","y":"245"} }, { "shape":"square","color":"0xFBFE00","rotation":"0", "anchorPoint": {"x":"635","y":"245"} }, { "shape":"square","color":"0xFBFE00","rotation":"0", "anchorPoint": {"x":"635","y":"309"} }, { "shape":"square","color":"0xFBFE00","rotation":"0", "anchorPoint": {"x":"571","y":"245"} }, { "shape":"square","color":"0xFBFE00","rotation":"0", "anchorPoint": {"x":"571","y":"309"} }, { "shape":"triangleEqui","color":"0xFBFE00","rotation":"0", "anchorPoint": {"x":"540","y":"29"} }, { "shape":"triangleRect","color":"0xFF8300","rotation":"0", "anchorPoint": {"x":"571","y":"197"} }, { "shape":"triangleRect","color":"0xFBFE00","rotation":"1", "anchorPoint": {"x":"554","y":"182"} }, { "shape":"triangleRect","color":"0xFF8300","rotation":"3", "anchorPoint": {"x":"555","y":"151"} }, { "shape":"triangleRect","color":"0xFBFE00","rotation":"1", "anchorPoint": {"x":"554","y":"120"} }, { "shape":"triangleRect","color":"0xFF8300","rotation":"3", "anchorPoint": {"x":"555","y":"89"} }, { "shape":"triangleRect","color":"0xFBFE00","rotation":"2", "anchorPoint": {"x":"539","y":"73"} }, { "shape":"triangleRect","color":"0xFBFE00","rotation":"0", "anchorPoint": {"x":"508","y":"74"} }, { "shape":"triangleRect","color":"0xFF8300","rotation":"1", "anchorPoint": {"x":"584","y":"372"} }, { "shape":"triangleRect","color":"0xFF8300","rotation":"3", "anchorPoint": {"x":"584","y":"404"} }, { "shape":"triangleRect","color":"0xFF8300","rotation":"0", "anchorPoint": {"x":"567","y":"420"} }, { "shape":"triangleRect","color":"0xFF8300","rotation":"1", "anchorPoint": {"x":"708","y":"373"} }, { "shape":"triangleRect","color":"0xFF8300","rotation":"3", "anchorPoint": {"x":"708","y":"405"} }, { "shape":"triangleRect","color":"0xFF8300","rotation":"0", "anchorPoint": {"x":"691","y":"421"} }]},"distrib" :"on"}';
levels[26] = '{"problem":{ "pattern":[{ "shape":"trapeze","color":"0xFF8300","rotation":"2", "anchorPoint": {"x":"763","y":"157"} }, { "shape":"triangleEqui","color":"0x83EE00","rotation":"0", "anchorPoint": {"x":"741","y":"193"} }, { "shape":"triangleEqui","color":"0xE4005C","rotation":"0", "anchorPoint": {"x":"709","y":"137"} }, { "shape":"triangleEqui","color":"0xFBFE00","rotation":"2", "anchorPoint": {"x":"709","y":"185"} }]},"distrib" :"off"}';
levels[27] = '{"problem":{ "pattern":[{ "shape":"triangleEqui","color":"0xE4005C","rotation":"0", "anchorPoint": {"x":"709","y":"137"} }, { "shape":"triangleEqui","color":"0xFBFE00","rotation":"2", "anchorPoint": {"x":"709","y":"185"} }, { "shape":"triangleEqui","color":"0x83EE00","rotation":"0", "anchorPoint": {"x":"677","y":"193"} }, { "shape":"triangleEqui","color":"0x8007BE","rotation":"2", "anchorPoint": {"x":"677","y":"129"} }, { "shape":"triangleEqui","color":"0x058AB6","rotation":"2", "anchorPoint": {"x":"645","y":"185"} }, { "shape":"triangleEqui","color":"0xFF8300","rotation":"0", "anchorPoint": {"x":"645","y":"137"} }]},"distrib" :"on"}';
levels[28] = '{"problem":{ "pattern":[{ "shape":"trapeze","color":"0x058AB6","rotation":"0", "anchorPoint": {"x":"727","y":"139"} }, { "shape":"triangleEqui","color":"0x83EE00","rotation":"2", "anchorPoint": {"x":"694","y":"188"} }, { "shape":"diamond","color":"0xE4005C","rotation":"2", "anchorPoint": {"x":"742","y":"196"} }]},"distrib" :"off"}';
levels[29] = '{"problem":{ "pattern":[{"shape":"diamond", "color":"0xFF8300", "rotation":"0","anchorPoint": { "x":"617", "y":"217"}},{"shape":"diamond", "color":"0x058AB6","rotation":"2", "anchorPoint": { "x":"665","y":"245"} },{ "shape":"diamond",  "color":"0xFF8300", "rotation":"4","anchorPoint": { "x":"665","y":"189"} }]},"distrib" :"on"}';
levels[30] = '{"problem":{ "pattern":[{ "shape":"square","color":"0xFF8300","rotation":"0", "anchorPoint": {"x":"619","y":"245"} }, { "shape":"square","color":"0xFF8300","rotation":"0", "anchorPoint": {"x":"841","y":"245"} }, { "shape":"square","color":"0xE4005C","rotation":"0", "anchorPoint": {"x":"841","y":"181"} }, { "shape":"square","color":"0xFF8300","rotation":"0", "anchorPoint": {"x":"841","y":"117"} }, { "shape":"trapeze","color":"0x058AB6","rotation":"0", "anchorPoint": {"x":"815","y":"360"} }, { "shape":"trapeze","color":"0x058AB6","rotation":"0", "anchorPoint": {"x":"623","y":"360"} }, { "shape":"trapeze","color":"0x058AB6","rotation":"6", "anchorPoint": {"x":"623","y":"305"} }, { "shape":"trapeze","color":"0x058AB6","rotation":"6", "anchorPoint": {"x":"815","y":"305"} }, { "shape":"hexagon","color":"0x058AB6","rotation":"0", "anchorPoint": {"x":"719","y":"333"} }, { "shape":"triangleEqui","color":"0x058AB6","rotation":"2", "anchorPoint": {"x":"527","y":"297"} }, { "shape":"triangleEqui","color":"0x058AB6","rotation":"2", "anchorPoint": {"x":"911","y":"297"} }, { "shape":"triangleRect","color":"0xFBFE00","rotation":"0", "anchorPoint": {"x":"618","y":"197"} }, { "shape":"diamond","color":"0x058AB6","rotation":"0", "anchorPoint": {"x":"879","y":"333"} }, { "shape":"diamond","color":"0x058AB6","rotation":"0", "anchorPoint": {"x":"559","y":"333"} }, { "shape":"diamond","color":"0xFBFE00","rotation":"1", "anchorPoint": {"x":"866","y":"39"} }]},"distrib" :"off"}';
levels[31] = '{"problem":{ "pattern":[{ "shape":"hexagon","color":"0x83EE00","rotation":"0", "anchorPoint": {"x":"811","y":"243"} }, { "shape":"hexagon","color":"0x8007BE","rotation":"0", "anchorPoint": {"x":"715","y":"187"} }, { "shape":"triangleEqui","color":"0x83EE00","rotation":"0", "anchorPoint": {"x":"715","y":"103"} }, { "shape":"triangleEqui","color":"0x83EE00","rotation":"0", "anchorPoint": {"x":"651","y":"215"} }, { "shape":"triangleEqui","color":"0x83EE00","rotation":"2", "anchorPoint": {"x":"716","y":"263"} }, { "shape":"triangleEqui","color":"0x83EE00","rotation":"2", "anchorPoint": {"x":"779","y":"151"} }]},"distrib" :"on"}';
levels[32] = '{"problem":{ "pattern":[{ "shape":"trapeze","color":"0xFF8300","rotation":"0", "anchorPoint": {"x":"604","y":"244"} }, { "shape":"trapeze","color":"0xFF8300","rotation":"6", "anchorPoint": {"x":"604","y":"189"} }, { "shape":"trapeze","color":"0xFF8300","rotation":"0", "anchorPoint": {"x":"796","y":"244"} }, { "shape":"trapeze","color":"0xFF8300","rotation":"6", "anchorPoint": {"x":"796","y":"189"} }, { "shape":"hexagon","color":"0x8007BE","rotation":"0", "anchorPoint": {"x":"700","y":"217"} }, { "shape":"diamond","color":"0xFBFE00","rotation":"0", "anchorPoint": {"x":"860","y":"217"} }, { "shape":"diamond","color":"0xFBFE00","rotation":"0", "anchorPoint": {"x":"540","y":"217"} }]},"distrib" :"on"}';
levels[33] = '{"problem":{ "pattern":[{ "shape":"trapeze","color":"0xFBFE00","rotation":"6", "anchorPoint": {"x":"523","y":"109"} }, { "shape":"trapeze","color":"0x8007BE","rotation":"2", "anchorPoint": {"x":"545","y":"185"} }, { "shape":"triangleEqui","color":"0x83EE00","rotation":"2", "anchorPoint": {"x":"619","y":"101"} }, { "shape":"diamond","color":"0xFF8300","rotation":"0", "anchorPoint": {"x":"587","y":"137"} }]},"distrib" :"on"}';
levels[34] = '{"problem":{ "pattern":[{ "shape":"square","color":"0xFF8300","rotation":"0", "anchorPoint": {"x":"646","y":"333"} }, { "shape":"trapeze","color":"0x83EE00","rotation":"0", "anchorPoint": {"x":"646","y":"272"} }, { "shape":"hexagon","color":"0x83EE00","rotation":"0", "anchorPoint": {"x":"647","y":"189"} }, { "shape":"triangleEqui","color":"0x83EE00","rotation":"0", "anchorPoint": {"x":"711","y":"217"} }, { "shape":"triangleEqui","color":"0x83EE00","rotation":"0", "anchorPoint": {"x":"583","y":"217"} }, { "shape":"triangleEqui","color":"0x83EE00","rotation":"0", "anchorPoint": {"x":"647","y":"105"} }, { "shape":"diamond","color":"0x83EE00","rotation":"2", "anchorPoint": {"x":"566","y":"273"} }, { "shape":"diamond","color":"0x83EE00","rotation":"4", "anchorPoint": {"x":"726","y":"273"} }]},"distrib" :"off"}';
levels[35] = '{"problem":{ "pattern":[{ "shape":"square","color":"0x058AB6","rotation":"0", "anchorPoint": {"x":"714","y":"120"} }, { "shape":"hexagon","color":"0xE4005C","rotation":"0", "anchorPoint": {"x":"716","y":"320"} }, { "shape":"hexagon","color":"0x058AB6","rotation":"0", "anchorPoint": {"x":"715","y":"208"} }, { "shape":"triangleEqui","color":"0xE4005C","rotation":"0", "anchorPoint": {"x":"779","y":"236"} }, { "shape":"triangleEqui","color":"0xE4005C","rotation":"0", "anchorPoint": {"x":"651","y":"236"} }, { "shape":"triangleEqui","color":"0xFBFE00","rotation":"0", "anchorPoint": {"x":"714","y":"60"} }, { "shape":"diamond","color":"0xFF8300","rotation":"0", "anchorPoint": {"x":"652","y":"376"} }, { "shape":"diamond","color":"0xFF8300","rotation":"0", "anchorPoint": {"x":"780","y":"376"} }]},"distrib" :"on"}';
levels[36] = '{"problem":{ "pattern":[{ "shape":"square","color":"0x058AB6","rotation":"0", "anchorPoint": {"x":"714","y":"120"}}]},"distrib" :"on"}';
levels[37] = '{"problem":{ "pattern":[{ "shape":"hexagon","color":"0x058AB6","rotation":"0", "anchorPoint": {"x":"714","y":"120"}}]},"distrib" :"on"}';
levels[38] = '{"problem":{ "pattern":[{"shape":"trapeze","color":"0x93AFBD","rotation":"6","anchorPoint": {"x":"507","y":"161"}},{"shape":"trapeze","color":"0x93AFBD","rotation":"0","anchorPoint": {"x":"507","y":"104"}},{"shape":"hexagon","color":"0x93AFBD","rotation":"0","anchorPoint": {"x":"326","y":"138"}},{"shape":"triangleEqui","color":"0x93AFBD","rotation":"0","anchorPoint": {"x":"334","y":"334"}},{"shape":"triangleEqui","color":"0x93AFBD","rotation":"2","anchorPoint": {"x":"334","y":"270"}},{"shape":"triangleEqui","color":"0x93AFBD","rotation":"2","anchorPoint": {"x":"664","y":"164"}},{"shape":"triangleEqui","color":"0x93AFBD","rotation":"0","anchorPoint": {"x":"728","y":"116"}},{"shape":"triangleEqui","color":"0x93AFBD","rotation":"0","anchorPoint": {"x":"696","y":"172"}},{"shape":"triangleEqui","color":"0x93AFBD","rotation":"0","anchorPoint": {"x":"664","y":"116"}},{"shape":"triangleEqui","color":"0x93AFBD","rotation":"2","anchorPoint": {"x":"728","y":"164"}},{"shape":"triangleEqui","color":"0x93AFBD","rotation":"2","anchorPoint": {"x":"696","y":"108"}},{"shape":"triangleEqui","color":"0x93AFBD","rotation":"2","anchorPoint": {"x":"492","y":"470"}},{"shape":"triangleEqui","color":"0x93AFBD","rotation":"0","anchorPoint": {"x":"492","y":"422"}},{"shape":"triangle","color":"0x93AFBD","rotation":"9","anchorPoint": {"x":"348","y":"305"}},{"shape":"triangle","color":"0x93AFBD","rotation":"9","anchorPoint": {"x":"282","y":"305"}},{"shape":"triangle","color":"0x93AFBD","rotation":"3","anchorPoint": {"x":"386","y":"305"}},{"shape":"triangle","color":"0x93AFBD","rotation":"3","anchorPoint": {"x":"320","y":"305"}},{"shape":"triangle","color":"0x93AFBD","rotation":"3","anchorPoint": {"x":"646","y":"445"}},{"shape":"triangle","color":"0x93AFBD","rotation":"9","anchorPoint": {"x":"608","y":"445"}},{"shape":"diamond","color":"0x93AFBD","rotation":"0","anchorPoint": {"x":"483","y":"300"}},{"shape":"diamond","color":"0x93AFBD","rotation":"4","anchorPoint": {"x":"531","y":"272"}},{"shape":"diamond","color":"0x93AFBD","rotation":"2","anchorPoint": {"x":"531","y":"328"}},{"shape":"diamond","color":"0x93AFBD","rotation":"0","anchorPoint": {"x":"324","y":"461"}}]},"distrib" :"on"}';

return levels;
});