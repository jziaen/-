# bom对象
- 核心是window
- window初出节点

### window对象
---

  ```
  var a = "外面out";
  function say(){
    var a = "out";
    alert(window.a);
  }
  say();//外面out
  ```

- window.close()关闭窗口
  ```
  document.getElementsByTagName("button")[0].onclick = function(){
    // window.open("main.md");
    window.close();
  }
  ```
- window.open() 打开窗口
  ```
  document.getElementsByTagName("button")[1].onclick = function(){
    window.open("main.md");
    // window.close();
  }
  ```
- confirm() 待确认的弹出框
  ```
  document.getElementsByTagName("button")[3].onclick = function(){
    var a = confirm("想明白生命的意义吗？想正真地……活着吗？");
    document.write(a);//点击确定是true，点击取消是false
  }
  ```
- prompt() 弹出带文本框的弹出框
  ```
  document.getElementsByTagName("button")[4].onclick = function(){
    var b = prompt("请输入密码","");
    document.write(b);//点击确定是输入的文本，点击取消返回null
  }
  ```
- window.onscroll  滚动事件
  ```
  window.onscroll = function(){
    console.log(123);
  }
  ```

### window.location
---

  > 获取或设置窗体的URL，并且可以用于解析URL。
  > location既是window对象的属性又是document对象的属性


- window.location.href 获得当前页面的地址
  ```
  btn[1].onclick = function(){
    alert(location.href);
  }
  btn[2].onclick = function(){
    location.href = "http://www.baidu.com";
  }
  //open() 会新建窗口并打开
  //location.href="" 会在当前窗口打开网址
  ```
- window.assign 加载新文档,在当前窗口加载新文档
- window.location.reload() 重载文档
- window.replace 替换文档,不产生历史记录，无法回到原窗口
- window.location 设置地址,相当于在当前窗口加载新文档，同assign

  ```
  <button>window.reload()重新加载</button><br>
  <button>window.href获取当前</button><br>
  <button>window.location.href设置地址,相当于在当前窗口加载新文档，同assign</button><br>
  <button>window.location.assign在当前窗口加载新文档</button><br>
  <button>window.location.replace替换文档,不产生历史记录,无法返回</button>

  var btn = document.getElementsByTagName("button");
  btn[0].onclick = function(){
    location.reload();//重新刷新当前页面
    // window.document.location.reload();
  }
  btn[1].onclick = function(){
    alert(location.href);
  }
  btn[2].onclick = function(){
    location.href = "http://www.baidu.com";
  }//设置地址,相当于在当前窗口加载新文档，同assign
  btn[3].onclick = function(){
    window.location.assign("http://www.baidu.com");
  }//在当前窗口加载新文档
  btn[4].onclick = function(){
    window.location.replace("http://www.baidu.com");
    //替换文档,不产生历史记录，无法回到原窗口
  }
  ```

### navigator
---
- window.navigator.appName 浏览器名的字符串表示
- window.navigator.appVersion  返回浏览器版本(ie 兼容)
- window.navigator.platform 返回操作系统
- window.navigator.userAgent 用户代理信息，通过该属性可以获取浏览器及操作系统信息
  ```
  document.write(window.navigator.appName+"<hr>");
  //Netscape
  document.write(window.navigator.appVersion+"<hr>");
  //5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.87 Safari/537.36
  document.write(window.navigator.platform+"<hr>");
  //Win32
  document.write(window.navigator.userAgent+"<hr>");
  //Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.87 Safari/537.36
  ```

### screen
---
- availHeight 窗口可以使用的屏幕高度
- availWidth 窗口可以使用的屏幕宽度
- colorDepth  用户浏览其标示的颜色位数
- pixelDepth  用户浏览器表示的颜色位数
- height 屏幕的高度
- width 屏幕的宽度
  ```
  document.write(screen.availHeight+"<br>");//窗口可以使用的屏幕高度  760
  document.write(screen.availWidth+"<br>");//窗口可以使用的屏幕宽度   1280
  document.write(screen.height+"<br>");//屏幕的高度  800
  document.write(screen.width+"<br>");//屏幕的宽度  1280
  document.write(screen.colorDepth+"<br>");//用户浏览其标示的颜色位数  24
  document.write(screen.pixelDepth+"<br>");//用户浏览器表示的颜色位数  24
  ```

### history
  - back 后退
  - go 跳转到历史
  - history.go()括号内可传入数字
    -0代表当前页，正数表示往前跳转，负数表示往后跳转





> 要获取当前页面的滚动条纵坐标位置，用：
document.documentElement.scrollTop;
而不是：
document.body.scrollTop;
documentElement 对应的是 html 标签，而 body 对应的是 body 标签。
