onload = function(){
	function getStyle(obj,attr) {
    if(obj.currentStyle) return obj.currentStyle[attr];
    else return getComputedStyle(obj,false)[attr];
}
	var content = document.getElementById("content");
	var contentMarginTop=parseInt(getStyle(content,"marginTop"));
     // 导航固定在顶部
     var $nav2 = $('#nav2');
	 var nav2ost = $nav2.offset().top;
	 var nav2h =  $nav2.outerHeight();
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

		//点击回到顶部
	    var clickOn=document.getElementsByClassName("clickOn")[0];
	    var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;   
	    if(scrollTop>=900){
	    	clickOn.style.display="block";
	    }else{
	    	clickOn.style.display="none";
	    }
	    clickOn.onclick = function(){
	    	document.documentElement.scrollTop = document.body.scrollTop = 0;
	    }

	    //content部分随鼠标滚动
	    //console.log(scrollTop);
	    if(contentMarginTop-scrollTop>0){
	    	content.style.marginTop = contentMarginTop-scrollTop+"px";
	    }

	}

	//分页效果
	var x1=document.getElementsByClassName("x1");
	var arr=document.getElementsByClassName("div2");
	var slid = document.getElementById("slid");
    for(var i=0;i<x1.length;i++){
    	x1[i].index = i;
        x1[i].onclick = function(){
        	var index = this.index;
        	console.log(index);
            for (var j=0; j<arr.length; j++) {
				if (index == j) {
						//我所点击的li
					arr[j].style.display = "block";
					// this.style.borderBottom = "2px solid black";
					slid.style.left = j*90+"px";
				}else {
						//其他未选中状态
					arr[j].style.display = "none";
					this.style.borderBottom = "none";
				}
			}
        }
    }
    
	//轮播效果
	var uls = $("#lunbo");
    var oli = $("ol").find("li");
    oli.on("click", function () {
//                alert($(this).index());
        uls.animate({left:$(this).index()*(-320)},1400);
        $(this).siblings().attr("class","");
        $(this).attr("class","active");
        index = $(this).index();
    })
            
    var index = 0;
    var lastIndex = uls.find("li").length;
    var timer = setInterval(next,2000);
    uls.on({
        "mouseover": function () {
            clearInterval(timer);
        },
        "mouseout": function () {
            timer = setInterval(next,1200);
        }
    })

    function next() {
        uls.animate({left:index*(-320)},2000);
        oli.eq(index).attr("class","active");
        oli.eq(index).siblings().attr("class","");
        index++;
        if(index>=lastIndex){
            index=0;
        }
    }
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
}	
$(document).ready(function() {
	//窗口的事件：
	var $pp = $(".pp");
	var $floorLi = $(".floornav ul li");

	$(window).scroll(function(){
		var x = $(window).scrollTop();	//当前的卷动高度
		if(x < $pp.eq(1).offset().top - 300){
			$floorLi.eq(0).addClass("cur").siblings().removeClass("cur");
		}else if(x < $pp.eq(2).offset().top - 300){
			$floorLi.eq(1).addClass("cur").siblings().removeClass("cur");
		}else if(x < $pp.eq(3).offset().top - 300){
			$floorLi.eq(2).addClass("cur").siblings().removeClass("cur");
		}else if(x < $pp.eq(4).offset().top - 300){
			$floorLi.eq(3).addClass("cur").siblings().removeClass("cur");
		}else if(x < $pp.eq(5).offset().top - 300){
			$floorLi.eq(4).addClass("cur").siblings().removeClass("cur");
		}else if(x < $pp.eq(6).offset().top - 300){
			$floorLi.eq(5).addClass("cur").siblings().removeClass("cur");
		}else if(x < $pp.eq(7).offset().top - 300){
			$floorLi.eq(6).addClass("cur").siblings().removeClass("cur");
		}else if(x >= $pp.eq(7).offset().top - 300){
			$floorLi.eq(7).addClass("cur").siblings().removeClass("cur");
		}  
		console.log(x);
	});

	//点击楼层导航的时候：
	$(".floornav ul li").click(function(){
		$("html,body").animate(
			{	
				//往对应.pp上跳：
				"scrollTop" : $(".pp").eq($(this).index()).offset().top
			}
			,1000
		);
	});
});