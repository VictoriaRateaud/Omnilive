$(document).ready(function() {
    $(window).on('load', function(){
        var wrapper = $('#loader-wrapper');
        var loader = $('#loader');
        wrapper.addClass('loaded');
        loader.css("visibility", "visible");
        setTimeout(function(){
            wrapper.css("visibility", "hidden");
            loader.css("visibility", "hidden");
        }, 600);
    });
});