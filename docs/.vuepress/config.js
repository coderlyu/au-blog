const themeConfig = require('./config/themeConfig')
const markdown = require('./config/markdown')
const plugins = require('./config/plugins')
module.exports = {
  theme: 'vdoing',
  title: 'Blog',
  description: 'Just Blog',
  base: process.env.NODE_ENV === 'development' ? '/' : '/blog/',
  markdown,
  plugins,
  themeConfig
}