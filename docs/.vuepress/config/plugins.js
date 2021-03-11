const dayjs = require('dayjs')
module.exports = [
  '@vuepress/nprogress',
  [
    'one-click-copy',
    {
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'],
      copyMessage: '复制成功',
      duration: 1000,
      showInMobile: false
    }
  ],
  [
    'vuepress-plugin-comment',
    {
      choosen: 'gitalk',
      options: {
        clientID: 'ee27cddb54c708e69312',
        clientSecret: '78700378974e4e0682b1d8c67b7c86ea6912d243',
        repo: 'blog-gitalk-comment',
        owner: 'coderlyu',
        admin: ['coderlyu'],
        pagerDirection: 'last',
        id: '<%- (frontmatter.permalink || frontmatter.to.path || "123456789012345").slice(-16) %>',
        title: '「评论」<%- frontmatter.title %>',
        labels: ['Gitalk', 'Comment'],
        body:
          '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname || "123456789012345") %>',
      },
    }
  ],
  [
    '@vuepress/last-updated',
    {
      transformer: (timestamp, lang) => {
        return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
      }
    }
  ],
]