---
comments: true  #默认不开启评论
icon: material/library-outline
status: updated
tags:
    - Mkdocs
    - Material
title: Mkdocs搭建总结
description: Mkdocs搭建总结,使用mkdocs-material主题搭建部署个人博客，基于GitHub pages使用mkdocs搭建博客；Mkdocs配置
# 不显示页面统计
# nostatistics: true
# 强制显示其他贡献者
# contributors: byrnereese,grokify
---

# Mkdocs搭建总结

!!! info  ""
    :material-read: __View__ <span id="busuanzi_value_page_pv"></span> __Times__

---

## 1.摘要

!!! abstract ":simple-abstract:__Abstract__"

    > :simple-abstract:__Mkdocs__ 是一个快速、简单且美观的静态网站生成器，特别适用于创建项目文档。  
    > 本文主要记录从0到1使用Mkdocs搭建个人博客，包括配置、集成、自动部署、踩过的坑等。虽然没有和大佬们搭建的一样完善，目前来说基本够用。主要目的是用来记录学习和遇到的问题。

### 目前的完成成果

???+ success ":fontawesome-solid-diagram-successor:"

    - [x] 从本地到GitHub的自动构建/部署
    - Material for MkDocs的配置实现：
        - [x] 导航栏的配置
        - [x] 边框及其目录的配置
        - [x] tags标签的配置
        - [x] 搜索、主题变换、语言、图标的功能
        - [x] GitHub仓库的配置
        - [x] 基于giscus评论系统
        - [x] 社交卡片、页面统计功能
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
- 安装Mkdocs及其相关插件: 

```text title="requirements.txt"
mkdocs
mkdocs-material
mkdocs-static-i18n
# mkdocs-tags-plugin
# mkdocs-statistics-plugin
mkdocs-glightbox
mkdocs-rss-plugin
mkdocs-minify-plugin
mkdocs_statistics_plugin
mkdocs-git-revision-date-localized-plugin
mkdocs-git-committers-plugin-2
# mkdocs-git-authors-plugin
# mkdocs-glightbox
```

:material-text:
```py title="安装命令："
pip install -r requirements.txt
```

## 4.快速搭建 AND 完成自动集成/部署Github Pages（新手推荐）





## 5.完善Material for MkDocs配置及其自定义

- [内置表情和图标查找](https://squidfunk.github.io/mkdocs-material/reference/icons-emojis/){target="_blank"}





## 6.把个人Web录入到各大搜索引擎

<center>[参考链接 :fontawesome-solid-paper-plane:](https://www.cnblogs.com/RainbowC0/p/18107581){ .md-button .md-button--primary target="_blank" }</center>


### 配置indexnow并集自动部署提交


{{ git-authors }}