onload = function () {
            /*
            json数据 user 18404977721
              pwd  123456asd
             */
            var user = document.getElementById("user");
            var pwd = document.getElementById("pwd");
            var btn = document.getElementById("btn");

            user.value = getCookie("username");
            pwd.value = getCookie("password");
            console.log(user.value);
            console.log(pwd.value);

            var userVal = null;
            var pwdVal = null;
            btn.onclick = function () {
                var url = "../json/log.json";
                ajax.get(url,func);
                userVal = user.value;
                pwdVal = pwd.value;
                function func(str) {
                    var obj = eval("("+str+")");
                    console.log(userVal+":"+pwdVal)
                    console.log(obj.name+":"+obj.password)
                    if(userVal == obj.name && pwdVal==obj.password){
                    var date = new Date();
                    date.setDate(date.getDate()+10);
                    
                    setCookie("username",userVal,date);
                    setCookie("password",pwdVal,date);
                    setCookie("flag","true",date);
                    window.location.href="../html/index.html";
                    }else{
                        alert("用户名密码错误");
                    } 
                    
                    
                }
                

                
            }

        }
/*
设置cookie
参数列表

 */
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
/*
获取cookie
参数列表
 */
function getCookie(name) {//"username"
    var str = document.cookie;//username=admin; password=123456
    var reg = /\s/ig;
    str = str.replace(reg,"");//username=admin;password=123456
    var arr = str.split(";");//["username=admin","password=123456"]
    for(var i=0;i<arr.length;i++){
        var arr2 = arr[i].split("=");//["username","admin"];
        if(arr2[0] == name){
            return arr2[1];
        }
    }
    return "";
}