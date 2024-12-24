---
comments: true  #默认不开启评论
# date:
#     created: 2024-12-12
# # draft: true
# categories:
#   - mkdocs
hide:
  - tags
icon: material/library-outline
status: final
tags:
    - Mkdocs-Material
    - GitHub Pages
    - GitHub Actions
title: 基于mkdocs-material搭建个人博客
description: 使用 Mkdocs 和 mkdocs-material 主题搭建和部署个人博客，基于 GitHub Pages/GitHub Actions。Mkdocs添加评论系统。Mkdocs配置。
# 不显示页面统计
# nostatistics: true
# 强制显示其他贡献者
# contributors: byrnereese,grokify
---

# Mkdocs搭建总结（基于mkdocs-material主题）

!!! info  ""
    :material-read: __查看__ <span id="busuanzi_value_page_pv"></span> __次__

---

## 1.摘要

!!! abstract ":simple-abstract:__Abstract__"

    > :simple-abstract:__Mkdocs__ 是一个快速、简单且美观的静态网站生成器，特别适用于创建项目文档。
    > 本文详细介绍了如何使用 Mkdocs 和 mkdocs-material 主题搭建和部署个人博客，涵盖了从工具准备、快速搭建、配置自定义功能到自动集成部署的全过程，并提供了相关配置文件和示例代码。
    > __强烈建议查看mkdocs-material官方文档__

!!! danger ""

    === "**参考连接:**" 

        - [mkdocs-statistics-plugin插件](https://github.com/TonyCrane/mkdocs-statistics-plugin?tab=readme-ov-file){target="_blank"}
        - [mkdocs—material-超全配置](https://wncfht.github.io/notes/Tools/Blog/Mkdocs_Material/ "mkdocs material 超全配置"){target="_blank"}
        - [GitHub Pages部署mkdocs](https://www.cnblogs.com/E-Dreamer-Blogs/p/13323385.html "GitHub Pages部署mkdocs"){target="_blank"}

    === "**官方文档:**"

        - For full documentation visit [mkdocs.org](https://www.mkdocs.org){target="_blank"}  
        - For full documentation visit [mkdocs-material.org](https://squidfunk.github.io/mkdocs-material/getting-started/){target="_blank"}  

### 目前的完成成果

???+ success ":fontawesome-solid-diagram-successor:"

    - [x] 从本地到GitHub的自动构建/部署
    - [x] 加入Bing搜索引擎
    - [x] Material for MkDocs的配置实现：
        - 导航栏的配置
        - 边框及其目录的配置
        - tags标签的配置
        - 搜索、主题变换、语言、图标的功能
        - GitHub仓库的配置
        - 基于giscus评论系统
        - 社交卡片、页面统计功能
---

## 2.基本知识

=== "使用Mkdocs搭建个人博客，你需要了解、掌握："
    - 前端的基本知识、JavaScript（高级进阶）
    - Markdown文档的编写技巧
    - Git版本控制
    - GitHub的仓库搭建和管理，GitHub Pages的构建和（自动）部署等
    - python基础及其相关IDE的使用
    - Mkdocs 的基本概念和工作原理

---

## 3.工具准备

- python3.x
- git
- vscode
- 安装Mkdocs及其相关插件(这里已经准备好): 

```text title="requirements.txt"
mkdocs
mkdocs-material
mkdocs-static-i18n
# mkdocs-tags-plugin
mkdocs-glightbox
mkdocs-rss-plugin
mkdocs-minify-plugin
mkdocs_statistics_plugin
mkdocs-git-revision-date-localized-plugin
mkdocs-git-committers-plugin-2
# mkdocs-git-authors-plugin
# mkdocs-glightbox
```

```py title="安装命令："
pip install -r requirements.txt
```

## 4.快速搭建

=== "1.创建一个新的 MkDocs 项目："

    ```bash
    # 若想更改项目名，主文件夹改名后重新运行该命令即可`mkdocs new xxx`
    mkdocs new my-project 
    cd my-project
    ```

=== "2.编辑 `mkdocs.yml` 配置文件，设置站点名称和主题："

    ```yaml
    site_name: 我的博客
    theme:
      name: material
    ```

=== "3.在 `docs` 目录中创建 Markdown 文件来编写文档。例如，创建一个 `index.md` 文件作为主页："

    ```markdown
    # 欢迎来到我的博客

    这是我的博客的主页。
    ```

=== "4.运行本地开发服务器以预览文档："

    ```bash
    mkdocs serve
    ```

=== "5.构建静态站点："

    ```bash
    mkdocs build
    ```

=== "6. 部署到 GitHub Pages："

    ```bash
    mkdocs gh-deploy
    ```

## 5.完善Material for MkDocs配置及其自定义

给出的配置文件基本都有注释说明，这里不再赘述。可根据需要添加修改，配置文件在仓库可自取.

### 完整的 `mkdocs.yml` 配置文件示例

可在项目仓库中获取：[mkdocs.yml :fontawesome-solid-paper-plane:](https://github.com/rangoljx/rangoljx.github.io/blob/master/mkdocs.yml){ target="_blank" }

???+ example "mkdocs.yml"

    ```yaml hl_lines="10 42"
    site_name: Rango's Notes  # 网站名称
    site_url: https://rangoljx.github.io/   # 网站地址
    site_author: Rango              # 网站作者
    site_description: Rango's Notes       # 网站描述
    # 代码仓库信息
    repo_name: rango # 仓库名称
    repo_url: https://github.com/rangoljx/rangoljx.github.io/ # 仓库地址
    theme:
      name: material        # 主题名称
      custom_dir: docs/overrides          # 自定义目录,用于存放自定义的css、js等文件
      # custom_dir: ./overrides
      language: zh # 默认语言
      keyboard: #配置搜索快捷键
        search: s, /

      favicon: images/mkdocs_favicon.png              # 网站图标
      palette:    # 调色板，用于配置主题的颜色（暗黑模式切换）
        # 可用的主题色：
        # red, pink, purple, deep purple, indigo, blue, light blue, 
        # cyan, teal, green, light green, lime, yellow, amber, 
        # orange, deep orange, brown, grey, blue grey
        # # Palette toggle for automatic mode
        # - media: "(prefers-color-scheme)"
        #   toggle:
        #     icon: material/brightness-auto
        #     name: Switch to light mode
        - scheme: default # 日间模式
          primary: white # # 主色调
          accent: red # 链接等可交互元件的高亮色# 强调色
          toggle:
            icon: material/weather-night # 图标
            name: 切换至夜间模式 # 鼠标悬浮提示
        - scheme: slate # 夜间模式
          primary: black 
          accent: pink
          toggle:
            icon: material/weather-sunny
      font:     # 字体设置
        text: Roboto      # 主要文本字体
        code: Roboto Mono     # 代码字体                
      icon: # 一些用到的icon   material/washing-machine-alert
        repo: customsvg/site-author # 修改网站作者仓库图标
        edit: material/pencil-box-multiple  # 修改编辑图标
        view: material/eye    # 修改查看图标
        logo: simple/testcafe      # 网站logo  
        previous: fontawesome/solid/angle-left  # 上一页图标
        next: fontawesome/solid/angle-right     # 下一页icon
        admonition: # 告警图标,可自定义
          note: octicons/tag-16
          abstract: octicons/checklist-16
          info: octicons/info-16
          tip: octicons/squirrel-16
          success: octicons/check-16
          question: octicons/question-16
          warning: octicons/alert-16
          failure: octicons/x-circle-16
          danger: octicons/zap-16
          bug: octicons/bug-16
          example: octicons/beaker-16
          quote: octicons/quote-16
      features: # 配置主题特性
      # - navigation.instant #- header.autohide  #自动隐藏
      - navigation.instant.progress #进度指示器
      - navigation.instant.preview #全局自动预览
      - navigation.tabs #顶级部分将呈现在上面视口标题下方的菜单层中，但在移动设备上保持原样
      # - navigation.tabs.sticky #启用粘性选项卡后，导航选项卡将锁定在标题下方，并在向下滚动时始终保持可见
      - navigation.sections
      - navigation.top   # 返回顶部的按钮 在上滑时出现
      - navigation.indexs #使用目录索引
      - navigation.footer  # 启用页脚
      - navigation.tracking #锚点跟踪,地址栏中的 URL 会自动更新为活动锚点，如目录中突出显示的那样。
      # - toc.integrate      # 集成目录于左边
      - navigation.expand #打开默认展开子菜单

      # 搜索主题配置
      - search.suggest # 启用搜索建议
      - search.highlight # 搜索出的文章关键词加入高亮
      - search.share   #搜索分享按钮

      - content.code.annotate # 启用代码注释
      - content.code.copy    # 启用代码复制
      - content.action.edit  # 页面编辑图标
      - content.action.view  # 页面查看图标
      - content.tabs.link   #链接内容选项卡
      - content.tooltips    #改进的工具提示
      - toc.follow    #启用目录的锚点关注后，侧边栏会自动滚动，以便活动锚点始终可见

    plugins:
      - search: #默认插件
          # 搜索索引设置  
          lang: 
            - en
            - zh
          separator: '[\s\-\.]+' # 分词分隔符
          # jieba_dict: dict.txt.small

      - i18n: # 多语言插件
          docs_structure: suffix    #
          fallback_to_default: true # 抄来的，不太懂
          reconfigure_material: true # 抄来的，不太懂
          reconfigure_search: true # 抄来的，不太懂
          languages: # 多语言配置 - 需要小心一点
            - locale: en
              name: English
              build: true # 是否构建
            - locale: zh
              default: true # 默认语言
              name: 简体中文
              build: true
              nav_translations: # 导航栏翻译，不可以有缩进
                HOME: 首页
                Blog: 博客
                ABOUT: 关于
                TAGS: 标签
                Network communication: 网络通信
                Tools & Software Related (Q&A): 工具&软件相关(Q&A)
                Software testing: 软件测试
                Message board: 留言板

      # 统计分析
      - statistics:
          page_statistics: true # 是否在单页中显示统计信息
          page_read_time: true # 是否显示单页预计阅读时间
          page_images: true # 是否显示单页图片张数
          page_check_metadata: # 如果为空，则所有页面都显示；否则包含指定 metadata 才显示单页统计信息
          # 全局统计信息
          # pages_placeholder: \{\{\s*pages\s*\}\} # 页面数占位符
          # words_placeholder: \{\{\s*words\s*\}\} # 字数占位符
          # images_placeholder: \{\{\s*codes\s*\}\} # 图片数占位符

      # 图片预览插件pip install mkdocs-glightbox
      - glightbox:
          # 基础设置
          auto_caption: true              # 自动添加标题
          caption_position: bottom        # 标题位置
          # display_description: true       # 显示描述
          # 触摸设置
          touchNavigation: true          # 触摸导航
          loop: true                    # 循环浏览
          effect: zoom                  # 过渡效果
          # 图片设置
          width: 100%                   # 图片宽度
          height: auto                  # 图片高度
          zoomable: true               # 启用缩放
          draggable: true              # 启用拖动

      # 在底部添加上次更新和创建文档的日期的支持(pip install mkdocs-git-revision-date-localized-plugin)
      - git-revision-date-localized:  # 本地化日期
          enable_creation_date: true  # 启用创建日期
          fallback_to_build_date: true  # 回退到构建日期
          # date datetime iso_date iso_datetime timeago
          type: date  # 日期格式
          exclude:    # 排除不需要显示的页面
            - index.md
            - tags.md
            - about.md
            - message-board.md
      # -----pip install mkdocs-git-committers-plugin-2
      #   替代git-authors,自动获取仓库信息 显示头像
      - git-committers:
          repository: rangoljx/rangoljx.github.io # 仓库地址
          branch: master                # 分支    
          # show_line_count: true
          exclude:  # 排除不需要显示的页面
            - index.md
            - tags.md
            - about.md
            - message-board.md
      # ---------pip install mkdocs-git-authors-plugin
      # - git-authors:
      #     show_contribution: true
      #     show_line_count: true
      #     exclude:
      #       - index.md

      
      # 标签系统pip install mkdocs-tags-plugin
      - tags:
          tags_file: tags.md #标签文件

    hooks:  # 钩子
      - hooks/socialmedia.py      # 社交媒体

    # 导航设置
    nav: 
      - HOME: index.md
      - Material for MkDocs:
        - Mkdocs搭建总结: mkdocsbuild/build_mkdocs.md
      - Python:
        - Selenium: python-doc/selenium.md
      - Message board: message-board.md
      - TAGS: tags.md
      - ABOUT: about.md

    copyright: Copyright &copy; 2024 Rango   #  自定义版权信息

    extra: 
      # generator: false  #删除页脚显示“使用 MkDocs 材料制造”
      status: # 用于标记文档的状态,需要在md文档的元数据中添加status字段
        new: new  #新创建的文档
        Recently: Recently  #最近更新的文档
        added: added #新添加的内容
        deprecated: deprecated #弃用的内容
        updated: updated #更新的内容
        in-progress: in-progress #进行中的内容
        draft: draft  #草稿状态的内容
        review: review #正在审核中的内容
        final: final #最终版本的内容
      cdn:
        # 使用国内 CDN
        enable: true
        provider: jsdelivr  # 或 unpkg, cdnjs
        urls:
          katex: https://cdn.jsdelivr.net/npm/katex@0.16.7/dist/katex.min.js
          mermaid: https://cdn.jsdelivr.net/npm/mermaid@9/dist/mermaid.min.js

      # 社交链接，可自定义，在页面底部显示
      social:
        - icon: material/github
          link: https://github.com/rangoljx/rangoljx.github.io/discussions
          name: GitHub
        - icon: material/twitter
          link: https://twitter.com/username
          name: Twitter
        - icon: material/linkedin
          link: https://linkedin.com/in/username
          name: LinkedIn
        - icon: fontawesome/brands/bilibili
          link: https://www.bilibili.com/
          name: Bilibili
        - icon: material/email
          link: mailto:<rangoljx@163.com> #联系方式
          name: 163邮箱
      # 分享功能配置（未实现）
      social_share:
        - platform: twitter
          text: 分享到 Twitter
          icon: material/twitter
        - platform: facebook
          text: 分享到 Facebook
          icon: material/facebook
        - platform: linkedin
          text: 分享到 LinkedIn
          icon: material/linkedin
        - platform: weibo
          text: 分享到微博
          icon: material/sina-weibo
      # Giscus 配置 评论系统

    # 对markdown语法的扩展，支持更多的markdown语法
    markdown_extensions:
      - meta # 支持在 Markdown 文件头部添加元数据：
      - toc:  # 设置后在右侧边栏可以看到目录
          permalink: true # 启用
          toc_depth: 4          # 目录深度
          separator: "_"        # 标题锚点分隔符
          title: "目录"         # 设置目录标题
          slugify: !!python/object/apply:pymdownx.slugs.slugify
            kwds: {case: lower} # URL 转换规则
      - abbr
      - tables #增强的表格支持
      - pymdownx.inlinehilite # 行内代码高亮
      - pymdownx.snippets     # 代码片段
      - pymdownx.magiclink    # 自动链接
      - pymdownx.critic:      # 编辑标记,突出显示文档中添加、删除或更新的部分
          mode: view    #查看更改
      - pymdownx.tilde      # 删除线
      - pymdownx.mark        # ==标记==
      - pymdownx.caret      # 上标
      - pymdownx.keys       # 键盘按键
      - md_in_html
      # 此配置允许使用简单的语法向所有内联和块级元素添加属性，将任何链接转换为按钮
      - attr_list
      - pymdownx.blocks.caption
      - pymdownx.arithmatex:  # latex支持 数学公式
          generic: true
          # numbering: true #启用公式编号
      - pymdownx.highlight: # 代码块高亮
          anchor_linenums: true
          linenums: true # 显示行号
          auto_title: true # 显示编程语言名称
      - pymdownx.emoji: #添加表情符号支持
          emoji_index: !!python/name:material.extensions.emoji.twemoji
          emoji_generator: !!python/name:material.extensions.emoji.to_svg
          options: 
            custom_icons: 
              - docs/overrides/.icons
      # 告警信息语法
      - admonition
      - pymdownx.details
      - pymdownx.superfences:
            custom_fences:
            - name: mermaid
              class: mermaid
              format: !!python/name:pymdownx.superfences.fence_code_format
      - def_list
      - pymdownx.tasklist: #任务列表支持
          custom_checkbox: true    # 自定义复选框样式
          clickable_checkbox: true # 可点击
      - pymdownx.tabbed:    # 标签页样式
          alternate_style: true

    extra_javascript:
      # KaTeX 数学公式
      - javascripts/katex.js 
      - javascripts/katex-auto.js
      - javascripts/katex-numbering.js
      - https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.7/katex.min.js  
      - https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.7/contrib/auto-render.min.js
      # Mermaid 图表
      - https://unpkg.com/mermaid@9/dist/mermaid.min.js
      - https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js
      # 修改页面背景特效
      - javascripts/extra.js
      - javascripts/feedback.js

    extra_css:
      - https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.7/katex.min.css
      - stylesheets/extra.css
    ```

???+ example "项目基本目录"

    ```title="" hl_lines="25 39 40 47"
    |   .gitignore    # 需要忽略push的文件，如site/
    |   mkdocs.yml    # 配置文件
    |   push-mkdocs.bat
    |   requirements.txt
    |
    +---.github       # 添加Github Actions工作流ci.yml,完成自动部署
    |   \---workflows
    |           ci.yml
    |
    +---Bing-Webmaster-Tool     # 加入Bing搜索引擎所需
    |       50323f9602a64903a759f76a86741635.txt
    |       BingSiteAuth.xml
    |       IndexNow.yml
    |
    +---docs                  # 博客文件
    |   |   about.md
    |   |   index.md
    |   |   message-board.md
    |   |   tags.md
    |   |
    |   +---blog
    |   |   |   index.md
    |   |   |
    |   |   \---posts
    |   +---images        # 自定义网站图标，配置文件16行---favicon: images/mkdocs_favicon.png
    |   |       mkdocs_favicon.png
    |   |
    |   +---javascripts     # 可自定义，额外的js脚本
    |   |       extra.js
    |   |       feedback.js
    |   |       katex-auto.js
    |   |       katex-numbering.js
    |   |       katex.js
    |   |       mathjax.js
    |   |
    |   +---mkdocsbuild
    |   |       build_mkdocs.md
    |   +---overrides     # 复写主题
    |   |   +---.icons    # 使用自定义图标
    |   |   |   \---customsvg
    |   |   |           site-author.svg
    |   |   |           site_author.jpg
    |   |   |           tendao.svg
    |   |   |           testlink.svg
    |   |   |
    |   |   \---partials
    |   |           comments.html   # 基于giscus配置评论功能
    |   |           main.html
    |   +---stylesheets   # 额外样式
    |   |       extra.css
    ```

### 配置自定义图标

1. 在docs文件夹下添加`overrides/.icon/xxx`文件夹，{==`xxx`可自定义，`.icon`不可更改变换；==}
2. 在`mkdocs.yml`中添加如下配置：

    ```yaml title=""
    theme:
      custom_dir: docs/overrides
    ```

3. 将准备好的.svg图标放入`overrides/.icon/xxx`文件夹，然后在需要的地方进行引用即可（引用时不需要后缀名），如修改网站作者仓库图标`repo`,`mkdocs.yml`配置42行:

    ```yaml title=""
    theme:
      icon:
        repo: customsvg/site-author
    ```

- [内置表情和图标查找](https://squidfunk.github.io/mkdocs-material/reference/icons-emojis/){target="_blank"}

更多配置参考：[更改徽标和图标 :fontawesome-solid-paper-plane:](https://squidfunk.github.io/mkdocs-material/setup/changing-the-logo-and-icons/){ target="_blank" }



### 配置giscus评论

官网有详细的说明[Giscus集成评论系统 :fontawesome-solid-paper-plane:](https://squidfunk.github.io/mkdocs-material/setup/adding-a-comment-system/){ target="_blank" }

总结归纳就是：

  1. `mkdocs.yml`中添加如下配置，然后创建文件夹及其文件`docs\overrides\partials\comments.html`：
    ```yaml title=""
    theme:
      custom_dir: docs/overrides
    ```

  2. 安装并配置Giscus：
      1. 访问地址：[https://github.com/apps/giscus](https://github.com/apps/giscus){ target="_blank" } 进行安装（这里以及装好了）：
      ![install-giscus](install-giscus.png)
      2. 然后点击`Configure`进行配置，选择你部署的仓库：
      ![config-giscus](config-giscus.png)
      3. 进入所选的仓库，点击`settings`，`General`页面下拉找到Features，勾选`Discussions`
      ![open-Discussions](open-Discussions.png)
      4. 打开 [https://giscus.app/zh-CN](https://giscus.app/zh-CN){ target="_blank" } ,填好相关配置后就可以得到相应的js代码：
      ![enable-giscus](enable-giscus.png)
      5. 将获取的代码复制到`comments.html`中,如下替换{==高亮部分==}：
    ???+ success "comments.html"
          ```html title="" hl_lines="5-19"
          <!-- docs/overrides/partials/commets.html -->
          {% if page.meta.comments %}
            <h2 id="__comments">{{ lang.t("meta.comments") }}</h2>
            <!-- Insert generated snippet here -->
            <script src="https://giscus.app/client.js"
            data-repo="rangoljx/rangoljx.github.io"
            data-repo-id="R_kgDONXxlow"
            data-category="General"
            data-category-id="DIC_kwDONXxlo84ClN0t"
            data-mapping="pathname"
            data-strict="0"
            data-reactions-enabled="1"
            data-emit-metadata="1"
            data-input-position="bottom"
            data-theme="preferred_color_scheme"
            data-lang="zh-CN"
            crossorigin="anonymous"
            async>
          </script>
            <!-- Synchronize Giscus theme with palette -->
            <script>
              var giscus = document.querySelector("script[src*=giscus]")

              // Set palette on initial load
              var palette = __md_get("__palette")
              if (palette && typeof palette.color === "object") {
                var theme = palette.color.scheme === "slate"
                  ? "transparent_dark"
                  : "light"

                // Instruct Giscus to set theme
                giscus.setAttribute("data-theme", theme) 
              }

              // Register event handlers after documented loaded
              document.addEventListener("DOMContentLoaded", function() {
                var ref = document.querySelector("[data-md-component=palette]")
                ref.addEventListener("change", function() {
                  var palette = __md_get("__palette")
                  if (palette && typeof palette.color === "object") {
                    var theme = palette.color.scheme === "slate"
                      ? "transparent_dark"
                      : "light"

                    // Instruct Giscus to change theme
                    var frame = document.querySelector(".giscus-frame")
                    frame.contentWindow.postMessage(
                      { giscus: { setConfig: { theme } } },
                      "https://giscus.app"
                    )
                  }
                })
              })
            </script>
          {% endif %}
          ```

  3. 如何使用：在你想插入评论的页面的元数据添加：comments: true
      ```markdown title="example.md"
      ---
      comments: true  #默认不开启评论
      ---
      ```

## 6.把个人Web录入到各大搜索引擎

- 目前没有个人域名，只能加入Bing搜索引擎，相关设置请查看 __参考链接__：
[将 Github Pages 个人博客录入搜索引擎（以 Bing 为例） :fontawesome-solid-paper-plane:](https://www.cnblogs.com/RainbowC0/p/18107581){ .md-button .md-button--primary target="_blank" }
- {==需要注意的是==}：文中有个细节有遗漏, 在完成配置和URL检查后，需要手动点击 __请求编制索引__ (点击页面中完成`URL检查`链接可显示)：
  ![bing-webmaster-tools](bing-webmaster-tools.png)

## 7.自动集成/部署至Github Pages

通过 GitHub Actions 实现 Mkdocs 项目的自动集成和部署，并添加自动IndexNow工作流。

1. 在项目根目录（我的与仓库同步）创建 `.github/workflows/ci.yml` 工作流文件，添加以下内容：

    ```yaml
    name: Deploy MkDocs to GitHub Pages
    permissions:
      contents: write
    on:
      push:
        branches:
          - master  # 监听 main 分支的推送事件
    jobs:
      build-and-deploy:
        runs-on: ubuntu-latest
        steps:
        - name: Checkout code
          uses: actions/checkout@v2  # 检出代码
          # 访问接触特定文件的最后一次提交才能检索日期
          with:
            fetch-depth: 0
        - name: Set up Python
          uses: actions/setup-python@v2
          with:
            python-version: 3.12  # 设置 Python 版本
        - name: Install dependencies
          run: |
            pip install -r requirements.txt  # 安装 相关插件
            pip cache purge
        - name: Build the MkDocs site
          run: mkdocs build  # 构建 MkDocs 网站
          # 将 BingSiteAuth.xml 添加到根目录
        - name: Add BingSiteAuth.xml to root directory
          run: cp -f ./Bing-Webmaster-Tool/BingSiteAuth.xml ./site
        - name: Add indexnow to root directory
          run: cp -f ./Bing-Webmaster-Tool/50323f9602a64903a759f76a86741635.txt ./site
        - name: Deploy to GitHub Pages
          uses: peaceiris/actions-gh-pages@v3
          with:
            github_token: ${{ secrets.GITHUB_TOKEN }}
            publish_dir: ./site  # mkdocs 构建输出目录为 site
        - name: Copy IndexNow workflow after deploy
          env:
            PERSONAL_ACCESS_TOKEN: ${{ secrets.PERSONAL_ACCESS_TOKEN }}
          run: |
            git config --global user.email "rangoljx@qq.com"
            git config --global user.name "rango"
            git clone --branch=gh-pages https://github.com/rangoljx/rangoljx.github.io.git gh-pages
            cd gh-pages
            mkdir -p .github/workflows
            cp -f ../Bing-Webmaster-Tool/IndexNow.yml .github/workflows/
            git add .github/workflows/IndexNow.yml
            git commit -m "Add IndexNow workflow"
            git push https://x-access-token:${PERSONAL_ACCESS_TOKEN}@github.com/rangoljx/rangoljx.github.io.git
    ```

2. 创建 `Bing-Webmaster-Tool/IndexNow.yml` 文件，添加以下内容：

    ```yaml
    name: "IndexNow to bing"
    on:
      workflow_run:
        workflows: ["pages-build-deployment"]
        types:
          - completed
        branches:
          - gh-pages
      schedule:
        # 每3天的 UTC 时间 04:00 运行一次
        - cron: '0 4 */3 * *'
    jobs:
      check-and-submit:
        runs-on: ubuntu-latest
        steps:
          - name: submit-to-bing
            uses: bojieyang/indexnow-action@v2
            with:
              sitemap-location: "https://rangoljx.github.io/sitemap.xml"
              endpoint: "www.bing.com"
              since: 3
              since-unit: "day"
              limit: 10
              key: ${{ secrets.INDEXNOW_KEY }}
              key-location: ${{ secrets.INDEXNOW_KEY_LOCATION }}
    ```

3. 配置 GitHub Secrets：

    - `INDEXNOW_KEY`: 你的 IndexNow API 密钥
    - `INDEXNOW_KEY_LOCATION`: 你的 IndexNow API 密钥文件的位置，例如 `https://rangoljx.github.io/50323f9602a64903a759f76a86741635.txt`

4. 配置 `push-mkdocs.bat` 文件，添加以下内容：

    ```bat
    REM filepath: /d:/VSCODE/rangoljx.github.io/push-mkdocs.bat
    @REM @echo off
    cd /d "D:\VSCODE\rangoljx.github.io"
    set commitDate=%date:~0,4%-%date:~5,2%-%date:~8,2%
    set /p commitMessage="Please enter the submit info:"
    git add .
    git commit -m "autocommit: %commitMessage% - %commitDate%"
    @REM git commit -m "auto-commit - %commitDate%"
    git push -u origin master
    @REM git push -u origin master --force
    ```

5. 每次推送到 `master` 分支时，GitHub Actions 将自动构建并部署你的 Mkdocs 项目到 GitHub Pages.

6. 每次 `gh-pages` 分支的部署完成后，GitHub Actions 将自动提交新的 URL 到 Bing。