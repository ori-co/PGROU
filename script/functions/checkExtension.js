//Function to verify the extension 
function checkExtension() {
    var fileInput = document.getElementById('fileInput');
    var myString = fileInput.value;
    var myExt = myString.substring(myString.lastIndexOf(".") + 1, myString.length);
    myExt = myExt.toLowerCase();

    //Error message if it is not a JSON
    if (myExt !== "json") {
        alert("Your file does not have the right format. Please, choose a JSON file.");
    } else {
        //If it is good, we launch the game
        start();
    }
}