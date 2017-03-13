# 文档对象模型 __DOM__
- 父、子和同胞节点
- heml为根节点
- document.getElementById()
  - 同一个ID一个页面只允许出现一次
- 获取节点
  - getElementById
  - getElementsByClassName
  - getElementsByTagName
  - getElementsByName

    ```


      window.onload = function(){
        document.getElementById("btn").onclick = function(){
          alert("送你葱");
        }
        document.getElementsByClassName("btn1")[0].onclick = function(){
          alert("这里什么都没有");
        }
        document.getElementsByClassName("btn1")[1].onclick = function(){
          alert("送你一朵花");
        }
        document.getElementsByClassName("btn1")[2].onclick = function(){
          alert("这里有各种神装任你选择");
        }
        document.getElementsByTagName("input")[4].onclick = function(){
          alert("这里什么都没有");
        }
      }
    <input type="button" id="btn" value="点击就送" />
    <input type="button" class="btn1" value="点击就送" />
    <input type="button" class="btn1" value="点击就送" />
    <input type="button" class="btn1" value="点击就送" />
    <input type="button" class="btn1" value="点击就送" />
    ```
- 获取节点类型
  - nodeType 元素类型返回1，属性节点返回2
  - nodeName 返回标签名
  ```
  console.log(document.body.nodeType);//1
  console.log(document.body.nodeName);//BODY
  console.log(document.head.nodeType);//1
  console.log(document.head.nodeName);//HEAD
  ```
  - nodeValue 文本节点返回文本内容，其他返回null

  ```
  var oDiv = document.getElementsByClassName("xiaoming")[0];
  console.log(oDiv.innerHTML);//<li><a>测试:打印我是小明</a></li>
  console.log(oDiv.childNodes[1].innerHTML);//<a>测试:打印我是小明</a>
  console.log(oDiv.childNodes[1].childNodes[1].innerHTML);//测试:打印我是小明
  console.log(oDiv.childNodes[1].childNodes[1].childNodes[0].nodeValue);//测试:打印我是小明

  <div class="xiaoming">
    <li>
      <a>测试:打印我是小明</a>
    </li>
  </div>
  ```
-getAttribute(); 获取属性
  ```
  <div class="class_div1" id="id_div1" style="background: red;" aaa="dsafkjhsf"></div>
<script type="text/javascript">
  var div1 = document.getElementById("id_div1");
  console.log(div1.getAttribute("aaa"));
  ```
- setAttribute(); 设置属性
  ```
  div1.setAttribute("aaa","aaa");
  console.log(div1.getAttribute("aaa"));//aaa
  ```
- removeAttribute(); 删除属性
  ```
  div1.removeAttribute("style");
  console.log(div1.getAttribute("style"));
  ```
- calssName兼容问题
  ```
  var all=document.getElementsByTagName('*');
	console.info(all);
	var a=[];
	for(var i=0;i<all.length;i++){
		if(all[i].className == "demo"){
			a.push(all[i]);
		}
	}
	console.info(a);
  ```
- offsetWidth
- offsetHeigt
- offsetLeft
- offsetTop
  ```
  <div class="class_div1" id="id_div1" style="background: red;">
    aldskjflkdsf
  </div>
  <script type="text/javascript">
  div1 = document.getElementById("id_div1");
  console.log(document.getElementById("id_div1").offsetWidth);//auto
  console.log(document.getElementById("id_div1").offsetHeight);//18
  console.log(document.getElementById("id_div1").offsetLeft);//8
  console.log(document.getElementById("id_div1").offsetTop);//8
  ```
- createElement
  ```
  var oDiv1 = document.createElement("div");
  oDiv1.innerHTML = "新同学：李欣";
  oDiv1.setAttribute("class","girls");
  document.body.appendChild(oDiv1);
  ```
- appendChild()添加子节点
- insertBefore("被添加的新节点","参照物")
- removeChild()删除节点
- replaceChild("新节点","参照物")替换
  ```
  var oDiv1 = document.createElement("div");
  oDiv1.innerHTML = "新同学：李欣";
  oDiv1.setAttribute("class","girls");

  var oInput = document.createElement("input");
  oInput.setAttribute("type","submit");

  document.body.appendChild(oDiv1);
  document.body.appendChild(oInput);

  var oDiv2 = document.createElement("div");
  oDiv2.innerHTML = "创建包裹框";
  oDiv2.setAttribute("style","background: red;height: 100px;");

  var oDiv3 = document.createElement("div");
  oDiv3.innerHTML = "oDiv3是oDiv2的子节点";
  oDiv3.setAttribute("style","background: green;height: 18px;");

  var oDiv4 = document.createElement("div");
  oDiv4.innerHTML = "div4插入到oDiv3之前";
  oDiv4.setAttribute("style","background: yellow;height: 18px;");

  var oDiv5 = document.createElement("div");
  oDiv5.innerHTML = "div5替换div4的位置";
  oDiv5.setAttribute("style","background: #CCC;height: 18px;");

  oDiv2.appendChild(oDiv3);
  oDiv2.insertBefore(oDiv4,oDiv3);
  document.body.appendChild(oDiv2);

  oInput.onclick = function(){
    oDiv2.removeChild(oDiv3);
    oDiv2.replaceChild(oDiv5,oDiv4);
  }
  ```
- parentNode 父节点
- createTextNode() 创建文本节点
- children 子元素
- nextSibling  下一个兄弟节点
