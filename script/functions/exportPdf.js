function setColor(pattern, doc) {
    var s = pattern.tint;
    switch (s) {
        case 0x83EE00:
            doc.setDrawColor(131, 238, 0);
            doc.setFillColor(131, 238, 0);
            break;
        case 0xFBFE00:
            doc.setDrawColor(253, 254, 0);
            doc.setFillColor(253, 254, 0);
            break;
        case 0x058AB6:
            doc.setDrawColor(5, 138, 182);
            doc.setFillColor(5, 138, 182);
            break;
        case 0xE4005C:
            doc.setDrawColor(228, 0, 92);
            doc.setFillColor(228, 0, 92);
            break;

        case 0x8007BE:
            doc.setDrawColor(128, 7, 190);
            doc.setFillColor(128, 7, 190);
            break;
        case 0xFF8300:
            doc.setDrawColor(255, 131, 0);
            doc.setFillColor(255, 131, 0);
            break;
        default :
            doc.setDrawColor(147, 175, 189);
            doc.setFillColor(147, 175, 189);
            break;
    }
}


function pdf() {
    var doc = new jsPDF();

//Title
    doc.setFont("helvetica");
    doc.setTextColor(147, 175, 189);
    doc.text(75, 20, 'Nom de l\'application  -  Page 1');

//Initialisation
    var a = 10;
    var b = 40;
    var cpt = 0;
    var nbLigne = 0;
    var nbPage = 1;

//Square
    F1.forEach(function (pattern) {
        if (nbLigne == 6) {
            nbLigne = 0;
            nbPage++;
            doc.addPage();
            doc.setFont("helvetica");
            doc.setTextColor(147, 175, 189);
            doc.text(75, 20, 'Nom de l\'application  -  Page ' + nbPage);
            b = 40;
        }
        setColor(pattern, doc);
        doc.rect(a, b, 20, 20, 'F');
        cpt++;
        if (cpt < 7) {
            a = a + 26;
        } else {
            b = b + 40;
            a = 10;
            cpt = 0;
            nbLigne++;
        }
    }, this);

//Triangle equi
    F4.forEach(function (pattern) {
        if (nbLigne == 6) {
            nbLigne = 0;
            nbPage++;
            doc.addPage();
            doc.setFont("helvetica");
            doc.setTextColor(147, 175, 189);
            doc.text(75, 20, 'Nom de l\'application  -  Page ' + nbPage);
            b = 40;
        }
        setColor(pattern, doc);
        doc.triangle(a + 10, b, a, b + 17, a + 20, b + 17, 'FD');
        cpt++;
        if (cpt < 7) {
            a = a + 26;
        } else {
            b = b + 40;
            a = 10;
            cpt = 0;
            nbLigne++;
        }
    }, this);

//Triangle rectangle
    F5.forEach(function (pattern) {
        if (nbLigne == 6) {
            nbLigne = 0;
            nbPage++;
            doc.addPage();
            doc.setFont("helvetica");
            doc.setTextColor(147, 175, 189);
            doc.text(75, 20, 'Nom de l\'application  -  Page ' + nbPage);
            b = 40;
        }
        setColor(pattern, doc);
        doc.triangle(a + 10, b, a, b + 9.8, a + 20, b + 9.8, 'FD');
        cpt++;
        if (cpt < 7) {
            a = a + 26;
        } else {
            b = b + 40;
            a = 10;
            cpt = 0;
            nbLigne++;
        }
    }, this);

//Diamond
    F6.forEach(function (pattern) {
        if (nbLigne == 6) {
            nbLigne = 0;
            nbPage++;
            doc.addPage();
            doc.setFont("helvetica");
            doc.setTextColor(147, 175, 189);
            doc.text(75, 20, 'Nom de l\'application  -  Page ' + nbPage);
            b = 40;
        }
        setColor(pattern, doc);
        doc.triangle(a + 10, b, a, b + 17, a + 20, b + 17, 'FD');
        doc.triangle(a, b + 17, a + 20, b + 17, a + 10, b + 34, 'FD');
        cpt++;
        if (cpt < 7) {
            a = a + 26;
        } else {
            b = b + 40;
            a = 10;
            cpt = 0;
            nbLigne++;
        }
    }, this);

    switch (cpt) {
        case 0:
            cpt = 0;
            break;
        case 1 :
            cpt = 1;
            break;
        case 2 :
            cpt = 1;
            break;
        case 3 :
            cpt = 2;
            break;
        case 4 :
            cpt = 2;
            break;
        case 5 :
            cpt = 3;
            break
        case 5 :
            b = b + 40;
            a = 10;
            cpt = 0;
            nbLigne++;
            break;
    }

//Hexagon
    F3.forEach(function (pattern) {
        if (nbLigne == 6) {
            nbLigne = 0;
            nbPage++;
            doc.addPage();
            doc.setFont("helvetica");
            doc.setTextColor(147, 175, 189);
            doc.text(75, 20, 'Nom de l\'application  -  Page ' + nbPage);
            b = 40;
        }
        setColor(pattern, doc);
        doc.triangle(a, b + 17, a + 20, b + 17, a + 10, b, 'FD');
        doc.triangle(a + 20, b + 17, a + 10, b, a + 30, b, 'FD');
        doc.triangle(a + 20, b + 17, a + 40, b + 17, a + 30, b, 'FD');
        doc.triangle(a + 20, b + 17, a + 40, b + 17, a + 30, b + 34, 'FD');
        doc.triangle(a + 20, b + 17, a + 10, b + 34, a + 30, b + 34, 'FD');
        doc.triangle(a + 20, b + 17, a + 10, b + 34, a, b + 17, 'FD');
        cpt++;
        if (cpt < 4) {
            a = a + 46;
        } else {
            b = b + 40;
            a = 10;
            cpt = 0;
            nbLigne++;
        }
    }, this);


//Trapeze
    F2.forEach(function (pattern) {
        if (nbLigne == 6) {
            nbLigne = 0;
            nbPage++;
            doc.addPage();
            doc.setFont("helvetica");
            doc.setTextColor(147, 175, 189);
            doc.text(75, 20, 'Nom de l\'application  -  Page ' + nbPage);
            b = 40;
        }
        setColor(pattern, doc);
        doc.triangle(a, b + 17, a + 20, b + 17, a + 10, b, 'FD');
        doc.triangle(a + 20, b + 17, a + 10, b, a + 30, b, 'FD');
        doc.triangle(a + 20, b + 17, a + 40, b + 17, a + 30, b, 'FD');

        cpt++;
        if (cpt < 4) {
            a = a + 46;
        } else {
            b = b + 40;
            a = 10;
            cpt = 0;
            nbLigne++;
        }
    }, this);


    doc.save('Test.pdf');
}

