module.exports = {
  base: '/guide/',
  title: '学习资料整理',
  description: 'including knowledge road',
  themeConfig: {
    nav: createNav(),
    // 所谓的 sidebar其实指的是整个网站的主要内容的路由
    // 而不是说是单个页面里面的标题
    sidebar: createSidebar()
  },
  // 重载 markdown-it 的配置
  /*https://v1.vuepress.vuejs.org/zh/config/#markdown-toc
  基于 vuePress 的 markdown 的扩展配置同样也适用于 vitePress */
  markdown: {
    toc: { includeLevel: [0, 1, 2, 3] }
  }
}

// 创建头部导航栏
function createNav() {
  return [
    {
      text: '学习资源',
      items: [
        {
          text: 'vitepress 搭建',
          link: '/guide/'
        },
        {
          text: 'git',
          link: '/guide/git'
        },
        {
          text: 'node环境配置',
          link: '/guide/node'
        },
        {
          text: 'typescript',
          link: '/guide/typescript'
        }
      ]
    },
    {
      text: '学习问题',
      link: '/guide/question'
    }
  ]
}

// 创建内部具体侧边栏
function createSidebar() {
  return {
    '/guide/': [
      {
        text: '学习资料',
        children: [
          {
            text: 'vitepress 搭建流程',
            link: '/guide/'
          },
          {
            text: 'git',
            link: '/guide/git'
          },
          {
            text: 'node环境配置',
            link: '/guide/node'
          },
          {
            text: 'typescript',
            link: '/guide/typescript'
          },
          {
            text: '项目实训',
            link: '/guide/project'
          }
        ]
      }
    ],
    '/guide/question': [
      {
        text: '学习问题'
      }
    ]
  }
}