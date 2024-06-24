---
title: RetailStore
icon: Qt
category: project
tag:
  - Qt
date: 2024-03-16
---


### 1. 介绍
- 这是一个基于Qt框架的C++项目，实现了基于Qt的桌面端，使用Qt+MySQL实现的一个小项目。


**技术栈**:

> 使用到的技术 (technology）
> - Qt：（Qt Core、Qt QUI、Qt Widgets 、Qt Sql）
> - MySQL 8.0.27
>

**项目环境**：

- `Clion 2024.1.2`
- `Qt 6.7.1`
- `CMake 3.28.1`



## 项目介绍 ( Feature)
该项目是一个基于Qt的零售店管理系统，主要功能有：

> 主页 （indexPage）

- 展示商品，允许根据商品分类筛选商品
- 搜索商品，允许根据商品名关键词搜索商品
- 展示商品详情，包括商品图片、商品名称、商品价格、商品描述
- 添加购物车，允许用户添加商品到购物车

> 购物车 （shoppingCartPage）

- 展示购物车中的商品
- 允许用户对商品进行删除
- 允许用户对商品进行修改
- 允许用户对商品进行结算支付


> 个人中心 （personalPage）

- 展示用户信息，包括用户名、头像、余额等
- 允许用户修改头像、用户名等

> 设置 （settingPage）

- 关于软件检查更新、软件版本信息
- 关于软件意见反馈、许可协议信息



## 2.项目展示 （show the project）
在线演示地址： https://file.shenjianl.cn/video/06-20.mp4


## 3.项目构建 （build the project）
> CMakeList.txt修改：

- 添加mysql链接库,g++编译时需要链接mysql库，改为自己的磁盘路径

```cmake
target_link_libraries(RetailStore
"C:/software/MySQL Server 8/lib/libmysql.lib"
)
```
- 添加mysql头文件路径，g++编译时需要包含mysql头文件，改为自己的磁盘路径

```cmake
include_directories("C:/software/MySQL Server 8/include")
```

> Copy qsqlmysql.dll to plugins/sqldrivers
> 下载地址： https://github.com/thecodemonkey86/qt_mysql_driver/releases

这一步需要你自己下载自己的Qt版本对应的驱动文件，然后复制到${QT_DIR}/plugins/sqldrivers目录下
`D:\software\Qt6.7\6.7.1\mingw_64` 是我的`${QT_DIR}`的路径

> Mysql导入

在数据库软件直接导入backup.sql文件即可

接下来就可以点击运行按钮了，运行时记得先启动mysql服务，快去尝试一下吧~




