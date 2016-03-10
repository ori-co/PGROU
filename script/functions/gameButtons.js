//Edition Modes (colors and rotation)
function formInteraction(tempSprite, pointer) {
   	switch (test) {
        case 0:
            break;
        case 1:
            tempSprite.frame ++;
            tempSprite.updateCache();
            break;
        case 2:
            if (tempSprite.frame == 0){
                tempSprite.animations.add('test');
                tempSprite.frame=tempSprite.animations.frameTotal -1;
            } else {
                tempSprite.frame--;
            }
            tempSprite.updateCache();
            break;
        case 3:
            var rand = Math.floor((Math.random() * 5));
            tempSprite.tint = palette[Math.floor(Math.random() * palette.length)];
            break;
    }
}

//Activation of the rotation button
function rotationRightButton(rot, pointer) {
    switch (test) {
        case 0:
            test = 1;
            rotR.setFrames(3, 0, 1, 0);
            break;
        case 1:
            test = 0;
            rotR.setFrames(2, 1, 0, 1);
            break;
        case 2:
            test = 1;
            rotR.setFrames(3, 0, 1, 0);
            rotL.setFrames(2, 1, 0, 1);
            break;
        case 3:
            test = 1;
            rotR.setFrames(3, 0, 1, 0);
            col.setFrames(2, 1, 0, 1);
            break;
    }
    clicker();
}

function rotationLeftButton(rot, pointer) {
    switch (test) {
        case 0:
            test = 2;
            rotL.setFrames(3, 0, 1, 0);
            break;
        case 1:
            test = 2;
            rotL.setFrames(3, 0, 1, 0);
            rotR.setFrames(2, 1, 0, 1);
            break;
        case 2:
            test = 0;
            rotL.setFrames(2, 1, 0, 1);
            break;
        case 3:
            test = 2;
            rotL.setFrames(3, 0, 1, 0);
            col.setFrames(2, 1, 0, 1);
            break;
    }
    clicker();
}

// Change color
function colorButton(col, pointer) {
    switch (test) {
        case 0:
            test = 3;
            col.setFrames(3, 0, 1, 0);
            break;
        case 1:
            test = 3;
            rotR.setFrames(2, 1, 0, 1);
            col.setFrames(3, 0, 1, 0);
            break;
        case 2:
            test = 3;
            rotL.setFrames(2, 1, 0, 1);
            col.setFrames(3, 0, 1, 0);
            break;
        case 3:
            test = 0;
            col.setFrames(2, 1, 0, 1);
            break;
    }
    clicker();
}
