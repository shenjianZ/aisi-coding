<template><div><h3 id="nginx安装" tabindex="-1"><a class="header-anchor" href="#nginx安装"><span>nginx安装</span></a></h3>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /opt/software
<span class="token function">tar</span> zxvf /tmp/nginx-1.21.6.tar.gz <span class="token parameter variable">-C</span> /opt/software
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /opt/software/nginx-1.21.6 /opt/software/nginx
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> gcc pcre pcre-devel zlib zlib-devel
<span class="token builtin class-name">cd</span> /opt/software/nginx
./configure --with-http_ssl_module <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/nginx
<span class="token function">make</span> 
<span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nginx命令启动启动-不建议" tabindex="-1"><a class="header-anchor" href="#nginx命令启动启动-不建议"><span>nginx命令启动启动（不建议）</span></a></h3>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code> /usr/local/nginx/sbin/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建系统守护进程-建议" tabindex="-1"><a class="header-anchor" href="#创建系统守护进程-建议"><span>创建系统守护进程（建议）</span></a></h3>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">vim</span> /usr/lib/systemd/system/nginx.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>添加如下内容：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>nginx - web server
<span class="token assign-left variable">After</span><span class="token operator">=</span>network.target remote-fs.target nss-lookup.target
<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>forking
<span class="token assign-left variable">PIDFile</span><span class="token operator">=</span>/usr/local/nginx/logs/nginx.pid
<span class="token assign-left variable">ExecStartPre</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx <span class="token parameter variable">-t</span> <span class="token parameter variable">-c</span> /usr/local/nginx/conf/nginx.conf
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx <span class="token parameter variable">-c</span> /usr/local/nginx/conf/nginx.conf
<span class="token assign-left variable">ExecReload</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx <span class="token parameter variable">-s</span> reload
<span class="token assign-left variable">ExecStop</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx <span class="token parameter variable">-s</span> stop
<span class="token assign-left variable">ExecQuit</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx <span class="token parameter variable">-s</span> quit
<span class="token assign-left variable">PrivateTmp</span><span class="token operator">=</span>true
<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重新加载系统服务</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>systemctl daemon-reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置开机自启</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动nginx（建议使用）</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>systemctl restart nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="nginx-conf-配置解析" tabindex="-1"><a class="header-anchor" href="#nginx-conf-配置解析"><span>nginx.conf 配置解析</span></a></h3>
<p><strong>1）worker_processes</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>worker_processes  <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em><strong>用于指定Nginx主进程的工作进程数</strong></em></p>
<p>通常将<code v-pre>worker_processes</code>设置为CPU核心的数量，或者稍微小于它，以充分利用服务器的性能。</p>
<p><strong>2）worker_connections</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>events <span class="token punctuation">{</span>
    worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>用于指定每个工作进程能够同时处理的最大连接数</strong></em></p>
<p><code v-pre>worker_connections</code> 指令定义了每个工作进程能够同时处理的最大连接数。在高负载环境中，可能需要适当地调整这个值以确保足够的并发连接。这个值的大小通常取决于服务器的硬件规格以及应用程序的性能需求</p>
<p><code v-pre>worker_connections</code> 的值不能超过系统限制，您可以使用以下命令查看当前系统的限制：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">ulimit</span> <span class="token parameter variable">-n</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果需要提高系统的文件描述符限制，您可以修改系统的配置文件 <code v-pre>/etc/security/limits.conf</code></p>
<p><strong>3）type</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>http <span class="token punctuation">{</span>
    include       mime.types<span class="token punctuation">;</span>
    default_type  application/octet-stream<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li><code v-pre>include mime.types;</code>:  这一行指令用于包含一个文件，其中包含了与文件扩展名相关联的 MIME 类型的配置信息。使得服务器正确地识别和处理不同类型的文件。</li>
<li><code v-pre>default_type application/octet-stream;</code>: 如果无法根据文件扩展名找到对应的 MIME 类型，Nginx 将使用 <code v-pre>application/octet-stream</code> 作为默认的 MIME 类型，表示二进制流。</li>
</ol>
<p><strong>4）sendfile</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>http <span class="token punctuation">{</span>
	sendfile        on<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>启用了<code v-pre>sendfile</code>特性</strong></em>。<code v-pre>sendfile</code>是一个系统调用，它允许直接从文件系统传输数据到网络连接，而无需先将数据从文件读入用户空间缓冲区。这样可以提高文件传输的效率，尤其在处理大文件时。</p>
<p><strong>5）server</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>http<span class="token punctuation">{</span>
	server <span class="token punctuation">{</span>
        listen       <span class="token number">80</span><span class="token punctuation">;</span>
        server_name  localhost<span class="token punctuation">;</span>

        location / <span class="token punctuation">{</span>
            root   html<span class="token punctuation">;</span>
            index  index.html index.htm<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
 
        error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
            root   html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li><code v-pre>listen 80;</code>: 指定服务器监听端口为80，用于处理HTTP请求。</li>
<li><code v-pre>server_name localhost;</code>: 设置服务器的名称为localhost。</li>
<li><code v-pre>location / {...}</code>: 配置处理请求的位置。在这里，所有的请求都将被定向到<code v-pre>html</code>目录下，并尝试寻找<code v-pre>index.html</code>或<code v-pre>index.htm</code>文件进行服务。</li>
<li><code v-pre>error_page 500 502 503 504 /50x.html;</code>: 定义了当发生500、502、503、504错误时的错误页面。具体的错误页面是<code v-pre>50x.html</code>。</li>
<li><code v-pre>location = /50x.html {...}</code>: 配置了<code v-pre>50x.html</code>页面的具体位置，同样位于<code v-pre>html</code>目录下。</li>
</ol>
<h3 id="虚拟主机配置" tabindex="-1"><a class="header-anchor" href="#虚拟主机配置"><span>虚拟主机配置</span></a></h3>
<h3 id="正想代理-反向代理、网关、隧道式代理" tabindex="-1"><a class="header-anchor" href="#正想代理-反向代理、网关、隧道式代理"><span>正想代理，反向代理、网关、隧道式代理</span></a></h3>
<h3 id="负载均衡配置" tabindex="-1"><a class="header-anchor" href="#负载均衡配置"><span>负载均衡配置</span></a></h3>
<h3 id="负载均衡策略" tabindex="-1"><a class="header-anchor" href="#负载均衡策略"><span>负载均衡策略</span></a></h3>
<p><strong>轮询策略</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>upstream httpds<span class="token punctuation">{</span>
        server <span class="token number">192.168</span>.1.107 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>
        server <span class="token number">192.168</span>.1.108 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每三次请求，<code v-pre>192.168.1.107</code>处理两次，<code v-pre>192.168.1.108</code>处理1次</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>upstream httpds<span class="token punctuation">{</span>
        server <span class="token number">192.168</span>.1.107 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">2</span> down<span class="token punctuation">;</span>
        server <span class="token number">192.168</span>.1.108 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">1</span> up<span class="token punctuation">;</span> <span class="token comment">#默认是 up</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>192.168.1.107</code>直接下线，不再接收请求</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>upstream httpds<span class="token punctuation">{</span>
        server <span class="token number">192.168</span>.1.107 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">2</span> down<span class="token punctuation">;</span>
        server <span class="token number">192.168</span>.1.108 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">1</span> down<span class="token punctuation">;</span>
        server <span class="token number">192.168</span>.1.109 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">1</span> backup<span class="token punctuation">;</span> 
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>backup</code> 表示仅当其他<code v-pre>server</code>全部停机，<code v-pre>192.168.1.109</code> 才上线使用</p>
<h3 id="urlwrite" tabindex="-1"><a class="header-anchor" href="#urlwrite"><span>urlwrite</span></a></h3>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code> upstream httpds<span class="token punctuation">{</span>
        server <span class="token number">192.168</span>.1.107 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>
        server <span class="token number">192.168</span>.1.108 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 location / <span class="token punctuation">{</span>
          rewrite ^/<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span>-9<span class="token punctuation">]</span>+<span class="token punctuation">)</span>.html$    /index.html?pageNum<span class="token operator">=</span><span class="token variable">$1</span> <span class="token builtin class-name">break</span><span class="token punctuation">;</span>
          proxy_pass http://httpds<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="防盗链" tabindex="-1"><a class="header-anchor" href="#防盗链"><span>防盗链</span></a></h3>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>valid_referers none <span class="token operator">|</span> blocked <span class="token operator">|</span> server_names <span class="token operator">|</span> strings<span class="token punctuation">..</span>. <span class="token punctuation">;</span>
if<span class="token punctuation">(</span><span class="token variable">$invalid_referer</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token builtin class-name">return</span> <span class="token number">403</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="返回错误页面" tabindex="-1"><a class="header-anchor" href="#返回错误页面"><span>返回错误页面</span></a></h3>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>  server <span class="token punctuation">{</span>
    location / <span class="token punctuation">{</span>
          rewrite ^/<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span>-9<span class="token punctuation">]</span>+<span class="token punctuation">)</span>.html$    /index.html?pageNum<span class="token operator">=</span><span class="token variable">$1</span> <span class="token builtin class-name">break</span><span class="token punctuation">;</span>
          valid_referers none <span class="token number">192.168</span>.1.106 <span class="token number">192.168</span>.1.107 <span class="token punctuation">;</span>
          if<span class="token punctuation">(</span><span class="token variable">$invalid_referer</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
              <span class="token builtin class-name">return</span> <span class="token number">401</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
           root   html<span class="token punctuation">;</span>
           index  index.html index.htm<span class="token punctuation">;</span>

        <span class="token punctuation">}</span>
        error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
            root   html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        error_page   <span class="token number">401</span>  /401.html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> /401.html <span class="token punctuation">{</span>
            root   html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


