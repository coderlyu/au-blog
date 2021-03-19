const nav = require('./nav')

module.exports = {
  nav,
  sidebarDepth: 2,
  lastUpdated: '上次更新',
  searchMaxSuggestions: 10,
  // repo: 'coderlyu/au-blog',
  // docsDir: 'docs',
  // editLinks: true,
  // editLinkText: '编辑',
  sidebar: {
    mode: 'structuring',
    collapsable: false
  },
  rightMenuBar: true,
  pageButton: true,
  // bodyBgImg: (process.env.NODE_ENV === 'development' ? '' : '/blog') + '/images/bg-6.jpeg',
  // bodyBgImgOpacity: 0.8,
  footer: {
    createYear: 2021,
    copyrightInfo: 'coderly | <a href="https://github.com/coderlyu" target="_blank">MIT License</a>'
  },
  blogger: {
    avatar: 'https://avatar-static.segmentfault.com/249/884/2498845138-602fc45007b7c_big64',
    name: 'coderly',
    slogan: '变秃了也变强了',
  },
  author: {
    name: 'coderly',
    link: 'https://github.com/coderlyu',
  },
}