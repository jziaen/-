<style>
  b { color: red;}
  i { color: blue;}
</style>
# JavaScript数组
- 数组申明和遍历
  ```
  var arr = new Array();
  arr[0] = "apple";
  arr[1] = "orange";
  arr[2] = "peach";
  arr[3] = "banana";
  /*
   *也可以这样申明数组
   *var arr = new Array("apple","orange","peach","banana");
   */

  for(var i=0;i<arr.length;i++){
    document.write(arr[i]+"<br/>");
  }
  document.write("<br />");
  for(j in arr){
    document.write(arr[j]+"<br />");
  }
  ```
- 二维数组
  ```
  var arr = new Array(["a","b","c"],["e","f","g"],["h","i","j"]);
  document.write(arr[0][1]);
  for(var i=0;i<arr.length;i++){
    for(var j=0;j<arr[i].length;j++){
      document.write(arr[i][j]+"<br />");
    }
  }
  ```
- 二维数组应用
  ```
  var arr = new Array(4);
  var col,row;
  for(var i=0;i<arr.length;i++){
    arr[i] = new Array(4);
    for(var j=0;j<arr[i].length;j++){
      arr[i][j] = j;
      col = i+1;
      row = arr[i][j]+1;
      if(j%4==0&&i!=0){
        document.write("</br>");
      }
      document.write("第"+col+"行第"+row+"列");
    }
  }
  document.write("<br />");
  document.write('<table border="1" cellspacing="0" cellpadding="5">');
  for(var i=0;i<arr.length;i++){
    document.write('<tr>');
      for(var j=0;j<arr[i].length;j++){
        col = i+1;
        row = arr[i][j]+1;
        document.write("<td>第"+col+"行第"+row+"列</td>");
      }
    document.write('</tr>');
  }
  document.write('</table>');
  ```
  ```
  /*
  var arr = new Array(9);
  var x,y,z;
  for(var i=0;i<arr.length;i++){
    arr[i] = new Array(i+1);
    for(var j=0;j<arr[i].length;j++){
      arr[i][j] = j+1;
      x = i+1;
      y = arr[i][j];
      z = x*y;
      document.write(y+"*"+y+"="+z+" ");
    }
    document.write("<br />");
  }
  */

  // document.write("<table border='1'>");
    for(var i=1;i<=9;i++){
      // document.write("<tr>");
      for(var j=1;j<=i;j++){
        // document.write("<td>");
        document.write(i+'*'+j+'='+(i*j));
        // document.write("</td>");
      }
      // document.write("</tr>");
      document.write("<br>");
    }
  // document.write("</table>");

  ```

- join() 讲数组转换为字符串，并使用连接符链接 <i>不会改变原数组</i>
  ```
  var arr = new Array("apple","orange","banana");
  document.write(arr.join());//apple,orange,banana
  document.write("<br/>");
  document.write(arr.join("-"));//apple-orange-banana
  //join()方法会将数组转换为字符串，并可以使用特定连接符，默认为","。
  //不会改变原数组。
  ```
- pop() 删除并返回数组的最后一个元素 <b>会改变原数组</b>
  ```
  var arr = new Array("apple","orange","banana");
  document.write(arr.pop());//banana
  document.write("<br />");
  document.write(arr);//apple,orange
  //删除并打印最后一个元素
  //会改变原数组
  ```
- shift() 删除并返回数组的第一个元素 <b>会改变原数组</b>
  ```
  var arr = new Array("apple","orange","banana");
  document.write(arr.shift());//apple
  document.write("<br />");
  document.write(arr);//orange,banana
  //删除并打印第一个元素
  //会改变原数组
  ```
- push() 向数组的 __末尾__ 添加一个或更多元素，并返回新的长度 <b>会改变原数组</b>
  ```
  var arr = new Array("apple","orange");
  document.write(arr.push("banana"));//3
  document.write("<br />");
  document.write(arr);//apple,orange,banana
  //向数组的末尾添加一个或更多元素，并返回其长度
  //会改变原数组
  ```
- unshift() 向数组的 __开头__ 添加一个或更多元素，并返回新的长度 <b>会改变原数组</b>
  ```
  var arr = new Array("orange","banaba");
  document.write(arr.unshift("apple"));//3
  document.write("<br />");
  document.write(arr);//apple,orange,banana
  //向数组的开头添加一个或更多元素，并返回其长度
  //会改变原数组
  ```
- reverse() 颠倒数组中元素的顺序 <b>会改变原数组</b>
  ```
  var arr = new Array("apple","orange","banaba");
  document.write(arr.reverse());//banaba,orange,apple
  document.write("<br />");
  document.write(arr);//banaba,orange,apple
  //颠倒数组中元素的顺序
  //会改变原数组
  ```
- concat()  连接两个或更多的数组，并返回结果 <i>不会改变原数组</i>
  ```
  var arr = [1,2,3,4];
  // var b = [4,5];
  console.log(arr.concat([4,5]));//[1, 2, 3, 4, 4, 5]
  //不会改变原数组
  ```
- slice() 基于当前数组的一个或多个项创建新的数组 <i>不会改变原数组</i>
  ```
  var colors = ["red","green","blue","yellow","purple"];
  var colors2 = colors.slice(1);
  //当只有一个参数时，返回从指定参数开始到数组末尾的所有项
  var colors3 = colors.slice(1,4);
  //当包含2个参数时，返回从起始到结束位置之间的项，但不包括结束位置的项。
  var colors4 = colors.slice(-2,-1);
  //当包含负值时，用数组长度加上该数值来确定位置。
  //即colors.slice(3,4);也能取到相同的值

  document.write(colors2);//green,blue,yellow,purple
  document.write("<br />");
  document.write(colors3);//green,blue,yellow
  document.write("<br />");
  document.write(colors4);//yellow
  //从某个已有的数组返回选定的元素
  //基于当前数组的一个或多个项创建新的数组
  //如果结束为止小于起始位置，则返回空数组。
  //不会改变原数组
  ```
- splice() 可以删除、插入和、替换,返回更改的元素 <b>会改变原数组</b>
  ```
  var colors = ["red","green","blue"];
  var removed = colors.splice(0,1); //删除第一项
  document.write(colors+"/"+removed);//green,blue/red
  document.write("<br />");
  removed = colors.splice(1,0,"yellow","orange");//从位置1开始插入2项
  document.write(colors+"/"+removed);//green,yellow,orange/空数组
  document.write("<br />");
  removed = colors.splice(1,1,"red","purple");//从位置1删除一项，然后插入2项
  document.write(colors+"/"+removed);//green,red,purple,orange/yellow
  document.write("<br />");
  //第一个项表示位置，第二个项表示要删除的项数。
  ```
- sort() 排序  <b>会改变原数组</b>
  ```
  var arr = [1,45,100,20,230,45];
  document.write(arr.sort());//对数组的元素进行排序
  document.write("<br />");
  function sortNumber(a,b){
    return a-b;
  }
  function resortNumber(a,b){
    return b-a;
  }
  document.write(arr.sort(sortNumber));//实现从小到大排序
  document.write("<br />");
  document.write(arr.sort(resortNumber));//实现从大到小排序
  ```
- 冒泡排序
  ```
  var arr = [6,10,8,4,1,9,3,2,7,5];
  function bubbleSort(array){
    var time = array.length-1;//time=9
    var cache = 0;
    for(var i=0;i<time;i++){
      for(var j=0;j<time-i;j++){
        if(arr[j]>arr[j+1]){
          cache = arr[j];
          arr[j] =  arr[j+1];
          arr[j+1] = cache;
        }
        console.log(array);
      }
      document.write(array+"<br/>");
      console.log("<br/>");
    }
    return array;
  }
  bubbleSort(arr);
  ```
- 选择排序
  ```
  var arr = [1,3,-3,7,5,-9];
  function selectionSort(array){
    var times = array.length-1;
    var cache;
    for(var i=0;i<times;i++){
      for(var j=i+1;j<times+1;j++){
        if(array[i]>array[j]){
          cache = array[i];
          array[i] = array[j];
          array[j] = cache;
        }
        document.write(array+"<br>");
      }
      document.write("我是小循环的分割线"+"<br>");
    }

  }
  selectionSort(arr);
  ```
