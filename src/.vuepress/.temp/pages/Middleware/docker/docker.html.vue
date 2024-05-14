<template><div><h3 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h3>
<p><code v-pre>Docker</code>是一个应用容器引擎，直接使用宿主机的内核，不会像虚拟机那样重新加载一个OS内核</p>
<p><code v-pre>Docker</code>与宿主机共享OS内核，在此基础上直接调用宿主机的硬件资源，完成容器的虚拟化</p>
<h4 id="镜像下载" tabindex="-1"><a class="header-anchor" href="#镜像下载"><span>镜像下载</span></a></h4>
<p>Ubuntu 官网下载 ： https://ubuntu.com/download/desktop</p>
<p>Centos 官网下载： http://centos-distro.cavecreek.net/centos/7.9.2009/isos/x86_64/</p>
<h4 id="ubuntu安装docker" tabindex="-1"><a class="header-anchor" href="#ubuntu安装docker"><span>Ubuntu安装Docker</span></a></h4>
<blockquote>
<p>官网Docker安装链接：https://docs.docker.com/engine/install/ubuntu/</p>
</blockquote>
<ol>
<li>
<p>Set up Docker's <code v-pre>apt</code> repository</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token comment"># Add Docker's official GPG key:</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> ca-certificates <span class="token function">curl</span>
<span class="token function">sudo</span> <span class="token function">install</span> <span class="token parameter variable">-m</span> 0755 <span class="token parameter variable">-d</span> /etc/apt/keyrings
<span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://download.docker.com/linux/ubuntu/gpg <span class="token parameter variable">-o</span> /etc/apt/keyrings/docker.asc
<span class="token function">sudo</span> <span class="token function">chmod</span> a+r /etc/apt/keyrings/docker.asc

<span class="token comment"># Add the repository to Apt sources:</span>
<span class="token builtin class-name">echo</span> <span class="token punctuation">\</span>
  <span class="token string">"deb [arch=<span class="token variable"><span class="token variable">$(</span>dpkg --print-architecture<span class="token variable">)</span></span> signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  <span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">.</span> /etc/os-release <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$VERSION_CODENAME</span>"</span><span class="token variable">)</span></span> stable"</span> <span class="token operator">|</span> <span class="token punctuation">\</span>
  <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/docker.list <span class="token operator">></span> /dev/null
<span class="token function">sudo</span> <span class="token function">apt-get</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>To install the latest version, run:</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div></li>
</ol>
<p>sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>
3. Verify that the Docker Engine installation is successful by running the `hello-world` image.

```shell
sudo docker run hello-world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="centos安装docker" tabindex="-1"><a class="header-anchor" href="#centos安装docker"><span>Centos安装Docker</span></a></h4>
<blockquote>
<p>官网Docker安装链接：https://docs.docker.com/engine/install/centos/</p>
</blockquote>
<ol>
<li>
<p>确定你是CentOS7及以上版本</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> /etc/redhat-release
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>确认你已启用<code v-pre>Extras reposity</code></p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>lighthouse@lighthouse-server ~<span class="token punctuation">]</span>$ yum repolist
repo <span class="token function">id</span>                   repo name                                        status
base/7/x86_64             CentOS-7 - Base                                  <span class="token number">10,072</span>
extras/7/x86_64           CentOS-7 - Extras                                   <span class="token number">471</span>
updates/7/x86_64          CentOS-7 - Updates                                <span class="token number">1,255</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>否则，你可以手动编辑<code v-pre>/etc/yum.repos.d/CentOS-Base.repo</code>进行修改手动启用</p>
</li>
<li>
<p>卸载旧版本</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> yum remove <span class="token function">docker</span> <span class="token punctuation">\</span>
                  docker-client <span class="token punctuation">\</span>
                  docker-client-latest <span class="token punctuation">\</span>
                  docker-common <span class="token punctuation">\</span>
                  docker-latest <span class="token punctuation">\</span>
                  docker-latest-logrotate <span class="token punctuation">\</span>
                  docker-logrotate <span class="token punctuation">\</span>
                  docker-engine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>yum安装gcc相关、软件包</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> gcc yum-utils
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>设置stable镜像仓库</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>更新yum软件包索引</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>yum makecache fast
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>安装DOCKER CE</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>启动docker</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>systemctl start <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>查看版本，并拉取一个<code v-pre>hello-world</code>镜像测试</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> version <span class="token operator">&amp;&amp;</span> <span class="token function">docker</span> run hello-world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>卸载 (如果你需要的话)</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>systemctl stop <span class="token function">docker</span>
yum remove docker-ce docker-ce-cli containerd.io
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/docker
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/containerd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<p>现在你已经成功安装<code v-pre>Docker</code>，快去开始你的<code v-pre>Docker</code>学习之旅吧！</p>
<h4 id="配置阿里容器镜像加速服务" tabindex="-1"><a class="header-anchor" href="#配置阿里容器镜像加速服务"><span>配置阿里容器镜像加速服务</span></a></h4>
<blockquote>
<p>镜像服务链接：https://cr.console.aliyun.com/cn-hangzhou/instances</p>
</blockquote>
<ol>
<li>点击链接进入，注册并登录</li>
<li>进入容器镜像服务界面，点击左侧列表的镜像工具，点击镜像加速器</li>
<li>接下来你可以看到不同操作系统对应的文档说明</li>
</ol>
<p>推荐安装1.10.0以上版本的Docker客户端，参考文档<a href="https://yq.aliyun.com/articles/110806" target="_blank" rel="noopener noreferrer">docker-ce<ExternalLinkIcon/></a></p>
<p>针对Docker客户端版本大于 1.10.0 的用户</p>
<p>您可以通过修改<code v-pre>daemon</code>配置文件<code v-pre>/etc/docker/daemon.json</code>来使用加速器</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/docker
<span class="token function">sudo</span> <span class="token function">tee</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;-</span><span class="token string">'EOF'
{ 
  "registry-mirrors": ["your link"] # 注意这里应该填写你的加速器地址
}
EOF</span>
<span class="token function">sudo</span> systemctl daemon-reload
<span class="token function">sudo</span> systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="docker启动类命令" tabindex="-1"><a class="header-anchor" href="#docker启动类命令"><span>Docker启动类命令</span></a></h4>
<p><em><strong>开机启动：</strong></em><code v-pre>systemctl enable docker</code></p>
<p><em><strong>启动docker：</strong></em><code v-pre>systemctl start docker</code></p>
<p><em><strong>停止docker：</strong></em><code v-pre>systemctl stop docker</code></p>
<p><em><strong>重启docker：</strong></em><code v-pre>systemctl restart docker</code></p>
<p><em><strong>查看docker状态：</strong></em><code v-pre>systemctl status docker</code></p>
<p><em><strong>查看docker概要信息：</strong></em> <code v-pre>docker info</code></p>
<p><em><strong>查看docker总体帮助文档：</strong></em><code v-pre>docker --help</code></p>
<p><em><strong>查看docker命令帮助文档：</strong></em> <code v-pre>docker 具体命令 --help</code></p>
<h2 id="镜像和容器" tabindex="-1"><a class="header-anchor" href="#镜像和容器"><span>镜像和容器</span></a></h2>
<h4 id="搜索镜像" tabindex="-1"><a class="header-anchor" href="#搜索镜像"><span>搜索镜像</span></a></h4>
<blockquote>
<p>docker search [--filter, --limit  , --format,--stars ]</p>
</blockquote>
<p><code v-pre>--limit :</code> 只列出N个镜像，默认25个</p>
<ul>
<li>NAME：镜像的名称；DESCRIPTION：镜像的描述信息；STARS：镜像的星级评分；OFFICIAL：指示镜像是否为官方镜像；AUTOMATED：指示镜像是否为自动构建的镜像。</li>
</ul>
<p>建议 前往 docker 官网搜索 ：https://hub.docker.com</p>
<h4 id="下载-拉取-镜像" tabindex="-1"><a class="header-anchor" href="#下载-拉取-镜像"><span>下载（拉取）镜像</span></a></h4>
<blockquote>
<p>docker pull [-a, -q, --platform, --disable-content-trust] IMAGENAME:[TAG|@DIGEST]</p>
</blockquote>
<ul>
<li><code v-pre>--all-tags , -a</code>：拉取指定名称的镜像的所有标签。</li>
<li><code v-pre>--disable-content-trust</code>：禁用内容信任验证。</li>
<li><code v-pre>--platform</code>：指定拉取的镜像的平台（例如 <code v-pre>linux/amd64</code>）。</li>
<li><code v-pre>--quiet , -q</code>：只显示拉取过程中的摘要信息。</li>
</ul>
<h4 id="查看镜像信息" tabindex="-1"><a class="header-anchor" href="#查看镜像信息"><span>查看镜像信息</span></a></h4>
<blockquote>
<p>docker images 或者 docker image ls</p>
</blockquote>
<p>docker image ls</p>
<ul>
<li><code v-pre>-a, --all</code> 显示所有镜像</li>
<li><code v-pre>--digests</code> 显示摘要</li>
<li><code v-pre>-f --format</code> 根据键值对参数过滤</li>
<li><code v-pre>-q --quit</code> 仅输出<code v-pre>ImageID</code></li>
</ul>
<p>默认以创建时间排序，最近的在前面</p>
<p>列出所有nginx的镜像</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> images <span class="token parameter variable">-aq</span> <span class="token parameter variable">--filter</span><span class="token operator">=</span>reference<span class="token operator">=</span>nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看容器信息</p>
<blockquote>
<p>docker ps  或者 docker container ls</p>
</blockquote>
<p>docker ps</p>
<ul>
<li><code v-pre>-a, --all</code> 显示所有容器（默认为Running的容器）</li>
<li><code v-pre>-q, --quiet</code> 仅输出<code v-pre>ContainerID</code></li>
<li><code v-pre>-f --filter</code> 根据键值对参数过滤</li>
<li><code v-pre>--format </code> 根据键值对参数过滤</li>
<li><code v-pre>-n --last</code>显示 <code v-pre>n</code> 个最近创建的容器</li>
</ul>
<p>列出所有<code v-pre>status</code>为<code v-pre>exited</code>的容器并且使用<code v-pre>--format</code> 自定义输出格式</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-f</span> <span class="token assign-left variable">status</span><span class="token operator">=</span>exited <span class="token parameter variable">--format</span> <span class="token string">"table {{.ID}}: {{.Names}} {{.Command}}"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>仅列出所有<code v-pre>status</code>为<code v-pre>exited</code>的容器的ID</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-f</span> <span class="token assign-left variable">status</span><span class="token operator">=</span>exited <span class="token parameter variable">-q</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="创建并运行容器" tabindex="-1"><a class="header-anchor" href="#创建并运行容器"><span>创建并运行容器</span></a></h4>
<blockquote>
<p>docker run 或者 docker container run</p>
<p>docker run [] IMAGEID [COMMAND] [ARG...]</p>
<p>docker run [] IMAGENAME:[TAG] [COMMAND] [ARG...]</p>
</blockquote>
<p>docker run</p>
<ul>
<li><code v-pre>-a --attach</code>  附加到容器的标准输入（STDIN）、标准输出（STDOUT）或标准错误（STDERR）</li>
<li><code v-pre>--name</code> 为容器命名</li>
<li><code v-pre> -d --detach</code> 在后台模式下运行容器</li>
<li><code v-pre>-e --env</code>设置容器的环境变量</li>
<li><code v-pre> -p --publish</code>将容器的端口与主机的端口进行映射</li>
<li><code v-pre> -v --volume</code>：将主机的目录或文件与容器的目录或文件进行挂载</li>
<li><code v-pre>-it</code> 参数结合了两个选项：<code v-pre>-i</code>（交互式）和 <code v-pre>-t</code>（终端）。它用于在容器内部创建一个交互式终端会话，使你能够与容器进行交互</li>
<li><code v-pre>--rm</code> 容器退出时自动删除</li>
<li><code v-pre>--restart</code> 默认为<code v-pre>no</code>，容器退出不重启，<code v-pre>always </code>容器退出总是重启</li>
<li><code v-pre>-h --hostname</code> 设置容器的主机名 ，相当于修改<code v-pre>/etc/hostname</code></li>
<li><code v-pre>--add-host</code>  设置容器的主机名称映射，相当于修改<code v-pre>/etc/hosts</code></li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--name</span> test-nginx-01 <span class="token parameter variable">-p</span> <span class="token number">6363</span>:80 <span class="token parameter variable">--rm</span> <span class="token parameter variable">-h</span> hurt --add-host<span class="token operator">=</span>tinayu:8.8.8.8 <span class="token parameter variable">-d</span> nginx:1.21.6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--name</span> mycontainer <span class="token parameter variable">-d</span> <span class="token parameter variable">-it</span> alpine /bin/sh 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>需要注意的是，容器如果没有进程在运行，会直接退出，这里加了<code v-pre>-it</code> 便不会退出</p>
<h4 id="删除容器" tabindex="-1"><a class="header-anchor" href="#删除容器"><span>删除容器</span></a></h4>
<blockquote>
<p>docker rm [OPTIONS] CONTAINERNAME ...</p>
<p>docker rm [OPTIONS] CONTAINERID ...</p>
<p>docker container rm</p>
</blockquote>
<ul>
<li><code v-pre>-f --force </code>强制删除正在运行的容器</li>
<li><code v-pre>-v --volumes</code> 删除容器正在使用的数据卷</li>
</ul>
<p>删除 名为<code v-pre>redis-test</code>的容器，并删除使用的数据卷</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code> <span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">--force</span> <span class="token parameter variable">-v</span> redis-test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除所有状态为已退出(<code v-pre>exited </code>)的容器</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span>  <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-f</span> <span class="token assign-left variable">status</span><span class="token operator">=</span>exited <span class="token parameter variable">-q</span><span class="token variable">)</span></span>
<span class="token comment"># 或者</span>
<span class="token variable"><span class="token variable">`</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-f</span> <span class="token assign-left variable">status</span><span class="token operator">=</span>exited <span class="token parameter variable">-q</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">docker</span> <span class="token function">rm</span><span class="token variable">`</span></span>            
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="进入容器" tabindex="-1"><a class="header-anchor" href="#进入容器"><span>进入容器</span></a></h4>
<blockquote>
<p>docker exec [OPTIONS] CONTAINERNAME COMMAND [ARG...]</p>
<p>docker exec [OPTIONS] CONTAINERID COMMAND [ARG...]</p>
<p>docker container exec</p>
</blockquote>
<p>docker exec</p>
<ul>
<li><code v-pre>-d, --detach</code> 以后台的方式在容器中执行命令</li>
<li><code v-pre>-it </code> 进入容器</li>
<li><code v-pre>-e  --env</code> 设置环境变量</li>
<li><code v-pre>-w --workdir</code>  设置工作目录</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-w</span> /root <span class="token parameter variable">-e</span> <span class="token assign-left variable">my_website</span><span class="token operator">=</span>shenjianl.cn <span class="token parameter variable">-it</span> mycontainer /bin/sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>需要注意的是一个容器运行时必须有前台进程才不会直接退出</p>
</blockquote>
<h4 id="查看容器日志" tabindex="-1"><a class="header-anchor" href="#查看容器日志"><span>查看容器日志</span></a></h4>
<blockquote>
<p>docker logs [OPTIONS] CONTAINERNAME</p>
<p>docker logs [OPTIONS] CONTAINERID</p>
<p>docker container logs</p>
</blockquote>
<p>docker logs</p>
<ul>
<li><code v-pre>-f --follow</code> 持续输出日志，占用shell终端</li>
<li><code v-pre>-n --tail</code> 查看最近 n 条容器日志</li>
<li><code v-pre>--details</code> 显示详细信息</li>
<li><code v-pre>-t --timestamps</code> 显示时间戳</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> logs <span class="token parameter variable">-t</span> <span class="token parameter variable">-n</span> <span class="token number">30</span> <span class="token parameter variable">--details</span> reference 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="容器文件拷贝" tabindex="-1"><a class="header-anchor" href="#容器文件拷贝"><span>容器文件拷贝</span></a></h4>
<blockquote>
<p>docker cp [OPTIONS] CONTAINER:SRC_PATH DEST_PATH</p>
<p>docker cp [OPTIONS] SRC_PATH  CONTAINER:DEST_PATH</p>
<p>docker container cp</p>
</blockquote>
<ul>
<li><code v-pre>-q</code> 静默输出，没有任何提示</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span>  mycontainer  /bin/sh <span class="token comment"># 先进入容器查看一下文件</span>
<span class="token function">docker</span> <span class="token function">cp</span> mycontainer:/var/log /tmp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="停止容器" tabindex="-1"><a class="header-anchor" href="#停止容器"><span>停止容器</span></a></h4>
<blockquote>
<p>docker stop [OPTIONS] CONTAINER [CONTAINER...]</p>
<p>docker container stop</p>
</blockquote>
<ul>
<li>
<p><code v-pre>-t --time</code> 等待容器停止的时间，默认为10s，超时会强制终止容器</p>
</li>
<li>
<p><code v-pre>-s, --signal</code></p>
<ul>
<li>
<p><code v-pre>SIGTERM</code>：默认值，发送终止信号。这是一个优雅的停止信号，允许容器执行清理操作并停止运行。</p>
<p><code v-pre>SIGKILL</code>：发送强制终止信号。这是一个立即停止容器的信号，不会给容器执行清理操作的机会，会直接终止容器的运行。</p>
</li>
</ul>
</li>
</ul>
<h4 id="运行容器" tabindex="-1"><a class="header-anchor" href="#运行容器"><span>运行容器</span></a></h4>
<blockquote>
<p>docker start [OPTIONS] CONTAINER [CONTAINER...]</p>
<p>docker container start</p>
</blockquote>
<h4 id="查看镜像详细信息" tabindex="-1"><a class="header-anchor" href="#查看镜像详细信息"><span>查看镜像详细信息</span></a></h4>
<blockquote>
<p>docker image inspect [OPTIONS] IMAGE [IMAGE...]</p>
</blockquote>
<ul>
<li><code v-pre>-f, --format</code></li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> image inspect  aisi-first:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="数据卷" tabindex="-1"><a class="header-anchor" href="#数据卷"><span>数据卷</span></a></h2>
<h4 id="创建数据卷" tabindex="-1"><a class="header-anchor" href="#创建数据卷"><span>创建数据卷</span></a></h4>
<blockquote>
<p>docker volume create [OPTIONS] [VOLUME]</p>
</blockquote>
<p>docker volume create</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> create volune hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="查看数据卷" tabindex="-1"><a class="header-anchor" href="#查看数据卷"><span>查看数据卷</span></a></h4>
<blockquote>
<p>docker volume ls [OPTIONS]</p>
</blockquote>
<p>docker volume ls</p>
<ul>
<li><code v-pre>-q, --quiet</code> 仅输出名称</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> volume <span class="token function">ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>docker volume inspect [OPTIONS] VOLUME [VOLUME...]</p>
</blockquote>
<p>docker volume inspect</p>
<ul>
<li><code v-pre>-f --format</code></li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> volume inspect hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> volume inspect <span class="token parameter variable">--format</span> <span class="token string">'{{ .Mountpoint }}'</span> hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="删除数据卷" tabindex="-1"><a class="header-anchor" href="#删除数据卷"><span>删除数据卷</span></a></h4>
<blockquote>
<p>docker volume rm [OPTIONS] VOLUME [VOLUME...]</p>
</blockquote>
<p>docker volume rm</p>
<ul>
<li><code v-pre>-f --force</code>  强制删除</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> volume <span class="token function">rm</span> hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="网络" tabindex="-1"><a class="header-anchor" href="#网络"><span>网络</span></a></h2>
<h4 id="创建网络" tabindex="-1"><a class="header-anchor" href="#创建网络"><span>创建网络</span></a></h4>
<blockquote>
<p>docker network create [OPTIONS] NETWORK</p>
</blockquote>
<p>docker network create</p>
<ul>
<li><code v-pre>-d --driver</code> 网络的类型</li>
<li><code v-pre>--network</code>   网络的类型</li>
<li><code v-pre>--gatewat</code> 网关</li>
<li><code v-pre>--label </code>元数据</li>
<li><code v-pre>--subnet</code> 子网</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> network create <span class="token parameter variable">--driver</span><span class="token operator">=</span>bridge <span class="token parameter variable">--subnet</span><span class="token operator">=</span><span class="token number">192.168</span>.0.0/16 br0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> network create <span class="token punctuation">\</span>
  <span class="token parameter variable">--driver</span><span class="token operator">=</span>bridge <span class="token punctuation">\</span>
  <span class="token parameter variable">--subnet</span><span class="token operator">=</span><span class="token number">172.28</span>.0.0/16 <span class="token punctuation">\</span>
  --ip-range<span class="token operator">=</span><span class="token number">172.28</span>.5.0/24 <span class="token punctuation">\</span>
  <span class="token parameter variable">--gateway</span><span class="token operator">=</span><span class="token number">172.28</span>.5.254 <span class="token punctuation">\</span>
  br0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> network create <span class="token parameter variable">-d</span> overlay <span class="token punctuation">\</span>
  <span class="token parameter variable">--subnet</span><span class="token operator">=</span><span class="token number">192.168</span>.10.0/25 <span class="token punctuation">\</span>
  <span class="token parameter variable">--subnet</span><span class="token operator">=</span><span class="token number">192.168</span>.20.0/25 <span class="token punctuation">\</span>
  <span class="token parameter variable">--gateway</span><span class="token operator">=</span><span class="token number">192.168</span>.10.100 <span class="token punctuation">\</span>
  <span class="token parameter variable">--gateway</span><span class="token operator">=</span><span class="token number">192.168</span>.20.100 <span class="token punctuation">\</span>
  --aux-address<span class="token operator">=</span><span class="token string">"my-router=192.168.10.5"</span> --aux-address<span class="token operator">=</span><span class="token string">"my-switch=192.168.10.6"</span> <span class="token punctuation">\</span>
  --aux-address<span class="token operator">=</span><span class="token string">"my-printer=192.168.20.5"</span> --aux-address<span class="token operator">=</span><span class="token string">"my-nas=192.168.20.6"</span> <span class="token punctuation">\</span>
  my-multihost-network
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> network create --config-only <span class="token parameter variable">--subnet</span> <span class="token number">192.168</span>.100.0/24 <span class="token parameter variable">--gateway</span> <span class="token number">192.168</span>.100.115 mv-config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="查看网络" tabindex="-1"><a class="header-anchor" href="#查看网络"><span>查看网络</span></a></h4>
<blockquote>
<p>docker network ls [OPTIONS]</p>
</blockquote>
<p>docker network ls</p>
<ul>
<li><code v-pre>-f --filter</code> 根据过滤条件来过滤</li>
<li><code v-pre>--no-trunc</code> 不截断网络ID</li>
<li><code v-pre>-q --quit</code> 仅输出网络ID</li>
<li><code v-pre>--format</code>  格式化输出</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> network <span class="token function">ls</span> <span class="token parameter variable">--format</span> <span class="token string">"table {{.ID}}<span class="token entity" title="\t">\t</span>{{.Name}}"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> network <span class="token function">ls</span> <span class="token parameter variable">-f</span> <span class="token assign-left variable">DRIVER</span><span class="token operator">=</span>bridge <span class="token parameter variable">--format</span> <span class="token string">"table {{.ID}}<span class="token entity" title="\t">\t</span>{{.Name}}"</span> --no-trunc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>docker network inspect [OPTIONS] NETWORK [NETWORK...]</p>
</blockquote>
<p>docker network inspect</p>
<ul>
<li><code v-pre>--format</code> 格式化输出</li>
<li><code v-pre>--verbose </code> 提供详细的诊断信息</li>
</ul>
<h4 id="连接网络" tabindex="-1"><a class="header-anchor" href="#连接网络"><span>连接网络</span></a></h4>
<blockquote>
<p>docker network connect [OPTIONS] NETWORK CONTAINER</p>
</blockquote>
<p>docker network connect</p>
<ul>
<li><code v-pre>--ip</code> 为容器分配在网络中的<code v-pre>IP</code></li>
<li><code v-pre>--alias</code>  为容器分配在网络中的主机别名</li>
<li><code v-pre>--link</code>  指定容器的别名</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code> <span class="token function">docker</span> network connect <span class="token parameter variable">--alias</span> test-net-container hello-net  mycontainer
 <span class="token function">docker</span> <span class="token builtin class-name">exec</span> mycontainer <span class="token function">ping</span> test-net-container <span class="token comment"># 查看是否配置成功</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>为container1指定了一个别名c1 ，container2可以通过别名 c1 来访问 container1，而无需知道其 IP 地址。</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> network connect <span class="token parameter variable">--link</span> container1:c1 hello-net container2 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="删除网络" tabindex="-1"><a class="header-anchor" href="#删除网络"><span>删除网络</span></a></h4>
<blockquote>
<p>docker network rm NETWORK [NETWORK...]</p>
</blockquote>
<p>docker network rm</p>
<ul>
<li><code v-pre>-f </code> 强制删除网络</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> network disconnect hello-net mycontainer  <span class="token comment"># 需要先解除连接才能删除</span>
<span class="token function">docker</span> network <span class="token function">rm</span>  hello-net   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="应用" tabindex="-1"><a class="header-anchor" href="#应用"><span>应用</span></a></h2>
<h4 id="部署mysql8" tabindex="-1"><a class="header-anchor" href="#部署mysql8"><span>部署MySQL8</span></a></h4>
<ul>
<li><code v-pre>-d</code> 后台运行</li>
<li><code v-pre>-v</code> 持久化存储</li>
<li><code v-pre>-p</code> 映射3306端口</li>
<li><code v-pre>-e</code> 设置root密码</li>
<li><code v-pre>--restart</code> 设置停止后立即重启</li>
<li><code v-pre>--name</code> 命名为MySQL8.0.31</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code> <span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\</span>
 <span class="token parameter variable">-v</span> /data/mysql/mysql8.0.31:/var/lib/mysql <span class="token punctuation">\</span>
 <span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token punctuation">\</span>
 <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>mysql_password  <span class="token punctuation">\</span>
 <span class="token parameter variable">--restart</span> always  <span class="token punctuation">\</span>
 <span class="token parameter variable">--name</span> MySQL8.0.31  <span class="token punctuation">\</span>
 mysql:8.0.31 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>连接测试</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>mysql <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span> <span class="token parameter variable">-h</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> inspect <span class="token parameter variable">-f</span> <span class="token string">'{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}'</span> MySQL8.0.31<span class="token variable">)</span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="部署redis7" tabindex="-1"><a class="header-anchor" href="#部署redis7"><span>部署Redis7</span></a></h4>
<ul>
<li><code v-pre>-d</code>后台运行</li>
<li><code v-pre>-v</code> 持久化存储</li>
<li><code v-pre>-p</code>映射6379端口</li>
<li><code v-pre>-e </code>设置redis密码</li>
<li><code v-pre>--restart</code>设置停止后立即重启</li>
<li><code v-pre>--name</code>命名为Redis7</li>
<li><code v-pre>aof </code> 开启Redis的AOF</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\</span>
<span class="token parameter variable">-v</span> /data/redis/redis7:/data <span class="token punctuation">\</span>
<span class="token parameter variable">-p</span> <span class="token number">6379</span>:6379 <span class="token punctuation">\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">REDIS_PASSWORD</span><span class="token operator">=</span>redis_password <span class="token punctuation">\</span>
<span class="token parameter variable">--restart</span> always <span class="token punctuation">\</span>
<span class="token parameter variable">--name</span> Redis7 <span class="token punctuation">\</span>
redis:7.2.4 redis-server <span class="token parameter variable">--appendonly</span> <span class="token function">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="部署nginx" tabindex="-1"><a class="header-anchor" href="#部署nginx"><span>部署Nginx</span></a></h4>
<ul>
<li><code v-pre>-d</code>后台运行</li>
<li><code v-pre>-v</code> 持久化存储</li>
<li><code v-pre>-p</code> 映射80端口</li>
<li><code v-pre>--restart</code> 设置停止后立即重启</li>
<li><code v-pre>--name</code>命令为Nginx1.21.6</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\</span>
<span class="token parameter variable">-v</span> /data/nginx/nginx1.21.6:/usr/share/nginx/html <span class="token punctuation">\</span>
<span class="token parameter variable">-p</span> <span class="token number">443</span>:80 <span class="token punctuation">\</span>
<span class="token parameter variable">--restart</span> always <span class="token punctuation">\</span>
<span class="token parameter variable">--name</span> Nginx1.21.6 <span class="token punctuation">\</span>
nginx:1.21.6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


