---
title: nginx安装与配置
date: 2024-03-16
category: webServer
tag:
  - nginx
timeline: true
star: true
---

### nginx安装

```shell
mkdir -p /opt/software
tar zxvf /tmp/nginx-1.21.6.tar.gz -C /opt/software
ln -s /opt/software/nginx-1.21.6 /opt/software/nginx
yum install -y gcc pcre pcre-devel zlib zlib-devel
cd /opt/software/nginx
./configure --with-http_ssl_module --prefix=/usr/local/nginx
make 
make install
```

### nginx命令启动启动（不建议）

```shell
 /usr/local/nginx/sbin/nginx
```

### 创建系统守护进程（建议）

```shell
vim /usr/lib/systemd/system/nginx.service
```

添加如下内容：

```shell
[Unit]
Description=nginx - web server
After=network.target remote-fs.target nss-lookup.target
[Service]
Type=forking
PIDFile=/usr/local/nginx/logs/nginx.pid
ExecStartPre=/usr/local/nginx/sbin/nginx -t -c /usr/local/nginx/conf/nginx.conf
ExecStart=/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf
ExecReload=/usr/local/nginx/sbin/nginx -s reload
ExecStop=/usr/local/nginx/sbin/nginx -s stop
ExecQuit=/usr/local/nginx/sbin/nginx -s quit
PrivateTmp=true
[Install]
WantedBy=multi-user.target
```

重新加载系统服务

```shell
systemctl daemon-reload
```

设置开机自启

```shell
systemctl enable nginx
```

启动nginx（建议使用）

```shell
systemctl restart nginx
```



### nginx.conf 配置解析

**1）worker_processes**

```shell
worker_processes  1;
```

***用于指定Nginx主进程的工作进程数***

通常将`worker_processes`设置为CPU核心的数量，或者稍微小于它，以充分利用服务器的性能。

**2）worker_connections**

```shell
events {
    worker_connections  1024;
}
```

***用于指定每个工作进程能够同时处理的最大连接数***

`worker_connections` 指令定义了每个工作进程能够同时处理的最大连接数。在高负载环境中，可能需要适当地调整这个值以确保足够的并发连接。这个值的大小通常取决于服务器的硬件规格以及应用程序的性能需求

`worker_connections` 的值不能超过系统限制，您可以使用以下命令查看当前系统的限制：

```shell
ulimit -n
```

如果需要提高系统的文件描述符限制，您可以修改系统的配置文件 `/etc/security/limits.conf`

**3）type**

```shell
http {
    include       mime.types;
    default_type  application/octet-stream;
}
```

1. `include mime.types;`:  这一行指令用于包含一个文件，其中包含了与文件扩展名相关联的 MIME 类型的配置信息。使得服务器正确地识别和处理不同类型的文件。
2. `default_type application/octet-stream;`: 如果无法根据文件扩展名找到对应的 MIME 类型，Nginx 将使用 `application/octet-stream` 作为默认的 MIME 类型，表示二进制流。

**4）sendfile**

```shell
http {
	sendfile        on;
}
```

***启用了`sendfile`特性***。`sendfile`是一个系统调用，它允许直接从文件系统传输数据到网络连接，而无需先将数据从文件读入用户空间缓冲区。这样可以提高文件传输的效率，尤其在处理大文件时。

**5）server**

```shell
http{
	server {
        listen       80;
        server_name  localhost;

        location / {
            root   html;
            index  index.html index.htm;
        }
 
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
}
```

1. `listen 80;`: 指定服务器监听端口为80，用于处理HTTP请求。
2. `server_name localhost;`: 设置服务器的名称为localhost。
3. `location / {...}`: 配置处理请求的位置。在这里，所有的请求都将被定向到`html`目录下，并尝试寻找`index.html`或`index.htm`文件进行服务。
4. `error_page 500 502 503 504 /50x.html;`: 定义了当发生500、502、503、504错误时的错误页面。具体的错误页面是`50x.html`。
5. `location = /50x.html {...}`: 配置了`50x.html`页面的具体位置，同样位于`html`目录下。

### 虚拟主机配置







### 正想代理，反向代理、网关、隧道式代理





### 负载均衡配置

[//]: # (![IqwSUd095635]&#40;C:\Users\15202\Desktop\Nginx-PIC\IqwSUd095635.png&#41;)

### 负载均衡策略

**轮询策略**

```shell
upstream httpds{
        server 192.168.1.107 weight=2;
        server 192.168.1.108 weight=1;
    }
```

每三次请求，`192.168.1.107`处理两次，`192.168.1.108`处理1次

```shell
upstream httpds{
        server 192.168.1.107 weight=2 down;
        server 192.168.1.108 weight=1 up; #默认是 up
    }
```

`192.168.1.107`直接下线，不再接收请求

```shell
upstream httpds{
        server 192.168.1.107 weight=2 down;
        server 192.168.1.108 weight=1 down;
        server 192.168.1.109 weight=1 backup; 
    }
```

`backup` 表示仅当其他`server`全部停机，`192.168.1.109` 才上线使用

### urlwrite

```shell
 upstream httpds{
        server 192.168.1.107 weight=2;
        server 192.168.1.108 weight=1;
    }
 location / {
          rewrite ^/([0-9]+).html$    /index.html?pageNum=$1 break;
          proxy_pass http://httpds;
        }
```

### 防盗链

```shell
valid_referers none | blocked | server_names | strings... ;
if($invalid_referer){
	return 403;
}
```

### 返回错误页面

```shell
  server {
    location / {
          rewrite ^/([0-9]+).html$    /index.html?pageNum=$1 break;
          valid_referers none 192.168.1.106 192.168.1.107 ;
          if($invalid_referer){
              return 401;
          }
           root   html;
           index  index.html index.htm;

        }
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
        error_page   401  /401.html;
        location = /401.html {
            root   html;
        }
   }

```

