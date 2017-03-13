# 时间函数
- 创建Date对象
  ```
  var time = new Date();
  var time1 = new Date("2 5,2014 4:5:5");//Wed Feb 05 2014 04:05:05 GMT+0800 (中国标准时间)
  var time2 = new Date(2014,1,5,4,5,5);//Wed Feb 05 2014 04:05:05 GMT+0800 (中国标准时间)
  var time3 = new Date(1000);//Thu Jan 01 1970 08:00:01 GMT+0800 (中国标准时间)
  console.log(time3);
  ```
  ```
  var date = new Date();
  var time = date.getTime();
  var year = date.getFullYear();//2017
  var month = date.getMonth();//1   表示2月份  获取的月份比真实的月份少1
  var date1 = date.getDate();//28   获取日期
  var day = date.getDay();//2 星期二  获取的是星期几
  var hours = date.getHours();//17   获取小时
  var minutes = date.getMinutes();//24   获取分钟
  var seconds = date.getSeconds();  // 获取秒

  ```
- setTimeout(函数/表达式,毫秒)
  - 只能调用一次
  ```
  setTimeout(function(){
      alert(123);
    },3000);
  function alert(){
    alert(456);
  }
  setTimeout(alert,3000);
  setTimeout("alert()",3000);
  ```
- setInterval(函数/表达式,毫秒)
