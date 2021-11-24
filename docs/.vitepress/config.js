module.exports = {
  title: 'Hello VitePress',
  description: 'Just play around',
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
    ],
    // 所谓的 sidebar其实指的是整个网站的主要内容的路由
    // 而不是说是单个页面里面的标题
    sidebar: [
      { text: '初始配置', link: '/guide/' },
      { text: 'git', link: '/git/' },
    ],
  },
  // 重载 markdown-it 的配置
  /*https://v1.vuepress.vuejs.org/zh/config/#markdown-toc
  基于 vuePress 的 markdown 的扩展配置同样也适用于 vitePress */
  markdown: {
    toc: { includeLevel: [0, 1, 2] }
  }
}