# Javascript

## Basic

### 关键字
[来源](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#%E5%85%B3%E9%94%AE%E5%AD%97)

关键字是 JavaScript 中看起来像标识符但又具有特殊含义的标记。例如，在函数声明之前的 async 关键字表示该函数是异步的。

一些关键字是保留的，这意味着它们不能被用作变量声明、函数声明等的标识符。它们通常被称为保留字, [JavaScript中所有的保留字请看](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#%E4%BF%9D%E7%95%99%E5%AD%97)

在JavaScript中，**关键字**和**保留字**是两个不同的概念，尽管它们都涉及到特定的词汇在代码中的使用限制。以下是它们的区别：

#### 1. 关键字（Keywords）
- **定义**: 关键字是JavaScript语言的核心部分，它们具有特定的用途和功能。关键字直接参与代码的控制和操作，例如控制流程、定义变量和函数等。
- **使用**: 关键字是不可作为变量、函数名、对象属性名等的标识符使用的，因为它们已经在语言中被赋予了特定的意义。
- **示例**: `if`, `else`, `for`, `return`, `class`, `function`等。

#### 2. 保留字（Reserved Words）
- **定义**: 保留字包括关键字以及当前没有特定功能但可能在未来的JavaScript版本中作为关键字引入的词汇。这些词汇被保留以防止未来的兼容性问题。
- **使用**: 与关键字类似，保留字也不能被用作变量、函数名等。虽然某些保留字在当前版本的JavaScript中没有功能，但为了防止未来的版本冲突，它们被禁止用作标识符。
- **示例**: 一些保留字可能包括`enum`, `implements`, `package`, `protected`, `interface`, `private`等。这些在当前JavaScript版本中没有功能，但可能在将来引入。

#### 总结
- **关键字**: 是语言的一部分，有特定的功能，直接影响代码的执行。
- **保留字**: 目前可能没有特定的功能，但被保留以防止将来版本中它们成为关键字时引发冲突。

了解这两者的区别有助于编写更兼容和安全的代码，避免使用可能在将来成为关键字的保留字。

### 语法和基本类型

#### 变量声明 (var, let, const)

- 块作用域是什么
   1. 块是由 `{}` 界定的代码块。一个块存在于花括号中。花括号内的任何内容都是一个块

##### var
在 `ES6` 出现之前常使用， 
1. var 声明的作用域是全局的或函数/局部的
2. var 变量可以重新声明和更新
3. var 的提升： 变量和函数声明在代码执行之前被移动到其作用域的顶部，并初始化为 `undefined`

##### let
1. 是 `块作用域`
2. let 可以更新但不能重新声明（同一作用域中）,抛出错误：`error: Identifier 'xxx' has already been declared`
3. let 的提升：let 声明被提升到顶部，与初始化为 `undefined` 的 `var` 不同，let 关键字未初始化。所以如果你在声明之前尝试使用 let 变量，你会得到一个 `Reference Error`。

##### const
1. 是 `块作用域`;
2. 用 const 声明的变量保持恒定值, **在之后的代码中无法被重新赋值，且必须在变量声明的时候赋初始值**
3. const 不能更新或重新声明
   1. 如果是对象，可以修改对象内部的值（无法重新给变量赋值）
4. const 的提升：声明被提升到顶部但没有被初始化。

#### 数据类型（String, Number, Boolean, Null, Undefined, Symbol, BigInt, Object）

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

##### 强制类型转换
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


#### 操作符（算术、比较、逻辑、赋值等）

JavaScript中的操作符用于执行各种操作，如算术计算、比较、逻辑判断、赋值等。以下是JavaScript中的几种主要操作符及其作用：

##### 1. **算术操作符（Arithmetic Operators）**
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

##### 2. **比较操作符（Comparison Operators）**
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

##### 3. **逻辑操作符（Logical Operators）**
逻辑操作符用于逻辑判断，通常用于条件语句中。

- **`&&`（与）**: 逻辑与操作符，当两个操作数都为真时返回`true`，否则返回`false`。
  - 示例: `true && false` 结果为 `false`
- **`||`（或）**: 逻辑或操作符，当两个操作数中至少有一个为真时返回`true`，否则返回`false`。
  - 示例: `true || false` 结果为 `true`
- **`!`（非）**: 逻辑非操作符，取反操作数的布尔值。
  - 示例: `!true` 结果为 `false`

##### 4. **赋值操作符（Assignment Operators）**
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

##### 5. **位操作符（Bitwise Operators）**
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

##### 6. **其他操作符**
- **三元操作符 `? :`**: 一个简洁的条件操作符，根据条件表达式的真假返回不同的结果。
  - 示例: `let result = (5 > 3) ? "Yes" : "No";` 结果为 `"Yes"`
- **逗号操作符 `,`**: 用于在一行代码中包含多个表达式，返回最后一个表达式的结果。
  - 示例: `let x = (1, 2, 3);` 结果为 `x = 3`


#### 条件语句 (if, else, switch)
JavaScript中的条件语句用于根据表达式的结果（通常是布尔值）来决定执行哪一段代码。主要的条件语句有`if...else`和`switch`。以下是它们的详细介绍：

##### 1. **`if` 语句**
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

##### 2. **`if...else` 语句**
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

##### 3. **`if...else if...else` 语句**
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

##### 4. **`switch` 语句**
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

##### 总结
- **`if...else`**: 适用于处理简单的条件分支，尤其当条件表达式是布尔值时。
- **`if...else if...else`**: 适合处理多个不同的条件分支。
- **`switch`**: 适合处理单一表达式的多个可能值，尤其在可能值较多时更具可读性。

#### 循环语句 (for, while, do...while)
JavaScript中的循环语句用于重复执行一段代码，直到满足某个条件为止。常见的循环语句有`for`、`while`和`do...while`。以下是对它们的详细介绍：

##### 1. **`for` 循环**
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

##### 2. **`while` 循环**
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

##### 3. **`do...while` 循环**
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

##### 4. **循环控制语句**
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

##### 总结
- **`for` 循环**: 适用于已知循环次数的情况。
- **`while` 循环**: 适用于循环次数不确定，但需在满足某个条件之前一直执行的情况。
- **`do...while` 循环**: 适用于循环体需要至少执行一次的情况。

理解并灵活使用这些循环语句，可以有效地处理重复性任务，编写高效的JavaScript代码。
### 函数

### 对象与面向对象编程

#### 对象基础

#### 原型与继承

#### 内置对象

### 高级概念

#### 作用域

#### 事件循环与异步编程

### DOM 操作与事件

### ES6+ 新特性

### 错误处理与调试

### 前端性能优化

## Coding
