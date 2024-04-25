---
title: 基本使用
icon: web
tag:
  - JavaWeb
  - 基本使用
category: JavaWeb
order: 1
date: 2024-04-25
---



不导入`servlet-api`



设置`Content-Type` ，如果不设置。浏览器将以 `text/html`解析

```java
response.setHeader("Content-Type","text/html");
```

```java
response.setContentType("text/html");
```

`servlet`的路径匹配

支持模糊匹配 `\`、`*`、`\*`、`*.inf`

```xml
<servlet>
	<servlet-name>demoServlet</servlet-name>
    <servlet-class>com.aisi.servlet.DemoServlet</servlet-class>
</servlet>
<servlet-mapping>
	<servlet-name>demoServlet</servlet-name>
     <!-- 一个servlet-name可以对应多个url-pattern -->
    <url-pattern>/demoServlet</url-pattern>
    <url-pattern>/demoServlet1</url-pattern>
</servlet-mapping>
```

`servlet`的`load-on-startup`定义`tomcat`启动时初始化的顺序，默认为`-1`，代表第一次接收请求时初始化，懒加载

静态资源会有默认的`servlet`来处理

`servlet`的初始化参数

```xml
	<servlet>
        <servlet-name>servlet1</servlet-name>
        <servlet-class>com.aisi.servlet1</servlet-class>
        <init-param>
            <param-name>name</param-name>
            <param-value>shenjianZ</param-value>
        </init-param>
    </servlet>
    <servlet-mapping>
        <servlet-name>servlet1</servlet-name>
        <url-pattern>/servlet1</url-pattern>
    </servlet-mapping>
```

这个`init-param`可以通过`getServletConfig().getInitParameter('init-paramsname')`

`ServletConfig`作用域是一个`servlet` 所以他是多例的

`ServletContext`作用域是 所有`servlet`，他是单例的

**ServletContext** 配置 `context-param`

```xml
	<context-param>
        <param-name>encoding</param-name>
        <param-value>UTF-8</param-value>
    </context-param>
```

这个`context-param`可以通过`getServletContext().getInitParameter('init-paramsname')`

`setAttribute()` 向域对象存储键值对

#### `HttpServletRequest` 常用API

`getMethod()`、`getSchme()`、`getProtocol()`、`getRequestURI()`、`getRequestURL()`、`getLocalport()`、`getServerPort()`、`getRemotePort()` 、`getHeader()`、`getParameter()`、`getParameterValues()`、`getParameterNames()`、`getReader()`、`getCookies()`、`getSession()`、`getServletContext()`、`setCharacterEncoding()`

需要注意的是`getServerPort()`获取的是浏览器发送请求时的端口号

#### `HttpServletResponse` 常用API

`setStatus()`、`setHeader()`、`setContentType()`、`setContentLength()`、`getWriter()`、``

#### **请求转发Request Forward**

适用于应用程序内部页面跳转，共享请求参数和属性

- 请求转发是在服务器内部完成的，客户端浏览器不知道页面发生了转发
- 请求转发是直接把请求转发给内部的其他`servlet`，页面的 URL 不会改变，是一次请求

```java
	    // 获得请求转发器
        RequestDispatcher requestDispatcher = req.getRequestDispatcher("servletB");
        requestDispatcher.forward(req,resp);
```

可以转发到`WEB-INF`的受保护的资源

#### **响应重定向Response Redirect**

适应于回应客户端浏览器去访问新的`URL`地址，重定向到外部资源或者其他 `servlet`的情况。

- 响应重定向会导致浏览器向新的 URL 发起新的请求，因此地址栏会显示重定向后的 URL。
- 响应重定向是两次请求，第一次是原始请求，第二次是重定向后的请求

```java
resp.sendRedirect("https://blog.shenjian.cn")
```

设置响应状态码为`302`，`location`为重定向`URL`

#### WEB乱码和路径问题

> 原因：①编码与解码使用的不是同一字符集 ② 使用了不支持某种语言的字符集去编码和解码

设置`JVM` 的启动参数  VM options 的`-Dfile.encoding=UTF-8`

**请求乱码**

GET请求乱码，可修改`server.xml`的`connector URIEncoding`

POST请求乱码，可使用`req.setCharacterEncoding()`

**响应乱码**

①使用`resp.setCharacterEncoding("UTF-8")`,不推荐，这需要知道客户端是使用的那种字符集

②使用`resp.setContentType("text/html;chartset=UTF-8")` ,告诉客户端使用`UTF-8`来解码

使用时一般同时使用 `resp.setCharacterEncoding("UTF-8") ` 和`resp.setContentType("text/html;chartset=UTF-8")`

**前端路径问题**

相对路径

绝对路径

`<base href="blog">` 在`index.html`的`head` 添加webApp的ApplicationContext （不推荐）

**后端路径问题**

重定向的问题

> 相对路径

```java
resp.sendRedirect("servlet1"); // 找到同级映射路径下的servlet1
```

> 绝对路径

```java
resp.sendRedirct(req.getServletContext().getContextPath() + "/servlet1");
```

请求转发的问题

>相对路径

```java
req.getRequestDisaptcher(req.getServletContext().getContextPath() +"/servlet1").forward(req,resp);
```

> 绝对路径 ，默认已经包含 `context` 前缀

```java
req.getRequestDisaptcher("/servlet1").forward(req,resp);
```

**彻底解决路径问题 ，设置 `applicationcontext` 为 ` /` 即可**

#### MVC架构

**模型（Model）**：

-  `entity`， 实体类`JavaBean、POJO、DAO、VO`
-  `mapper`对数据库CRUD，数据的存储、检索、更新和验证。
-  `Service`处理业务逻辑。

**视图（View）**：

- 视图通常是由 HTML、JSP、Thymeleaf 等模板引擎或前端框架创建的页面。
- 展示数据和响应用户操作

**控制器（Controller）**：

- 接收请求并处理请求。
- 在 Java Web 应用中，控制器通常由 `Servlet `或 Spring MVC 中的控制器组件实现。

**JWT加密工具**

MD5Utils工具类

```java
package com.aisi.schedule.util;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public final class MD5Util {
    public static String encrypt(String strSrc) {
        try {
            char hexChars[] = {'0', '1', '2', '3', '4', '5', '6', '7', '8',
                    '9', 'a', 'b', 'c', 'd', 'e', 'f'};
            byte[] bytes = strSrc.getBytes();
            MessageDigest md = MessageDigest.getInstance("MD5");
            md.update(bytes);
            bytes = md.digest();
            int j = bytes.length;
            char[] chars = new char[j * 2];
            int k = 0;
            for (int i = 0; i < bytes.length; i++) {
                byte b = bytes[i];
                chars[k++] = hexChars[b >>> 4 & 0xf];
                chars[k++] = hexChars[b & 0xf];
            }
            return new String(chars);
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
            throw new RuntimeException("MD5加密出错!!!");
        }
    }
}
```

### 会话管理

`Http` 是无状态协议，不保存状态

#### **Cookie**

> 客户端会话技术，由服务器产生
>
> 生成Cookie
>
> ```java
> Cookie cookie = new Cookie("key","value");
> ```
>
> 放入响应头
>
> ```java
> resp.addCookie(cookie);
> ```
>
> 获取Cookie
>
> ```java
> Cookie[] cookies = req.getCookies();
> ```

- 服务器创建Cookie放入响应对象，tomcat将cookie添加到响应头中

- 客户端浏览器将响应头中的Cookie保存在会话中，以后的请求就在请求头中加上这个Cookie

- Cookie 默认是非持久化的，可以设置过期时间 使其持久化到磁盘

  ```java
  Cookie cookie = new Cookie("key","value");
  cookie.setMaxAge(60*60);   // 设置过期时间为 1 小时
  resp.addCookie(cookie);
  ```

#### **Session**

> `HttpSession` 对象代表了客户端与服务器之间的会话。在会话中，客户端与服务器可以持续地进行交互，而服务器可以存储特定于用户的信息，以便在会话期间保持状态。

- 服务器创建Session放入响应对象，tomcat将cookie添加到响应头中

- ```java
  HttpSession session = req.getSession();
  ```

  这段代码的执行流程，查找key为"JSESSIONID"的Cookie，如果没找到就重新创建一个HttpSession对象返回；如果找到了就new一个HttpSession对象返回且自动向响应头添加key为"JSESSIONID"的Cookie，下一步查找JSESSIONID对应的HttpSession，找到了就返回这个HttpSession对象，否则就new一个HttpSession对象返回且自动向响应头添加key为"JSESSIONID"的Cookie

- Session的时效性
  默认会话超时时间是30分钟

  ```java
  session.setMaxInactiveInterval(60*60); // 设置会话过期时间为 1小时
  ```

  设置的过期时间是从上一次与服务器的交互开始计算的。因此，如果在过期时间内有新的请求到达服务器，会话的过期时间将被重置。
  在`web.xml`中设置

  ```xml
      <!-- 设置会话超时时间为30分钟 -->
      <session-config>
          <session-timeout>30</session-timeout> <!-- 以分钟为单位 -->
      </session-config>
  ```

#### 域对象

**请求域**

> 一次 HTTP 请求的有效的对象， 通常存放与业务逻辑有关的数据

**会话域**

> 用户会话期间有效的对象 , 通常存放与用户登录状态有关的数据

**应用域**

> Web 应用程序中有效的对象，通常存放与应用程序有关的数据，如Spring的`IOC`对象



### 过滤器

#### HttpFilter使用

> Servlet 5.0开始，Servlet 规范已经迁移到了 Jakarta EE（以前称为 Java EE）的命名空间中，因此包名也相应地更改为了 `jakarta.servlet` 和 `jakarta.servlet.http`。在 Servlet 5.0 中引入了 `HttpFilter` 类，用于更方便地处理 HTTP 请求和响应。
>
> 对于 Servlet 5.0 版本,应使用  `jakarta.servlet.Filter`
>
> 对于 Servlet 4.0 及更早版本，仍然使用 `javax.servlet.Filter` 接口来创建过滤器。

1. 继承HttpFilter类重写 doFilter()方法

2. 在请求获取目标资源之前的处理

3. 放行处理

   ```java
   filterchain.doFilter(req,resp);
   ```

   如果没有放行，请求将无法到达资源

4. 响应之前的处理

5. 配置filter过滤器
   ①使用@WebFilter()注解指定

   ②在web.xml中配置

   ```xml
   <filter>
       <filter-name>loggingFilter</filter-name>
       <filter-class>com.aisi.filter.LoggingFilter</filter-class>
   </filter>
   <finter-mapping>
       <filter-name>loggingFilter</filter-name>
       <url-pattern></url-pattern> <!-- 可以是servlet的name(不加/)、或者资源路径  -->
   </finter-mapping>
   ```

#### 过滤器链

- 过滤器的执行顺序：
  假定有两个过滤器filter1、filter2，若filter1先于filter2执行，先执行filter1的放行前代码和放行代码，接着执行filter2的放行前代码和放行代码，随后执行filter2的响应前的代码，最后再执行filter1的响应前的代码

### 监听器

监听域对象的变化

①对象的创建

②对象的销毁

③对象的增加

④对象的修改

⑤对象的删除

1. 实现`ServletContextLitenter` 接口,添加`@WebListener`,重写方法,监听  `Application`应用域 创建和销毁

2. 实现`ServletContextAttributeListener` 接口,添加`@WebListener`,重写方法,监听  `Application`应用域 属性的变化

3. 实现`HttpSessionListener`接口,添加`@WebListener`,重写方法,监听`Session`域的创建和销毁

   > 需要注意的是 `Session`的创建时间是
   >
   > ```java
   > HttpSession session = req.getSession();
   > ```
   >
   > 这行代码会返回一个旧的或新的`Session`对象

4. 实现`HttpSessionAttrbuteListener`接口,添加`@WebListener`,重写方法,监听  `Session`应用域 属性的变化

5. 实现`ServletRequestListener`接口,添加`@WebListener`,重写方法,监听  `Request`请求域 创建和销毁

6. 实现`ServletRequestAttrbuteListener`接口,添加`@WebListener`,重写方法,监听  `Request`请求域属性的变化

7. `session`的特殊监听器,
   ①`HttpSessionBindingListener`监听`session`的`HttpSessionBindingListener`实现类对象 在`session`的添加和移除事件,
   ②钝化活化
   注意需要配置对应的 xml文件使得 session钝化活化生效
