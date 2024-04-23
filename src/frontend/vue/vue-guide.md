---
title: Vue3
icon: vue
order: 1
category: vue
tag:
  - vue
  - guide
date: 2024-04-23
---


#### 创建`App`工程

::: info 


> `npm create vue@latest`

```shell
## 1.创建命令
npm create vue@latest

## 2.具体配置
## 配置项目名称
√ Project name: vue3_test
## 是否添加TypeScript支持
√ Add TypeScript?  Yes
## 是否添加JSX支持
√ Add JSX Support?  No
## 是否添加路由环境
√ Add Vue Router for Single Page Application development?  No
## 是否添加pinia环境
√ Add Pinia for state management?  No
## 是否添加单元测试
√ Add Vitest for Unit Testing?  No
## 是否添加端到端测试方案
√ Add an End-to-End Testing Solution? » No
## 是否添加ESLint语法检查
√ Add ESLint for code quality?  Yes
## 是否添加Prettiert代码格式化
√ Add Prettier for code formatting?  No
```

:::

- `vite`项目中 ,`index.html`是项目的入口文件
- 加载`index.html`后，`vite`解析`<script type="module" src="/src/main.ts"></script>`
- `vue3`通过`createApp()`创建一个应用实例