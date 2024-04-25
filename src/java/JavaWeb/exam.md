---
title: 考试指南
icon: web
tag:
  - JavaWeb
order: 100
date: 2024-04-25
---

## JDBC连接

```java
jdbc:mysql://43.143.145.172:3306/as_blog?useUnicode=true&characterEncoding=utf-8&useSSL=false&serverTimezone=UTC
```

```java
    public static Connection getConn()throws Exception{
        String driverName = "com.mysql.jdbc.Driver";          //驱动程序名
        String userName = "root";                             //数据库用户名
        String userPwd = "root";                             //密码
        String dbName = "db_test";                       //数据库名
        String  url1="jdbc:mysql://localhost:3306/"+dbName;
        String url2 ="?user="+userName+"&password="+userPwd;
        String  url3="&useUnicode=true&characterEncoding=UTF-8";  //访问数据库的汉字编码
        String url =url1+url2+url3;                                //形成带数据库读写编码的数据库连接字
        Connection conn=null;

        try{
            Class.forName(driverName);                                 //加载并注册驱动程序
            conn= DriverManager.getConnection(url);          //创建连接对象
        }catch (ClassNotFoundException e){
            e.printStackTrace();
        }
        return conn;
    }

    //数据库资源释放功能
    public static void free(ResultSet rs, PreparedStatement pstmt, Connection conn)throws Exception{
        if(rs!=null) rs.close();
        if(pstmt!=null) pstmt.close();
        if(conn!=null) conn.close();
    }

```

## sql执行

```java
    public void addUserInfo(User user)throws Exception{
        String sql="insert into user_info(name,password) values(?,?)";
        Connection conn=jdbcConn.getConn();
        PreparedStatement pstmt=conn.prepareStatement(sql);

        pstmt.setString(1,user.getName());
        pstmt.setString(2,user.getPswd());

        pstmt.executeUpdate();

        jdbcConn.free(null,pstmt,conn);
    }


    //2.queryUserInfo 根据账户密码查询用户信息
    public boolean queryUserInfo(User user)throws Exception{

        Connection conn=jdbcConn.getConn();
        String sql="select * from user_info where name=?";
        PreparedStatement pstmt=conn.prepareStatement(sql);

        pstmt.setString(1,user.getName());

        ResultSet rs=pstmt.executeQuery();

        if(rs!=null) return true;
        else return false;

    }
```

## controller处理请求

```java
protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("text/html;charset=UTF-8");
        req.setCharacterEncoding("UTF-8");

        Dao dao=null;
        Connection conn=null;
        try {
             conn=jdbcConn.getConn();
             dao=new Dao();
        }catch (Exception e){
            e.printStackTrace();
        }


        String str=req.getParameter("signIn");

        if(str!=null &&str.equals("注册")){
            //处理注册事情
            try{
                User user=new User(req.getParameter("uname"),req.getParameter("upswd"));
                if(dao.queryUserInfo(user)){//如果表中有此用户，则注册失败，否则注册成功！
                    resp.sendRedirect(req.getContextPath()+"/jsp/SignInOkInfo.jsp");
                    dao.addUserInfo(user);
                }else{
                    resp.sendRedirect(req.getContextPath()+"/jsp/SignInErrorInfo.jsp");
                }
            }catch (Exception e){
                e.printStackTrace();
            }
        }else{
            //处理登录检测事项
            try{
                User user=new User(req.getParameter("uname"),req.getParameter("upswd"));
                if(dao.queryUserInfo(user)){
                    resp.sendRedirect(req.getContextPath()+"/jsp/infoShow.jsp");
                }
            }catch (Exception e){
                e.printStackTrace();
            }

        }
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.doPost(req,resp);
    }
```

## web.xml

```xml
<web-app xmlns="https://jakarta.ee/xml/ns/jakartaee" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="https://jakarta.ee/xml/ns/jakartaee https://jakarta.ee/xml/ns/jakartaee/web-app_5_0.xsd" version="5.0">
    <welcome-file-list>
    	<welcome-file>jsp/index.jsp</welcome-file>
    </welcome-file-list>
</web-app>
```

## jsp

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
```

```jsp
<%--<%=request.getSession().getAttribute("Username")%>--%>
```


