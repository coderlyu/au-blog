# Volta

> [Document](https://docs.volta.sh/guide/getting-started)

使用 `Volta`，您只需选择一次 `Node` 引擎，然后就无需再为此担心。您可以在项目之间切换，而不必手动在 `Node` 之间切换。

## 简介

`Volta` 是一个强大的 `JavaScript` 工具链管理工具，通过其快速、高效和跨平台的特点，帮助开发者更方便地管理和切换 `Node.js` 及相关工具的版本。它的项目特定版本管理功能使得在多个项目之间工作更加顺畅，确保每个项目使用正确的环境配置。对于任何使用 `Node.js` 进行开发的人来说，`Volta` 都是一个值得尝试的工具。

### [安装](https://docs.volta.sh/guide/getting-started)

1. mac

```
curl https://get.volta.sh | bash
```

2. windows
   - [download and run the Windows installer](https://github.com/volta-cli/volta/releases/download/v1.1.1/volta-1.1.1-windows-x86_64.msi) and follow the instructions

## 使用案例

### 项目

1. 在项目根目录执行命令，[命令详见](https://docs.volta.sh/reference/pin)，`volta pin node@18`
2. 会在 `package.json` 文件中添加如下字段，代表：项目启动时，将会限定 `node` 版本在 `"18.20.4"` 上运行；这在开发中很有用

```js
// package.json
{
  "volta": {
    "node": "18.20.4"
  }
}
```

`Volta` 会将 `Node` 引擎的确切版本保存在您的 `package.json` 目录中，以便您可以将选择提交给 `git`。从那时起，每次您在项目目录中运行 `Node` 时，`Volta` 都会自动切换到您选择的相同版本的 `Node`。同样，您的所有合作者都可以通过在开发机器上安装 `Volta` 来执行相同的操作。

## [优点](https://docs.volta.sh/guide/#features)

1. 快速
2. 项目版本无缝切换
3. 跨平台支持，包括 `Windows` 和所有 `Unix shell`
4. 支持多个包管理器，`npm、yarn`
5. 每次升级 `Node` 时无需重新安装
6. 可扩展钩子，可针对特定站点进行自定义
