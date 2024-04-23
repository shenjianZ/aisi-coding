---
title: Git高级
icon: git
order: 2
category: Git
tags:
  - git
  - advanced
date: 2024-04-23
---


## Git客户端

[GitHub Desktop](https://desktop.github.com/)

- 登录你的GitHub账号
- 设置你的创建仓库的默认分支名称
- 查看、设置你的个人签名
- 可以克隆、拉取、推送代码

## IDEA中使用Git

- 下载Gitee插件，并登录

**单分支冲突**

*推送时*修改了文件的同一行，出现了冲突

**多分支冲突**

多个分支开发不同模块的功能，*分支合并时*出现了冲突

Pull Request

## GitLab的部署与使用 （DevOps）
::: tip

<span>注意： 一定要使用普通账户去操作，不然会有权限问题</span>

:::

[Linux Rpm包](https://packages.gitlab.cn)

上传 `rpm` 包到Linux服务器

```bash
rpm -ivh gitlab-jh-16.6.1-jh.0.el7.x86_64.rpm 
```

安装界面

```text
[root@poop software]# rpm -ivh gitlab-jh-16.6.1-jh.0.el7.x86_64.rpm 
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

```

修改外部暴露的域名

```bash
vim /etc/gitlab/gitlab.rb
```

修改gitlab的端口、http等配置

```bash
vim /opt/gitlab/embedded/service/gitlab-rails/config/gitlab.yml.example
```

```bash
mv /opt/gitlab/embedded/service/gitlab-rails/config/gitlab.yml.example /opt/gitlab/embedded/service/gitlab-rails/config/gitlab.yml
```

初始化

```bash
gitlab-ctl reconfigure
```

启动

```bash
gitlab-ctl start 
```

停止

```bash
gitlab-ctl stop
```

#### Gitlab登录和修改密码

**查看初始化密码**

`cat /etc/gitlab/initial_root_password `

```bash
[root@poop poop]# cat /etc/gitlab/initial_root_password 
# WARNING: This value is valid only in the following conditions
#          1. If provided manually (either via `GITLAB_ROOT_PASSWORD` environment variable or via `gitlab_rails['initial_root_password']` setting in `gitlab.rb`, it was provided before database was seeded for the first time (usually, the first reconfigure run).
#          2. Password hasn't been changed manually, either via UI or via command line.
#
#          If the password shown here doesn't work, you must reset the admin password following https://docs.gitlab.com/ee/security/reset_user_password.html#reset-your-root-password.

Password: +f/BmBqHD9yCIBvUEf1TOcA4ZD0T8eKr/DMIJUghCU4=

# NOTE: This file will be automatically deleted in the first reconfigure run after 24 hours.
```

**登录成功后，修改密码**

点击白色的用户头像，点击左侧边栏的`Password`，输入初始密码和新密码

**生成ssh签名**

```bash
ssh-keygen -t rsa  -C "your email"
```

查看ssh签名

`C:\Users\${usertname}\.ssh\id_rsa.pub` 即为生成的公钥



