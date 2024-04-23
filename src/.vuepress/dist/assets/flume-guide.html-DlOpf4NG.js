import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as e,b as n}from"./app-BCyOZnPz.js";const t={},i=n(`<h2 id="flume环境搭建" tabindex="-1"><a class="header-anchor" href="#flume环境搭建"><span>Flume环境搭建</span></a></h2><p>JDK安装</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> /public/software/java/jdk-8u144-linux-x64.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意配置环境变量</p><p><code>vim /etc/prifile</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/usr/java/default
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$JAVA_HOEM</span>/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Flume安装</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> apache-flume-1.10.1-bin.tar.gz  <span class="token parameter variable">-C</span> /usr/local/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意配置环境变量</p><p><code>vim /etc/prifile</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">FLUME_HOME</span><span class="token operator">=</span>/usr/local/flume
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$FLUME_HOME</span>/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>创建软连接</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local
<span class="token function">ln</span> <span class="token parameter variable">-s</span> apache-flume-1.10.1-bin/ flume
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>修改 log4j2.xml 配置文件 将LogFile改为Console</p><p>修改flume运行时占用的内存堆大小,，修改flume-env.sh.template</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cp</span> flume-env.sh.template flume-env.sh
<span class="token comment">#添加</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_OPTS</span><span class="token operator">=</span><span class="token string">&quot;-Xms512m -Xmx1024m -Dcom.sun.management.jmxremote&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="官方案例演示" tabindex="-1"><a class="header-anchor" href="#官方案例演示"><span>官方案例演示</span></a></h2><h4 id="source组件" tabindex="-1"><a class="header-anchor" href="#source组件"><span>Source组件</span></a></h4><div class="hint-container tip"><p class="hint-container-title">描述</p><p><code>netcat source </code> 监听某一个ip端口的请求，一旦有数据发送过来，就获取到信息。</p><p>监听一个指定的网络端口，即只要应用程序向这个端口里面写数据，这个source组件就可以获取到信息。</p></div><p><strong>Source</strong> : <strong>netcat</strong></p><p><strong>Sink</strong>: <strong>logger</strong></p><p><strong>Channel</strong> : <strong>memory</strong></p><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token comment"># 配置Agent   名称:agent-aisi</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行命令</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>flume-ng agent <span class="token parameter variable">-n</span> agent-aisi <span class="token parameter variable">-c</span> /usr/local/flume/conf/ <span class="token parameter variable">-f</span> ./flume-init-text.txt <span class="token parameter variable">-Dflume.root.logger</span><span class="token operator">=</span>INFO,console
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="exec-source" tabindex="-1"><a class="header-anchor" href="#exec-source"><span>EXEC SOURCE</span></a></h4><p>监听命令执行结果</p><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">agent-aisi.sources</span> <span class="token punctuation">=</span> <span class="token value attr-value">source-aisi</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行命令</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>flume-ng agent <span class="token parameter variable">-n</span> agent-aisi <span class="token parameter variable">-c</span> /usr/local/flume/conf/ <span class="token parameter variable">-f</span> ./flume-exec-source.txt <span class="token parameter variable">-Dflume.root.logger</span><span class="token operator">=</span>INFO,console
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,30),l=[i];function p(c,r){return s(),e("div",null,l)}const d=a(t,[["render",p],["__file","flume-guide.html.vue"]]),m=JSON.parse('{"path":"/bigdata/flume/flume-guide.html","title":"快速上手","lang":"zh-CN","frontmatter":{"title":"快速上手","icon":"flume","order":1,"category":"flume","tag":["flume","guide"],"date":"2024-04-23T00:00:00.000Z","description":"Flume环境搭建 JDK安装 注意配置环境变量 vim /etc/prifile Flume安装 注意配置环境变量 vim /etc/prifile 创建软连接 修改 log4j2.xml 配置文件 将LogFile改为Console 修改flume运行时占用的内存堆大小,，修改flume-env.sh.template 官方案例演示 Source组...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/aisi-coding/bigdata/flume/flume-guide.html"}],["meta",{"property":"og:site_name","content":"爱思文档"}],["meta",{"property":"og:title","content":"快速上手"}],["meta",{"property":"og:description","content":"Flume环境搭建 JDK安装 注意配置环境变量 vim /etc/prifile Flume安装 注意配置环境变量 vim /etc/prifile 创建软连接 修改 log4j2.xml 配置文件 将LogFile改为Console 修改flume运行时占用的内存堆大小,，修改flume-env.sh.template 官方案例演示 Source组..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-23T10:23:15.000Z"}],["meta",{"property":"article:author","content":"shenjianZ"}],["meta",{"property":"article:tag","content":"flume"}],["meta",{"property":"article:tag","content":"guide"}],["meta",{"property":"article:published_time","content":"2024-04-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-23T10:23:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"快速上手\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-23T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-23T10:23:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"shenjianZ\\",\\"url\\":\\"https://shenjianl.cn\\",\\"email\\":\\"15202078626@163.com\\"}]}"]]},"headers":[{"level":2,"title":"Flume环境搭建","slug":"flume环境搭建","link":"#flume环境搭建","children":[]},{"level":2,"title":"官方案例演示","slug":"官方案例演示","link":"#官方案例演示","children":[{"level":4,"title":"Source组件","slug":"source组件","link":"#source组件","children":[]},{"level":4,"title":"EXEC SOURCE","slug":"exec-source","link":"#exec-source","children":[]}]}],"git":{"createdTime":1713867795000,"updatedTime":1713867795000,"contributors":[{"name":"shenjianZ","email":"shenjianZLT@gmail.com","commits":1}]},"readingTime":{"minutes":2.73,"words":410},"filePathRelative":"bigdata/flume/flume-guide.md","localizedDate":"2024年4月23日","excerpt":"<h2>Flume环境搭建</h2>\\n<p>JDK安装</p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token function\\">rpm</span> <span class=\\"token parameter variable\\">-ivh</span> /public/software/java/jdk-8u144-linux-x64.rpm\\n</code></pre></div><p>注意配置环境变量</p>\\n<p><code>vim /etc/prifile</code></p>","autoDesc":true}');export{d as comp,m as data};
