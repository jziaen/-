# JavasSript
- javascript的组成部分
 - ECMAScript
 - BOM浏览器对象模型（browser object model ）
 - DOM文档对象模型(Document Object Model)
- `<script></script>`可以写在`</body>`之前和之后
- 可以再浏览器中输出文字的三种方法
  ```
  <script>
    alert("Hello World");
    console.log("Hello World");
    document.write("Hello World");
  </script>
  ```
- js的引入方法：
  - 内部样式
  `<script>alert("Hello World");</script>`
  - 外联样式
   `<script src="外部样式地址"></script>`
  - 行内样式
  `<input type="button" value="点击后弹出窗口" onclick="javascript:alert('Hello World');" /><!--写在行内时需要注意引号的使用-->`
- js事件：
  - `window.onload` 窗口监听事件
- 获取元素的方法
  - `document.getElementById("ID名称");`根据ID名选择元素
  - `document.getElementsByName("name的值");`
  - `document.getElementsByTagName("标签名");`
- javascript调试
  - 插入console.log("调试");语句进行调试
  - 使用浏览器的控制台进行调试
