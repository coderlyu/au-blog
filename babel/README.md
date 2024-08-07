# Babel

## 本地目录

1. [Ast](1.ast.md)
2. [Plugin](2.plugin.md)
3. [Preset](3.preset.md)

> [babel](https://babeljs.io/docs/)

> [Usage Document](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/user-handbook.md)

Babel 是一款通用的 JavaScript 编译器。它还是一个模块集合，可用于多种形式的静态分析。

> 静态分析是在不执行代码的情况下分析代码的过程。（在执行代码时进行分析称为动态分析）。静态分析的目的多种多样。它可用于 linting、编译、代码突出显示、代码转换、优化、最小化等等

## Learning Path

1. Basic use，[Document](https://babel.dev/docs/usage)
2. @babel/parser， javaScript parser used in Babel.
   - [How to use](https://github.com/babel/babel/tree/main/packages/babel-parser)
   - [Node Type](https://github.com/babel/babel/blob/main/packages/babel-parser/ast/spec.md)
3. @babel/

## How to use?

[Document](https://babel.dev/docs/usage)

## How to develop?

[Document](https://github.com/babel/babel/blob/main/CONTRIBUTING.md)

## Configure

> [参看](https://github.com/willson-wang/Blog/issues/100)

1. [配置文件以及区别](https://babeljs.io/docs/config-files)
2. [配置选项]()

### 项目范围的配置

> `babel.config.js` 文件的配置是全局的，适用于整个项目中的所有文件。这个文件适合配置整个项目的 `Babel` 设置。

1. `babel.config.*` (.json, .js, .cjs, .mjs, .cts)

**优点：**

1. 适合大型项目或者需要统一配置的项目
2. 可以使用 `JavaScript` 语法，允许编写更复杂的配置逻辑，如动态设置插件或预设。

### 文件相关配置

> 配置默认只应用于当前目录及其子目录中的文件。这意味着它们适用于配置每个包或模块独立的 Babel 配置。

1. `.babelrc.*` (.json, .js, .cjs, .mjs, .cts)
2. `.babelrc`
3. `package.json` 文件中含有 `babel`
   - 只应用于当前目录及其子目录中的文件。
   - 减少配置文件的数量，所有配置集中在一个文件中，便于管理。
   - 适合小型项目或者 `Babel` 配置较简单的项目。

**优点：**

1. 配置更加模块化，适合 `monorepo` 项目中的子包配置。
2. 支持在不同子目录中放置不同的 `.babelrc` 文件，实现更细粒度的配置。

### 优先级

1. `babel.config.js` 的优先级高于 `.babelrc` 和 `package.json` 中的 `"babel"` 字段，因为`babel.config.js`是全局配置。
2. `.babelrc` 和 `package.json` 中的 `"babel"` 字段的优先级相同，`Babel` 会在查找配置时优先使用 `.babelrc`文件（如果存在）

#### 合并配置

当 `Babel` 处理一个文件时，会按照以下顺序查找并合并配置

1. 项目根目录的 `babel.config.js`：全局配置最先被加载。
2. 文件所在目录及其祖先目录中的 `.babelrc` 或 `package.json`：局部配置会覆盖全局配置的相应部分。
   配置合并时，局部配置会覆盖全局配置，但不会完全替代。例如，局部配置中的 `presets` 和 `plugins` 会追加到全局配置中，而不是替换它们。
3. 相同的 `preset`：如果项目配置和文件配置都包含相同的 `preset` ，`Babel` 只会应用一次，不会重复应用, 且仅局部配置生效。
4. 不同的 `preset`：如果项目配置和文件配置包含不同的 `preset`，这些 `preset` 会合并并按顺序应用。
5. 插件：与 `preset` 类似，相同的插件只会应用一次，不同的插件会合并。

### 结论

1. 如果你有一个简单的项目，或者你喜欢把所有配置集中在一个文件中，可以选择在`package.json` 中添加 `Babel` 配置。
2. 如果你的项目比较复杂，或者你需要在不同的模块中使用不同的 `Babel` 配置，使用 `.babelrc`或 `.babelrc.js` 文件会更灵活。
3. 如果你希望统一管理整个项目的 `Babel` 配置，且可能需要使用 `JavaScript` 编写配置逻辑，`babel.config.js` 是一个不错的选择。

## es6+ => es5

### configure

#### webpack (v5)

### rollup (v4)

[demo](https://github.com/coderlyu/templates/blob/master/templates/rollup4-ts/.babelrc.json)

## babel polyfill

> [参看](https://blog.willson-wang.com/blog/babel-polyfillzhinan) > [core-js next](https://github.com/zloirock/core-js/blob/master/docs/zh_CN/2023-02-14-so-whats-next.md)

#### 3.x 与 2.x 的主要区别

1. `3.x` 支持一些最新的提案 `api`，而 `2.x` 不支持最新的一些提案 `api`
2. `3.x` 相比 `2.x` 有更合理的命令方式
   - 稳定的方法命名为 `es.xxx`
   - 提案的方法命名为 `esnext.xxx`
   - 而在 `2.x` 使用 `es5、es6、es7` 这样的命名方式
3. `3.x` 支持多种包结构
   - `core-js` 提供非纯的 `polyfill api`
   - `core-js-pure` 提供纯的 `polyfill api`
   - `core-js-compact` 提供 `core-js` 每个版本支持的 `api` 及每个 `api` 兼容情况，供 `babel` 这样的公司查询使用
   - `core-js-builder` 提供一个 `core-js` 自定义打包器，允许定义自定义的 `core-js`

`babel polyfill` 在陆续的演变中，提供了两种 `polyfill` 的方式，分别是 `@babel/preset-env` 与 `@babel/plugin-transform-runtime` ，二者都提供了 `polyfill` 的能力，但是提供的方式略有不同

**原理**：`babel` 将`code` => `ast` => 遍历 `ast` => 碰到对应的 `api` 则引入 `core-js` 对应的 `api` or 直接引入整个`core-js`，如下所示

```js
require("core-js/modules/es.array.find-index.js");
// OR
require("core-js");
// OR
var _at = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/instance/at")
```

#### @babel/preset-env

`@babel/preset-env` 与 `polyfill` 相关的参数如下所示

1. `target` 法语与 `api` 兼容的最终终端目标
2. `useBuiltIns` 是否开启 `polyfill` 功能
3. `core-js` 相关配置
   - `version` 允许设置成 `3.1、3.21` 等值
   - `proposals` 是否允许使用提案语法
4. `shippedproposals` 是否允许使用稳定的提案语法

需要注意参数就是 `useBuiltIns: 'entry' | 'usage' | false`;

1. `entry` 代表直接引入整个 `core-js` 包
2. `usage` 代表代码内使用了哪些 `api`，就引入对应 `api` 的 `polyfill`
3. `false` 代表不进行 `polyfill`
   考虑到项目大小，一般推荐使用 `useBuiltIns: 'usage'`

#### @babel/plugin-transform-runtime

为什么 `@babel/preset-env` 已经提供了`polyfill` ，`@babel/plugin-transform-runtime` 还需要提供 `polyfill`，这不是增加使用难度吗？

原因是：`@babel/preset-env`仅提供非纯方式引入的 `polyfill` ，在项目使用场景没有问题，但是对于 `npm` 包场面，则可能会有问题，因为 `npm` 包一般是第三方提供的，为了尽可能的减少引入的 `npm` 对项目产生影响，使用无污染的方式导入 `polyfill` 更合理，所以最终演变成了 `@babel/plugin-transform-runtime` 提供无污染的 `polyfill` 方式(关于为什么不在 `@babel/preset-env` 直接做无污染的方式，猜测可能是不同的成员开发的)

##### GPT 解释的原因

`@babel/preset-env` 和 `@babel/plugin-transform-runtime` 都是 `Babel` 的两个插件，它们在处理 `JavaScript` 代码时有不同的作用和适用场景。尽管它们都可以用于添加 `polyfill`，但它们的工作方式和应用场景有所不同，这就导致了有时你需要同时使用它们来提供 `polyfill`。

**@babel/preset-env**

`@babel/preset-env` 是一个智能的 `Babel preset`，它可以根据你配置的目标环境（即你希望代码运行在哪些浏览器或 `Node.js` 版本）自动决定需要哪些插件和 `polyfill`。它会分析你的代码并自动引入所需的 `polyfill`，以确保你的代码在目标环境中能够正常运行。

- `@babel/preset-env` 主要通过两个选项来管理 `polyfill`：
  - `useBuiltIns`：可以设置为 `false`、`entry` 或 `usage`。
    - `false`：不会自动引入 `polyfill`。
    - `entry`：需要你在入口文件中手动引入 `core-js`，它会根据目标环境的需求引入所有可能需要的 `polyfill`。
    - `usage`：`Babel` 会自动根据你的代码使用情况按需引入 `polyfill`。
  - `corejs`：指定使用哪一版本的 `core-js`。

**@babel/plugin-transform-runtime**

`@babel/plugin-transform-runtime` 则是另一个 `Babel` 插件，主要用于优化代码的重复部分和处理一些 `Babel` 生成的辅助函数。它通过引入 `@babel/runtime` 包来避免每个文件都重复包含相同的辅助函数，从而减小打包体积。它还可以避免全局污染，因为 `@babel/runtime` 会把 `polyfill` 添加到模块中，而不是全局作用域。

- `@babel/plugin-transform-runtime` 主要有以下作用：
  - 引入 `@babel/runtime` 中的 `helpers` 和 `polyfill`，避免生成冗余的代码。
  - 避免污染全局命名空间，减少命名冲突的风险。
  - 可以使用 `corejs` 选项引入 `core-js` 的 `polyfill`。

**为什么需要同时使用**

尽管 `@babel/preset-env` 可以自动引入所需的 `polyfill`，但有些情况下你可能还是需要使用 `@babel/plugin-transform-runtime`：

1. **避免全局污染**：`@babel/preset-env` 的 `polyfill`（尤其是 `useBuiltIns: 'entry'`）会修改全局对象，可能导致与其他库的冲突。而 `@babel/plugin-transform-runtime` 的 `polyfill` 不会修改全局对象，而是按需引入到模块中。

2. **减少代码重复**：`@babel/plugin-transform-runtime` 会通过 `@babel/runtime` 包来引入辅助函数和 `polyfill`，避免每个模块重复引入相同的代码，从而减小打包后的文件大小。

3. **更好的兼容性**：`@babel/plugin-transform-runtime` 可以提供一些 `@babel/preset-env` 没有的 `polyfill` 或辅助函数，特别是在处理一些新的 `JavaScript` 特性时。

**结论**

同时使用 `@babel/preset-env` 和 `@babel/plugin-transform-runtime` 可以确保你的代码兼容性更好，同时避免全局污染和代码重复。这种组合使用方式可以让你在保持代码兼容性的同时，优化打包体积和运行时性能。

### 新 api 设备支持情况

1. [core-js-compat](https://www.npmjs.com/package/core-js-compat)中包含有关模块必要性的数据 `core-js`，以及通过 `browserslist` 查询获取所需 `core-js` 模块列表的 `API`
2. [设备兼容性可视图](https://zloirock.github.io/core-js/compat/)

## 其它

1. 页面捆绑包分析, [bundlescanner](https://bundlescanner.com/)
