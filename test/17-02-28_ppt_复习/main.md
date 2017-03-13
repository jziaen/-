# javascript基础
- ECMAScript 是javascript的核心
- DOM 文档对象模型
- BOM 浏览器对象模型
- javascript 作者是布兰登
- 基本数据类型
  - Number
  - String
  - Boolean
  - Undefined
  - Null
- 复杂数据类型
  - Array
  - Object
  - Function
- typeof
  ```
  var str1 = "您好";//tring
  var str2 = 123;///number
  var str3 = "123";//string
  var str4 = true;//boolean
  var str5 = "true";//string
  alert(typeof(str1));
  ```
- 隐式转换
  1. string类型与其他类型进行加法运算的时候是作为__字符串拼接__
  2. boolean类型在加减法运算中,true是代表数字1,false代表数字0
  3. boolean和number进行运算时(+,-,\*,/,%)的时候,会把boolean转化number进行相加
  4. string类型进行运算时(-,\*,/,%),会转化为number类型,前提是string必须为纯数字,否则运算返回NaN

  ```
  var str1 = "您好";
  var str2 = 123;
  var str3 = "123";
  var str4 = true;
  var str5 = "true";
  var str = str1+str2;//您好123
  var str = str1+str3;//您好123
  var str = str1+str4;//您好true
  var str = str1+str5;//您好true
  var str = str2+str3;//246
  var str = str2+str4;//124
  //boolean在和number类型进行运算时，会把Boolean转化为number类型。
  //true代表number是1，false代表number是0。即123+1
  var str = str3+str4;//123true,string类型相加时会进行字符串拼接
  var str = str3-str4;//122
  //string类型与Boolean减法，string和Boolean会转化为number，__但string必须是纯数字__
  var str = str1-str4;//NAN
  ```
- 显式转换
  ```
  var s = 19.234;
  alert(parseInt(s));
  alert(s.toFixed(3));//toFixed保留几位小数
  alert(parseFloat(s));
  ```

- 申明函数、匿名函数、自执行函数
- 申明函数作用域变量提前，并且提前赋值，而匿名函数是不提前的
- 自执行函数只能执行一次
- eval()函数 - 计算字符串表达式的值
  ```
  var a = "4+5";
  alert(eval(a));
  ```
- isNaN() - 验证是不是数字
