---
title: Channel组件
icon: flume
order: 3
category: flume
  
tag:
  - flume
  - channel

  
date: 2024-04-23
---




### Flume的常用Channel

#### Memory Channel


#### File Channel

```properties
agent-aisi.sources = source-aisi
agent-aisi.channels = channel-aisi
agent-aisi.sinks =  sink-aisi

agent-aisi.sources.source-aisi.type = netcat
agent-aisi.sources.source-aisi.bind = localhost
agent-aisi.sources.source-aisi.port = 44444

agent-aisi.channels.channel-aisi.type = file
agent-aisi.channels.channel-aisi.dataDir = /root/filedata

agent-aisi.sinks.sink-aisi.type = logger

agent-aisi.sources.source-aisi.channels = channel-aisi
agent-aisi.sinks.sink-aisi.channel = channel-aisi
```

运行命令

```shell
flume-ng agent -n agent-aisi -c /usr/local/flume/conf/ -f ./flume-file-channel.txt -Dflume.root.logger=INFO,console
```

```shell
 telnet localhost 44444
```

数据保存在 `/root/.flume/file-channel/data`这个目录

#### Kafka Channel

```shell
kafka-topics.sh --zookeeper 11.112.227.47:2181 --create --replication-factor 1 --partitions 1 --topic demo\
```

```shell
kafka-topics.sh --list --zookeeper 11.112.227.47:2181
```

消费数据

```shell
kafka-console-consumer.sh --bootstrap-server 11.112.227.47:9092 --topic demo
```

生产数据

```shell
kafka-console-producer.sh --broker-list 11.112.227.47:9092 --topic demo 
```

```properties
agent-aisi.sources = source-aisi
agent-aisi.channels = channel-aisi
agent-aisi.sinks =  sink-aisi

agent-aisi.sources.source-aisi.type = netcat
agent-aisi.sources.source-aisi.bind = localhost
agent-aisi.sources.source-aisi.port = 44444

agent-aisi.channels.channel-aisi.type = org.apache.flume.channel.kafka.KafkaChannel
agent-aisi.channels.channel-aisi.kafka.bootstrap.servers = 11.112.227.47:9092
agent-aisi.channels.channel-aisi.kafka.topic = aisi

agent-aisi.sinks.sink-aisi.type = logger

agent-aisi.sources.source-aisi.channels = channel-aisi
agent-aisi.sinks.sink-aisi.channel = channel-aisi
```

agent启动

```shell
flume-ng agent -n agent-aisi -c /usr/local/flume/conf/ -f ./flume-kafka-channel.txt -Dflume.root.logger=INFO,console
```

装有flume的linux监听

```shell
telnet 11.112.227.32 44444
```

kafkachannel启动

```shell
kafka-console-consumer.sh --bootstrap-server 11.112.227.47:9092 --topic aisi
```

