<template><div><div class="hint-container tip">
<p class="hint-container-title">Pinia</p>
<blockquote>
<p>集中式状态管理</p>
</blockquote>
</div>
<p>安装</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i pinia
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>main.ts</code></p>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>createApp<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span>
<span class="token comment">// 第一步：引入pinia</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>createPinia<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pinia'</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token comment">// 第二步：创建pinia</span>
<span class="token keyword">const</span> pinia <span class="token operator">=</span> <span class="token function">createPinia</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 第三步：安装pinia</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>pinia<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>Count.vue</code></p>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>{{ countStore.sum }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Count<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span>reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span>useCountStore<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/store/count'</span>

  <span class="token keyword">const</span> countStore <span class="token operator">=</span> <span class="token function">useCountStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="操作pinia的数据" tabindex="-1"><a class="header-anchor" href="#操作pinia的数据"><span>操作<code v-pre>pinia</code>的数据</span></a></h3>
<ul>
<li>直接修改数据</li>
<li><code v-pre>$patch({})</code>  传入一个对象，改变对应的变量</li>
<li><code v-pre>actions</code> 定义的函数进行修改</li>
</ul>
<h3 id="storetorefs" tabindex="-1"><a class="header-anchor" href="#storetorefs"><span>storeToRefs</span></a></h3>
<blockquote>
<p>拿到<code v-pre>store</code>中的属性的ref对象</p>
</blockquote>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>{{ countStore.sum }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Count<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span>reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span>useCountStore<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/store/count'</span>

  <span class="token keyword">const</span> countStore <span class="token operator">=</span> <span class="token function">useCountStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> <span class="token punctuation">{</span>sum<span class="token punctuation">,</span>sss<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">storeToRefs</span><span class="token punctuation">(</span>countStore<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getters" tabindex="-1"><a class="header-anchor" href="#getters"><span>getters</span></a></h3>
<h3 id="subscribe" tabindex="-1"><a class="header-anchor" href="#subscribe"><span>$subscribe</span></a></h3>
</div></template>


