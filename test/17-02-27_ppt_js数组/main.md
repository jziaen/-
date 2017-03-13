# 函数基础
- 调用不带参数的函数
  ```
  function cal(){
    var a,b,c = 0;
    a = 10;
    b = 20;
    c = a + b;
    document.write(c+"<br>");
  }
  cal();
  ```
- 调用带参数的函数
  ```
  function cn(a,b){
    var c = a + b;
    document.write(c);
  }
  cn(33,55,34,657,234);
  ```
- 带返回值的函数 __return__
  ```
  function myFunction(){
    var x = 5;
    return x+1;
  }
  var result = myFunction();
  document.write(result);
  ```
- 匿名函数 __匿名函数就是没有实际名字的函数__
  ```
  (function(){
    alert(12);
  })();
  ```
- 匿名函数的调用 __函数可以赋值给一个变量__
  ```
  var fun = function(x,y){
    return x+y;
  }
  alert(fun(1,2));
  ```
- 创建对象
  ```
  var person = new Object();
  person.firstName = "Bill";
  person.lastName = "Gates";
  person.age = 56;
  person.eyecoloe = "blue";
  document.write(person.firstName+"·"+person.lastName+" is "+person.age+" year's old.");
  ```
- 创建 类
  ```
  function Dog(name,age){
    this.name = "";
    this.age = "";
    // this.Category = "狗类";
  }
  Dog.prototype.Category = "狗类";
  var dog01 = new Dog("土狗",2);
  var dog02 = new Dog("黄狗",5);
  document.write(dog01.Category+"<br>");
  document.write(dog02.Category+"<br>");
  Dog.prototype.Category = "犬类";
  document.write(dog01.Category+"<br>");
  document.write(dog02.Category+"<br>");
  ```
- 类的创建和引用
  ```
  function Students(name,age,grade,hobby){
    this.name = name;
    this.age = age;
    this.grade = grade;
    this.hobby = hobby;
  }
  Students.prototype.getName  = function(){ return this.name};
  Students.prototype.getAge   = function(){ return this.age};
  Students.prototype.getGrade = function(){ return this.grade};
  Students.prototype.getHobby = function(){ return this.hobby};

  Students.prototype.setName  = function(name){ this.name = name}
  Students.prototype.setAge   = function(age){ this.name = age}
  Students.prototype.setGrade = function(grade){ this.name = grade}
  Students.prototype.setHobby = function(hobby){ this.name = hobby}

  var xiaoming = new Students("小明",12,"2班","二");
  document.write(xiaoming.name + xiaoming.getAge() + xiaoming.getGrade() + xiaoming.getHobby());
  console.log(xiaoming.name === xiaoming.getName());
  ```
- 对象和类
  ```
  var user = {  //定义一个对象,
    //对象属性值可以是字符串、数组、函数 （或方法）
    name: "jack",
    favouiteColor:["red","green"];
    hello:function(){ //定义hello方法
      alert("Hello"+this.nae);
    }
  }
  ```
- 对象和类2
  ```
  function Car(color,doors,mpg){
    this.color = color;
    this.doors = doors;
    this.mpg = mpg;
    this.showColor = function(){
      document.write(this.color);
    }
  }
  var oCar1 = new Car("red",4,24);
  var oCar2 = new Car("blue",3,25);

  oCar1.showColor();
  oCar2.showColor();
  document.write(oCar1.doors);
  ```

- setTimeout
  ```
    function hello(){
      alert("hello");
    }
    // alert(hello);
    window.setTimeout(hello,3000);
    //alert(hello)输出的是hello这个函数的一个字符串
    //window.setTimeout("hello()",3000); 也可以调用后加上双引号
  ```
  ```
  function hello0(){
    alert("hello");
  }
  function hello1(){
    alert("world");
  }
  for(var i=0;i<2;i++){
    window.setTimeout("hello"+i+"()",3000);
  }
  ```
- clearTimeout
  ```
  window.onload = function(){
    function hello(){
      alert("Hello World");
    }
    function hello1(){
      alert("aoweiurkjdsf");
    }

    t = window.setTimeout(hello,3000);//将这个定时器赋值到一个变量，然后对这个变量清楚定时器
    m = window.setTimeout(hello1,5000);
    window.clearTimeout(t);
  }
  ```
- setInterval
  ```
  function hello(){
    alert("Hello World");
  }
  var t=window.setInterval(hello,100);
  clearInterval(t);
  ```
  ```
  function hello(){
    alert("Hello World");
  }
  for(var i=0;i<2;i++){//每4000毫秒运行一次for循环,弹出2个窗口
    window.setInterval(hello,4000);
  }
  ```
- String.charAt()<br>
  返回改下标位置的字符串值
