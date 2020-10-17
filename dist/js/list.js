define(["jquery"],function($){
    function download(){
            $.ajax({
                url:"data/product.json",
                success:function(result){
                    var b = result.common
                    for(var i=0;i<b.length;i++){
                        $(`
                        <ul>
                <li>
                    <a href="gouwu.html">
                    <img src="${b[i].img}">
                    <p class="main-para">${b[i].para}</p>
                    <p class="main-para1">${b[i].para2}</p>
                    <p class="price">$${b[i].price}</p>
                </li>
                    </a>
            </ul>`).appendTo(".main .main-middle")
                    }
            // console.log(result)
                },
                error:function(msg){
                    console.log(msg)
                }
            })
    }
    return {
        download:download
    }
})