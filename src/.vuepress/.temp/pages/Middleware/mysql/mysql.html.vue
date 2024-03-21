<template><div><h2 id="mysql-server-8安装和卸载" tabindex="-1"><a class="header-anchor" href="#mysql-server-8安装和卸载"><span>MySQL Server 8安装和卸载</span></a></h2>
<h3 id="mysql-server-8安装" tabindex="-1"><a class="header-anchor" href="#mysql-server-8安装"><span>MySQL Server 8安装</span></a></h3>
<ul>
<li>
<p><a href="https://flowus.cn/shenjian/share/0e4b0f73-080f-4e72-95ae-8d978a49ac6c?code=AEM6VL" target="_blank" rel="noopener noreferrer">下载链接<ExternalLinkIcon/></a></p>
</li>
<li>
<p>需要指定  安装目录、数据存储目录</p>
</li>
</ul>
<p><strong>mysql启动</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>net start MySQL80
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>mysql停止</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>net stop MySQL80
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="mysql-server-8卸载" tabindex="-1"><a class="header-anchor" href="#mysql-server-8卸载"><span>MySQL Server 8卸载</span></a></h3>
<ul>
<li>删除 <code v-pre>MySQL80</code>这个软件</li>
<li>删除<code v-pre>MySQL</code>的 安装目录、数据存储目录0</li>
<li>删除注册表，在运行框 输入 <code v-pre>regedit</code>，将 <code v-pre>HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Services\MySQL80</code>这个<code v-pre>MySQL80</code>目录删除</li>
</ul>
<h2 id="sql语言" tabindex="-1"><a class="header-anchor" href="#sql语言"><span>SQL语言</span></a></h2>
<h3 id="ddl数据定义语言" tabindex="-1"><a class="header-anchor" href="#ddl数据定义语言"><span>DDL数据定义语言</span></a></h3>
<h4 id="数据库相关命令" tabindex="-1"><a class="header-anchor" href="#数据库相关命令"><span><strong><code v-pre>数据库</code>相关命令</strong></span></a></h4>
<p>创建数据库</p>
<div class="language-mysql line-numbers-mode" data-ext="mysql" data-title="mysql"><pre v-pre class="language-mysql"><code>CREATE DATABASE IF NOT EXISTS database_name CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改数据库</p>
<div class="language-mysql line-numbers-mode" data-ext="mysql" data-title="mysql"><pre v-pre class="language-mysql"><code>ALTER DATABASE database_name CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除数据库</p>
<div class="language-mysql line-numbers-mode" data-ext="mysql" data-title="mysql"><pre v-pre class="language-mysql"><code>DROP DATABASE IF EXISTS database_name;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>选中数据库</p>
<div class="language-mysql line-numbers-mode" data-ext="mysql" data-title="mysql"><pre v-pre class="language-mysql"><code>USE database_name;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看数据库语句</p>
<div class="language-mysql line-numbers-mode" data-ext="mysql" data-title="mysql"><pre v-pre class="language-mysql"><code>SHOW CREATE DATABASE database_name;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="数据表相关命令" tabindex="-1"><a class="header-anchor" href="#数据表相关命令"><span><strong><code v-pre>数据表</code>相关命令</strong></span></a></h4>
<p><strong>创建表</strong></p>
<div class="language-mysql line-numbers-mode" data-ext="mysql" data-title="mysql"><pre v-pre class="language-mysql"><code>USE 数据库名;
CREATE TABLE table_name (
    column1 datatype constraints,
    column2 datatype constraints,
    ...
    columnN datatype constraints
    PRIMARY KEY (column1)
    UNIQUE (column1)
    FOREIGN KEY (column1) REFERENCES other_table(other_column)
    CHECK (column1 &gt; 0)
) ENGINE=storage_engine CHARACTER SET charset_name COLLATE collation_name;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中：</p>
<ul>
<li><code v-pre>constraints</code> 列级约束，如 <code v-pre>PRIMARY KEY</code>, <code v-pre>NOT NULL</code>, <code v-pre>UNIQUE</code>, <code v-pre>DEFAULT</code> 等</li>
<li><code v-pre>PRIMARY KEY (column1) UNIQUE (column1) FOREIGN KEY (column1) REFERENCES other_table(other_column) CHECK (column1 &gt; 0)</code>
表级约束</li>
<li><code v-pre>ENGINE</code> 指定表的存储引擎</li>
<li><code v-pre>CHARACTER SET</code> 指定表的字符集</li>
<li><code v-pre>COLLATE</code> 指定表的校对规则</li>
</ul>
<p><strong>查询所有表列表</strong></p>
<div class="language-mysql line-numbers-mode" data-ext="mysql" data-title="mysql"><pre v-pre class="language-mysql"><code>SHOW TABLES;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>查看表结构</strong></p>
<div class="language-mysql line-numbers-mode" data-ext="mysql" data-title="mysql"><pre v-pre class="language-mysql"><code>DESC 表名称;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>修改表</strong></p>
<div class="language-mysql line-numbers-mode" data-ext="mysql" data-title="mysql"><pre v-pre class="language-mysql"><code>ALTER TABLE table_name RENAME TO new_table_name;
ALTER TABLE table_name CHARACTER SET utf8mb4;
ALTER TABLE table_name ADD columnName datatype;
ALTER TABLE table_name CHANGE oldColumnName newColumnName datatype;
ALTER TABLE table_name Modify columnName datatype;
ALTER TABLE table_name DROP columnName;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>删除表</strong></p>
<div class="language-mysql line-numbers-mode" data-ext="mysql" data-title="mysql"><pre v-pre class="language-mysql"><code>DROP TABLE IF EXISTS 表名称;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型"><span>数据类型</span></a></h4>
<ol>
<li><strong>整数类型</strong>：
<ul>
<li><code v-pre>INT</code>：整数类型，通常用于存储整数值。</li>
<li><code v-pre>BIGINT</code>：大整数类型，用于存储大范围的整数值。</li>
<li><code v-pre>SMALLINT</code>：小整数类型，用于存储较小范围的整数值。</li>
<li><code v-pre>TINYINT</code>：极小整数类型，用于存储较小范围的整数值。</li>
</ul>
</li>
<li><strong>小数类型</strong>：
<ul>
<li><code v-pre>DECIMAL(p, s)</code>：精确的小数类型，用于存储固定精度的小数值，<code v-pre>p</code> 是总位数，<code v-pre>s</code> 是小数位数。</li>
<li><code v-pre>FLOAT</code>：单精度浮点数类型。</li>
<li><code v-pre>DOUBLE</code>：双精度浮点数类型。</li>
</ul>
</li>
<li><strong>字符串类型</strong>：
<ul>
<li><code v-pre>CHAR(n)</code>：固定长度的字符串类型，最多可以存储 <code v-pre>n</code> 个字符。</li>
<li><code v-pre>VARCHAR(n)</code>：可变长度的字符串类型，最多可以存储 <code v-pre>n</code> 个字符。</li>
<li><code v-pre>TEXT</code>：用于存储大量文本数据的字符串类型。</li>
</ul>
</li>
<li><strong>日期和时间类型</strong>：
<ul>
<li><code v-pre>DATE</code>：日期类型，格式为 'YYYY-MM-DD'。</li>
<li><code v-pre>TIME</code>：时间类型，格式为 'HH:MM:SS'。</li>
<li><code v-pre>DATETIME</code>：日期时间类型，包含日期和时间，格式为 'YYYY-MM-DD HH:MM:SS'。</li>
<li><code v-pre>TIMESTAMP</code>：时间戳类型，通常用于存储记录的创建或修改时间。</li>
</ul>
</li>
<li><strong>其他类型</strong>：
<ul>
<li><code v-pre>ENUM</code>：枚举类型，用于定义一个值列表，列中的值必须是列表中的一个。</li>
<li><code v-pre>SET</code>：集合类型，与 ENUM 类似，但允许列中包含多个值。</li>
</ul>
</li>
</ol>
<p>以上是常见的数据类型，不同的数据库系统可能支持不同的数据类型，也可能有特定的数据类型扩展。在创建表时，可以根据具体需求选择适合的数据类型。</p>
<h4 id="字段约束" tabindex="-1"><a class="header-anchor" href="#字段约束"><span>字段约束</span></a></h4>
<div class="language-mysql line-numbers-mode" data-ext="mysql" data-title="mysql"><pre v-pre class="language-mysql"><code>PRIMARY KEY #主键约束
UNIQUE      #唯一约束
NOT NULL|NULL #非空值、空值约束
FOREIGN KEY (column1) REFERENCES other_table(other_column) #外键约束
CHECK       #检查约束
AUTO_INCREMENT #主键自增长
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>主键约束可以使用联合主键，在列级约束中，<code v-pre>PRIMARY KEY(col1,col2,...coln)</code></p>
<h3 id="dml数据操纵语言" tabindex="-1"><a class="header-anchor" href="#dml数据操纵语言"><span>DML数据操纵语言</span></a></h3>
<p>插入记录</p>
<div class="language-mysql line-numbers-mode" data-ext="mysql" data-title="mysql"><pre v-pre class="language-mysql"><code>INSERT INTO table_name(colName1,colName2,...) VALUES (value1,value2,...);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除记录</p>
<div class="language-mysql line-numbers-mode" data-ext="mysql" data-title="mysql"><pre v-pre class="language-mysql"><code>DELETE FROM table_name WHERE conditions;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>conditions</code>可使用<code v-pre>and</code>、<code v-pre>or</code>连接</p>
<p>修改记录</p>
<div class="language-mysql line-numbers-mode" data-ext="mysql" data-title="mysql"><pre v-pre class="language-mysql"><code>UPDATE table_name SET colName1='newvalue',colName2='newvalue' WHERE conditions; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>conditions</code>可使用<code v-pre>and</code>、<code v-pre>or</code>连接</p>
<h3 id="dql数据查询语言" tabindex="-1"><a class="header-anchor" href="#dql数据查询语言"><span>DQL数据查询语言</span></a></h3>
</div></template>


