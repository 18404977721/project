$(function(){
	//分页效果
	var x1=document.getElementsByClassName("x1");//周几
	var arr=document.getElementsByClassName("div2");//盒子
	var slid = document.getElementById("slid");
    for(var i=0;i<x1.length;i++){
    	x1[i].index = i;
        x1[i].onclick = function(){

        	var pageBtn = document.querySelectorAll('.tcdPageCode')[0];
        	var child = pageBtn.childNodes;
        	// console.log(child)


        	var index = this.index;
        	// console.log(index);
            for (var j=0; j<arr.length; j++) {
				if (index == j) {
						//我所点击的li
					arr[j].style.display = "block";

					var oSpan = document.createElement('span');
					oSpan.setAttribute('class','current');
					oSpan.innerHTML = child[j+1].innerHTML;
					pageBtn.removeChild(child[j+1]);
					pageBtn.insertBefore(oSpan,child[j+1]);

					// this.style.borderBottom = "2px solid black";
					slid.style.left = j*90+"px";
				}else {
						//其他未选中状态
					if(child[j+1].nodeName == 'SPAN'){
						console.log(child[j+1])
						var oA = document.createElement('a');
						oA.setAttribute('class','tcdNumber');
						oA.setAttribute('href','javascript:;');
						oA.innerHTML = child[j+1].innerHTML;
						pageBtn.removeChild(child[j+1]);
						pageBtn.insertBefore(oA,child[j+1]);
					}

					arr[j].style.display = "none";
					//this.style.borderBottom = "none";

				}
			}
        }
    }
    $(".tcdPageCode").createPage({
	pageCount:5,
	current:1,
	backFn:function(p){
		//单击回调方法，p是当前页码
		//console.log(p);
		$(".fenye .div2").eq(p-1).css("display","block");
		//console.log($('.fenye .div2').eq(p-1).index());
		$("#slid").css('left',$(".fenye .div2").eq(p-1).index()*90);
		$(".fenye .div2").eq(p-1).siblings().css("display","none");
	}

});
    //加载更多
//     	var btn1=document.getElementById("btn1");
// 	var hezi=document.getElementById("hezi");
// 	btn1.onclick = function(){
// 		var url="http://localhost:8080/ajax2/json/tupian.txt";
// 		function func(str){
// 			var obj = eval("("+str+")");
// 			if(obj.page==1){
// 				var arr = obj.list;
// 				var ul=document.createElement("ul");
// 				for(var i=0;i<arr.length;i++){
// 					var li=document.createElement("li");
// 					var duan= $("<img src=\""+arr[i].src+"/>") ;
// 					li.append(duan);
// 					ul.appendChild(li);
// 				}
// 				hezi.appendChild(ul);
// 			}
// 		}
// 		ajax.get(url,func);

// 	}
var count=1;
$("#btn1").click(function(){
		var url="../json/tupian.json";
		$.ajax({
			url: url,
			type: 'get',
			success:function(response,stasus,xhr){
				var arr=response;
				for(var i=0;i<arr.length;i++){
					if(arr[i].page==count){
						var lists=arr[i].list;
						for(var j=0;j<lists.length;j++){
							var duan=lists[j];
							var li=$("<li><a href='#'><img src="+lists[j].src+"><div class='kong'>四天后活动结束</div></a>"+
							"<div class='zi1'><span class='theEventTitle'>"+lists[j].h2+"</span><p><span class='dazhe'>"+lists[j].span+"</span>折起</p></div></li>");
								//console.log(lists[j].src+"<br>"+lists[j].span+"<br>"+lists[j].h2);
								$(".d1 ul").eq(1).append(li);
						
						}
						count++;
                        break;
					}
					if(count>arr.length){
                        $("#btn1").val("已经没有了╮(╯▽╰)╭");
                    }
				}

			}
		})

		
		
	})
})

//分页插件


