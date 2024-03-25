$(document).ready(function(){

    $('#menu').on('click', function(){
        $(this).toggleClass('fa-xmark');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load',function(){

       $('#menu').removeClass('fa-xmark');
        $('header').removeClass('toggle');
    });

});
