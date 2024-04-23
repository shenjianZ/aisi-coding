<template><div><h2 id="vue3核心语法" tabindex="-1"><a class="header-anchor" href="#vue3核心语法"><span>Vue3核心语法</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">OptionsAPI 与 CompositionAPI</p>
<ul>
<li>Vue2 是 OptionsAPI (选项式、配置式)风格</li>
<li>Vue3是CompositionAPI (组合式)风格</li>
</ul>
</div>
<h3 id="setup" tabindex="-1"><a class="header-anchor" href="#setup"><span>setup</span></a></h3>
<ul>
<li><code v-pre>setup</code>是一个配置项，在<code v-pre>script</code>标签中 使用</li>
<li><code v-pre>setup</code>中 <code v-pre>this</code>是 <code v-pre>undefined</code> ,弱化了<code v-pre>this</code></li>
<li><code v-pre>setup</code>的执行时间在<code v-pre>beforecreate()</code> 之前</li>
</ul>
<blockquote>
<p>面试重点：  <strong>data、methods和setup的关系</strong></p>
<ul>
<li><code v-pre>data()</code>、<code v-pre>methods()</code>是在<code v-pre>setup()</code>之后执行的，这意味着他们两个可以读取到<code v-pre>setup()</code>的变量和函数</li>
</ul>
</blockquote>
<p><code v-pre>setup</code> 语法糖</p>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>setup</code>写组件名称的插件</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i vite-plugin-vue-setup-extend <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在<code v-pre>vite.config.ts</code> 进行引入</p>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite'</span>
<span class="token keyword">import</span> VueSetupExtend <span class="token keyword">from</span> <span class="token string">'vite-plugin-vue-setup-extend'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token function">VueSetupExtend</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ref" tabindex="-1"><a class="header-anchor" href="#ref"><span>ref</span></a></h3>
<blockquote>
<p><code v-pre>ref</code> 创建基本类型的响应式数据 ,<code v-pre>RefImpl</code>对象</p>
<ul>
<li>使用 <code v-pre>.value</code> 访问 变量</li>
</ul>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">,</span>  <span class="token keyword">type</span> <span class="token class-name">Ref</span><span class="token punctuation">,</span>  <span class="token keyword">type</span> <span class="token class-name">UnwrapRef</span><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">let</span> age<span class="token operator">:</span> Ref<span class="token operator">&lt;</span>UnwrapRef<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">>></span> <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span>
age<span class="token punctuation">.</span>value<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">20</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><code v-pre>ref</code>创建对象类型的响应式数据,<code v-pre>RefImpl</code>对象</p>
<ul>
<li>使用 <code v-pre>.value</code> 访问 变量</li>
</ul>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span><span class="token keyword">type</span> <span class="token class-name">Ref</span><span class="token punctuation">,</span> ref<span class="token punctuation">,</span> <span class="token keyword">type</span> <span class="token class-name">UnwrapNestedRefs</span><span class="token punctuation">,</span> <span class="token keyword">type</span> <span class="token class-name">UnwrapRef</span><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">let</span> obj<span class="token operator">:</span> Ref<span class="token operator">&lt;</span>UnwrapRef<span class="token operator">&lt;</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> age<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token operator">>></span> <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">'shenjianZ'</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
obj<span class="token punctuation">.</span>value<span class="token punctuation">.</span>name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">'poop'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="reactive" tabindex="-1"><a class="header-anchor" href="#reactive"><span>reactive</span></a></h3>
<blockquote>
<p><code v-pre>reactive</code>创建对象类型的响应式数据,<code v-pre>Proxy()</code>对象</p>
<ul>
<li>直接访问变量</li>
</ul>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>reactive<span class="token punctuation">,</span> <span class="token keyword">type</span> <span class="token class-name">UnwrapNestedRefs</span><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">let</span> obj<span class="token operator">:</span> UnwrapNestedRefs<span class="token operator">&lt;</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> age<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">'shenjianZ'</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
obj<span class="token punctuation">.</span>name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">'poop'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ref-与-reactive" tabindex="-1"><a class="header-anchor" href="#ref-与-reactive"><span>ref 与 reactive</span></a></h3>
<blockquote>
<ul>
<li><code v-pre>ref</code>数据使用<code v-pre>.value</code>拿到的其实是一个<code v-pre>reactive</code>对象，底层是一个 <code v-pre>Proxy()</code>对象</li>
<li><code v-pre>ref</code> 数据|直接赋值不会失去响应式，<code v-pre>reactive</code> 数据直接赋值会失去响应式，可以使用<code v-pre>Object.assign(source,target)</code>去整体替换,后边的对象属性分配给前边的对象</li>
<li><code v-pre>reactive</code>定义的响应式数据是“深层次”的，这意味着 <code v-pre>ref</code>定义的数据也会是如此</li>
</ul>
</blockquote>
<p>使用的原则：</p>
<blockquote>
<ol>
<li>对于基本数据类型 ，用 <code v-pre>ref</code></li>
<li>对于对象类型，层级不深， 用 <code v-pre>ref、reactive</code> 均可</li>
<li>对于对象类型，层级较深，用 <code v-pre>reactive</code></li>
</ol>
</blockquote>
<h3 id="toref、torefs" tabindex="-1"><a class="header-anchor" href="#toref、torefs"><span>toRef、toRefs</span></a></h3>
<blockquote>
<p>对于<code v-pre>reactive</code>数据，想要通过解构表达式拿到他的响应式的属性，需要使用<code v-pre>toRef</code>、<code v-pre>toRefs</code></p>
<ul>
<li>底层其实是将 属性 转变成了 <code v-pre>ref</code>类型的响应式数据</li>
</ul>
</blockquote>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>reactive<span class="token punctuation">,</span> toRefs<span class="token punctuation">,</span> type UnwrapNestedRefs<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">let</span> <span class="token literal-property property">obj</span><span class="token operator">:</span> UnwrapNestedRefs<span class="token operator">&lt;</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span> age<span class="token operator">:</span> number <span class="token punctuation">}</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'shenjianZ'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span>name<span class="token punctuation">,</span>age<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">toRefs</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>name :{{name}} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>age: {{age}} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name+='1';age +=1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>change obj<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>reactive<span class="token punctuation">,</span> toRef<span class="token punctuation">,</span> type UnwrapNestedRefs<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">let</span> <span class="token literal-property property">obj</span><span class="token operator">:</span> UnwrapNestedRefs<span class="token operator">&lt;</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span> age<span class="token operator">:</span> number <span class="token punctuation">}</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'shenjianZ'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token function">toRef</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">'age'</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token function">toRef</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">'name'</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>name :{{name}} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>age: {{age}} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name+='1';age +=1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>change obj<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="computed" tabindex="-1"><a class="header-anchor" href="#computed"><span>computed</span></a></h3>
<blockquote>
<p><code v-pre>computed()</code>的计算结果也是一个<code v-pre>ref</code>的类型数据</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>computed<span class="token punctuation">,</span> reactive<span class="token punctuation">,</span> toRef<span class="token punctuation">,</span> <span class="token keyword">type</span> <span class="token class-name">UnwrapNestedRefs</span><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">let</span> obj<span class="token operator">:</span> UnwrapNestedRefs<span class="token operator">&lt;</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> age<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">'shenjianZ'</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> info <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">name:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>obj<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> age:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>obj<span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>默认这个计算属性 <code v-pre>info</code> 是只读的</p>
</li>
<li>
<p>使用set和get</p>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> info <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">name:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>obj<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> age:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>obj<span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>name<span class="token punctuation">,</span> age<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">' '</span><span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span>
    obj<span class="token punctuation">.</span>name <span class="token operator">=</span> name
    obj<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="watch" tabindex="-1"><a class="header-anchor" href="#watch"><span>watch</span></a></h3>
<blockquote>
<p><code v-pre>ref</code>定义的基本类型的响应式数据</p>
<ul>
<li>使用<code v-pre> watch()</code>的返回值<code v-pre>stopWatch()</code> 来判断一定条件取消监视</li>
</ul>
</blockquote>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">,</span> watch<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> per <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> stopWatch <span class="token operator">=</span> <span class="token function">watch</span><span class="token punctuation">(</span>per<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> o</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> o<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">>=</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">stopWatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  {{per}} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>per++<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>+<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><code v-pre>ref</code>定义的对象类型的响应式数据</p>
<ul>
<li>默认只会监视对象的地址值，只要对象的地址值不变，不会触发监视</li>
<li><code v-pre>{deep:true}</code> 开启深度监视 ，对象的属性发生变化，也会触发监视</li>
<li><code v-pre>{immediate:true}</code>页面加载时执行一次监视函数的逻辑</li>
</ul>
</blockquote>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>type Ref<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> type UnwrapRef<span class="token punctuation">,</span> watch<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token literal-property property">obj</span><span class="token operator">:</span> Ref<span class="token operator">&lt;</span>UnwrapRef<span class="token operator">&lt;</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span> age<span class="token operator">:</span> number <span class="token punctuation">}</span><span class="token operator">>></span> <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'shenjianZ'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">watch</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>name :{{ obj.name }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>age: {{ obj.age }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>obj.name+='q';obj.age +=1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>change obj<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><code v-pre>recative</code>定义的对象类型的响应式数据</p>
<ul>
<li>默认开启深度监视，且无法关闭深度监视</li>
</ul>
</blockquote>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>reactive<span class="token punctuation">,</span> type UnwrapNestedRefs<span class="token punctuation">,</span> watch<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span>
<span class="token keyword">let</span> <span class="token literal-property property">obj</span><span class="token operator">:</span> UnwrapNestedRefs<span class="token operator">&lt;</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span> age<span class="token operator">:</span> number <span class="token punctuation">}</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'shenjianZ'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">watch</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>name :{{ obj.name }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>age: {{ obj.age }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>obj.name+='q';obj.age +=1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>change obj<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<ul>
<li>
<p>函数返回值的属性，基本类型</p>
</li>
<li>
<p><code v-pre>getter</code>函数 ，对象类型</p>
</li>
</ul>
</blockquote>
<p>监视 <code v-pre>obj.age</code> 这个属性</p>
<ul>
<li><code v-pre>() =&gt; obj.age</code> 需要使用函数返回</li>
</ul>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>reactive<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> type UnwrapNestedRefs<span class="token punctuation">,</span> watch<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token literal-property property">obj</span><span class="token operator">:</span> UnwrapNestedRefs<span class="token operator">&lt;</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span> age<span class="token operator">:</span> number <span class="token punctuation">}</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'shenjianZ'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> obj<span class="token punctuation">.</span>age<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> o</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> o<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>name :{{ obj.name }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>age: {{ obj.age }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>obj.age +=1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>change age<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>监视 <code v-pre>obj.process</code> 这个属性</p>
<ul>
<li><code v-pre>() =&gt; obj.process</code> 需要使用函数返回，且开启深度监视</li>
</ul>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">let</span> <span class="token literal-property property">obj</span><span class="token operator">:</span> UnwrapNestedRefs<span class="token operator">&lt;</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span> age<span class="token operator">:</span> number<span class="token punctuation">;</span> process<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">state</span><span class="token operator">:</span> number <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'shenjianZ'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  <span class="token literal-property property">process</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'process'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> obj<span class="token punctuation">.</span>process<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> o</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> o<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>name :{{ obj.name }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>age: {{ obj.age }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>obj.age +=1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>change age<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>obj.name+='q';obj.age +=1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>change obj<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>监视 <code v-pre>obj.process</code>、<code v-pre>obj.age</code> 这个属性</p>
<ul>
<li><code v-pre>[() =&gt; obj.process,() =&gt; obj.name]</code> 需要使用函数返回，并放在一个数组当中，且开启深度监视</li>
</ul>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>reactive<span class="token punctuation">,</span> type UnwrapNestedRefs<span class="token punctuation">,</span> watch<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token literal-property property">obj</span><span class="token operator">:</span> UnwrapNestedRefs<span class="token operator">&lt;</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span> age<span class="token operator">:</span> number<span class="token punctuation">;</span> process<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">state</span><span class="token operator">:</span> number <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'shenjianZ'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  <span class="token literal-property property">process</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'process'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> obj<span class="token punctuation">.</span>process<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> obj<span class="token punctuation">.</span>age<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> o</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> o<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>name :{{ obj.age }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>name: {{ obj.process.name }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>obj.age +=1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>change age<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>obj.process.name+='~';obj.process.state +=1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>change process<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="watcheffect" tabindex="-1"><a class="header-anchor" href="#watcheffect"><span>watchEffect</span></a></h3>
<blockquote>
<ul>
<li>不用指定需要监视的 对象和数据</li>
</ul>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>当 <code v-pre>obj</code> 对象的地址值发生变化，<code v-pre>watchEffect</code>触发监视，运行这个回调函数</li>
<li><code v-pre>age</code>属性的值发生变化时，<code v-pre>watchEffect</code>触发监视，运行这个回调函数</li>
</ol>
<h3 id="watch-与-watcheffect" tabindex="-1"><a class="header-anchor" href="#watch-与-watcheffect"><span>watch 与 watchEffect</span></a></h3>
<blockquote>
<ul>
<li>watch 需要指出要监听的数据</li>
<li>watchEffect 不需要，回调函数中使用到的便是需要监听的</li>
<li>watch  监听对象是否仅仅监视地址值 ，是否深度监听 ，取决于使用的是ref 、是否开启了深度监听</li>
<li>watchEffect  如果使用了某个对象或内部的对象，只会监听对象的地址值的变化</li>
</ul>
</blockquote>
<h3 id="标签的ref属性" tabindex="-1"><a class="header-anchor" href="#标签的ref属性"><span>标签的ref属性</span></a></h3>
<blockquote>
<p>为DOM元素创建引用，用于直接操作DOM元素</p>
</blockquote>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">let</span> <span class="token literal-property property">obj</span><span class="token operator">:</span> UnwrapNestedRefs<span class="token operator">&lt;</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span> age<span class="token operator">:</span> number <span class="token punctuation">}</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'shenjianZ'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> ag_e <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">refUse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ag_e <span class="token punctuation">,</span>ag_e<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 输出 RefImpl <span class="token operator">&lt;</span>h3<span class="token operator">></span>age<span class="token operator">:</span><span class="token number">18</span><span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">></span> <span class="token operator">&lt;</span><span class="token operator">--</span><span class="token operator">></span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ag_e<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>age :{{ obj.age }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>refUse()<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>ref use<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>为组件对象创建引用，用于操作组件对象的实例</p>
<ul>
<li>在本例中，在<code v-pre>app.vue</code>中引用<code v-pre>poop.vue</code>的属性(ref类型)<code v-pre>a，b，c</code> ，注意需要使用<code v-pre>defineExpose</code>暴露给外部使用</li>
</ul>
</blockquote>
<p><code v-pre>poop.vue</code></p>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">,</span>defineExpose<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'25'</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'10'</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token function">defineExpose</span><span class="token punctuation">(</span><span class="token punctuation">{</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>uz<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>poop<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>app.vue</code></p>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> poop <span class="token keyword">from</span> <span class="token string">'./components/poop.vue'</span>

<span class="token keyword">let</span> uz <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">refUse2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>uz<span class="token punctuation">,</span> uz<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>poop</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>uz<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>refUse2()<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>ref use<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="泛型" tabindex="-1"><a class="header-anchor" href="#泛型"><span>泛型</span></a></h3>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">IUser</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  email<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  password<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  token<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> user<span class="token operator">:</span> IUser <span class="token operator">=</span> <span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">"test"</span><span class="token punctuation">,</span> email<span class="token operator">:</span> <span class="token string">"test@test.com"</span><span class="token punctuation">,</span> password<span class="token operator">:</span> <span class="token string">"test"</span><span class="token punctuation">,</span> token<span class="token operator">:</span> <span class="token string">"test"</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>props</span></a></h3>
<blockquote>
<p>子组件拿到父组件的传参</p>
<ul>
<li>子组件通过接收父组件的传参可以在当前页面使用</li>
<li>使用<code v-pre>defineProps</code>接收父组件的参数</li>
</ul>
</blockquote>
<p><code v-pre>poop.vue</code></p>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>defineProps<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'en'</span><span class="token punctuation">,</span> <span class="token string">'zh'</span><span class="token punctuation">,</span> <span class="token string">'list'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>{{ en }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>{{ zh }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">font-size</span><span class="token punctuation">:</span> 25px</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span> (i,index) in list <span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">></span></span>{{ index }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>j in i <span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ j }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>app.vue</code></p>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> poop <span class="token keyword">from</span> <span class="token string">'./components/poop.vue'</span>
<span class="token keyword">interface</span> <span class="token class-name">IUser</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token literal-property property">email</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token literal-property property">password</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token literal-property property">token</span><span class="token operator">:</span> string
<span class="token punctuation">}</span>

<span class="token keyword">let</span> <span class="token literal-property property">userList</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>IUser<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"test"</span><span class="token punctuation">,</span> <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">"test@test.com"</span><span class="token punctuation">,</span> <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">"test"</span><span class="token punctuation">,</span> <span class="token literal-property property">token</span><span class="token operator">:</span> <span class="token string">"test"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"qin"</span><span class="token punctuation">,</span> <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">"qin@qin.com"</span><span class="token punctuation">,</span> <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">"qin"</span><span class="token punctuation">,</span> <span class="token literal-property property">token</span><span class="token operator">:</span> <span class="token string">"qin"</span><span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>poop</span> <span class="token attr-name">zh</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zh-CN<span class="token punctuation">"</span></span> <span class="token attr-name">en</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en-US<span class="token punctuation">"</span></span> <span class="token attr-name">:list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userList<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>高级用法</p>
<p><code v-pre>poop.vue</code></p>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>defineProps<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span>IUser<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/types"</span><span class="token punctuation">;</span>
<span class="token keyword">interface</span> <span class="token class-name">IProps</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">en</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">zh</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token function-variable function">list</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> IUser<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">en</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
  <span class="token literal-property property">zh</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
  <span class="token literal-property property">list</span><span class="token operator">:</span> Array <span class="token keyword">as</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> IUser<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>{{ en }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>{{ zh }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">font-size</span><span class="token punctuation">:</span> 25px</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span> (i,index) in list <span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">></span></span>{{ index }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>j in i <span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ j }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期"><span>生命周期</span></a></h3>
<p><strong>vue2的生命周期</strong></p>
<ul>
<li>
<p>创建
<code v-pre>beforeCreate()</code>、<code v-pre>created()</code> 当创建完毕，数据已经读取完成</p>
</li>
<li>
<p>挂载
<code v-pre>beforeMount()</code>、<code v-pre>mounted()</code>  当挂载完毕，页面已经成功渲染</p>
</li>
<li>
<p>更新
<code v-pre>beforeUpdate()</code>、<code v-pre>updated() </code>当更新完毕，页面已经成功更新</p>
</li>
<li>
<p>销毁</p>
<p><code v-pre>beforeDestory</code>、<code v-pre>destoryed()</code>当销毁完毕，页面已经成功销毁</p>
</li>
</ul>
<p><strong>vue3的生命周期</strong></p>
<ul>
<li>
<p>创建
<code v-pre>setup()</code> 函数包含了创建及创建完毕</p>
</li>
<li>
<p>挂载
<code v-pre>onBeforeMount()</code>、<code v-pre> onMounted()</code> 它们 接收一个回调函数</p>
</li>
<li>
<p>更新</p>
<p><code v-pre>onBeforeUpdate()</code>、<code v-pre>onUpdated()</code> 它们 接收一个回调函数</p>
</li>
<li>
<p>卸载
<code v-pre>onBeforeUnmount()</code>、<code v-pre>onUnmounted()</code> 它们 接收一个回调函数</p>
</li>
</ul>
<blockquote>
<p>父组件 与 子组件 在挂载时 ，子组件会先于父组件挂载</p>
</blockquote>
<h3 id="hooks" tabindex="-1"><a class="header-anchor" href="#hooks"><span>hooks</span></a></h3>
</div></template>


