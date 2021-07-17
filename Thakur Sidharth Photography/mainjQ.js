$(document).ready(function() {

    $('.carousel').carousel({
        interval: 3000
      });

    $(".switch_mode i").click(function() {
        $("ol.carousel-indicators , ol.carousel-indicators li").toggleClass("black");
        $("ol.carousel-indicators li.active").toggleClass("white");
        
        $("body , .myNavigation , .text a ,  .section4 .card , input , textarea.form-control , #Inside_Mynav  ").toggleClass("black");
        $(".section3 h4  ").toggleClass("white");
        $(".section6 .footer , #Call div").toggleClass("gray");
        $(".section3 h3 , .mynav_srch button , #item_left a , #for_about , #for_gallery a , #for_contact a , .mynav_socialLinks a").toggleClass("text_white");
        $("").toggleClass("text_black");
        $("input").toggleClass("white_border");
        
    });

    $("div.contact .mail").click(function(){
        $("#Mail").delay(800).slideToggle(800, 'linear');
        $("#Call").slideUp(800, 'linear');
    });

    $("div.contact .call").click(function(){
        $("#Call").delay(800).slideToggle(800, 'linear');
        $("#Mail").slideUp(800, 'linear');
    });
    
});