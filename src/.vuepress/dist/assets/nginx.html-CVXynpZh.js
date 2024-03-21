import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as i,b as s}from"./app-B74dJ_e7.js";const a={},l=s(`<h3 id="nginx安装" tabindex="-1"><a class="header-anchor" href="#nginx安装"><span>nginx安装</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>mkdir -p /opt/software
tar zxvf /tmp/nginx-1.21.6.tar.gz -C /opt/software
ln -s /opt/software/nginx-1.21.6 /opt/software/nginx
yum install -y gcc pcre pcre-devel zlib zlib-devel
cd /opt/software/nginx
./configure --with-http_ssl_module --prefix=/usr/local/nginx
make 
make install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nginx命令启动启动-不建议" tabindex="-1"><a class="header-anchor" href="#nginx命令启动启动-不建议"><span>nginx命令启动启动（不建议）</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code> /usr/local/nginx/sbin/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建系统守护进程-建议" tabindex="-1"><a class="header-anchor" href="#创建系统守护进程-建议"><span>创建系统守护进程（建议）</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>vim /usr/lib/systemd/system/nginx.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>添加如下内容：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>[Unit]
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重新加载系统服务</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl daemon-reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置开机自启</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl enable nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动nginx（建议使用）</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl restart nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="nginx-conf-配置解析" tabindex="-1"><a class="header-anchor" href="#nginx-conf-配置解析"><span>nginx.conf 配置解析</span></a></h3><p><strong>1）worker_processes</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>worker_processes  1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em><strong>用于指定Nginx主进程的工作进程数</strong></em></p><p>通常将<code>worker_processes</code>设置为CPU核心的数量，或者稍微小于它，以充分利用服务器的性能。</p><p><strong>2）worker_connections</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>events {
    worker_connections  1024;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>用于指定每个工作进程能够同时处理的最大连接数</strong></em></p><p><code>worker_connections</code> 指令定义了每个工作进程能够同时处理的最大连接数。在高负载环境中，可能需要适当地调整这个值以确保足够的并发连接。这个值的大小通常取决于服务器的硬件规格以及应用程序的性能需求</p><p><code>worker_connections</code> 的值不能超过系统限制，您可以使用以下命令查看当前系统的限制：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ulimit -n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果需要提高系统的文件描述符限制，您可以修改系统的配置文件 <code>/etc/security/limits.conf</code></p><p><strong>3）type</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>http {
    include       mime.types;
    default_type  application/octet-stream;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><code>include mime.types;</code>: 这一行指令用于包含一个文件，其中包含了与文件扩展名相关联的 MIME 类型的配置信息。使得服务器正确地识别和处理不同类型的文件。</li><li><code>default_type application/octet-stream;</code>: 如果无法根据文件扩展名找到对应的 MIME 类型，Nginx 将使用 <code>application/octet-stream</code> 作为默认的 MIME 类型，表示二进制流。</li></ol><p><strong>4）sendfile</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>http {
	sendfile        on;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>启用了<code>sendfile</code>特性</strong></em>。<code>sendfile</code>是一个系统调用，它允许直接从文件系统传输数据到网络连接，而无需先将数据从文件读入用户空间缓冲区。这样可以提高文件传输的效率，尤其在处理大文件时。</p><p><strong>5）server</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>http{
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><code>listen 80;</code>: 指定服务器监听端口为80，用于处理HTTP请求。</li><li><code>server_name localhost;</code>: 设置服务器的名称为localhost。</li><li><code>location / {...}</code>: 配置处理请求的位置。在这里，所有的请求都将被定向到<code>html</code>目录下，并尝试寻找<code>index.html</code>或<code>index.htm</code>文件进行服务。</li><li><code>error_page 500 502 503 504 /50x.html;</code>: 定义了当发生500、502、503、504错误时的错误页面。具体的错误页面是<code>50x.html</code>。</li><li><code>location = /50x.html {...}</code>: 配置了<code>50x.html</code>页面的具体位置，同样位于<code>html</code>目录下。</li></ol><h3 id="虚拟主机配置" tabindex="-1"><a class="header-anchor" href="#虚拟主机配置"><span>虚拟主机配置</span></a></h3><h3 id="正想代理-反向代理、网关、隧道式代理" tabindex="-1"><a class="header-anchor" href="#正想代理-反向代理、网关、隧道式代理"><span>正想代理，反向代理、网关、隧道式代理</span></a></h3><h3 id="负载均衡配置" tabindex="-1"><a class="header-anchor" href="#负载均衡配置"><span>负载均衡配置</span></a></h3><h3 id="负载均衡策略" tabindex="-1"><a class="header-anchor" href="#负载均衡策略"><span>负载均衡策略</span></a></h3><p><strong>轮询策略</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>upstream httpds{
        server 192.168.1.107 weight=2;
        server 192.168.1.108 weight=1;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每三次请求，<code>192.168.1.107</code>处理两次，<code>192.168.1.108</code>处理1次</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>upstream httpds{
        server 192.168.1.107 weight=2 down;
        server 192.168.1.108 weight=1 up; #默认是 up
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>192.168.1.107</code>直接下线，不再接收请求</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>upstream httpds{
        server 192.168.1.107 weight=2 down;
        server 192.168.1.108 weight=1 down;
        server 192.168.1.109 weight=1 backup; 
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>backup</code> 表示仅当其他<code>server</code>全部停机，<code>192.168.1.109</code> 才上线使用</p><h3 id="urlwrite" tabindex="-1"><a class="header-anchor" href="#urlwrite"><span>urlwrite</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code> upstream httpds{
        server 192.168.1.107 weight=2;
        server 192.168.1.108 weight=1;
    }
 location / {
          rewrite ^/([0-9]+).html$    /index.html?pageNum=$1 break;
          proxy_pass http://httpds;
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="防盗链" tabindex="-1"><a class="header-anchor" href="#防盗链"><span>防盗链</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>valid_referers none | blocked | server_names | strings... ;
if($invalid_referer){
	return 403;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="返回错误页面" tabindex="-1"><a class="header-anchor" href="#返回错误页面"><span>返回错误页面</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>  server {
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,52),d=[l];function r(t,c){return n(),i("div",null,d)}const m=e(a,[["render",r],["__file","nginx.html.vue"]]),u=JSON.parse('{"path":"/Middleware/nginx/nginx.html","title":"nginx安装与配置","lang":"zh-CN","frontmatter":{"title":"nginx安装与配置","date":"2024-03-16T00:00:00.000Z","category":"webServer","tag":["nginx"],"timeline":true,"star":true,"description":"nginx安装 nginx命令启动启动（不建议） 创建系统守护进程（建议） 添加如下内容： 重新加载系统服务 设置开机自启 启动nginx（建议使用） nginx.conf 配置解析 1）worker_processes 用于指定Nginx主进程的工作进程数 通常将worker_processes设置为CPU核心的数量，或者稍微小于它，以充分利用服务器...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/Middleware/nginx/nginx.html"}],["meta",{"property":"og:site_name","content":"爱思文档"}],["meta",{"property":"og:title","content":"nginx安装与配置"}],["meta",{"property":"og:description","content":"nginx安装 nginx命令启动启动（不建议） 创建系统守护进程（建议） 添加如下内容： 重新加载系统服务 设置开机自启 启动nginx（建议使用） nginx.conf 配置解析 1）worker_processes 用于指定Nginx主进程的工作进程数 通常将worker_processes设置为CPU核心的数量，或者稍微小于它，以充分利用服务器..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-17T01:43:09.000Z"}],["meta",{"property":"article:author","content":"shenjianZ"}],["meta",{"property":"article:tag","content":"nginx"}],["meta",{"property":"article:published_time","content":"2024-03-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-17T01:43:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"nginx安装与配置\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-16T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-17T01:43:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"shenjianZ\\",\\"url\\":\\"https://shenjianl.cn\\"}]}"]]},"headers":[{"level":3,"title":"nginx安装","slug":"nginx安装","link":"#nginx安装","children":[]},{"level":3,"title":"nginx命令启动启动（不建议）","slug":"nginx命令启动启动-不建议","link":"#nginx命令启动启动-不建议","children":[]},{"level":3,"title":"创建系统守护进程（建议）","slug":"创建系统守护进程-建议","link":"#创建系统守护进程-建议","children":[]},{"level":3,"title":"nginx.conf 配置解析","slug":"nginx-conf-配置解析","link":"#nginx-conf-配置解析","children":[]},{"level":3,"title":"虚拟主机配置","slug":"虚拟主机配置","link":"#虚拟主机配置","children":[]},{"level":3,"title":"正想代理，反向代理、网关、隧道式代理","slug":"正想代理-反向代理、网关、隧道式代理","link":"#正想代理-反向代理、网关、隧道式代理","children":[]},{"level":3,"title":"负载均衡配置","slug":"负载均衡配置","link":"#负载均衡配置","children":[]},{"level":3,"title":"负载均衡策略","slug":"负载均衡策略","link":"#负载均衡策略","children":[]},{"level":3,"title":"urlwrite","slug":"urlwrite","link":"#urlwrite","children":[]},{"level":3,"title":"防盗链","slug":"防盗链","link":"#防盗链","children":[]},{"level":3,"title":"返回错误页面","slug":"返回错误页面","link":"#返回错误页面","children":[]}],"git":{"createdTime":1710639789000,"updatedTime":1710639789000,"contributors":[{"name":"shenjianZ","email":"shenjianZLT@gmail.com","commits":1}]},"readingTime":{"minutes":3.24,"words":971},"filePathRelative":"Middleware/nginx/nginx.md","localizedDate":"2024年3月16日","excerpt":"<h3>nginx安装</h3>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>mkdir -p /opt/software\\ntar zxvf /tmp/nginx-1.21.6.tar.gz -C /opt/software\\nln -s /opt/software/nginx-1.21.6 /opt/software/nginx\\nyum install -y gcc pcre pcre-devel zlib zlib-devel\\ncd /opt/software/nginx\\n./configure --with-http_ssl_module --prefix=/usr/local/nginx\\nmake \\nmake install\\n</code></pre></div>","autoDesc":true}');export{m as comp,u as data};
