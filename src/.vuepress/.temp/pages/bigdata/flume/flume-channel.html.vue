<template><div><h3 id="flume的常用channel" tabindex="-1"><a class="header-anchor" href="#flume的常用channel"><span>Flume的常用Channel</span></a></h3>
<h4 id="memory-channel" tabindex="-1"><a class="header-anchor" href="#memory-channel"><span>Memory Channel</span></a></h4>
<h4 id="file-channel" tabindex="-1"><a class="header-anchor" href="#file-channel"><span>File Channel</span></a></h4>
<div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre v-pre class="language-properties"><code><span class="token key attr-name">agent-aisi.sources</span> <span class="token punctuation">=</span> <span class="token value attr-value">source-aisi</span>
<span class="token key attr-name">agent-aisi.channels</span> <span class="token punctuation">=</span> <span class="token value attr-value">channel-aisi</span>
<span class="token key attr-name">agent-aisi.sinks</span> <span class="token punctuation">=</span>  <span class="token value attr-value">sink-aisi</span>

<span class="token key attr-name">agent-aisi.sources.source-aisi.type</span> <span class="token punctuation">=</span> <span class="token value attr-value">netcat</span>
<span class="token key attr-name">agent-aisi.sources.source-aisi.bind</span> <span class="token punctuation">=</span> <span class="token value attr-value">localhost</span>
<span class="token key attr-name">agent-aisi.sources.source-aisi.port</span> <span class="token punctuation">=</span> <span class="token value attr-value">44444</span>

<span class="token key attr-name">agent-aisi.channels.channel-aisi.type</span> <span class="token punctuation">=</span> <span class="token value attr-value">file</span>
<span class="token key attr-name">agent-aisi.channels.channel-aisi.dataDir</span> <span class="token punctuation">=</span> <span class="token value attr-value">/root/filedata</span>

<span class="token key attr-name">agent-aisi.sinks.sink-aisi.type</span> <span class="token punctuation">=</span> <span class="token value attr-value">logger</span>

<span class="token key attr-name">agent-aisi.sources.source-aisi.channels</span> <span class="token punctuation">=</span> <span class="token value attr-value">channel-aisi</span>
<span class="token key attr-name">agent-aisi.sinks.sink-aisi.channel</span> <span class="token punctuation">=</span> <span class="token value attr-value">channel-aisi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行命令</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>flume-ng agent <span class="token parameter variable">-n</span> agent-aisi <span class="token parameter variable">-c</span> /usr/local/flume/conf/ <span class="token parameter variable">-f</span> ./flume-file-channel.txt <span class="token parameter variable">-Dflume.root.logger</span><span class="token operator">=</span>INFO,console
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code> telnet localhost <span class="token number">44444</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>数据保存在 <code v-pre>/root/.flume/file-channel/data</code>这个目录</p>
<h4 id="kafka-channel" tabindex="-1"><a class="header-anchor" href="#kafka-channel"><span>Kafka Channel</span></a></h4>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>kafka-topics.sh <span class="token parameter variable">--zookeeper</span> <span class="token number">11.112</span>.227.47:2181 <span class="token parameter variable">--create</span> --replication-factor <span class="token number">1</span> <span class="token parameter variable">--partitions</span> <span class="token number">1</span> <span class="token parameter variable">--topic</span> demo<span class="token punctuation">\</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>kafka-topics.sh <span class="token parameter variable">--list</span> <span class="token parameter variable">--zookeeper</span> <span class="token number">11.112</span>.227.47:2181
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>消费数据</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>kafka-console-consumer.sh --bootstrap-server <span class="token number">11.112</span>.227.47:9092 <span class="token parameter variable">--topic</span> demo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>生产数据</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>kafka-console-producer.sh --broker-list <span class="token number">11.112</span>.227.47:9092 <span class="token parameter variable">--topic</span> demo 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre v-pre class="language-properties"><code><span class="token key attr-name">agent-aisi.sources</span> <span class="token punctuation">=</span> <span class="token value attr-value">source-aisi</span>
<span class="token key attr-name">agent-aisi.channels</span> <span class="token punctuation">=</span> <span class="token value attr-value">channel-aisi</span>
<span class="token key attr-name">agent-aisi.sinks</span> <span class="token punctuation">=</span>  <span class="token value attr-value">sink-aisi</span>

<span class="token key attr-name">agent-aisi.sources.source-aisi.type</span> <span class="token punctuation">=</span> <span class="token value attr-value">netcat</span>
<span class="token key attr-name">agent-aisi.sources.source-aisi.bind</span> <span class="token punctuation">=</span> <span class="token value attr-value">localhost</span>
<span class="token key attr-name">agent-aisi.sources.source-aisi.port</span> <span class="token punctuation">=</span> <span class="token value attr-value">44444</span>

<span class="token key attr-name">agent-aisi.channels.channel-aisi.type</span> <span class="token punctuation">=</span> <span class="token value attr-value">org.apache.flume.channel.kafka.KafkaChannel</span>
<span class="token key attr-name">agent-aisi.channels.channel-aisi.kafka.bootstrap.servers</span> <span class="token punctuation">=</span> <span class="token value attr-value">11.112.227.47:9092</span>
<span class="token key attr-name">agent-aisi.channels.channel-aisi.kafka.topic</span> <span class="token punctuation">=</span> <span class="token value attr-value">aisi</span>

<span class="token key attr-name">agent-aisi.sinks.sink-aisi.type</span> <span class="token punctuation">=</span> <span class="token value attr-value">logger</span>

<span class="token key attr-name">agent-aisi.sources.source-aisi.channels</span> <span class="token punctuation">=</span> <span class="token value attr-value">channel-aisi</span>
<span class="token key attr-name">agent-aisi.sinks.sink-aisi.channel</span> <span class="token punctuation">=</span> <span class="token value attr-value">channel-aisi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>agent启动</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>flume-ng agent <span class="token parameter variable">-n</span> agent-aisi <span class="token parameter variable">-c</span> /usr/local/flume/conf/ <span class="token parameter variable">-f</span> ./flume-kafka-channel.txt <span class="token parameter variable">-Dflume.root.logger</span><span class="token operator">=</span>INFO,console
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>装有flume的linux监听</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>telnet <span class="token number">11.112</span>.227.32 <span class="token number">44444</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>kafkachannel启动</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>kafka-console-consumer.sh --bootstrap-server <span class="token number">11.112</span>.227.47:9092 <span class="token parameter variable">--topic</span> aisi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


