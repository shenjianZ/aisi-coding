import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as i,b as s}from"./app-B74dJ_e7.js";const l={},a=s(`<p>在<code>vite.config.js</code> ,导入<code>Element-UI-plus</code></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>import { fileURLToPath, URL } from &#39;node:url&#39;

import { defineConfig } from &#39;vite&#39;
import vue from &#39;@vitejs/plugin-vue&#39;
import AutoImport from &#39;unplugin-auto-import/vite&#39;
import Components from &#39;unplugin-vue-components/vite&#39;
import { ElementPlusResolver } from &#39;unplugin-vue-components/resolvers&#39;


export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      &#39;@&#39;: fileURLToPath(new URL(&#39;./src&#39;, import.meta.url))
    }
  }
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装路由</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>npm install vue-router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>index.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>import {createRouter, createWebHashHistory} from &#39;vue-router&#39;
import {unauthorized} from &quot;@/net&quot;;

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: &#39;/&#39;,
            name: &#39;welcome&#39;,
            component: () =&gt; import(&#39;@/views/WelcomeView.vue&#39;),
            children: [
                {
                    path: &#39;&#39;,
                    name: &#39;welcome-login&#39;,
                    component: () =&gt; import(&#39;@/views/welcome/LoginPage.vue&#39;)
                },
                {
                    path: &#39;register&#39;,
                    name: &#39;welcome-register&#39;,
                    component: () =&gt; import(&#39;@/views/welcome/RegisterPage.vue&#39;)
                },
                {
                    path: &#39;reset&#39;,
                    name: &#39;welcome-reset&#39;,
                    component: () =&gt; import(&#39;@/views/welcome/ResetPage.vue&#39;)
                }

            ]
        },
        {
            path: &#39;/index&#39;,
            name: &#39;index&#39;,
            component: () =&gt; import(&#39;@/views/IndexView.vue&#39;)
        }
    ]
})
router.beforeEach((to, from, next) =&gt; {
    var isUnauthorized = unauthorized();
    if (to.name.startsWith(&#39;welcome&#39;) &amp;&amp; !isUnauthorized) {
        next(&#39;/index&#39;);
    } else if (to.fullPath.startsWith(&#39;/index&#39;) &amp;&amp; isUnauthorized) {
        next(&#39;/&#39;)
    } else {
        next();
    }

})
export default router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>main.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>import { createApp } from &#39;vue&#39;
import App from &#39;./App.vue&#39;
import router from &#39;./router&#39;
import axios from &quot;axios&quot;;

import &#39;element-plus/theme-chalk/dark/css-vars.css&#39;

axios.defaults.baseURL = &#39;https://shenjianl.cn:4566&#39;

const app = createApp(App)

app.use(router)

app.mount(&#39;#app&#39;)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="安装element-ui" tabindex="-1"><a class="header-anchor" href="#安装element-ui"><span>安装element-ui</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code># 选择一个你喜欢的包管理器

# NPM
$ npm install element-plus --save

# Yarn
$ yarn add element-plus

# pnpm
$ pnpm install element-plus
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="按需导入" tabindex="-1"><a class="header-anchor" href="#按需导入"><span>按需导入</span></a></h4><p>首先你需要安装<code>unplugin-vue-components</code> 和 <code>unplugin-auto-import</code>这两款插件</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>npm install -D unplugin-vue-components unplugin-auto-import
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>// vite.config.ts
import { defineConfig } from &#39;vite&#39;
import AutoImport from &#39;unplugin-auto-import/vite&#39;
import Components from &#39;unplugin-vue-components/vite&#39;
import { ElementPlusResolver } from &#39;unplugin-vue-components/resolvers&#39;

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="导入图标" tabindex="-1"><a class="header-anchor" href="#导入图标"><span>导入图标</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>import {User, Lock} from &#39;@element-plus/icons-vue&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="登录界面编写" tabindex="-1"><a class="header-anchor" href="#登录界面编写"><span>登录界面编写</span></a></h4><h4 id="axios封装" tabindex="-1"><a class="header-anchor" href="#axios封装"><span>axios封装</span></a></h4><p>先安装<code>axios</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>npm install axios
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>ElMessage无需导入</p><p>配置 <code>baseurl</code></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>axios.defaults.baseURL = &#39;http://127.0.0.1:4566&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="退出登录及路由守卫" tabindex="-1"><a class="header-anchor" href="#退出登录及路由守卫"><span>退出登录及路由守卫</span></a></h4>`,24),d=[a];function t(r,v){return n(),i("div",null,d)}const m=e(l,[["render",t],["__file","backend.html.vue"]]),u=JSON.parse(`{"path":"/project/project-template/backend.html","title":"Backend解析","lang":"zh-CN","frontmatter":{"title":"Backend解析","icon":"backend","category":"project","tag":["backend"],"date":"2024-03-16T00:00:00.000Z","description":"在vite.config.js ,导入Element-UI-plus 安装路由 index.js main.js 安装element-ui 按需导入 首先你需要安装unplugin-vue-components 和 unplugin-auto-import这两款插件 导入图标 登录界面编写 axios封装 先安装axios ElMessage无需导入 ...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/project/project-template/backend.html"}],["meta",{"property":"og:site_name","content":"爱思文档"}],["meta",{"property":"og:title","content":"Backend解析"}],["meta",{"property":"og:description","content":"在vite.config.js ,导入Element-UI-plus 安装路由 index.js main.js 安装element-ui 按需导入 首先你需要安装unplugin-vue-components 和 unplugin-auto-import这两款插件 导入图标 登录界面编写 axios封装 先安装axios ElMessage无需导入 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-17T01:42:56.000Z"}],["meta",{"property":"article:author","content":"shenjianZ"}],["meta",{"property":"article:tag","content":"backend"}],["meta",{"property":"article:published_time","content":"2024-03-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-17T01:42:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Backend解析\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-16T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-17T01:42:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"shenjianZ\\",\\"url\\":\\"https://shenjianl.cn\\"}]}"]]},"headers":[{"level":4,"title":"安装element-ui","slug":"安装element-ui","link":"#安装element-ui","children":[]},{"level":4,"title":"按需导入","slug":"按需导入","link":"#按需导入","children":[]},{"level":4,"title":"导入图标","slug":"导入图标","link":"#导入图标","children":[]},{"level":4,"title":"登录界面编写","slug":"登录界面编写","link":"#登录界面编写","children":[]},{"level":4,"title":"axios封装","slug":"axios封装","link":"#axios封装","children":[]},{"level":4,"title":"退出登录及路由守卫","slug":"退出登录及路由守卫","link":"#退出登录及路由守卫","children":[]}],"git":{"createdTime":1710639776000,"updatedTime":1710639776000,"contributors":[{"name":"shenjianZ","email":"shenjianZLT@gmail.com","commits":1}]},"readingTime":{"minutes":1.18,"words":355},"filePathRelative":"project/project-template/backend.md","localizedDate":"2024年3月16日","excerpt":"<p>在<code>vite.config.js</code> ,导入<code>Element-UI-plus</code></p>\\n<div class=\\"language-javascript\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code>import { fileURLToPath, URL } from 'node:url'\\n\\nimport { defineConfig } from 'vite'\\nimport vue from '@vitejs/plugin-vue'\\nimport AutoImport from 'unplugin-auto-import/vite'\\nimport Components from 'unplugin-vue-components/vite'\\nimport { ElementPlusResolver } from 'unplugin-vue-components/resolvers'\\n\\n\\nexport default defineConfig({\\n  plugins: [\\n    vue(),\\n    AutoImport({\\n      resolvers: [ElementPlusResolver()],\\n    }),\\n    Components({\\n      resolvers: [ElementPlusResolver()],\\n    }),\\n  ],\\n  resolve: {\\n    alias: {\\n      '@': fileURLToPath(new URL('./src', import.meta.url))\\n    }\\n  }\\n})\\n\\n</code></pre></div>","autoDesc":true}`);export{m as comp,u as data};
