import comp from "D:/GitHubRepository/aisi-coding/src/.vuepress/.temp/pages/frontend/index.html.vue"
const data = JSON.parse("{\"path\":\"/frontend/\",\"title\":\"Frontend\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Frontend\",\"article\":false,\"feed\":false,\"sitemap\":false,\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://blog.shenjianl.cn/aisi-coding/frontend/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"爱思文档\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Frontend\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"shenjianZ\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Frontend\\\"}\"]]},\"headers\":[],\"git\":{},\"readingTime\":{\"minutes\":0.01,\"words\":1},\"filePathRelative\":null,\"excerpt\":\"\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
