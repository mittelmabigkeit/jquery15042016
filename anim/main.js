$(document).ready(function(){
    $(".run").click(function(){
 
        $("#box").animate({left: "+=400"}, "slow")
        .animate({top: "+=160"}, "fast")
        .animate({left: "0"}, "slow")
        .animate({top: "0"}, "fast")
        .slideDown("slow")
        return false;
 
    }); 
});

$(document).ready(function(){
    $(".run").click(function(){
 
        $("#boxone").animate({left: "+=400"}, "fast")
        .animate({top: "+=160"}, "slow")
        .animate({left: "0"}, "fast")
        .animate({top: "0"}, "slow")
        .slideDown("slow")
        return false;
        
    }); 
});

$(document).ready(function(){
    $(".run").click(function(){
 
        $("#boxtwo").animate({left: "+=400"}, "fast")
        .animate({top: "+=160"}, "fast")
        .animate({left: "0"}, "slow")
        .animate({top: "0"}, "slow")
        .slideDown("slow")
        return false;
        
    }); 
});