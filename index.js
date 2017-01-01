//main function
$(document).ready(function () {
    'use strict';
    
    //LOGO ANIMATION
    $(".logo").hover(function() {
         $(this).children("img").animate({height: "80px", width: "80px"}, 150);
    });
    $(".logo").mouseleave(function() {
         $(this).children("img").animate({height: "70px", width: "70px"}, 150);
    });
    
    //LINK ANIMATION
    $(".link").hover(function() {
        $(this).css("font-weight", "bold");
        $(this).css("color", "#01a988");
    });
    $(".link").mouseleave(function() {
        $(this).css("font-weight", "normal");
        $(this).css("color", "#02dbb0");
    });
    
    //HEADER SLIDE ANIMATION
   $('.content-header').on('inview', function(event, isInView) {
        if (isInView) {
            // element is now visible in the viewport
            $(this).animate({left: "0px"}, 700);
        } else {
            // element has gone out of viewport
            $(this).animate({left: "-99%"}, 700);
        }
    });
    
    //SMOOTH SCROLL ** NEEDS WORK **
    /*$('a').click(function(){
        $('html, body').animate({
            scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
        }, 500);
        return false;
    });*/

});