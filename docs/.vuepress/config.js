const themeConfig = require('./config/themeConfig')
const markdown = require('./config/markdown')

module.exports = {
  theme: 'vdoing',
  title: 'Blog',
  description: 'Just Blog',
  // head: [
  //   ['link', { rel: 'icon', href: '/favicon.ico' }],
  // ],
  base: '/',
  markdown,
  themeConfig
}