    $(".a-next").attr({ href: "template-one.html"});
    $(".template-img img").on("touchstart", function() {
      $(this).addClass('frame').siblings('img').removeClass('frame ');
    })

    $(".template-img").children('*:nth-child(2)').on("touchstart", function() {
      $(".a-next").attr({ href: "template-one.html"});
    })
    $(".template-img").children('*:nth-child(3)').on("touchstart", function() {
      $(".a-next").attr({ href: "template-two.html"});
    })
    $(".template-img").children('*:nth-child(4)').on("touchstart", function() {
      $(".a-next").attr({ href: "template-three.html"});
    })
    $(".template-img").children('*:nth-child(5)').on("touchstart", function() {
      $(".a-next").attr({ href: "template-four.html"});
    })
    $(".template-img").children('*:nth-child(6)').on("touchstart", function() {
      $(".a-next").attr({ href: "template-five.html"});
    })

    $(".template-img").children('*:nth-child(7)').on("touchstart", function() {
      $(".a-next").attr({ href: "template-six.html"});
    })

    //我的
    var pad = "<div class=comment><span class=num>189XXXX1890</span><span class=like>赞<span class=like-num>11</span></span><span class=share>分享</span></div><div class=close></div>";
    $(".rule").on("tap", function(){
      $(".praise").css("display", "none").siblings(".con-rule").css("display", "block");
    })
    $("#rule-back").on("tap", function(){
      $(".con-rule").css("display", "none").siblings(".praise").css("display", "block");
    })
    $(".con li").on("tap", function(){
      $(".data-bac").css("display", "block");
      $(".data-con").css("display", "block").html($(this).html()+pad);
    })
    var j = 0;//设置一个开关，默认0为关，即没选中
    $(".data-con").on("tap",".like", function(){
      if ( j == 0) {
        $(this).css("background", "url(images/xiaohongxing.png) 0 0 no-repeat");
        $(this).css("background-size", "50% 100%");
        j = 1;
        $(".like-num").html(12);
      } else {
        $(this).css("background", "url(images/praise.png) 0 0 no-repeat");
        $(this).css("background-size", "50% 100%");
        j = 0;
        $(".like-num").html(11);
      }
    })
    $(".data-con").on("tap", ".share", function(){
      $(".wxshare").css("display", "block");
    })
    $(".wxshare-back").on("tap", function(){
      $(".wxshare").css("display", "none");
    })
    $(".data-con").on("tap", ".close", function(){
      $(".data-con").css("display", "none");
      $(".data-bac").css("display", "none");
    })
    //页数切换
    var k;
    var i;
    var x = 0;//开关，判断点击是不是同一个按钮
    var y = 0;
    function pag(){
      $(".page-num:eq(0)").html($(".page-num:eq(0)").html() / 1 + i + k);
      $(".page-num:eq(1)").html($(".page-num:eq(1)").html() / 1 + i + k);
      $(".page-num:eq(2)").html($(".page-num:eq(2)").html() / 1 + i + k);
      $(".page-num:eq(3)").html($(".page-num:eq(3)").html() / 1 + i + k);
    }
    function pic(){
      var  j = Math.floor(Math.random()*6);
      $(".con li:eq(0)").children("img").attr("src","../images/5"+j+".jpg");
      j = Math.floor(Math.random()*6);
      $(".con li:eq(1)").children("img").attr("src","../images/5"+j+".jpg");
      j = Math.floor(Math.random()*6);
      $(".con li:eq(2)").children("img").attr("src","../images/5"+j+".jpg");
      j = Math.floor(Math.random()*6);
      $(".con li:eq(3)").children("img").attr("src","../images/5"+j+".jpg");
      j = Math.floor(Math.random()*6);
      $(".con li:eq(4)").children("img").attr("src","../images/5"+j+".jpg");
      j = Math.floor(Math.random()*6);
      $(".con li:eq(5)").children("img").attr("src","../images/5"+j+".jpg");
    }
    $(".page-num").on("tap", function(){
      x = $(this).html();
      if ( x != y) {
        k = 0;
        i = $(this).index() - 2;
        if (((($(".page-num:eq(0)").html() / 1) + i) + k) <= 20 && ((($(".page-num:eq(1)").html() / 1) + i) + k) <= 21 && ((($(".page-num:eq(2)").html() / 1) + i) + k) <= 22 && ((($(".page-num:eq(3)").html() / 1) + i) + k) <= 23) {
          pag();
          pic();  
          y = x;
          x = 0;
        };
      };
    })
    $(".before").on("tap", function(){
      k = -1;
      i = 0;
      if (((($(".page-num:eq(0)").html() / 1) + i) + k) >= 1 && ((($(".page-num:eq(1)").html() / 1) + i) + k) >= 2 && ((($(".page-num:eq(2)").html() / 1) + i) + k) >= 3 && ((($(".page-num:eq(3)").html() / 1) + i) + k) >= 4) {
        pag();
        pic();  
        x = 0;
        y = 2;
      };
    })
    $(".next").on("tap", function(){
      k = 1;
      i = 0;
      if (((($(".page-num:eq(0)").html() / 1) + i) + k) <= 20 && ((($(".page-num:eq(1)").html() / 1) + i) + k) <= 21 && ((($(".page-num:eq(2)").html() / 1) + i) + k) <= 22 && ((($(".page-num:eq(3)").html() / 1) + i) + k) <= 23) {
        pag();
        pic();  
        x = 0;
        y = 3;
      };
    })
    $(".first").on("tap", function(){
      x = 7;
      if (x != y) {
        $(".page-num:eq(0)").html(1);
        $(".page-num:eq(1)").html(2);
        $(".page-num:eq(2)").html(3);
        $(".page-num:eq(3)").html(4);
        pic();
        x = 0;
        y = 7;
      };
        
    })
    $(".last").on("tap", function(){
      x = 8;
      if (x != y) {
        if (x != y) {
          $(".page-num:eq(0)").html(20);
        $(".page-num:eq(1)").html(21);
        $(".page-num:eq(2)").html(22);
        $(".page-num:eq(3)").html(23);
        pic();
        x = 0;
        y = 8;
        };
      };
    })