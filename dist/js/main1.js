// console.log("加载成功")
require.config({
    paths:{         
        "jquery":"jquery-1.11.3",
        // "lb":"lb",
        "list":"list",
        "gouwu":"gouwu"
    },
    shim:{
        //设置依赖关系
        "jquery-cookie":["jquery"],
        parabola:{
            exprots:"_"
        }
    }
})

// require(["lb"], function(lb){
//     lb.banner();
// })
require(["list"], function(list){
    list.download();
})
// require(["gouwu"], function(gouwu){
//     gouwu.fangda();
// })