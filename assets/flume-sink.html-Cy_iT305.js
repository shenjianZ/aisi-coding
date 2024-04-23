import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as s,b as e}from"./app-B55X55rZ.js";const t={},i=e(`<h3 id="flume常用sink" tabindex="-1"><a class="header-anchor" href="#flume常用sink"><span>Flume常用Sink</span></a></h3><h4 id="file-roll-sink" tabindex="-1"><a class="header-anchor" href="#file-roll-sink"><span>File Roll Sink</span></a></h4><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">agent-aisi.sources</span> <span class="token punctuation">=</span> <span class="token value attr-value">source-aisi</span>
<span class="token key attr-name">agent-aisi.channels</span> <span class="token punctuation">=</span> <span class="token value attr-value">channel-aisi</span>
<span class="token key attr-name">agent-aisi.sinks</span> <span class="token punctuation">=</span>  <span class="token value attr-value">sink-aisi</span>

<span class="token key attr-name">agent-aisi.sources.source-aisi.type</span> <span class="token punctuation">=</span> <span class="token value attr-value">netcat</span>
<span class="token key attr-name">agent-aisi.sources.source-aisi.bind</span> <span class="token punctuation">=</span> <span class="token value attr-value">localhost</span>
<span class="token key attr-name">agent-aisi.sources.source-aisi.port</span> <span class="token punctuation">=</span> <span class="token value attr-value">44444</span>

<span class="token key attr-name">agent-aisi.channels.channel-aisi.type</span> <span class="token punctuation">=</span> <span class="token value attr-value">memory</span>
<span class="token key attr-name">agent-aisi.channels.channel-aisi.capacity</span> <span class="token punctuation">=</span> <span class="token value attr-value">10000</span>
<span class="token key attr-name">agent-aisi.channels.channel-aisi.transactionCapacity</span> <span class="token punctuation">=</span> <span class="token value attr-value">100</span>

<span class="token key attr-name">agent-aisi.sinks.sink-aisi.type</span> <span class="token punctuation">=</span> <span class="token value attr-value">file_roll</span>
<span class="token key attr-name">agent-aisi.sinks.sink-aisi.sink.directory</span> <span class="token punctuation">=</span> <span class="token value attr-value">/root/file_rool</span>
<span class="token key attr-name">agent-aisi.sinks.sink-aisi.sink.roolInterval</span> <span class="token punctuation">=</span> <span class="token value attr-value">10</span>

<span class="token key attr-name">agent-aisi.sources.source-aisi.channels</span> <span class="token punctuation">=</span> <span class="token value attr-value">channel-aisi</span>
<span class="token key attr-name">agent-aisi.sinks.sink-aisi.channel</span> <span class="token punctuation">=</span> <span class="token value attr-value">channel-aisi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动agent</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>flume-ng agent <span class="token parameter variable">-n</span> agent-aisi <span class="token parameter variable">-c</span> /usr/local/flume/conf/ <span class="token parameter variable">-f</span> ./flume-fileroll-sink.txt <span class="token parameter variable">-Dflume.root.logger</span><span class="token operator">=</span>INFO,console
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="hdfs-sink" tabindex="-1"><a class="header-anchor" href="#hdfs-sink"><span>HDFS Sink</span></a></h4><p>需要一个Hadoop集群,这个Hadoop集群需要有一台装有Flume</p><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">agent-aisi.sources</span> <span class="token punctuation">=</span> <span class="token value attr-value">source-aisi</span>
<span class="token key attr-name">agent-aisi.channels</span> <span class="token punctuation">=</span> <span class="token value attr-value">channel-aisi</span>
<span class="token key attr-name">agent-aisi.sinks</span> <span class="token punctuation">=</span>  <span class="token value attr-value">sink-aisi</span>

<span class="token key attr-name">agent-aisi.sources.source-aisi.type</span> <span class="token punctuation">=</span> <span class="token value attr-value">netcat</span>
<span class="token key attr-name">agent-aisi.sources.source-aisi.bind</span> <span class="token punctuation">=</span> <span class="token value attr-value">localhost</span>
<span class="token key attr-name">agent-aisi.sources.source-aisi.port</span> <span class="token punctuation">=</span> <span class="token value attr-value">44444</span>

<span class="token key attr-name">agent-aisi.channels.channel-aisi.type</span> <span class="token punctuation">=</span> <span class="token value attr-value">memory</span>
<span class="token key attr-name">agent-aisi.channels.channel-aisi.capacity</span> <span class="token punctuation">=</span> <span class="token value attr-value">10000</span>
<span class="token key attr-name">agent-aisi.channels.channel-aisi.transactionCapacity</span> <span class="token punctuation">=</span> <span class="token value attr-value">100</span>

<span class="token key attr-name">agent-aisi.sinks.sink-aisi.type</span> <span class="token punctuation">=</span> <span class="token value attr-value">hdfs</span>
<span class="token key attr-name">agent-aisi.sinks.sink-aisi.hdfs.path</span> <span class="token punctuation">=</span> <span class="token value attr-value">/data/hdfs/output/%Y-%m-%d  #动态目录</span>
<span class="token key attr-name">agent-aisi.sinks.sink-aisi.hdfs.useLocalTimeStamp</span> <span class="token punctuation">=</span> <span class="token value attr-value">true</span>
<span class="token key attr-name">agent-aisi.sinks.sink-aisi.hdfs.roolInterval</span> <span class="token punctuation">=</span> <span class="token value attr-value">10</span>
<span class="token key attr-name">agent-aisi.sinks.sink-aisi.hdfs.roolSize</span> <span class="token punctuation">=</span> <span class="token value attr-value">0</span>
<span class="token key attr-name">agent-aisi.sinks.sink-aisi.hdfs.roolCount</span> <span class="token punctuation">=</span> <span class="token value attr-value">0</span>

<span class="token key attr-name">agent-aisi.sources.source-aisi.channels</span> <span class="token punctuation">=</span> <span class="token value attr-value">channel-aisi</span>
<span class="token key attr-name">agent-aisi.sinks.sink-aisi.channel</span> <span class="token punctuation">=</span> <span class="token value attr-value">channel-aisi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在Flume的主机 启动agent</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>flume-ng agent <span class="token parameter variable">-n</span> agent-aisi <span class="token parameter variable">-c</span> /usr/local/flume/conf/ <span class="token parameter variable">-f</span> ./flume-hdfs-sink.txt <span class="token parameter variable">-Dflume.root.logger</span><span class="token operator">=</span>INFO,console
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>新建终端,在Fluem主机的执行</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>telnet localhost <span class="token number">44444</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="kafka-sink" tabindex="-1"><a class="header-anchor" href="#kafka-sink"><span>Kafka Sink</span></a></h4><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">agent-aisi.sources</span> <span class="token punctuation">=</span> <span class="token value attr-value">source-aisi</span>
<span class="token key attr-name">agent-aisi.channels</span> <span class="token punctuation">=</span> <span class="token value attr-value">channel-aisi</span>
<span class="token key attr-name">agent-aisi.sinks</span> <span class="token punctuation">=</span>  <span class="token value attr-value">sink-aisi</span>

<span class="token key attr-name">agent-aisi.sources.source-aisi.type</span> <span class="token punctuation">=</span> <span class="token value attr-value">netcat</span>
<span class="token key attr-name">agent-aisi.sources.source-aisi.bind</span> <span class="token punctuation">=</span> <span class="token value attr-value">localhost</span>
<span class="token key attr-name">agent-aisi.sources.source-aisi.port</span> <span class="token punctuation">=</span> <span class="token value attr-value">44444</span>

<span class="token key attr-name">agent-aisi.channels.channel-aisi.type</span> <span class="token punctuation">=</span> <span class="token value attr-value">memory</span>
<span class="token key attr-name">agent-aisi.channels.channel-aisi.capacity</span> <span class="token punctuation">=</span> <span class="token value attr-value">10000</span>
<span class="token key attr-name">agent-aisi.channels.channel-aisi.transactionCapacity</span> <span class="token punctuation">=</span> <span class="token value attr-value">100</span>

<span class="token key attr-name">agent-aisi.sinks.sink-aisi.type</span> <span class="token punctuation">=</span> <span class="token value attr-value">org.apache.flume.sink.kafka.KafkaSink</span>
<span class="token key attr-name">agent-aisi.sinks.sink-aisi.kafka.bootstrap.servers</span> <span class="token punctuation">=</span> <span class="token value attr-value">11.67.196.6:9092</span>
<span class="token key attr-name">agent-aisi.sinks.sink-aisi.kafka.topic</span> <span class="token punctuation">=</span> <span class="token value attr-value">student</span>

<span class="token key attr-name">agent-aisi.sources.source-aisi.channels</span> <span class="token punctuation">=</span> <span class="token value attr-value">channel-aisi</span>
<span class="token key attr-name">agent-aisi.sinks.sink-aisi.channel</span> <span class="token punctuation">=</span> <span class="token value attr-value">channel-aisi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在Flume启动agent</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>flume-ng agent <span class="token parameter variable">-n</span> agent-aisi <span class="token parameter variable">-c</span> /usr/local/flume/conf/ <span class="token parameter variable">-f</span> ./flume-kafka-sink.txt <span class="token parameter variable">-Dflume.root.logger</span><span class="token operator">=</span>INFO,console
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动一个Kafka消费者</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kafka-console-consumer.sh --bootstrap-server <span class="token number">11.67</span>.196.6:9092 <span class="token parameter variable">--topic</span> student
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>新建终端,在Fluem主机的执行</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>telnet <span class="token number">11.67</span>.196.6 <span class="token number">44444</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="avro-sink" tabindex="-1"><a class="header-anchor" href="#avro-sink"><span>Avro Sink</span></a></h4><p>需要三台Flume</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,23),l=[i];function p(c,o){return n(),s("div",null,l)}const k=a(t,[["render",p],["__file","flume-sink.html.vue"]]),d=JSON.parse('{"path":"/bigdata/flume/flume-sink.html","title":"Sink组件","lang":"zh-CN","frontmatter":{"title":"Sink组件","icon":"flume","order":4,"tag":["flume","sink"],"categories":["flume","sink"],"date":"2024-04-23T00:00:00.000Z","description":"Flume常用Sink File Roll Sink 启动agent HDFS Sink 需要一个Hadoop集群,这个Hadoop集群需要有一台装有Flume 在Flume的主机 启动agent 新建终端,在Fluem主机的执行 Kafka Sink 在Flume启动agent 启动一个Kafka消费者 新建终端,在Fluem主机的执行 Avro S...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/aisi-coding/bigdata/flume/flume-sink.html"}],["meta",{"property":"og:site_name","content":"爱思文档"}],["meta",{"property":"og:title","content":"Sink组件"}],["meta",{"property":"og:description","content":"Flume常用Sink File Roll Sink 启动agent HDFS Sink 需要一个Hadoop集群,这个Hadoop集群需要有一台装有Flume 在Flume的主机 启动agent 新建终端,在Fluem主机的执行 Kafka Sink 在Flume启动agent 启动一个Kafka消费者 新建终端,在Fluem主机的执行 Avro S..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-23T10:23:15.000Z"}],["meta",{"property":"article:author","content":"shenjianZ"}],["meta",{"property":"article:tag","content":"flume"}],["meta",{"property":"article:tag","content":"sink"}],["meta",{"property":"article:published_time","content":"2024-04-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-23T10:23:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Sink组件\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-23T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-23T10:23:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"shenjianZ\\",\\"url\\":\\"https://shenjianl.cn\\",\\"email\\":\\"15202078626@163.com\\"}]}"]]},"headers":[{"level":3,"title":"Flume常用Sink","slug":"flume常用sink","link":"#flume常用sink","children":[{"level":4,"title":"File Roll Sink","slug":"file-roll-sink","link":"#file-roll-sink","children":[]},{"level":4,"title":"HDFS Sink","slug":"hdfs-sink","link":"#hdfs-sink","children":[]},{"level":4,"title":"Kafka Sink","slug":"kafka-sink","link":"#kafka-sink","children":[]},{"level":4,"title":"Avro Sink","slug":"avro-sink","link":"#avro-sink","children":[]}]}],"git":{"createdTime":1713867795000,"updatedTime":1713867795000,"contributors":[{"name":"shenjianZ","email":"shenjianZLT@gmail.com","commits":1}]},"readingTime":{"minutes":2.44,"words":366},"filePathRelative":"bigdata/flume/flume-sink.md","localizedDate":"2024年4月23日","excerpt":"<h3>Flume常用Sink</h3>\\n<h4>File Roll Sink</h4>\\n<div class=\\"language-properties\\" data-ext=\\"properties\\" data-title=\\"properties\\"><pre class=\\"language-properties\\"><code><span class=\\"token key attr-name\\">agent-aisi.sources</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token value attr-value\\">source-aisi</span>\\n<span class=\\"token key attr-name\\">agent-aisi.channels</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token value attr-value\\">channel-aisi</span>\\n<span class=\\"token key attr-name\\">agent-aisi.sinks</span> <span class=\\"token punctuation\\">=</span>  <span class=\\"token value attr-value\\">sink-aisi</span>\\n\\n<span class=\\"token key attr-name\\">agent-aisi.sources.source-aisi.type</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token value attr-value\\">netcat</span>\\n<span class=\\"token key attr-name\\">agent-aisi.sources.source-aisi.bind</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token value attr-value\\">localhost</span>\\n<span class=\\"token key attr-name\\">agent-aisi.sources.source-aisi.port</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token value attr-value\\">44444</span>\\n\\n<span class=\\"token key attr-name\\">agent-aisi.channels.channel-aisi.type</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token value attr-value\\">memory</span>\\n<span class=\\"token key attr-name\\">agent-aisi.channels.channel-aisi.capacity</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token value attr-value\\">10000</span>\\n<span class=\\"token key attr-name\\">agent-aisi.channels.channel-aisi.transactionCapacity</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token value attr-value\\">100</span>\\n\\n<span class=\\"token key attr-name\\">agent-aisi.sinks.sink-aisi.type</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token value attr-value\\">file_roll</span>\\n<span class=\\"token key attr-name\\">agent-aisi.sinks.sink-aisi.sink.directory</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token value attr-value\\">/root/file_rool</span>\\n<span class=\\"token key attr-name\\">agent-aisi.sinks.sink-aisi.sink.roolInterval</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token value attr-value\\">10</span>\\n\\n<span class=\\"token key attr-name\\">agent-aisi.sources.source-aisi.channels</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token value attr-value\\">channel-aisi</span>\\n<span class=\\"token key attr-name\\">agent-aisi.sinks.sink-aisi.channel</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token value attr-value\\">channel-aisi</span>\\n</code></pre></div>","autoDesc":true}');export{k as comp,d as data};
