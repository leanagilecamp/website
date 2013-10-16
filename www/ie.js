/**
* hacks pour IE
*/
$(document).ready(function () {
    $("#menu").on("affiche:accueil", function(evt) {
        $('.logo').attr('src', 'logo.gif');
    });
});