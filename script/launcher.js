define(["game"], function (Game) {

    var fakeInterface = {
        savedData : [],
        language : 'english',
        save : save,
        close : close
    };

    function close () {
        console.log("The canvas should be closed now.");
    }

    function save (data) {
        console.log("Kalulu will save your data now.");
    }
    // Instanciate the new game in french and with no saved data
    var test = new Game(fakeInterface);
    
});

