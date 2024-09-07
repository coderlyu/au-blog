# 模块化

## esm和cjs的区别



`ES Module`（ECMAScript Module，简称 `ESM`）和 `CommonJS` 模块是两种在 JavaScript 中定义和管理模块的规范，它们在语法、执行时机、模块加载方式等方面存在明显的区别。以下是对这两者的详细对比：

### 1. **模块定义方式**
   - **ES Module (ESM)**：
     - 使用 `import` 和 `export` 语法。
     - 静态引入，模块的依赖在编译阶段就能确定，编译器可以进行优化。

     ```javascript
     // 导出
     export const foo = 'foo';
     export function bar() {}
     
     // 导入
     import { foo, bar } from './module';
     ```

   - **CommonJS**：
     - 使用 `require` 和 `module.exports` 或 `exports` 来定义和引用模块。
     - 动态引入，模块在代码运行时才会加载，不能进行编译时优化。

     ```javascript
     // 导出
     const foo = 'foo';
     function bar() {}
     module.exports = { foo, bar };

     // 导入
     const { foo, bar } = require('./module');
     ```

### 2. **模块加载方式**
   - **ES Module**：
     - **静态加载**：ESM 是静态导入的，模块依赖在编译阶段就被解析。因此，所有 `import` 声明会被提升到文件的顶部执行。
     - **异步加载**：浏览器环境下支持异步加载模块，例如通过 `<script type="module">` 可以在不阻塞页面加载的情况下加载模块。

   - **CommonJS**：
     - **动态加载**：CommonJS 是动态导入的，模块会在代码运行时通过 `require` 来加载。这意味着 `require` 语句可以根据条件执行，也可以放在函数或代码块中动态引入。

### 3. **执行时机**
   - **ES Module**：
     - **编译时静态解析**：ESM 在编译时进行静态分析，解析模块依赖，并且 `import` 的声明在整个模块解析之前就会执行。
     - **顶层异步支持**：ESM 模块允许在顶层使用 `await`，配合 `async` 函数进行异步加载。

   - **CommonJS**：
     - **同步加载**：CommonJS 是同步的，模块的代码在 `require` 时执行，返回的对象是模块导出的结果。
     - **加载时执行**：`require` 会立即执行模块代码并返回导出的对象，而 ESM 会解析依赖但不会立即执行。

### 4. **导出方式**
   - **ES Module**：
     - 支持 **命名导出** 和 **默认导出**。
     - **命名导出**：可以导出多个变量、函数或类，导入时需要通过相同的名称引用。
     - **默认导出**：每个模块只能有一个默认导出，导入时可以使用任意名称。

     ```javascript
     // 导出
     export const a = 1;
     export default function foo() {};

     // 导入
     import foo, { a } from './module';
     ```

   - **CommonJS**：
     - 只能导出一个对象，该对象的属性就是导出的内容。没有命名导出或默认导出，导入时总是导入整个模块的导出对象。
     
     ```javascript
     // 导出
     module.exports = { a: 1, foo: function() {} };

     // 导入
     const { a, foo } = require('./module');
     ```

### 5. **支持的环境**
   - **ES Module**：
     - **现代浏览器** 和 **Node.js 12+** 默认支持 ESM（通过 `.mjs` 文件或配置 `"type": "module"`）。
     - ESM 在浏览器中有原生支持，不需要像 CommonJS 那样依赖构建工具。

   - **CommonJS**：
     - **Node.js** 是 CommonJS 模块系统的最初实现，也是目前 Node.js 中默认的模块规范。
     - 在浏览器中不能原生支持，需要通过工具（如 Webpack、Rollup）进行打包和转化。

### 6. **this 的指向**
   - **ES Module**：
     - 在 ESM 模块中，顶层的 `this` 是 `undefined`。它的设计更加符合模块化和严格模式的规范。

     ```javascript
     console.log(this);  // undefined
     ```

   - **CommonJS**：
     - 在 CommonJS 模块中，顶层的 `this` 指向 `module.exports`。

     ```javascript
     console.log(this);  // module.exports
     ```

### 7. **循环依赖处理**
   - **ES Module**：
     - ESM 模块处理循环依赖时，模块依赖会在编译时解析，并返回一个引用。当模块依赖未加载完成时，可以部分导入模块，避免整个模块卡住。

   - **CommonJS**：
     - CommonJS 对循环依赖的处理方式是在加载模块时缓存结果，循环依赖的模块会得到部分加载的对象，未执行的部分会是 `undefined`。在某些情况下，处理不当可能会导致难以追踪的错误。

### 8. **作用域**
   - **ES Module**：
     - ESM 模块是严格作用域的，每个模块有自己的作用域，模块之间的变量不会污染全局作用域。
     - 只能在模块内部使用 `import` 和 `export`，不能动态改变导入的内容。

   - **CommonJS**：
     - CommonJS 模块也是作用域隔离的，每个模块有自己的作用域。
     - `require` 可以动态加载，允许在代码的任何地方使用。

### 总结
| 特性               | ES Module (ESM)                | CommonJS                       |
|--------------------|--------------------------------|--------------------------------|
| **语法**            | `import/export`                | `require/module.exports`       |
| **加载方式**        | 静态加载                       | 动态加载                       |
| **执行时机**        | 编译时静态解析，异步支持       | 运行时同步解析                 |
| **导出方式**        | 支持命名导出和默认导出         | 导出一个对象                   |
| **环境**            | 浏览器和现代 Node.js           | Node.js 和打包后的浏览器        |
| **顶层 `this`**     | `undefined`                   | 指向 `module.exports`          |
| **循环依赖处理**    | 返回模块的引用                 | 缓存部分导出结果               |

总体而言，ES Modules 更加现代，适合树摇（tree-shaking）等优化，并且在浏览器和 Node.js 环境中已经逐渐成为主流。而 CommonJS 则是 Node.js 中的传统模块系统，具有简单易用的特点，但不适用于静态优化场景。

1. ESM模块加载经过构建，实例化，赋值三个阶段（该三个阶段都在ESM编译时完成），三个阶段可以分别完成，当然也可以说ESM是异步加载
2. ESM导入的是对原始值的引用，非值拷贝，webpack中使用get方法实现这一过程
3. ESM导入的值只读，不可进行修改，webpack中通过不暴露set方法实现这一过程
4. ESM内部为严格模式
5. ESM中发生循环引用时，不会出现死循环，因为ESM会加载其缓存在module map中的模块记录，但加载的结果中仅能获取到存在提升的数据类型，比如函数声明等

#### 从源码看

cjs的值拷贝，隔离
1. CJS
   ```js
    function fn(require,module,exports) {
        // b1：导出一个done属性且为false
        exports.done = false;
        // b2：加载a模块
        var a = require('./a.js');
        // b3：打印a模块导出属性done的值
        console.log('在 b.js 之中，a.done = ', a.done);
        // b4：b模块的done属性重新赋值为ture
        exports.done = true;
        // b5：打印b.js执行完毕
        console.log('b.js 执行完毕');
    }   
   ```

## esm和cjs循环依赖
[参考](https://juejin.cn/post/7027778119050362917)
在 **CommonJS (CJS)** 和 **ES Module (ESM)** 中，循环引用（circular dependency）是指两个或多个模块相互依赖的情况。这在模块化编程中比较常见，而两种模块系统处理循环引用的方式有所不同。以下是两者如何处理循环引用的问题及其影响：

### 1. **CommonJS 中的循环引用**
   **CommonJS** 是**同步加载**的模块系统，模块代码在被 `require()` 时执行，并且会将导出的内容缓存到 `require.cache` 中。

   - **加载机制**：当使用 `require()` 导入一个模块时，模块会**同步加载并立即执行**模块代码。执行的过程中，`module.exports` 会保存导出的值，且导出的内容会在 `require()` 后缓存起来，以避免重复加载。

   - **循环引用处理**：CommonJS 模块在处理循环引用时，如果模块 A 依赖模块 B，而模块 B 又依赖模块 A，Node.js 会在 `require()` 加载时识别这种循环引用，并且：
     - 返回**部分执行结果**：如果模块 B 还没有执行完，模块 A 在加载 B 时，只能获取到 B 模块中**已经执行到的部分导出**，而未执行的部分会返回 `undefined`。
     - **缓存当前状态**：即便 B 尚未完全执行完，它的部分导出结果会被缓存起来供后续模块使用，避免重复执行。

   **示例：**
   ```javascript
   // a.js
   console.log('a is loading');
   const b = require('./b');
   console.log('In a.js, b.done =', b.done);
   exports.done = true;
   console.log('a is done');
   
   // b.js
   console.log('b is loading');
   const a = require('./a');
   console.log('In b.js, a.done =', a.done);
   exports.done = true;
   console.log('b is done');
   ```

   **执行结果：**
   ```
   a is loading
   b is loading
   In b.js, a.done = undefined
   b is done
   In a.js, b.done = true
   a is done
   ```

   - **解释**：在 `a.js` 中，当 `require('./b')` 时，`b.js` 开始执行，但它依赖 `a.js`，于是又去 `require('./a')`。此时 `a.js` 并没有执行完，所以 `a.done` 是 `undefined`。当 `b.js` 完成后返回，`a.js` 才继续执行，并能够得到 `b.done = true`。

   - **问题**：CommonJS 的部分导出结果是基于执行顺序的。如果模块间依赖复杂，处理循环依赖时可能会得到未完全初始化的数据（如 `undefined`），可能导致潜在的逻辑错误。

### 2. **ES Module (ESM) 中的循环引用**
   **ES Module** 是**静态分析**和**异步加载**的模块系统。它的设计初衷是为了在编译时就能确定模块依赖关系，并进行优化（如树摇）。ESM 提供了比 CommonJS 更优雅的循环引用处理机制。

   - **加载机制**：ESM 是基于静态依赖图来处理模块的，这意味着在模块代码执行之前，JavaScript 引擎已经对模块的依赖进行了**静态分析**。所有 `import` 的引用在解析时就会建立好依赖关系图。

   - **循环引用处理**：在 ESM 中，如果两个模块存在循环引用，它不会像 CommonJS 一样返回部分执行结果或 `undefined`，而是通过以下机制处理：
     - **引用的是绑定的值**：ESM 导入的值是**引用**（binding），而不是导出时的具体值。因此，即使模块 A 依赖模块 B，模块 B 在还未执行完毕的情况下，A 仍然可以访问到 B 中的变量引用，并且在 B 完成执行后，A 能够获取到最新的值。
     - **声明提前**：即使导入的模块尚未执行完，ESM 模块系统也会确保模块中所有的**变量声明**已经可用。因此，依赖的模块虽然未完全初始化，但不会是 `undefined`，而是一个未初始化的变量。

   **示例：**
   ```javascript
   // a.mjs
   console.log('a is loading');
   import { done as bDone } from './b.mjs';
   console.log('In a.mjs, b.done =', bDone);
   export const done = true;
   console.log('a is done');

   // b.mjs
   console.log('b is loading');
   import { done as aDone } from './a.mjs';
   console.log('In b.mjs, a.done =', aDone);
   export const done = true;
   console.log('b is done');
   ```

   **执行结果：**
   ```
   a is loading
   b is loading
   In b.mjs, a.done = false
   b is done
   In a.mjs, b.done = true
   a is done
   ```

   - **解释**：在 ESM 中，当 `a.mjs` 执行 `import { done as bDone } from './b.mjs'` 时，`b.mjs` 被加载。尽管 `a.mjs` 尚未完成执行，`b.mjs` 仍然可以访问到 `aDone` 变量，并且它的值是**引用**，随着 `a.mjs` 的执行完成，`aDone` 的值更新为 `true`。同理，`a.mjs` 能够正确获取 `bDone = true`。

   - **问题减少**：由于 ESM 导入的是绑定（reference），而不是值副本，即使有循环依赖，也不会像 CommonJS 那样导致数据未定义的情况。这使得 ESM 在处理复杂的循环依赖时更加稳健。

### 3. **主要区别**
| 特性                           | CommonJS (CJS)                                      | ES Module (ESM)                                     |
|--------------------------------|----------------------------------------------------|----------------------------------------------------|
| **加载方式**                   | 同步加载，`require()` 时立即执行                    | 静态分析，依赖关系在编译阶段确定                   |
| **循环依赖处理机制**           | 返回部分执行结果或 `undefined`                      | 通过绑定处理引用，不返回 `undefined`               |
| **执行时机**                   | `require()` 时立即执行整个模块代码                   | 模块依赖图构建完成后再异步执行                     |
| **模块之间的引用**             | 值的拷贝                                            | 值的绑定（引用）                                   |
| **处理结果**                   | 可能返回未初始化的结果，导致 `undefined`            | 确保声明提前，引用永远可访问，值会更新             |

### 4. **实际开发中的建议**
- **ESM 更稳健**：在现代开发中，尤其是需要处理复杂依赖关系时，ESM 的处理机制比 CommonJS 更加安全和稳健。因为 ESM 导入的是引用，循环引用时也能确保模块的声明在执行前可访问，减少了 `undefined` 的风险。
  
- **避免循环依赖**：虽然 ESM 对循环依赖的支持更好，但循环引用仍然是一种复杂的设计，尽量避免。通过重构代码或将模块拆分为独立的子模块，往往可以更好地解决循环依赖问题。

总结来看，CommonJS 由于其同步加载的特性，在循环引用的场景下容易出现未定义的情况。而 ESM 通过静态分析和绑定引用机制，有效缓解了这个问题，能够保证模块之间的依赖更加稳健且不会返回 `undefined`。
## 