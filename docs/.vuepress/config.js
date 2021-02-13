const themeConfig = require('./config/theme');
module.exports = {
  title: "毛苏徽的博客空间",
  head: [
    // 注入到当前页面的 HTML <head> 中的标签
    ["link", { rel: "icon", href: "/avatar.png" }], // 增加一个自定义的 favicon(网页标签的图标)
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['meta', { name: 'author', content: 'shmao' }],
    ['meta', { name: 'theme-color', content: '#42b983' }],
  ],
  themeConfig,
  plugins: [
    //https://www.npmjs.com/package/@vuepress-reco/vuepress-plugin-bulletin-popover
    // https://l1nsn0w.gitee.io/blogs/vp-set.html#%E8%BF%99%E9%87%8C%E8%B4%B4%E5%87%BA%E6%88%91%E7%9A%84config-js
    [
      '@vuepress-reco/vuepress-plugin-bulletin-popover', {
        width: '275px',
        title: '公告',
        body: [
          {
            type: 'title',
            content: '欢迎交流 🎉🎉🎉',
            style: 'text-align: center;'
          },
          {
            type: 'text',
            content: "QQ: 3242203857@qq.com",
            style: 'text-align: center;'
          },
          {
            type: 'text',
            content: "Gmail: maosuhui0428@gmail.com",
            style: 'text-align: center;'
          }
        ],
        footer: [
          // {
          //   type: 'button',
          //   text: '打赏',
          //   link: '/'
          // }
        ]
      }
    ],
    // "vuepress-plugin-cat",
    [
      'vuepress-plugin-helper-live2d', {
        // 是否开启控制台日志打印(default: false)
        log: false,
        live2d: {
          // 是否启用(关闭请设置为false)(default: true)
          enable: true,
          // 模型名称(default: hibiki)>>>取值请参考：
          // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
          model: 'hibiki',
          display: {
            position: "right", // 显示位置：left/right(default: 'right')
            width: 135, // 模型的长度(default: 135)
            height: 300, // 模型的高度(default: 300)
            hOffset: 65, //  水平偏移(default: 65)
            vOffset: 0, //  垂直偏移(default: 0)
          },
          mobile: {
            show: false // 是否在移动设备上显示(default: false)
          },
          react: {
            opacity: 0.8 // 模型透明度(default: 0.8)
          }
        }
      }
    ],
    ['@vuepress/back-to-top', true],
    ['@vuepress/active-header-links', {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor'
    }]
  ]
};
