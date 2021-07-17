$(document).ready(function(){

    $(".switch_mode i").click(function(){

        $("#dmb").toggle();
        $("#lmb").toggle();
        $("body").toggleClass("black");
        $(".top a").toggleClass("text_white");
        $(".shop_gal_nav").toggleClass("white");
        $(".shop_gal_nav h5").toggleClass("text_black");
       
    });

    $(".shopping_gallery img").click(function(){

        var img_source=$(this).attr("src");
        $("#Display_pop").css("display","block");
        $("#Opened_img").attr("src",img_source);
        $("body").css("position","fixed");

    });

});