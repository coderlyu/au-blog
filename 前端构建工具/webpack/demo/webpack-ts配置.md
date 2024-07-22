# webpack ts 配置

配置 Webpack 以支持 TypeScript 的步骤如下：

### 1. 初始化项目

确保你已经安装了 Node.js，然后在项目目录中运行以下命令来初始化一个新的项目：

```bash
npm init -y
```

### 2. 安装依赖

安装 Webpack、TypeScript 和一些必要的插件和加载器：

```bash
npm install --save-dev webpack webpack-cli typescript ts-loader
```

### 3. 创建 tsconfig.json

在项目根目录创建一个`tsconfig.json`文件，配置 TypeScript 编译选项：

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}
```

### 4. 创建 webpack.config.js

在项目根目录创建一个`webpack.config.js`文件，配置 Webpack：

```js
const path = require("path");

module.exports = {
  entry: "./src/index.ts", // 入口文件
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"], // 自动解析扩展
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
```

### 5. 创建项目结构

创建项目目录结构，并添加一些示例代码：

```
project-root
│   package.json
│   tsconfig.json
│   webpack.config.js
└───src
    │   index.ts
```

在`src/index.ts`中添加一些示例代码：

```ts
const message: string = "Hello, TypeScript with Webpack!";
console.log(message);
```

### 6. 添加构建脚本

在`package.json`中添加一个脚本来运行 Webpack 构建：

```json
"scripts": {
  "build": "webpack"
}
```

### 7. 运行构建

在终端中运行以下命令来构建项目：

```bash
npm run build
```

如果一切配置正确，Webpack 将会编译 TypeScript 代码并生成`dist/bundle.js`文件。

### 可选配置

根据项目需求，你可以进一步配置 Webpack。例如，添加开发服务器、代码分割、优化等。

这是一个基本的 Webpack + TypeScript 配置示例。如果你有任何具体问题或需要进一步的定制，请告诉我！
