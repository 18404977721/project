$(function(){
    //数量加减
    $("#jian").click(function(){
        if($("#quantity").html()<=1){

        }else{
            $("#quantity").html(parseInt($("#quantity").html())-1);
            console.log($("#money").html());
            $("#money").html(parseInt($("#quantity").html())*399);
            $("#price span").html(parseInt(parseInt($("#money").html())));
        }
    })
    $("#jia").click(function(){
        $("#quantity").html(parseInt($("#quantity").html())+1);
        console.log($("#money").html());
        $("#money").html((parseInt($("#quantity").html()))*399);
        $("#price span").html(parseInt($("#money").html()));
    })
    //分页
    $(".tab").find("a").click(function(){
        $(".xianshi").eq($(this).index()).css("display","block");
        $(".xianshi").eq($(this).index()).siblings().css("display","none");
        $(this).addClass("selectedTab").siblings().removeClass("selectedTab");
    })
    //删除
    $("#delete").click(function(){
        $("h3").css('display','none');
        $(".details").css('display','none');
        $(".kong").css('display','block');
        $("i").addClass("now").removeClass("cur");
        $("#yixuan").html(0);
        $("#jie").html(0);
        $("#price span").html(0);
        $(".bao").html(0);
    })
    $("#delete1").click(function(){
        $("h3").css('display','none');
        $(".details").css('display','none');
        $(".kong").css('display','block');
        $("i").addClass("now").removeClass("cur");
        $("#yixuan").html(0);
        $("#jie").html(0);
        $("#price span").html(0);
         $(".bao").html(0);
    })
    var flag1=true;
    $("i").click(function(){
        if(flag1){
            $("i").addClass("cur").removeClass("now");
            $("#jie").html(parseInt($("#money").html()));
            $("#jiesuan").css("background","red");
            $("#yixuan").html(1);
            flag1=false;
        }else{
            $("i").addClass("now").removeClass("cur");
            $("#jie").html(parseFloat(0).toFixed(2));
            $("#jiesuan").css("background","#ccc");
            $("#yixuan").html(0);
            flag1=true;
        }
    })
})