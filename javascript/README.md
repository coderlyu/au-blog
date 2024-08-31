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
6. `String`:
7. `Symbol`:
8. `Object`:

**扩展**
1. 从概念上讲，`undefined` 表示值的缺失，`null` 表示对象的缺失（**这也可以说明 `typeof null === "object"` 的原因**）。当某些东西没有值时，该语言通常默认为 `undefined`
2. 为什么推荐用`void 0` 来获得 `undefined`:
   1.  undefined 不是关键字 在某些场景和老版本浏览器环节下可以通过 undefined = xxx 被修改，不安全。
   2.  *`void` 运算符对给定的表达式进行求值，然后返回 undefined*
3. JavaScript URI：当用户点击一个以 `javascript:` 开头的 URI 时，它会执行 URI 中的代码，然后用返回的值替换页面内容，除非返回的值是 undefined。void 运算符可用于返回 undefined

#### 操作符（算术、比较、逻辑、赋值等）
#### 条件语句 (if, else, switch)
#### 循环语句 (for, while, do...while)

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
