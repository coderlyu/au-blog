const themeConfig = require('./config/themeConfig')
const markdown = require('./config/markdown')
const plugins = require('./config/plugins')
const head = require('./config/head')

module.exports = {
  theme: 'vdoing',
  title: "阿誉的博客",
  description: '刘誉的博客',
  dest: 'webView',
  cache: true,
  base: process.env.NODE_ENV === 'development' ? '/' : '/blog/',
  category: true,
  markdown,
  plugins,
  head, 
  themeConfig
}