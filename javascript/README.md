# Javascript

## 本地目录
1. [面试题](./面试题/Basic.md)
2. [算法笔试](./coding/READMD.md)
3. [浅拷贝和深拷贝](./01.clone.md)

## 关键字
[来源](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#%E5%85%B3%E9%94%AE%E5%AD%97)

关键字是 JavaScript 中看起来像标识符但又具有特殊含义的标记。例如，在函数声明之前的 async 关键字表示该函数是异步的。

一些关键字是保留的，这意味着它们不能被用作变量声明、函数声明等的标识符。它们通常被称为保留字, [JavaScript中所有的保留字请看](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#%E4%BF%9D%E7%95%99%E5%AD%97)

在JavaScript中，**关键字**和**保留字**是两个不同的概念，尽管它们都涉及到特定的词汇在代码中的使用限制。以下是它们的区别：

### 1. 关键字（Keywords）
- **定义**: 关键字是JavaScript语言的核心部分，它们具有特定的用途和功能。关键字直接参与代码的控制和操作，例如控制流程、定义变量和函数等。
- **使用**: 关键字是不可作为变量、函数名、对象属性名等的标识符使用的，因为它们已经在语言中被赋予了特定的意义。
- **示例**: `if`, `else`, `for`, `return`, `class`, `function`等。

### 2. 保留字（Reserved Words）
- **定义**: 保留字包括关键字以及当前没有特定功能但可能在未来的JavaScript版本中作为关键字引入的词汇。这些词汇被保留以防止未来的兼容性问题。
- **使用**: 与关键字类似，保留字也不能被用作变量、函数名等。虽然某些保留字在当前版本的JavaScript中没有功能，但为了防止未来的版本冲突，它们被禁止用作标识符。
- **示例**: 一些保留字可能包括`enum`, `implements`, `package`, `protected`, `interface`, `private`等。这些在当前JavaScript版本中没有功能，但可能在将来引入。

### 总结
- **关键字**: 是语言的一部分，有特定的功能，直接影响代码的执行。
- **保留字**: 目前可能没有特定的功能，但被保留以防止将来版本中它们成为关键字时引发冲突。

了解这两者的区别有助于编写更兼容和安全的代码，避免使用可能在将来成为关键字的保留字。

## 语法和基本类型

### 变量声明 (var, let, const)

- 块作用域是什么
   1. 块是由 `{}` 界定的代码块。一个块存在于花括号中。花括号内的任何内容都是一个块

#### var
在 `ES6` 出现之前常使用， 
1. var 声明的作用域是全局的或函数/局部的
2. var 变量可以重新声明和更新
3. var 的提升： 变量和函数声明在代码执行之前被移动到其作用域的顶部，并初始化为 `undefined`

#### let
1. 是 `块作用域`
2. let 可以更新但不能重新声明（同一作用域中）,抛出错误：`error: Identifier 'xxx' has already been declared`
3. let 的提升：let 声明被提升到顶部，与初始化为 `undefined` 的 `var` 不同，let 关键字未初始化。所以如果你在声明之前尝试使用 let 变量，你会得到一个 `Reference Error`。

#### const
1. 是 `块作用域`;
2. 用 const 声明的变量保持恒定值, **在之后的代码中无法被重新赋值，且必须在变量声明的时候赋初始值**
3. const 不能更新或重新声明
   1. 如果是对象，可以修改对象内部的值（无法重新给变量赋值）
4. const 的提升：声明被提升到顶部但没有被初始化。

### 数据类型（String, Number, Boolean, Null, Undefined, Symbol, BigInt, Object）

[来源](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures)


1. `Null`: Null 类型只有一个值：null。
2. `Undefined`: Undefined 类型只有一个值：undefined。
3. `Boolean`: Boolean 类型表示一个逻辑实体并且包括两个值：true 和 false。
4. `Number`:
   1. NaN（“Not a Number”）是一个特殊种类的数值，当算术运算的结果不表示数值时，通常会遇到它。它也是 JavaScript 中唯一不等于自身的值。
5. `BigInt`: BigInt 类型在 Javascript 中是一个数字的原始值，它可以表示任意大小的整数。使用 BigInt，你可以安全地存储和操作巨大的整数，甚至超过 Number 的安全整数限制（Number.MAX_SAFE_INTEGER）。
   1. BigInt 是通过将 n 附加到整数末尾或调用 BigInt() 函数来创建的。
   2. ```js
    // BigInt
    const x = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
    x + 1n === x + 2n; // false，因为 9007199254740992n 和 9007199254740993n 不相等

    // Number
    Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; // true，因为都等于 9007199254740992
   ```
6. `String`: JavaScript 字符串是不可变的。这意味着一旦字符串被创建，就不可能修改它（字符串方法基于当前字符串的内容创建一个新的字符串）
7. `Symbol`: Symbol 是唯一并且不可变的原始值并且可以用来作为对象属性的键。symbol 的目的是去创建一个唯一属性键，保证不会与其他代码中的键产生冲突。
8. `Object`: 在计算机科学中，对象（object）是指内存中的可以被标识符引用的一块区域。在 JavaScript 中，对象是唯一可变的值。
   1. 数据属性： 数据属性将键与值相关联
      1. value： 通过属性访问器获取值。可以是任意的 JavaScript 值。
      2. writable：一个布尔值，表示是否可以通过赋值来改变属性。
      3. enumerable： 一个布尔值，表示是否可以通过 `for...in` 循环来枚举属性。
      4. configurable：一个布尔值，表示该属性是否可以删除，是否可以更改为访问器属性，并可以更改其特性。
   2. 访问器属性：将键与两个访问器函数（get 和 set）相关联，以获取或者存储值。
      1. get：该函数使用一个空的参数列表，以便有权对值执行访问时，获取属性值。
      2. set：使用包含分配值的参数调用的函数。每当尝试更改指定属性时执行。
      3. enumerable：一个布尔值，表示是否可以通过 `for...in` 循环来枚举属性
      4. configurable：一个布尔值，表示该属性是否可以删除，是否可以更改为访问器属性，并可以更改其特性。

**扩展**
1. 从概念上讲，`undefined` 表示值的缺失，`null` 表示对象的缺失（**这也可以说明 `typeof null === "object"` 的原因**）。当某些东西没有值时，该语言通常默认为 `undefined`
2. 为什么推荐用`void 0` 来获得 `undefined`:
   1.  undefined 不是关键字 在某些场景和老版本浏览器环节下可以通过 undefined = xxx 被修改，不安全。
   2.  *`void` 运算符对给定的表达式进行求值，然后返回 undefined*
3. JavaScript URI：当用户点击一个以 `javascript:` 开头的 URI 时，它会执行 URI 中的代码，然后用返回的值替换页面内容，除非返回的值是 undefined。void 运算符可用于返回 undefined

#### 强制类型转换
[来源](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures#%E5%BC%BA%E5%88%B6%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2)

> JavaScript 是一个弱类型语言。这意味着你经常可以使用与预期类型不同类型的值，并且该语言将为你转换它为正确的类型。

1. 原始值强制转换：[原始值强制转换](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-toprimitive)用于得到一个期望的原始值。`[Symbol.toPrimitive]("default") → valueOf() → toString()`
   1. 如果值已经是原始值，则此操作不会进行任何转换。
   2. 对象将依次调用它的，`[Symbol.toPrimitive]()`（将 default 作为 hint 值） -> `valueOf()`  ->  `toString()` 方法，将其转换为原始值。
2. [数字类型强制转换](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#number_%E5%BC%BA%E5%88%B6%E8%BD%AC%E6%8D%A2): 两种数字类型：`number` 和 `BigInt`。`[Symbol.toPrimitive]("number") → valueOf() → toString()`
   1. `Number` 将按原样返回
   2. `undefined` 转换为 `NaN`
   3. `null` 转换为 `0`
   4. `true` 转换为 `1` ；`false` 转换为 `0`
   5. *字符串* 将被假定为包含 *数字字面量*，并通过解析它们来转换。解析失败会得到 `NaN`。
      1. 前导和尾随的空格/换行符会被忽略。
      2. 前导的数字 `0` 不会导致该数值成为八进制字面量
      3. `+` 和 `-` 允许出现在字符串的开头以指示其符号。该标志只能出现一次，并且后面不能跟空格。
      4. `Infinity` 和 `-Infinity` 被当作是字面量
      5. 空字符串或仅包含空格的字符串转换为 `0`
      6. 不允许使用数字分隔符。
   6. BigInt 抛出 TypeError，以防止意外的强制隐式转换导致精度损失
   7. Symbol 抛出 TypeError
   8. 对象首先通过按顺序调用它们的 [Symbol.toPrimitive]()（使用 "number" 提示）、valueOf() 和 toString() 方法将其转换为原始值。然后将得到的原始值转换为数字
3. 字符串类型强制转换：`[Symbol.toPrimitive]("number") → valueOf() → toString()`


### 操作符（算术、比较、逻辑、赋值等）

JavaScript中的操作符用于执行各种操作，如算术计算、比较、逻辑判断、赋值等。以下是JavaScript中的几种主要操作符及其作用：

#### 1. **算术操作符（Arithmetic Operators）**
算术操作符用于对数值进行基本的数学运算。

- **`+`（加法）**: 计算两个数的和或用于字符串拼接。
  - 示例: `5 + 3` 结果为 `8`；`"Hello" + " " + "World"` 结果为 `"Hello World"`
- **`-`（减法）**: 计算第一个数减去第二个数的差。
  - 示例: `5 - 3` 结果为 `2`
- **`*`（乘法）**: 计算两个数的乘积。
  - 示例: `5 * 3` 结果为 `15`
- **`/`（除法）**: 计算第一个数除以第二个数的商。
  - 示例: `6 / 3` 结果为 `2`
- **`%`（取余）**: 计算第一个数除以第二个数的余数。
  - 示例: `5 % 3` 结果为 `2`
- **`**`（指数）**: 计算第一个数的第二个数次幂。
  - 示例: `2 ** 3` 结果为 `8`
- **`++`（自增）**: 将变量的值加1，前缀`++x`先加后用，后缀`x++`先用后加。
  - 示例: `let x = 5; x++;` 结果为 `x = 6`
- **`--`（自减）**: 将变量的值减1，前缀`--x`先减后用，后缀`x--`先用后减。
  - 示例: `let x = 5; x--;` 结果为 `x = 4`

#### 2. **比较操作符（Comparison Operators）**
比较操作符用于比较两个值，并返回布尔值（`true`或`false`）。

- **`==`（相等）**: 比较两个值是否相等，不考虑类型。
  - 示例: `5 == '5'` 结果为 `true`
- **`===`（全等）**: 比较两个值是否完全相等（值和类型都相等）。
  - 示例: `5 === '5'` 结果为 `false`
- **`!=`（不等）**: 比较两个值是否不相等，不考虑类型。
  - 示例: `5 != '5'` 结果为 `false`
- **`!==`（全不等）**: 比较两个值是否完全不相等（值或类型不同）。
  - 示例: `5 !== '5'` 结果为 `true`
- **`>`（大于）**: 判断第一个值是否大于第二个值。
  - 示例: `5 > 3` 结果为 `true`
- **`>=`（大于或等于）**: 判断第一个值是否大于或等于第二个值。
  - 示例: `5 >= 5` 结果为 `true`
- **`<`（小于）**: 判断第一个值是否小于第二个值。
  - 示例: `3 < 5` 结果为 `true`
- **`<=`（小于或等于）**: 判断第一个值是否小于或等于第二个值。
  - 示例: `3 <= 3` 结果为 `true`

#### 3. **逻辑操作符（Logical Operators）**
逻辑操作符用于逻辑判断，通常用于条件语句中。

- **`&&`（与）**: 逻辑与操作符，当两个操作数都为真时返回`true`，否则返回`false`。
  - 示例: `true && false` 结果为 `false`
- **`||`（或）**: 逻辑或操作符，当两个操作数中至少有一个为真时返回`true`，否则返回`false`。
  - 示例: `true || false` 结果为 `true`
- **`!`（非）**: 逻辑非操作符，取反操作数的布尔值。
  - 示例: `!true` 结果为 `false`

#### 4. **赋值操作符（Assignment Operators）**
赋值操作符用于将值赋给变量。

- **`=`（简单赋值）**: 将右侧的值赋给左侧的变量。
  - 示例: `let x = 5;`
- **`+=`（加法赋值）**: 将右侧的值与左侧变量相加，然后将结果赋给左侧变量。
  - 示例: `x += 3;` 相当于 `x = x + 3`
- **`-=`（减法赋值）**: 将右侧的值与左侧变量相减，然后将结果赋给左侧变量。
  - 示例: `x -= 3;` 相当于 `x = x - 3`
- **`*=`（乘法赋值）**: 将右侧的值与左侧变量相乘，然后将结果赋给左侧变量。
  - 示例: `x *= 3;` 相当于 `x = x * 3`
- **`/=`（除法赋值）**: 将左侧变量除以右侧的值，然后将结果赋给左侧变量。
  - 示例: `x /= 3;` 相当于 `x = x / 3`
- **`%=`（取余赋值）**: 将左侧变量对右侧的值取余，然后将结果赋给左侧变量。
  - 示例: `x %= 3;` 相当于 `x = x % 3`
- **`**=`（指数赋值）**: 将左侧变量的值进行指数运算，然后赋值给左侧变量。
  - 示例: `x **= 3;` 相当于 `x = x ** 3`

#### 5. **位操作符（Bitwise Operators）**
位操作符用于按位操作二进制数。

- **`&`（按位与）**: 对应位都为1时结果为1，否则为0。
  - 示例: `5 & 1` 结果为 `1`
- **`|`（按位或）**: 对应位有一个为1时结果为1，否则为0。
  - 示例: `5 | 1` 结果为 `5`
- **`^`（按位异或）**: 对应位不同为1，相同为0。
  - 示例: `5 ^ 1` 结果为 `4`
- **`~`（按位非）**: 将位数翻转，即0变1，1变0。
  - 示例: `~5` 结果为 `-6`
- **`<<`（左移）**: 将位数左移，右侧补0。
  - 示例: `5 << 1` 结果为 `10`
- **`>>`（右移）**: 将位数右移，左侧补符号位（正数补0，负数补1）。
  - 示例: `5 >> 1` 结果为 `2`
- **`>>>`（无符号右移）**: 将位数右移，左侧补0。
  - 示例: `5 >>> 1` 结果为 `2`

#### 6. **其他操作符**
- **三元操作符 `? :`**: 一个简洁的条件操作符，根据条件表达式的真假返回不同的结果。
  - 示例: `let result = (5 > 3) ? "Yes" : "No";` 结果为 `"Yes"`
- **逗号操作符 `,`**: 用于在一行代码中包含多个表达式，返回最后一个表达式的结果。
  - 示例: `let x = (1, 2, 3);` 结果为 `x = 3`


### 条件语句 (if, else, switch)
JavaScript中的条件语句用于根据表达式的结果（通常是布尔值）来决定执行哪一段代码。主要的条件语句有`if...else`和`switch`。以下是它们的详细介绍：

#### 1. **`if` 语句**
`if`语句是最基本的条件语句，用于根据一个条件表达式的结果来决定是否执行某段代码。

**语法**：
```javascript
if (condition) {
  // 当条件为 true 时执行的代码
}
```

**示例**：
```javascript
let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
}
// 输出: You are an adult.
```
在这个例子中，如果`age`的值大于或等于18，控制台将输出“You are an adult.”。

#### 2. **`if...else` 语句**
`if...else`语句允许在条件为`false`时执行另一段代码。

**语法**：
```javascript
if (condition) {
  // 当条件为 true 时执行的代码
} else {
  // 当条件为 false 时执行的代码
}
```

**示例**：
```javascript
let age = 16;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are not an adult.");
}
// 输出: You are not an adult.
```
在这个例子中，如果`age`小于18，控制台将输出“You are not an adult.”。

#### 3. **`if...else if...else` 语句**
`if...else if...else`语句允许对多个条件进行检查，并根据第一个满足条件的表达式执行相应的代码。

**语法**：
```javascript
if (condition1) {
  // 当 condition1 为 true 时执行的代码
} else if (condition2) {
  // 当 condition1 为 false 且 condition2 为 true 时执行的代码
} else {
  // 当所有条件都为 false 时执行的代码
}
```

**示例**：
```javascript
let score = 85;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 80) {
  console.log("Grade B");
} else if (score >= 70) {
  console.log("Grade C");
} else {
  console.log("Grade F");
}
// 输出: Grade B
```
在这个例子中，`score`为85，所以控制台输出“Grade B”。

#### 4. **`switch` 语句**
`switch`语句用于基于单一表达式的多个可能值来执行不同的代码块。相比于`if...else if...else`，`switch`语句在处理多个条件时更具可读性。

**语法**：
```javascript
switch (expression) {
  case value1:
    // 当 expression === value1 时执行的代码
    break;
  case value2:
    // 当 expression === value2 时执行的代码
    break;
  // 可以有任意多个 case 分支
  default:
    // 当没有匹配的 case 时执行的代码
}
```

**示例**：
```javascript
let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}

console.log(dayName);
// 输出: Wednesday
```
在这个例子中，根据`day`的值，`dayName`将被设置为相应的星期几。如果`day`的值不在1到7之间，`default`块将执行并返回“Invalid day”。

#### 总结
- **`if...else`**: 适用于处理简单的条件分支，尤其当条件表达式是布尔值时。
- **`if...else if...else`**: 适合处理多个不同的条件分支。
- **`switch`**: 适合处理单一表达式的多个可能值，尤其在可能值较多时更具可读性。

### 循环语句 (for, while, do...while)
JavaScript中的循环语句用于重复执行一段代码，直到满足某个条件为止。常见的循环语句有`for`、`while`和`do...while`。以下是对它们的详细介绍：

#### 1. **`for` 循环**
`for`循环是最常用的循环语句，适用于知道循环次数的情况。它包含三个部分：初始化语句、条件表达式、和迭代语句。

**语法**：
```javascript
for (initialization; condition; iteration) {
  // 循环体代码
}
```
- **`initialization`**: 初始化循环变量，只执行一次。
- **`condition`**: 每次循环开始前都会评估该条件表达式，如果结果为`true`，则执行循环体；否则，循环结束。
- **`iteration`**: 每次循环结束后执行的语句，用于更新循环变量。

**示例**：
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// 输出: 0 1 2 3 4
```
在这个例子中，`i`从0开始，每次循环增加1，直到`i`不小于5时循环结束。

#### 2. **`while` 循环**
`while`循环在执行循环体之前先评估条件表达式。只要条件为`true`，循环体就会一直执行。

**语法**：
```javascript
while (condition) {
  // 循环体代码
}
```
- **`condition`**: 循环开始前评估的条件表达式，结果为`true`时，执行循环体；否则，循环结束。

**示例**：
```javascript
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
// 输出: 0 1 2 3 4
```
在这个例子中，只要`i`小于5，循环体就会执行，并且在每次循环中`i`递增1。

#### 3. **`do...while` 循环**
`do...while`循环与`while`循环类似，但它保证循环体至少执行一次，因为条件表达式是在循环体执行之后才进行评估的。

**语法**：
```javascript
do {
  // 循环体代码
} while (condition);
```
- **`condition`**: 循环体执行后评估的条件表达式，结果为`true`时，继续执行下一次循环；否则，循环结束。

**示例**：
```javascript
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 5);
// 输出: 0 1 2 3 4
```
在这个例子中，`do...while`循环保证了循环体至少执行一次，即使`condition`一开始为`false`。

#### 4. **循环控制语句**
在循环中，常用的控制语句包括`break`和`continue`：
- **`break`**: 立即退出循环，不再执行循环体的剩余部分。
- **`continue`**: 跳过当前迭代的剩余部分，立即进入下一次迭代。

**示例**：
```javascript
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break; // 当 i 为 3 时，退出循环
  }
  console.log(i);
}
// 输出: 0 1 2

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue; // 当 i 为 3 时，跳过本次循环，继续下一次循环
  }
  console.log(i);
}
// 输出: 0 1 2 4
```

#### 总结
- **`for` 循环**: 适用于已知循环次数的情况。
- **`while` 循环**: 适用于循环次数不确定，但需在满足某个条件之前一直执行的情况。
- **`do...while` 循环**: 适用于循环体需要至少执行一次的情况。


## 函数
JavaScript中的函数是可复用的代码块，用于执行特定任务或计算。函数可以接受输入（参数），并且可以返回输出（返回值）。函数的使用提高了代码的可读性、可维护性和可复用性。

### 1. **函数的定义**

在JavaScript中，有多种方式定义函数，包括函数声明、函数表达式、箭头函数等。

#### 1.1 **函数声明**
函数声明是最常见的定义函数的方式，使用`function`关键字来定义。

**语法**：
```javascript
function functionName(parameters) {
  // 函数体
  return value; // 可选
}
```

**示例**：
```javascript
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Alice")); // 输出: Hello, Alice!
```
在这个例子中，函数`greet`接受一个参数`name`，返回一个问候字符串。

#### 1.2 **函数表达式**
函数表达式是将函数赋值给变量。函数表达式可以是匿名的（无名称），也可以是命名的。

**语法**：
```javascript
const functionName = function(parameters) {
  // 函数体
  return value; // 可选
};
```

**示例**：
```javascript
const greet = function(name) {
  return "Hello, " + name + "!";
};

console.log(greet("Bob")); // 输出: Hello, Bob!
```
在这个例子中，函数被赋值给变量`greet`，然后通过`greet`来调用。

#### 1.3 **箭头函数**
箭头函数是ES6引入的更简洁的函数定义方式，尤其适用于简短的函数。

**语法**：
```javascript
const functionName = (parameters) => {
  // 函数体
  return value; // 可选
};
```
当箭头函数只有一个参数时，可以省略圆括号；当函数体只有一行代码并且是返回值时，可以省略花括号和`return`关键字。

**示例**：
```javascript
const greet = (name) => "Hello, " + name + "!";

console.log(greet("Charlie")); // 输出: Hello, Charlie!
```
在这个例子中，箭头函数`greet`返回一个问候字符串。

### 2. **函数调用**

定义函数后，可以通过函数名称和括号来调用它，并传递所需的参数。

**示例**：
```javascript
function add(a, b) {
  return a + b;
}

console.log(add(3, 5)); // 输出: 8
```
在这个例子中，函数`add`被调用，并传递了两个参数`3`和`5`，返回它们的和。

### 3. **函数参数**

函数可以接受多个参数，并在函数体内使用这些参数。函数也可以有默认参数值，当没有提供相应参数时使用默认值。

**示例**：
```javascript
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5)); // 输出: 5 (b 使用了默认值 1)
console.log(multiply(5, 3)); // 输出: 15
```

### 4. **返回值**

函数可以返回一个值，使用`return`关键字。如果没有`return`，函数将默认返回`undefined`。

**示例**：
```javascript
function square(x) {
  return x * x;
}

console.log(square(4)); // 输出: 16
```

### 5. **匿名函数**

匿名函数是没有名称的函数，通常用在需要临时函数的场景中，如回调函数。

**示例**：
```javascript
setTimeout(function() {
  console.log("This will run after 2 seconds");
}, 2000);
```
在这个例子中，`setTimeout`接受一个匿名函数作为回调函数，并在2秒后执行它。

### 6. **立即调用函数表达式 (IIFE)**
IIFE是定义后立即执行的函数。通常用于创建私有作用域，以避免变量污染全局作用域。

**语法**：
```javascript
(function() {
  // 函数体
})();
```

**示例**：
```javascript
(function() {
  console.log("This function runs immediately!");
})();
```

### 7. **函数作用域**

在JavaScript中，函数创建了自己的作用域。在函数内部声明的变量无法在函数外部访问（除非是通过返回值或全局变量）。

**示例**：
```javascript
function testScope() {
  let x = 10;
  console.log(x); // 输出: 10
}

testScope();
console.log(x); // 错误: x is not defined
```

### 8. **闭包 (Closure)**

闭包是指函数可以记住并访问它的词法作用域，即使函数在其词法作用域之外执行。

**示例**：
```javascript
function outerFunction() {
  let outerVar = "I am outside!";

  function innerFunction() {
    console.log(outerVar); // 闭包：访问外部函数的变量
  }

  return innerFunction;
}

const myFunction = outerFunction();
myFunction(); // 输出: I am outside!
```
在这个例子中，`innerFunction`记住了`outerFunction`中的变量`outerVar`，即使`outerFunction`已经执行完毕。

### 总结

- **函数声明**是最常用的定义方式。
- **函数表达式**可以赋值给变量或作为回调函数使用。
- **箭头函数**提供了一种简洁的语法，特别适用于简短的函数。
- **匿名函数**和**IIFE**用于临时函数和创建私有作用域。
- **闭包**是函数的重要特性，用于管理函数作用域中的变量。


## 对象与面向对象编程

JavaScript中的对象与面向对象编程（OOP）是核心概念，它们提供了对数据和行为进行组织和封装的方式。JavaScript本质上是一种面向对象的语言，每个实例都是对象。通过面向对象编程，开发者可以更好地管理代码的复杂性和重用性。

### 1. **对象（Object）**

在JavaScript中，对象是一种数据类型，是属性的无序集合，属性可以是基本值、函数或其他对象。对象通常用来表示现实世界中的实体或抽象概念。

#### 1.1 **对象的创建**

对象可以通过对象字面量、构造函数和`Object.create()`方法创建。

**对象字面量**：
```javascript
let person = {
  name: "Alice",
  age: 30,
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

person.greet(); // 输出: Hello, Alice
```
在这个例子中，`person`是一个对象，包含属性`name`、`age`和方法`greet`。

**构造函数**：
```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log("Hello, " + this.name);
  };
}

let person1 = new Person("Bob", 25);
person1.greet(); // 输出: Hello, Bob
```
在这个例子中，`Person`是一个构造函数，用于创建具有相同结构的多个对象。

**`Object.create()`方法**：
```javascript
let personProto = {
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

let person2 = Object.create(personProto);
person2.name = "Charlie";
person2.greet(); // 输出: Hello, Charlie
```
在这个例子中，`person2`对象继承了`personProto`对象的属性和方法。

#### 1.2 **访问和修改对象属性**

对象的属性可以通过点符号或方括号访问和修改。

**示例**：
```javascript
let person = {
  name: "Alice",
  age: 30
};

console.log(person.name); // 输出: Alice
person.age = 31;
console.log(person["age"]); // 输出: 31
```

#### 1.3 **删除对象属性**

可以使用`delete`操作符删除对象的属性。

**示例**：
```javascript
let person = {
  name: "Alice",
  age: 30
};

delete person.age;
console.log(person.age); // 输出: undefined
```

### 2. **面向对象编程（OOP）**

面向对象编程是一种编程范式，它将程序组织为一组对象，每个对象代表一个实体或抽象概念。OOP的核心概念包括**类**、**对象**、**继承**、**封装**和**多态**。

#### 2.1 **类（Class）**

类是对象的蓝图或模板，用于定义对象的属性和方法。在ES6之前，JavaScript通过构造函数实现类的功能。ES6引入了`class`关键字，使得定义类更加直观。

**示例**：
```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello, " + this.name);
  }
}

let person1 = new Person("Dave", 28);
person1.greet(); // 输出: Hello, Dave
```
在这个例子中，`Person`是一个类，通过`new`关键字可以创建类的实例。

#### 2.2 **继承（Inheritance）**

继承是OOP的重要特性，允许一个类继承另一个类的属性和方法。继承使得代码重用更加方便。

**示例**：
```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + " makes a noise.");
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + " barks.");
  }
}

let dog = new Dog("Rex");
dog.speak(); // 输出: Rex barks.
```
在这个例子中，`Dog`类继承了`Animal`类，并重写了`speak`方法。

#### 2.3 **封装（Encapsulation）**

封装是将对象的内部状态和实现细节隐藏起来，只暴露必要的接口给外部使用。JavaScript通过闭包和类的私有属性实现封装。

**示例**：
```javascript
class Counter {
  #count = 0; // 私有属性

  increment() {
    this.#count++;
  }

  getCount() {
    return this.#count;
  }
}

let counter = new Counter();
counter.increment();
console.log(counter.getCount()); // 输出: 1
```
在这个例子中，`#count`是一个私有属性，不能直接从类外部访问。

#### 2.4 **多态（Polymorphism）**

多态是指不同对象可以以不同的方式响应相同的方法调用。在JavaScript中，多态通常通过方法重写来实现。

**示例**：
```javascript
class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

let shapes = [new Circle(5), new Rectangle(4, 6)];
shapes.forEach(shape => {
  console.log(shape.area());
});
// 输出:
// 78.53981633974483
// 24
```
在这个例子中，`Circle`和`Rectangle`类都继承自`Shape`类，并重写了`area`方法。

### 3. **JavaScript中的原型链（Prototype Chain）**

JavaScript使用原型链来实现继承。每个对象都有一个`__proto__`属性，指向它的原型对象。类与对象通过原型链共享属性和方法。

**示例**：
```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log("Hello, " + this.name);
};

let person1 = new Person("Alice");
person1.greet(); // 输出: Hello, Alice
```
在这个例子中，`Person`的实例`person1`通过原型链访问了`greet`方法。

### 总结

- **对象**是JavaScript中基本的数据结构，表示数据的集合。
- **类**是面向对象编程中的核心概念，是对象的蓝图。
- **继承**允许类继承其他类的属性和方法。
- **封装**隐藏了对象的内部实现细节，只暴露必要的接口。
- **多态**允许对象以不同的方式响应相同的方法调用。
- **原型链**是JavaScript中实现继承的重要机制。



## 原型与继承
在JavaScript中，**原型（Prototype）**和**继承（Inheritance）**是实现对象复用和代码组织的核心机制。理解原型和继承对于编写高效、可维护的JavaScript代码至关重要。本文将详细介绍JavaScript中的原型系统、原型链以及如何通过不同的方式实现继承。

---

### 1. **原型（Prototype）概述**

#### 1.1 **什么是原型？**

在JavaScript中，每个对象都有一个内部链接到另一个对象的引用，称为**原型**。这个原型对象可以为当前对象提供属性和方法。这种机制被称为**原型链（Prototype Chain）**，它使得对象能够继承另一个对象的属性和方法。

#### 1.2 **`[[Prototype]]`与`prototype`**

- **`[[Prototype]]`**：这是每个对象内部的属性，指向其原型对象。在现代浏览器中，可以通过`__proto__`访问，但不建议频繁使用。
  
- **`prototype`**：这是构造函数的一个属性，指向一个对象。当使用`new`关键字创建实例时，实例的`[[Prototype]]`会被设置为构造函数的`prototype`属性。

#### 1.3 **示例**

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log("Hello, " + this.name);
};

let alice = new Person("Alice");
alice.greet(); // 输出: Hello, Alice

console.log(alice.__proto__ === Person.prototype); // 输出: true
```

在这个例子中：

- `Person`是一个构造函数，其`prototype`上定义了`greet`方法。
- `alice`是`Person`的一个实例，其内部`[[Prototype]]`指向`Person.prototype`。
- 因此，`alice`可以访问`greet`方法。

---

### 2. **原型链（Prototype Chain）**

#### 2.1 **定义**

原型链是由一系列对象通过`[[Prototype]]`属性链接起来形成的层次结构。当访问一个对象的属性或方法时，如果该对象本身没有这个属性或方法，JavaScript引擎会沿着原型链向上查找，直到找到或达到链的末端（`null`）。

#### 2.2 **示例**

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(this.name + " makes a noise.");
};

function Dog(name) {
  Animal.call(this, name); // 继承Animal的属性
}

Dog.prototype = Object.create(Animal.prototype); // 继承Animal的原型方法
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log(this.name + " barks.");
};

let rex = new Dog("Rex");
rex.speak(); // 输出: Rex makes a noise.
rex.bark();  // 输出: Rex barks.
```

在这个例子中：

- `Dog`继承自`Animal`，通过`Object.create`设置`Dog.prototype`为`Animal.prototype`的一个副本。
- `rex`作为`Dog`的实例，可以访问`Animal`的`speak`方法和`Dog`自己的`bark`方法。
- 如果`rex`调用一个不存在的方法，如`rex.walk()`，JavaScript会继续沿着原型链查找，直到找到`walk`方法或到达链的末端。

---

### 3. **实现继承的方式**

在JavaScript中，有多种方式实现继承。以下是几种常见的方法：

#### 3.1 **基于构造函数的继承**

通过在子构造函数中调用父构造函数，可以继承父构造函数的属性。

```javascript
function Parent(name) {
  this.name = name;
}

function Child(name, age) {
  Parent.call(this, name); // 继承父构造函数的属性
  this.age = age;
}

let child = new Child("Bob", 5);
console.log(child.name); // 输出: Bob
console.log(child.age);  // 输出: 5
```

**缺点**：

- 方法需要在每个实例上重新创建，导致内存浪费。
- 无法继承父类的原型方法。

#### 3.2 **原型链继承**

通过设置子类的原型为父类的实例，实现继承父类的属性和方法。

```javascript
function Parent(name) {
  this.name = name;
}

Parent.prototype.sayName = function() {
  console.log(this.name);
};

function Child(name, age) {
  this.age = age;
}

Child.prototype = new Parent("Default Name"); // 继承父类的属性和方法
Child.prototype.constructor = Child;

let child = new Child("Charlie", 3);
child.sayName(); // 输出: Default Name
console.log(child.age); // 输出: 3
```

**缺点**：

- 所有子类实例共享父类实例的引用类型属性，可能导致意外的副作用。
- 无法向父类构造函数传递参数。

#### 3.3 **组合继承（寄生组合继承）**

结合构造函数继承和原型链继承的优点，避免各自的缺点。这是JavaScript中最常用的继承模式。

```javascript
function Parent(name) {
  this.name = name;
}

Parent.prototype.sayName = function() {
  console.log(this.name);
};

function Child(name, age) {
  Parent.call(this, name); // 继承父类的属性
  this.age = age;
}

Child.prototype = Object.create(Parent.prototype); // 继承父类的方法
Child.prototype.constructor = Child;

Child.prototype.sayAge = function() {
  console.log(this.age);
};

let child = new Child("Dave", 4);
child.sayName(); // 输出: Dave
child.sayAge();  // 输出: 4
```

**优点**：

- 解决了原型链继承的引用属性问题。
- 不需要在子类原型上执行父类构造函数，避免了重复初始化。

#### 3.4 **ES6 类（Class）继承**

ES6引入了`class`和`extends`关键字，使得继承更加直观和简洁。实际上，ES6类是基于原型的语法糖。

```javascript
class Parent {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(this.name);
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name); // 调用父类构造函数
    this.age = age;
  }

  sayAge() {
    console.log(this.age);
  }
}

let child = new Child("Eve", 2);
child.sayName(); // 输出: Eve
child.sayAge();  // 输出: 2
```

**优点**：

- 语法更简洁、易读。
- 支持`super`关键字，便于调用父类方法。
- 更接近其他面向对象编程语言的继承模式。

#### 3.5 **ES6 原生`extends`继承内置对象**

在ES6中，可以继承内置对象（如`Array`、`Error`等），这是在ES5中较为复杂的操作。

```javascript
class MyArray extends Array {
  first() {
    return this[0];
  }
}

let arr = new MyArray(1, 2, 3);
console.log(arr.first()); // 输出: 1
console.log(arr instanceof MyArray); // 输出: true
console.log(arr instanceof Array);    // 输出: true
```

**注意**：

- 某些内置对象的继承可能存在特殊行为，需谨慎使用。

---

### 4. **原型与类的关系**

虽然ES6引入了`class`语法，但JavaScript仍然基于原型进行对象继承。`class`只是对原型继承的一种封装，提供了更接近传统面向对象语言的语法。

#### 4.1 **类的本质**

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hello, " + this.name);
  }
}

console.log(typeof Person); // 输出: function
console.log(Person.prototype.constructor === Person); // 输出: true
```

可以看到，`class`实际上是构造函数的语法糖，其方法被添加到`prototype`上。

#### 4.2 **类与原型链的结合**

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + " makes a noise.");
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + " barks.");
  }
}

let dog = new Dog("Rex");
dog.speak(); // 输出: Rex barks.
```

在这个例子中：

- `Dog`通过`extends`继承自`Animal`，实际上是设置了`Dog.prototype`为`Animal.prototype`的一个实例。
- `Dog`的实例`dog`可以访问`Animal`的属性和方法。

---

### 5. **原型链的工作机制**

#### 5.1 **属性查找顺序**

当访问对象的属性或方法时，JavaScript引擎遵循以下顺序进行查找：

1. **自身属性**：首先查找对象本身是否具有该属性。
2. **原型属性**：如果对象本身没有，查找其`[[Prototype]]`指向的原型对象。
3. **原型链继续**：如果原型对象也没有，继续沿着原型链向上查找，直到找到或达到链的末端（`null`）。
4. **未找到**：如果在整个原型链中都未找到，返回`undefined`。

#### 5.2 **示例**

```javascript
let grandParent = {
  surname: "Smith",
  greet() {
    console.log("Hello from grandParent");
  }
};

let parent = Object.create(grandParent);
parent.name = "John";
parent.greet = function() {
  console.log("Hello from parent");
};

let child = Object.create(parent);
child.age = 10;

child.greet();       // 输出: Hello from parent
console.log(child.surname); // 输出: Smith
console.log(child.age);      // 输出: 10
console.log(child.unknown);  // 输出: undefined
```

在这个例子中：

- `child`对象没有自己的`greet`方法，因此调用`parent`的`greet`方法。
- `child`对象没有`name`属性，但可以访问`parent`的`name`属性。
- `child`对象没有`surname`属性，但可以通过原型链访问`grandParent`的`surname`属性。
- `child.unknown`在整个原型链中都未找到，返回`undefined`。

---

### 6. **常见的原型与继承相关问题**

#### 6.1 **修改原型的副作用**

修改构造函数的原型会影响所有已存在的实例。

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log("Hello, " + this.name);
};

let alice = new Person("Alice");
alice.greet(); // 输出: Hello, Alice

// 修改原型
Person.prototype.greet = function() {
  console.log("Hi, " + this.name);
};

alice.greet(); // 输出: Hi, Alice
```

**解决方法**：

尽量在构造函数定义完成后一次性定义原型方法，避免在运行时频繁修改原型。

#### 6.2 **原型污染**

不小心修改对象的原型可能导致全局影响。

```javascript
Object.prototype.newProp = "This is bad";

let obj = {};
console.log(obj.newProp); // 输出: This is bad
```

**解决方法**：

避免直接修改`Object.prototype`或其他内置对象的原型，除非确有必要。

#### 6.3 **性能考虑**

深层的原型链可能会影响属性查找的性能。

**解决方法**：

尽量保持原型链的层数适中，避免不必要的继承层级。

---

### 7. **高级原型概念**

#### 7.1 **`Object.getPrototypeOf` 与 `Object.setPrototypeOf`**

- **`Object.getPrototypeOf(obj)`**：返回`obj`的原型对象。
  
- **`Object.setPrototypeOf(obj, prototype)`**：设置`obj`的原型对象（不推荐频繁使用，因为可能影响性能）。

**示例**：

```javascript
let obj = {};
let proto = { greet() { console.log("Hello"); } };

Object.setPrototypeOf(obj, proto);
obj.greet(); // 输出: Hello

console.log(Object.getPrototypeOf(obj) === proto); // 输出: true
```

## 7.2 **`hasOwnProperty` 方法**

用于判断属性是否为对象自身的属性，而非继承自原型链。

```javascript
let obj = { a: 1 };
console.log(obj.hasOwnProperty('a')); // 输出: true
console.log(obj.hasOwnProperty('toString')); // 输出: false
```

#### 7.3 **`isPrototypeOf` 方法**

用于判断一个对象是否存在于另一个对象的原型链中。

```javascript
function Parent() {}
function Child() {}

Child.prototype = Object.create(Parent.prototype);

let child = new Child();

console.log(Parent.prototype.isPrototypeOf(child)); // 输出: true
console.log(Child.prototype.isPrototypeOf(child));  // 输出: true
```

---

### 8. **闭包与原型的结合**

闭包和原型都是JavaScript中强大的概念，结合使用可以实现更灵活的对象设计。

#### 8.1 **示例：私有变量与原型方法**

通过闭包实现私有变量，同时在原型上定义方法，以节省内存。

```javascript
function Person(name) {
  let _name = name; // 私有变量

  this.getName = function() {
    return _name;
  };
}

// 在原型上定义方法
Person.prototype.greet = function() {
  console.log("Hello, " + this.getName());
};

let person = new Person("Frank");
person.greet(); // 输出: Hello, Frank
console.log(person._name); // 输出: undefined
```

**优点**：

- `getName`方法允许访问私有变量`_name`。
- `greet`方法在原型上定义，所有实例共享，节省内存。

---

### 9. **总结**

- **原型（Prototype）**：每个对象都有一个指向原型对象的内部链接，原型对象可以提供共享的属性和方法。
  
- **原型链（Prototype Chain）**：通过`[[Prototype]]`属性链接一系列对象，形成查找属性和方法的链条。

- **继承（Inheritance）**：JavaScript通过原型链实现对象之间的继承，使得对象能够复用和扩展功能。

- **实现继承的方式**：
  - **构造函数继承**：通过在子构造函数中调用父构造函数，继承属性。
  - **原型链继承**：通过设置子类的原型为父类的实例，继承方法。
  - **组合继承**：结合构造函数继承和原型链继承，避免各自的缺点。
  - **ES6 类继承**：使用`class`和`extends`语法，实现更简洁的继承模式。

- **注意事项**：
  - 避免直接修改内置对象的原型。
  - 保持原型链的层数适中，避免性能问题。
  - 理解原型和类的关系，善用`class`语法提升代码可读性。

掌握JavaScript的原型和继承机制，不仅有助于理解语言的底层工作原理，还能提升代码的组织和复用能力，是成为高级JavaScript开发者的重要一步。

## 内置对象
JavaScript中的内置对象是语言中已经预定义好的对象和构造函数，可以直接在代码中使用。它们提供了处理各种数据类型和执行常见操作的方法和属性。JavaScript内置对象包括以下几类：

---

### 1. **基本数据类型的包装对象**

JavaScript提供了一些包装对象，用于操作基本数据类型（字符串、数字、布尔值等）：

#### 1.1 **String**
- **描述**：用于处理和操作字符串。
- **示例**：
  ```javascript
  let str = "Hello, world!";
  console.log(str.length); // 输出: 13
  console.log(str.toUpperCase()); // 输出: HELLO, WORLD!
  ```

#### 1.2 **Number**
- **描述**：用于处理和操作数值（包括整数和浮点数）。
- **示例**：
  ```javascript
  let num = 42;
  console.log(num.toFixed(2)); // 输出: 42.00
  ```

#### 1.3 **Boolean**
- **描述**：用于处理布尔值（`true`或`false`）。
- **示例**：
  ```javascript
  let isTrue = new Boolean(true);
  console.log(isTrue.valueOf()); // 输出: true
  ```

#### 1.4 **Symbol**
- **描述**：表示唯一的标识符，常用于对象属性名的唯一性。
- **示例**：
  ```javascript
  let sym = Symbol("unique");
  console.log(typeof sym); // 输出: symbol
  ```

#### 1.5 **BigInt**
- **描述**：用于表示任意精度的大整数。
- **示例**：
  ```javascript
  let bigInt = 1234567890123456789012345678901234567890n;
  console.log(bigInt + 1n); // 输出: 1234567890123456789012345678901234567891n
  ```

---

### 2. **集合对象**

这些对象用于存储和操作一组值：

#### 2.1 **Array**
- **描述**：用于存储有序的元素集合，可以是任何数据类型。
- **示例**：
  ```javascript
  let arr = [1, 2, 3];
  arr.push(4);
  console.log(arr); // 输出: [1, 2, 3, 4]
  ```

#### 2.2 **Map**
- **描述**：用于存储键值对，其中键可以是任何数据类型。
- **示例**：
  ```javascript
  let map = new Map();
  map.set('name', 'Alice');
  console.log(map.get('name')); // 输出: Alice
  ```

#### 2.3 **Set**
- **描述**：用于存储唯一值的集合，无重复元素。
- **示例**：
  ```javascript
  let set = new Set([1, 2, 2, 3]);
  console.log(set); // 输出: Set(3) { 1, 2, 3 }
  ```

#### 2.4 **WeakMap**
- **描述**：类似于`Map`，但键必须是对象，且键是弱引用（不会阻止垃圾回收）。
- **示例**：
  ```javascript
  let weakMap = new WeakMap();
  let obj = {};
  weakMap.set(obj, 'value');
  console.log(weakMap.get(obj)); // 输出: value
  ```

#### 2.5 **WeakSet**
- **描述**：类似于`Set`，但只能存储对象的集合，且对象是弱引用。
- **示例**：
  ```javascript
  let weakSet = new WeakSet();
  let obj = {};
  weakSet.add(obj);
  console.log(weakSet.has(obj)); // 输出: true
  ```

---

### 3. **日期和时间对象**

#### 3.1 **Date**
- **描述**：用于处理日期和时间。
- **示例**：
  ```javascript
  let now = new Date();
  console.log(now.toISOString()); // 输出当前日期和时间的ISO字符串表示
  ```

---

### 4. **数学和计算对象**

#### 4.1 **Math**
- **描述**：提供了数学常数和函数（如`Math.PI`，`Math.random()`，`Math.floor()`等）。
- **示例**：
  ```javascript
  console.log(Math.PI); // 输出: 3.141592653589793
  console.log(Math.sqrt(16)); // 输出: 4
  ```

#### 4.2 **Number**
- **描述**：提供与数字相关的属性和方法（如`Number.MAX_VALUE`，`Number.isInteger()`等）。
- **示例**：
  ```javascript
  console.log(Number.MAX_SAFE_INTEGER); // 输出: 9007199254740991
  console.log(Number.isInteger(42)); // 输出: true
  ```

#### 4.3 **BigInt**
- **描述**：用于表示任意精度的整数，并提供与大整数相关的操作。
- **示例**：
  ```javascript
  let bigInt = 12345678901234567890n;
  console.log(bigInt * 2n); // 输出: 24691357802469135780n
  ```

---

### 5. **正则表达式**

#### 5.1 **RegExp**
- **描述**：用于模式匹配字符串（如搜索、替换等操作）。
- **示例**：
  ```javascript
  let regex = /hello/i;
  console.log(regex.test("Hello, world!")); // 输出: true
  ```

---

### 6. **错误处理对象**

#### 6.1 **Error**
- **描述**：创建一个错误对象，可以抛出并捕获错误。
- **示例**：
  ```javascript
  try {
    throw new Error("Something went wrong!");
  } catch (e) {
    console.log(e.message); // 输出: Something went wrong!
  }
  ```

#### 6.2 **其他错误类型**
- **`TypeError`**：表示变量或参数不是预期类型时的错误。
- **`ReferenceError`**：表示引用了不存在的变量时的错误。
- **`SyntaxError`**：表示代码中存在语法错误。
- **`RangeError`**：表示一个数值超出允许的范围。

---

### 7. **全局对象**

#### 7.1 **GlobalThis**
- **描述**：提供一种标准方式访问不同环境下的全局对象（如浏览器中的`window`，Node.js中的`global`）。
- **示例**：
  ```javascript
  console.log(globalThis); // 浏览器中输出: Window对象，Node.js中输出: global对象
  ```

#### 7.2 **`Infinity`, `NaN`, `undefined`**
- **`Infinity`**：表示正无穷大。
  ```javascript
  console.log(1 / 0); // 输出: Infinity
  ```

- **`NaN`**：表示非数字值。
  ```javascript
  console.log(Math.sqrt(-1)); // 输出: NaN
  ```

- **`undefined`**：表示未定义的值。
  ```javascript
  let x;
  console.log(x); // 输出: undefined
  ```

---

### 8. **JSON 对象**

#### 8.1 **JSON**
- **描述**：用于解析和字符串化JSON数据（JavaScript对象表示法）。
- **示例**：
  ```javascript
  let jsonString = '{"name": "John", "age": 30}';
  let obj = JSON.parse(jsonString);
  console.log(obj.name); // 输出: John

  let newJsonString = JSON.stringify(obj);
  console.log(newJsonString); // 输出: {"name":"John","age":30}
  ```

---

### 9. **其他内置对象**

#### 9.1 **Promise**
- **描述**：用于处理异步操作的对象。
- **示例**：
  ```javascript
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Done!"), 1000);
  });
  promise.then(result => console.log(result)); // 输出: Done!
  ```

#### 9.2 **Function**
- **描述**：函数的构造函数，所有函数都是`Function`对象的实例。
- **示例**：
  ```javascript
  let func = new Function('a', 'b', 'return a + b');
  console.log(func(2, 3)); // 输出: 5
  ```

#### 9.3 **Object**
- **描述**：所有对象的基类，提供通用的方法（如`Object.keys()`，`Object.create()`等）。
- **示例**：
  ```javascript
  let obj = { a: 1, b: 2 };
  console.log(Object.keys(obj)); // 输出: ['a', 'b']
  ```

---

## 高级概念

### 作用域
JavaScript中的作用域（Scope）决定了变量、函数和对象的可访问性，也就是在哪些地方可以引用这些变量。理解作用域对于编写清晰、高效且易于调试的代码至关重要。JavaScript中的作用域主要包括以下几种：

#### 1. **全局作用域 (Global Scope)**
- **描述**：在代码中的任何地方都可以访问的作用域。当你在全局范围（即在任何函数或块外面）声明一个变量时，这个变量就属于全局作用域。
- **特性**：
  - 全局变量在页面加载时被创建，并且在页面关闭时销毁。
  - 在浏览器环境中，全局作用域挂载在`window`对象上，Node.js中则挂载在`global`对象上。
- **示例**：
  ```javascript
  var globalVar = "I am global";
  
  function test() {
    console.log(globalVar); // 输出: I am global
  }
  
  test();
  ```

#### 2. **函数作用域 (Function Scope)**
- **描述**：在函数内部声明的变量只能在该函数内部访问。这些变量在函数调用时创建，在函数执行完毕后销毁。
- **特性**：
  - JavaScript没有块级作用域（在ES6之前），只有函数作用域。
  - 使用`var`声明的变量会提升到函数作用域的顶部。
- **示例**：
  ```javascript
  function myFunction() {
    var functionVar = "I am local to the function";
    console.log(functionVar); // 输出: I am local to the function
  }
  
  myFunction();
  console.log(functionVar); // 错误: functionVar is not defined
  ```

#### 3. **块级作用域 (Block Scope)**
- **描述**：块级作用域是在ES6中引入的，用于`let`和`const`声明的变量。这些变量只在块（由一对大括号 `{}` 包围的代码区域）内可见。
- **特性**：
  - 块级作用域解决了`var`导致的变量提升和全局污染问题。
- **示例**：
  ```javascript
  if (true) {
    let blockVar = "I am block scoped";
    console.log(blockVar); // 输出: I am block scoped
  }
  
  console.log(blockVar); // 错误: blockVar is not defined
  ```

#### 4. **词法作用域 (Lexical Scope)**
- **描述**：词法作用域（或静态作用域）是指函数的作用域在函数定义时就确定了，而不是在函数调用时确定。JavaScript使用词法作用域，这意味着嵌套的函数可以访问其外部函数中声明的变量。
- **示例**：
  ```javascript
  function outerFunction() {
    var outerVar = "I am from outer function";
    
    function innerFunction() {
      console.log(outerVar); // 输出: I am from outer function
    }
    
    innerFunction();
  }
  
  outerFunction();
  ```

#### 5. **闭包 (Closures)**
- **描述**：闭包是指函数可以记住并访问它的词法作用域，即使这个函数在其词法作用域之外执行。闭包让函数可以访问外部函数作用域内的变量，即使外部函数已经执行结束。
- **示例**：
  ```javascript
  function outerFunction() {
    var outerVar = "I am from outer function";
    
    return function innerFunction() {
      console.log(outerVar); // 输出: I am from outer function
    };
  }
  
  var myClosure = outerFunction();
  myClosure(); // 即使outerFunction已执行结束，仍然可以访问outerVar
  ```

#### 6. **ES6中的块级作用域特性**
- **使用`let`和`const`**
  - `let`和`const`声明的变量具有块级作用域，不会像`var`那样提升至函数作用域的顶部，也不会在全局作用域中污染变量。
  - `const`声明的变量一旦赋值，就不能重新赋值。

  ```javascript
  {
    let blockScoped = "I am block scoped";
    const constantValue = 42;
  }
  
  console.log(blockScoped); // 错误: blockScoped is not defined
  console.log(constantValue); // 错误: constantValue is not defined
  ```

---

#### 7. **作用域链 (Scope Chain)**
- **描述**：作用域链是指在一个作用域内查找变量的机制。如果一个变量在当前作用域找不到，JavaScript引擎会沿着作用域链向上查找，直到找到该变量或到达全局作用域为止。如果仍未找到，变量将未定义。
- **示例**：
  ```javascript
  var globalVar = "Global";
  
  function outerFunction() {
    var outerVar = "Outer";
    
    function innerFunction() {
      var innerVar = "Inner";
      console.log(globalVar); // 输出: Global
      console.log(outerVar); // 输出: Outer
      console.log(innerVar); // 输出: Inner
    }
    
    innerFunction();
  }
  
  outerFunction();
  ```

---


### 事件循环与异步编程
JavaScript 中的事件循环（Event Loop）和异步编程是该语言的核心机制，尤其在处理 I/O 操作、计时器、用户交互等情况下。理解它们对于编写高效、响应迅速的 JavaScript 代码至关重要。

#### 1. **事件循环 (Event Loop)**
事件循环是 JavaScript 处理异步操作的机制。它使 JavaScript 能够在执行长时间运行的任务（如 I/O 操作）时，仍然保持对用户的响应。

##### **单线程与异步**
- JavaScript 是单线程的，这意味着它一次只能执行一个任务。这个线程通常被称为主线程。
- 单线程环境下，如果一个操作（如文件读取或网络请求）阻塞了主线程，用户界面将无法响应。因此，JavaScript 引入了异步编程模型，以非阻塞方式处理这些操作。

##### **工作流程**
1. **调用栈 (Call Stack)**:
   - 调用栈是 JavaScript 引擎用来记录函数调用的栈结构。每当一个函数被调用时，它就被压入栈顶；当函数返回时，它就被弹出栈。
   
2. **Web APIs**:
   - JavaScript 通过浏览器提供的 Web API（如 `setTimeout`、DOM 事件、`fetch`）执行异步操作。这些操作在完成后将回调函数发送到任务队列（或消息队列）。
   
3. **任务队列 (Task Queue) / 消息队列 (Message Queue)**:
   - 异步操作的回调函数被放入任务队列中，等待调用栈为空时被处理。
   
4. **事件循环 (Event Loop)**:
   - 事件循环持续地检查调用栈是否为空。如果为空，事件循环会从任务队列中取出第一个任务并将其压入调用栈执行。这个过程不断重复，确保异步代码在适当的时候执行。

##### **示例**
```javascript
console.log("Start");

setTimeout(() => {
    console.log("Timeout callback");
}, 0);

console.log("End");
```

**输出顺序**：
```
Start
End
Timeout callback
```

尽管 `setTimeout` 的延迟为 0 毫秒，它的回调仍然被放入任务队列，等待主线程完成当前任务后再执行。

#### 2. **异步编程模型**
异步编程使得 JavaScript 能够处理长时间运行的任务而不阻塞主线程。常见的异步编程模型有以下几种：

##### **回调函数 (Callbacks)**
- 回调函数是最简单的异步编程方式。一个函数执行完异步操作后，将回调函数作为参数传递给另一函数，异步操作完成后回调函数会被调用。
  
**示例**：
```javascript
function fetchData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 1000);
}

fetchData((data) => {
    console.log(data);
});
```

**缺点**：当回调嵌套过多时，会形成“回调地狱”，使代码难以维护。

##### **Promise**
- `Promise` 对象用于表示异步操作的最终完成（或失败）及其结果值。`Promise` 提供了更清晰的异步代码组织方式，避免了“回调地狱”。

**示例**：
```javascript
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data received");
    }, 1000);
});

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.error(error);
});
```

- **状态**：
  - `pending`：初始状态，操作未完成。
  - `fulfilled`：操作成功完成。
  - `rejected`：操作失败。

##### **async/await**
- `async` 和 `await` 是基于 `Promise` 的语法糖，使异步代码看起来像同步代码，从而提高代码的可读性。

**示例**：
```javascript
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received");
        }, 1000);
    });
}

async function getData() {
    const data = await fetchData();
    console.log(data);
}

getData();
```

- **优势**：
  - `async/await` 使得处理异步操作更加直观，同时允许你使用 `try/catch` 进行错误处理。
  
**注意**：`await` 关键字只能在标记为 `async` 的函数内部使用。

#### 3. **微任务 (Microtasks)**
- **描述**：微任务是比任务（通常称为宏任务）优先级更高的异步任务。常见的微任务包括 `Promise` 的 `.then()` 和 `catch()` 处理程序。
  
- **执行顺序**：
  1. 当调用栈为空时，事件循环首先检查微任务队列。
  2. 如果微任务队列为空，才会执行任务队列中的任务。

**示例**：
```javascript
console.log("Start");

Promise.resolve().then(() => {
    console.log("Microtask");
});

setTimeout(() => {
    console.log("Timeout callback");
}, 0);

console.log("End");
```

**输出顺序**：
```
Start
End
Microtask
Timeout callback
```

`Promise` 的微任务在 `setTimeout` 的任务之前执行。

---

#### 总结
- **事件循环** 是 JavaScript 中处理异步操作的核心机制。
- **异步编程模型** 提供了多种处理异步任务的方式，包括回调函数、`Promise`、以及 `async/await`。
- 理解事件循环和异步编程有助于编写高效且用户友好的 JavaScript 代码。


## DOM 操作与事件

在JavaScript中，DOM操作与事件处理是前端开发的核心部分。这些操作让开发者能够与网页的结构和用户交互直接进行交互，从而实现动态和互动性。

### 1. **DOM 操作**

**DOM**（文档对象模型，Document Object Model）是HTML文档的编程接口。它将网页结构表示为一棵树，其中的每个节点都是文档的一部分，如元素、属性或文本。JavaScript可以通过DOM操作来动态地修改网页内容和结构。

#### **常见的DOM操作**

1. **访问和修改元素**
   - **获取元素**：
     - `document.getElementById(id)`：通过元素的ID获取单个元素。
     - `document.getElementsByClassName(className)`：通过类名获取一组元素。
     - `document.getElementsByTagName(tagName)`：通过标签名获取一组元素。
     - `document.querySelector(selector)`：通过CSS选择器获取第一个匹配的元素。
     - `document.querySelectorAll(selector)`：通过CSS选择器获取所有匹配的元素。
     
     **示例**：
     ```javascript
     var element = document.getElementById("myElement");
     ```

   - **修改元素内容**：
     - `element.textContent`：修改元素的文本内容。
     - `element.innerHTML`：修改元素的HTML内容。
     
     **示例**：
     ```javascript
     element.textContent = "New Text";
     element.innerHTML = "<p>New HTML content</p>";
     ```

   - **修改属性**：
     - `element.setAttribute(attributeName, value)`：设置元素的属性。
     - `element.getAttribute(attributeName)`：获取元素的属性。
     - `element.removeAttribute(attributeName)`：移除元素的属性。
     
     **示例**：
     ```javascript
     element.setAttribute("class", "newClass");
     ```

2. **创建和删除元素**
   - **创建元素**：
     - `document.createElement(tagName)`：创建一个新的HTML元素。
     
     **示例**：
     ```javascript
     var newElement = document.createElement("div");
     newElement.textContent = "Hello World!";
     ```

   - **插入元素**：
     - `parentElement.appendChild(newElement)`：将新元素插入到父元素中。
     - `parentElement.insertBefore(newElement, referenceElement)`：将新元素插入到参考元素之前。
     
     **示例**：
     ```javascript
     var parentElement = document.getElementById("parent");
     parentElement.appendChild(newElement);
     ```

   - **删除元素**：
     - `parentElement.removeChild(childElement)`：从父元素中删除子元素。
     
     **示例**：
     ```javascript
     parentElement.removeChild(newElement);
     ```

3. **修改样式**
   - **通过style属性**：直接在元素的`style`属性上修改CSS样式。
   
   **示例**：
   ```javascript
   element.style.color = "red";
   element.style.backgroundColor = "blue";
   ```

   - **修改类名**：
     - `element.classList.add(className)`：添加一个类名。
     - `element.classList.remove(className)`：移除一个类名。
     - `element.classList.toggle(className)`：切换一个类名的存在与否。
     
     **示例**：
     ```javascript
     element.classList.add("highlight");
     ```

### 2. **事件处理**

**事件**是用户或浏览器执行的操作，比如点击、加载、键盘输入等。事件处理允许开发者在这些操作发生时执行特定的代码。

#### **常见事件类型**

1. **鼠标事件**：
   - `click`：当用户点击元素时触发。
   - `dblclick`：当用户双击元素时触发。
   - `mouseover`：当鼠标指针移入元素时触发。
   - `mouseout`：当鼠标指针移出元素时触发。

2. **键盘事件**：
   - `keydown`：当用户按下键盘按键时触发。
   - `keyup`：当用户松开键盘按键时触发。
   - `keypress`：当用户按下并松开按键时触发（已经被 `keydown` 和 `keyup` 代替）。

3. **表单事件**：
   - `submit`：当用户提交表单时触发。
   - `change`：当表单元素的值改变时触发。
   - `input`：当用户输入内容时触发（比 `change` 更即时）。
   - `focus`：当元素获得焦点时触发。
   - `blur`：当元素失去焦点时触发。

4. **其他事件**：
   - `load`：当页面或图像完全加载时触发。
   - `resize`：当窗口大小改变时触发。
   - `scroll`：当用户滚动页面或元素时触发。

#### **事件监听与处理**

1. **添加事件监听器**
   - `element.addEventListener(eventType, callback)`：向元素添加事件监听器，当事件触发时执行回调函数。
   
   **示例**：
   ```javascript
   var button = document.getElementById("myButton");
   button.addEventListener("click", function() {
       alert("Button clicked!");
   });
   ```

2. **移除事件监听器**
   - `element.removeEventListener(eventType, callback)`：移除事件监听器。
   
   **示例**：
   ```javascript
   function handleClick() {
       alert("Button clicked!");
   }
   
   button.addEventListener("click", handleClick);
   button.removeEventListener("click", handleClick);
   ```

3. **事件对象**
   - 当事件触发时，JavaScript 会自动传递一个事件对象给事件处理函数，包含事件的相关信息。
   
   **常见属性**：
   - `event.target`：触发事件的元素。
   - `event.type`：事件的类型（如 `click`、`keydown`）。
   - `event.preventDefault()`：阻止默认行为（如表单提交或链接跳转）。
   - `event.stopPropagation()`：阻止事件冒泡，即不让事件继续传递给父元素。
   
   **示例**：
   ```javascript
   button.addEventListener("click", function(event) {
       console.log(event.target); // 输出触发事件的元素
       event.preventDefault(); // 阻止按钮默认行为
   });
   ```

4. **事件冒泡与捕获**
   - **事件冒泡**：事件从目标元素向上传播，直至 `document` 对象，即由内向外传播。
   - **事件捕获**：事件从 `document` 对象向下传播，直到目标元素，即由外向内传播。
   - 可以通过 `addEventListener` 的第三个参数控制事件监听器在冒泡阶段或捕获阶段触发（默认为冒泡阶段）。

   **示例**：
   ```javascript
   document.getElementById("parent").addEventListener("click", function() {
       console.log("Parent clicked");
   }, true); // true 表示在捕获阶段触发
   ```

### 3. **结合DOM操作与事件处理**

JavaScript强大的地方在于将DOM操作与事件处理结合，使得网页能够响应用户的交互，从而实现动态的用户体验。

**示例：点击按钮动态添加元素**
```javascript
var button = document.getElementById("addButton");

button.addEventListener("click", function() {
    var newElement = document.createElement("p");
    newElement.textContent = "New paragraph added!";
    document.body.appendChild(newElement);
});
```

点击按钮后，页面上会动态添加一个新的段落。

---

## ES6+ 新特性
ES6（ECMAScript 2015）及其后的版本（ES7、ES8等）为JavaScript引入了许多新的特性和改进，极大地提升了语言的功能性和开发体验。以下是一些重要的ES6+新特性：

### 1. 块级作用域 (`let` 和 `const`)
- **`let`** 和 **`const`** 引入了块级作用域，取代了传统的函数作用域，使变量声明更加严格和安全。
- **`let`** 允许声明变量，且这些变量可以被重新赋值。
- **`const`** 声明常量，且在赋值后不能再修改。

### 2. 箭头函数 (`Arrow Functions`)
- 箭头函数是更简洁的函数定义方式，语法上使用 `=>`，并且箭头函数不绑定 `this`，它会继承外层作用域的 `this` 值。

```javascript
const add = (a, b) => a + b;
```

### 3. 模板字面量 (Template Literals)
- 模板字面量允许在字符串中嵌入表达式，使用反引号 (`` ` ``) 包裹字符串，并使用 `${}` 包含表达式。

```javascript
const name = 'World';
console.log(`Hello, ${name}!`); // 输出: Hello, World!
```

### 4. 解构赋值 (Destructuring Assignment)
- 解构赋值允许从数组或对象中提取值并将其赋值给变量，语法简洁。

```javascript
const [a, b] = [1, 2];
const {name, age} = {name: 'Alice', age: 25};
```

### 5. 扩展运算符 (`...`)
- 扩展运算符用于展开数组或对象，方便参数传递和数组、对象的拷贝。

```javascript
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];
```

### 6. 默认参数值 (Default Parameters)
- 在函数定义时可以为参数指定默认值，如果调用时未传递该参数，则使用默认值。

```javascript
function greet(name = 'Guest') {
  return `Hello, ${name}!`;
}
```

### 7. 模块化 (`import` 和 `export`)
- ES6 引入了模块系统，使用 `import` 和 `export` 可以在不同的文件间导入和导出代码。

```javascript
// utils.js
export const add = (a, b) => a + b;

// main.js
import { add } from './utils';
console.log(add(2, 3)); // 输出: 5
```

### 8. 类 (`class`)
- ES6 引入了类语法，提供了一种更接近面向对象编程的方式来定义对象和继承。

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
  
  greet() {
    return `Hello, ${this.name}!`;
  }
}

class Student extends Person {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
  
  introduce() {
    return `I am ${this.name}, ${this.age} years old.`;
  }
}
```

### 9. `Promise` 和 异步编程
- `Promise` 对象用于处理异步操作，避免了回调地狱的问题。
- ES8 引入了 `async` 和 `await` 关键字，简化了异步代码的写法。

```javascript
const fetchData = async () => {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
```

### 10. 其他重要特性
- **符号 (Symbol)**：一种新的原始数据类型，表示唯一且不可变的值。
- **`Map` 和 `Set` 数据结构**：`Map` 是键值对的集合，`Set` 是值的集合，且值唯一。
- **可选链 (`?.`) 和空值合并运算符 (`??`)**：简化对深层嵌套属性的访问和处理 `null` 或 `undefined` 值。


## 错误处理与调试
在JavaScript中，错误处理与调试是开发过程中非常重要的部分。它们帮助开发者识别、捕捉并处理代码中的问题，确保应用程序的稳定性和正确性。

### 1. 错误处理
JavaScript提供了多种方式来处理运行时错误，包括`try...catch`语句、`throw`语句、自定义错误以及使用`Promise`和`async/await`处理异步错误。

#### 1.1 `try...catch` 语句
`try...catch`语句用于捕获在`try`块中抛出的异常，并在`catch`块中处理它。可选的`finally`块用于在错误处理后执行清理代码，无论是否发生错误。

```javascript
try {
    // 可能会抛出错误的代码
    let result = someFunction();
} catch (error) {
    // 处理错误
    console.error('An error occurred:', error.message);
} finally {
    // 始终会执行的代码
    console.log('This will run regardless of an error.');
}
```

#### 1.2 `throw` 语句
`throw`语句用于手动抛出一个异常，可以是字符串、数字、布尔值或对象（通常是`Error`对象）。

```javascript
function checkAge(age) {
    if (age < 18) {
        throw new Error('Age must be at least 18.');
    }
    return 'Age is valid';
}

try {
    checkAge(16);
} catch (error) {
    console.error(error.message); // 输出: Age must be at least 18.
}
```

#### 1.3 自定义错误类型
除了内置的`Error`类型外，JavaScript允许开发者创建自定义的错误类型，通过继承`Error`类来实现。

```javascript
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}

function validateUser(user) {
    if (!user.name) {
        throw new ValidationError('Name is required');
    }
    // 其他验证逻辑...
}
```

#### 1.4 异步错误处理
使用`Promise`处理异步代码时，可以通过`.catch()`方法捕获错误；使用`async/await`时，则需要配合`try...catch`来处理可能出现的错误。

```javascript
// 使用Promise的错误处理
fetch('https://api.example.com/data')
    .then(response => response.json())
    .catch(error => console.error('Fetch error:', error));

// 使用async/await的错误处理
async function fetchData() {
    try {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}
```

### 2. 调试

JavaScript调试是识别代码中的错误和逻辑缺陷的过程，常用的调试技术包括使用`console`语句、断点调试以及使用开发工具（如Chrome DevTools）。

#### 2.1 `console` 语句
最简单和常用的调试方法是使用`console`对象的各种方法在控制台输出信息。

- **`console.log()`**: 打印一般信息。
- **`console.error()`**: 打印错误信息。
- **`console.warn()`**: 打印警告信息。
- **`console.table()`**: 以表格形式打印数组或对象。

```javascript
let user = { name: 'Alice', age: 25 };
console.log('User info:', user);
console.error('This is an error message');
console.table([{name: 'Alice', age: 25}, {name: 'Bob', age: 30}]);
```

#### 2.2 断点调试
大多数现代浏览器都提供了强大的开发者工具（如Chrome DevTools），允许开发者在代码中设置断点。当代码执行到断点时，会暂停执行，开发者可以逐步检查变量的状态和代码的运行情况。

- **设置断点**: 在源代码中点击行号，可以设置或移除断点。
- **检查变量**: 在调试面板中查看变量、调用堆栈和作用域的状态。
- **步进执行**: 使用“步过（Step Over）”、“步入（Step Into）”和“步出（Step Out）”来逐行执行代码。

#### 2.3 使用`debugger`语句
`debugger`语句是一种手动设置断点的方法，当代码运行到`debugger`语句时，会自动暂停执行，类似于在开发者工具中设置断点。

```javascript
function calculate(a, b) {
    debugger; // 代码在此处暂停
    return a + b;
}

calculate(5, 3);
```

#### 2.4 使用开发者工具
浏览器的开发者工具（如Chrome DevTools、Firefox Developer Tools）提供了强大的调试功能，包括元素检查、网络请求监控、性能分析和内存管理等。

- **Elements**: 检查和编辑页面的HTML和CSS。
- **Console**: 查看日志、执行JavaScript代码。
- **Network**: 监控和分析网络请求。
- **Performance**: 分析页面加载和渲染的性能瓶颈。
- **Memory**: 检测内存泄漏和优化内存使用。



## 前端性能优化
前端性能优化是提升网站或应用加载速度、交互响应时间以及整体用户体验的关键。优化前端性能的方法包括减少资源消耗、优化资源加载、提高渲染效率等。以下是常见的前端性能优化策略：

### 1. 减少HTTP请求
- **合并文件**：将多个CSS和JavaScript文件合并成一个文件，减少HTTP请求的数量。
- **使用CSS Sprites**：将多个小图标合并成一张图片，通过`background-position`来显示不同的部分。
- **使用字体图标**：使用字体图标（如Font Awesome）代替多个图像图标，以减少请求数量。

### 2. 资源压缩与缩小
- **压缩文件**：使用工具（如Gzip、Brotli）压缩HTML、CSS、JavaScript文件，减少文件大小。
- **代码缩小**：通过Webpack、UglifyJS等工具删除代码中的空白、注释、未使用的代码，减少JavaScript和CSS文件的大小。
- **图片优化**：使用现代图像格式（如WebP），并对图片进行无损或有损压缩，降低文件体积。

### 3. 延迟加载与异步加载
- **Lazy Loading**：对于页面中不立即显示的图片或视频，使用懒加载技术，在用户滚动到相应位置时才加载资源。
- **异步加载脚本**：通过`async`或`defer`属性异步加载JavaScript脚本，避免阻塞页面渲染。

```html
<script src="script.js" async></script>
<script src="script.js" defer></script>
```

### 4. 减少重排和重绘
- **CSS 优化**：避免使用会导致重排的CSS属性（如`width`、`height`、`padding`），使用`transform`、`opacity`等不会触发重排的属性。
- **避免频繁 DOM 操作**：合并多次对DOM的操作，避免频繁修改DOM结构。可以使用文档片段（Document Fragment）进行批量操作。
- **使用虚拟 DOM**：React等框架通过虚拟DOM减少了直接操作真实DOM的次数，降低了重排和重绘的频率。

### 5. 减少渲染阻塞
- **CSS放在头部，JavaScript放在底部**：将CSS文件放在`<head>`中，确保样式优先加载，避免阻塞页面渲染。将JavaScript文件放在页面底部，或使用异步加载，避免阻塞页面内容的加载。
- **关键CSS内联**：将关键的CSS直接内联在HTML中，确保页面首屏内容快速渲染。
- **减少和优化第三方脚本**：第三方脚本（如广告、社交媒体插件）可能影响页面性能，尽量减少其使用，并将其异步加载。

### 6. 使用内容分发网络（CDN）
- **使用CDN**：将静态资源（如图片、CSS、JavaScript）托管在CDN上，利用CDN的全球分布节点，缩短资源传输的距离和时间，提高加载速度。

### 7. 浏览器缓存
- **设置缓存策略**：通过设置`Cache-Control`、`Expires`等HTTP头，让浏览器缓存静态资源，减少重复加载的请求。
- **版本化资源**：对于需要更新的资源，通过文件名中的版本号（如`style.v1.css`）来管理缓存，使得更新后能够被立即加载。

### 8. 使用现代前端技术
- **Service Worker**：使用Service Worker实现资源的离线缓存、预加载，提高应用的性能和可靠性。
- **HTTP/2**：采用HTTP/2协议，可以在单个TCP连接上并行加载多个资源，减少延迟并提高加载速度。
- **Prefetching**：使用`<link rel="prefetch">`、`<link rel="preload">`标签提前加载后续页面需要的资源，减少跳转页面的加载时间。

### 9. 优化页面渲染
- **减少首屏渲染时间**：优化关键渲染路径，确保首屏内容尽快展示给用户。通过减少JavaScript的体积和CSS的复杂性来加快渲染。
- **减少DOM节点数量**：页面中过多的DOM节点会增加渲染的开销，通过精简HTML结构和减少不必要的节点可以提高渲染速度。
- **异步数据加载**：对于非关键的数据，可以在页面初始渲染后异步加载，避免阻塞首屏内容的展示。

### 10. 性能监控与分析
- **使用浏览器开发者工具**：通过Chrome DevTools等工具分析页面的性能瓶颈，查看网络请求、渲染时间、JavaScript执行时间等指标。
- **使用性能监控工具**：借助Lighthouse、WebPageTest等工具定期监控和分析网站的性能表现，找出需要优化的地方。
- **持续优化**：前端性能优化是一个持续的过程，需要根据监控结果和用户反馈不断进行改进。
