module.exports = {
  title: "欢迎来到ShMao的博客空间",
  head: [
    // 注入到当前页面的 HTML <head> 中的标签
    ["link", { rel: "icon", href: "/avatar.png" }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  themeConfig: {
    logo: "/avatar.png", // 左上角logo
    nav: [
      // 导航栏配置
      { text: "首页", link: "/" },
      { text: "导航", link: "/guide/" },
      {
        text: "技术文档",
        items: [
          { text: "Vue", link: "/docs/vue/" },
          { text: "Javascript", link: "/docs/javascript/" },
        ],
      },
      {
        text: "语言",
        items: [
          { text: "中文", link: "/language/chinese" },
          { text: "英文", link: "/language/english" },
        ],
      },
      { text: "GitHub", link: "https://github.com/shmao-0428" },
    ],
    sidebar: "auto", // 侧边栏配置
    // sidebarDepth: 2,
    // sidebar: [
    //   {
    //     title: "Guide",
    //     collapsable: false,
    //     children: ["/guide/"],
    //   },
    // ],
  },
};
