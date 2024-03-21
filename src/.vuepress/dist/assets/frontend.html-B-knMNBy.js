import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as n,b as t}from"./app-B74dJ_e7.js";const s={},l=t(`<h4 id="后端" tabindex="-1"><a class="header-anchor" href="#后端"><span>后端</span></a></h4><p>创建Springboot项目<code>aisi-backend</code></p><p><strong>pom.xml</strong></p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
         xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;
    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;
    &lt;parent&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-starter-parent&lt;/artifactId&gt;
        &lt;version&gt;3.1.2&lt;/version&gt;
        &lt;relativePath/&gt; &lt;!-- lookup parent from repository --&gt;
    &lt;/parent&gt;
    &lt;groupId&gt;com.aisi&lt;/groupId&gt;
    &lt;artifactId&gt;aisi-backend&lt;/artifactId&gt;
    &lt;version&gt;1.0.0&lt;/version&gt;
    &lt;name&gt;aisi-backend&lt;/name&gt;
    &lt;description&gt;aisi-backend&lt;/description&gt;
    &lt;properties&gt;
        &lt;java.version&gt;17&lt;/java.version&gt;
    &lt;/properties&gt;
    &lt;dependencies&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;com.auth0&lt;/groupId&gt;
            &lt;artifactId&gt;java-jwt&lt;/artifactId&gt;
            &lt;version&gt;4.1.0&lt;/version&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;com.alibaba.fastjson2&lt;/groupId&gt;
            &lt;artifactId&gt;fastjson2&lt;/artifactId&gt;
            &lt;version&gt;2.0.23&lt;/version&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-starter-data-redis&lt;/artifactId&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-starter-security&lt;/artifactId&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
        &lt;/dependency&gt;

        &lt;dependency&gt;
            &lt;groupId&gt;com.mysql&lt;/groupId&gt;
            &lt;artifactId&gt;mysql-connector-j&lt;/artifactId&gt;
            &lt;scope&gt;runtime&lt;/scope&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.projectlombok&lt;/groupId&gt;
            &lt;artifactId&gt;lombok&lt;/artifactId&gt;
            &lt;optional&gt;true&lt;/optional&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;
            &lt;scope&gt;test&lt;/scope&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.security&lt;/groupId&gt;
            &lt;artifactId&gt;spring-security-test&lt;/artifactId&gt;
            &lt;scope&gt;test&lt;/scope&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;com.baomidou&lt;/groupId&gt;
            &lt;artifactId&gt;mybatis-plus-spring-boot3-starter&lt;/artifactId&gt;
            &lt;version&gt;3.5.5&lt;/version&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-starter-mail&lt;/artifactId&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-starter-amqp&lt;/artifactId&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-starter-validation&lt;/artifactId&gt;
        &lt;/dependency&gt;


    &lt;/dependencies&gt;

    &lt;build&gt;
        &lt;plugins&gt;
            &lt;plugin&gt;
                &lt;groupId&gt;org.graalvm.buildtools&lt;/groupId&gt;
                &lt;artifactId&gt;native-maven-plugin&lt;/artifactId&gt;
            &lt;/plugin&gt;
            &lt;plugin&gt;
                &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
                &lt;artifactId&gt;spring-boot-maven-plugin&lt;/artifactId&gt;
                &lt;configuration&gt;
                    &lt;excludes&gt;
                        &lt;exclude&gt;
                            &lt;groupId&gt;org.projectlombok&lt;/groupId&gt;
                            &lt;artifactId&gt;lombok&lt;/artifactId&gt;
                        &lt;/exclude&gt;
                    &lt;/excludes&gt;
                &lt;/configuration&gt;
            &lt;/plugin&gt;
        &lt;/plugins&gt;
    &lt;/build&gt;

&lt;/project&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="前端-初始化" tabindex="-1"><a class="header-anchor" href="#前端-初始化"><span>前端 初始化</span></a></h4><p>创建 项目<code>aisi-frontend</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>npm create vite@latest aisi-frontend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="前端项目解析" tabindex="-1"><a class="header-anchor" href="#前端项目解析"><span>前端项目解析</span></a></h2><h4 id="springsecurity的基本配置" tabindex="-1"><a class="header-anchor" href="#springsecurity的基本配置"><span><strong>SpringSecurity的基本配置</strong></span></a></h4><blockquote><p>类全路径 <code>com.aisi.config.SecurityConfiguration</code></p></blockquote><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>package com.aisi.config;

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
                .authorizeHttpRequests(conf -&gt; conf
                        .requestMatchers(&quot;/api/auth/**&quot; ,&quot;/error&quot;).permitAll()  // 放行登录验证接口
                        .anyRequest().authenticated() // 所有请求都需要登录验证
                )
                .formLogin(conf -&gt; conf
                        .loginProcessingUrl(&quot;/api/auth/login&quot;)
                        .failureHandler(this::onAuthenticationFailure) // 登录验证失败
                        .successHandler(this::onAuthenticationSuccess)) // 登录认证成功
                .logout(conf -&gt; conf
                        .logoutUrl(&quot;/api/auth/logout&quot;)
                        .logoutSuccessHandler(this::onLogoutSuccess))  // 退出登录成功
                .exceptionHandling(conf -&gt; conf
                        .authenticationEntryPoint(this::onUnauthorized) //未登录验证处理
                        .accessDeniedHandler(this::onAccessDeny))  //登录验证通过但权限不足
                .csrf(AbstractHttpConfigurer::disable)
                .sessionManagement(conf -&gt; conf
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
        response.setContentType(&quot;application/json;charset=utf-8&quot;);
        User user = (User) authentication.getPrincipal(); // 获取登录用户信息
        Account account = new Account();  // 测试
        String token = utils.createJwt(user, account.getId(), account.getUsername());
        AuthorizeVO authorizeVO=account.asViewObject(AuthorizeVO.class, vo -&gt;{
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
        response.setContentType(&quot;application/json;charset=utf-8&quot;);
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
        response.setContentType(&quot;application/json;charset=utf-8&quot;);
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
        response.setContentType(&quot;application/json;charset=utf-8&quot;);
        response.getWriter().write(RestBean.unauthorized(e.getMessage()).asJsonString());
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="basedata拷贝工具类" tabindex="-1"><a class="header-anchor" href="#basedata拷贝工具类"><span><strong>BaseData拷贝工具类</strong></span></a></h4><blockquote><p>类全路径 <code>com.aisi.entity.vo.BaseData</code></p></blockquote><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>package com.aisi.entity.vo;

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

    default &lt;V&gt; V asViewObject(Class&lt;V&gt; clazz, Consumer&lt;V&gt; consumer){
        V v = this.asViewObject(clazz);
        consumer.accept(v);
        return v;
    }

    default &lt;V&gt; V asViewObject(Class&lt;V&gt; clazz){
        try{
            Field[] declaredFields = clazz.getDeclaredFields();
            Constructor&lt;V&gt; constructor = clazz.getConstructor();
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="account实体类" tabindex="-1"><a class="header-anchor" href="#account实体类"><span>Account实体类</span></a></h4><blockquote><p>类全路径 com.aisi.entity.dto.Account</p></blockquote><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>package com.aisi.entity.dto;

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
@TableName(&quot;db_account&quot;)
public class Account implements BaseData {
    @TableId(type = IdType.AUTO)
    Integer id;
    String username;
    String password;
    String email;
    String role;
    Date registerTime;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="authorizevo响应实体类" tabindex="-1"><a class="header-anchor" href="#authorizevo响应实体类"><span>AuthorizeVO响应实体类</span></a></h4><blockquote><p>类全路径 <code>com.aisi.entity.vo.response.AuthorizeVO</code></p></blockquote><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>package com.aisi.entity.vo.response;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="jwt令牌颁发" tabindex="-1"><a class="header-anchor" href="#jwt令牌颁发"><span>Jwt令牌颁发</span></a></h4><blockquote><p>类全路径 <code>com.aisi.utils.JwtUtils</code></p></blockquote><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>package com.aisi.utils;

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

    @Value(&quot;\${spring.security.jwt.key}&quot;)
    public String key; // JWT 密钥

    @Value(&quot;\${spring.security.jwt.expire}&quot;)
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
                .withClaim(&quot;id&quot;, id) // 用户id
                .withClaim(&quot;name&quot;, username) // 用户名
                .withClaim(&quot;authorities&quot;, details.getAuthorities().stream().map(GrantedAuthority::getAuthority).toList()) // 权限
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="拦截校验" tabindex="-1"><a class="header-anchor" href="#拦截校验"><span>拦截校验</span></a></h4><blockquote><p>类全路径 <code>com.aisi.filter.JwtAuthorizeFilter</code></p></blockquote><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>package com.aisi.filter;

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
        String authorization = request.getHeader(&quot;authorization&quot;); // 拿到用户的token
        DecodedJWT jwt = utils.resolveJwt(authorization); //解析得到令牌对象
        if (jwt != null) {
            UserDetails userDetails = utils.toUser(jwt);
            UsernamePasswordAuthenticationToken authenticationToken =
                    new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities()); //
            authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
            SecurityContextHolder.getContext().setAuthentication(authenticationToken);// 验证通过,放入上下文
//            request.setAttribute(&quot;id&quot;,utils.toId(jwt));
        }
        filterChain.doFilter(request, response);
    }
}
	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还需在 <code>com.aisi.config.SecurityConfiguration</code>添加过滤器</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>                .csrf(AbstractHttpConfigurer::disable)
                .sessionManagement(conf -&gt; conf
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .addFilterBefore(jwtAuthorizeFilter, UsernamePasswordAuthenticationFilter.class) // 在这里添加过滤器
                .build();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="jwt请求头校验" tabindex="-1"><a class="header-anchor" href="#jwt请求头校验"><span>Jwt请求头校验</span></a></h4><blockquote><p>类全路径 <code>com.aisi.utils.JwtUtils</code></p></blockquote><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>    /**
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="退出登录" tabindex="-1"><a class="header-anchor" href="#退出登录"><span>退出登录</span></a></h4><p>将Jwt令牌失效</p><p>​</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="数据库校验" tabindex="-1"><a class="header-anchor" href="#数据库校验"><span>数据库校验</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>    /**
     * @param username
     * @return
     * @throws UsernameNotFoundException
     */
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Account account = findAccountByUsernameOrEmail(username);
        if (account == null)
            throw new UsernameNotFoundException(&quot;用户或密码错误&quot;);
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
                .eq(&quot;username&quot;, text).or()
                .eq(&quot;email&quot;, text)
                .one();
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code>spring:
  datasource:
    type: com.mysql.cj.jdbc.MysqlDataSource            # 当前数据源操作类型
    driver-class-name: com.mysql.cj.jdbc.Driver             # mysql驱动包
    url: jdbc:mysql://127.0.0.1:3306/db_base?useUnicode=true&amp;characterEncoding=utf-8&amp;useSSL=false
    username: root
    password: root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>package com.aisi.config;

@Configuration
public class WebConfiguration {

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder(){
        return  new BCryptPasswordEncoder();
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="bean拷贝" tabindex="-1"><a class="header-anchor" href="#bean拷贝"><span>Bean拷贝</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>package com.aisi.entity.vo;

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

    default &lt;V&gt; V asViewObject(Class&lt;V&gt; clazz, Consumer&lt;V&gt; consumer){
        V v = this.asViewObject(clazz);
        consumer.accept(v);
        return v;
    }

    default &lt;V&gt; V asViewObject(Class&lt;V&gt; clazz){
        try{
            Field[] declaredFields = clazz.getDeclaredFields();
            Constructor&lt;V&gt; constructor = clazz.getConstructor();
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>    private void onAuthenticationSuccess(HttpServletRequest request,
                                         HttpServletResponse response,
                                         Authentication authentication) throws IOException {
        response.setContentType(&quot;application/json;charset=utf-8&quot;);
        User user = (User) authentication.getPrincipal(); // 获取登录用户信息
        Account account = accountService.findAccountByUsernameOrEmail(user.getUsername());
        String token = utils.createJwt(user, account.getId(), account.getUsername());
//        AuthorizeVO authorizeVO = new AuthorizeVO();
//        BeanUtils.copyProperties(account,authorizeVO); // bean拷贝
        AuthorizeVO authorizeVO=account.asViewObject(AuthorizeVO.class, vo -&gt;{
            vo.setToken(token);
            vo.setExpire(utils.expireTime());
        });

        response.getWriter().write(RestBean.success(authorizeVO).asJsonString());
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,42),r=[l];function a(d,c){return i(),n("div",null,r)}const u=e(s,[["render",a],["__file","frontend.html.vue"]]),m=JSON.parse('{"path":"/project/project-template/frontend.html","title":"Frontend解析","lang":"zh-CN","frontmatter":{"title":"Frontend解析","icon":"frontend","category":"project","tag":["frontend"],"date":"2024-03-16T00:00:00.000Z","description":"后端 创建Springboot项目aisi-backend pom.xml 前端 初始化 创建 项目aisi-frontend 前端项目解析 SpringSecurity的基本配置 类全路径 com.aisi.config.SecurityConfiguration BaseData拷贝工具类 类全路径 com.aisi.entity.vo.BaseD...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/project/project-template/frontend.html"}],["meta",{"property":"og:site_name","content":"爱思文档"}],["meta",{"property":"og:title","content":"Frontend解析"}],["meta",{"property":"og:description","content":"后端 创建Springboot项目aisi-backend pom.xml 前端 初始化 创建 项目aisi-frontend 前端项目解析 SpringSecurity的基本配置 类全路径 com.aisi.config.SecurityConfiguration BaseData拷贝工具类 类全路径 com.aisi.entity.vo.BaseD..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-17T01:42:56.000Z"}],["meta",{"property":"article:author","content":"shenjianZ"}],["meta",{"property":"article:tag","content":"frontend"}],["meta",{"property":"article:published_time","content":"2024-03-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-17T01:42:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Frontend解析\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-16T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-17T01:42:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"shenjianZ\\",\\"url\\":\\"https://shenjianl.cn\\"}]}"]]},"headers":[{"level":4,"title":"后端","slug":"后端","link":"#后端","children":[]},{"level":4,"title":"前端 初始化","slug":"前端-初始化","link":"#前端-初始化","children":[]},{"level":2,"title":"前端项目解析","slug":"前端项目解析","link":"#前端项目解析","children":[{"level":4,"title":"SpringSecurity的基本配置","slug":"springsecurity的基本配置","link":"#springsecurity的基本配置","children":[]},{"level":4,"title":"BaseData拷贝工具类","slug":"basedata拷贝工具类","link":"#basedata拷贝工具类","children":[]},{"level":4,"title":"Account实体类","slug":"account实体类","link":"#account实体类","children":[]},{"level":4,"title":"AuthorizeVO响应实体类","slug":"authorizevo响应实体类","link":"#authorizevo响应实体类","children":[]},{"level":4,"title":"Jwt令牌颁发","slug":"jwt令牌颁发","link":"#jwt令牌颁发","children":[]},{"level":4,"title":"拦截校验","slug":"拦截校验","link":"#拦截校验","children":[]},{"level":4,"title":"Jwt请求头校验","slug":"jwt请求头校验","link":"#jwt请求头校验","children":[]},{"level":4,"title":"退出登录","slug":"退出登录","link":"#退出登录","children":[]},{"level":4,"title":"数据库校验","slug":"数据库校验","link":"#数据库校验","children":[]},{"level":4,"title":"Bean拷贝","slug":"bean拷贝","link":"#bean拷贝","children":[]}]}],"git":{"createdTime":1710639776000,"updatedTime":1710639776000,"contributors":[{"name":"shenjianZ","email":"shenjianZLT@gmail.com","commits":1}]},"readingTime":{"minutes":6.48,"words":1943},"filePathRelative":"project/project-template/frontend.md","localizedDate":"2024年3月16日","excerpt":"<h4>后端</h4>\\n<p>创建Springboot项目<code>aisi-backend</code></p>\\n<p><strong>pom.xml</strong></p>\\n<div class=\\"language-xml\\" data-ext=\\"xml\\" data-title=\\"xml\\"><pre class=\\"language-xml\\"><code>&lt;?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?&gt;\\n&lt;project xmlns=\\"http://maven.apache.org/POM/4.0.0\\" xmlns:xsi=\\"http://www.w3.org/2001/XMLSchema-instance\\"\\n         xsi:schemaLocation=\\"http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd\\"&gt;\\n    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;\\n    &lt;parent&gt;\\n        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;\\n        &lt;artifactId&gt;spring-boot-starter-parent&lt;/artifactId&gt;\\n        &lt;version&gt;3.1.2&lt;/version&gt;\\n        &lt;relativePath/&gt; &lt;!-- lookup parent from repository --&gt;\\n    &lt;/parent&gt;\\n    &lt;groupId&gt;com.aisi&lt;/groupId&gt;\\n    &lt;artifactId&gt;aisi-backend&lt;/artifactId&gt;\\n    &lt;version&gt;1.0.0&lt;/version&gt;\\n    &lt;name&gt;aisi-backend&lt;/name&gt;\\n    &lt;description&gt;aisi-backend&lt;/description&gt;\\n    &lt;properties&gt;\\n        &lt;java.version&gt;17&lt;/java.version&gt;\\n    &lt;/properties&gt;\\n    &lt;dependencies&gt;\\n        &lt;dependency&gt;\\n            &lt;groupId&gt;com.auth0&lt;/groupId&gt;\\n            &lt;artifactId&gt;java-jwt&lt;/artifactId&gt;\\n            &lt;version&gt;4.1.0&lt;/version&gt;\\n        &lt;/dependency&gt;\\n        &lt;dependency&gt;\\n            &lt;groupId&gt;com.alibaba.fastjson2&lt;/groupId&gt;\\n            &lt;artifactId&gt;fastjson2&lt;/artifactId&gt;\\n            &lt;version&gt;2.0.23&lt;/version&gt;\\n        &lt;/dependency&gt;\\n        &lt;dependency&gt;\\n            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;\\n            &lt;artifactId&gt;spring-boot-starter-data-redis&lt;/artifactId&gt;\\n        &lt;/dependency&gt;\\n        &lt;dependency&gt;\\n            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;\\n            &lt;artifactId&gt;spring-boot-starter-security&lt;/artifactId&gt;\\n        &lt;/dependency&gt;\\n        &lt;dependency&gt;\\n            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;\\n            &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;\\n        &lt;/dependency&gt;\\n\\n        &lt;dependency&gt;\\n            &lt;groupId&gt;com.mysql&lt;/groupId&gt;\\n            &lt;artifactId&gt;mysql-connector-j&lt;/artifactId&gt;\\n            &lt;scope&gt;runtime&lt;/scope&gt;\\n        &lt;/dependency&gt;\\n        &lt;dependency&gt;\\n            &lt;groupId&gt;org.projectlombok&lt;/groupId&gt;\\n            &lt;artifactId&gt;lombok&lt;/artifactId&gt;\\n            &lt;optional&gt;true&lt;/optional&gt;\\n        &lt;/dependency&gt;\\n        &lt;dependency&gt;\\n            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;\\n            &lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;\\n            &lt;scope&gt;test&lt;/scope&gt;\\n        &lt;/dependency&gt;\\n        &lt;dependency&gt;\\n            &lt;groupId&gt;org.springframework.security&lt;/groupId&gt;\\n            &lt;artifactId&gt;spring-security-test&lt;/artifactId&gt;\\n            &lt;scope&gt;test&lt;/scope&gt;\\n        &lt;/dependency&gt;\\n        &lt;dependency&gt;\\n            &lt;groupId&gt;com.baomidou&lt;/groupId&gt;\\n            &lt;artifactId&gt;mybatis-plus-spring-boot3-starter&lt;/artifactId&gt;\\n            &lt;version&gt;3.5.5&lt;/version&gt;\\n        &lt;/dependency&gt;\\n        &lt;dependency&gt;\\n            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;\\n            &lt;artifactId&gt;spring-boot-starter-mail&lt;/artifactId&gt;\\n        &lt;/dependency&gt;\\n        &lt;dependency&gt;\\n            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;\\n            &lt;artifactId&gt;spring-boot-starter-amqp&lt;/artifactId&gt;\\n        &lt;/dependency&gt;\\n        &lt;dependency&gt;\\n            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;\\n            &lt;artifactId&gt;spring-boot-starter-validation&lt;/artifactId&gt;\\n        &lt;/dependency&gt;\\n\\n\\n    &lt;/dependencies&gt;\\n\\n    &lt;build&gt;\\n        &lt;plugins&gt;\\n            &lt;plugin&gt;\\n                &lt;groupId&gt;org.graalvm.buildtools&lt;/groupId&gt;\\n                &lt;artifactId&gt;native-maven-plugin&lt;/artifactId&gt;\\n            &lt;/plugin&gt;\\n            &lt;plugin&gt;\\n                &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;\\n                &lt;artifactId&gt;spring-boot-maven-plugin&lt;/artifactId&gt;\\n                &lt;configuration&gt;\\n                    &lt;excludes&gt;\\n                        &lt;exclude&gt;\\n                            &lt;groupId&gt;org.projectlombok&lt;/groupId&gt;\\n                            &lt;artifactId&gt;lombok&lt;/artifactId&gt;\\n                        &lt;/exclude&gt;\\n                    &lt;/excludes&gt;\\n                &lt;/configuration&gt;\\n            &lt;/plugin&gt;\\n        &lt;/plugins&gt;\\n    &lt;/build&gt;\\n\\n&lt;/project&gt;\\n\\n</code></pre></div>","autoDesc":true}');export{u as comp,m as data};
