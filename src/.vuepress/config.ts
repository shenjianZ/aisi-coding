import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import {shikiPlugin} from "@vuepress/plugin-shiki";


export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "爱思文档",
  description: "美丽的事物，总是很棘手",
  plugins: [
    shikiPlugin({
      themes: {
        light: "github-light",
        dark: "night-owl",
      },
    })
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
