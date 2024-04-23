---
title: Git快速入门
icon: git
order: 1
category: Git
tags:
  - git
date: 2024-04-23
---

## 概述

::: tip 提示

> Git是一个免费的、开源的分布式版本控制系统

### 版本控制

> 集中式版本控制

CVS、SVN、VSS ，与中心服务器进行交互

> 分布式版本控制

git、Bazaar，与中心服务器进行交互，本地有完整副本

:::

## Git安装

[官网地址](https://git-scm.com/)、[Github地址](https://github.com/git-for-windows/git/releases )

一直点击下一步即可安装完成

## Git命令

#### 设置用户签名

- 全局设置

  ```bash
  git config --global user.name "your name"
  git config --global user.email "your email"
  ```

- 本地仓库设置(在你的git仓库目录中执行)

  ```bash
  git config --local user.name "your name"
  git config --local user.email "your email"
  ```

注意：若均设置，`--local` 设置的用户签名将会优先生效

**查看相关配置信息**

```bash
git config --list
```

```bash
git config --global --list
```

还有一种方式，也能设置用户签名你可以通过以下命令在命令行中编辑 `Git` 的全局配置文件：

```bash
git config --global --edit
```

执行这个命令后，会打开一个文本编辑器，其中包含 Git 的全局配置内容。你可以在这个文件中修改配置项，然后保存退出即可。

如果你想要编辑当前仓库的配置文件，可以使用以下命令：

```bash
git config --local --edit
```

这将打开当前仓库的配置文件，你可以在其中编辑配置项，然后保存退出。

这是我的信息

```bash
[user]
        name = shenjianZ
        email = shenjianZLT@gmail.com
[credential "https://gitee.com"]
        provider = generic
```

实际上，他修改的是一个 `..gitconfig`的文件

在 `C:\Users\${username}`这个目录下

#### 初始化本地库

```bash
git init 
```

随后将在当前目录生成`.git`的目录

#### 查看本地库状态

显示完整信息

```bash
git status
```

显示简略信息

```bash
git status -s 
```

#### 添加暂存区

追踪文件

```bash
git add . # 递归添加当前目录、子目录所有文件
git add * # 添加当前目录所有文件
```

#### 提交本地库

```bash
git commit 
git commit -m "commit message..."
```

#### 查看历史版本

```bash
git log
```

```bash
git reflog
```


#### 切换历史版本

```bash
git reset --hard verisonid
```

