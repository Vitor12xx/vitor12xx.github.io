$(document).ready(function(){
    $("#homeli").click(function(){
        $("#autordiv").fadeOut(500);
        $("#headBdA").fadeIn(500);
        $("#headFdE").fadeIn(500);
        $("#indexImgBdA").show();
        $("#indexImgFdE").show();
        $("#BdAdiv").hide();
        $("#sobrediv").fadeOut(500);
        $("#FdEdiv").hide();
        $("#BdA-icon").animate({left: '20%',top: '40%'}, function(){
            $("#indexImgBdA").css("width", "220px");
            $("#indexImgBdA").css("height", "220px");
            $("#indexImgBdA").addClass("rounded-circle");
            $("#indexImgBdA").removeClass("rounded")
        });
        $("#FdE-icon").animate({left: '60%',top: '40%'}, function(){
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
        $("#BdA-icon").animate({left: '10px', top: "10px"}, function(){
            $("#BdAdiv").fadeIn(500);
            $("#BdA-icon").css("width","80px");
            $("#BdA-icon").css("max-width","80px");
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
        $("#FdE-icon").animate({left: '10px', top: "10px"}, function(){
            $("#FdEdiv").fadeIn(500);
            $("#FdE-icon").css("max-width","80px");
            $("#indexImgFdE").css("width", "100px");
            $("#indexImgFdE").css("height", "80px");
            $("#indexImgFdE").removeClass("rounded-circle");
            $("#indexImgFdE").addClass("rounded");
    });
});
    $("#autorli").click(function(){
        $("#indexImgBdA").fadeOut();     
        $("#indexImgFdE").fadeOut();     
        $("#BdAdiv").hide();
        $("#FdEdiv").hide();
        $("#autordiv").fadeIn(1000);
        $("#headBdA").hide();
        $("#headFdE").hide();
        $("#sobrediv").fadeOut();

});
$("#imgautor").click(function(){
    $("#indexImgBdA").fadeOut();     
    $("#indexImgFdE").fadeOut();     
    $("#BdAdiv").hide();
    $("#FdEdiv").hide();
    $("#sobrediv").hide();
    $("#autordiv").fadeIn(1000);
    $("#headBdA").fadeOut();
    $("#headFdE").fadeOut();
});
$("#sobreli").click(function(){
    $("#indexImgBdA").fadeOut();     
    $("#indexImgFdE").fadeOut();     
    $("#BdAdiv").hide();
    $("#FdEdiv").hide();
    $("#autordiv").hide();
    $("#sobrediv").fadeIn(1000);
    $("#headBdA").fadeOut();
    $("#headFdE").fadeOut();
});
});