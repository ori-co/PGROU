//Chargement du fichier json
window.onload = function() {
    var fileInput = document.getElementById('fileInput');

    //On récupère le contenu du json qu'on passe en champ caché dans la div "cache"
    var fileCache = document.getElementById('cache');
    fileInput.addEventListener('change', function(e) {

            var file = fileInput.files[0];
            var reader = new FileReader();
            reader.onload = function(e) {

                var jsonObj = reader.result;
                fileCache.innerHTML = jsonObj;
            };
            reader.readAsText(file);
        }


    );

    ;
};