var distrib = 1;

function patternCreation(levelText) {

//JSON analysis				
    var jsonObj = JSON.parse(levelText);

    //Pattern creation

    for (var i = 0; i < jsonObj.problem.pattern.length; i++) {

        switch (jsonObj.problem.pattern[i].shape) {
            case "square":
                patterns[i] = P1.create(Number(jsonObj.problem.pattern[i].anchorPoint.x), Number(jsonObj.problem.pattern[i].anchorPoint.y), 'square');
                patterns[i].inputEnabled = true;
                patterns[i].tint = 0x020303;
                patterns[i].frame = Number(jsonObj.problem.pattern[i].rotation);
                patterns[i].alpha = 0.4;
                patterns[i].wantedColor = jsonObj.problem.pattern[i].color;
                break;
            case "trapeze":
                patterns[i] = P2.create(Number(jsonObj.problem.pattern[i].anchorPoint.x), Number(jsonObj.problem.pattern[i].anchorPoint.y), 'trapeze');
                patterns[i].inputEnabled = true;
                patterns[i].tint = 0x020303;
                patterns[i].frame = Number(jsonObj.problem.pattern[i].rotation);
                patterns[i].alpha = 0.4;
                patterns[i].wantedColor = jsonObj.problem.pattern[i].color;
                break;
            case "hexagon":
                patterns[i] = P3.create(Number(jsonObj.problem.pattern[i].anchorPoint.x), Number(jsonObj.problem.pattern[i].anchorPoint.y), 'hexagon');
                patterns[i].inputEnabled = true;
                patterns[i].tint = 0x020303;
                patterns[i].frame = Number(jsonObj.problem.pattern[i].rotation);
                patterns[i].alpha = 0.4;
                patterns[i].wantedColor = jsonObj.problem.pattern[i].color;
                break;
            case "triangleEqui":
                patterns[i] = P4.create(Number(jsonObj.problem.pattern[i].anchorPoint.x), Number(jsonObj.problem.pattern[i].anchorPoint.y), 'triangle_equi');
                patterns[i].inputEnabled = true;
                patterns[i].tint = 0x020303;
                patterns[i].frame = Number(jsonObj.problem.pattern[i].rotation);
                patterns[i].alpha = 0.4;
                patterns[i].wantedColor = jsonObj.problem.pattern[i].color;
                break;
            case "triangleRect":
                patterns[i] = P5.create(Number(jsonObj.problem.pattern[i].anchorPoint.x), Number(jsonObj.problem.pattern[i].anchorPoint.y), 'triangle_rect');
                patterns[i].inputEnabled = true;
                patterns[i].tint = 0x020303;
                patterns[i].frame = Number(jsonObj.problem.pattern[i].rotation);
                patterns[i].alpha = 0.4;
                patterns[i].wantedColor = jsonObj.problem.pattern[i].color;
                break;
            case "diamond":
                patterns[i] = P6.create(Number(jsonObj.problem.pattern[i].anchorPoint.x), Number(jsonObj.problem.pattern[i].anchorPoint.y), 'diamond');
                patterns[i].inputEnabled = true;
                patterns[i].tint = 0x020303;
                patterns[i].frame = Number(jsonObj.problem.pattern[i].rotation);
                patterns[i].alpha = 0.4;
                patterns[i].wantedColor = jsonObj.problem.pattern[i].color;
                break;
        }
	}
		if (jsonObj.distrib=="off"){
			
			distrib = 0;
			
			//We add the form into the Basket
			P1.forEach(function (pattern) {
				addShape('square', F1);
			});
			
			P2.forEach(function (pattern) {
				addShape('trapeze', F2);
			});
			P3.forEach(function (pattern) {
				addShape('hexagon', F3);
			});
			P4.forEach(function (pattern) {
				addShape('triangle_equi', F4);
			});
			P5.forEach(function (pattern) {
				addShape('triangle_rect', F5);
			});
			P6.forEach(function (pattern) {
				addShape('diamond', F6);
			});
			
			//we hide the distributors 
			this.buttonSquare.visible = false;
			this.labelSquare.visible = false;
			
			this.buttonHexagon.visible = false;
			this.labelHexagon.visible = false;
			
			this.buttonTrapezoid.visible = false;
			this.labelTrapezoid.visible = false;
			
			this.buttonTriangleEqui.visible = false;
			this.labelTriangleEqui.visible = false;
			
			this.buttonTriangleRect.visible = false;
			this.labelTriangleRect.visible = false;
			
			this.buttonDiamond.visible = false;
			this.labelDiamond.visible = false;
			
			//we hide the bin
			this.bin.visible = false;
			
			//We lock the distributors
			
			unlockButton = game.add.button(5, 5, 'ribbon', unlockStore, this, 1, 0, 1, 0);
			storeLocked = true;
			buttonSquare.inputEnabled = false;
			buttonTrapezoid.inputEnabled = false;
			buttonTriangleEqui.inputEnabled = false;
			buttonHexagon.inputEnabled = false;
			buttonTriangleRect.inputEnabled = false;
			buttonDiamond.inputEnabled = false;
			
		}else{ 
		
			var cptSquare = 0 ;
			P1.forEach(function (pattern) {
				cptSquare ++;
			});
			var cptTrapeze = 0 ;
			P2.forEach(function (pattern) {
				cptTrapeze ++;
			});
			var cptHexagon = 0 ;
			P3.forEach(function (pattern) {
				cptHexagon ++;
			});
			var cptTriangleEqui = 0 ;
			P4.forEach(function (pattern) {
				cptTriangleEqui ++;
			});
			var cptTriangleRect = 0 ;
			P5.forEach(function (pattern) {
				cptTriangleRect ++;
			});
			var cptDiamond = 0 ;
			P6.forEach(function (pattern) {
				cptDiamond ++;
			});
			
			
			if (cptSquare ==0){ 
			this.buttonSquare.visible = false;
			this.labelSquare.visible = false;
			}
			if (cptHexagon==0){
			this.buttonHexagon.visible = false;
			this.labelHexagon.visible = false;
			}
			if (cptTrapeze==0){
			this.buttonTrapezoid.visible = false;
			this.labelTrapezoid.visible = false;
			}
			if (cptTriangleEqui==0){
			this.buttonTriangleEqui.visible = false;
			this.labelTriangleEqui.visible = false;
			}
			if (cptTriangleRect==0){
			this.buttonTriangleRect.visible = false;
			this.labelTriangleRect.visible = false;
			}
			if (cptDiamond==0){
			this.buttonDiamond.visible = false;
			this.labelDiamond.visible = false;
			}
		
    }
}