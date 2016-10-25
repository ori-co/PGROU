define ([
	], function(
		) {

var levels = [];
levels[1] = '{"pattern":[{"shape":"square","color":0,"rotation":0,"anchorPoint":{"x":911,"y":312}},{"shape":"trapeze","color":0,"rotation":0,"anchorPoint":{"x":594,"y":319}},{"shape":"hexagon","color":0,"rotation":0,"anchorPoint":{"x":329,"y":293}},{"shape":"triangleEqui","color":0,"rotation":0,"anchorPoint":{"x":792,"y":317}},{"shape":"triangle","color":0,"rotation":0,"anchorPoint":{"x":451,"y":329}},{"shape":"diamond","color":0,"rotation":0,"anchorPoint":{"x":713,"y":289}}],"basket":[],"storeEnabled":true}';
levels[2] = '{"pattern":[{"shape":"square","color":0,"rotation":0,"anchorPoint":{"x":641,"y":335}},{"shape":"square","color":2,"rotation":0,"anchorPoint":{"x":577,"y":335}},{"shape":"square","color":0,"rotation":0,"anchorPoint":{"x":577,"y":271}},{"shape":"square","color":2,"rotation":0,"anchorPoint":{"x":641,"y":271}}],"basket":[],"storeEnabled":true}';
levels[3] = '{"pattern":[{"shape":"square","color":1,"rotation":0,"anchorPoint":{"x":656,"y":362}},{"shape":"square","color":0,"rotation":0,"anchorPoint":{"x":592,"y":234}},{"shape":"square","color":0,"rotation":0,"anchorPoint":{"x":592,"y":362}},{"shape":"square","color":0,"rotation":0,"anchorPoint":{"x":720,"y":362}},{"shape":"square","color":0,"rotation":0,"anchorPoint":{"x":656,"y":298}},{"shape":"square","color":1,"rotation":0,"anchorPoint":{"x":656,"y":234}},{"shape":"square","color":1,"rotation":0,"anchorPoint":{"x":592,"y":298}},{"shape":"square","color":1,"rotation":0,"anchorPoint":{"x":720,"y":298}},{"shape":"square","color":0,"rotation":0,"anchorPoint":{"x":720,"y":234}}],"basket":[],"storeEnabled":true}';
levels[4] = '{"pattern":[{"shape":"square","color":3,"rotation":1,"anchorPoint":{"x":743,"y":266}},{"shape":"square","color":3,"rotation":2,"anchorPoint":{"x":472,"y":352}},{"shape":"square","color":3,"rotation":2,"anchorPoint":{"x":496,"y":264}},{"shape":"square","color":4,"rotation":1,"anchorPoint":{"x":799,"y":298}},{"shape":"square","color":4,"rotation":1,"anchorPoint":{"x":711,"y":322}},{"shape":"square","color":4,"rotation":2,"anchorPoint":{"x":440,"y":296}},{"shape":"square","color":3,"rotation":1,"anchorPoint":{"x":767,"y":354}},{"shape":"square","color":4,"rotation":2,"anchorPoint":{"x":528,"y":320}}],"basket":[],"storeEnabled":true}';
levels[5] = '{"pattern":[{"shape":"square","color":2,"rotation":0,"anchorPoint":{"x":749,"y":238}},{"shape":"square","color":0,"rotation":0,"anchorPoint":{"x":584,"y":277}},{"shape":"square","color":2,"rotation":0,"anchorPoint":{"x":813,"y":302}},{"shape":"square","color":0,"rotation":0,"anchorPoint":{"x":520,"y":341}},{"shape":"square","color":2,"rotation":0,"anchorPoint":{"x":877,"y":238}},{"shape":"square","color":0,"rotation":0,"anchorPoint":{"x":520,"y":277}},{"shape":"square","color":0,"rotation":0,"anchorPoint":{"x":584,"y":341}},{"shape":"square","color":1,"rotation":0,"anchorPoint":{"x":345,"y":310}},{"shape":"square","color":2,"rotation":0,"anchorPoint":{"x":813,"y":238}},{"shape":"square","color":2,"rotation":0,"anchorPoint":{"x":877,"y":366}},{"shape":"square","color":2,"rotation":0,"anchorPoint":{"x":749,"y":302}},{"shape":"square","color":2,"rotation":0,"anchorPoint":{"x":877,"y":302}},{"shape":"square","color":2,"rotation":0,"anchorPoint":{"x":813,"y":366}},{"shape":"square","color":2,"rotation":0,"anchorPoint":{"x":749,"y":366}}],"basket":[],"storeEnabled":true}';
levels[6] = '{"pattern":[{"shape":"triangleEqui","color":4,"rotation":2,"anchorPoint":{"x":703,"y":341}},{"shape":"triangleEqui","color":3,"rotation":0,"anchorPoint":{"x":735,"y":349}},{"shape":"triangleEqui","color":3,"rotation":0,"anchorPoint":{"x":465,"y":347}},{"shape":"triangleEqui","color":3,"rotation":0,"anchorPoint":{"x":703,"y":293}},{"shape":"triangleEqui","color":3,"rotation":0,"anchorPoint":{"x":671,"y":349}}],"basket":[],"storeEnabled":true}';
levels[7] = '{"pattern":[{"shape":"diamond","color":5,"rotation":0,"anchorPoint":{"x":485,"y":324}},{"shape":"diamond","color":1,"rotation":0,"anchorPoint":{"x":679,"y":317}},{"shape":"diamond","color":5,"rotation":0,"anchorPoint":{"x":711,"y":373}},{"shape":"diamond","color":1,"rotation":0,"anchorPoint":{"x":743,"y":317}},{"shape":"diamond","color":5,"rotation":0,"anchorPoint":{"x":711,"y":261}}],"basket":[],"storeEnabled":true}';
levels[8] = '{"pattern":[{"shape":"diamond","color":0,"rotation":0,"anchorPoint":{"x":793,"y":229}},{"shape":"diamond","color":2,"rotation":3,"anchorPoint":{"x":448,"y":332}},{"shape":"diamond","color":2,"rotation":3,"anchorPoint":{"x":504,"y":300}},{"shape":"diamond","color":0,"rotation":0,"anchorPoint":{"x":761,"y":285}},{"shape":"diamond","color":0,"rotation":0,"anchorPoint":{"x":793,"y":341}},{"shape":"diamond","color":0,"rotation":0,"anchorPoint":{"x":825,"y":285}},{"shape":"diamond","color":2,"rotation":3,"anchorPoint":{"x":448,"y":268}},{"shape":"diamond","color":2,"rotation":3,"anchorPoint":{"x":392,"y":300}}],"basket":[],"storeEnabled":true}';
levels[9] = '{"pattern":[{"shape":"trapeze","color":2,"rotation":0,"anchorPoint":{"x":427,"y":325}},{"shape":"trapeze","color":2,"rotation":6,"anchorPoint":{"x":751,"y":269}},{"shape":"trapeze","color":2,"rotation":8,"anchorPoint":{"x":825,"y":305}},{"shape":"trapeze","color":2,"rotation":4,"anchorPoint":{"x":677,"y":305}},{"shape":"trapeze","color":0,"rotation":0,"anchorPoint":{"x":751,"y":324}}],"basket":[],"storeEnabled":true}';
levels[10] = '{"pattern":[{"shape":"trapeze","color":2,"rotation":2,"anchorPoint":{"x":678,"y":356}},{"shape":"trapeze","color":2,"rotation":10,"anchorPoint":{"x":825,"y":356}},{"shape":"trapeze","color":2,"rotation":4,"anchorPoint":{"x":678,"y":260}},{"shape":"trapeze","color":2,"rotation":8,"anchorPoint":{"x":826,"y":260}},{"shape":"trapeze","color":2,"rotation":0,"anchorPoint":{"x":752,"y":391}},{"shape":"trapeze","color":2,"rotation":6,"anchorPoint":{"x":752,"y":224}},{"shape":"hexagon","color":3,"rotation":0,"anchorPoint":{"x":752,"y":308}},{"shape":"hexagon","color":2,"rotation":0,"anchorPoint":{"x":448,"y":313}}],"basket":[],"storeEnabled":true}';
levels[11] = '{"pattern":[{"shape":"triangle","color":5,"rotation":0,"anchorPoint":{"x":761,"y":341}},{"shape":"triangle","color":5,"rotation":0,"anchorPoint":{"x":423,"y":336}},{"shape":"triangle","color":5,"rotation":0,"anchorPoint":{"x":705,"y":308}},{"shape":"triangle","color":1,"rotation":6,"anchorPoint":{"x":705,"y":345}},{"shape":"triangle","color":5,"rotation":0,"anchorPoint":{"x":649,"y":341}}],"basket":[],"storeEnabled":true}';
levels[12] = '{"pattern":[{"shape":"trapeze","color":1,"rotation":6,"anchorPoint":{"x":619,"y":323}},{"shape":"trapeze","color":5,"rotation":0,"anchorPoint":{"x":619,"y":266}},{"shape":"hexagon","color":0,"rotation":0,"anchorPoint":{"x":364,"y":294}},{"shape":"diamond","color":3,"rotation":2,"anchorPoint":{"x":871,"y":322}},{"shape":"diamond","color":2,"rotation":4,"anchorPoint":{"x":871,"y":266}},{"shape":"diamond","color":4,"rotation":0,"anchorPoint":{"x":823,"y":294}}],"basket":[{"shape":"trapeze","color":-1,"rotation":0},{"shape":"trapeze","color":-1,"rotation":0},{"shape":"hexagon","color":-1,"rotation":0},{"shape":"diamond","color":-1,"rotation":0},{"shape":"diamond","color":-1,"rotation":0},{"shape":"diamond","color":-1,"rotation":0}],"storeEnabled":false}';
levels[13] = '{"pattern":[{"shape":"trapeze","color":5,"rotation":2,"anchorPoint":{"x":780,"y":314}},{"shape":"triangleEqui","color":2,"rotation":0,"anchorPoint":{"x":726,"y":294}},{"shape":"triangleEqui","color":0,"rotation":0,"anchorPoint":{"x":465,"y":294}},{"shape":"triangleEqui","color":5,"rotation":2,"anchorPoint":{"x":529,"y":342}},{"shape":"triangleEqui","color":5,"rotation":0,"anchorPoint":{"x":529,"y":294}},{"shape":"triangleEqui","color":0,"rotation":2,"anchorPoint":{"x":465,"y":342}},{"shape":"triangleEqui","color":0,"rotation":0,"anchorPoint":{"x":497,"y":350}},{"shape":"triangleEqui","color":2,"rotation":2,"anchorPoint":{"x":726,"y":342}},{"shape":"triangleEqui","color":5,"rotation":2,"anchorPoint":{"x":497,"y":286}},{"shape":"triangleEqui","color":2,"rotation":0,"anchorPoint":{"x":758,"y":350}}],"basket":[{"shape":"trapeze","color":-1,"rotation":0},{"shape":"triangleEqui","color":-1,"rotation":0},{"shape":"triangleEqui","color":-1,"rotation":0},{"shape":"triangleEqui","color":-1,"rotation":0},{"shape":"triangleEqui","color":-1,"rotation":0},{"shape":"triangleEqui","color":-1,"rotation":0},{"shape":"triangleEqui","color":-1,"rotation":0},{"shape":"triangleEqui","color":-1,"rotation":0},{"shape":"triangleEqui","color":-1,"rotation":0},{"shape":"triangleEqui","color":-1,"rotation":0}],"storeEnabled":false}';
levels[14] = '{"pattern":[{"shape":"trapeze","color":3,"rotation":0,"anchorPoint":{"x":625,"y":241}},{"shape":"triangleEqui","color":0,"rotation":2,"anchorPoint":{"x":657,"y":290}},{"shape":"diamond","color":2,"rotation":4,"anchorPoint":{"x":609,"y":298}}],"basket":[{"shape":"trapeze","color":-1,"rotation":0},{"shape":"triangleEqui","color":-1,"rotation":0},{"shape":"diamond","color":-1,"rotation":0},{"shape":"diamond","color":-1,"rotation":0}],"storeEnabled":true}';
levels[15] = '{"pattern":[{"shape":"hexagon","color":1,"rotation":0,"anchorPoint":{"x":625,"y":302}},{"shape":"triangleEqui","color":1,"rotation":0,"anchorPoint":{"x":561,"y":330}},{"shape":"triangleEqui","color":1,"rotation":0,"anchorPoint":{"x":625,"y":218}},{"shape":"triangleEqui","color":1,"rotation":0,"anchorPoint":{"x":689,"y":330}}],"basket":[],"storeEnabled":true}';
levels[16] = '{"pattern":[{"shape":"triangleEqui","color":5,"rotation":0,"anchorPoint":{"x":561,"y":330}},{"shape":"triangleEqui","color":1,"rotation":0,"anchorPoint":{"x":625,"y":218}},{"shape":"triangleEqui","color":5,"rotation":0,"anchorPoint":{"x":689,"y":330}},{"shape":"triangleEqui","color":5,"rotation":0,"anchorPoint":{"x":625,"y":330}},{"shape":"triangleEqui","color":5,"rotation":2,"anchorPoint":{"x":625,"y":266}},{"shape":"diamond","color":1,"rotation":0,"anchorPoint":{"x":657,"y":302}},{"shape":"diamond","color":1,"rotation":0,"anchorPoint":{"x":593,"y":302}}],"basket":[],"storeEnabled":true}';
levels[17] = '{"pattern":[{"shape":"trapeze","color":2,"rotation":8,"anchorPoint":{"x":660,"y":350}},{"shape":"trapeze","color":3,"rotation":0,"anchorPoint":{"x":586,"y":369}},{"shape":"trapeze","color":4,"rotation":4,"anchorPoint":{"x":608,"y":294}}],"basket":[],"storeEnabled":true}';
levels[18] = '{"pattern":[{"shape":"hexagon","color":1,"rotation":1,"anchorPoint":{"x":626,"y":318}},{"shape":"triangle","color":0,"rotation":0,"anchorPoint":{"x":569,"y":364}},{"shape":"triangle","color":0,"rotation":0,"anchorPoint":{"x":681,"y":364}},{"shape":"triangle","color":0,"rotation":8,"anchorPoint":{"x":697,"y":338}},{"shape":"triangle","color":0,"rotation":8,"anchorPoint":{"x":641,"y":242}},{"shape":"triangle","color":0,"rotation":4,"anchorPoint":{"x":609,"y":242}},{"shape":"triangle","color":0,"rotation":4,"anchorPoint":{"x":553,"y":338}}],"basket":[],"storeEnabled":true}';
levels[19] = '{"pattern":[{"shape":"hexagon","color":4,"rotation":0,"anchorPoint":{"x":523,"y":382}},{"shape":"hexagon","color":2,"rotation":0,"anchorPoint":{"x":715,"y":270}},{"shape":"hexagon","color":2,"rotation":0,"anchorPoint":{"x":523,"y":270}},{"shape":"hexagon","color":4,"rotation":0,"anchorPoint":{"x":715,"y":382}},{"shape":"hexagon","color":4,"rotation":0,"anchorPoint":{"x":619,"y":214}},{"shape":"hexagon","color":2,"rotation":0,"anchorPoint":{"x":619,"y":438}},{"shape":"hexagon","color":3,"rotation":0,"anchorPoint":{"x":619,"y":326}}],"basket":[],"storeEnabled":true}';
levels[20] = '{"pattern":[{"shape":"trapeze","color":5,"rotation":0,"anchorPoint":{"x":641,"y":334}},{"shape":"trapeze","color":3,"rotation":0,"anchorPoint":{"x":513,"y":334}},{"shape":"trapeze","color":5,"rotation":6,"anchorPoint":{"x":513,"y":279}},{"shape":"trapeze","color":3,"rotation":6,"anchorPoint":{"x":641,"y":279}},{"shape":"triangle","color":4,"rotation":3,"anchorPoint":{"x":467,"y":306}},{"shape":"triangle","color":4,"rotation":9,"anchorPoint":{"x":687,"y":306}},{"shape":"diamond","color":1,"rotation":0,"anchorPoint":{"x":577,"y":307}}],"basket":[],"storeEnabled":true}';
levels[21] = '{"pattern":[{"shape":"trapeze","color":0,"rotation":10,"anchorPoint":{"x":562,"y":236}},{"shape":"trapeze","color":0,"rotation":2,"anchorPoint":{"x":671,"y":236}},{"shape":"hexagon","color":2,"rotation":0,"anchorPoint":{"x":617,"y":300}},{"shape":"triangleEqui","color":0,"rotation":2,"anchorPoint":{"x":617,"y":376}},{"shape":"triangleEqui","color":2,"rotation":0,"anchorPoint":{"x":617,"y":216}},{"shape":"triangleEqui","color":2,"rotation":0,"anchorPoint":{"x":681,"y":328}},{"shape":"triangleEqui","color":2,"rotation":0,"anchorPoint":{"x":553,"y":328}},{"shape":"diamond","color":0,"rotation":4,"anchorPoint":{"x":569,"y":384}},{"shape":"diamond","color":0,"rotation":2,"anchorPoint":{"x":665,"y":384}},{"shape":"diamond","color":0,"rotation":0,"anchorPoint":{"x":521,"y":300}},{"shape":"diamond","color":0,"rotation":0,"anchorPoint":{"x":713,"y":300}}],"basket":[],"storeEnabled":true}';
levels[22] = '{"pattern":[{"shape":"square","color":2,"rotation":0,"anchorPoint":{"x":671,"y":370}},{"shape":"square","color":5,"rotation":0,"anchorPoint":{"x":607,"y":370}},{"shape":"square","color":5,"rotation":0,"anchorPoint":{"x":735,"y":370}},{"shape":"square","color":5,"rotation":0,"anchorPoint":{"x":607,"y":306}},{"shape":"square","color":5,"rotation":0,"anchorPoint":{"x":735,"y":306}},{"shape":"square","color":5,"rotation":0,"anchorPoint":{"x":671,"y":306}},{"shape":"trapeze","color":3,"rotation":0,"anchorPoint":{"x":703,"y":245}},{"shape":"triangleEqui","color":3,"rotation":0,"anchorPoint":{"x":703,"y":190}},{"shape":"triangleEqui","color":3,"rotation":2,"anchorPoint":{"x":639,"y":238}},{"shape":"triangleEqui","color":3,"rotation":0,"anchorPoint":{"x":607,"y":246}}],"basket":[],"storeEnabled":true}';
levels[23] = '{"pattern":[{"shape":"trapeze","color":2,"rotation":3,"anchorPoint":{"x":536,"y":353}},{"shape":"trapeze","color":3,"rotation":1,"anchorPoint":{"x":690,"y":299}},{"shape":"trapeze","color":3,"rotation":5,"anchorPoint":{"x":690,"y":407}},{"shape":"trapeze","color":2,"rotation":3,"anchorPoint":{"x":760,"y":353}},{"shape":"trapeze","color":-1,"rotation":0,"anchorPoint":{"x":592.9514087850439,"y":583}},{"shape":"trapeze","color":-1,"rotation":0,"anchorPoint":{"x":303.9058987272391,"y":583}},{"shape":"trapeze","color":-1,"rotation":0,"anchorPoint":{"x":688.1988593576647,"y":583}},{"shape":"hexagon","color":3,"rotation":1,"anchorPoint":{"x":626,"y":353}},{"shape":"hexagon","color":-1,"rotation":0,"anchorPoint":{"x":713.0619450463049,"y":583}},{"shape":"triangleEqui","color":2,"rotation":3,"anchorPoint":{"x":702,"y":353}},{"shape":"triangle","color":2,"rotation":8,"anchorPoint":{"x":697,"y":245}},{"shape":"triangle","color":-1,"rotation":0,"anchorPoint":{"x":901.5616564734252,"y":583}},{"shape":"diamond","color":3,"rotation":1,"anchorPoint":{"x":486,"y":401}},{"shape":"diamond","color":3,"rotation":5,"anchorPoint":{"x":486,"y":306}},{"shape":"diamond","color":-1,"rotation":0,"anchorPoint":{"x":597.3947982842433,"y":583}},{"shape":"diamond","color":-1,"rotation":0,"anchorPoint":{"x":376.98946045140195,"y":583}}],"basket":[{"shape":"trapeze","color":-1,"rotation":0},{"shape":"triangleEqui","color":-1,"rotation":0}],"storeEnabled":false}';
levels[24] = '{"pattern":[{"shape":"square","color":5,"rotation":0,"anchorPoint":{"x":633,"y":321}},{"shape":"square","color":5,"rotation":0,"anchorPoint":{"x":633,"y":385}},{"shape":"trapeze","color":5,"rotation":9,"anchorPoint":{"x":572,"y":353}},{"shape":"trapeze","color":3,"rotation":3,"anchorPoint":{"x":511,"y":353}},{"shape":"trapeze","color":3,"rotation":9,"anchorPoint":{"x":748,"y":353}},{"shape":"trapeze","color":5,"rotation":3,"anchorPoint":{"x":687,"y":353}}],"basket":[],"storeEnabled":true}';
levels[25] = '{"pattern":[{"shape":"square","color":5,"rotation":0,"anchorPoint":{"x":653,"y":370}},{"shape":"trapeze","color":0,"rotation":0,"anchorPoint":{"x":653,"y":253}},{"shape":"trapeze","color":0,"rotation":0,"anchorPoint":{"x":651,"y":309}},{"shape":"triangleEqui","color":0,"rotation":0,"anchorPoint":{"x":653,"y":198}},{"shape":"triangle","color":0,"rotation":5,"anchorPoint":{"x":575,"y":321}},{"shape":"triangle","color":0,"rotation":7,"anchorPoint":{"x":729,"y":265}},{"shape":"triangle","color":0,"rotation":7,"anchorPoint":{"x":697,"y":209}},{"shape":"triangle","color":0,"rotation":7,"anchorPoint":{"x":727,"y":321}},{"shape":"triangle","color":0,"rotation":5,"anchorPoint":{"x":577,"y":265}},{"shape":"triangle","color":0,"rotation":5,"anchorPoint":{"x":609,"y":209}}],"basket":[{"shape":"square","color":-1,"rotation":0},{"shape":"trapeze","color":-1,"rotation":0},{"shape":"trapeze","color":-1,"rotation":0},{"shape":"triangleEqui","color":-1,"rotation":0},{"shape":"triangle","color":-1,"rotation":0},{"shape":"triangle","color":-1,"rotation":0},{"shape":"triangle","color":-1,"rotation":0},{"shape":"triangle","color":-1,"rotation":0},{"shape":"triangle","color":-1,"rotation":0},{"shape":"triangle","color":-1,"rotation":0}],"storeEnabled":true}';
levels[26] = '{"pattern":[{"shape":"trapeze","color":1,"rotation":4,"anchorPoint":{"x":526,"y":221}},{"shape":"trapeze","color":1,"rotation":2,"anchorPoint":{"x":526,"y":317}},{"shape":"trapeze","color":1,"rotation":8,"anchorPoint":{"x":674,"y":221}},{"shape":"trapeze","color":1,"rotation":0,"anchorPoint":{"x":600,"y":352}},{"shape":"trapeze","color":1,"rotation":10,"anchorPoint":{"x":673,"y":317}},{"shape":"trapeze","color":1,"rotation":6,"anchorPoint":{"x":600,"y":185}},{"shape":"triangleEqui","color":1,"rotation":0,"anchorPoint":{"x":760,"y":353}},{"shape":"triangleEqui","color":1,"rotation":2,"anchorPoint":{"x":760,"y":177}},{"shape":"triangleEqui","color":1,"rotation":2,"anchorPoint":{"x":440,"y":177}},{"shape":"triangleEqui","color":1,"rotation":0,"anchorPoint":{"x":600,"y":73}},{"shape":"triangleEqui","color":1,"rotation":0,"anchorPoint":{"x":440,"y":353}},{"shape":"triangleEqui","color":1,"rotation":2,"anchorPoint":{"x":600,"y":457}}],"basket":[],"storeEnabled":true}';
levels[27] = '{"pattern":[{"shape":"square","color":3,"rotation":0,"anchorPoint":{"x":672,"y":247}},{"shape":"trapeze","color":4,"rotation":0,"anchorPoint":{"x":672,"y":418}},{"shape":"trapeze","color":4,"rotation":0,"anchorPoint":{"x":544,"y":418}},{"shape":"hexagon","color":4,"rotation":0,"anchorPoint":{"x":672,"y":335}},{"shape":"triangleEqui","color":4,"rotation":2,"anchorPoint":{"x":480,"y":411}},{"shape":"triangleEqui","color":4,"rotation":2,"anchorPoint":{"x":736,"y":411}},{"shape":"triangleEqui","color":4,"rotation":2,"anchorPoint":{"x":576,"y":355}},{"shape":"triangleEqui","color":3,"rotation":0,"anchorPoint":{"x":672,"y":187}},{"shape":"triangle","color":2,"rotation":0,"anchorPoint":{"x":470,"y":317}},{"shape":"diamond","color":4,"rotation":0,"anchorPoint":{"x":608,"y":391}},{"shape":"diamond","color":4,"rotation":4,"anchorPoint":{"x":464,"y":363}},{"shape":"diamond","color":4,"rotation":2,"anchorPoint":{"x":752,"y":363}},{"shape":"diamond","color":4,"rotation":4,"anchorPoint":{"x":528,"y":363}},{"shape":"diamond","color":-1,"rotation":1,"anchorPoint":{"x":699,"y":111}}],"basket":[{"shape":"square","color":-1,"rotation":0},{"shape":"trapeze","color":-1,"rotation":0},{"shape":"trapeze","color":-1,"rotation":0},{"shape":"hexagon","color":-1,"rotation":0},{"shape":"triangleEqui","color":-1,"rotation":0},{"shape":"triangleEqui","color":-1,"rotation":0},{"shape":"triangleEqui","color":-1,"rotation":0},{"shape":"triangleEqui","color":-1,"rotation":0},{"shape":"triangle","color":-1,"rotation":0},{"shape":"diamond","color":-1,"rotation":0},{"shape":"diamond","color":-1,"rotation":0},{"shape":"diamond","color":-1,"rotation":0},{"shape":"diamond","color":-1,"rotation":0},{"shape":"diamond","color":-1,"rotation":0}],"storeEnabled":false}';
levels[28] = '{"pattern":[{"shape":"hexagon","color":5,"rotation":0,"anchorPoint":{"x":555,"y":324}},{"shape":"triangle","color":1,"rotation":2,"anchorPoint":{"x":687,"y":309}},{"shape":"triangle","color":1,"rotation":3,"anchorPoint":{"x":509,"y":379}},{"shape":"triangle","color":1,"rotation":9,"anchorPoint":{"x":665,"y":379}},{"shape":"triangle","color":5,"rotation":3,"anchorPoint":{"x":669,"y":435}},{"shape":"triangle","color":5,"rotation":9,"anchorPoint":{"x":505,"y":435}},{"shape":"triangle","color":5,"rotation":5,"anchorPoint":{"x":415,"y":195}},{"shape":"diamond","color":1,"rotation":0,"anchorPoint":{"x":491,"y":268}},{"shape":"diamond","color":1,"rotation":0,"anchorPoint":{"x":459,"y":212}},{"shape":"diamond","color":5,"rotation":2,"anchorPoint":{"x":635,"y":352}},{"shape":"diamond","color":5,"rotation":4,"anchorPoint":{"x":635,"y":296}}],"basket":[{"shape":"square","color":-1,"rotation":0},{"shape":"square","color":-1,"rotation":0},{"shape":"trapeze","color":-1,"rotation":0},{"shape":"trapeze","color":-1,"rotation":0},{"shape":"hexagon","color":-1,"rotation":0},{"shape":"triangleEqui","color":-1,"rotation":0},{"shape":"triangleEqui","color":-1,"rotation":0},{"shape":"triangle","color":-1,"rotation":0},{"shape":"triangle","color":-1,"rotation":0},{"shape":"triangle","color":-1,"rotation":0},{"shape":"triangle","color":-1,"rotation":0},{"shape":"triangle","color":-1,"rotation":0},{"shape":"triangle","color":-1,"rotation":0},{"shape":"diamond","color":-1,"rotation":0},{"shape":"diamond","color":-1,"rotation":0},{"shape":"diamond","color":-1,"rotation":0},{"shape":"diamond","color":-1,"rotation":0}],"storeEnabled":true}';
levels[29] = '{"pattern":[{"shape":"square","color":4,"rotation":0,"anchorPoint":{"x":616,"y":122}},{"shape":"trapeze","color":4,"rotation":6,"anchorPoint":{"x":616,"y":294}},{"shape":"trapeze","color":2,"rotation":0,"anchorPoint":{"x":616,"y":349}},{"shape":"hexagon","color":4,"rotation":0,"anchorPoint":{"x":616,"y":210}},{"shape":"triangleEqui","color":3,"rotation":0,"anchorPoint":{"x":616,"y":62}},{"shape":"triangleEqui","color":2,"rotation":0,"anchorPoint":{"x":680,"y":238}},{"shape":"triangleEqui","color":2,"rotation":0,"anchorPoint":{"x":552,"y":238}},{"shape":"triangle","color":5,"rotation":3,"anchorPoint":{"x":698,"y":433}},{"shape":"triangle","color":5,"rotation":9,"anchorPoint":{"x":534,"y":433}},{"shape":"diamond","color":2,"rotation":0,"anchorPoint":{"x":552,"y":322}},{"shape":"diamond","color":2,"rotation":0,"anchorPoint":{"x":680,"y":322}},{"shape":"diamond","color":5,"rotation":0,"anchorPoint":{"x":712,"y":378}},{"shape":"diamond","color":5,"rotation":0,"anchorPoint":{"x":520,"y":378}}],"basket":[],"storeEnabled":true}';


return levels;
});