---
title: nginx安装与配置
date: 2024-3-16
category: CacheDatabase
tag:
  - redis
timeline: true
star: true
---


# Redis的安装与相关配置

## 1.1 redis的安装与测试

**安装前的环境配置**

```shell
yum -y install gcc gcc-c++
```

**下载redis，并上传到 /tmp 目录**

**[redis下载](https://download.redis.io/redis-stable.tar.gz?_gl=1*xxdgi1*_ga*MTIwNjU3ODk5LjE3MDUyMzkzNjM.*_ga_8BKGRQKRPV*MTcwNjMyMDc2MS4yLjEuMTcwNjMyMDk2Mi41MS4wLjA.*_gcl_au*MTczMTU2MzQ1My4xNzA1MjM5MzYy)** ，[百度网盘下载](https://pan.baidu.com/s/1ibS0y8TYKOOWDXd0Acx0kA?pwd=nski)

**编译安装**

```shell
mkdir -p /opt/software 
tar -zxvf /tmp/redis-stable.tar.gz -C /opt/software #解压
mv /opt/software/redis-stable /opt/software/redis   #更名
cd /opt/software/redis
make #redis目录下有Makefile文件，进行编译
make install #安装，安装了redis-server redis-benchmark redis-cli
```

**前台启动**

```shell
/usr/local/bin/redis-server #启动，也可输入 redis-server 启动，/usr/local/bin/已经在$PATH中
ps aux | grep redis #查看redis进程
```

**命令式后台启动**

```shell
nohup redis-server & #本目录下生成nohup.txt的控制台日志文件
ps aux | grep redis #查看redis进程
```

**守护进程方式后台启动**

*修改配置文件* `redis.conf`

```shell
vim /opt/software/redis/redis.conf
```

*显示行号*

```shell
:set nu 
```

*查找daemonize，大约在309行附近*

```shell
daemonize yes #修改为yes
```

```shell
redis-cli shutdown # 先停止 命令式后台启动 的redis的进程
redis-server /opt/software/redis/redis.conf #指定配置文件，守护进程方式后台启动
```

**redis停止**

前台启动 ctrl+c 即可

命令式后台启动、守护进程方式后台启动方式的停止

```shell 
redis-cli shutdown
```

## 1.2  redis.conf的配置

*修改配置文件* `redis.conf`

```shell
vim /opt/software/redis/redis.conf
```

**去除绑定IP** ，将 绑定客户端IP 注释掉，大约在87行

```shell
# bind 127.0.0.1 -::1 
```

**关闭保护模式**，大约在111行

```shell
protected-mode no #修改为no
```

**设置访问密码**，大约在1045行

```shell
requirepass 111 #修改密码为111
```

注意，此时再次启动redis时需要输入密码

```shell
redis-cli shutdown # 先停止 redis 进程
redis-server /opt/software/redis/redis.conf #指定配置文件，守护进程方式后台启动
```

```shell
redis-cli -a 111 #使用 redis-cli 访问时需要密码
```

redis停止,此时需要输入密码

命令式后台启动、守护进程方式后台启动方式的停止

```shell 
redis-cli  -a 111 shutdown
```

![redis的关闭](C:\Users\15202\Desktop\Redis-PIC\xstMCp111608.png)

在 redis-cli 中关闭

使用 `shutdown`

![redis的关闭](C:\Users\15202\Desktop\Redis-PIC\VCc89E111040.png)

**重命名redis的一些命令**，练习阶段不建议

添加如下：

```shell
rename-commond flushall "flall"
rename-commond flushdb  "fldb"
```

![redis的命令重命名](C:\Users\15202\Desktop\Redis-PIC\E0DxDq113031.png)

## 1.3 redis的三种客户端

1.命令行客户端

使用 redis-cli 来连接

`redis-cli` 是 Redis 提供的用于与 Redis 服务器进行交互的命令行工具。以下是一些常见的 `redis-cli` 参数及其用法：

**连接到 Redis 服务器：**

```shell
redis-cli -h <hostname> -p <port> -a <password>
```

- `-h`: 指定 Redis 服务器的主机名。
- `-p`: 指定 Redis 服务器的端口号。
- `-a`: 指定连接 Redis 服务器的密码。

2.可视化客户端

**[客户端下载](https://github.com/RedisInsight/RedisDesktopManager/releases/download/0.8.8/redis-desktop-manager-0.8.8.384.exe)** ，[百度网盘下载](https://pan.baidu.com/s/1ibS0y8TYKOOWDXd0Acx0kA?pwd=nski)

![redis客户端](C:\Users\15202\Desktop\Redis-PIC\P9s6KX132258.png)

3.第三方代码客户端

Java、Python、Php等代码客户端，封装了对redis操作的API

## 1.4 redis.conf 部分解析

### **INCLUDES**

这一部分通常用于包含其他配置文件。可以在 `redis.conf` 文件中使用 `INCLUDES` 指令引入其他配置文件，使配置文件更模块化和易于管理。

![UPFvpC133834](C:\Users\15202\Desktop\Redis-PIC\UPFvpC133834.png)

```shell
echo "port 5000" >> /home/poop/redis-text.conf
```

![v5y53v134038](C:\Users\15202\Desktop\Redis-PIC\v5y53v134038.png)

```shell
redis-cli  -a 111 shutdown
redis-server /opt/software/redis/redis.conf
```

![EkGCN1134734](C:\Users\15202\Desktop\Redis-PIC\EkGCN1134734.png)

注意，测试完成将redis.conf的最后一行进行注释

```shell
redis-cli  -a 111 -p 5000 shutdown #停止redis
```

### **MODULES**

Redis 模块是一种动态加载的插件机制，允许用户扩展 Redis 的功能。在 `MODULES` 部分，你可能会配置加载一些模块，这些模块可以提供额外的功能，如新的数据类型、命令等。

### **NETWORK**

> #bind 127.0.0.1 -::1

***配置 Redis 服务器绑定的网络地址***。具体来说：

- `#` 表示这是一行注释，配置文件中的注释行会被忽略。
- `bind`: 用于指定 Redis 服务器监听的网络地址。
- `127.0.0.1`: IPv4 地址，表示只允许本地（localhost）连接。
- `-::1`: IPv6 地址，同样表示只允许本地（localhost）连接。

由于这一行被注释掉（以 `#` 开头），这意味着这个配置项当前被禁用，Redis 将接受来自任何网络地址的连接，而不仅限于本地。

>`protected-mode`

***用于启用或禁用 Redis 的保护模式。***

- 默认值为 `yes`，表示保护模式被启用。
- 如果设置为 `no`，则表示禁用保护模式。

默认情况下，保护模式是启用的， Redis 将只接受来自本地的连接。

> port 6379

***配置Redis 服务器监听的端口号***，指定了 Redis 服务器对外提供服务的端口。在这里，端口号被设置为 `6379`。这是 Redis 默认的端口号。

>tcp-backlog 511

***用于指定等待连接队列的最大长度***

- 在高请求速率的环境中，需要设置一个较大的 backlog，以避免慢速客户端连接问题。
- 注意，在 Linux 内核中，这个参数将与 /proc/sys/net/core/somaxconn 求较小值为最终值
- `为了达到期望的效果，请确保同时提高 `somaxconn` 和 `tcp_max_syn_backlog` 的值。

在高请求速率的环境中，适当提高 backlog 可以确保及时处理连接请求，避免连接积压导致的问题。

> timeout 0

这个部分包含了 Redis 服务器的网络配置相关的设置，如绑定地址、监听端口等。你可以在这里配置 Redis 监听的网络接口、端口以及其他网络相关的设置。
`timeout` 配置项用于指定客户端连接的空闲超时时间。

- `timeout`: 用于指定客户端连接的空闲超时时间，即客户端在多长时间没有向服务器发送任何命令就被认为是空闲的。
- `0`: 表示禁用空闲超时，即连接永不超时。如果将 `timeout` 设置为 `0`，则客户端连接将保持开放状态，不受空闲时间的限制。

如果 `timeout` 的值是一个正整数，那么表示客户端连接在经过指定的秒数后如果没有进行任何交互就会被服务器关闭。这个功能有助于释放服务器资源，避免长时间没有活动的连接占用资源。

在你的配置中，`timeout` 被设置为 `0`，表示不启用空闲超时，即连接不会因为空闲而被自动关闭。

>tcp-keepalive 300


***该参数用于在缺乏通信时通过使用 `SO_KEEPALIVE` 机制向客户端发送 TCP ACKs（应答），***具有以下两个主要目的：

1. **检测死连接：** 通过发送 TCP ACKs，可以检测到连接是否处于死亡状态。
2. **强制中间的网络设备认为连接是活跃的：** 在网络中间的设备（如防火墙）可能会因为连接长时间没有通信而关闭连接，使用 TCP keepalive 可以防止这种情况发生。

指定 TCP keepalive 的时间间隔，单位是秒。

- 如果设置为非零值，Redis 将启用 TCP keepalive。
- 在 Linux 上，指定的值是发送 ACKs 的间隔时间。
- 为了关闭连接，需要双倍的时间。
- 在其他内核上，间隔时间取决于内核配置。

`tcp-keepalive` 被设置为 `300` 秒，在 Redis 3.2.1 及以后的版本，这也是 Redis 默认的值。

### **GENERAL**

这可能是一个泛指的部分，可能包含一般性的设置，但你的提问中没有提供具体的详细信息。这部分可能包括一些全局的配置选项，影响 Redis 的整体行为。

>daemonize yes

***用于指定 Redis 是否作为守护进程运行***

- 如果设置为 `yes`，Redis 将作为守护进程运行，即在后台运行，而不占用当前终端。并将进程 ID (PID) 写入 `/var/run/redis.pid` 文件
- 如果设置为 `no`，Redis 将在前台运行，输出信息将显示在当前终端。
- 在由 upstart 或 systemd 管理的环境中，即使设置为 `yes`，Redis 也会被这些系统服务管理器监控，并不会直接影响 Redis 是否作为守护进程运行。

在生产环境中，通常建议将 `daemonize` 设置为 `yes`，以确保 Redis 在后台持续运行，并使用相应的系统服务管理器进行监控。

>pidfile /var/run/redis_6379.pid

***用于指定了Redis 进程的 PID（进程 ID）文件路径***

- `/var/run/redis_6379.pid`: 指定了 PID 文件的位置，这个文件将包含 Redis 的进程 ID。

Redis 在启动时会将自身的进程 ID 写入该 PID 文件。

*请确保 Redis 进程有权限在指定的路径创建和写入 PID 文件。如果权限不足，可能会导致 Redis 启动失败或无法正确管理 Redis 进程。*

***可以看到  poop用户由于权限不足，无法写入进程pid到 redis_6379.pid中***

![grvfJI162054](C:\Users\15202\Desktop\Redis-PIC\grvfJI162054.png)

![GvAT3p161933](C:\Users\15202\Desktop\Redis-PIC\GvAT3p161933.png)

> loglevel notice

***用于指定 Redis 服务器的日志详细程度***

- `debug`: 输出大量信息，对于开发和测试非常有用。
- `verbose`: 输出许多信息，其中一些可能很少有用，但不像调试级别那样混乱。
- `notice`: 适度详细，通常在生产环境中使用，以便记录一些重要的信息。
- `warning`: 仅记录非常重要或关键的消息。
- `nothing`: 不记录任何信息。

在生产环境中，通常建议将 `loglevel` 设置为 `notice`，以确保记录一些关键的信息，而不会生成太多的日志。这使得日志文件更易于管理，并有助于快速识别潜在问题。在开发或测试环境中，你可能会选择更详细的日志级别，如 `debug` 或 `verbose`，以便更好地理解系统行为和排除问题。

>logfile ""

***用于指定 Redis 的日志文件名***

- 如果将 `logfile` 设置为空字符串，并且 Redis 以守护进程方式运行（`daemonize yes`），那么日志将被发送到 `/dev/null`，这意味着日志将被丢弃而不会记录到文件中。
- 如果你希望将日志保存到文件中，需要设置一个有效的文件路径。

在生产环境中，通常建议将日志保存到文件中，以便更好地管理和审查系统的运行状态。

> databases 16

***用于设置 Redis 服务器上的数据库数量***

- 默认情况下，Redis 服务器有 16 个数据库（从 0 到 15）。可以通过 `SELECT <dbid>` 命令在每个连接中选择不同的数据库，其中 `dbid` 是一个介于 0 和 `databases-1` 之间的数字。
- 每个数据库都是相对独立的命名空间，可以存储不同的键值对。

### **SECURITY**

在 `security` 部分，你可能会配置一些与安全性相关的选项，比如密码认证、访问控制列表（ACL）等。这些设置有助于确保 Redis 服务器的安全性。

### **CLIENTS**

`clients` 部分涉及到客户端连接的设置。你可以在这里配置最大连接数、客户端超时时间等参数。

> maxclients 10000

***用于设置 Redis 服务器能够同时处理的最大客户端连接数***

- 如果 Redis 服务器无法配置进程文件限制以允许指定的限制，那么允许的最大客户端数量将设置为当前文件限制减去 32。Redis 为内部使用保留了一些文件描述符。
- 一旦达到限制，Redis 将关闭所有新的连接，并发送一个错误消息 'max number of clients reached'。

在生产环境中，根据你的实际需求和服务器资源，你可以根据应用程序的并发连接数需求适当调整 `maxclients` 的值

### **MEMORY MANAGEMENT**

在这个部分，你可以配置 Redis 的内存管理相关的设置，比如最大使用内存、内存碎片整理等。

> maxmemory <bytes>

***用于设置 Redis 服务器的内存使用限制指定的字节数***

以字节为单位，当达到内存限制时，Redis 将尝试根据选择的驱逐策略删除键。

- 如果 Redis 无法根据策略删除键，或者策略设置为 'noeviction'，Redis 将开始回复错误命令，例如 SET、LPUSH 等，这些命令会使用更多内存，并将继续回复只读命令，例如 GET。
- 通常在将 Redis 用作 LRU 或 LFU 缓存，或者为实例设置硬内存限制时，此选项非常有用。

在生产环境中，根据服务器的可用内存和应用程序的需求，可以根据需要调整 `maxmemory` 的值。选择适当的驱逐策略（`maxmemory-policy`）也是重要的，以确保根据业务需求进行合理的内存管理。

> maxmemory-policy noeviction

***用于设置在达到内存使用限制 (`maxmemory`) 时 Redis 将如何选择要删除的键。***

当设置 `maxmemory-policy` 时，Redis 使用不同的算法来决定在达到内存限制时哪些键应该被逐出

- **`volatile-lru`**使用近似 LRU 算法逐出，仅适用于设置了过期时间的键。
- **`allkeys-lru`**使用近似 LRU 算法逐出任何键。
- **`volatile-lfu`**使用近似 LFU 算法逐出，仅适用于设置了过期时间的键。
- **`allkeys-lfu`**使用近似 LFU 算法逐出任何键。
- **`volatile-random`**删除设置了过期时间的随机键。
- **`allkeys-random`**删除任意随机键。
- **`volatile-ttl`**删除具有最接近过期时间的键（较小的 TTL）。
- **`noeviction`**不逐出任何东西，对写操作返回错误。

**LRU 表示最近最少使用**

**LFU 表示最不经常使用**

**LRU、LFU 和 volatile-ttl 均使用近似随机化算法实现。**

这里的默认设置是 `maxmemory-policy noeviction`，表示当达到内存限制时，不逐出任何键，对写操作返回错误。在生产环境中，选择适当的驱逐策略非常重要，以确保系统在内存不足时能够以合理的方式处理数据。

>maxmemory-samples 5

这部分配置用于调整在使用 LRU、LFU 和最小 TTL（Time To Live）算法时 Redis 选择键的精度。具体解释如下：

- 默认情况下，Redis 将检查五个键并选择最近最少使用的那个。
- 样本大小的选择影响了算法的速度和准确性。*较大的样本大小可以更准确地近似 LRU，但代价是更高的 CPU 使用。较小的样本大小可能更快，但不太准确。*

在生产环境中，可以根据服务器的性能和需求来调整 `maxmemory-samples` 的值，以获得适当的速度和准确性的平衡。默认值 `5` 通常能够提供足够好的结果。

>maxmemory-eviction-tenacity 10

***用于指定 Redis 在逐出处理中的"韧性"（tenacity）或容忍度***

它影响了 Redis 在处理逐出时对于延迟的关注程度。

- 设置为 `0` 时，表示追求最小的延迟，即 Redis 将尽量减少逐出处理对延迟的影响。
- 默认值为 `10`，表示使用默认设置，即在考虑延迟的情况下进行逐出处理。
- 设置为 `100` 时，表示逐出处理将不考虑延迟，以最大限度地提高逐出的处理效率，但可能会增加延迟。

在异常大量的写流量情况下，可能需要调整此值以平衡延迟和逐出处理的效率。增加此值可能会提高逐出处理的效率，但会增加延迟。减小此值可能会降低延迟，但有可能影响逐出处理的效果。在生产环境中，可以根据实际情况来调整此配置。

### **THREADED I/O**

这一部分涉及到 Redis 是否启用了多线程 I/O 操作的配置。在 Redis 6.0 之后，引入了多线程 I/O 来提高性能。你可以在这里配置多线程 I/O 相关的选项。

> io-threads 4

***用于启用 Redis 的 I/O 线程功能***

:该配置项用于指定 Redis 是否启用 I/O 线程以处理客户端套接字的读写。通过启用 I/O 线程，可以在多核系统中更有效地处理 Redis 的读写操作，从而提高性能。

- 默认情况下，线程是禁用的。
- 如果你的机器有至少 4 个或更多核心，建议启用 I/O 线程，留出至少一个核心。在具有更多核心的系统上，可以尝试使用较少的线程，因为使用超过 8 个线程可能帮助有限。
- 建议仅在实际存在性能问题的情况下使用线程 I/O，即 Redis 实例能够使用相当大比例的 CPU 时间。

