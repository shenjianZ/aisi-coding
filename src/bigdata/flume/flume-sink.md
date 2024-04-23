---
title: Sink组件
icon: flume
order: 4
tag:
  - flume
  - sink

categories:
  - flume
  - sink

date: 2024-04-23
---




### Flume常用Sink

#### 	File Roll Sink

```properties
agent-aisi.sources = source-aisi
agent-aisi.channels = channel-aisi
agent-aisi.sinks =  sink-aisi

agent-aisi.sources.source-aisi.type = netcat
agent-aisi.sources.source-aisi.bind = localhost
agent-aisi.sources.source-aisi.port = 44444

agent-aisi.channels.channel-aisi.type = memory
agent-aisi.channels.channel-aisi.capacity = 10000
agent-aisi.channels.channel-aisi.transactionCapacity = 100

agent-aisi.sinks.sink-aisi.type = file_roll
agent-aisi.sinks.sink-aisi.sink.directory = /root/file_rool
agent-aisi.sinks.sink-aisi.sink.roolInterval = 10

agent-aisi.sources.source-aisi.channels = channel-aisi
agent-aisi.sinks.sink-aisi.channel = channel-aisi
```

启动agent

```shell
flume-ng agent -n agent-aisi -c /usr/local/flume/conf/ -f ./flume-fileroll-sink.txt -Dflume.root.logger=INFO,console
```

#### HDFS Sink

需要一个Hadoop集群,这个Hadoop集群需要有一台装有Flume

```properties
agent-aisi.sources = source-aisi
agent-aisi.channels = channel-aisi
agent-aisi.sinks =  sink-aisi

agent-aisi.sources.source-aisi.type = netcat
agent-aisi.sources.source-aisi.bind = localhost
agent-aisi.sources.source-aisi.port = 44444

agent-aisi.channels.channel-aisi.type = memory
agent-aisi.channels.channel-aisi.capacity = 10000
agent-aisi.channels.channel-aisi.transactionCapacity = 100

agent-aisi.sinks.sink-aisi.type = hdfs
agent-aisi.sinks.sink-aisi.hdfs.path = /data/hdfs/output/%Y-%m-%d  #动态目录
agent-aisi.sinks.sink-aisi.hdfs.useLocalTimeStamp = true
agent-aisi.sinks.sink-aisi.hdfs.roolInterval = 10
agent-aisi.sinks.sink-aisi.hdfs.roolSize = 0
agent-aisi.sinks.sink-aisi.hdfs.roolCount = 0

agent-aisi.sources.source-aisi.channels = channel-aisi
agent-aisi.sinks.sink-aisi.channel = channel-aisi
```

在Flume的主机 启动agent

```shell
flume-ng agent -n agent-aisi -c /usr/local/flume/conf/ -f ./flume-hdfs-sink.txt -Dflume.root.logger=INFO,console
```

新建终端,在Fluem主机的执行

```shell
telnet localhost 44444
```

#### Kafka Sink

```properties
agent-aisi.sources = source-aisi
agent-aisi.channels = channel-aisi
agent-aisi.sinks =  sink-aisi

agent-aisi.sources.source-aisi.type = netcat
agent-aisi.sources.source-aisi.bind = localhost
agent-aisi.sources.source-aisi.port = 44444

agent-aisi.channels.channel-aisi.type = memory
agent-aisi.channels.channel-aisi.capacity = 10000
agent-aisi.channels.channel-aisi.transactionCapacity = 100

agent-aisi.sinks.sink-aisi.type = org.apache.flume.sink.kafka.KafkaSink
agent-aisi.sinks.sink-aisi.kafka.bootstrap.servers = 11.67.196.6:9092
agent-aisi.sinks.sink-aisi.kafka.topic = student

agent-aisi.sources.source-aisi.channels = channel-aisi
agent-aisi.sinks.sink-aisi.channel = channel-aisi
```

在Flume启动agent

```shell
flume-ng agent -n agent-aisi -c /usr/local/flume/conf/ -f ./flume-kafka-sink.txt -Dflume.root.logger=INFO,console
```

启动一个Kafka消费者

```shell
kafka-console-consumer.sh --bootstrap-server 11.67.196.6:9092 --topic student
```

新建终端,在Fluem主机的执行

```shell
telnet 11.67.196.6 44444
```

#### Avro Sink

需要三台Flume

```shell

```

