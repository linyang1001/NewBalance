define(["jquery"],function($){
    function fangda(){
        var img = document.querySelectorAll(".left img")
        $(img[0]).click(function(){
            $(".center img").attr("src","img/gouwu-big.png")
            $(".big img").attr("src","img/gouwu-big.png")
        })
        $(img[1]).click(function(){
            $(".center img").attr("src","img/gouwu2-big.png")
            $(".big img").attr("src","img/gouwu2-big.png")
        })
        $(img[2]).click(function(){
            $(".center img").attr("src","img/gouwu3-big.png")
            $(".big img").attr("src","img/gouwu3-big.png")
        })
        $(img[3]).click(function(){
            $(".center img").attr("src","img/gouwu4-big.png")
            $(".big img").attr("src","img/gouwu4-big.png")
        })

        $(".center-b")
          .mouseenter(function () {
            $("#mark,.big").show();
          })
          .mouseleave(function () {
            $("#mark,.big").hide();
          })
          .mousemove(function(ev){
            var l = ev.pageX - $(this).offset().left - 75;
            l = Math.max(0, l);
            l = Math.min(l, 392);
            var t = ev.pageY - $(this).offset().top - 75;
            t = Math.max(0, t);
            t = Math.min(t, 392);
            $("#mark").css({
              left: l,
              top: t
            })
            $(".big img").css({
              left: -2 * l,
              top: -2 * t
            })
          })
    }
    return {
        fangda:fangda
    }

        })