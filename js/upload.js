/* 
* @Author: anchen
* @Date:   2015-11-07 11:54:30
* @Last Modified by:   anchen
* @Last Modified time: 2015-11-09 19:55:43
*/

/*下一步显示文本框*/
/*$(".next-one").on("touchstart", function() {
    $(this).attr({"class":"next-two"});
    $(".text-case").css({
    "display": "block"
     });
    $(".next-two").on("touchstart", function() {
       console.log(1111);
    })
})

*/
$(".next-one").on("touchstart", function() {
    $(".next-one").css({
       "display": "none"
    });
    $(".next-two").css({
       "display": "block"
    });
    $(".text-case").css({
    "display": "block"
     });
})
$(".next-two").on("touchstart", function() {
   if ($(".text-case textarea").val()) {
    console.log(0);
   } else {
    console.log(1);
   }
})





var divId = "";
$(".content").on("click","label",function(e){
        //更换提交表单id名
    $(".file-upload input").attr("id", $(e.target).attr("for"));
    //当前点击div的id
    divId="picture-" + $(".file-upload input").attr("id");
    console.log(divId);
})
$("#face-one").on("change", function(){
    $(".file-upload").ajaxSubmit({
        url : "../ajax/file_upload.php",
        type : "post",
        success : function(response){
            console.log(response);
            var ls = window.localStorage;
            if(response.state) {
                $("#picture-" + $(".file-upload input").attr("id")).html("<img src='" + response.url +"' onload='load()'/>");
                ls.setItem($(".file-upload input").attr("id"), $("#picture-" + $(".file-upload input").attr("id") + " img").attr("src"));
                $(".load").css({"display": "block"});
                //load效果
                var imgs = document.getElementById(divId).getElementsByTagName("img");
                console.log(imgs);
                imgs[0].onload = function(){
                    $(".load").css({"display": "none"});
                }
            } else {
                $("#"+ divId + " img").attr("src", ls.getItem($(".file-upload input").attr("id")));
                console.log(ls.getItem("img"))
            }
        }
    })
})
        
