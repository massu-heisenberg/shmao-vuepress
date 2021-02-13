module.exports = {
    logo: "/avatar.png", // 左上角logo
    lastUpdated: 'Last Updated', // string | boolean
    smoothScroll: true,
    author: 'shmao',
    // 项目开始时间
    startYear: '2021',
    nav: [
        // 导航栏配置
        { text: "首页", link: "/" },
        { text: "导航", link: "/guide/" },
        {
            text: "博客",
            items: [
                {
                    text: "Javascript", items: [
                        { text: '什么是面向对象', link: "/docs/javascript/oop/" },
                        { text: "三大特性", link: "/docs/javascript/oop/feature/" },
                        { text: "面向切面", link: "/docs/javascript/oop/aop/" },
                    ]
                },
                { text: "Vue", link: "/docs/vue/" },
                { text: "PWA", link: "/docs/pwa/" },
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
    sidebarDepth: 2,
    // sidebar: [
    //   {
    //     title: "Guide",
    //     collapsable: false,
    //     children: ["/guide/"],
    //   },
    // ],
}