function check(){
    alert("working");
}

function nav_open(){
    document.getElementById("Inside_Mynav").style.width="50%";
    document.getElementById("mySlider").style.opacity="50%";
    document.body.style.position="fixed";    
}
function nav_close(){
    document.getElementById("Inside_Mynav").style.width="0%";  
    document.getElementById("mySlider").style.opacity="100%";
    document.body.style.position="";
}

function navitems_hoverin(val){
    if(val=="a"){
        document.getElementById('for_about').style.display="block";
        document.getElementById('for_gallery').style.display="none";
        document.getElementById('for_contact').style.display="none";
    }
    else if(val=="g"){
        document.getElementById('for_about').style.display="none";
        document.getElementById('for_gallery').style.display="block";
        document.getElementById('for_contact').style.display="none";
    }
    else if(val=="c"){
        document.getElementById('for_about').style.display="none";
        document.getElementById('for_gallery').style.display="none";
        document.getElementById('for_contact').style.display="block";
    }else{
        document.getElementById('for_about').style.display="none";
        document.getElementById('for_gallery').style.display="none";
        document.getElementById('for_contact').style.display="none";
    }
    
}

function navitems_hoverout(){
    document.getElementById('for_about').style.display="none";
    document.getElementById('for_gallery').style.display="none";
    document.getElementById('for_contact').style.display="none";
}

function mob_nav_open(){
    document.getElementById("mobile_top_content").style.height="425px";
    document.getElementById("mobile_top_closeBtn").style.display="inline-block";
    document.getElementById("mobile_top_openBtn").style.display="none";
    document.getElementById("mySlider").style.opacity="50%";
    document.body.style.position="fixed";
}

function mob_nav_close(){
    document.getElementById("mobile_top_content").style.height="0px";
    document.getElementById("mobile_top_closeBtn").style.display="none";
    document.getElementById("mobile_top_openBtn").style.display="inline-block";
    document.getElementById("mySlider").style.opacity="100%";
    document.body.style.position="";
}

function switch_mode(hide, show){
    if(hide=="dmb"){
        document.getElementById(hide).style.display="none";
        document.getElementById(show).style.display="block";
    }
    else{
        document.getElementById(hide).style.display="none";
        document.getElementById(show).style.display="block";
    }
}

