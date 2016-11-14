onload = function(){
	var username = document.getElementById("username");
	var pwd = document.getElementById("pwd");
	var rePwd = document.getElementById("rePwd");
	var Y1 = document.getElementsByClassName("Y1")[0];
	var Y2 = document.getElementsByClassName("Y2")[0];
	var Y3 = document.getElementsByClassName("Y3")[0];
	var level = document.getElementsByClassName("level")[0];
	var level1 = document.getElementById("pwd-level-1");
    var level2 = document.getElementById("pwd-level-2");
    var level3 = document.getElementById("pwd-level-3");
    var register = document.getElementById("register");
    var flag1 = false;
    var flag2 = false;
    var flag3 = false;
	//账户名验证
	username.onfocus = function(){
		Y1.style.display="block";
	}
	username.onblur = function () {
        var str = username.value;
        // if(str.length==11){
        //         Y1.innerHTML = "帐户名合法";
        //         Y1.style.display="none";
        //         flag1 = true;
        // }else{
        //      Y1.innerHTML = "帐户名不合法";
        //     flag1 = false;
        // }
        var re = /^1\d{10}$/;
	    if (re.test(str)) {
	        Y1.innerHTML = "帐户名合法";
                Y1.style.display="none";
                flag1 = true;
	    } else {
	        Y1.innerHTML = "帐户名不合法";
            flag1 = false;
	    }
    }
    //密码验证
    pwd.onfocus = function(){
		Y2.style.display="block";
		level.style.display="block";
	}
	// pwd.onblur = function(){
	// 	Y2.style.display="none";
	// }
	var reg2 = /^\w{6,20}$/;
	pwd.onkeyup = function () {
        var reg123 = /^\w{6,10}$/;
        var reg471 = /^\d{11,20}$/;
        var reg472 = /^[a-zA-Z]{11,20}$/;
        var reg473 = /^_{11,20}$/;
        var reg91 = /\d{1,}/ig;
        var reg92 = /[a-zA-Z]{1,}/ig;
        var reg93 = /_{1,}/ig;
        var reg94 = /^\w{16,20}$/;
        var str = pwd.value;
        if(reg2.test(str)){
            if(reg123.test(str)||reg471.test(str)||reg472.test(str)||reg473.test(str)){
                level2.style.background = "#999";
                level3.style.background = "#999";
                level1.style.background = "black";
                Y2.innerHTML = "密码较弱，建议设置多种字符";
            }else if(reg91.test(str)&&reg92.test(str)&&reg93.test(str)&&reg94.test(str)){
                level1.style.background = "#999";
                level2.style.background = "#999";
                level3.style.background = "black";
                Y2.style.display="none";
            }else{
                level1.style.background = "#999";
                level3.style.background = "#999";
                level2.style.background = "black";
                Y2.style.display="none";
            }
            flag2=true;
        }else{
            level1.style.background = "#999";
            level2.style.background = "#999";
            level3.style.background = "#999";
            flag2=false;
        }
    }
    //重复密码
    rePwd.onblur = function () {
        var str1 = pwd.value;
        var str2 = rePwd.value;
            if(str1 == str2){
                Y3.style.display="none";
                flag3 = true;
            }else{
                Y3.style.display="block";
                flag3 = false;
            }
    }
    //注册验证
    register.onclick = function () {

        if(flag1&&flag2&&flag3){
            
            open("../html/denglu.html");
        }else{

        }

    }

    function setCookie(name,value,date,path,domain,secure) {
    //var document.cookie =
    var str = "";
    if(name==""||value==""){

    }else{
        str +=name+"="+value;
        if(date instanceof Date){
            str += ";expires="+date;
        }
        if(path){
            str += ";path="+path;
        }
        if(domain){
            str += ";domain="+domain;
        }
        if(secure){
            str += ";secure";
        }
    }
    document.cookie = str;
}
}