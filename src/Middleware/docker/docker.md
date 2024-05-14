---
title: Docker入门
date: 2024-03-16
category: docker
tag:
  - docker
timeline: true
star: true
---

### 概述

`Docker`是一个应用容器引擎，直接使用宿主机的内核，不会像虚拟机那样重新加载一个OS内核

`Docker`与宿主机共享OS内核，在此基础上直接调用宿主机的硬件资源，完成容器的虚拟化

#### 镜像下载

Ubuntu 官网下载 ： https://ubuntu.com/download/desktop

Centos 官网下载： http://centos-distro.cavecreek.net/centos/7.9.2009/isos/x86_64/

#### Ubuntu安装Docker

>官网Docker安装链接：https://docs.docker.com/engine/install/ubuntu/

1. Set up Docker's `apt` repository

   ```shell
   # Add Docker's official GPG key:
   sudo apt-get update
   sudo apt-get install ca-certificates curl
   sudo install -m 0755 -d /etc/apt/keyrings
   sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
   sudo chmod a+r /etc/apt/keyrings/docker.asc
   
   # Add the repository to Apt sources:
   echo \
     "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
     $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
     sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
   sudo apt-get update
   ```

2. To install the latest version, run:


   ```shell
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
   ```

3. Verify that the Docker Engine installation is successful by running the `hello-world` image.

   ```shell
   sudo docker run hello-world
   ```

#### Centos安装Docker

> 官网Docker安装链接：https://docs.docker.com/engine/install/centos/

1. 确定你是CentOS7及以上版本

   ```shell
   cat /etc/redhat-release
   ```

2. 确认你已启用`Extras reposity`

   ```shell
   [lighthouse@lighthouse-server ~]$ yum repolist
   repo id                   repo name                                        status
   base/7/x86_64             CentOS-7 - Base                                  10,072
   extras/7/x86_64           CentOS-7 - Extras                                   471
   updates/7/x86_64          CentOS-7 - Updates                                1,255
   ```

   否则，你可以手动编辑`/etc/yum.repos.d/CentOS-Base.repo`进行修改手动启用

3. 卸载旧版本

   ```shell
   sudo yum remove docker \
                     docker-client \
                     docker-client-latest \
                     docker-common \
                     docker-latest \
                     docker-latest-logrotate \
                     docker-logrotate \
                     docker-engine
   ```

4. yum安装gcc相关、软件包

   ```shell
   yum -y install gcc yum-utils
   ```

5. 设置stable镜像仓库

   ```shell
   yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
   ```

6. 更新yum软件包索引

   ```shell
   yum makecache fast
   ```

7. 安装DOCKER CE

   ```shell
   yum install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
   ```

8. 启动docker

   ```shell
   systemctl start docker
   ```

9. 查看版本，并拉取一个`hello-world`镜像测试

   ```shell
   docker version && docker run hello-world
   ```

10. 卸载 (如果你需要的话)

    ```shell
    systemctl stop docker
    yum remove docker-ce docker-ce-cli containerd.io
    rm -rf /var/lib/docker
    rm -rf /var/lib/containerd
    ```

现在你已经成功安装`Docker`，快去开始你的`Docker`学习之旅吧！

#### 配置阿里容器镜像加速服务

> 镜像服务链接：https://cr.console.aliyun.com/cn-hangzhou/instances

1. 点击链接进入，注册并登录
2. 进入容器镜像服务界面，点击左侧列表的镜像工具，点击镜像加速器
3. 接下来你可以看到不同操作系统对应的文档说明

推荐安装1.10.0以上版本的Docker客户端，参考文档[docker-ce](https://yq.aliyun.com/articles/110806)

针对Docker客户端版本大于 1.10.0 的用户

您可以通过修改`daemon`配置文件`/etc/docker/daemon.json`来使用加速器

```shell
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{ 
  "registry-mirrors": ["your link"] # 注意这里应该填写你的加速器地址
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```

#### Docker启动类命令

***开机启动：***`systemctl enable docker`

***启动docker：***`systemctl start docker`

***停止docker：***`systemctl stop docker`

***重启docker：***`systemctl restart docker`

***查看docker状态：***`systemctl status docker`

***查看docker概要信息：*** `docker info`

***查看docker总体帮助文档：***`docker --help`

***查看docker命令帮助文档：*** `docker 具体命令 --help`

## 镜像和容器

#### 搜索镜像

> docker search [--filter, --limit  , --format,--stars ]

`--limit :` 只列出N个镜像，默认25个

- NAME：镜像的名称；DESCRIPTION：镜像的描述信息；STARS：镜像的星级评分；OFFICIAL：指示镜像是否为官方镜像；AUTOMATED：指示镜像是否为自动构建的镜像。

建议 前往 docker 官网搜索 ：https://hub.docker.com

#### 下载（拉取）镜像

> docker pull [-a, -q, --platform, --disable-content-trust] IMAGENAME:[TAG|@DIGEST]

- `--all-tags , -a`：拉取指定名称的镜像的所有标签。
- `--disable-content-trust`：禁用内容信任验证。
- `--platform`：指定拉取的镜像的平台（例如 `linux/amd64`）。
- `--quiet , -q`：只显示拉取过程中的摘要信息。

#### 查看镜像信息

> docker images 或者 docker image ls

docker image ls

- `-a, --all` 显示所有镜像
- `--digests` 显示摘要
- `-f --format` 根据键值对参数过滤
- `-q --quit` 仅输出`ImageID`

默认以创建时间排序，最近的在前面

列出所有nginx的镜像

```shell
docker images -aq --filter=reference=nginx
```

查看容器信息

> docker ps  或者 docker container ls

docker ps

- `-a, --all` 显示所有容器（默认为Running的容器）
- `-q, --quiet` 仅输出`ContainerID`
- `-f --filter` 根据键值对参数过滤
- `--format ` 根据键值对参数过滤
- `-n --last`显示 `n` 个最近创建的容器

列出所有`status`为`exited`的容器并且使用`--format` 自定义输出格式

```shell
docker ps -f status=exited --format "table {{.ID}}: {{.Names}} {{.Command}}"
```

仅列出所有`status`为`exited`的容器的ID

```shell
docker ps -f status=exited -q
```

#### 创建并运行容器

> docker run 或者 docker container run
>
> docker run [] IMAGEID [COMMAND] [ARG...]
>
> docker run [] IMAGENAME:[TAG] [COMMAND] [ARG...]

docker run

- `-a --attach`  附加到容器的标准输入（STDIN）、标准输出（STDOUT）或标准错误（STDERR）
- `--name` 为容器命名
- ` -d --detach` 在后台模式下运行容器
- `-e --env`设置容器的环境变量
- ` -p --publish`将容器的端口与主机的端口进行映射
- ` -v --volume`：将主机的目录或文件与容器的目录或文件进行挂载
- `-it` 参数结合了两个选项：`-i`（交互式）和 `-t`（终端）。它用于在容器内部创建一个交互式终端会话，使你能够与容器进行交互
- `--rm` 容器退出时自动删除
- `--restart` 默认为`no`，容器退出不重启，`always `容器退出总是重启
- `-h --hostname` 设置容器的主机名 ，相当于修改`/etc/hostname`
- `--add-host`  设置容器的主机名称映射，相当于修改`/etc/hosts`



```shell
docker run --name test-nginx-01 -p 6363:80 --rm -h hurt --add-host=tinayu:8.8.8.8 -d nginx:1.21.6
```

```shell
docker run --name mycontainer -d -it alpine /bin/sh 
```

需要注意的是，容器如果没有进程在运行，会直接退出，这里加了`-it` 便不会退出

#### 删除容器

>docker rm [OPTIONS] CONTAINERNAME ...
>
>docker rm [OPTIONS] CONTAINERID ...
>
>docker container rm

- `-f --force `强制删除正在运行的容器
- `-v --volumes` 删除容器正在使用的数据卷

删除 名为`redis-test`的容器，并删除使用的数据卷

```shell
 docker rm --force -v redis-test
```

删除所有状态为已退出(`exited `)的容器

```shell
docker rm -f  $(docker ps -f status=exited -q)
# 或者
`docker ps -f status=exited -q | xargs docker rm`            
```

#### 进入容器

> docker exec [OPTIONS] CONTAINERNAME COMMAND [ARG...]
>
> docker exec [OPTIONS] CONTAINERID COMMAND [ARG...]
>
> docker container exec

docker exec

- `-d, --detach` 以后台的方式在容器中执行命令
- `-it ` 进入容器
- `-e  --env` 设置环境变量
- `-w --workdir`  设置工作目录

```shell
docker exec -w /root -e my_website=shenjianl.cn -it mycontainer /bin/sh
```

> 需要注意的是一个容器运行时必须有前台进程才不会直接退出

#### 查看容器日志

> docker logs [OPTIONS] CONTAINERNAME
>
> docker logs [OPTIONS] CONTAINERID
>
> docker container logs

docker logs

- `-f --follow` 持续输出日志，占用shell终端
- `-n --tail` 查看最近 n 条容器日志
- `--details` 显示详细信息
- `-t --timestamps` 显示时间戳

```shell
docker logs -t -n 30 --details reference 
```

#### 容器文件拷贝

> docker cp [OPTIONS] CONTAINER:SRC_PATH DEST_PATH
>
> docker cp [OPTIONS] SRC_PATH  CONTAINER:DEST_PATH
>
> docker container cp

- `-q` 静默输出，没有任何提示

```shell
docker exec -it  mycontainer  /bin/sh # 先进入容器查看一下文件
docker cp mycontainer:/var/log /tmp
```

#### 停止容器

>docker stop [OPTIONS] CONTAINER [CONTAINER...]
>
>docker container stop

- `-t --time` 等待容器停止的时间，默认为10s，超时会强制终止容器

- `-s, --signal`

    - `SIGTERM`：默认值，发送终止信号。这是一个优雅的停止信号，允许容器执行清理操作并停止运行。

      `SIGKILL`：发送强制终止信号。这是一个立即停止容器的信号，不会给容器执行清理操作的机会，会直接终止容器的运行。

#### 运行容器

> docker start [OPTIONS] CONTAINER [CONTAINER...]
>
> docker container start



#### 查看镜像详细信息

> docker image inspect [OPTIONS] IMAGE [IMAGE...]

- `-f, --format`

```shell
docker image inspect  aisi-first:latest
```

## 数据卷

#### 创建数据卷

> docker volume create [OPTIONS] [VOLUME]

docker volume create

```shell
docker create volune hello
```

#### 查看数据卷

> docker volume ls [OPTIONS]

docker volume ls

- `-q, --quiet` 仅输出名称

```shell
docker volume ls
```

> docker volume inspect [OPTIONS] VOLUME [VOLUME...]

docker volume inspect

- `-f --format`

```shell
docker volume inspect hello
```

```shell
docker volume inspect --format '{{ .Mountpoint }}' hello
```

#### 删除数据卷

> docker volume rm [OPTIONS] VOLUME [VOLUME...]

docker volume rm

- `-f --force`  强制删除

```shell
docker volume rm hello
```

## 网络

#### 创建网络

> docker network create [OPTIONS] NETWORK

docker network create

- `-d --driver` 网络的类型
- `--network`   网络的类型
- `--gatewat` 网关
- `--label `元数据
- `--subnet` 子网

```shell
docker network create --driver=bridge --subnet=192.168.0.0/16 br0
```

```shell
docker network create \
  --driver=bridge \
  --subnet=172.28.0.0/16 \
  --ip-range=172.28.5.0/24 \
  --gateway=172.28.5.254 \
  br0
```

```shell
docker network create -d overlay \
  --subnet=192.168.10.0/25 \
  --subnet=192.168.20.0/25 \
  --gateway=192.168.10.100 \
  --gateway=192.168.20.100 \
  --aux-address="my-router=192.168.10.5" --aux-address="my-switch=192.168.10.6" \
  --aux-address="my-printer=192.168.20.5" --aux-address="my-nas=192.168.20.6" \
  my-multihost-network
```

```shell
docker network create --config-only --subnet 192.168.100.0/24 --gateway 192.168.100.115 mv-config
```

#### 查看网络

> docker network ls [OPTIONS]

docker network ls

- `-f --filter` 根据过滤条件来过滤
- `--no-trunc` 不截断网络ID
- `-q --quit` 仅输出网络ID
- `--format`  格式化输出

```shell
docker network ls --format "table {{.ID}}\t{{.Name}}"
```

```shell
docker network ls -f DRIVER=bridge --format "table {{.ID}}\t{{.Name}}" --no-trunc
```

> docker network inspect [OPTIONS] NETWORK [NETWORK...]

docker network inspect

- `--format` 格式化输出
- `--verbose ` 提供详细的诊断信息

#### 连接网络

> docker network connect [OPTIONS] NETWORK CONTAINER

docker network connect

- `--ip` 为容器分配在网络中的`IP`
- `--alias`  为容器分配在网络中的主机别名
- `--link`  指定容器的别名

```shell
 docker network connect --alias test-net-container hello-net  mycontainer
 docker exec mycontainer ping test-net-container # 查看是否配置成功
```

为container1指定了一个别名c1 ，container2可以通过别名 c1 来访问 container1，而无需知道其 IP 地址。

```shell
docker network connect --link container1:c1 hello-net container2 
```

#### 删除网络

> docker network rm NETWORK [NETWORK...]

docker network rm

- `-f ` 强制删除网络

```shell
docker network disconnect hello-net mycontainer  # 需要先解除连接才能删除
docker network rm  hello-net   
```

## 应用

#### 部署MySQL8

- `-d` 后台运行
- `-v` 持久化存储
- `-p` 映射3306端口
- `-e` 设置root密码
- `--restart` 设置停止后立即重启
- `--name` 命名为MySQL8.0.31

```shell
 docker run -d \
 -v /data/mysql/mysql8.0.31:/var/lib/mysql \
 -p 3306:3306 \
 -e MYSQL_ROOT_PASSWORD=mysql_password  \
 --restart always  \
 --name MySQL8.0.31  \
 mysql:8.0.31 
```

连接测试

```shell
mysql -u root -p -h $(docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' MySQL8.0.31) 
```

#### 部署Redis7

- `-d`后台运行
- `-v` 持久化存储
- `-p`映射6379端口
- `-e `设置redis密码
- `--restart`设置停止后立即重启
- `--name`命名为Redis7
- `aof ` 开启Redis的AOF

```shell
docker run -d \
-v /data/redis/redis7:/data \
-p 6379:6379 \
-e REDIS_PASSWORD=redis_password \
--restart always \
--name Redis7 \
redis:7.2.4 redis-server --appendonly yes
```

#### 部署Nginx

- `-d`后台运行
- `-v` 持久化存储
- `-p` 映射80端口
- `--restart` 设置停止后立即重启
- `--name`命令为Nginx1.21.6

```shell
sudo docker run -d \
-v /data/nginx/nginx1.21.6:/usr/share/nginx/html \
-p 443:80 \
--restart always \
--name Nginx1.21.6 \
nginx:1.21.6
```

