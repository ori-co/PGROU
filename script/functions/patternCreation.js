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
}