<template><div><p>不导入<code v-pre>servlet-api</code></p>
<p>设置<code v-pre>Content-Type</code> ，如果不设置。浏览器将以 <code v-pre>text/html</code>解析</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code>response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">"Content-Type"</span><span class="token punctuation">,</span><span class="token string">"text/html"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code>response<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token string">"text/html"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>servlet</code>的路径匹配</p>
<p>支持模糊匹配 <code v-pre>\</code>、<code v-pre>*</code>、<code v-pre>\*</code>、<code v-pre>*.inf</code></p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-name</span><span class="token punctuation">></span></span>demoServlet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-name</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-class</span><span class="token punctuation">></span></span>com.aisi.servlet.DemoServlet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-class</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-mapping</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-name</span><span class="token punctuation">></span></span>demoServlet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-name</span><span class="token punctuation">></span></span>
     <span class="token comment">&lt;!-- 一个servlet-name可以对应多个url-pattern --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url-pattern</span><span class="token punctuation">></span></span>/demoServlet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url-pattern</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url-pattern</span><span class="token punctuation">></span></span>/demoServlet1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url-pattern</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-mapping</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>servlet</code>的<code v-pre>load-on-startup</code>定义<code v-pre>tomcat</code>启动时初始化的顺序，默认为<code v-pre>-1</code>，代表第一次接收请求时初始化，懒加载</p>
<p>静态资源会有默认的<code v-pre>servlet</code>来处理</p>
<p><code v-pre>servlet</code>的初始化参数</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code>	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-name</span><span class="token punctuation">></span></span>servlet1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-name</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-class</span><span class="token punctuation">></span></span>com.aisi.servlet1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-class</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>init-param</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param-name</span><span class="token punctuation">></span></span>name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param-name</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param-value</span><span class="token punctuation">></span></span>shenjianZ<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param-value</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>init-param</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-mapping</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-name</span><span class="token punctuation">></span></span>servlet1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-name</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url-pattern</span><span class="token punctuation">></span></span>/servlet1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url-pattern</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-mapping</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个<code v-pre>init-param</code>可以通过<code v-pre>getServletConfig().getInitParameter('init-paramsname')</code></p>
<p><code v-pre>ServletConfig</code>作用域是一个<code v-pre>servlet</code> 所以他是多例的</p>
<p><code v-pre>ServletContext</code>作用域是 所有<code v-pre>servlet</code>，他是单例的</p>
<p><strong>ServletContext</strong> 配置 <code v-pre>context-param</code></p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code>	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>context-param</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param-name</span><span class="token punctuation">></span></span>encoding<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param-name</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param-value</span><span class="token punctuation">></span></span>UTF-8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param-value</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>context-param</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个<code v-pre>context-param</code>可以通过<code v-pre>getServletContext().getInitParameter('init-paramsname')</code></p>
<p><code v-pre>setAttribute()</code> 向域对象存储键值对</p>
<h4 id="httpservletrequest-常用api" tabindex="-1"><a class="header-anchor" href="#httpservletrequest-常用api"><span><code v-pre>HttpServletRequest</code> 常用API</span></a></h4>
<p><code v-pre>getMethod()</code>、<code v-pre>getSchme()</code>、<code v-pre>getProtocol()</code>、<code v-pre>getRequestURI()</code>、<code v-pre>getRequestURL()</code>、<code v-pre>getLocalport()</code>、<code v-pre>getServerPort()</code>、<code v-pre>getRemotePort()</code> 、<code v-pre>getHeader()</code>、<code v-pre>getParameter()</code>、<code v-pre>getParameterValues()</code>、<code v-pre>getParameterNames()</code>、<code v-pre>getReader()</code>、<code v-pre>getCookies()</code>、<code v-pre>getSession()</code>、<code v-pre>getServletContext()</code>、<code v-pre>setCharacterEncoding()</code></p>
<p>需要注意的是<code v-pre>getServerPort()</code>获取的是浏览器发送请求时的端口号</p>
<h4 id="httpservletresponse-常用api" tabindex="-1"><a class="header-anchor" href="#httpservletresponse-常用api"><span><code v-pre>HttpServletResponse</code> 常用API</span></a></h4>
<p><code v-pre>setStatus()</code>、<code v-pre>setHeader()</code>、<code v-pre>setContentType()</code>、<code v-pre>setContentLength()</code>、<code v-pre>getWriter()</code>、``</p>
<h4 id="请求转发request-forward" tabindex="-1"><a class="header-anchor" href="#请求转发request-forward"><span><strong>请求转发Request Forward</strong></span></a></h4>
<p>适用于应用程序内部页面跳转，共享请求参数和属性</p>
<ul>
<li>请求转发是在服务器内部完成的，客户端浏览器不知道页面发生了转发</li>
<li>请求转发是直接把请求转发给内部的其他<code v-pre>servlet</code>，页面的 URL 不会改变，是一次请求</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code>	    <span class="token comment">// 获得请求转发器</span>
        <span class="token class-name">RequestDispatcher</span> requestDispatcher <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getRequestDispatcher</span><span class="token punctuation">(</span><span class="token string">"servletB"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        requestDispatcher<span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span>resp<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以转发到<code v-pre>WEB-INF</code>的受保护的资源</p>
<h4 id="响应重定向response-redirect" tabindex="-1"><a class="header-anchor" href="#响应重定向response-redirect"><span><strong>响应重定向Response Redirect</strong></span></a></h4>
<p>适应于回应客户端浏览器去访问新的<code v-pre>URL</code>地址，重定向到外部资源或者其他 <code v-pre>servlet</code>的情况。</p>
<ul>
<li>响应重定向会导致浏览器向新的 URL 发起新的请求，因此地址栏会显示重定向后的 URL。</li>
<li>响应重定向是两次请求，第一次是原始请求，第二次是重定向后的请求</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code>resp<span class="token punctuation">.</span><span class="token function">sendRedirect</span><span class="token punctuation">(</span><span class="token string">"https://blog.shenjian.cn"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置响应状态码为<code v-pre>302</code>，<code v-pre>location</code>为重定向<code v-pre>URL</code></p>
<h4 id="web乱码和路径问题" tabindex="-1"><a class="header-anchor" href="#web乱码和路径问题"><span>WEB乱码和路径问题</span></a></h4>
<blockquote>
<p>原因：①编码与解码使用的不是同一字符集 ② 使用了不支持某种语言的字符集去编码和解码</p>
</blockquote>
<p>设置<code v-pre>JVM</code> 的启动参数  VM options 的<code v-pre>-Dfile.encoding=UTF-8</code></p>
<p><strong>请求乱码</strong></p>
<p>GET请求乱码，可修改<code v-pre>server.xml</code>的<code v-pre>connector URIEncoding</code></p>
<p>POST请求乱码，可使用<code v-pre>req.setCharacterEncoding()</code></p>
<p><strong>响应乱码</strong></p>
<p>①使用<code v-pre>resp.setCharacterEncoding(&quot;UTF-8&quot;)</code>,不推荐，这需要知道客户端是使用的那种字符集</p>
<p>②使用<code v-pre>resp.setContentType(&quot;text/html;chartset=UTF-8&quot;)</code> ,告诉客户端使用<code v-pre>UTF-8</code>来解码</p>
<p>使用时一般同时使用 <code v-pre>resp.setCharacterEncoding(&quot;UTF-8&quot;) </code> 和<code v-pre>resp.setContentType(&quot;text/html;chartset=UTF-8&quot;)</code></p>
<p><strong>前端路径问题</strong></p>
<p>相对路径</p>
<p>绝对路径</p>
<p><code v-pre>&lt;base href=&quot;blog&quot;&gt;</code> 在<code v-pre>index.html</code>的<code v-pre>head</code> 添加webApp的ApplicationContext （不推荐）</p>
<p><strong>后端路径问题</strong></p>
<p>重定向的问题</p>
<blockquote>
<p>相对路径</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code>resp<span class="token punctuation">.</span><span class="token function">sendRedirect</span><span class="token punctuation">(</span><span class="token string">"servlet1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 找到同级映射路径下的servlet1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>绝对路径</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code>resp<span class="token punctuation">.</span><span class="token function">sendRedirct</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span><span class="token function">getServletContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getContextPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"/servlet1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>请求转发的问题</p>
<blockquote>
<p>相对路径</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code>req<span class="token punctuation">.</span><span class="token function">getRequestDisaptcher</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span><span class="token function">getServletContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getContextPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span><span class="token string">"/servlet1"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span>resp<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>绝对路径 ，默认已经包含 <code v-pre>context</code> 前缀</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code>req<span class="token punctuation">.</span><span class="token function">getRequestDisaptcher</span><span class="token punctuation">(</span><span class="token string">"/servlet1"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span>resp<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>彻底解决路径问题 ，设置 <code v-pre>applicationcontext</code> 为 <code v-pre> /</code> 即可</strong></p>
<h4 id="mvc架构" tabindex="-1"><a class="header-anchor" href="#mvc架构"><span>MVC架构</span></a></h4>
<p><strong>模型（Model）</strong>：</p>
<ul>
<li><code v-pre>entity</code>， 实体类<code v-pre>JavaBean、POJO、DAO、VO</code></li>
<li><code v-pre>mapper</code>对数据库CRUD，数据的存储、检索、更新和验证。</li>
<li><code v-pre>Service</code>处理业务逻辑。</li>
</ul>
<p><strong>视图（View）</strong>：</p>
<ul>
<li>视图通常是由 HTML、JSP、Thymeleaf 等模板引擎或前端框架创建的页面。</li>
<li>展示数据和响应用户操作</li>
</ul>
<p><strong>控制器（Controller）</strong>：</p>
<ul>
<li>接收请求并处理请求。</li>
<li>在 Java Web 应用中，控制器通常由 <code v-pre>Servlet </code>或 Spring MVC 中的控制器组件实现。</li>
</ul>
<p><strong>JWT加密工具</strong></p>
<p>MD5Utils工具类</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>aisi<span class="token punctuation">.</span>schedule<span class="token punctuation">.</span>util</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>security<span class="token punctuation">.</span></span><span class="token class-name">MessageDigest</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>security<span class="token punctuation">.</span></span><span class="token class-name">NoSuchAlgorithmException</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">MD5Util</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">encrypt</span><span class="token punctuation">(</span><span class="token class-name">String</span> strSrc<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">char</span> hexChars<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token char">'0'</span><span class="token punctuation">,</span> <span class="token char">'1'</span><span class="token punctuation">,</span> <span class="token char">'2'</span><span class="token punctuation">,</span> <span class="token char">'3'</span><span class="token punctuation">,</span> <span class="token char">'4'</span><span class="token punctuation">,</span> <span class="token char">'5'</span><span class="token punctuation">,</span> <span class="token char">'6'</span><span class="token punctuation">,</span> <span class="token char">'7'</span><span class="token punctuation">,</span> <span class="token char">'8'</span><span class="token punctuation">,</span>
                    <span class="token char">'9'</span><span class="token punctuation">,</span> <span class="token char">'a'</span><span class="token punctuation">,</span> <span class="token char">'b'</span><span class="token punctuation">,</span> <span class="token char">'c'</span><span class="token punctuation">,</span> <span class="token char">'d'</span><span class="token punctuation">,</span> <span class="token char">'e'</span><span class="token punctuation">,</span> <span class="token char">'f'</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
            <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes <span class="token operator">=</span> strSrc<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">MessageDigest</span> md <span class="token operator">=</span> <span class="token class-name">MessageDigest</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token string">"MD5"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            md<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span><span class="token punctuation">;</span>
            bytes <span class="token operator">=</span> md<span class="token punctuation">.</span><span class="token function">digest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> j <span class="token operator">=</span> bytes<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
            <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> chars <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">char</span><span class="token punctuation">[</span>j <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> bytes<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">byte</span> b <span class="token operator">=</span> bytes<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
                chars<span class="token punctuation">[</span>k<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> hexChars<span class="token punctuation">[</span>b <span class="token operator">>>></span> <span class="token number">4</span> <span class="token operator">&amp;</span> <span class="token number">0xf</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                chars<span class="token punctuation">[</span>k<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> hexChars<span class="token punctuation">[</span>b <span class="token operator">&amp;</span> <span class="token number">0xf</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>chars<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">NoSuchAlgorithmException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">"MD5加密出错!!!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="会话管理" tabindex="-1"><a class="header-anchor" href="#会话管理"><span>会话管理</span></a></h3>
<p><code v-pre>Http</code> 是无状态协议，不保存状态</p>
<h4 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie"><span><strong>Cookie</strong></span></a></h4>
<blockquote>
<p>客户端会话技术，由服务器产生</p>
<p>生成Cookie</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token class-name">Cookie</span> cookie <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cookie</span><span class="token punctuation">(</span><span class="token string">"key"</span><span class="token punctuation">,</span><span class="token string">"value"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>放入响应头</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code>resp<span class="token punctuation">.</span><span class="token function">addCookie</span><span class="token punctuation">(</span>cookie<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>获取Cookie</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token class-name">Cookie</span><span class="token punctuation">[</span><span class="token punctuation">]</span> cookies <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getCookies</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote>
<ul>
<li>
<p>服务器创建Cookie放入响应对象，tomcat将cookie添加到响应头中</p>
</li>
<li>
<p>客户端浏览器将响应头中的Cookie保存在会话中，以后的请求就在请求头中加上这个Cookie</p>
</li>
<li>
<p>Cookie 默认是非持久化的，可以设置过期时间 使其持久化到磁盘</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token class-name">Cookie</span> cookie <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cookie</span><span class="token punctuation">(</span><span class="token string">"key"</span><span class="token punctuation">,</span><span class="token string">"value"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
cookie<span class="token punctuation">.</span><span class="token function">setMaxAge</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token operator">*</span><span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 设置过期时间为 1 小时</span>
resp<span class="token punctuation">.</span><span class="token function">addCookie</span><span class="token punctuation">(</span>cookie<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="session" tabindex="-1"><a class="header-anchor" href="#session"><span><strong>Session</strong></span></a></h4>
<blockquote>
<p><code v-pre>HttpSession</code> 对象代表了客户端与服务器之间的会话。在会话中，客户端与服务器可以持续地进行交互，而服务器可以存储特定于用户的信息，以便在会话期间保持状态。</p>
</blockquote>
<ul>
<li>
<p>服务器创建Session放入响应对象，tomcat将cookie添加到响应头中</p>
</li>
<li>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token class-name">HttpSession</span> session <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这段代码的执行流程，查找key为&quot;JSESSIONID&quot;的Cookie，如果没找到就重新创建一个HttpSession对象返回；如果找到了就new一个HttpSession对象返回且自动向响应头添加key为&quot;JSESSIONID&quot;的Cookie，下一步查找JSESSIONID对应的HttpSession，找到了就返回这个HttpSession对象，否则就new一个HttpSession对象返回且自动向响应头添加key为&quot;JSESSIONID&quot;的Cookie</p>
</li>
<li>
<p>Session的时效性
默认会话超时时间是30分钟</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code>session<span class="token punctuation">.</span><span class="token function">setMaxInactiveInterval</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token operator">*</span><span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 设置会话过期时间为 1小时</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置的过期时间是从上一次与服务器的交互开始计算的。因此，如果在过期时间内有新的请求到达服务器，会话的过期时间将被重置。
在<code v-pre>web.xml</code>中设置</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code>    <span class="token comment">&lt;!-- 设置会话超时时间为30分钟 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>session-config</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>session-timeout</span><span class="token punctuation">></span></span>30<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>session-timeout</span><span class="token punctuation">></span></span> <span class="token comment">&lt;!-- 以分钟为单位 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>session-config</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="域对象" tabindex="-1"><a class="header-anchor" href="#域对象"><span>域对象</span></a></h4>
<p><strong>请求域</strong></p>
<blockquote>
<p>一次 HTTP 请求的有效的对象， 通常存放与业务逻辑有关的数据</p>
</blockquote>
<p><strong>会话域</strong></p>
<blockquote>
<p>用户会话期间有效的对象 , 通常存放与用户登录状态有关的数据</p>
</blockquote>
<p><strong>应用域</strong></p>
<blockquote>
<p>Web 应用程序中有效的对象，通常存放与应用程序有关的数据，如Spring的<code v-pre>IOC</code>对象</p>
</blockquote>
<h3 id="过滤器" tabindex="-1"><a class="header-anchor" href="#过滤器"><span>过滤器</span></a></h3>
<h4 id="httpfilter使用" tabindex="-1"><a class="header-anchor" href="#httpfilter使用"><span>HttpFilter使用</span></a></h4>
<blockquote>
<p>Servlet 5.0开始，Servlet 规范已经迁移到了 Jakarta EE（以前称为 Java EE）的命名空间中，因此包名也相应地更改为了 <code v-pre>jakarta.servlet</code> 和 <code v-pre>jakarta.servlet.http</code>。在 Servlet 5.0 中引入了 <code v-pre>HttpFilter</code> 类，用于更方便地处理 HTTP 请求和响应。</p>
<p>对于 Servlet 5.0 版本,应使用  <code v-pre>jakarta.servlet.Filter</code></p>
<p>对于 Servlet 4.0 及更早版本，仍然使用 <code v-pre>javax.servlet.Filter</code> 接口来创建过滤器。</p>
</blockquote>
<ol>
<li>
<p>继承HttpFilter类重写 doFilter()方法</p>
</li>
<li>
<p>在请求获取目标资源之前的处理</p>
</li>
<li>
<p>放行处理</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code>filterchain<span class="token punctuation">.</span><span class="token function">doFilter</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span>resp<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果没有放行，请求将无法到达资源</p>
</li>
<li>
<p>响应之前的处理</p>
</li>
<li>
<p>配置filter过滤器
①使用@WebFilter()注解指定</p>
<p>②在web.xml中配置</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-name</span><span class="token punctuation">></span></span>loggingFilter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-name</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-class</span><span class="token punctuation">></span></span>com.aisi.filter.LoggingFilter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-class</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>finter-mapping</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-name</span><span class="token punctuation">></span></span>loggingFilter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-name</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url-pattern</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url-pattern</span><span class="token punctuation">></span></span> <span class="token comment">&lt;!-- 可以是servlet的name(不加/)、或者资源路径  --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>finter-mapping</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h4 id="过滤器链" tabindex="-1"><a class="header-anchor" href="#过滤器链"><span>过滤器链</span></a></h4>
<ul>
<li>过滤器的执行顺序：
假定有两个过滤器filter1、filter2，若filter1先于filter2执行，先执行filter1的放行前代码和放行代码，接着执行filter2的放行前代码和放行代码，随后执行filter2的响应前的代码，最后再执行filter1的响应前的代码</li>
</ul>
<h3 id="监听器" tabindex="-1"><a class="header-anchor" href="#监听器"><span>监听器</span></a></h3>
<p>监听域对象的变化</p>
<p>①对象的创建</p>
<p>②对象的销毁</p>
<p>③对象的增加</p>
<p>④对象的修改</p>
<p>⑤对象的删除</p>
<ol>
<li>
<p>实现<code v-pre>ServletContextLitenter</code> 接口,添加<code v-pre>@WebListener</code>,重写方法,监听  <code v-pre>Application</code>应用域 创建和销毁</p>
</li>
<li>
<p>实现<code v-pre>ServletContextAttributeListener</code> 接口,添加<code v-pre>@WebListener</code>,重写方法,监听  <code v-pre>Application</code>应用域 属性的变化</p>
</li>
<li>
<p>实现<code v-pre>HttpSessionListener</code>接口,添加<code v-pre>@WebListener</code>,重写方法,监听<code v-pre>Session</code>域的创建和销毁</p>
<blockquote>
<p>需要注意的是 <code v-pre>Session</code>的创建时间是</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token class-name">HttpSession</span> session <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这行代码会返回一个旧的或新的<code v-pre>Session</code>对象</p>
</blockquote>
</li>
<li>
<p>实现<code v-pre>HttpSessionAttrbuteListener</code>接口,添加<code v-pre>@WebListener</code>,重写方法,监听  <code v-pre>Session</code>应用域 属性的变化</p>
</li>
<li>
<p>实现<code v-pre>ServletRequestListener</code>接口,添加<code v-pre>@WebListener</code>,重写方法,监听  <code v-pre>Request</code>请求域 创建和销毁</p>
</li>
<li>
<p>实现<code v-pre>ServletRequestAttrbuteListener</code>接口,添加<code v-pre>@WebListener</code>,重写方法,监听  <code v-pre>Request</code>请求域属性的变化</p>
</li>
<li>
<p><code v-pre>session</code>的特殊监听器,
①<code v-pre>HttpSessionBindingListener</code>监听<code v-pre>session</code>的<code v-pre>HttpSessionBindingListener</code>实现类对象 在<code v-pre>session</code>的添加和移除事件,
②钝化活化
注意需要配置对应的 xml文件使得 session钝化活化生效</p>
</li>
</ol>
</div></template>


