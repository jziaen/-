# css
- css样式表的优先级别
  - 内联样式表的优先级别最高
  - 内联样式表与外部样式表的有限界别和书写顺序有关

- css选择符
  - 类型
  - id
  - class
  - 特殊
- 伪类选择器
  - hover
  - visited
  - link
  - actived
- 权重
  - 类型选择符的权重 0001
  - class选择符的权重 0010
  - id选择符的权重 0100
  - 内联选择符的权重 1000
  - 继承选择符的权重 0000
  - 高权重的选择符会覆盖第选择负的权重
  - 权重相同时，那个最后定义以那个为主
- `text-decoration:none/underline/overline/line-through/blink`(高版本浏览器不支持blink属性)

- `文本流控制{layout-flow:horizontal/vertical-ideographic;}`（只支持IE浏览器）
  1. horizontal:自左向右
  2. vertical-ideographic:自上而下，自右向左

- `text-transform: none(默认值)/capitalize(每个单词首字母大写)/uppercase (都为大写字母)/lowercase ( 都为小写字母 )
`
- `text-shadow: 5px 5px 5px #FF000;`
  - 分别表示：水平偏移值，垂直偏移值，模糊的半径，阴影的颜色）
- `background-attachment: scroll(滚动)/fixed(固定);`
- `background-size: 数值/百分比/auto/cover/contain;`
- `background: #背景色 url() no-repeat center top;`
- `list-style-type: disc/circle/square/nine;`
- `list-style-position: outside/inside;`

- 盒模型的组成部分
  - 内容content
  - 边框 border
  - 填充 padding 设置元素内容到边框之间的距离，padding不可以有负值。
  - 边界 margin

- `border-style: solid(实线)/dashed(虚线)/dotted(点状线)/double(双线)`
  1. solid 实线
  2. dotted 点线
  3. dashed 虚线
  4. double 双线
  5. groove 槽线
  6. ridge 岭边
  7. inset 凹边
  8. ouset 凸边
  9. none 无边框，默认值
  10. hidden 无边框

- `margin: 0 auto;`居中

- 宽 = margin*2+padding*2+border*2+content.width;
- 高 = margin*2+padding*2+border*2+content.height;

- css2.0盒模型层次3D(从前往后)
  1. border
  2. content+padding
  3. background-image
  4. background-color
  5. margin

- relative相对定位，依照其自身定位
- absolute绝对定位，依照body或有relative/absolute的父元素
