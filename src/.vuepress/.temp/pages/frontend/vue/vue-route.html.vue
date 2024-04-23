<template><div><h3 id="路由" tabindex="-1"><a class="header-anchor" href="#路由"><span>路由</span></a></h3>
<blockquote>
<p>实现SPA应用的切换</p>
<ul>
<li><code v-pre>components</code> 放置一般组件 ，<code v-pre>pages</code>、<code v-pre>views</code>放置路由组件</li>
<li>切换路由时，原组件只是 卸载 ，组件实例仍然存在，需要的时候重新 挂载</li>
</ul>
</blockquote>
<h4 id="简单实例" tabindex="-1"><a class="header-anchor" href="#简单实例"><span>简单实例</span></a></h4>
<p><code v-pre>router/index.ts</code></p>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>main.ts</code></p>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>
<p>router-link的写法
字符串写法，对象写法</p>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>/views<span class="token punctuation">'</span></span><span class="token punctuation">></span></span>views<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span>
&lt;router-link :to={path:'/views'}>views<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span>
&lt;router-link :to={name:'views'}>views<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="路由的工作模式" tabindex="-1"><a class="header-anchor" href="#路由的工作模式"><span>路由的工作模式</span></a></h4>
<ol>
<li>
<p><code v-pre>history</code> 模式</p>
<blockquote>
<ul>
<li>URL中不带<code v-pre>#</code>，项目上线时需要额外处理路径问题，否则<code v-pre>404</code></li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createrRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
   history<span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>需要<code v-pre>nginx</code>配置</li>
</ul>
<div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre v-pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
   <span class="token directive"><span class="token keyword">root</span> html</span><span class="token punctuation">;</span>
   <span class="token directive"><span class="token keyword">index</span> index.html</span><span class="token punctuation">;</span>
   <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$url</span> <span class="token variable">$url</span>/ /index.html</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
</li>
<li>
<p><code v-pre>hash</code>模式</p>
<blockquote>
<p>URL中带<code v-pre>#</code>，项目上线时不需要额外处理路径问题</p>
<p><code v-pre>SEO</code>优化较差</p>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createrRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
history<span class="token operator">:</span> <span class="token function">createWebHashHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
</li>
</ol>
<h4 id="路由命名" tabindex="-1"><a class="header-anchor" href="#路由命名"><span>路由命名</span></a></h4>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    history<span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    routes<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">'view'</span><span class="token punctuation">,</span>
            path<span class="token operator">:</span> <span class="token string">'/view'</span><span class="token punctuation">,</span>
            <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/pages/view.vue'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="路由嵌套" tabindex="-1"><a class="header-anchor" href="#路由嵌套"><span>路由嵌套</span></a></h4>
<blockquote>
<p>在<code v-pre>children</code> 中添加 路由 ，子路由<code v-pre>path</code>不需要加 <code v-pre>/</code></p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    history<span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    routes<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">'view'</span><span class="token punctuation">,</span>
            path<span class="token operator">:</span> <span class="token string">'/view'</span><span class="token punctuation">,</span>
            <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/pages/view.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            children<span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    name<span class="token operator">:</span> <span class="token string">'detail'</span><span class="token punctuation">,</span>
                    path<span class="token operator">:</span> <span class="token string">'detail'</span><span class="token punctuation">,</span>
                    <span class="token function-variable function">component</span><span class="token operator">:</span>  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/pages/Detail.vue'</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="路由传参" tabindex="-1"><a class="header-anchor" href="#路由传参"><span>路由传参</span></a></h4>
<h5 id="query参数" tabindex="-1"><a class="header-anchor" href="#query参数"><span>query参数</span></a></h5>
<p>原路由组件
写法一：</p>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>/view?key=value<span class="token punctuation">'</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>写法二：</p>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code>&lt;router-link :to={
             	 name: view,
                 path: '/view',
                 query:{
					key: value
                 }
             }>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>目标路由组件</p>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>useRoute<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span>
<span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token function">toRef</span><span class="token punctuation">(</span>route<span class="token punctuation">,</span><span class="token string">'query'</span><span class="token punctuation">)</span>  <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 拿到key<span class="token operator">-</span>value对象 <span class="token operator">--</span><span class="token operator">></span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="params参数" tabindex="-1"><a class="header-anchor" href="#params参数"><span>params参数</span></a></h5>
<blockquote>
<p>需要在<code v-pre>router/index.ts</code>声明占位符</p>
<p>可以参加 <code v-pre>? </code>表示可选路径参数</p>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code>children<span class="token operator">:</span> <span class="token punctuation">[</span>
 <span class="token punctuation">{</span>
     name<span class="token operator">:</span> <span class="token string">'detail'</span><span class="token punctuation">,</span>
     path<span class="token operator">:</span> <span class="token string">'detail/:id/:title/:content?'</span><span class="token punctuation">,</span>  <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 可以参加 <span class="token operator">?</span> 表示可选路径参数 <span class="token operator">--</span><span class="token operator">></span>
     <span class="token function-variable function">component</span><span class="token operator">:</span>  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/pages/Detail.vue'</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    history<span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    routes<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">'view'</span><span class="token punctuation">,</span>
            path<span class="token operator">:</span> <span class="token string">'/view'</span><span class="token punctuation">,</span>
            <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/pages/view.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            children<span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    name<span class="token operator">:</span> <span class="token string">'detail'</span><span class="token punctuation">,</span>
                    path<span class="token operator">:</span> <span class="token string">'detail/:id/:title/:content?'</span><span class="token punctuation">,</span>  <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 可以参加 <span class="token operator">?</span> 表示可选路径参数 <span class="token operator">--</span><span class="token operator">></span>
                    <span class="token function-variable function">component</span><span class="token operator">:</span>  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/pages/Detail.vue'</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原路由组件
写法一：</p>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>/view/1/java<span class="token punctuation">'</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>写法二：</p>
<blockquote>
<p><code v-pre>path: '/view'</code> 不支持的写法，仅能使用路由的别名</p>
<p><code v-pre>params</code>不能传递数组</p>
</blockquote>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{</span>
             	 <span class="token attr-name"><span class="token namespace">name:</span></span> <span class="token attr-name">view,</span>
                 <span class="token attr-name"><span class="token namespace">params:</span>{</span>
					<span class="token attr-name"><span class="token namespace">id:</span></span> <span class="token attr-name">1,</span>
             		<span class="token attr-name"><span class="token namespace">title:</span></span> <span class="token attr-name">'java'</span>
                 <span class="token attr-name">}</span>
             <span class="token attr-name">}</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>目标路由组件</p>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>useRoute<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span>
<span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token function">toRef</span><span class="token punctuation">(</span>route<span class="token punctuation">,</span><span class="token string">'params'</span><span class="token punctuation">)</span>  <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 拿到key<span class="token operator">-</span>value对象 <span class="token operator">--</span><span class="token operator">></span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="路由props配置" tabindex="-1"><a class="header-anchor" href="#路由props配置"><span>路由props配置</span></a></h4>
<h5 id="一-配合params使用" tabindex="-1"><a class="header-anchor" href="#一-配合params使用"><span>（一）配合<code v-pre>params</code>使用</span></a></h5>
<blockquote>
<p>需要配合<code v-pre>params</code>路径传参使用，将<code v-pre>params</code>参数作为<code v-pre>props</code>传给目标路由组件</p>
<p><code v-pre>props: true</code> 添加个参数</p>
</blockquote>
<p><code v-pre>router/index.ts</code></p>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    history<span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    routes<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">'view'</span><span class="token punctuation">,</span>
            path<span class="token operator">:</span> <span class="token string">'/view'</span><span class="token punctuation">,</span>
            <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/pages/view.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            children<span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    name<span class="token operator">:</span> <span class="token string">'detail'</span><span class="token punctuation">,</span>
                    path<span class="token operator">:</span> <span class="token string">'detail/:id/:title/:content?'</span><span class="token punctuation">,</span>  <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 可以参加 <span class="token operator">?</span> 表示可选路径参数 <span class="token operator">--</span><span class="token operator">></span>
                    <span class="token function-variable function">component</span><span class="token operator">:</span>  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/pages/Detail.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    props<span class="token operator">:</span> <span class="token boolean">true</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原组件中的<code v-pre>params</code>传参方式有 <code v-pre>to</code> 和<code v-pre>:to</code>两种方式，与上文一致</p>
<p>目标组件需要使用这些<code v-pre>props</code>参数</p>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>{{id}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>{{title}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>{{content}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token function">defineprops</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'id'</span><span class="token punctuation">,</span><span class="token string">'title'</span><span class="token punctuation">,</span><span class="token string">'content'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="二-配合query使用" tabindex="-1"><a class="header-anchor" href="#二-配合query使用"><span>（二）配合<code v-pre>query</code>使用</span></a></h5>
<blockquote>
<p>需要配合<code v-pre>query</code>路径传参使用，将<code v-pre>query</code>参数作为<code v-pre>props</code>传给目标路由组件</p>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token function">props</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span>
<span class="token keyword">return</span> route<span class="token punctuation">.</span>query 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<p>函数式的写法</p>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    history<span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    routes<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">'view'</span><span class="token punctuation">,</span>
            path<span class="token operator">:</span> <span class="token string">'/view'</span><span class="token punctuation">,</span>
            <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/pages/view.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            children<span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    name<span class="token operator">:</span> <span class="token string">'detail'</span><span class="token punctuation">,</span>
                    path<span class="token operator">:</span> <span class="token string">'detail/:id/:title/:content?'</span><span class="token punctuation">,</span>  <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 可以参加 <span class="token operator">?</span> 表示可选路径参数 <span class="token operator">--</span><span class="token operator">></span>
                    <span class="token function-variable function">component</span><span class="token operator">:</span>  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/pages/Detail.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token function">props</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
                        <span class="token keyword">return</span> route<span class="token punctuation">.</span>query 
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对象写法</p>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    history<span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    routes<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">'view'</span><span class="token punctuation">,</span>
            path<span class="token operator">:</span> <span class="token string">'/view'</span><span class="token punctuation">,</span>
            <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/pages/view.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            children<span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    name<span class="token operator">:</span> <span class="token string">'detail'</span><span class="token punctuation">,</span>
                    path<span class="token operator">:</span> <span class="token string">'detail/:id/:title/:content?'</span><span class="token punctuation">,</span>  <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 可以参加 <span class="token operator">?</span> 表示可选路径参数 <span class="token operator">--</span><span class="token operator">></span>
                    <span class="token function-variable function">component</span><span class="token operator">:</span>  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/pages/Detail.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    props<span class="token operator">:</span> <span class="token punctuation">{</span>
                        id<span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
                        title<span class="token operator">:</span> <span class="token string">'java'</span><span class="token punctuation">,</span>
                        content<span class="token operator">:</span> <span class="token string">''</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="replace属性" tabindex="-1"><a class="header-anchor" href="#replace属性"><span>replace属性</span></a></h4>
<blockquote>
<p><code v-pre>replace</code> 是在当前浏览器的导航历史中直接覆盖上一个路由，这意味着浏览器无法返回上一个页面</p>
<p>路由默认是<code v-pre>push</code> ，不会覆盖上一个路由统一，可通过浏览器左上方的箭头进行切换</p>
</blockquote>
<h4 id="编程式路由" tabindex="-1"><a class="header-anchor" href="#编程式路由"><span>编程式路由</span></a></h4>
<blockquote>
<p><code v-pre>router</code>对象进行操作路由</p>
<p>声明式路由使用 <code v-pre>router-view</code> 进行路由的跳转</p>
</blockquote>
<p>字符串写法</p>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
   <span class="token keyword">import</span> <span class="token punctuation">{</span>useRouter<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span>
   <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>router.push("/news")<span class="token punctuation">'</span></span><span class="token punctuation">></span></span>前往<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>params</code> 对象写法</p>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> <span class="token punctuation">{</span>useRouter<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span>
    <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>router.push({
             	 name: view,
                 params:{
					id: 1,
             		title: 'java'
                 }
             })<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        前往
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>query </code>对象写法</p>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> <span class="token punctuation">{</span>useRouter<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span>
    <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>router.push({
             	 name: view,
                 path: '/view',
                 query:{
					id: 1,
             		title: 'java'
                 }
             })<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        前往
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="路由重定向" tabindex="-1"><a class="header-anchor" href="#路由重定向"><span>路由重定向</span></a></h4>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    history<span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    routes<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            path<span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span>
            redirect<span class="token operator">:</span> <span class="token string">'/home'</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


