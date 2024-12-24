---
comments: true  #默认不开启评论
tags:
    - GitHub Actions
    - Mkdocs
icon: simple/githubactions
status: new
title: GitHub Actions自动部署mkdocs
description: GitHub Actions自动部署的使用配置，GitHub Actions指南，使用GitHub Actions自动部署mkdocs
---

# GitHub Actions自动部署

!!! info  ""
    :material-read: __View__ <span id="busuanzi_value_page_pv"></span> __Times__

---

## 什么是GitHub Actions

GitHub Actions 是 GitHub 提供的一项持续集成和持续部署（CI/CD）服务。它允许你在 GitHub 仓库中定义工作流，以自动化构建、测试和部署过程。

## 配置GitHub Actions

要配置GitHub Actions，你需要在仓库中创建一个 `.github/workflows` 目录，并在其中添加一个或多个 YAML 文件来定义工作流。以下是一个简单的示例：

```yaml
name: CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
    - name: Set up Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '14'
    - name: Install dependencies
      run: npm install
    - name: Run tests
      run: npm test
```

这个工作流将在每次推送到 `main` 分支或创建针对 `main` 分支的拉取请求时运行。它会检查代码、设置 Node.js 环境、安装依赖并运行测试。

## 更多资源

- [GitHub Actions 官方文档](https://docs.github.com/en/actions)
- [使用 GitHub Actions 自动部署](https://docs.github.com/en/actions/guides)












