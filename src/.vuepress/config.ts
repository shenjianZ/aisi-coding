import { defineUserConfig } from 'vuepress';
import theme from "./theme.js";
import {googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
export default defineUserConfig({
  base: "/aisi-coding/",

  lang: "zh-CN",
  title: "爱思文档",
  description: "美丽的事物，总是很棘手",
  head: [
    // Google Analytics
    ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-2MZYS7X7RD' }],
    [
      'script',
      {},
      `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-2MZYS7X7RD');
        console.log('Google Analytics script loaded');
      `,
    ],
    // Baidu Analytics
    [
      'script',
      {},
      `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?8176022f1d4be778ca77323ca39f9abb";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
          console.log('Baidu Analytics script loaded');
        })();
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
