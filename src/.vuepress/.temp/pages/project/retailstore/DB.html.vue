<template><div><h2 id="项目功能模块与数据库的交互" tabindex="-1"><a class="header-anchor" href="#项目功能模块与数据库的交互"><span>项目功能模块与数据库的交互</span></a></h2>
<blockquote>
<p>主页 （indexPage）</p>
</blockquote>
<ol>
<li>
<p>展示商品，允许根据商品分类筛选商品
<strong>展示商品</strong>：查询<code v-pre>peoduct</code>表的所有记录</p>
<p><strong>分类筛选商品</strong>：根据 <code v-pre>peoduct</code>表的 <code v-pre>type</code>字段进行筛选，可选值为 1、2、3</p>
</li>
<li>
<p>搜索商品，允许根据商品名关键词搜索商品
根据<code v-pre>product</code>表的<code v-pre>name</code>字段进行模糊匹配查询</p>
</li>
<li>
<p>展示商品详情，包括商品图片、商品名称、商品价格、商品描述
根据<strong>商品的ID</strong>去<code v-pre>product</code>表进行查询这个商品的详情</p>
</li>
<li>
<p>添加购物车，允许用户添加商品到购物车
将用户ID、商品名称、商品的ID\商品价格、商品描述等字段插入到购物车中<code v-pre>shoppingcart_records</code>表</p>
</li>
</ol>
<blockquote>
<p>购物车 （shoppingCartPage）</p>
</blockquote>
<ol>
<li>展示购物车中的商品
根据用户ID去<code v-pre>shoppingcart_records</code>表查询购物车记录</li>
<li>允许用户对商品进行删除
根据购物车商品的ID到<code v-pre>shoppingcart_records</code>表删除这条记录</li>
<li>允许用户对商品进行修改
用户可以修改商品的购买数量</li>
<li>允许用户对商品进行结算支付
当结算时，
①根据商品ID将库存表(<code v-pre>inventory</code>)的对应商品库存减去对应的购买属性；
②根据商品ID将购物车表<code v-pre>shoppingcart_records</code>对应记录的<code v-pre>status</code>更新为<code v-pre>2</code>
③根据商品ID、购买数量、总价格等插入到表<code v-pre>sales</code>销售表中，完成结算</li>
</ol>
<blockquote>
<p>个人中心 （personalPage）</p>
</blockquote>
<ol>
<li>展示用户信息，包括用户名、头像、余额等
根据用户ID去<code v-pre>account</code>表查询用户头像、简介、邮件地址、qq等信息</li>
<li>允许用户修改头像、用户名等
根据根据用户ID去更新用户的头像、简介、邮件地址、qq等信息</li>
</ol>
</div></template>


