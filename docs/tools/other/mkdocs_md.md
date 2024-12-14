---
comments: true
tags:
    - Mkdocs
    - markdown
---

-----------------------
# <center>{==以下是关于在Mkdocs中编写markdown的一些实践==}
----------------------

!!! example
    this is a test example! <br>
    this is a test example! <br>
    this is a test example! <br>

!!! success
    this is a test example! <br>
    this is a test example! <br>
    this is a test example! <br>
---
??? example
    this is a test example! <br>
    this is a test example! <br>
    this is a test example! <br>

??? success
    this is a test example! <br>
    this is a test example! <br>
    this is a test example! <br>
---
???+ example
    this is a test example! <br>
    this is a test example! <br>
    this is a test example! <br>

???+ success
    this is a test example! <br>
    this is a test example! <br>
    this is a test example! <br>
---
???+ danger inline "Lorem ipsum"
    this is a test example! <br>
    this is a test example! <br>
    this is a test example! <br>

???+ success
    this is a test example! <br>
    this is a test example! <br>
    this is a test example! <br>
---
???+ danger inline end "Lorem ipsum"
    this is a test example! <br>
    this is a test example! <br>
    this is a test example! <br>

???+ success 
    this is a test example! <br>
    this is a test example! <br>
    this is a test example! <br>

???+ warning
    this is a test example! <br>
    this is a test example! <br>
    this is a test example! <br>
---










--------------------------

行内公式：$E = mc^2$

块级公式：
$$
\frac{n!}{k!(n-k)!} = \binom{n}{k}
$$

自定义宏：$\R$ 表示实数集


----------------------------------------------------

设置代码块起始行号:
!!! tip
    \```python linenums="10"<br>
    def hello_world():<br>
        print("Hello, World!")<br>
    \```<br>
    效果如下：↓↓↓↓↓↓↓↓↓

```python linenums="10"
def hello_world():
    print("Hello, World!")
```

--------

使用行内注释

```python
def hello():
    print("Hello")  # (1)
    return True     # (2)
```

1. 打印问候信息
2. 返回成功状态

```python
def process_data():
    # (1)!
    data = load_data()

    # (2)!
    result = transform(data)

    return result
```

1. 从数据源加载数据
   这里可以是多行
   注释说明

2. 对数据进行转换处理
   包含清洗和格式化











