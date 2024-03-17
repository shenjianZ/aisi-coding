---
title: Frontend解析
icon: frontend
category: project
tag:
  - frontend
date: 2024-03-16
---


#### 后端

创建Springboot项目`aisi-backend`

**pom.xml**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.1.2</version>
        <relativePath/> <!-- lookup parent from repository -->
    </parent>
    <groupId>com.aisi</groupId>
    <artifactId>aisi-backend</artifactId>
    <version>1.0.0</version>
    <name>aisi-backend</name>
    <description>aisi-backend</description>
    <properties>
        <java.version>17</java.version>
    </properties>
    <dependencies>
        <dependency>
            <groupId>com.auth0</groupId>
            <artifactId>java-jwt</artifactId>
            <version>4.1.0</version>
        </dependency>
        <dependency>
            <groupId>com.alibaba.fastjson2</groupId>
            <artifactId>fastjson2</artifactId>
            <version>2.0.23</version>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-redis</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-security</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <dependency>
            <groupId>com.mysql</groupId>
            <artifactId>mysql-connector-j</artifactId>
            <scope>runtime</scope>
        </dependency>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <optional>true</optional>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.springframework.security</groupId>
            <artifactId>spring-security-test</artifactId>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>com.baomidou</groupId>
            <artifactId>mybatis-plus-spring-boot3-starter</artifactId>
            <version>3.5.5</version>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-mail</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-amqp</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-validation</artifactId>
        </dependency>


    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.graalvm.buildtools</groupId>
                <artifactId>native-maven-plugin</artifactId>
            </plugin>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <configuration>
                    <excludes>
                        <exclude>
                            <groupId>org.projectlombok</groupId>
                            <artifactId>lombok</artifactId>
                        </exclude>
                    </excludes>
                </configuration>
            </plugin>
        </plugins>
    </build>

</project>

```

#### 前端 初始化

创建 项目`aisi-frontend`

```shell
npm create vite@latest aisi-frontend
```

## 前端项目解析

#### **SpringSecurity的基本配置**

> 类全路径 `com.aisi.config.SecurityConfiguration`

```java
package com.aisi.config;

import com.aisi.entity.RestBean;
import com.aisi.entity.dto.Account;
import com.aisi.entity.vo.response.AuthorizeVO;
import com.aisi.filter.JwtAuthorizeFilter;
import com.aisi.service.AccountService;
import com.aisi.utils.JwtUtils;
import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import java.io.IOException;
import java.io.PrintWriter;

/**
 * @Author: shenjianZ
 * @Date: 2024/2/14 12:43
 * @Description: Spring Security的配置类，设置安全相关的配置。
 *               定义HTTP请求的访问规则，添加过滤器链来处理这些请求。
 */

@Configuration
public class SecurityConfiguration {

    @Resource
    private JwtUtils utils;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception {
        return httpSecurity
                .authorizeHttpRequests(conf -> conf
                        .requestMatchers("/api/auth/**" ,"/error").permitAll()  // 放行登录验证接口
                        .anyRequest().authenticated() // 所有请求都需要登录验证
                )
                .formLogin(conf -> conf
                        .loginProcessingUrl("/api/auth/login")
                        .failureHandler(this::onAuthenticationFailure) // 登录验证失败
                        .successHandler(this::onAuthenticationSuccess)) // 登录认证成功
                .logout(conf -> conf
                        .logoutUrl("/api/auth/logout")
                        .logoutSuccessHandler(this::onLogoutSuccess))  // 退出登录成功
                .exceptionHandling(conf -> conf
                        .authenticationEntryPoint(this::onUnauthorized) //未登录验证处理
                        .accessDeniedHandler(this::onAccessDeny))  //登录验证通过但权限不足
                .csrf(AbstractHttpConfigurer::disable)
                .sessionManagement(conf -> conf
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .build();

    }


    /**
     *  退出登录成功处理
     * @param request
     * @param response
     * @param authentication
     * @throws IOException
     */
    private void onLogoutSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException {
        //TODO
   
    }


    /**
     * 登录成功后，生成token并返回给前端 ( JSON 格式 )
     * @param request
     * @param response
     * @param authentication
     * @throws IOException
     */
    private void onAuthenticationSuccess(HttpServletRequest request,
                                         HttpServletResponse response,
                                         Authentication authentication) throws IOException {
        response.setContentType("application/json;charset=utf-8");
        User user = (User) authentication.getPrincipal(); // 获取登录用户信息
        Account account = new Account();  // 测试
        String token = utils.createJwt(user, account.getId(), account.getUsername());
        AuthorizeVO authorizeVO=account.asViewObject(AuthorizeVO.class, vo ->{
            vo.setToken(token);
            vo.setExpire(utils.expireTime());
        });

        response.getWriter().write(RestBean.success(authorizeVO).asJsonString());
    }

    /**
     * 登录失败后，返回错误信息( JSON 格式 )
     * @param request
     * @param response
     * @param e
     * @throws IOException
     */
    private void onAuthenticationFailure(HttpServletRequest request,
                                         HttpServletResponse response,
                                         AuthenticationException e) throws IOException {
        response.setContentType("application/json;charset=utf-8");
        response.getWriter().write(RestBean.unauthorized(e.getMessage()).asJsonString());
    }

    /**
     * 处理访问拒绝请求的方法。
     *
     * @param request  HTTP请求对象
     * @param response HTTP响应对象
     * @param e        访问拒绝异常对象
     * @throws IOException 当写入响应流时发生异常
     */
    private void onAccessDeny(HttpServletRequest request,
                              HttpServletResponse response,
                              AccessDeniedException e) throws IOException {
        response.setContentType("application/json;charset=utf-8");
        response.getWriter().write(RestBean.forbidden(e.getMessage()).asJsonString());
    }
    
    /**
     * 处理未授权请求的方法。
     *
     * @param request  HTTP请求对象
     * @param response HTTP响应对象
     * @param e        认证异常对象
     * @throws IOException 当写入响应流时发生异常
     */
    private void onUnauthorized(HttpServletRequest request,
                                HttpServletResponse response,
                                AuthenticationException e) throws IOException {
        response.setContentType("application/json;charset=utf-8");
        response.getWriter().write(RestBean.unauthorized(e.getMessage()).asJsonString());
    }
}

```



#### **BaseData拷贝工具类**

> 类全路径 `com.aisi.entity.vo.BaseData`

```java
package com.aisi.entity.vo;

import java.io.File;
import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.util.function.Consumer;

/**
 * @Author: shenjianZ
 * @Date: 2024/2/15 8:48
 * @Description: bean对象拷贝工具类
 */


public interface BaseData {

    default <V> V asViewObject(Class<V> clazz, Consumer<V> consumer){
        V v = this.asViewObject(clazz);
        consumer.accept(v);
        return v;
    }

    default <V> V asViewObject(Class<V> clazz){
        try{
            Field[] declaredFields = clazz.getDeclaredFields();
            Constructor<V> constructor = clazz.getConstructor();
            V v = constructor.newInstance();
            for (Field declaredField : declaredFields) {
                convert(declaredField,v);
            }
            return v;
        }catch (ReflectiveOperationException e){
            throw new RuntimeException(e.getMessage());
        }
    }

    private void convert(Field field , Object vo){
        try {
            Field source = getClass().getDeclaredField(field.getName());
            field.setAccessible(true);
            source.setAccessible(true);
            field.set(vo,source.get(this));
        }catch (IllegalAccessException | NoSuchFieldException ignored){}
    }

}

```

#### Account实体类

> 类全路径 com.aisi.entity.dto.Account

```java
package com.aisi.entity.dto;

import com.aisi.entity.vo.BaseData;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

/**
 * @Author: shenjianZ
 * @Date: 2024/2/14 18:39
 * @Description: 用户实体类
 */

@Data
@AllArgsConstructor
@NoArgsConstructor
@TableName("db_account")
public class Account implements BaseData {
    @TableId(type = IdType.AUTO)
    Integer id;
    String username;
    String password;
    String email;
    String role;
    Date registerTime;
}
```

#### AuthorizeVO响应实体类

> 类全路径 `com.aisi.entity.vo.response.AuthorizeVO`

```java
package com.aisi.entity.vo.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

/**
 * @Author: shenjianZ
 * @Date: 2024/2/14 13:47
 * @Description: 响应的用户登陆状态实体类
 */

@AllArgsConstructor
@NoArgsConstructor
@Data
public class AuthorizeVO {
    String username;
    String role;
    String token;
    Date expire;
}
```



#### Jwt令牌颁发

> 类全路径 `com.aisi.utils.JwtUtils`

```java
package com.aisi.utils;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.Claim;
import com.auth0.jwt.interfaces.DecodedJWT;
import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.Calendar;
import java.util.Date;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.TimeUnit;

/**
 * @Author: shenjianZ
 * @Date: 2024/2/14 13:32
 * @Description: JWT工具类
 */

@Component
public class JwtUtils {

    @Value("${spring.security.jwt.key}")
    public String key; // JWT 密钥

    @Value("${spring.security.jwt.expire}")
    public int expire; // JWT 令牌默认过期时间

    /**
     * 为用户创建 JWT 的令牌(Token)
     * @param details User
     * @param id User id
     * @param username User name
     * @return JWT令牌
     */
    public String createJwt(UserDetails details, int id, String username) {
        System.out.println(key);
        Algorithm algorithm = Algorithm.HMAC256(key); // 令牌使用算法
        Date expireTime = expireTime(); // 令牌过期时间
        return JWT.create()
                .withJWTId(UUID.randomUUID().toString()) // JWT id
                .withClaim("id", id) // 用户id
                .withClaim("name", username) // 用户名
                .withClaim("authorities", details.getAuthorities().stream().map(GrantedAuthority::getAuthority).toList()) // 权限
                .withExpiresAt(expireTime) // 令牌过期时间
                .withIssuedAt(new Date())  // 令牌创建时间
                .sign(algorithm);   //  使用算法加密
    }

    /**
     * 计算令牌过期时间
     * @return Date
     */
    public Date expireTime() {
        Calendar calendar = Calendar.getInstance();
        calendar.add(Calendar.HOUR, expire * 24);
        return calendar.getTime();
    }

}

```

#### 拦截校验

> 类全路径 `com.aisi.filter.JwtAuthorizeFilter`

```java
package com.aisi.filter;

import com.aisi.utils.JwtUtils;
import com.auth0.jwt.interfaces.DecodedJWT;
import jakarta.annotation.Resource;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

/**
 * @Author: shenjianZ
 * @Date: 2024/2/14 14:28
 * @Description: 自定义过滤器，验证token
 */

@Component
public class JwtAuthorizeFilter extends OncePerRequestFilter {

    @Resource
    private JwtUtils utils;

    /**
     * 过滤
     *
     * @param request
     * @param response
     * @param filterChain
     * @throws ServletException
     * @throws IOException
     */
    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {
        String authorization = request.getHeader("authorization"); // 拿到用户的token
        DecodedJWT jwt = utils.resolveJwt(authorization); //解析得到令牌对象
        if (jwt != null) {
            UserDetails userDetails = utils.toUser(jwt);
            UsernamePasswordAuthenticationToken authenticationToken =
                    new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities()); //
            authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
            SecurityContextHolder.getContext().setAuthentication(authenticationToken);// 验证通过,放入上下文
//            request.setAttribute("id",utils.toId(jwt));
        }
        filterChain.doFilter(request, response);
    }
}
	
```

还需在 `com.aisi.config.SecurityConfiguration`添加过滤器

```java
                .csrf(AbstractHttpConfigurer::disable)
                .sessionManagement(conf -> conf
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .addFilterBefore(jwtAuthorizeFilter, UsernamePasswordAuthenticationFilter.class) // 在这里添加过滤器
                .build();
```

#### Jwt请求头校验

> 类全路径 `com.aisi.utils.JwtUtils`

```java
    /**
     * 根据Token解析得到JWT的令牌
     * @param headerToken 用户的Token
     * @return DecodedJWT
     *         若Token为空、令牌被篡改、令牌已过期，返回null
     *         否则，返回解析的JWT令牌对象
     */
    public DecodedJWT resolveJwt(String headerToken){
        String token = convertToken(headerToken); //得到token
        if (token == null) return  null;
        Algorithm algorithm = Algorithm.HMAC256(key);
        JWTVerifier jwtVerifier = JWT.require(algorithm).build();
        try {
            DecodedJWT verify = jwtVerifier.verify(token); // 在try catch中检查令牌是否被篡改
            Date expires = verify.getExpiresAt();
            return new Date().after(expires) ? null : verify;
        }catch (JWTVerificationException e){
            return null;
        }
    }
```

####  退出登录

将Jwt令牌失效


​

```

```



#### 数据库校验

```java
    /**
     * @param username
     * @return
     * @throws UsernameNotFoundException
     */
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Account account = findAccountByUsernameOrEmail(username);
        if (account == null)
            throw new UsernameNotFoundException("用户或密码错误");
        return User
                .withUsername(username)
                .password(account.getPassword())
                .roles(account.getRole())
                .build();

    }


    /**
     * @param text
     * @return
     */
    public Account findAccountByUsernameOrEmail(String text) {
        return query()
                .eq("username", text).or()
                .eq("email", text)
                .one();
    }
```

```yaml
spring:
  datasource:
    type: com.mysql.cj.jdbc.MysqlDataSource            # 当前数据源操作类型
    driver-class-name: com.mysql.cj.jdbc.Driver             # mysql驱动包
    url: jdbc:mysql://127.0.0.1:3306/db_base?useUnicode=true&characterEncoding=utf-8&useSSL=false
    username: root
    password: root
```

```java
package com.aisi.config;

@Configuration
public class WebConfiguration {

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder(){
        return  new BCryptPasswordEncoder();
    }
}

```

#### Bean拷贝

```java
package com.aisi.entity.vo;

import java.io.File;
import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.util.function.Consumer;

/**
 * @Author: shenjianZ
 * @Date: 2024/2/15 8:48
 * @Description: bean对象拷贝工具类
 */


public interface BaseData {

    default <V> V asViewObject(Class<V> clazz, Consumer<V> consumer){
        V v = this.asViewObject(clazz);
        consumer.accept(v);
        return v;
    }

    default <V> V asViewObject(Class<V> clazz){
        try{
            Field[] declaredFields = clazz.getDeclaredFields();
            Constructor<V> constructor = clazz.getConstructor();
            V v = constructor.newInstance();
            for (Field declaredField : declaredFields) {
                convert(declaredField,v);
            }
            return v;
        }catch (ReflectiveOperationException e){
            throw new RuntimeException(e.getMessage());
        }
    }

    private void convert(Field field , Object vo){
        try {
            Field source = getClass().getDeclaredField(field.getName());
            field.setAccessible(true);
            source.setAccessible(true);
            field.set(vo,source.get(this));
        }catch (IllegalAccessException | NoSuchFieldException ignored){}
    }

}
```

```java
    private void onAuthenticationSuccess(HttpServletRequest request,
                                         HttpServletResponse response,
                                         Authentication authentication) throws IOException {
        response.setContentType("application/json;charset=utf-8");
        User user = (User) authentication.getPrincipal(); // 获取登录用户信息
        Account account = accountService.findAccountByUsernameOrEmail(user.getUsername());
        String token = utils.createJwt(user, account.getId(), account.getUsername());
//        AuthorizeVO authorizeVO = new AuthorizeVO();
//        BeanUtils.copyProperties(account,authorizeVO); // bean拷贝
        AuthorizeVO authorizeVO=account.asViewObject(AuthorizeVO.class, vo ->{
            vo.setToken(token);
            vo.setExpire(utils.expireTime());
        });

        response.getWriter().write(RestBean.success(authorizeVO).asJsonString());
    }
```

