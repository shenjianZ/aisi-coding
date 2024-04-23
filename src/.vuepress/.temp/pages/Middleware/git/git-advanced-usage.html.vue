<template><div><h2 id="git客户端" tabindex="-1"><a class="header-anchor" href="#git客户端"><span>Git客户端</span></a></h2>
<p><a href="https://desktop.github.com/" target="_blank" rel="noopener noreferrer">GitHub Desktop<ExternalLinkIcon/></a></p>
<ul>
<li>登录你的GitHub账号</li>
<li>设置你的创建仓库的默认分支名称</li>
<li>查看、设置你的个人签名</li>
<li>可以克隆、拉取、推送代码</li>
</ul>
<h2 id="idea中使用git" tabindex="-1"><a class="header-anchor" href="#idea中使用git"><span>IDEA中使用Git</span></a></h2>
<ul>
<li>下载Gitee插件，并登录</li>
</ul>
<p><strong>单分支冲突</strong></p>
<p><em>推送时</em>修改了文件的同一行，出现了冲突</p>
<p><strong>多分支冲突</strong></p>
<p>多个分支开发不同模块的功能，<em>分支合并时</em>出现了冲突</p>
<p>Pull Request</p>
<h2 id="gitlab的部署与使用-devops" tabindex="-1"><a class="header-anchor" href="#gitlab的部署与使用-devops"><span>GitLab的部署与使用 （DevOps）</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p><span>注意： 一定要使用普通账户去操作，不然会有权限问题</span></p>
</div>
<p><a href="https://packages.gitlab.cn" target="_blank" rel="noopener noreferrer">Linux Rpm包<ExternalLinkIcon/></a></p>
<p>上传 <code v-pre>rpm</code> 包到Linux服务器</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> gitlab-jh-16.6.1-jh.0.el7.x86_64.rpm 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装界面</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>[root@poop software]# rpm -ivh gitlab-jh-16.6.1-jh.0.el7.x86_64.rpm 
Preparing...                          ################################# [100%]
Updating / installing...
   1:gitlab-jh-16.6.1-jh.0.el7        ################################# [100%]
It looks like JiHu GitLab has not been configured yet; skipping the upgrade script.

                  *.                  *.
                 ***                 ***
                *****               *****
               .******             *******
               ********            ********
              ,,,,,,,,,***********,,,,,,,,,
             ,,,,,,,,,,,*********,,,,,,,,,,,
             .,,,,,,,,,,,*******,,,,,,,,,,,,
                 ,,,,,,,,,*****,,,,,,,,,.
                    ,,,,,,,****,,,,,,
                       .,,,***,,,,
                           ,*,.
  


         ___ __  __         _______ __  __          __
        / (_) / / /_  __   / ____(_) /_/ /   ____ _/ /_
   __  / / / /_/ / / / /  / / __/ / __/ /   / __ `/ __ \
  / /_/ / / __  / /_/ /  / /_/ / / /_/ /___/ /_/ / /_/ /
  \____/_/_/ /_/\__,_/   \____/_/\__/_____/\__,_/_.___/
  

Thank you for installing JiHu GitLab!
GitLab was unable to detect a valid hostname for your instance.
Please configure a URL for your JiHu GitLab instance by setting `external_url`
configuration in /etc/gitlab/gitlab.rb file.
Then, you can start your JiHu GitLab instance by running the following command:
  sudo gitlab-ctl reconfigure

For a comprehensive list of configuration options please see the Omnibus GitLab readme
https://jihulab.com/gitlab-cn/omnibus-gitlab/-/blob/main-jh/README.md

Help us improve the installation experience, let us know how we did with a 1 minute survey:
https://wj.qq.com/s2/10068464/dc66

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改外部暴露的域名</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">vim</span> /etc/gitlab/gitlab.rb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改gitlab的端口、http等配置</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">vim</span> /opt/gitlab/embedded/service/gitlab-rails/config/gitlab.yml.example
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">mv</span> /opt/gitlab/embedded/service/gitlab-rails/config/gitlab.yml.example /opt/gitlab/embedded/service/gitlab-rails/config/gitlab.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>初始化</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>gitlab-ctl reconfigure
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>gitlab-ctl start 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>停止</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>gitlab-ctl stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="gitlab登录和修改密码" tabindex="-1"><a class="header-anchor" href="#gitlab登录和修改密码"><span>Gitlab登录和修改密码</span></a></h4>
<p><strong>查看初始化密码</strong></p>
<p><code v-pre>cat /etc/gitlab/initial_root_password </code></p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@poop poop<span class="token punctuation">]</span><span class="token comment"># cat /etc/gitlab/initial_root_password </span>
<span class="token comment"># WARNING: This value is valid only in the following conditions</span>
<span class="token comment">#          1. If provided manually (either via `GITLAB_ROOT_PASSWORD` environment variable or via `gitlab_rails['initial_root_password']` setting in `gitlab.rb`, it was provided before database was seeded for the first time (usually, the first reconfigure run).</span>
<span class="token comment">#          2. Password hasn't been changed manually, either via UI or via command line.</span>
<span class="token comment">#</span>
<span class="token comment">#          If the password shown here doesn't work, you must reset the admin password following https://docs.gitlab.com/ee/security/reset_user_password.html#reset-your-root-password.</span>

Password: +f/BmBqHD9yCIBvUEf1TOcA4ZD0T8eKr/DMIJUghCU4<span class="token operator">=</span>

<span class="token comment"># NOTE: This file will be automatically deleted in the first reconfigure run after 24 hours.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>登录成功后，修改密码</strong></p>
<p>点击白色的用户头像，点击左侧边栏的<code v-pre>Password</code>，输入初始密码和新密码</p>
<p><strong>生成ssh签名</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa  <span class="token parameter variable">-C</span> <span class="token string">"your email"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看ssh签名</p>
<p><code v-pre>C:\Users\${usertname}\.ssh\id_rsa.pub</code> 即为生成的公钥</p>
</div></template>


