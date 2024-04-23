<template><div><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<blockquote>
<p>Git是一个免费的、开源的分布式版本控制系统</p>
</blockquote>
<h3 id="版本控制" tabindex="-1"><a class="header-anchor" href="#版本控制"><span>版本控制</span></a></h3>
<blockquote>
<p>集中式版本控制</p>
</blockquote>
<p>CVS、SVN、VSS ，与中心服务器进行交互</p>
<blockquote>
<p>分布式版本控制</p>
</blockquote>
<p>git、Bazaar，与中心服务器进行交互，本地有完整副本</p>
</div>
<h2 id="git安装" tabindex="-1"><a class="header-anchor" href="#git安装"><span>Git安装</span></a></h2>
<p><a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">官网地址<ExternalLinkIcon/></a>、<a href="https://github.com/git-for-windows/git/releases" target="_blank" rel="noopener noreferrer">Github地址<ExternalLinkIcon/></a></p>
<p>一直点击下一步即可安装完成</p>
<h2 id="git命令" tabindex="-1"><a class="header-anchor" href="#git命令"><span>Git命令</span></a></h2>
<h4 id="设置用户签名" tabindex="-1"><a class="header-anchor" href="#设置用户签名"><span>设置用户签名</span></a></h4>
<ul>
<li>
<p>全局设置</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">"your name"</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">"your email"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>本地仓库设置(在你的git仓库目录中执行)</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--local</span> user.name <span class="token string">"your name"</span>
<span class="token function">git</span> config <span class="token parameter variable">--local</span> user.email <span class="token string">"your email"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<p>注意：若均设置，<code v-pre>--local</code> 设置的用户签名将会优先生效</p>
<p><strong>查看相关配置信息</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--list</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--list</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>还有一种方式，也能设置用户签名你可以通过以下命令在命令行中编辑 <code v-pre>Git</code> 的全局配置文件：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--edit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行这个命令后，会打开一个文本编辑器，其中包含 Git 的全局配置内容。你可以在这个文件中修改配置项，然后保存退出即可。</p>
<p>如果你想要编辑当前仓库的配置文件，可以使用以下命令：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--local</span> <span class="token parameter variable">--edit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这将打开当前仓库的配置文件，你可以在其中编辑配置项，然后保存退出。</p>
<p>这是我的信息</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>user<span class="token punctuation">]</span>
        name <span class="token operator">=</span> shenjianZ
        email <span class="token operator">=</span> shenjianZLT@gmail.com
<span class="token punctuation">[</span>credential <span class="token string">"https://gitee.com"</span><span class="token punctuation">]</span>
        provider <span class="token operator">=</span> generic
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实际上，他修改的是一个 <code v-pre>..gitconfig</code>的文件</p>
<p>在 <code v-pre>C:\Users\${username}</code>这个目录下</p>
<h4 id="初始化本地库" tabindex="-1"><a class="header-anchor" href="#初始化本地库"><span>初始化本地库</span></a></h4>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> init 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>随后将在当前目录生成<code v-pre>.git</code>的目录</p>
<h4 id="查看本地库状态" tabindex="-1"><a class="header-anchor" href="#查看本地库状态"><span>查看本地库状态</span></a></h4>
<p>显示完整信息</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>显示简略信息</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> status <span class="token parameter variable">-s</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="添加暂存区" tabindex="-1"><a class="header-anchor" href="#添加暂存区"><span>添加暂存区</span></a></h4>
<p>追踪文件</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span> <span class="token comment"># 递归添加当前目录、子目录所有文件</span>
<span class="token function">git</span> <span class="token function">add</span> * <span class="token comment"># 添加当前目录所有文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="提交本地库" tabindex="-1"><a class="header-anchor" href="#提交本地库"><span>提交本地库</span></a></h4>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> commit 
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"commit message..."</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查看历史版本" tabindex="-1"><a class="header-anchor" href="#查看历史版本"><span>查看历史版本</span></a></h4>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> reflog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="切换历史版本" tabindex="-1"><a class="header-anchor" href="#切换历史版本"><span>切换历史版本</span></a></h4>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> reset <span class="token parameter variable">--hard</span> verisonid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


