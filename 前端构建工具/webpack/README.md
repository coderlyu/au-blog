# Webpack

> webpack5

## 内容导航

1. [Ast](./1.ast.md)
2. [Plugin](./2.plugin.md)
3. [Loader](./3.loader.md)

## 简介

Webpack 是一个现代 JavaScript 应用程序的模块打包工具。它的主要功能是将你的项目中的各种资源（如 JavaScript、CSS、图片等）打包成一个或多个 bundle 文件，以便在浏览器中使用。

## Webpack 的核心概念

1. **Entry（入口）**：Webpack 打包的起点，告诉 Webpack 从哪个文件开始解析依赖。
2. **Output（输出）**：Webpack 打包后的文件输出位置和文件名。
3. **Loaders（加载器）**：Webpack 用来处理项目中的不同类型文件（如转换 TypeScript 到 JavaScript，处理 CSS 等）。
4. **Plugins（插件）**：扩展 Webpack 功能的工具，如优化打包结果，管理资源等。

## 基础使用

### 初始化项目

首先，你需要在你的计算机上安装 Node.js。安装完 Node.js 后，打开命令行（Windows 上的 cmd，Mac 上的终端，或 VSCode 的终端），然后运行以下命令来初始化一个新的项目：

```bash
mkdir my-webpack-project
cd my-webpack-project
npm init -y
```

这会创建一个新的项目文件夹，并生成一个`package.json`文件，这是 Node.js 项目的配置文件。

#### 3.2 安装 Webpack 和 Webpack CLI

接下来，安装 Webpack 和 Webpack CLI：

```bash
npm install --save-dev webpack webpack-cli
```

### 创建项目结构

在项目根目录下创建以下文件和文件夹：

```
my-webpack-project
│   package.json
│   webpack.config.js
└───src
    │   index.js
```

### 配置 Webpack

在项目根目录创建一个`webpack.config.js`文件，添加以下内容：

```js
const path = require("path");

module.exports = {
  entry: "./src/index.js", // 入口文件
  output: {
    filename: "bundle.js", // 输出文件名
    path: path.resolve(__dirname, "dist"), // 输出文件夹
  },
  mode: "development", // 模式，可以是'development'或'production'
};
```

### 添加示例代码

在`src/index.js`文件中添加一些示例代码：

```js
console.log("Hello, Webpack!");
```

### 添加构建脚本

在`package.json`文件中添加一个脚本来运行 Webpack 构建：

```json
"scripts": {
  "build": "webpack"
}
```

### 运行 Webpack

在命令行中运行以下命令来构建项目：

```bash
npm run build
```

如果一切配置正确，Webpack 将会编译你的 JavaScript 代码，并在`dist`文件夹中生成一个`bundle.js`文件。

## 进阶使用

### Loaders

[Loaders 链接导航](./3.loader.md)

### Plugins

[Plugins 链接导航](./2.plugin.md)

### babel 编译

### Tree Shaking

### 代码分离(code split)

### Lazy load 懒加载

### css 代码分割

### 区分开发/生成环境

### 缓存

### 热模块替换(HMR)

## 性能优化
