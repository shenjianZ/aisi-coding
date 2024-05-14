import comp from "D:/GitHubRepository/aisi-coding/src/.vuepress/.temp/pages/project/project-template/frontend.html.vue"
const data = JSON.parse("{\"path\":\"/project/project-template/frontend.html\",\"title\":\"Frontend解析\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Frontend解析\",\"icon\":\"frontend\",\"category\":\"project\",\"tag\":[\"frontend\"],\"date\":\"2024-03-16T00:00:00.000Z\",\"description\":\"后端 创建Springboot项目aisi-backend pom.xml 前端 初始化 创建 项目aisi-frontend 前端项目解析 SpringSecurity的基本配置 类全路径 com.aisi.config.SecurityConfiguration BaseData拷贝工具类 类全路径 com.aisi.entity.vo.BaseD...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://blog.shenjianl.cn/aisi-coding/project/project-template/frontend.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"爱思文档\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Frontend解析\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"后端 创建Springboot项目aisi-backend pom.xml 前端 初始化 创建 项目aisi-frontend 前端项目解析 SpringSecurity的基本配置 类全路径 com.aisi.config.SecurityConfiguration BaseData拷贝工具类 类全路径 com.aisi.entity.vo.BaseD...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2024-03-17T03:56:04.000Z\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"shenjianZ\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"frontend\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2024-03-16T00:00:00.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2024-03-17T03:56:04.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Frontend解析\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2024-03-16T00:00:00.000Z\\\",\\\"dateModified\\\":\\\"2024-03-17T03:56:04.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"shenjianZ\\\",\\\"url\\\":\\\"https://blog.shenjianl.cn\\\",\\\"email\\\":\\\"15202078626@163.com\\\"}]}\"]]},\"headers\":[{\"level\":4,\"title\":\"后端\",\"slug\":\"后端\",\"link\":\"#后端\",\"children\":[]},{\"level\":4,\"title\":\"前端 初始化\",\"slug\":\"前端-初始化\",\"link\":\"#前端-初始化\",\"children\":[]},{\"level\":2,\"title\":\"前端项目解析\",\"slug\":\"前端项目解析\",\"link\":\"#前端项目解析\",\"children\":[{\"level\":4,\"title\":\"SpringSecurity的基本配置\",\"slug\":\"springsecurity的基本配置\",\"link\":\"#springsecurity的基本配置\",\"children\":[]},{\"level\":4,\"title\":\"BaseData拷贝工具类\",\"slug\":\"basedata拷贝工具类\",\"link\":\"#basedata拷贝工具类\",\"children\":[]},{\"level\":4,\"title\":\"Account实体类\",\"slug\":\"account实体类\",\"link\":\"#account实体类\",\"children\":[]},{\"level\":4,\"title\":\"AuthorizeVO响应实体类\",\"slug\":\"authorizevo响应实体类\",\"link\":\"#authorizevo响应实体类\",\"children\":[]},{\"level\":4,\"title\":\"Jwt令牌颁发\",\"slug\":\"jwt令牌颁发\",\"link\":\"#jwt令牌颁发\",\"children\":[]},{\"level\":4,\"title\":\"拦截校验\",\"slug\":\"拦截校验\",\"link\":\"#拦截校验\",\"children\":[]},{\"level\":4,\"title\":\"Jwt请求头校验\",\"slug\":\"jwt请求头校验\",\"link\":\"#jwt请求头校验\",\"children\":[]},{\"level\":4,\"title\":\"退出登录\",\"slug\":\"退出登录\",\"link\":\"#退出登录\",\"children\":[]},{\"level\":4,\"title\":\"数据库校验\",\"slug\":\"数据库校验\",\"link\":\"#数据库校验\",\"children\":[]},{\"level\":4,\"title\":\"Bean拷贝\",\"slug\":\"bean拷贝\",\"link\":\"#bean拷贝\",\"children\":[]}]}],\"git\":{\"createdTime\":1710639776000,\"updatedTime\":1710647764000,\"contributors\":[{\"name\":\"shenjianZ\",\"email\":\"shenjianZLT@gmail.com\",\"commits\":2}]},\"readingTime\":{\"minutes\":12.95,\"words\":1943},\"filePathRelative\":\"project/project-template/frontend.md\",\"localizedDate\":\"2024年3月16日\",\"excerpt\":\"<h4>后端</h4>\\n<p>创建Springboot项目<code>aisi-backend</code></p>\\n<p><strong>pom.xml</strong></p>\\n<div class=\\\"language-xml\\\" data-ext=\\\"xml\\\" data-title=\\\"xml\\\"><pre class=\\\"language-xml\\\"><code><span class=\\\"token prolog\\\">&lt;?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?&gt;</span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>project</span> <span class=\\\"token attr-name\\\">xmlns</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>http://maven.apache.org/POM/4.0.0<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\"><span class=\\\"token namespace\\\">xmlns:</span>xsi</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>http://www.w3.org/2001/XMLSchema-instance<span class=\\\"token punctuation\\\">\\\"</span></span>\\n         <span class=\\\"token attr-name\\\"><span class=\\\"token namespace\\\">xsi:</span>schemaLocation</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>modelVersion</span><span class=\\\"token punctuation\\\">&gt;</span></span>4.0.0<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>modelVersion</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>parent</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>groupId</span><span class=\\\"token punctuation\\\">&gt;</span></span>org.springframework.boot<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>groupId</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>artifactId</span><span class=\\\"token punctuation\\\">&gt;</span></span>spring-boot-starter-parent<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>artifactId</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>version</span><span class=\\\"token punctuation\\\">&gt;</span></span>3.1.2<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>version</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>relativePath</span><span class=\\\"token punctuation\\\">/&gt;</span></span> <span class=\\\"token comment\\\">&lt;!-- lookup parent from repository --&gt;</span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>parent</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>groupId</span><span class=\\\"token punctuation\\\">&gt;</span></span>com.aisi<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>groupId</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>artifactId</span><span class=\\\"token punctuation\\\">&gt;</span></span>aisi-backend<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>artifactId</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>version</span><span class=\\\"token punctuation\\\">&gt;</span></span>1.0.0<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>version</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>name</span><span class=\\\"token punctuation\\\">&gt;</span></span>aisi-backend<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>name</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>description</span><span class=\\\"token punctuation\\\">&gt;</span></span>aisi-backend<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>description</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>properties</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>java.version</span><span class=\\\"token punctuation\\\">&gt;</span></span>17<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>java.version</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>properties</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>dependencies</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>dependency</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n            <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>groupId</span><span class=\\\"token punctuation\\\">&gt;</span></span>com.auth0<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>groupId</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n            <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>artifactId</span><span class=\\\"token punctuation\\\">&gt;</span></span>java-jwt<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>artifactId</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n            <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>version</span><span class=\\\"token punctuation\\\">&gt;</span></span>4.1.0<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>version</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>dependency</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>dependency</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n            <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>groupId</span><span class=\\\"token punctuation\\\">&gt;</span></span>com.alibaba.fastjson2<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>groupId</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n            <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>artifactId</span><span class=\\\"token punctuation\\\">&gt;</span></span>fastjson2<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>artifactId</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n            <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>version</span><span class=\\\"token punctuation\\\">&gt;</span></span>2.0.23<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>version</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>dependency</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>dependency</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n            <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>groupId</span><span class=\\\"token punctuation\\\">&gt;</span></span>org.springframework.boot<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>groupId</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n            <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>artifactId</span><span class=\\\"token punctuation\\\">&gt;</span></span>spring-boot-starter-data-redis<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>artifactId</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>dependency</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>dependency</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n            <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>groupId</span><span class=\\\"token punctuation\\\">&gt;</span></span>org.springframework.boot<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>groupId</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n            <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>artifactId</span><span class=\\\"token punctuation\\\">&gt;</span></span>spring-boot-starter-security<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>artifactId</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>dependency</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>dependency</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n            <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>groupId</span><span class=\\\"token punctuation\\\">&gt;</span></span>org.springframework.boot<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>groupId</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n            <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>artifactId</span><span class=\\\"token punctuation\\\">&gt;</span></span>spring-boot-starter-web<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>artifactId</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>dependency</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n\\n        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>dependency</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n            <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>groupId</span><span class=\\\"token punctuation\\\">&gt;</span></span>com.mysql<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>groupId</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n            <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>artifactId</span><span class=\\\"token punctuation\\\">&gt;</span></span>mysql-connector-j<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>artifactId</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n            <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>scope</span><span class=\\\"token punctuation\\\">&gt;</span></span>runtime<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>scope</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>dependency</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>dependency</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n            <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>groupId</span><span class=\\\"token punctuation\\\">&gt;</span></span>org.projectlombok<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>groupId</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n            <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>artifactId</span><span class=\\\"token punctuation\\\">&gt;</span></span>lombok<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>artifactId</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n            <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>optional</span><span class=\\\"token punctuation\\\">&gt;</span></span>true<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>optional</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>dependency</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>dependency</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n            <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>groupId</span><span class=\\\"token punctuation\\\">&gt;</span></span>org.springframework.boot<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>groupId</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n            <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>artifactId</span><span class=\\\"token punctuation\\\">&gt;</span></span>spring-boot-starter-test<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>artifactId</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n            <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>scope</span><span class=\\\"token punctuation\\\">&gt;</span></span>test<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>scope</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>dependency</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>dependency</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n            <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>groupId</span><span class=\\\"token punctuation\\\">&gt;</span></span>org.springframework.security<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>groupId</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n            <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>artifactId</span><span class=\\\"token punctuation\\\">&gt;</span></span>spring-security-test<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>artifactId</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n            <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>scope</span><span class=\\\"token punctuation\\\">&gt;</span></span>test<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>scope</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>dependency</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>dependency</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n            <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>groupId</span><span class=\\\"token punctuation\\\">&gt;</span></span>com.baomidou<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>groupId</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n            <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>artifactId</span><span class=\\\"token punctuation\\\">&gt;</span></span>mybatis-plus-spring-boot3-starter<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>artifactId</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n            <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>version</span><span class=\\\"token punctuation\\\">&gt;</span></span>3.5.5<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>version</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>dependency</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>dependency</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n            <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>groupId</span><span class=\\\"token punctuation\\\">&gt;</span></span>org.springframework.boot<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>groupId</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n            <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>artifactId</span><span class=\\\"token punctuation\\\">&gt;</span></span>spring-boot-starter-mail<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>artifactId</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>dependency</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>dependency</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n            <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>groupId</span><span class=\\\"token punctuation\\\">&gt;</span></span>org.springframework.boot<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>groupId</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n            <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>artifactId</span><span class=\\\"token punctuation\\\">&gt;</span></span>spring-boot-starter-amqp<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>artifactId</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>dependency</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>dependency</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n            <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>groupId</span><span class=\\\"token punctuation\\\">&gt;</span></span>org.springframework.boot<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>groupId</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n            <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>artifactId</span><span class=\\\"token punctuation\\\">&gt;</span></span>spring-boot-starter-validation<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>artifactId</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>dependency</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n\\n\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>dependencies</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>build</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>plugins</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n            <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>plugin</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n                <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>groupId</span><span class=\\\"token punctuation\\\">&gt;</span></span>org.graalvm.buildtools<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>groupId</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n                <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>artifactId</span><span class=\\\"token punctuation\\\">&gt;</span></span>native-maven-plugin<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>artifactId</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n            <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>plugin</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n            <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>plugin</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n                <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>groupId</span><span class=\\\"token punctuation\\\">&gt;</span></span>org.springframework.boot<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>groupId</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n                <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>artifactId</span><span class=\\\"token punctuation\\\">&gt;</span></span>spring-boot-maven-plugin<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>artifactId</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n                <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>configuration</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n                    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>excludes</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n                        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>exclude</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n                            <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>groupId</span><span class=\\\"token punctuation\\\">&gt;</span></span>org.projectlombok<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>groupId</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n                            <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>artifactId</span><span class=\\\"token punctuation\\\">&gt;</span></span>lombok<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>artifactId</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n                        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>exclude</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n                    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>excludes</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n                <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>configuration</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n            <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>plugin</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>plugins</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>build</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>project</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n\\n</code></pre></div>\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
