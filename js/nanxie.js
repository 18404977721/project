$( function(){
    var $nav2 = $('#nav2');
    var nav2ost = $nav2.offset().top;
    var nav2h =  $nav2.outerHeight();
    var nav3 = document.getElementById("nav3");
    window.onscroll = function() {
        var scrollTop = $(document).scrollTop();
        if(scrollTop>=nav2ost){
            $nav2.css({
                position:'fixed',
                top:0
            })
            $('#logo').css({marginBottom:nav2h})
        }else{
            $nav2.css({
                position:''
            })
            $('#logo').css({marginBottom:0})
        }
        if(scrollTop>=426){
            nav3.style.position='fixed';
            nav3.style.top='42px';
            nav3.style.boxShadow='0px 3px #eee'
        }else{
            nav3.style.position='';
             
        }
    }
    //秒杀倒计时  
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
     // 判断是否登录
    var ok = document.getElementById("ok");
    var flag = getCookie("flag");
    console.log(flag);
    if(flag){
        ok.innerHTML="退出";
        console.log(ok.innerHTML);
        console.log("已登录");
    }else{
        console.log("error");
    }
})