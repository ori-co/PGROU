//Funtion to return to the index
function returnIndex(){
    self.location.href = 'index.html';
}

//Edition Modes (colors and rotation)
function formInteraction(tempSprite, pointer) {
    switch (test) {
        case 0:
            break;
        case 1:
            tempSprite.angle += 45;
            break;
        case 2:
            var rand = Math.floor((Math.random() * 5));
            tempSprite.tint = palette[Math.floor(Math.random() * palette.length)];
            break;
    }
}

//Activation of the rotation button
function rotationButton(rot, pointer) {
    switch (test) {
        case 0:
            test = 1;
            rot.setFrames(3, 0, 1, 0);
            break;
        case 1:
            test = 0;
            rot.setFrames(2, 1, 0, 1);
            break;
        case 2:
            test = 1;
            rot.setFrames(3, 0, 1, 0);
            col.setFrames(2, 1, 0, 1);
            break;
    }
}

// Change color
function colorButton(col, pointer) {
    switch (test) {
        case 0:
            test = 2;
            col.setFrames(3, 0, 1, 0);
            break;
        case 1:
            test = 2;
            rot.setFrames(2, 1, 0, 1);
            col.setFrames(3, 0, 1, 0);
            break;
        case 2:
            test = 0;
            col.setFrames(2, 1, 0, 1);
            break;
    }
}