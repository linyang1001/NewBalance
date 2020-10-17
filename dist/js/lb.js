define(["jquery"],function($){
    function banner(){
    var oUl = $(".lb").find("ul");
    var btn1 = document.getElementById("btn1")
    var btn2 = document.getElementById("btn2")
    var Lb = document.getElementById("lb")
    var i = 1;
    var timer = null
    timer = setInterval(function(){
        i++
        tab()
    },2000)
    
    Lb.onmouseenter = function(){
        clearInterval(timer)
    }
    Lb.onmouseleave = function(){
        timer = setInterval(function(){
        i++
        tab()
    },2000)

    }

    btn2.onclick = function(){
        i++
        tab()
    }
    btn3.onclick = function(){
        i--
        tab()
    }

    function tab(){
        oUl.animate({
            left: i * -1519,
        },300,
        function(){
            if(i===3){
                i=0
                oUl.css("left",-1519)
            }else if(i===0){
                i=2
                oUl.css("left",-3038)
            }
        })
    } 
    }
    return {
        banner:banner
    }
    
})
