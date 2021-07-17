function moveToSelected(element){

    // if (element == "next") {
    //     var selected = $(".selected").next();
    //   } else if (element == "prev") {
    //     var selected = $(".selected").prev();
    // } else {
    // }
    var selected = element;

    var right1=$(selected).next();
    var left1=$(selected).prev();

    $(selected).removeClass().addClass("selected");
    $(left1).removeClass().addClass("left1");
    $(right1).removeClass().addClass("right1");
    $(left1).prevAll().removeClass().addClass("leftmost");
    $(right1).nextAll().removeClass().addClass("rightmost");
}

$("#carousel div").click(function(){
    moveToSelected($(this));
});

$(document).keyup(function(e){
    switch(e.which){
        case 37:
            moveToSelected("prev");
            break;
        
        case 39:
            moveToSelected("next");
            break;

        default: return;
    }
});