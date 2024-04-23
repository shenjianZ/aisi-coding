import comp from "D:/JetBrainsToolProject/InteliJIDEA/aisi-blog/src/.vuepress/.temp/pages/project/project-template/backend.html.vue"
const data = JSON.parse("{\"path\":\"/project/project-template/backend.html\",\"title\":\"Backend解析\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Backend解析\",\"icon\":\"backend\",\"category\":\"project\",\"tag\":[\"backend\"],\"date\":\"2024-03-16T00:00:00.000Z\",\"description\":\"在vite.config.js ,导入Element-UI-plus 安装路由 index.js main.js 安装element-ui 按需导入 首先你需要安装unplugin-vue-components 和 unplugin-auto-import这两款插件 导入图标 登录界面编写 axios封装 先安装axios ElMessage无需导入 ...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/aisi-coding/project/project-template/backend.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"爱思文档\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Backend解析\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"在vite.config.js ,导入Element-UI-plus 安装路由 index.js main.js 安装element-ui 按需导入 首先你需要安装unplugin-vue-components 和 unplugin-auto-import这两款插件 导入图标 登录界面编写 axios封装 先安装axios ElMessage无需导入 ...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2024-03-17T03:56:04.000Z\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"shenjianZ\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"backend\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2024-03-16T00:00:00.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2024-03-17T03:56:04.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Backend解析\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2024-03-16T00:00:00.000Z\\\",\\\"dateModified\\\":\\\"2024-03-17T03:56:04.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"shenjianZ\\\",\\\"url\\\":\\\"https://shenjianl.cn\\\",\\\"email\\\":\\\"15202078626@163.com\\\"}]}\"]]},\"headers\":[{\"level\":4,\"title\":\"安装element-ui\",\"slug\":\"安装element-ui\",\"link\":\"#安装element-ui\",\"children\":[]},{\"level\":4,\"title\":\"按需导入\",\"slug\":\"按需导入\",\"link\":\"#按需导入\",\"children\":[]},{\"level\":4,\"title\":\"导入图标\",\"slug\":\"导入图标\",\"link\":\"#导入图标\",\"children\":[]},{\"level\":4,\"title\":\"登录界面编写\",\"slug\":\"登录界面编写\",\"link\":\"#登录界面编写\",\"children\":[]},{\"level\":4,\"title\":\"axios封装\",\"slug\":\"axios封装\",\"link\":\"#axios封装\",\"children\":[]},{\"level\":4,\"title\":\"退出登录及路由守卫\",\"slug\":\"退出登录及路由守卫\",\"link\":\"#退出登录及路由守卫\",\"children\":[]}],\"git\":{\"createdTime\":1710639776000,\"updatedTime\":1710647764000,\"contributors\":[{\"name\":\"shenjianZ\",\"email\":\"shenjianZLT@gmail.com\",\"commits\":2}]},\"readingTime\":{\"minutes\":2.37,\"words\":355},\"filePathRelative\":\"project/project-template/backend.md\",\"localizedDate\":\"2024年3月16日\",\"excerpt\":\"<p>在<code>vite.config.js</code> ,导入<code>Element-UI-plus</code></p>\\n<div class=\\\"language-javascript\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\"><pre class=\\\"language-javascript\\\"><code><span class=\\\"token keyword\\\">import</span> <span class=\\\"token punctuation\\\">{</span> fileURLToPath<span class=\\\"token punctuation\\\">,</span> <span class=\\\"token constant\\\">URL</span> <span class=\\\"token punctuation\\\">}</span> <span class=\\\"token keyword\\\">from</span> <span class=\\\"token string\\\">'node:url'</span>\\n\\n<span class=\\\"token keyword\\\">import</span> <span class=\\\"token punctuation\\\">{</span> defineConfig <span class=\\\"token punctuation\\\">}</span> <span class=\\\"token keyword\\\">from</span> <span class=\\\"token string\\\">'vite'</span>\\n<span class=\\\"token keyword\\\">import</span> vue <span class=\\\"token keyword\\\">from</span> <span class=\\\"token string\\\">'@vitejs/plugin-vue'</span>\\n<span class=\\\"token keyword\\\">import</span> AutoImport <span class=\\\"token keyword\\\">from</span> <span class=\\\"token string\\\">'unplugin-auto-import/vite'</span>\\n<span class=\\\"token keyword\\\">import</span> Components <span class=\\\"token keyword\\\">from</span> <span class=\\\"token string\\\">'unplugin-vue-components/vite'</span>\\n<span class=\\\"token keyword\\\">import</span> <span class=\\\"token punctuation\\\">{</span> ElementPlusResolver <span class=\\\"token punctuation\\\">}</span> <span class=\\\"token keyword\\\">from</span> <span class=\\\"token string\\\">'unplugin-vue-components/resolvers'</span>\\n\\n\\n<span class=\\\"token keyword\\\">export</span> <span class=\\\"token keyword\\\">default</span> <span class=\\\"token function\\\">defineConfig</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token literal-property property\\\">plugins</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token punctuation\\\">[</span>\\n    <span class=\\\"token function\\\">vue</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">,</span>\\n    <span class=\\\"token function\\\">AutoImport</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">{</span>\\n      <span class=\\\"token literal-property property\\\">resolvers</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token punctuation\\\">[</span><span class=\\\"token function\\\">ElementPlusResolver</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">]</span><span class=\\\"token punctuation\\\">,</span>\\n    <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">,</span>\\n    <span class=\\\"token function\\\">Components</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">{</span>\\n      <span class=\\\"token literal-property property\\\">resolvers</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token punctuation\\\">[</span><span class=\\\"token function\\\">ElementPlusResolver</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">]</span><span class=\\\"token punctuation\\\">,</span>\\n    <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">,</span>\\n  <span class=\\\"token punctuation\\\">]</span><span class=\\\"token punctuation\\\">,</span>\\n  <span class=\\\"token literal-property property\\\">resolve</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token literal-property property\\\">alias</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token punctuation\\\">{</span>\\n      <span class=\\\"token string-property property\\\">'@'</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token function\\\">fileURLToPath</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token keyword\\\">new</span> <span class=\\\"token class-name\\\">URL</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">'./src'</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token keyword\\\">import</span><span class=\\\"token punctuation\\\">.</span>meta<span class=\\\"token punctuation\\\">.</span>url<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">)</span>\\n    <span class=\\\"token punctuation\\\">}</span>\\n  <span class=\\\"token punctuation\\\">}</span>\\n<span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">)</span>\\n\\n</code></pre></div>\",\"autoDesc\":true}")
export { comp, data }
