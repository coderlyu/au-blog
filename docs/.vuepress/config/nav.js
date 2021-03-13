module.exports = [
  { text: '首页', link: '/' },
  {
    text: '前端总结',
    link: '/web/',
    items: [
      {
        text: 'Javascript',
        items: [
          { text: 'js基础', link: '/pages/ccbe33/' },
          { text: '构造函数和原型', link: '/pages/6abe86/' },
          { text: 'cookie和session', link: '/pages/255011/' },
          { text: 'Object.create(null)和{}', link: '/pages/6abety/' },
        ]
      },
      {
        text: '框架',
        items: [
          { text: 'Vue', link: '/pages/bd32c8/' },
          { text: 'react基础入门', link: '/pages/eb7fff/' }
        ]
      },
      {
        text: '其它',
        items: [
          { text: 'http协议', link: '/pages/58f0cb/' },
          { text: '跨域问题总结', link: '/pages/42e039/' },
          { text: 'Nginx', link: '/pages/667146/' },
        ]
      }
    ]
  },
  {
    text: '学习笔记',
    link: '/note/',
    items: [
      { text: '分析Promise实现', link: '/pages/82005c/' }
    ],
  },
  {
    text: '项目积累',
    link: '/project/',
    items: [
      { text: '项目总结', link: '/pages/00f068/' },
      { text: 'node中使用crypto生成token', link: '/pages/dbadd2/' }
    ],
  },
  {
    text: '后端',
    items: [
      { text: 'mongoose基础', link: '/pages/e84bbd/' },
      { text: 'Multer文件上传中间件的使用', link: '/pages/71e997/' },
    ]
  },
  {
    text: '面试',
    items: [
      {
        text: 'Javascript',
        items: [
          { text: '浅谈两数全等',  link: '/pages/e11b6a/' }
        ]
      }
    ]
  },
  {
    text: '外链',
    items: [
      { text: 'GitHub', link: 'https://github.com/coderlyu' },
      { text: '知乎', link: 'https://www.zhihu.com/people/163200' }
    ]
  }
]