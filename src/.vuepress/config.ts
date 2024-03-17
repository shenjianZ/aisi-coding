import { defineUserConfig } from "vuepress";
import theme from "./theme.js";


export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "爱思文档",
  description: "美丽的事物，总是很棘手",
  plugins: [
  ],
  theme,
  markdown:{
    headers:{
      level: [2,3,4]
    }
  },
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
