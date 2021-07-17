$(document).ready(function(){

    $(".s2_card ul li").click(function(){
        $(this).parent().children().removeClass();
        $(this).addClass("price_option_selected");
    });

    $(".s2_card ul li").click(function(){
        var card_check=$(this).attr("id");
        var card_price=$(this).val();
        var per_price;

        switch(card_check.slice(2,card_check.length)){
            case "5":
                per_price=card_price/5;
                break;
            case "15":
                per_price=card_price/15;
                break;
            case "30":
                per_price=card_price/30;
                break;
            case "60":
                per_price=card_price/60;
                break;
            case "10":
                per_price=card_price/10;
                break;
            case "25":
                per_price=card_price/25;
                break;
            case "50":
                per_price=card_price/50;
                break;
            case "100":
                per_price=card_price/100;
                break;  
        }

        if(card_check.slice(0,1)=='c'){
            $("#credit_deal p:nth-of-type(2)").html("<i class='fas fa-rupee-sign fa-sm'></i>"+per_price+"<small>/ credit</small>");
        }
        else if(card_check.slice(0,1)=='m'){
            $("#month_deal p:nth-of-type(2)").html("<i class='fas fa-rupee-sign fa-sm'></i>"+per_price+"<small>/ image</small>");
        }
        else if(card_check.slice(0,1)=='q'){
            $("#quater_deal p:nth-of-type(2)").html("<i class='fas fa-rupee-sign fa-sm'></i>"+per_price+"<small>/ image</small>");
        }
        else if(card_check.slice(0,1)=='h'){
            $("#half_deal p:nth-of-type(2)").html("<i class='fas fa-rupee-sign fa-sm'></i>"+per_price+"<small>/ image</small>");
        }
        else if(card_check.slice(0,1)=='y'){
            $("#year_deal p:nth-of-type(2)").html("<i class='fas fa-rupee-sign fa-sm'></i>"+per_price+"<small>/ image</small>");
        }
    });

    $('.owl-carousel').owlCarousel({
        rewind:true,
        autoWidth:true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        dots: true,
        responsiveClass:true,
        // responsive:{
        //     0:{
        //         items:1
        //     },
        //     900:{
        //         items:2
        //     },
        //     1350:{
        //         items:3
        //     },
        //     1950:{
        //         items:4
        //     }
        // }
    });

});