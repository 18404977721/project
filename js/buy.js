$(function () {
    // 鞋子主要内容上箭头与小图的控制开始
    var count=0;
    $("#yjiantou").click(function(){
        if(count==2){
            $(".big").find("ul").css("left",(count+1)*(-480));
            $("#yjiantou").css("display","none");
        }else{
            $("#zjiantou").css("display","block");
            $(".big").find("ul").css("left",(count+1)*(-480));
            count++;
        }
        console.log(count);
    })
    $("#zjiantou").click(function(){
        if(count==0){
            $(".big").find("ul").css("left",count*(-480));
            $("#zjiantou").css("display","none");
        }else{
            $("#yjiantou").css("display","block");
            count--;
            $(".big").find("ul").css("left",(count+1)*(-480));
            
        }
    })

    var uls = $(".big").find("ul");
    var oli = $("ol").find("li");
    oli.on("click", function () {
        count=$(this).index();
        if($(this).index()==0){//左箭头消失
            $("#zjiantou").css("display","none");
            $("#yjiantou").css("display","block");
            uls.css("left",$(this).index()*(-480));
        }else if($(this).index()==3){//右箭头消失
            $("#yjiantou").css("display","none");
            $("#zjiantou").css("display","block");
            uls.css("left",$(this).index()*(-480));
        }else{
            $("#zjiantou").css("display","block");
            $("#yjiantou").css("display","block");
            uls.css("left",$(this).index()*(-480));
        }
//                alert($(this).index());
    })
    // 鞋子主要内容上箭头与小图的控制结束
    //展开与收缩效果开始
    var flag=true;
    $("#open2").click(function(){
        
        if(flag){
            flag=false;
            $("#second").css("display","block");
            $(this).html("收缩");
            
        }else{
            flag=true;
            $("#second").css("display","none");
            $(this).html("展开");
        }
        console.log(flag);
    })
    //展开与收缩效果结束
    //鞋码点击
    $(".size li").click(function(){
        $(this).css("background","#666");
        $(this).siblings().css("background","#eee");
    })
    //数量点击
    $("#jian").click(function(){
        if($("#quantity").html()<=1){

        }else{
            $("#quantity").html(parseInt($("#quantity").html())-1);
        }
    })
    $("#jia").click(function(){
        $("#quantity").html(parseInt($("#quantity").html())+1);
    })
    //点击加入购物袋进入导航的包内
    var flag=true;//判断是否已经加入购物车了
    $(".shop").click(function(){
        if(flag){
            $(".bao").html(parseInt($(".bao").html())+1);
            //console.log(parseInt($(".bao").html())+1);
            $("#price span").html(parseInt($("#quantity").html())*parseInt($(".nowPrice span").html()));
            flag=false;
        }else{}
        
    })

    //秒杀倒计时  buy  nanxie
    var current = document.getElementsByClassName("current")[0];
    var endTime = new Date();
    endTime.setDate(endTime.getDate()+6);
    //endTime.setSeconds(endTime.getSeconds()+5);

    var timer = setInterval(function () {
        var nowTime = new Date();

        var str = "";
        var result = endTime.valueOf() - nowTime.valueOf();
        var day = Math.floor(result/(24*60*60*1000))+"天";
        var hour = toTwo(Math.floor((result%(24*60*60*1000))/(60*60*1000)))+"小时";
        var minute = toTwo(Math.floor((result%(60*60*1000))/(60*1000)))+"分钟";
        var second = toTwo(Math.floor((result%(60*1000))/(1000)))+"秒";
        var msecond = toTwo(Math.floor(result%(1000)/10));
        str = str.concat(day,hour,minute,second,msecond);

        current.innerHTML = str;
        if(result<=0){
            current.innerHTML = "秒杀结束";
            clearInterval(timer);
        }
    },20);
    function toTwo(num) {
        return num<10?"0"+num:num;
    }
    //秒杀倒计时结束
})