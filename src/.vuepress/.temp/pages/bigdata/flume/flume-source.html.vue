<template><div><h3 id="flume的常用source" tabindex="-1"><a class="header-anchor" href="#flume的常用source"><span>Flume的常用Source</span></a></h3>
<h4 id="taildir-source" tabindex="-1"><a class="header-anchor" href="#taildir-source"><span>Taildir Source</span></a></h4>
<p>监听指定目录的多个文件(支持正则)</p>
<p>支持断点续传</p>
<div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre v-pre class="language-properties"><code><span class="token key attr-name">agent-aisi.sources</span> <span class="token punctuation">=</span> <span class="token value attr-value">source-aisi</span>
<span class="token key attr-name">agent-aisi.sinks</span> <span class="token punctuation">=</span> <span class="token value attr-value">sink-aisi</span>
<span class="token key attr-name">agent-aisi.channels</span> <span class="token punctuation">=</span> <span class="token value attr-value">channel-aisi</span>

<span class="token key attr-name">agent-aisi.sources.source-aisi.type</span> <span class="token punctuation">=</span> <span class="token value attr-value">taildir</span>
<span class="token key attr-name">agent-aisi.sources.source-aisi.filegroups</span> <span class="token punctuation">=</span> <span class="token value attr-value">f1</span>
<span class="token key attr-name">agent-aisi.sources.source-aisi.filegroups.f1</span> <span class="token punctuation">=</span> <span class="token value attr-value">/root/taildir/example.log</span>
<span class="token key attr-name">agent-aisi.sources.source-aisi.filegroups</span> <span class="token punctuation">=</span> <span class="token value attr-value">f2</span>
<span class="token key attr-name">agent-aisi.sources.source-aisi.filegroups.f2</span> <span class="token punctuation">=</span> <span class="token value attr-value">/root/taildir1/.*log</span>

<span class="token comment"># spacity the data where store  /root/taildir.json </span>
<span class="token key attr-name">agent-aisi.sources.source-aisi.positionFile</span> <span class="token punctuation">=</span> <span class="token value attr-value">/root/taildir.json </span>
<span class="token key attr-name">agent-aisi.sources.source-aisi.filegroups.f1</span> <span class="token punctuation">=</span> <span class="token value attr-value">/root/taildir/example.log</span>
<span class="token key attr-name">agent-aisi.channels.channel-aisi.type</span> <span class="token punctuation">=</span> <span class="token value attr-value">memory</span>
<span class="token key attr-name">agent-aisi.channels.channel-aisi.capacity</span> <span class="token punctuation">=</span> <span class="token value attr-value">10000</span>
<span class="token key attr-name">agent-aisi.channels.channel-aisi.transactionCapacity</span> <span class="token punctuation">=</span> <span class="token value attr-value">100</span>

<span class="token key attr-name">agent-aisi.sinks.sink-aisi.type</span> <span class="token punctuation">=</span> <span class="token value attr-value">logger</span>

<span class="token key attr-name">agent-aisi.sources.source-aisi.channels</span> <span class="token punctuation">=</span> <span class="token value attr-value">channel-aisi</span>
<span class="token key attr-name">agent-aisi.sinks.sink-aisi.channel</span> <span class="token punctuation">=</span> <span class="token value attr-value">channel-aisi</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行命令</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>flume-ng agent <span class="token parameter variable">-n</span> agent-aisi <span class="token parameter variable">-c</span> /usr/local/flume/conf/ <span class="token parameter variable">-f</span> ./flume-taildir-source.txt <span class="token parameter variable">-Dflume.root.logger</span><span class="token operator">=</span>INFO,console
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="spppling-drectory" tabindex="-1"><a class="header-anchor" href="#spppling-drectory"><span>Spppling Drectory</span></a></h4>
<p>监听一个目录,只要目录在有新文件.文件中的数据就会被收集</p>
<div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre v-pre class="language-properties"><code><span class="token key attr-name">agent-aisi.sources</span> <span class="token punctuation">=</span> <span class="token value attr-value">source-aisi</span>
<span class="token key attr-name">agent-aisi.channels</span> <span class="token punctuation">=</span> <span class="token value attr-value">channel-aisi</span>
<span class="token key attr-name">agent-aisi.sinks</span> <span class="token punctuation">=</span> <span class="token value attr-value">sink-aisi</span>

<span class="token comment"># 跳过.tmp结尾的文件</span>
<span class="token key attr-name">agent-aisi.sources.source-aisi.ignorePattern</span> <span class="token punctuation">=</span> <span class="token value attr-value">^(.)*\.tmp$  </span>
<span class="token key attr-name">agent-aisi.sources.source-aisi.type</span> <span class="token punctuation">=</span> <span class="token value attr-value">spooldir</span>
<span class="token key attr-name">agent-aisi.sources.source-aisi.spoolDir</span> <span class="token punctuation">=</span> <span class="token value attr-value">/root/spool</span>

<span class="token key attr-name">agent-aisi.channels.channel-aisi.type</span> <span class="token punctuation">=</span> <span class="token value attr-value">memory</span>
<span class="token key attr-name">agent-aisi.channels.channel-aisi.capacity</span> <span class="token punctuation">=</span> <span class="token value attr-value">10000</span>
<span class="token key attr-name">agent-aisi.channels.channel-aisi.transactionCapacity</span> <span class="token punctuation">=</span> <span class="token value attr-value">100</span>

<span class="token key attr-name">agent-aisi.sinks.sink-aisi.type</span> <span class="token punctuation">=</span> <span class="token value attr-value">logger</span>

<span class="token key attr-name">agent-aisi.sources.source-aisi.channels</span> <span class="token punctuation">=</span> <span class="token value attr-value">channel-aisi</span>
<span class="token key attr-name">agent-aisi.sinks.sink-aisi.channel</span> <span class="token punctuation">=</span> <span class="token value attr-value">channel-aisi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行命令</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>flume-ng agent <span class="token parameter variable">-n</span> agent-aisi <span class="token parameter variable">-c</span> /usr/local/flume/conf/ <span class="token parameter variable">-f</span> ./flume-spooldir-source.txt <span class="token parameter variable">-Dflume.root.logger</span><span class="token operator">=</span>INFO,console
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="http-source" tabindex="-1"><a class="header-anchor" href="#http-source"><span>Http Source</span></a></h4>
<div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre v-pre class="language-properties"><code><span class="token key attr-name">agent-aisi.sources</span> <span class="token punctuation">=</span> <span class="token value attr-value">source-aisi</span>
<span class="token key attr-name">agent-aisi.channels</span> <span class="token punctuation">=</span> <span class="token value attr-value">channel-aisi</span>
<span class="token key attr-name">agent-aisi.sinks</span> <span class="token punctuation">=</span> <span class="token value attr-value">sink-aisi</span>

<span class="token key attr-name">agent-aisi.sources.source-aisi.type</span> <span class="token punctuation">=</span> <span class="token value attr-value">http</span>
<span class="token key attr-name">agent-aisi.sources.source-aisi.bind</span> <span class="token punctuation">=</span> <span class="token value attr-value">hart</span>
<span class="token key attr-name">agent-aisi.sources.source-aisi.port</span> <span class="token punctuation">=</span> <span class="token value attr-value">44444</span>

<span class="token key attr-name">agent-aisi.channels.channel-aisi.type</span> <span class="token punctuation">=</span> <span class="token value attr-value">memory</span>
<span class="token key attr-name">agent-aisi.channels.channel-aisi.capacity</span> <span class="token punctuation">=</span> <span class="token value attr-value">10000</span>
<span class="token key attr-name">agent-aisi.channels.channel-aisi.transactionCapacity</span> <span class="token punctuation">=</span> <span class="token value attr-value">100</span>

<span class="token key attr-name">agent-aisi.sinks.sink-aisi.type</span> <span class="token punctuation">=</span> <span class="token value attr-value">logger</span>

<span class="token key attr-name">agent-aisi.sources.source-aisi.channels</span> <span class="token punctuation">=</span> <span class="token value attr-value">channel-aisi</span>
<span class="token key attr-name">agent-aisi.sinks.sink-aisi.channel</span> <span class="token punctuation">=</span> <span class="token value attr-value">channel-aisi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行命令</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>flume-ng agent <span class="token parameter variable">-n</span> agent-aisi <span class="token parameter variable">-c</span> /usr/local/flume/conf/ <span class="token parameter variable">-f</span> ./flume-http-source.txt <span class="token parameter variable">-Dflume.root.logger</span><span class="token operator">=</span>INFO,console
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">-H</span> <span class="token string">"Content-Type: application/json"</span> <span class="token parameter variable">-d</span> <span class="token string">'[{"headers":{"name":"shenjianZ","desc":"boy"},"body":"hello"}]'</span> http://hart:44444

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


