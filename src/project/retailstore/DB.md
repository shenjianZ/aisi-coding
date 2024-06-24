---
title: RetailStore
icon: Qt
category: project
tag:
  - Qt
date: 2024-03-16
---
## 项目功能模块与数据库的交互
> 主页 （indexPage）

1. 展示商品，允许根据商品分类筛选商品
   **展示商品**：查询`peoduct`表的所有记录

   **分类筛选商品**：根据 `peoduct`表的 `type`字段进行筛选，可选值为 1、2、3

2. 搜索商品，允许根据商品名关键词搜索商品
   根据`product`表的`name`字段进行模糊匹配查询

3. 展示商品详情，包括商品图片、商品名称、商品价格、商品描述
   根据**商品的ID**去`product`表进行查询这个商品的详情

4. 添加购物车，允许用户添加商品到购物车
   将用户ID、商品名称、商品的ID\商品价格、商品描述等字段插入到购物车中`shoppingcart_records`表

> 购物车 （shoppingCartPage）

1. 展示购物车中的商品
   根据用户ID去`shoppingcart_records`表查询购物车记录
2. 允许用户对商品进行删除
   根据购物车商品的ID到`shoppingcart_records`表删除这条记录
3. 允许用户对商品进行修改
   用户可以修改商品的购买数量
4. 允许用户对商品进行结算支付
   当结算时，
   ①根据商品ID将库存表(`inventory`)的对应商品库存减去对应的购买属性；
   ②根据商品ID将购物车表`shoppingcart_records`对应记录的`status`更新为`2`
   ③根据商品ID、购买数量、总价格等插入到表`sales`销售表中，完成结算


> 个人中心 （personalPage）

1. 展示用户信息，包括用户名、头像、余额等
   根据用户ID去`account`表查询用户头像、简介、邮件地址、qq等信息
2. 允许用户修改头像、用户名等
   根据根据用户ID去更新用户的头像、简介、邮件地址、qq等信息



