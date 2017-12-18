$(document).ready(function(){
    $("#home").click(function(){
        $("#autordiv").fadeOut(500);
        $("#headBdA").fadeIn(500);
        $("#headFdE").fadeIn(500);
        $("#indexImgBdA").show();
        $("#indexImgFdE").show();
        $("#grandediv").hide();
        $("#sobrediv").fadeOut(500);
        $("#outragrandediv").hide();
        $("#divBdA").animate({left: '450px',top: '370px'}, function(){
            $("#indexImgBdA").css("width", "220px");
            $("#indexImgBdA").css("height", "220px");
            $("#indexImgBdA").addClass("rounded-circle");
            $("#indexImgBdA").removeClass("rounded")
        });
        $("#divFdE").animate({left: '950px',top: '370px'}, function(){
            $("#indexImgFdE").css("width", "220px");
            $("#indexImgFdE").css("height", "220px");
            $("#indexImgFdE").addClass("rounded-circle");
            $("#indexImgFdE").removeClass("rounded")
        });
    });
    $("#indexImgBdA").click(function(){
        $("#autordiv").hide();
        $("#headBdA").fadeOut(500);
        $("#headFdE").fadeOut(500);
        $("#firstImg").fadeOut();
        $("#indexImgFdE").fadeOut();
        $("#indexImg3").fadeOut();
        $("#divBdA").animate({left: '10px', top: "10px"}, function(){
            $("#grandediv").fadeIn(500);
            $("#divBdA").css("width","80px");
            $("#divBdA").css("max-width","80px");
            $("#indexImgBdA").css("width", "100px");
            $("#indexImgBdA").css("height", "80px");
            $("#indexImgBdA").removeClass("rounded-circle");
            $("#indexImgBdA").addClass("rounded");
    });
    });
    $("#indexImgFdE").click(function(){
        $("#headBdA").hide();
        $("#headFdE").hide();
        $("#autordiv").hide();
        $("#firstImg").fadeOut();
        $("#indexImgBdA").fadeOut();
        $("#indexImg3").fadeOut();
        $("#divFdE").animate({left: '10px', top: "10px"}, function(){
            $("#outragrandediv").fadeIn(500);
            $("#divFdE").css("max-width","80px");
            $("#indexImgFdE").css("width", "100px");
            $("#indexImgFdE").css("height", "80px");
            $("#indexImgFdE").removeClass("rounded-circle");
            $("#indexImgFdE").addClass("rounded");
    });
});
    $("#autorli").click(function(){
        $("#indexImgBdA").fadeOut();     
        $("#indexImgFdE").fadeOut();     
        $("#grandediv").hide();
        $("#outragrandediv").hide();
        $("#autordiv").fadeIn(1000);
        $("#headBdA").hide();
        $("#headFdE").hide();
        $("#sobrediv").fadeOut();

});
$("#imgautor").click(function(){
    $("#indexImgBdA").fadeOut();     
    $("#indexImgFdE").fadeOut();     
    $("#grandediv").hide();
    $("#outragrandediv").hide();
    $("#sobrediv").hide();
    $("#autordiv").fadeIn(1000);
    $("#headBdA").fadeOut();
    $("#headFdE").fadeOut();
});
$("#sobreli").click(function(){
    $("#indexImgBdA").fadeOut();     
    $("#indexImgFdE").fadeOut();     
    $("#grandediv").hide();
    $("#outragrandediv").hide();
    $("#autordiv").hide();
    $("#sobrediv").fadeIn(1000);
    $("#headBdA").fadeOut();
    $("#headFdE").fadeOut();
});
});