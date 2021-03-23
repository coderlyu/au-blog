# 我的博客

> https://coderly.cn

## 效果

<img src="https://raw.githubusercontent.com/coderlyu/au-blog/master/docs/.vuepress/public/home.png" alt="图片">

## VuePress - 基于 Vue 的静态网站生成器

> 配置参看https://vuepress.vuejs.org/zh/guide/

VuePress 由两部分组成

- 第一部分是一个极简静态网站生成器 (opens new window)，它包含由 Vue 驱动的主题系统和插件 API
- 另一个部分是为书写技术文档而优化的默认主题，它的诞生初衷是为了支持 Vue 及其子项目的文档需求。

VuePress 常被用来生成说明文档

- VuePress 是一个基于 Vue 的轻量级静态网站生成器，以及为编写技术文档而优化的默认主题
- 它是为了满足 Vue 自己的子项目文档的需求而创建的。
- VuePress 享用 Vue + webpack 开发环境，在 markdown 中使用 Vue 组件，并通过 Vue 开发自定义主题。
- VuePress 为每一个由它生成的页面提供预加载的 html，不仅加载速度极佳，同时对 seo 非常友好。
- 一旦页面被加载之后，Vue 就全面接管所有的静态内容，使其变成一个完全的 SPA 应用，其他的页面也会在用户使用导航进入的时候来按需加载。

## Vuepress-Theme-Vdoing 主题

> 配置参看https://doc.xugaoyi.com/

- 这个主题的初衷是打造一个好用的、面向程序员的知识管理工具
- 轻松构建一个结构化的知识库，让你的知识海洋像一本本书一样清晰易读。
- 博客功能提供一种知识的碎片化形态，并支持个性化博客配置。
- 简洁高效，以 Markdown 为中心的项目结构。内置自动化工具，以更少的配置完成更多的事。配合多维索引快速定位每个知识点。

## VuePress 插件

### Vuepress-Plugin-Comment 评论

> 配置参看https://github.com/dongyuanxin/vuepress-plugin-comment

## 开始

```js
npm install
npm run dev // 本地运行
// 或
npm run build
```

### git.sh 脚本说明

执行：`npm run build:sh`，可打包发布到另一个仓库（个人博客）

```js

npm run build // 本地打包，前提是已经执行过了 npm install

cd ./webView // 打包好的文件，这里配置的是 webView，如果没有特别配置，改文件夹是在 docs/.vuepress/dist



git init
git add -A
git commit -m '更新blog'

git push -f git@github.com:coderlyu/blog.git master // 强制覆盖远程仓库的 master 分支，这里的 git 仓库改成你自己的，此时提交上去的就是打包好的
// 代码，如果你这个仓库设置了 GitHub Pages 个人站点的话，相当于打包完后自动部署到了你的站点（我这里用来做个人博客网站）
```
