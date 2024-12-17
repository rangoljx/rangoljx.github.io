---
comments: true
tags:
    - Mkdocs
    - markdown
icon: simple/materialformkdocs
description: 在Mkdocs中编写markdown
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
    \```py linenums="10"<br>
    def hello_world():<br>
        print("Hello, World!")<br>
    \```<br>
    效果如下：↓↓↓↓↓↓↓↓↓

```py linenums="10"
def hello_world():
    print("Hello, World!")
```

--------

使用行内注释

```py
def hello():
    print("Hello")  # (1)
    return True     # (2)
```

1. 打印问候信息
2. 返回成功状态

```py
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
-------------------------------
=== "左对齐"
    | Method      | Description                          |
    | :---------- | :----------------------------------- |
    | `GET`       | :material-check:     Fetch resource  |
    | `PUT`       | :material-check-all: Update resource |
    | `DELETE`    | :material-close:     Delete resource |
=== "居中"
    | Method      | Description                          |
    | :---------: | :----------------------------------: |
    | `GET`       | :material-check:     Fetch resource  |
    | `PUT`       | :material-check-all: Update resource |
    | `DELETE`    | :material-close:     Delete resource |
=== "右对齐"
    | Method      | Description                          |
    | ----------: | -----------------------------------: |
    | `GET`       | :material-check:     Fetch resource  |
    | `PUT`       | :material-check-all: Update resource |
    | `DELETE`    | :material-close:     Delete resource |

----------------------------

<div class="grid cards" markdown>

- :fontawesome-brands-html5: __HTML__ for content and structure
- :fontawesome-brands-js: __JavaScript__ for interactivity
- :fontawesome-brands-css3: __CSS__ for text running out of boxes
- :fontawesome-brands-internet-explorer: __Internet Explorer__ ... huh?

</div>

=== "卡片网格，复杂示例"
<div class="grid cards" markdown>

-   :material-clock-fast:{ .lg .middle } __Set up in 5 minutes__

    ---

    Install [`mkdocs-material`](#) with [`pip`](#) and get up
    and running in minutes

    [:octicons-arrow-right-24: Getting started](#)

-   :fontawesome-brands-markdown:{ .lg .middle } __It's just Markdown__

    ---

    Focus on your content and generate a responsive and searchable static site

    [:octicons-arrow-right-24: Reference](#)

-   :material-format-font:{ .lg .middle } __Made to measure__

    ---

    Change the colors, fonts, language, icons, logo and more with a few lines

    [:octicons-arrow-right-24: Customization](#)

-   :material-scale-balance:{ .lg .middle } __Open Source, MIT__

    ---

    Material for MkDocs is licensed under MIT and available on [GitHub]

    [:octicons-arrow-right-24: License](#)

</div>
--------------
<div class="grid" markdown>

:fontawesome-brands-html5: __HTML__ for content and structure
{ .card }

:fontawesome-brands-js: __JavaScript__ for interactivity
{ .card }

:fontawesome-brands-css3: __CSS__ for text running out of boxes
{ .card }

> :fontawesome-brands-internet-explorer: __Internet Explorer__ ... huh?

</div>
----------------
<div class="grid" markdown>

=== "Unordered list"

    * Sed sagittis eleifend rutrum
    * Donec vitae suscipit est
    * Nulla tempor lobortis orci

=== "Ordered list"

    1. Sed sagittis eleifend rutrum
    2. Donec vitae suscipit est
    3. Nulla tempor lobortis orci

``` title="Content tabs"
=== "Unordered list"

    * Sed sagittis eleifend rutrum
    * Donec vitae suscipit est
    * Nulla tempor lobortis orci

=== "Ordered list"

    1. Sed sagittis eleifend rutrum
    2. Donec vitae suscipit est
    3. Nulla tempor lobortis orci
```

</div>

----------------

=== "Using task lists"
    "When Tasklist is enabled, unordered list items can be prefixed with to render an unchecked checkbox or to render a checked checkbox, allowing for the definition of task lists:[ ][x]"
    "启用 Tasklist 后，可以以无序列表项为前缀，以呈现未选中的复选框或呈现已选中的复选框，从而允许定义任务列表：[ ][x]"


 - [x] Lorem ipsum dolor sit amet, consectetur adipiscing elit
 - [ ] Vestibulum convallis sit amet nisi a tincidunt
     * [x] In hac habitasse platea dictumst
     * [x] In scelerisque nibh non dolor mollis congue sed et metus
     * [ ] Praesent sed risus massa
 - [ ] Aenean pretium efficitur erat, donec pharetra, ligula non scelerisque

------

!!! tip "带有 tooltip 的图标"
    :material-information-outline:{ title="Important information" }

-----------

=== "带缩写的文本"
    The HTML specification is maintained by the W3C.

    *[HTML]: Hyper Text Markup Language
    *[W3C]: World Wide Web Consortium


