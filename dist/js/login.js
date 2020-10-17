define(["jquery"],function($){
    function log(){
        $("#btn").click(function(){
            $.ajax({
                type:"post",
                url:"./php/login.php",
                data:{
                    username:$(".login-item").eq(0).val(),
                    password:$(".login-item").eq(1).val()
                },
                success:function(result){
                    var obj = JSON.parse(result)
                    console.log(obj.msg)
                    if(obj.code==1){
                        alert("用户名不能为空")
                    }else if(obj.code==2){
                        alert("密码不能为空")
                    }else if(obj.code==3){
                        alert("用户名或密码错误")
                    }else{
                        alert("登录成功")
                    }  
                },
                error:function(msg){
                    console.log(msg)
                }
            })
        })
    }
    return {
        log:log
    }
})