---
title: mysql学习
date: 2024-03-16
category: MySQL
tag:
  - mysql
timeline: true
star: true
---
## MySQL Server 8安装和卸载

### MySQL Server 8安装

- [下载链接](https://flowus.cn/shenjian/share/0e4b0f73-080f-4e72-95ae-8d978a49ac6c?code=AEM6VL)

- 需要指定  安装目录、数据存储目录

**mysql启动**

```bash
net start MySQL80
```

**mysql停止**

```bash
net stop MySQL80
```

### MySQL Server 8卸载

- 删除 `MySQL80`这个软件
- 删除`MySQL`的 安装目录、数据存储目录0
- 删除注册表，在运行框 输入 `regedit`，将 `HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Services\MySQL80`这个`MySQL80`目录删除

## SQL语言

### DDL数据定义语言

#### **`数据库`相关命令**

创建数据库

```mysql
CREATE DATABASE IF NOT EXISTS database_name CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
```

修改数据库

```mysql
ALTER DATABASE database_name CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
```

删除数据库

```mysql
DROP DATABASE IF EXISTS database_name;
```

选中数据库

```mysql
USE database_name;
```

查看数据库语句

```mysql
SHOW CREATE DATABASE database_name;
```



#### **`数据表`相关命令**

**创建表**

```mysql
USE 数据库名;
CREATE TABLE table_name (
    column1 datatype constraints,
    column2 datatype constraints,
    ...
    columnN datatype constraints
    PRIMARY KEY (column1)
    UNIQUE (column1)
    FOREIGN KEY (column1) REFERENCES other_table(other_column)
    CHECK (column1 > 0)
) ENGINE=storage_engine CHARACTER SET charset_name COLLATE collation_name;
```

其中：

- `constraints` 列级约束，如 `PRIMARY KEY`, `NOT NULL`, `UNIQUE`, `DEFAULT` 等
- `PRIMARY KEY (column1)
  UNIQUE (column1)
  FOREIGN KEY (column1) REFERENCES other_table(other_column)
  CHECK (column1 > 0)`
  表级约束
- `ENGINE` 指定表的存储引擎
- `CHARACTER SET` 指定表的字符集
- `COLLATE` 指定表的校对规则

**查询所有表列表**

```mysql
SHOW TABLES;
```

**查看表结构**

```mysql
DESC 表名称;
```

**修改表**

```mysql
ALTER TABLE table_name RENAME TO new_table_name;
ALTER TABLE table_name CHARACTER SET utf8mb4;
ALTER TABLE table_name ADD columnName datatype;
ALTER TABLE table_name CHANGE oldColumnName newColumnName datatype;
ALTER TABLE table_name Modify columnName datatype;
ALTER TABLE table_name DROP columnName;
```

**删除表**

```mysql
DROP TABLE IF EXISTS 表名称;
```

#### 数据类型

1. **整数类型**：
    - `INT`：整数类型，通常用于存储整数值。
    - `BIGINT`：大整数类型，用于存储大范围的整数值。
    - `SMALLINT`：小整数类型，用于存储较小范围的整数值。
    - `TINYINT`：极小整数类型，用于存储较小范围的整数值。
2. **小数类型**：
    - `DECIMAL(p, s)`：精确的小数类型，用于存储固定精度的小数值，`p` 是总位数，`s` 是小数位数。
    - `FLOAT`：单精度浮点数类型。
    - `DOUBLE`：双精度浮点数类型。
3. **字符串类型**：
    - `CHAR(n)`：固定长度的字符串类型，最多可以存储 `n` 个字符。
    - `VARCHAR(n)`：可变长度的字符串类型，最多可以存储 `n` 个字符。
    - `TEXT`：用于存储大量文本数据的字符串类型。
4. **日期和时间类型**：
    - `DATE`：日期类型，格式为 'YYYY-MM-DD'。
    - `TIME`：时间类型，格式为 'HH:MM:SS'。
    - `DATETIME`：日期时间类型，包含日期和时间，格式为 'YYYY-MM-DD HH:MM:SS'。
    - `TIMESTAMP`：时间戳类型，通常用于存储记录的创建或修改时间。
5. **其他类型**：
    - `ENUM`：枚举类型，用于定义一个值列表，列中的值必须是列表中的一个。
    - `SET`：集合类型，与 ENUM 类似，但允许列中包含多个值。

以上是常见的数据类型，不同的数据库系统可能支持不同的数据类型，也可能有特定的数据类型扩展。在创建表时，可以根据具体需求选择适合的数据类型。

#### 字段约束

```mysql
PRIMARY KEY #主键约束
UNIQUE      #唯一约束
NOT NULL|NULL #非空值、空值约束
FOREIGN KEY (column1) REFERENCES other_table(other_column) #外键约束
CHECK       #检查约束
AUTO_INCREMENT #主键自增长
```

主键约束可以使用联合主键，在列级约束中，`PRIMARY KEY(col1,col2,...coln)`

### DML数据操纵语言

插入记录

```mysql
INSERT INTO table_name(colName1,colName2,...) VALUES (value1,value2,...);
```

删除记录

```mysql
DELETE FROM table_name WHERE conditions;
```

`conditions`可使用`and`、`or`连接

修改记录

```mysql
UPDATE table_name SET colName1='newvalue',colName2='newvalue' WHERE conditions; 
```

`conditions`可使用`and`、`or`连接

### DQL数据查询语言

