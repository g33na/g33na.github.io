$( document ).ready(function () {
    console.log( "ready!" );
/*     $("button").on("click", function () {
        console.log("click working");
        $('a').hide();
    });  */
    $( "[function=hide]" ).on( "click", function () {
        console.log("click to hide");
        $('a').fadeOut();
/*         $('br').remove();
        $('.outer, .inner').removeClass(['outer','inner']) */
    }); 
    $( "[function=show]" ).on( "click", function () {
        console.log("click to show");
        $('a').fadeIn();
        

    });  
});