<template><div><h3 id="_1-介绍" tabindex="-1"><a class="header-anchor" href="#_1-介绍"><span>1. 介绍</span></a></h3>
<ul>
<li>这是一个基于Qt框架的C++项目，实现了基于Qt的桌面端，使用Qt+MySQL实现的一个小项目。</li>
</ul>
<p><strong>技术栈</strong>:</p>
<blockquote>
<p>使用到的技术 (technology）</p>
<ul>
<li>Qt：（Qt Core、Qt QUI、Qt Widgets 、Qt Sql）</li>
<li>MySQL 8.0.27</li>
</ul>
</blockquote>
<p><strong>项目环境</strong>：</p>
<ul>
<li><code v-pre>Clion 2024.1.2</code></li>
<li><code v-pre>Qt 6.7.1</code></li>
<li><code v-pre>CMake 3.28.1</code></li>
</ul>
<h2 id="项目介绍-feature" tabindex="-1"><a class="header-anchor" href="#项目介绍-feature"><span>项目介绍 ( Feature)</span></a></h2>
<p>该项目是一个基于Qt的零售店管理系统，主要功能有：</p>
<blockquote>
<p>主页 （indexPage）</p>
</blockquote>
<ul>
<li>展示商品，允许根据商品分类筛选商品</li>
<li>搜索商品，允许根据商品名关键词搜索商品</li>
<li>展示商品详情，包括商品图片、商品名称、商品价格、商品描述</li>
<li>添加购物车，允许用户添加商品到购物车</li>
</ul>
<blockquote>
<p>购物车 （shoppingCartPage）</p>
</blockquote>
<ul>
<li>展示购物车中的商品</li>
<li>允许用户对商品进行删除</li>
<li>允许用户对商品进行修改</li>
<li>允许用户对商品进行结算支付</li>
</ul>
<blockquote>
<p>个人中心 （personalPage）</p>
</blockquote>
<ul>
<li>展示用户信息，包括用户名、头像、余额等</li>
<li>允许用户修改头像、用户名等</li>
</ul>
<blockquote>
<p>设置 （settingPage）</p>
</blockquote>
<ul>
<li>关于软件检查更新、软件版本信息</li>
<li>关于软件意见反馈、许可协议信息</li>
</ul>
<h2 id="_2-项目展示-show-the-project" tabindex="-1"><a class="header-anchor" href="#_2-项目展示-show-the-project"><span>2.项目展示 （show the project）</span></a></h2>
<p>在线演示地址： https://file.shenjianl.cn/video/06-20.mp4</p>
<h2 id="_3-项目构建-build-the-project" tabindex="-1"><a class="header-anchor" href="#_3-项目构建-build-the-project"><span>3.项目构建 （build the project）</span></a></h2>
<blockquote>
<p>CMakeList.txt修改：</p>
</blockquote>
<ul>
<li>添加mysql链接库,g++编译时需要链接mysql库，改为自己的磁盘路径</li>
</ul>
<div class="language-cmake line-numbers-mode" data-ext="cmake" data-title="cmake"><pre v-pre class="language-cmake"><code><span class="token keyword">target_link_libraries</span><span class="token punctuation">(</span>RetailStore
<span class="token string">"C:/software/MySQL Server 8/lib/libmysql.lib"</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>添加mysql头文件路径，g++编译时需要包含mysql头文件，改为自己的磁盘路径</li>
</ul>
<div class="language-cmake line-numbers-mode" data-ext="cmake" data-title="cmake"><pre v-pre class="language-cmake"><code><span class="token keyword">include_directories</span><span class="token punctuation">(</span><span class="token string">"C:/software/MySQL Server 8/include"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>Copy qsqlmysql.dll to plugins/sqldrivers
下载地址： https://github.com/thecodemonkey86/qt_mysql_driver/releases</p>
</blockquote>
<p>这一步需要你自己下载自己的Qt版本对应的驱动文件，然后复制到<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mrow><mi>Q</mi><msub><mi>T</mi><mi>D</mi></msub><mi>I</mi><mi>R</mi></mrow><mi mathvariant="normal">/</mi><mi>p</mi><mi>l</mi><mi>u</mi><mi>g</mi><mi>i</mi><mi>n</mi><mi>s</mi><mi mathvariant="normal">/</mi><mi>s</mi><mi>q</mi><mi>l</mi><mi>d</mi><mi>r</mi><mi>i</mi><mi>v</mi><mi>e</mi><mi>r</mi><mi>s</mi><mtext>目录下</mtext><mi mathvariant="normal">‘</mi><mi>D</mi><mo>:</mo><mstyle mathcolor="#cc0000"><mtext>\software</mtext></mstyle><mstyle mathcolor="#cc0000"><mtext>\Qt</mtext></mstyle><mn>6.7</mn><mstyle mathcolor="#cc0000"><mtext>\6</mtext></mstyle><mi mathvariant="normal">.</mi><mn>7.1</mn><msub><mstyle mathcolor="#cc0000"><mtext>\mingw</mtext></mstyle><mn>6</mn></msub><mn>4</mn><mi mathvariant="normal">‘</mi><mtext>是我的</mtext><mi mathvariant="normal">‘</mi></mrow><annotation encoding="application/x-tex">{QT_DIR}/plugins/sqldrivers目录下
`D:\software\Qt6.7\6.7.1\mingw_64` 是我的`</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal">Q</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">D</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord mathnormal" style="margin-right:0.07847em;">I</span><span class="mord mathnormal" style="margin-right:0.00773em;">R</span></span><span class="mord">/</span><span class="mord mathnormal" style="margin-right:0.01968em;">pl</span><span class="mord mathnormal" style="margin-right:0.03588em;">ug</span><span class="mord mathnormal">in</span><span class="mord mathnormal">s</span><span class="mord">/</span><span class="mord mathnormal">s</span><span class="mord mathnormal" style="margin-right:0.01968em;">ql</span><span class="mord mathnormal">d</span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mord mathnormal">i</span><span class="mord mathnormal" style="margin-right:0.03588em;">v</span><span class="mord mathnormal">ers</span><span class="mord cjk_fallback">目录下</span><span class="mord">‘</span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.0497em;vertical-align:-0.2997em;"></span><span class="mord text" style="color:#cc0000;"><span class="mord" style="color:#cc0000;">\software</span></span><span class="mord text" style="color:#cc0000;"><span class="mord" style="color:#cc0000;">\Qt</span></span><span class="mord">6.7</span><span class="mord text" style="color:#cc0000;"><span class="mord" style="color:#cc0000;">\6</span></span><span class="mord">.7.1</span><span class="mord"><span class="mord text" style="color:#cc0000;"><span class="mord" style="color:#cc0000;">\mingw</span></span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.4003em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">6</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2997em;"><span></span></span></span></span></span></span><span class="mord">4‘</span><span class="mord cjk_fallback">是我的</span><span class="mord">‘</span></span></span></span>{QT_DIR}`的路径</p>
<blockquote>
<p>Mysql导入</p>
</blockquote>
<p>在数据库软件直接导入backup.sql文件即可</p>
<p>接下来就可以点击运行按钮了，运行时记得先启动mysql服务，快去尝试一下吧~</p>
</div></template>


