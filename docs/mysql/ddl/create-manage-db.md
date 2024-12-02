---
tags:
    - MySQL
    - DDL
---


# 1. 引言

数据定义语言（DDL）是用于定义、修改和删除数据库中数据结构的SQL语句。本文将介绍如何使用DDL语句创建和管理数据库。

# 2. 创建数据库

## 2.1 创建新数据库

要创建一个新的数据库，可以使用`CREATE DATABASE`语句。例如：

```sql
CREATE DATABASE my_database;
```

## 2.2 查看数据库

可以使用以下命令查看所有数据库：

```sql
SHOW DATABASES;
```

## 2.3 选择数据库

在创建表之前，需要选择数据库：

```sql
USE my_database;
```

# 3. 创建表

## 3.1 基本表结构

使用CREATE TABLE语句创建表。例如，创建一个名为users的表：

```sql
CREATE TABLE users (
    user_id INT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 3.2 查看表结构

可以使用DESCRIBE语句查看表结构：
```sql
DESCRIBE users;
```

# 4. 修改表

## 4.1 添加列

使用ALTER TABLE ... ADD COLUMN语句添加新列。例如，添加一列age：

```sql
ALTER TABLE users ADD COLUMN age INT;
```

## 4.2 修改列

使用ALTER TABLE ... MODIFY COLUMN语句修改列的属性。例如，修改age列使其不能为NULL：

```sql
ALTER TABLE users MODIFY COLUMN age INT NOT NULL;
```

## 4.3 删除列

使用ALTER TABLE ... DROP COLUMN语句删除列。例如，删除age列：
sql复制ALTER TABLE users DROP COLUMN age;

## 4.4 重命名表

使用ALTER TABLE ... RENAME TO语句重命名表。例如，将users表重命名为customers：

```sql
ALTER TABLE users RENAME TO customers;
```

# 5. 删除表与数据库

## 5.1 删除表

使用DROP TABLE语句删除表。例如，删除customers表：

```sql
DROP TABLE customers;
```

## 5.2 删除数据库

使用DROP DATABASE语句删除数据库。例如，删除my_database数据库：

```sql
DROP DATABASE my_database;
```

# 6. 总结

本文介绍了如何使用DDL语句创建和管理数据库，包括创建数据库和表、修改表结构以及删除表和数据库。DDL是数据库管理的基础，理解这些操作对于数据库设计和维护至关重要。


