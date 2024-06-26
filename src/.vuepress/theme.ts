import { hopeTheme} from "vuepress-theme-hope";
import navbar from "./navbar.js";
import { zhSidebarConfig } from "./sidebar";
// import {shikiPlugin} from "@vuepress/plugin-shiki";
export default hopeTheme({
  darkmode: undefined,
  rtl: false,
  blog: undefined,
  iconPrefix: "",
  navTitle: undefined,
  hostname: "https://blog.shenjianl.cn",

  author: {
    name: "shenjianZ",
    url: "https://blog.shenjianl.cn",
    email: "15202078626@163.com",
  },
  pageInfo: ["Author","Date","Original","Category","Tag","Word","ReadingTime"],
  // iconAssets: "fontawesome-with-brands",

  // iconAssets: "https://at.alicdn.com/t/c/font_4467301_ub43ycterd.css",
  logo: "/logo.svg",
  iconAssets: "fontawesome",

  repo: "shenjianZ/aisi-coding",

  docsDir: "src",
  docsBranch: "master",
  docsRepo: "shenjianZ/aisi-coding",
 // 全屏
  fullscreen: true,
  // 导航栏
  navbar,

  // 侧边栏
  sidebar :zhSidebarConfig,

  // 页脚
  // footer: "默认页脚",
  displayFooter: true,

  // 深色模式切换
  // darkmode: "switch",

  // 加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  hotReload: true,

  locales: {
    "/": {
      // navbar: zhNavbarConfig,
      // sidebar: zhSidebarConfig,
      navbar: navbar,
      sidebar: zhSidebarConfig,
      // footer:
      //     '主题使用 <a href="https://theme-hope.vuejs.press/zh/">VuePress Theme Hope</a> | <a href="https://mrhope.site/about/site.html" target="_blank">关于网站</a>',

      copyright: "© 2024-至今 shenjianZ",


      blog: {
        description: "大数据工程师，JAVA工程师，前端爱好者",
        timeline: "昨日不在",
        intro: "/intro.html",
        articlePerPage : 3,
        medias: {
          GitHub: "https://github.com/shenjianZ",
          Gitee: "https://gitee.com/mingjianyeying",
          BiliBili: "https://space.bilibili.com/443299209",
          Email: "mailto:15202078626@163.com",
          Gmail: "mailto:shenjianZLT@gmail.com",
          // QQ: "http://wpa.qq.com/msgrd?v=3&uin=1178522294&site=qq&menu=yes",
          // Qzone: "https://1178522294.qzone.qq.com/",

          // Zhihu: "https://www.zhihu.com/people/mister-hope",
          // Steam: "https://steamcommunity.com/id/Mr-Hope/",
          // Weibo: "https://weibo.com/misterhope",
          // Twitter: "https://twitter.com/Mister_Hope",
          // Telegram: "https://t.me/Mister_Hope",
        },
      },
    },

    // "/en/": {
    //   navbar: enNavbarConfig,
    //   sidebar: enSidebarConfig,
    //
    //   footer:
    //       'Theme by <a href="https://theme-hope.vuejs.press">vuepress-theme-hope</a>',
    //
    //   copyright: "MIT Licensed, © 2019-present Mr.Hope",
    //
    //   blog: {
    //     description:
    //         "VuePress project.ts member, front-end developer, studying for a master's degree in theoretical physics",
    //     intro: "/en/about/",
    //     medias: {
    //       Gmail: "mailto:mister-hope@outlook.com",
    //       Steam: "https://steamcommunity.com/id/Mr-Hope/",
    //       GitHub: "https://github.com/Mister-Hope",
    //       Twitter: "https://twitter.com/Mister_Hope",
    //       Telegram: "https://t.me/Mister_Hope",
    //     },
    //   },
    // },
  },
  // 在这里配置主题提供的插件
  plugins: {
    searchPro: true,
    comment:{
      provider: "Giscus",
      repo: "shenjianz/aisi-comment",
      repoId: "R_kgDOLzI2Bw",
      category: "Announcements",
      categoryId: "DIC_kwDOLzI2B84Ce8di",
      // 评论框的颜色
        // color: "#0176FF",
      // 评论框的背景颜色
      // backgroundColor: "#F6FBFF",
      // 评论框的边框颜色
      // borderColor: "#0176FF",
      // 评论框的阴影颜色
      // shadowColor: "#F6FBFF",
      // 评论框的阴影大小
      // shadowSize: 10,
      // 评论框的阴影模糊大小
      // shadowBlur: 10,
      // 评论框的阴影水平偏移
      // shadowOffsetX: 0,
      // 评论框的阴影垂直偏移
      // shadowOffsetY: 0,
    },
    copyright:{
      global: true,
      // 文章版权信息
      author: "shenjianZ",
      license: "MIT",
      triggerLength: 300,
      // disableCopy: true,
    },

    readingTime:{
      wordPerMinute: 150,
    },
    // 博客首页配置
    blog: true,
    //

    // prismjs: false,


    components: {
      components: ["Badge", "VPCard","ArtPlayer","CodePen","VidStack","Share","PDF","BiliBili","SiteInfo"],
    },

    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    mdEnhance: {
      alert: true,
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      hint: true,
      footnote: true,

      // 在启用之前安装 chart.js
      // chart: true,

      // insert component easily

      // 在启用之前安装 echarts
      echarts: true,

      // 在启用之前安装 flowchart.ts
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // 在启用之前安装 katex
      katex: true,

      // 在启用之前安装 mathjax-full
      // mathjax: true,

      // 在启用之前安装 mermaid
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // 在启用之前安装 reveal.js
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      // 在启用之前安装 @vue/repl
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },



    // pwa: {
    //   themeColor: "#5c92d1",
    //   cacheHTML: false,
    //   maxSize: 3072,
    //   apple: {
    //     icon: "/assets/icon/apple-touch-icon.png",
    //     statusBarColor: "white",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     name: "shenjianZ 的个人博客",
    //     short_name: "shenjianZ Blog",
    //     description: "shenjianZ 的个人博客",
    //     theme_color: "#5c92d1",
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "分类",
    //         short_name: "分类",
    //         icons: [
    //           {
    //             src: "/assets/icon/category-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //         url: "/category/",
    //         description: "文章分类分组",
    //       },
    //       {
    //         name: "标签",
    //         short_name: "标签",
    //         icons: [
    //           {
    //             src: "/assets/icon/tag-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //         url: "/tag/",
    //         description: "文章标签分组",
    //       },
    //       {
    //         name: "时间线",
    //         short_name: "时间线",
    //         icons: [
    //           {
    //             src: "/assets/icon/timeline-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //         url: "/timeline/",
    //         description: "时间线文章列表",
    //       },
    //       {
    //         name: "个人介绍",
    //         short_name: "个人介绍",
    //         icons: [
    //           {
    //             src: "/assets/icon/about-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //         url: "/about/",
    //         description: "个人介绍",
    //       },
    //     ],
    //   },
    // },
  }
});
