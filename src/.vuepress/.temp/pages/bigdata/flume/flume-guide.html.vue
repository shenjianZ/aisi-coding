<template><div><h2 id="flume环境搭建" tabindex="-1"><a class="header-anchor" href="#flume环境搭建"><span>Flume环境搭建</span></a></h2>
<p>JDK安装</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> /public/software/java/jdk-8u144-linux-x64.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意配置环境变量</p>
<p><code v-pre>vim /etc/prifile</code></p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/usr/java/default
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$JAVA_HOEM</span>/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Flume安装</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> apache-flume-1.10.1-bin.tar.gz  <span class="token parameter variable">-C</span> /usr/local/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意配置环境变量</p>
<p><code v-pre>vim /etc/prifile</code></p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">FLUME_HOME</span><span class="token operator">=</span>/usr/local/flume
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$FLUME_HOME</span>/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>创建软连接</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local
<span class="token function">ln</span> <span class="token parameter variable">-s</span> apache-flume-1.10.1-bin/ flume
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>修改 log4j2.xml 配置文件 将LogFile改为Console</p>
<p>修改flume运行时占用的内存堆大小,，修改flume-env.sh.template</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">cp</span> flume-env.sh.template flume-env.sh
<span class="token comment">#添加</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_OPTS</span><span class="token operator">=</span><span class="token string">"-Xms512m -Xmx1024m -Dcom.sun.management.jmxremote"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="官方案例演示" tabindex="-1"><a class="header-anchor" href="#官方案例演示"><span>官方案例演示</span></a></h2>
<h4 id="source组件" tabindex="-1"><a class="header-anchor" href="#source组件"><span>Source组件</span></a></h4>
<div class="hint-container tip">
<p class="hint-container-title">描述</p>
<p><code v-pre>netcat source </code> 监听某一个ip端口的请求，一旦有数据发送过来，就获取到信息。</p>
<p>监听一个指定的网络端口，即只要应用程序向这个端口里面写数据，这个source组件就可以获取到信息。</p>
</div>
<p><strong>Source</strong> : <strong>netcat</strong></p>
<p><strong>Sink</strong>: <strong>logger</strong></p>
<p><strong>Channel</strong> : <strong>memory</strong></p>
<div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre v-pre class="language-properties"><code><span class="token comment"># 配置Agent   名称:agent-aisi</span>
<span class="token key attr-name">agent-aisi.sources</span> <span class="token punctuation">=</span> <span class="token value attr-value">source-aisi  </span>
<span class="token key attr-name">agent-aisi.sinks</span> <span class="token punctuation">=</span> <span class="token value attr-value">sink-aisi</span>
<span class="token key attr-name">agent-aisi.channels</span> <span class="token punctuation">=</span> <span class="token value attr-value">channel-aisi</span>

<span class="token comment"># 配置source  名称: source-aisi </span>
<span class="token key attr-name">agent-aisi.sources.source-aisi.type</span> <span class="token punctuation">=</span> <span class="token value attr-value">netcat</span>
<span class="token key attr-name">agent-aisi.sources.source-aisi.bind</span> <span class="token punctuation">=</span> <span class="token value attr-value">localhost</span>
<span class="token key attr-name">agent-aisi.sources.source-aisi.port</span> <span class="token punctuation">=</span> <span class="token value attr-value">44444</span>

<span class="token comment"># 配置channel 名称: channel-aisi</span>
<span class="token key attr-name">agent-aisi.channels.channel-aisi.type</span> <span class="token punctuation">=</span> <span class="token value attr-value">memory</span>
<span class="token key attr-name">agent-aisi.channels.channel-aisi.capacity</span> <span class="token punctuation">=</span> <span class="token value attr-value">10000</span>
<span class="token key attr-name">agent-aisi.channels.channel-aisi.transactionCapacity</span> <span class="token punctuation">=</span> <span class="token value attr-value">100</span>

<span class="token comment"># 配置sink  名称:sink-aisi</span>
<span class="token key attr-name">agent-aisi.sinks.sink-aisi.type</span> <span class="token punctuation">=</span> <span class="token value attr-value">logger</span>

<span class="token comment"># 绑定 source sink 到 channel</span>
<span class="token key attr-name">agent-aisi.sources.source-aisi.channels</span> <span class="token punctuation">=</span> <span class="token value attr-value">channel-aisi</span>
<span class="token key attr-name">agent-aisi.sinks.sink-aisi.channel</span> <span class="token punctuation">=</span> <span class="token value attr-value">channel-aisi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行命令</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>flume-ng agent <span class="token parameter variable">-n</span> agent-aisi <span class="token parameter variable">-c</span> /usr/local/flume/conf/ <span class="token parameter variable">-f</span> ./flume-init-text.txt <span class="token parameter variable">-Dflume.root.logger</span><span class="token operator">=</span>INFO,console
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="exec-source" tabindex="-1"><a class="header-anchor" href="#exec-source"><span>EXEC SOURCE</span></a></h4>
<p>监听命令执行结果</p>
<div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre v-pre class="language-properties"><code><span class="token key attr-name">agent-aisi.sources</span> <span class="token punctuation">=</span> <span class="token value attr-value">source-aisi</span>
<span class="token key attr-name">agent-aisi.sinks</span> <span class="token punctuation">=</span> <span class="token value attr-value">sink-aisi</span>
<span class="token key attr-name">agent-aisi.channels</span> <span class="token punctuation">=</span> <span class="token value attr-value">channel-aisi</span>

<span class="token key attr-name">agent-aisi.sources.source-aisi.type</span> <span class="token punctuation">=</span> <span class="token value attr-value">exec</span>
<span class="token key attr-name">agent-aisi.sources.source-aisi.command</span> <span class="token punctuation">=</span> <span class="token value attr-value">tail -f /root/exec.log</span>

<span class="token key attr-name">agent-aisi.channels.channel-aisi.type</span> <span class="token punctuation">=</span> <span class="token value attr-value">memory</span>
<span class="token key attr-name">agent-aisi.channels.channel-aisi.capacity</span> <span class="token punctuation">=</span> <span class="token value attr-value">10000</span>
<span class="token key attr-name">agent-aisi.channels.channel-aisi.transactionCapacity</span> <span class="token punctuation">=</span> <span class="token value attr-value">100</span>

<span class="token key attr-name">agent-aisi.sinks.sink-aisi.type</span> <span class="token punctuation">=</span> <span class="token value attr-value">logger</span>

<span class="token key attr-name">agent-aisi.sources.source-aisi.channels</span> <span class="token punctuation">=</span> <span class="token value attr-value">channel-aisi</span>
<span class="token key attr-name">agent-aisi.sinks.sink-aisi.channel</span> <span class="token punctuation">=</span> <span class="token value attr-value">channel-aisi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行命令</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>flume-ng agent <span class="token parameter variable">-n</span> agent-aisi <span class="token parameter variable">-c</span> /usr/local/flume/conf/ <span class="token parameter variable">-f</span> ./flume-exec-source.txt <span class="token parameter variable">-Dflume.root.logger</span><span class="token operator">=</span>INFO,console
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


