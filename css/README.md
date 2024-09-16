# CSS

## 本地目录
1. [面试题](./面试题/README.md)

## 1. **CSS 基础概念**

- **语法结构**
  - CSS 使用选择器来定位 HTML 元素，并通过属性-值对的形式定义样式。
  - 基本结构：`selector { property: value; }`
  
- **选择器**
  - **基础选择器**：如 `element`、`.class`、`#id` 选择特定的元素、类或 ID。
  - **组合选择器**：如 `div > p`（子元素），`ul li`（后代元素），`a:hover`（伪类选择器）等。
  - **属性选择器**：如 `[type="text"]`，选择特定属性的元素。
  
- **优先级（Specificity）**
  - CSS 样式有优先级，依次为：`!important` > 内联样式 > ID 选择器 > 类选择器 > 标签选择器 > 通配选择器 `*`。
  - 样式表的顺序也会影响优先级，后定义的样式覆盖先前的。

- **继承性**
  - 一些属性如 `color` 和 `font-family` 会自动从父元素继承，另一些如 `margin` 和 `padding` 不会。
  
- **盒模型（Box Model）**
  - 每个 HTML 元素都被看作一个矩形框，包含：内容（content）、内边距（padding）、边框（border）和外边距（margin）。
  - `box-sizing: border-box` 可以让边框和内边距包含在元素的总宽高内。

---

## 2. **布局**

- **普通流布局（Normal Flow）**
  - 元素按照文档流自上而下、从左到右排列，块级元素占据一行，行内元素可以排在同一行内。
  
- **浮动（Float）**
  - `float` 属性可以使元素向左或向右浮动，常用于布局和图片环绕文本等情况。
  - 使用 `clear` 清除浮动效果。

- **Flexbox**
  - 是一种用于一维布局的强大工具，适合在主轴（横向或纵向）上对元素进行排列和对齐。
  - 常用属性：
    - 容器：`display: flex;`、`flex-direction`、`justify-content`、`align-items`。
    - 子元素：`flex-grow`、`flex-shrink`、`flex-basis`。

- **Grid 布局**
  - Grid 是二维布局系统，可以同时处理行和列的布局。
  - 常用属性：
    - 容器：`display: grid;`、`grid-template-columns`、`grid-template-rows`、`grid-gap`。
    - 子元素：`grid-column`、`grid-row`。

- **定位（Positioning）**
  - CSS 提供了四种定位模式：
    - **static**：默认值，按正常流排列。
    - **relative**：相对定位，依据正常位置偏移。
    - **absolute**：绝对定位，相对于最近的定位父元素。
    - **fixed**：固定定位，相对于视口（窗口）进行定位。
    - **sticky**：粘性定位，元素在指定阈值前后是相对定位，超出后变为固定定位。

- **媒体查询（Media Queries）**
  - 媒体查询用于实现响应式设计，依据设备的屏幕大小、分辨率、方向等条件调整页面样式。
  - 示例：`@media (max-width: 600px) { /* 样式规则 */ }`

---

## 3. **样式与视觉效果**

- **颜色**
  - CSS 支持颜色的多种表示法：命名颜色（如 `red`）、RGB/RGBA（如 `rgb(255, 0, 0)`）、HSL/HSLA（如 `hsl(0, 100%, 50%)`）。

- **字体**
  - 通过 `font-family` 设置字体族，`font-size` 设置字体大小，`font-weight` 设置字重，`line-height` 设置行高。
  - 使用 Web 字体（如 Google Fonts）可以提升设计多样性。

- **文本样式**
  - 文本的颜色可以通过 `color` 设置，`text-align` 控制对齐，`text-decoration` 控制下划线、删除线等。
  - `text-transform` 可以将文本转换为大写、小写或首字母大写。

- **背景**
  - `background` 属性可以设置背景颜色、图片、渐变等。
  - 使用 `background-size` 控制背景图像的大小，`background-position` 控制背景图像的位置。

---

## 4. **动画与过渡**

- **过渡（Transitions）**
  - 使用 `transition` 可以实现元素属性的平滑过渡。常用于鼠标悬停、点击等交互状态。
  - 示例：`transition: all 0.3s ease;`

- **动画（Animations）**
  - `@keyframes` 定义动画序列，通过 `animation` 属性应用动画。
  - 示例：
    ```css
    @keyframes fade {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
    div {
      animation: fade 2s infinite;
    }
    ```

- **动画性能优化**
  - 尽量使用 `transform` 和 `opacity` 进行动画，避免影响布局的属性如 `left` 或 `top`。
  - 使用 `will-change` 提前告知浏览器某些属性将发生变化，从而优化渲染性能。

---

## 5. **CSS 优化与工具**

- **CSS 文件优化**
  - 压缩 CSS 文件可以减少文件大小，提升加载速度。可以使用工具如 CSSNano、PostCSS 等。
  
- **代码拆分与模块化**
  - 通过使用 BEM 命名规范、CSS Modules、Sass/Less 等工具组织样式，有助于避免样式冲突并提升可维护性。

- **预处理器（Preprocessors）**
  - Sass、Less 等预处理器增强了 CSS 的功能，引入了变量、嵌套、循环等高级功能，使 CSS 更易于编写和管理。

- **现代技术：CSS Variables**
  - CSS 变量（custom properties）是原生的动态变量，可以通过 JavaScript 动态修改样式。
  - 示例：`--main-color: blue; color: var(--main-color);`

---

## 6. **浏览器兼容性与调试**

- **浏览器兼容性**
  - CSS 可能在不同的浏览器中表现不同。开发者通常需要使用前缀（如 `-webkit-`、`-moz-`）或 Polyfill 来解决兼容性问题。
  
- **调试工具**
  - 浏览器开发者工具（如 Chrome DevTools）提供了丰富的 CSS 调试功能，可以查看元素的计算样式、盒模型、响应式设计等。

---

总结来说，CSS 是一个功能强大且不断发展的样式语言，从基础的样式设置到复杂的布局、动画及优化，都有丰富的技巧和工具帮助开发者创建更美观、流畅且高效的网页。