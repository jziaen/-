# 字符串
- str = "string";是字符串类型
- str = new String("string"); 是对象类型
- 字符串获取的方法
  1. charAt() 返回下标索引的字符
    ```
    var a = "下午好";
    var s = a.charAt(2);
    document.write(s);//好
    ```
  2. charCodeAt() 返回下标索引的字符编码
    ```
    var b = "D";
    document.write(b.charCodeAt());//68
    ```
  3. unicode码 讲编码转换为字符
    ```
    document.write(String.fromCharCode(100));//d
    document.write(String.fromCharCode(120));//x
    ```
  4. String.fromCharCode(94);
- 返回字符串的位置
  1. indexOf() 查找字符串第一次出现的位置
    ```
    var str = "大家都说中国好"；
    var s = str.indexOf("中国");//4
    ```
    ```
    var str = "oewilkjsdflksfldf";
    var b = str.indexOf("fl");
    document.write(b);//9
    ```
  2. lastIndexOf() 查找字符串最后一次出现的位置
    ```
    var str = "大家都说中国中国中国中国好"；
    var s = str.lastIndexOf("中国");//10
    ```
    ```
    var str = "kjashflkdasjf";
    var b = str.lastIndexOf("as");
    document.write(b);//9
    ```

  3. search() 正则匹配
    ```
    var str = "大家都说中国中国中国中国好"；
    var s2 = str.search("都");//2
    ```
    ```
    var str = "asdfkjsadlfkjh";
    var a = str.search(/sad/);
    var b = str.search("sad");
    console.log(a);//6
    console.log(b);//6
    console.log(a == b);//true
    ```


- replace(from,to)替换字符串，第一个为被替换的字符，第二个为替换后的字符,__不会改变原字符串__
  ```
  var str = "大家都说上海好,上海整得好";
  str = str.replace(/上海/,"北京");//大家都说北京好,上海整得好
  ```
- split(string) 根据参数进行分割，拆分成数组。_不会改变原字符串_
  ```
  var str = "大家都说上海好,上海整得好";
  str1 = str.split("说");//大家都,上海好,上海整得好
  ```
  ```
  var str = "oirswukjsadlf";
  str = str.split("s");
  document.write(str);//oir,wukj,adlf
  ```
- substring(从下表索引开始，不包括下标索引结束) 截取字符串,_不会改变原字符串_
  ```
  var str = "大家都说上海好,上海整得好";
  str1 = str.substring(1,7);//大家都说上海好
  ```
  ```
  var str = "asrefsdaf";
  var a = str.substring(1,4);
  document.write(a+","+str);//sre,asrefsdaf
  ```
- toLowercase()转化成小写字母 _不会改变原字符串_
  ```
  var str = "SDFSDFSDF";
  str1 = str.toLowerCase();//sdfsdfsdf
  ```
- toUpperCase()转化成大写字母 _不会改变原字符串_
  ```
  var str = "SDFSsdfSDF";
  str1 = str.toLowerCase();//SDFSDFSDF
  ```
- trim() 去除两边的空格
  ```
  var b = " 空间 ";
  var c = b.trim();//"空间"
  ```
- Math对象
  1. Math.round(3.1) 四舍五入
  2. Math.random() 返回随机数
  3. Math.max(num1,num2); //返回较大参数
    ```
    Math.max(3,16); //16
    ```
  4. Math.min();  //返回最小数
  5. Math.abs();  //返回绝对值
  6. Math.cell(12.3);  //向上取整13
  7. Math.floor(3.6);  //向下取整
  8. Math.pow(x,y);    //x的y次方
  9. Math.sqrt(9);      //开平方3
