# js数据类型

- 字符串
```
var string = "阿斯兰的咖啡就撒了";
document.write(typeof(string));//string
document.write("<br />");
```
- 数字
```
var number = 123e-5;
document.write(typeof(number));//number
document.write("<br />");
```
- 布尔
```
var boolean = true;
document.write(typeof(boolean));//boolean
document.write("<br />");
```
- 数组
```
var array = new Array();
array[0] = "Audi";
array[1] = "BMW";
array[2] = "Volvo";
document.write(typeof(array));//object
document.write(" 数组中的值有" + array[0] + "&nbsp;" + array[1] + " " + array[2] + "总共" + array.length + "个");//数组中的值有Audi BMW Volvo总共3个
document.write("<br />");
```
- 对象
```
var object = {
  firstname:"Bill",
  lastname:"Gates"
}
document.write(object.firstname+" "+object["lastname"]);//Bill Gates
document.write("<br />");
document.write(typeof(object));//object
```
- undefined
```
var un;
document.write(typeof(un));//undefined
document.write("<br />");
```
- null
```
/*null*/
document.write(typeof(nu));//object
//null可以视为空对象，可清空变量
```
- 常量<br>
  通过const关键字申明。
  常量名首字符为字母或下划线，其后可有数字。
  ```
  const a = 10;
  alert(a);
  ```

- 通过变量更改标签中文字
```
  <h1 id="demo">demo</h1>
  <script>
    var car = "volvo";
    document.getElementById("demo").innerHTML = car;
  </script>
```
- 变量作用域
  1. 在函数外申明变量时(不论是否使用ver关键字)
    是全局变量，在函数体中有效
  2. 在函数中申明局部变量
    是局部变量仅在该函数内有效，函数外无效
  3. 在函数中申明全局变量
    是全局变量，若想在函数外生效需要先调用`函数名();`该函数
  __在申明变量时凡是没有var关键字，而直接赋值的变量均为全局变量__
- Date()对象
  ```
  <p id="p1"></p>
  <p id="p2"></p>
  <script>
    var p1 = document.getElementById("p1");
    var p2 = document.getElementById("p2");
    setInterval(function(){
      var date = new Date();
      p1.innerHTML = date;
      d = date.getFullYear()+"年";
      d += date.getMonth()+1+"月";
      d += date.getDate()+"日";
      switch(date.getDay()){
        case 1:
          d+="星期一 ";
          break;
        case 2:
          d+="星期二 ";
          break;
        case 3:
          d+="星期三 ";
          break;
        case 4:
          d+="星期四 ";
          break;
        case 5:
          d+="星期五 ";
          break;
        case 6:
          d+="星期六 ";
          break;
        case 7:
          d+="星期日 ";
          break;
      }
      // d += "星期"+date.getDay()+" ";
      d += date.getHours()+":";
      d += addZero(date.getMinutes())+":";
      d += addZero(date.getSeconds());
      p2.innerHTML = d;
      document.write(date.getSeconds()+"<br />");//秒
    },1000);
    function addZero(time){
      if(time < 10){
        time = "0" + time;
      }
      return time;
    }
  ```
- Math() 对象
  ```
  console.log("Math.PI "+Math.PI);//3.141592653589793
  console.log("Math.E "+Math.E);//2.718281828459045
  console.log("Math.SQRT2 "+Math.SQRT2);//1.4142135623730951
  console.log("Math.SQRT1_2 "+Math.SQRT1_2);//0.7071067811865476
  console.log("Math.LN2 "+Math.LN2);//0.6931471805599453
  console.log("Math.LN10 "+Math.LN10);//2.302585092994046
  console.log("Math.LOG2E "+Math.LOG2E);//1.4426950408889634
  console.log("Math.LOG10E "+Math.LOG10E);//0.4342944819032518
  console.log(Math.round(4.6));//5四舍五入
  console.log(Math.ceil(3.01));//4向上取整
  console.log(Math.floor(4.999));//4向下取整
  console.log(window.parseInt(4.999));//4转换为整数
  /*parseInt是全局对象，所以是window的对象，window可以忽略*/
  console.log(Math.random());//0-1之间随机数
  console.log(Math.floor(Math.random()*10+1));//1-10之间的随机数
  console.log(Math.floor(Math.random()*100+1));//1-100之间的随机数
  console.log(Math.floor(Math.random()*10+0));//0-9之间的随机数
  //其中10表示数值的个数，1表示最小值。从1开始数10个数字
  ```
- RegExp()对象
```
var str = "Is this promis is?";
var patt1 = /is/ig;//匹配以斜杠作为开始和结束
//i表示不区分大小写
//g表示全局匹配，默认找到第一个值就返回结果
//m表示执行多行匹配
document.write("Is this promis is?".match(patt1));

  var str="256.300.888.999";
  var patt1=/(\d{1,3}\.){3}\d{1,3}/g;
  document.write(str.match(patt1));
```

  - 常用的元字符
