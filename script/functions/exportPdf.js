function pdf() {
var doc = new jsPDF('landscape');

var a = 10;
var b = 10;

//Title
doc.setFont("helvetica");
doc.setTextColor(131,138,0);
doc.text(75, 20, 'Nom de l\'application');

//Carré
doc.setDrawColor(0,0,255);
doc.setFillColor(0,0,255);
doc.rect(a, b, 20, 20, 'F'); 

//Carré 45
doc.addPage();
doc.setDrawColor(0,0,255);
doc.setFillColor(0,0,255);
doc.triangle(a+14, b, a, b+14, a+28, b+14, 'FD');
doc.triangle(a, b+14, a+14, b+28, a+28, b+14, 'FD');

//Triangle equi
doc.addPage();
doc.setDrawColor(0,0,255);
doc.setFillColor(0,0,255);
doc.triangle(a+10, b, a, b+20, a+20, b+20, 'FD');

//hexagone
doc.addPage();
doc.setDrawColor(0,0,255);
doc.setFillColor(0,0,255);
doc.triangle(100, 100, 150, 100, 125, 57, 'FD');
doc.triangle(100, 100,75 ,57 , 125, 57, 'FD');
doc.triangle(150, 100, 175 ,57 , 125, 57, 'FD');
doc.triangle(150, 100, 175 ,57 , 125, 57, 'FD');
doc.triangle(150, 14 , 175 ,57 , 125, 57, 'FD');
doc.triangle(100, 14 , 75 ,57 , 125, 57, 'FD');
doc.triangle(100, 14 , 150 ,14 , 125, 57, 'FD');

//Trapèze
doc.addPage();
doc.setDrawColor(0,0,255);
doc.setFillColor(0,0,255);
doc.triangle(100, 100, 150, 100, 125, 57, 'FD');
doc.triangle(100, 100,75 ,57 , 125, 57, 'FD');
doc.triangle(150, 100, 175 ,57 , 125, 57, 'FD');
doc.triangle(150, 100, 175 ,57 , 125, 57, 'FD');

//Triangle rectangle
doc.addPage();
doc.setDrawColor(0,0,255);
doc.setFillColor(0,0,255);
doc.triangle(100, 100, 150, 100, 125, 125, 'FD');

//Losange
doc.addPage();
doc.setDrawColor(0,0,255);
doc.setFillColor(0,0,255);
doc.triangle(150, 100, 175 ,57 , 125, 57, 'FD');
doc.triangle(150, 14 , 175 ,57 , 125, 57, 'FD');


doc.save('Test.pdf');
}