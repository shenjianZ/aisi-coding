---
title: Source组件
icon: flume
category: flume
tag:
  - flume
  - source
  
order: 2
date: 2024-04-23
---


### Flume的常用Source


#### Taildir Source

监听指定目录的多个文件(支持正则)

支持断点续传

```properties
agent-aisi.sources = source-aisi
agent-aisi.sinks = sink-aisi
agent-aisi.channels = channel-aisi

agent-aisi.sources.source-aisi.type = taildir
agent-aisi.sources.source-aisi.filegroups = f1
agent-aisi.sources.source-aisi.filegroups.f1 = /root/taildir/example.log
agent-aisi.sources.source-aisi.filegroups = f2
agent-aisi.sources.source-aisi.filegroups.f2 = /root/taildir1/.*log

# spacity the data where store  /root/taildir.json 
agent-aisi.sources.source-aisi.positionFile = /root/taildir.json 
agent-aisi.sources.source-aisi.filegroups.f1 = /root/taildir/example.log
agent-aisi.channels.channel-aisi.type = memory
agent-aisi.channels.channel-aisi.capacity = 10000
agent-aisi.channels.channel-aisi.transactionCapacity = 100

agent-aisi.sinks.sink-aisi.type = logger

agent-aisi.sources.source-aisi.channels = channel-aisi
agent-aisi.sinks.sink-aisi.channel = channel-aisi

```

运行命令

```shell
flume-ng agent -n agent-aisi -c /usr/local/flume/conf/ -f ./flume-taildir-source.txt -Dflume.root.logger=INFO,console
```

#### Spppling Drectory

监听一个目录,只要目录在有新文件.文件中的数据就会被收集

```properties
agent-aisi.sources = source-aisi
agent-aisi.channels = channel-aisi
agent-aisi.sinks = sink-aisi

# 跳过.tmp结尾的文件
agent-aisi.sources.source-aisi.ignorePattern = ^(.)*\.tmp$  
agent-aisi.sources.source-aisi.type = spooldir
agent-aisi.sources.source-aisi.spoolDir = /root/spool

agent-aisi.channels.channel-aisi.type = memory
agent-aisi.channels.channel-aisi.capacity = 10000
agent-aisi.channels.channel-aisi.transactionCapacity = 100

agent-aisi.sinks.sink-aisi.type = logger

agent-aisi.sources.source-aisi.channels = channel-aisi
agent-aisi.sinks.sink-aisi.channel = channel-aisi
```

运行命令

```shell
flume-ng agent -n agent-aisi -c /usr/local/flume/conf/ -f ./flume-spooldir-source.txt -Dflume.root.logger=INFO,console
```

#### Http Source


```properties
agent-aisi.sources = source-aisi
agent-aisi.channels = channel-aisi
agent-aisi.sinks = sink-aisi

agent-aisi.sources.source-aisi.type = http
agent-aisi.sources.source-aisi.bind = hart
agent-aisi.sources.source-aisi.port = 44444

agent-aisi.channels.channel-aisi.type = memory
agent-aisi.channels.channel-aisi.capacity = 10000
agent-aisi.channels.channel-aisi.transactionCapacity = 100

agent-aisi.sinks.sink-aisi.type = logger

agent-aisi.sources.source-aisi.channels = channel-aisi
agent-aisi.sinks.sink-aisi.channel = channel-aisi
```

运行命令

```shell
flume-ng agent -n agent-aisi -c /usr/local/flume/conf/ -f ./flume-http-source.txt -Dflume.root.logger=INFO,console
```

```shell
curl -X POST -H "Content-Type: application/json" -d '[{"headers":{"name":"shenjianZ","desc":"boy"},"body":"hello"}]' http://hart:44444

```








