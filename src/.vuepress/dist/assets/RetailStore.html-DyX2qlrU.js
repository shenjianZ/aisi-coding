import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as a,b as n,a as l,e as t}from"./app-DAl-k2rC.js";const i={},o=n(`<h3 id="_1-介绍" tabindex="-1"><a class="header-anchor" href="#_1-介绍"><span>1. 介绍</span></a></h3><ul><li>这是一个基于Qt框架的C++项目，实现了基于Qt的桌面端，使用Qt+MySQL实现的一个小项目。</li></ul><p><strong>技术栈</strong>:</p><blockquote><p>使用到的技术 (technology）</p><ul><li>Qt：（Qt Core、Qt QUI、Qt Widgets 、Qt Sql）</li><li>MySQL 8.0.27</li></ul></blockquote><p><strong>项目环境</strong>：</p><ul><li><code>Clion 2024.1.2</code></li><li><code>Qt 6.7.1</code></li><li><code>CMake 3.28.1</code></li></ul><h2 id="项目介绍-feature" tabindex="-1"><a class="header-anchor" href="#项目介绍-feature"><span>项目介绍 ( Feature)</span></a></h2><p>该项目是一个基于Qt的零售店管理系统，主要功能有：</p><blockquote><p>主页 （indexPage）</p></blockquote><ul><li>展示商品，允许根据商品分类筛选商品</li><li>搜索商品，允许根据商品名关键词搜索商品</li><li>展示商品详情，包括商品图片、商品名称、商品价格、商品描述</li><li>添加购物车，允许用户添加商品到购物车</li></ul><blockquote><p>购物车 （shoppingCartPage）</p></blockquote><ul><li>展示购物车中的商品</li><li>允许用户对商品进行删除</li><li>允许用户对商品进行修改</li><li>允许用户对商品进行结算支付</li></ul><blockquote><p>个人中心 （personalPage）</p></blockquote><ul><li>展示用户信息，包括用户名、头像、余额等</li><li>允许用户修改头像、用户名等</li></ul><blockquote><p>设置 （settingPage）</p></blockquote><ul><li>关于软件检查更新、软件版本信息</li><li>关于软件意见反馈、许可协议信息</li></ul><h2 id="_2-项目展示-show-the-project" tabindex="-1"><a class="header-anchor" href="#_2-项目展示-show-the-project"><span>2.项目展示 （show the project）</span></a></h2><p>在线演示地址： https://file.shenjianl.cn/video/06-20.mp4</p><h2 id="_3-项目构建-build-the-project" tabindex="-1"><a class="header-anchor" href="#_3-项目构建-build-the-project"><span>3.项目构建 （build the project）</span></a></h2><blockquote><p>CMakeList.txt修改：</p></blockquote><ul><li>添加mysql链接库,g++编译时需要链接mysql库，改为自己的磁盘路径</li></ul><div class="language-cmake line-numbers-mode" data-ext="cmake" data-title="cmake"><pre class="language-cmake"><code><span class="token keyword">target_link_libraries</span><span class="token punctuation">(</span>RetailStore
<span class="token string">&quot;C:/software/MySQL Server 8/lib/libmysql.lib&quot;</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>添加mysql头文件路径，g++编译时需要包含mysql头文件，改为自己的磁盘路径</li></ul><div class="language-cmake line-numbers-mode" data-ext="cmake" data-title="cmake"><pre class="language-cmake"><code><span class="token keyword">include_directories</span><span class="token punctuation">(</span><span class="token string">&quot;C:/software/MySQL Server 8/include&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>Copy qsqlmysql.dll to plugins/sqldrivers 下载地址： https://github.com/thecodemonkey86/qt_mysql_driver/releases</p></blockquote>`,25),r=l("p",null,[t("这一步需要你自己下载自己的Qt版本对应的驱动文件，然后复制到"),l("span",{class:"katex"},[l("span",{class:"katex-mathml"},[l("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[l("semantics",null,[l("mrow",null,[l("mrow",null,[l("mi",null,"Q"),l("msub",null,[l("mi",null,"T"),l("mi",null,"D")]),l("mi",null,"I"),l("mi",null,"R")]),l("mi",{mathvariant:"normal"},"/"),l("mi",null,"p"),l("mi",null,"l"),l("mi",null,"u"),l("mi",null,"g"),l("mi",null,"i"),l("mi",null,"n"),l("mi",null,"s"),l("mi",{mathvariant:"normal"},"/"),l("mi",null,"s"),l("mi",null,"q"),l("mi",null,"l"),l("mi",null,"d"),l("mi",null,"r"),l("mi",null,"i"),l("mi",null,"v"),l("mi",null,"e"),l("mi",null,"r"),l("mi",null,"s"),l("mtext",null,"目录下"),l("mi",{mathvariant:"normal"},"‘"),l("mi",null,"D"),l("mo",null,":"),l("mstyle",{mathcolor:"#cc0000"},[l("mtext",null,"\\software")]),l("mstyle",{mathcolor:"#cc0000"},[l("mtext",null,"\\Qt")]),l("mn",null,"6.7"),l("mstyle",{mathcolor:"#cc0000"},[l("mtext",null,"\\6")]),l("mi",{mathvariant:"normal"},"."),l("mn",null,"7.1"),l("msub",null,[l("mstyle",{mathcolor:"#cc0000"},[l("mtext",null,"\\mingw")]),l("mn",null,"6")]),l("mn",null,"4"),l("mi",{mathvariant:"normal"},"‘"),l("mtext",null,"是我的"),l("mi",{mathvariant:"normal"},"‘")]),l("annotation",{encoding:"application/x-tex"},"{QT_DIR}/plugins/sqldrivers目录下 `D:\\software\\Qt6.7\\6.7.1\\mingw_64` 是我的`")])])]),l("span",{class:"katex-html","aria-hidden":"true"},[l("span",{class:"base"},[l("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),l("span",{class:"mord"},[l("span",{class:"mord mathnormal"},"Q"),l("span",{class:"mord"},[l("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"T"),l("span",{class:"msupsub"},[l("span",{class:"vlist-t vlist-t2"},[l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"0.3283em"}},[l("span",{style:{top:"-2.55em","margin-left":"-0.1389em","margin-right":"0.05em"}},[l("span",{class:"pstrut",style:{height:"2.7em"}}),l("span",{class:"sizing reset-size6 size3 mtight"},[l("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"D")])])]),l("span",{class:"vlist-s"},"​")]),l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"0.15em"}},[l("span")])])])])]),l("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"I"),l("span",{class:"mord mathnormal",style:{"margin-right":"0.00773em"}},"R")]),l("span",{class:"mord"},"/"),l("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"pl"),l("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"ug"),l("span",{class:"mord mathnormal"},"in"),l("span",{class:"mord mathnormal"},"s"),l("span",{class:"mord"},"/"),l("span",{class:"mord mathnormal"},"s"),l("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"ql"),l("span",{class:"mord mathnormal"},"d"),l("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),l("span",{class:"mord mathnormal"},"i"),l("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"v"),l("span",{class:"mord mathnormal"},"ers"),l("span",{class:"mord cjk_fallback"},"目录下"),l("span",{class:"mord"},"‘"),l("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"D"),l("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),l("span",{class:"mrel"},":"),l("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),l("span",{class:"base"},[l("span",{class:"strut",style:{height:"1.0497em","vertical-align":"-0.2997em"}}),l("span",{class:"mord text",style:{color:"#cc0000"}},[l("span",{class:"mord",style:{color:"#cc0000"}},"\\software")]),l("span",{class:"mord text",style:{color:"#cc0000"}},[l("span",{class:"mord",style:{color:"#cc0000"}},"\\Qt")]),l("span",{class:"mord"},"6.7"),l("span",{class:"mord text",style:{color:"#cc0000"}},[l("span",{class:"mord",style:{color:"#cc0000"}},"\\6")]),l("span",{class:"mord"},".7.1"),l("span",{class:"mord"},[l("span",{class:"mord text",style:{color:"#cc0000"}},[l("span",{class:"mord",style:{color:"#cc0000"}},"\\mingw")]),l("span",{class:"msupsub"},[l("span",{class:"vlist-t vlist-t2"},[l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"0.1514em"}},[l("span",{style:{top:"-2.4003em","margin-right":"0.05em"}},[l("span",{class:"pstrut",style:{height:"2.7em"}}),l("span",{class:"sizing reset-size6 size3 mtight"},[l("span",{class:"mord mtight"},"6")])])]),l("span",{class:"vlist-s"},"​")]),l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"0.2997em"}},[l("span")])])])])]),l("span",{class:"mord"},"4‘"),l("span",{class:"mord cjk_fallback"},"是我的"),l("span",{class:"mord"},"‘")])])]),t("{QT_DIR}`的路径")],-1),c=l("blockquote",null,[l("p",null,"Mysql导入")],-1),m=l("p",null,"在数据库软件直接导入backup.sql文件即可",-1),p=l("p",null,"接下来就可以点击运行按钮了，运行时记得先启动mysql服务，快去尝试一下吧~",-1),u=[o,r,c,m,p];function d(h,g){return e(),a("div",null,u)}const k=s(i,[["render",d],["__file","RetailStore.html.vue"]]),b=JSON.parse('{"path":"/project/retailstore/RetailStore.html","title":"RetailStore","lang":"zh-CN","frontmatter":{"title":"RetailStore","icon":"Qt","category":"project","tag":["Qt"],"date":"2024-03-16T00:00:00.000Z","description":"1. 介绍 这是一个基于Qt框架的C++项目，实现了基于Qt的桌面端，使用Qt+MySQL实现的一个小项目。 技术栈: 使用到的技术 (technology） Qt：（Qt Core、Qt QUI、Qt Widgets 、Qt Sql） MySQL 8.0.27 项目环境： Clion 2024.1.2 Qt 6.7.1 CMake 3.28.1 项目...","head":[["meta",{"property":"og:url","content":"https://blog.shenjianl.cn/aisi-coding/project/retailstore/RetailStore.html"}],["meta",{"property":"og:site_name","content":"爱思文档"}],["meta",{"property":"og:title","content":"RetailStore"}],["meta",{"property":"og:description","content":"1. 介绍 这是一个基于Qt框架的C++项目，实现了基于Qt的桌面端，使用Qt+MySQL实现的一个小项目。 技术栈: 使用到的技术 (technology） Qt：（Qt Core、Qt QUI、Qt Widgets 、Qt Sql） MySQL 8.0.27 项目环境： Clion 2024.1.2 Qt 6.7.1 CMake 3.28.1 项目..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"shenjianZ"}],["meta",{"property":"article:tag","content":"Qt"}],["meta",{"property":"article:published_time","content":"2024-03-16T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RetailStore\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-16T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"shenjianZ\\",\\"url\\":\\"https://blog.shenjianl.cn\\",\\"email\\":\\"15202078626@163.com\\"}]}"]]},"headers":[{"level":3,"title":"1. 介绍","slug":"_1-介绍","link":"#_1-介绍","children":[]},{"level":2,"title":"项目介绍 ( Feature)","slug":"项目介绍-feature","link":"#项目介绍-feature","children":[]},{"level":2,"title":"2.项目展示 （show the project）","slug":"_2-项目展示-show-the-project","link":"#_2-项目展示-show-the-project","children":[]},{"level":2,"title":"3.项目构建 （build the project）","slug":"_3-项目构建-build-the-project","link":"#_3-项目构建-build-the-project","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.31,"words":497},"filePathRelative":"project/retailstore/RetailStore.md","localizedDate":"2024年3月16日","excerpt":"<h3>1. 介绍</h3>\\n<ul>\\n<li>这是一个基于Qt框架的C++项目，实现了基于Qt的桌面端，使用Qt+MySQL实现的一个小项目。</li>\\n</ul>\\n<p><strong>技术栈</strong>:</p>\\n<blockquote>\\n<p>使用到的技术 (technology）</p>\\n<ul>\\n<li>Qt：（Qt Core、Qt QUI、Qt Widgets 、Qt Sql）</li>\\n<li>MySQL 8.0.27</li>\\n</ul>\\n</blockquote>\\n<p><strong>项目环境</strong>：</p>\\n<ul>\\n<li><code>Clion 2024.1.2</code></li>\\n<li><code>Qt 6.7.1</code></li>\\n<li><code>CMake 3.28.1</code></li>\\n</ul>","autoDesc":true}');export{k as comp,b as data};
