# 图片整合
- 将导航背景图片，、按钮背景图片等有规则的正合成体张图片
- 优势
  1. 通过图片整合减少对服务器的请求次数，提高页面的加载速度
  2. 通过整合图片减少图片的体积
- 滑动门
  - 利用css背景图像可层叠性

---

# 浏览器
- 主流浏览器
  -IE、Safari、Firefox、Chrome、Opera、百度、360、搜狗、遨游
- 五大浏览器的内核
  - Trident(三叉戟) IE、遨游、腾讯、世界之窗、360
  - Gecko(壁虎) Firefox
  - Presto(迅速的)  Opera
  - Webkit  Safari、Chrome
  - Blink  由Google和Opera开发的浏览器排版引擎，2013年4月发布
---

# 浏览器兼容性
  - css Bug:浏览器不能长长显示的问题
  - css Hack:兼容不同浏览器中正确显示的技巧方法，属于非官方的__补丁__
  - css Filter: 对特定的浏览器或浏览器组显示或隐藏规则或申明的方法
  - 使用Hack带来的副作用
    1. 降低css代码的可读性，增加了代码负担
  - 设计css Hack和Filter的两种方法
    1. 利用浏览器自身的Bug，来隐藏或显示样式或申明
    2. 利用浏览器对CSS支持的不完善，如对某些规则或语法还没有形成支持，来隐藏或显示样式

  - iE6常见css解析Bug及Hack
    1. 图片间隙
    > 在div中插入图片时，图片会将div下方撑大3像素

        - Hack1：将div与img写在同一行
        - Hack2：讲image转化为块元素--`display: block;`

      1. dt中图片间隙
        - Hank1:将`img`转化为块状元素`display: block;`
      2. li中图片间隙
        - Hack1: `img`转为块元素
        - Hack2: 给`ul`设置`font-size: 0;`
        - Hack3: 给`img`设置`margin-bottom: -5px;`

    2. 双倍浮向（双倍边距）
    > 当IE6及更低版本浏览器在解析浮动元素时，会错误的把浮向边界加倍显示。

      - Hack1：给浮动元素添加申明`display: inline;`
    3. 默认高度（IE6）
    > 在IE6及以下版本中，部分块元素有默认高度（低于18px）

      - Hack1：给元素添加申明`font-size: 0;`
      - Hack2：给元素添加申明`overflow: hidden;`
    4. 表单行高不一致
      > 表单元素行高对齐方式不一致

      - Hack1：给表单元素添加申明 `float: left;`
    5. 按钮元素默认大小不一
      > 各浏览器中按钮元素大小不一致

      - Hack1：统一大小
      - Hack2：在 `input`上写按钮样式，一定要把input的边框去掉
      - Hack3：如果这个按钮是一个图片，直接把图片作为按钮的背景图片即可
    6. 百分比Bug
    > 在IE6中及以下版本中在解析百分比时，会按四舍五入方法计算从而导致50%加50%大于100%的情况

      - Hack1： 给右边的浮动元素添加申明
        `clear：right`
    7. 鼠标指针Bug
      > `console`的hand只有IE低版本支持,`console: pointer;`兼容IE6以上及其他浏览器

      - `cursor: pointer;`
    8. 透明度
      - IE `filter: alpha(opacity=20);`
      - 其他浏览器`opacity: 0.2;`
    9. li里a加`diaplay:block;`出现行高不一致
      - Hack1：给a加`display: inline-block;`
      - Hack2：给a加`display: inline;`

---
# 文本溢出
  - `overflow: visible（默认）/hidden/scroll/auto/inherit;`
  - scroll和auto的区别
    1. scroll强制出现滚动条
    2. auto 只有在内容超出时才会出现滚动条
  - overflow-x/overflow-y:水平方向内容溢出、垂直方向内容溢出
---
# 空白空间
- `white-space: normal/pre/nowrap/pre-wrap/pre-line/inherit;`
  - pre 文本超出边界时不换行
  - nowrap 文本超出边界时不换行，直到文本遭遇`<br>`或文本结束
  - pre-wrap 不合并文字间的空白距离，到边界时发生换行
  - pre-line 不保留文字间的空白，到边界时发生换行
---
# 宽高自适应
  - 元素具备最小高度的自适应
    1. Hack1：`min-height: value;_height: value;`
    2. Hack2: `min-height: value;height: auto!important;height: value;`
---
# 高度塌陷
- Hack1： 给父元素添加申明`overflow: hidden;`
- Hack2： 在浮动元素下方添加空`div``clear: both;height: 0;overflow: hidden;font-size: 0;`
- Hack3： 万能清除浮动`:after{content:".";display: block;height: 0;visibility: hidden;clear: both;}`
---
# script
  - language 表示代码使用的脚本的语言
  - src 表示要引入的外部文件
  - type 表示脚本语言的类型
---
# 基本类型
  - String
  - Number
  - Boolean
  - Undefined
  - Null
---
# 复杂数据类型
  - Function
  - Array
  - Math
  - Date
---
# 隐式转换
  1. String类型与其他类型进行加法运算的时候是作为字符串拼接
  2. boolean和number进行运算时，会把Boolean转化为number进行运算
  3. string在Boolean运算，会转化为number类型，前提是string必须是数字类型
