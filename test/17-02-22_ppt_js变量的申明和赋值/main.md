<style>
table { text-align: center;}
caption { text-align: center;font-size: 20px;}
</style>
# 变量申明、赋值和运算比较

- 算数运算符
a++ 是表达式 而变量a的值在第一次执行时不会加1

  ```
  var a = 5,b;
  b = a++;
  console.log(a,b);//6,5
  b = a--;
  console.log(a,b);//5,6
  b = ++a;
  console.log(a,b);//6,6
  b = --a;
  console.log(a,b);//5,5
  ```

<table border="1">
<caption>算数运算符</caption>
<tr>
  <td></td>
  <td colspan="2">第一次运算</td>
  <td colspan="2">第一次运算</td>
<tr>
<tr>
  <td></td>
  <td>表达式b</td>
  <td>变量a</td>
  <td>表达式b</td>
  <td>变量a</td>
<tr>
<tr>
  <td>var a = 5,b = a++;</td>
  <td>5</td>
  <td>6</td>
  <td>6</td>
  <td>7</td>
<tr>
<tr>
  <td>var a = 5,b = a--;</td>
  <td>5</td>
  <td>4</td>
  <td>4</td>
  <td>3</td>
<tr>
<tr>
  <td>var a = 5,b = ++a;</td>
  <td>6</td>
  <td>6</td>
  <td>7</td>
  <td>7</td>
<tr>
<tr>
  <td>var a = 5,b = --a;</td>
  <td>4</td>
  <td>4</td>
  <td>3</td>
  <td>3</td>
<tr>
</table>

- 赋值运算符
  ```
  var x = 10,y = 5;
  x=y
  console.log(x);//x=5;y=5
  x+=y
  console.log(x);//x=10;y=5
  x-=y
  console.log(x);//x=5;y=5
  x*=y
  console.log(x);//x=25;y=5
  x/=y
  console.log(x);//x=5;y=5
  x%=y
  console.log(x);//x=0;y=5
  console.log(5%2);
  ```

- 比较运算符
  ```
  var a = 5;
  document.write(a>8);//false
  document.write("<br>");
  document.write(a<8);//true
  document.write("<br>");
  document.write(a>=8);//false
  document.write("<br>");
  document.write(a<=8);//true
  document.write("<br>");
  document.write(a!=8);//true
  document.write("<br>");
  document.write(a==8);//false
  document.write("<br>");
  document.write(a===8);//false
  document.write("<br>");
  ```
- 逻辑运算符 __与&&,或||,非!__
  ```
  var x = 6,y = 3;
  document.write(x<10 && y>2);//true
  document.write("<br/>");
  document.write(x ==5 || y==5);//false
  document.write("<br/>");
  document.write(!(x == 5));//true
  document.write("<br/>");
  ```
- 三目运算符

  ```
  <input id="input1" type="text" value="25" />
  <p id="p1"></p>
  <script>
    var input1 = document.getElementById("input1");
    var p1 = document.getElementById("p1");
    var age = input1.value;
    var o = "";
    input1.onchange = function(){
      age = input1.value;
      o = age>18?"您成年了":"您未成年";
      p1.innerHTML = o;
    }
    o = age>18?"您成年了":"您未成年";
    p1.innerHTML = o;

  </script>
  ```
- if条件语句
  ```
  var time = 50;
  if(time < 30){
    document.write("time<30");
  }else if(time < 60){
    document.write("time<60");
  }else {
    document.write("timesdfsa");
  }
  ```
- switch条件语句
  判断星期数
  ```
  var day = new Date().getDay();
  document.write("星期" + day + "<br/>");
  switch(day){
    case 6:
      document.write("今天是星期六");
      break;
    case 0:
      document.write("今天是星期日");
      break;
    case 1:
      document.write("今天是星期一");
      break;
    case 2:
      document.write("今天是星期二");
      break;
    case 3:
      document.write("今天是星期三");
      break;
    case 4:
      document.write("今天是星期四");
      break;
    case 5:
      document.write("今天是星期五");
      break;
    default:
      document.write("您确定您还住在地球上？");
  }
  ```
  根据英文等级弹出成绩范围
  ```
  var txt = document.getElementById("txt");
  var btn = document.getElementById("btn");

  btn.onclick = function(){
    var val = txt.value.toLowerCase();
    switch(val){
      case "a":
        alert("85-100");
        break;
      case "b":
        alert("60-85");
        break;
      case "c":
        alert("30-60");
        break;
      case "d":
        alert("0-30");
        break;
      default:
        alert("没有这个等级,请输入a、b、c、d");
    }
  }
  ```
- for循环语句
  ```
  for(var i=1;i<5;i++){
    document.write("Thie number is "+i+"<br/>");
  }
  /*
  Thie number is 1
  Thie number is 2
  Thie number is 3
  Thie number is 4
  */
  document.write("<br/>");
  for(var j=1;j++<10;j++){
    document.write("Thie number is "+j+"<br/>");
  }
  /*
  Thie number is 2
  Thie number is 4
  Thie number is 6
  Thie number is 8
  Thie number is 10
  */
  ```

- while循环语句
  ```
  var i = 0;
  while(i<5){
    document.write("This number is "+i+"<br/>");
    i++;
  }
  /*
  This number is 0
  This number is 1
  This number is 2
  This number is 3
  This number is 4
   */
  ```
- do while 循环语句
  ```
  var i = 1;
  do{
    document.write("This number is "+i+"<br />");
    i++;
  }while(i<5);
  /*
  This number is 0
  This number is 1
  This number is 2
  This number is 3
  This number is 4
   */
  ```
- break 中断
  ```
  for(var i=0;i<5;i++){
    if(i==3){
      break;
    }
    document.write("This number is "+i+"<br/>");
  }
  ```
- continue 跳过本次循环
  ```
  for(var i=0;i<5;i++){
    if(i==3){
      continue;
    }
    document.write("This number is "+i+"<br/>");
  }
  /*
  This number is 0
  This number is 1
  This number is 2
  This number is 4
   */
  ```
