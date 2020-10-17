define(["jquery"],function($){
    function reg(){
$("#btn1").click(function(){
    $.ajax({
        type:"post",
        url:"./php/register.php",
        data:{
            username:$(".register-item").eq(0).val(),
            password:$(".register-item").eq(1).val(),
            repassword:$(".register-item").eq(2).val(),
            createtime:(new Date()).getTime()
        },
        success:function(result){
            var obj = JSON.parse(result)
            if(obj.code){
                $(".aaa").find(".alert").attr("class","b")
            }else{
                $(".aaa").find(".alert").attr("class","alert")
            }
            $(".aaa").show().html(obj.msg)
        },
        error:function(msg){
            console.log(msg)
        }
    })
})
    }
    return {
        reg:reg
    }
})