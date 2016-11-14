function getStyle(obj,attr) {
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj,false)[attr];
    }
}
/*
运动函数
obj
json  {"width":"500","height":"300","opacity":1}
func
 */
function move(obj,json,func){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
         var flag = true;
         for(var i in json){
         	var target = json[i];
         	var current = getStyle(obj,i);
         	if(i=="opacity"){
         		current = Math.round(current*100);
                //透明度乘100，因为传入的透明度乘了100
         	}else{
         		current = parseInt(current);
         	}
         	var speed = (target-current)/8;
         	speed = speed>0?Math.ceil(speed):Math.floor(speed);
         	if(current==target){

         	}else{
         		flag=false;
         		if(i=="opacity"){
         			obj.style.opacity=(current+speed)/100;

         		}else{
         			obj.style[i] = current + speed + "px";
         		}
         	}
         }
         if(flag){
         	clearInterval(obj.timer);
         	if(func){
         		func();
         	}
         }
	},50)
}