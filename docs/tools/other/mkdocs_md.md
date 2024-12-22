---
comments: true
tags:
    - Mkdocs
    - markdown
icon: simple/materialformkdocs
description: 在MkDocs中编写Markdown的技巧，Markdown文档使用技巧，在MkDocs中MD文档使用技巧
---

# 在MkDocs中编写Markdown的技巧（自建中文手册）

!!! info  ""
    :material-read: __查看__ <span id="busuanzi_value_page_pv"></span> __次__

## 参考

以下是一些在 MkDocs 中编写 Markdown 的技巧，参考自 [MkDocs 官方文档](https://squidfunk.github.io/mkdocs-material/reference/)及其子页面：

### 代码块

使用三个反引号来创建代码块：

```markdown
\```python
print("Hello, World!")
\```
```

### 表格

使用管道符号来创建表格：

```markdown
| 头1 | 头2 |
| --- | --- |
| 单元格1 | 单元格2 |
```

### 脚注

使用 `[^1]` 来创建脚注：

```markdown
这是一个脚注示例[^1]。

[^1]: 这是脚注内容。
```

### 警告框

使用 `!!!` 来创建警告框：

```markdown
!!! note
    这是一个笔记。
```

### 任务列表

使用 `- [ ]` 和 `- [x]` 来创建任务列表：

```markdown
- [ ] 待办事项1
- [x] 已完成事项1
```

### 数学公式

使用 `$$` 来创建数学公式：

```markdown
$$
E = mc^2
$$
```

### Mermaid 图表

使用 `mermaid` 关键字来创建 Mermaid 图表：

```markdown
```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

### 目录

使用 `toc` 关键字来创建目录：

```markdown
[toc]
```

### 引用

使用 `>` 来创建引用：

```markdown
> 这是一个引用。
```

### 链接

使用 `[文本](链接)` 来创建链接：

```markdown
[MkDocs](https://www.mkdocs.org)
```

### 图片

使用 `![alt 文本](图片链接)` 来插入图片：

```markdown
![MkDocs Logo](https://www.mkdocs.org/img/logo.png)
```

### 粗体和斜体

使用 `**` 或 `__` 来创建粗体，使用 `*` 或 `_` 来创建斜体：

```markdown
**这是粗体**
*这是斜体*
```

### 删除线

使用 `~~` 来创建删除线：

```markdown
~~这是删除线~~
```

### 分隔线

使用 `---` 来创建分隔线：

```markdown
---
```

### 内联代码

使用 `` ` `` 来创建内联代码：

```markdown
这是 `内联代码` 示例。
```

### 代码高亮

使用 `highlight` 关键字来高亮代码：

```markdown
```highlight
print("Hello, World!")
```

### 代码折叠

使用 `collapse` 关键字来折叠代码：

```markdown
```collapse
print("Hello, World!")
```

### 代码行号

使用 `linenums` 关键字来显示代码行号：

```markdown
```linenums
print("Hello, World!")
```

### 代码标题

使用 `title` 关键字来添加代码标题：

```markdown
```title="example.py"
print("Hello, World!")
```

### 代码副本按钮

使用 `copy` 关键字来添加代码副本按钮：

```markdown
```copy
print("Hello, World!")
```

### 代码下载按钮

使用 `download` 关键字来添加代码下载按钮：

```markdown
```download
print("Hello, World!")
```

### 代码注释

使用 `comment` 关键字来添加代码注释：

```markdown
```comment
# 这是一个注释
print("Hello, World!")
```

### 代码标签

使用 `tags` 关键字来添加代码标签：

```markdown
```tags
print("Hello, World!")
```

### 代码语言

使用 `language` 关键字来指定代码语言：

```markdown
```language="python"
print("Hello, World!")
```

### 代码主题

使用 `theme` 关键字来指定代码主题：

```markdown
```theme="dark"
print("Hello, World!")
```

### 代码样式

使用 `style` 关键字来指定代码样式：

```markdown
```style="monokai"
print("Hello, World!")
```

### 代码块内嵌

使用 `embed` 关键字来内嵌代码块：

```markdown
```embed
print("Hello, World!")
```

### 代码块折叠

使用 `fold` 关键字来折叠代码块：

```markdown
```fold
print("Hello, World!")
```

### 代码块行号

使用 `number` 关键字来显示代码块行号：

```markdown
```number
print("Hello, World!")
```

### 代码块标题

使用 `header` 关键字来添加代码块标题：

```markdown
```header="example.py"
print("Hello, World!")
```

### 代码块副本按钮

使用 `duplicate` 关键字来添加代码块副本按钮：

```markdown
```duplicate
print("Hello, World!")
```

### 代码块下载按钮

使用 `save` 关键字来添加代码块下载按钮：

```markdown
```save
print("Hello, World!")
```

### 代码块注释

使用 `remark` 关键字来添加代码块注释：

```markdown
```remark
# 这是一个注释
print("Hello, World!")
```

### 代码块标签

使用 `label` 关键字来添加代码块标签：

```markdown
```label
print("Hello, World!")
```

### 代码块语言

使用 `syntax` 关键字来指定代码块语言：

```markdown
```syntax="python"
print("Hello, World!")
```

### 代码块主题

使用 `scheme` 关键字来指定代码块主题：

```markdown
```scheme="dark"
print("Hello, World!")
```

### 代码块样式

使用 `format` 关键字来指定代码块样式：

```markdown
```format="monokai"
print("Hello, World!")
```

## 更多信息

有关更多信息和高级用法，请参阅 [MkDocs 官方文档](https://squidfunk.github.io/mkdocs-material/reference/)

