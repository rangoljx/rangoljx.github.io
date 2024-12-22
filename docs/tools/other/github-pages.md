---
comments: true  #默认不开启评论
tags:
    - Git
    - GitHub pages
    - Mkdocs
icon: simple/githubpages
description: 使用GitHub/GitHub Pages部署Mkdocs不更新的解决办法，GitHub Pages的使用/配置，GitHub分支管理
# categories:
#     - test 
#     - blog
---

# 关于使用GitHub部署Mkdocs不更新的解决方法

!!! info  ""
    :material-read: __View__ <span id="busuanzi_value_page_pv"></span> __Times__

---

![github](.\GitHubpages.png 'dasd'){.glighhbox}

1. 确保项目已经正确Push到GitHub，如上图所示，可在`<>Code`中查看更新时间和描述。

2. 如图所示，进入到Settings页面，左侧点击`Pages`
   
3. 修改下方的`Branch`，选择分支为`mater`(确认选择的分支与项目更新的分支一致)，点击`Save`后稍等即可（取决于网络）。

???+ tip

    在上方可以看到`Last deployed by xxxxxx 26 minutes ago`,<br>
    表示你的web最后一次部署在xxx时间之前。

## 什么是GitHub Pages

GitHub Pages 是 GitHub 提供的一项静态网站托管服务。你可以将项目中的 HTML、CSS 和 JavaScript 文件托管在 GitHub 上，并通过 GitHub Pages 提供的 URL 访问这些文件。

## 配置GitHub Pages

要配置GitHub Pages，你需要在仓库的设置中启用 GitHub Pages，并选择要发布的分支和目录。以下是步骤：

   1. 打开 GitHub 仓库，点击 `Settings`。
   2. 在左侧菜单中选择 `Pages`。
   3. 在 `Source` 部分，选择要发布的分支和目录（通常是 `main` 分支的 `docs` 目录）。
   4. 点击 `Save` 按钮，稍等片刻，GitHub Pages 就会生成并发布你的网站。

## 常见问题

### 为什么我的GitHub Pages没有更新？

 1. 确保你已经将最新的更改推送到 GitHub。
 2. 检查 GitHub Pages 的设置，确保选择了正确的分支和目录。
 3. 等待几分钟，有时 GitHub Pages 需要一些时间来生成和发布网站。
 4. 检查 GitHub Pages 的构建日志，查看是否有错误信息。

## 更多资源

   - [GitHub Pages 官方文档](https://docs.github.com/en/pages)
   - [使用 GitHub Pages 部署静态网站](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)













