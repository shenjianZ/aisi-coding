---
title: 快速上手
icon: flume
order: 1
category: 
  flume
tag:
  - flume
  - guide
  
date: 2024-04-23
---

## Flume环境搭建

JDK安装

```shell
rpm -ivh /public/software/java/jdk-8u144-linux-x64.rpm
```

注意配置环境变量

`vim /etc/prifile`

```bash
export JAVA_HOME=/usr/java/default
export PATH=$PATH:$JAVA_HOEM/bin
```

Flume安装

```shell
tar -zxvf apache-flume-1.10.1-bin.tar.gz  -C /usr/local/
```

注意配置环境变量

`vim /etc/prifile`

```bash
export FLUME_HOME=/usr/local/flume
export PATH=$PATH:$FLUME_HOME/bin
```

创建软连接

```shell
cd /usr/local
ln -s apache-flume-1.10.1-bin/ flume
```

修改 log4j2.xml 配置文件 将LogFile改为Console

修改flume运行时占用的内存堆大小,，修改flume-env.sh.template

```shell
cp flume-env.sh.template flume-env.sh
#添加
export JAVA_OPTS="-Xms512m -Xmx1024m -Dcom.sun.management.jmxremote"
```



## 官方案例演示

#### Source组件


::: tip 描述

`netcat source ` 监听某一个ip端口的请求，一旦有数据发送过来，就获取到信息。

监听一个指定的网络端口，即只要应用程序向这个端口里面写数据，这个source组件就可以获取到信息。

:::



**Source** : **netcat**

**Sink**: **logger**

**Channel** : **memory**

```properties
# 配置Agent   名称:agent-aisi
agent-aisi.sources = source-aisi  
agent-aisi.sinks = sink-aisi
agent-aisi.channels = channel-aisi

# 配置source  名称: source-aisi 
agent-aisi.sources.source-aisi.type = netcat
agent-aisi.sources.source-aisi.bind = localhost
agent-aisi.sources.source-aisi.port = 44444

# 配置channel 名称: channel-aisi
agent-aisi.channels.channel-aisi.type = memory
agent-aisi.channels.channel-aisi.capacity = 10000
agent-aisi.channels.channel-aisi.transactionCapacity = 100

# 配置sink  名称:sink-aisi
agent-aisi.sinks.sink-aisi.type = logger

# 绑定 source sink 到 channel
agent-aisi.sources.source-aisi.channels = channel-aisi
agent-aisi.sinks.sink-aisi.channel = channel-aisi
```

运行命令

```shell
flume-ng agent -n agent-aisi -c /usr/local/flume/conf/ -f ./flume-init-text.txt -Dflume.root.logger=INFO,console
```

#### EXEC SOURCE

监听命令执行结果

```properties
agent-aisi.sources = source-aisi
agent-aisi.sinks = sink-aisi
agent-aisi.channels = channel-aisi

agent-aisi.sources.source-aisi.type = exec
agent-aisi.sources.source-aisi.command = tail -f /root/exec.log

agent-aisi.channels.channel-aisi.type = memory
agent-aisi.channels.channel-aisi.capacity = 10000
agent-aisi.channels.channel-aisi.transactionCapacity = 100

agent-aisi.sinks.sink-aisi.type = logger

agent-aisi.sources.source-aisi.channels = channel-aisi
agent-aisi.sinks.sink-aisi.channel = channel-aisi
```

运行命令

```shell
flume-ng agent -n agent-aisi -c /usr/local/flume/conf/ -f ./flume-exec-source.txt -Dflume.root.logger=INFO,console
```