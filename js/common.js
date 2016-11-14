onload = function(){
	// 导航固定在顶部
    var $nav2 = $('#nav2');
	var nav2ost = $nav2.offset().top;
	var nav2h =  $nav2.offset().height;
	console.log(nav2h);
    window.onscroll = function() {
		var scrollTop = $(document).scrollTop();
		if(scrollTop>=nav2ost){
			$nav2.css({
				position:'fixed',
				top:"0px"
			})
		}else{
			$nav2.css({
				position:''
			})
		}
		//console.log(scrollTop);
	}
	// 判断是否登录
    var ok = document.getElementById("ok");
    var flag = getCookie("flag");
    console.log(flag);
    if(flag){
    	ok.innerHTML="退出";
    	//console.log(ok.innerHTML);
    	console.log("已登录");
	    }else{
	    	console.log("error");
	}

}