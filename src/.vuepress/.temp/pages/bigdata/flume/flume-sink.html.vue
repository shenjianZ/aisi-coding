<template><div><h3 id="flume常用sink" tabindex="-1"><a class="header-anchor" href="#flume常用sink"><span>Flume常用Sink</span></a></h3>
<h4 id="file-roll-sink" tabindex="-1"><a class="header-anchor" href="#file-roll-sink"><span>File Roll Sink</span></a></h4>
<div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre v-pre class="language-properties"><code><span class="token key attr-name">agent-aisi.sources</span> <span class="token punctuation">=</span> <span class="token value attr-value">source-aisi</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动agent</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>flume-ng agent <span class="token parameter variable">-n</span> agent-aisi <span class="token parameter variable">-c</span> /usr/local/flume/conf/ <span class="token parameter variable">-f</span> ./flume-fileroll-sink.txt <span class="token parameter variable">-Dflume.root.logger</span><span class="token operator">=</span>INFO,console
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="hdfs-sink" tabindex="-1"><a class="header-anchor" href="#hdfs-sink"><span>HDFS Sink</span></a></h4>
<p>需要一个Hadoop集群,这个Hadoop集群需要有一台装有Flume</p>
<div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre v-pre class="language-properties"><code><span class="token key attr-name">agent-aisi.sources</span> <span class="token punctuation">=</span> <span class="token value attr-value">source-aisi</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在Flume的主机 启动agent</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>flume-ng agent <span class="token parameter variable">-n</span> agent-aisi <span class="token parameter variable">-c</span> /usr/local/flume/conf/ <span class="token parameter variable">-f</span> ./flume-hdfs-sink.txt <span class="token parameter variable">-Dflume.root.logger</span><span class="token operator">=</span>INFO,console
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>新建终端,在Fluem主机的执行</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>telnet localhost <span class="token number">44444</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="kafka-sink" tabindex="-1"><a class="header-anchor" href="#kafka-sink"><span>Kafka Sink</span></a></h4>
<div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre v-pre class="language-properties"><code><span class="token key attr-name">agent-aisi.sources</span> <span class="token punctuation">=</span> <span class="token value attr-value">source-aisi</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在Flume启动agent</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>flume-ng agent <span class="token parameter variable">-n</span> agent-aisi <span class="token parameter variable">-c</span> /usr/local/flume/conf/ <span class="token parameter variable">-f</span> ./flume-kafka-sink.txt <span class="token parameter variable">-Dflume.root.logger</span><span class="token operator">=</span>INFO,console
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动一个Kafka消费者</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>kafka-console-consumer.sh --bootstrap-server <span class="token number">11.67</span>.196.6:9092 <span class="token parameter variable">--topic</span> student
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>新建终端,在Fluem主机的执行</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>telnet <span class="token number">11.67</span>.196.6 <span class="token number">44444</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="avro-sink" tabindex="-1"><a class="header-anchor" href="#avro-sink"><span>Avro Sink</span></a></h4>
<p>需要三台Flume</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


