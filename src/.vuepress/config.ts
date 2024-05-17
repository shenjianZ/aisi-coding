import { defineUserConfig } from 'vuepress';
import theme from "./theme.js";
import {googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
export default defineUserConfig({
  base: "/aisi-coding/",

  lang: "zh-CN",
  title: "爱思文档",
  description: "美丽的事物，总是很棘手",
  head: [
    ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-2MZYS7X7RD' }],
    [
      'script',
      {},
      `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-2MZYS7X7RD');
      `,
    ],
  ],
  theme,
  plugins: [
  ],
  markdown:{
    headers:{
      level: [2,3,4]
    }
  },
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
