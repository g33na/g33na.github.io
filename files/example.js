$( document ).ready(function () {
    console.log( "ready!" );
/*     $("button").on("click", function () {
        console.log("click working");
        $('a').hide();
    });  */
    $( "[function=hide]" ).on( "click", function () {
        console.log("click to hide");
        $('a').fadeOut();
    }); 
    $( "[function=show]" ).on( "click", function () {
        console.log("click to show");
        $('a').fadeIn();
    });  
});