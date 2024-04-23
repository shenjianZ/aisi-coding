<template><div><h4 id="创建app工程" tabindex="-1"><a class="header-anchor" href="#创建app工程"><span>创建<code v-pre>App</code>工程</span></a></h4>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<blockquote>
<p><code v-pre>npm create vue@latest</code></p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token comment">## 1.创建命令</span>
<span class="token function">npm</span> create vue@latest

<span class="token comment">## 2.具体配置</span>
<span class="token comment">## 配置项目名称</span>
√ Project name: vue3_test
<span class="token comment">## 是否添加TypeScript支持</span>
√ Add TypeScript?  Yes
<span class="token comment">## 是否添加JSX支持</span>
√ Add JSX Support?  No
<span class="token comment">## 是否添加路由环境</span>
√ Add Vue Router <span class="token keyword">for</span> Single Page Application development?  No
<span class="token comment">## 是否添加pinia环境</span>
√ Add Pinia <span class="token keyword">for</span> state management?  No
<span class="token comment">## 是否添加单元测试</span>
√ Add Vitest <span class="token keyword">for</span> Unit Testing?  No
<span class="token comment">## 是否添加端到端测试方案</span>
√ Add an End-to-End Testing Solution? » No
<span class="token comment">## 是否添加ESLint语法检查</span>
√ Add ESLint <span class="token keyword">for</span> code quality?  Yes
<span class="token comment">## 是否添加Prettiert代码格式化</span>
√ Add Prettier <span class="token keyword">for</span> code formatting?  No
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<ul>
<li><code v-pre>vite</code>项目中 ,<code v-pre>index.html</code>是项目的入口文件</li>
<li>加载<code v-pre>index.html</code>后，<code v-pre>vite</code>解析<code v-pre>&lt;script type=&quot;module&quot; src=&quot;/src/main.ts&quot;&gt;&lt;/script&gt;</code></li>
<li><code v-pre>vue3</code>通过<code v-pre>createApp()</code>创建一个应用实例</li>
</ul>
</div></template>


