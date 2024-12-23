---
comments: true  #默认不开启评论
icon: simple/selenium
status: draft
tags:
    - selenium
title: Selenium使用教程
description: 本教程介绍了Selenium的基本概念、安装方法、常用操作以及Selenium 4的新特性和注意事项，适合初学者学习和使用。
# 不显示页面统计
# nostatistics: true
---

# Selenium 笔记

!!! info  ""
    :material-read: __View__ <span id="busuanzi_value_page_pv"></span> __Times__

---

## 介绍 / Introduction
Selenium 是一个用于自动化 Web 应用程序测试的工具。它提供了一系列的 API 来控制浏览器的行为。
Selenium is a tool for automating web application testing. It provides a set of APIs to control the behavior of the browser.

Selenium 4 是 Selenium 的最新版本，带来了许多新特性和改进。以下是一些主要更新：
Selenium 4 is the latest version of Selenium, bringing many new features and improvements. Here are some major updates:

### Selenium 4 新特性 / New Features in Selenium 4
1. **W3C WebDriver 标准**: Selenium 4 完全支持 W3C WebDriver 标准，这使得浏览器驱动程序的兼容性更好。
   **W3C WebDriver Standard**: Selenium 4 fully supports the W3C WebDriver standard, which improves compatibility with browser drivers.

2. **相对定位器**: 新增了相对定位器，可以更方便地定位元素。
   **Relative Locators**: New relative locators make it easier to locate elements.
   ```python
   from selenium.webdriver.common.by import By
   from selenium.webdriver.support.relative_locator import locate_with

   driver = webdriver.Chrome()
   driver.get("https://www.example.com")

   # 使用相对定位器查找元素
   # Find elements using relative locators
   element = driver.find_element(locate_with(By.TAG_NAME, "label").above(By.ID, "username"))
   ```

3. **改进的 DevTools 支持**: Selenium 4 提供了对 Chrome DevTools 协议的更好支持，可以更方便地进行调试和性能分析。
   **Improved DevTools Support**: Selenium 4 provides better support for the Chrome DevTools Protocol, making it easier to debug and analyze performance.

4. **新命令**: Selenium 4 引入了一些新命令，例如 `getElementRect` 和 `executeCdpCommand`。
   **New Commands**: Selenium 4 introduces new commands such as `getElementRect` and `executeCdpCommand`.

5. **改进的文档**: Selenium 4 的文档更加详细和易于理解。
   **Improved Documentation**: The documentation for Selenium 4 is more detailed and easier to understand.

### 注意事项 / Considerations
1. **浏览器驱动兼容性**: 确保使用与 Selenium 4 兼容的浏览器驱动程序。
   **Browser Driver Compatibility**: Ensure that you use browser drivers compatible with Selenium 4.

2. **API 变化**: 一些 API 在 Selenium 4 中发生了变化，升级时需要注意。
   **API Changes**: Some APIs have changed in Selenium 4, so be aware of these changes when upgrading.

3. **性能优化**: 利用 Selenium 4 的新特性和改进，可以更好地优化测试性能。
   **Performance Optimization**: Utilize the new features and improvements in Selenium 4 to better optimize test performance.

## 安装 / Installation
要安装 Selenium，可以使用 pip:
To install Selenium, you can use pip:
```bash
pip install selenium
```

此外，你还需要下载相应的浏览器驱动程序，并将其路径添加到系统环境变量中。
Additionally, you need to download the corresponding browser driver and add its path to the system environment variables.

## 快速开始 / Quick Start
以下是一个简单的示例，展示了如何使用 Selenium 打开一个网页并获取其标题。
Here is a simple example showing how to use Selenium to open a webpage and get its title.

```python
from selenium import webdriver

# 创建一个新的 Chrome 浏览器实例
# Create a new instance of the Chrome browser
driver = webdriver.Chrome()

# 访问一个网页
# Navigate to a webpage
driver.get("https://www.example.com")

# 获取网页标题
# Get the title of the webpage
title = driver.title
print(title)

# 关闭浏览器
# Close the browser
driver.quit()
```

## 浏览器驱动 / Browser Drivers
Selenium 需要一个浏览器驱动程序来与浏览器进行通信。以下是一些常用的浏览器驱动程序及其下载链接：  
Selenium requires a browser driver to communicate with the browser. Here are some commonly used browser drivers and their download links:  

   - ChromeDriver: https://sites.google.com/a/chromium.org/chromedriver/
   - GeckoDriver (Firefox): https://github.com/mozilla/geckodriver/releases
   - EdgeDriver: https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/

下载后，将驱动程序解压到一个目录，并将该目录添加到系统的 PATH 环境变量中。  
After downloading, extract the driver to a directory and add that directory to the system PATH environment variable.

## 常用操作 / Common Operations
### 查找元素 / Finding Elements
Selenium 提供了多种方法来查找页面上的元素，例如 `find_element_by_id`、`find_element_by_name`、`find_element_by_xpath` 等。
Selenium provides several methods to find elements on a page, such as `find_element_by_id`, `find_element_by_name`, `find_element_by_xpath`, etc.

以下是一些常用的查找元素的方法及其示例，使用百度和哔哩哔哩网站作为示例。
Here are some commonly used methods to find elements and their examples, using Baidu and Bilibili websites as examples.

#### 通过 ID 查找元素 / Find Element by ID
```python
from selenium import webdriver

driver = webdriver.Chrome()
driver.get("https://www.baidu.com")

# 通过 ID 查找搜索框元素
# Find the search box element by ID
search_box = driver.find_element_by_id("kw")
search_box.send_keys("Selenium")

# 关闭浏览器
# Close the browser
driver.quit()
```

#### 通过名称查找元素 / Find Element by Name
```python
from selenium import webdriver

driver = webdriver.Chrome()
driver.get("https://www.baidu.com")

# 通过名称查找搜索框元素
# Find the search box element by name
search_box = driver.find_element_by_name("wd")
search_box.send_keys("Selenium")

# 关闭浏览器
# Close the browser
driver.quit()
```

#### 通过 XPath 查找元素 / Find Element by XPath
```python
from selenium import webdriver

driver = webdriver.Chrome()
driver.get("https://www.bilibili.com")

# 通过 XPath 查找搜索框元素
# Find the search box element by XPath
search_box = driver.find_element_by_xpath("//input[@id='search-keyword']")
search_box.send_keys("Selenium")

# 关闭浏览器
# Close the browser
driver.quit()
```

#### 通过 CSS 选择器查找元素 / Find Element by CSS Selector
```python
from selenium import webdriver

driver = webdriver.Chrome()
driver.get("https://www.bilibili.com")

# 通过 CSS 选择器查找搜索框元素
# Find the search box element by CSS selector
search_box = driver.find_element_by_css_selector("#search-keyword")
search_box.send_keys("Selenium")

# 关闭浏览器
# Close the browser
driver.quit()
```

### 交互操作 / Interacting with Elements
可以对找到的元素进行各种操作，例如点击、输入文本等。
You can perform various actions on the found elements, such as clicking, entering text, etc.

```python
element.click()
element.send_keys("输入的文本")
```

### 等待 / Waiting
在自动化测试中，等待是一个重要的部分。Selenium 提供了显式等待和隐式等待两种方式。
Waiting is an important part of automated testing. Selenium provides both explicit and implicit waits.

```python
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# 显式等待
# Explicit wait
element = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.ID, "element_id"))
)

# 隐式等待
# Implicit wait
driver.implicitly_wait(10)
```

### 处理弹窗 / Handling Alerts
在自动化测试中，有时需要处理浏览器弹窗。Selenium 提供了处理弹窗的 API。
Sometimes you need to handle browser alerts in automated testing. Selenium provides APIs to handle alerts.

```python
alert = driver.switch_to.alert
alert.accept()  # 接受弹窗
alert.dismiss()  # 关闭弹窗
```

### 截图 / Taking Screenshots
Selenium 还提供了截图功能，可以在测试过程中保存页面截图。
Selenium also provides a screenshot feature to save page screenshots during testing.

```python
driver.save_screenshot('screenshot.png')
```

## XPath 语法 / XPath Syntax
XPath 是一种用于在 XML 文档中查找节点的语言。Selenium 支持使用 XPath 查找页面元素。
XPath is a language used for finding nodes in an XML document. Selenium supports using XPath to find elements on a page.

### 基本语法 / Basic Syntax
- `//tagname[@attribute='value']`：选取所有具有指定属性和值的元素。
- `//tagname[text()='text']`：选取所有具有指定文本的元素。
- `//tagname[contains(@attribute, 'value')]`：选取所有属性包含指定值的元素。
- `//tagname[contains(text(), 'text')]`：选取所有文本包含指定值的元素。

### 学习 XPath / Learning XPath
学习 XPath 语法可以帮助你更好地使用 Selenium 查找页面元素。以下是一些学习资源：  
Learning XPath syntax can help you better use Selenium to find page elements. Here are some learning resources:

  - [W3Schools XPath 教程](https://www.w3schools.com/xml/xpath_intro.asp)
  - [MDN Web Docs XPath](https://developer.mozilla.org/en-US/docs/Web/XPath)

### 实际使用 / Practical Usage
在实际使用中，XPath 可以帮助你定位复杂的页面元素。以下是一些实际使用的示例：
In practical usage, XPath can help you locate complex page elements. Here are some practical examples:

#### 示例 / Examples
```python
from selenium import webdriver

driver = webdriver.Chrome()
driver.get("https://www.bilibili.com")

# 通过 XPath 查找搜索框元素
# Find the search box element by XPath
search_box = driver.find_element_by_xpath("//input[@id='search-keyword']")
search_box.send_keys("Selenium")

# 通过 XPath 查找包含指定文本的元素
# Find the element containing specified text by XPath
element = driver.find_element_by_xpath("//a[contains(text(), '首页')]")
element.click()

# 关闭浏览器
# Close the browser
driver.quit()
```

## 进阶示例 / Advanced Examples
### 表单处理 / Handling Forms
以下示例展示了如何使用 Selenium 填写并提交表单。
The following example shows how to use Selenium to fill out and submit a form.

```python
from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
driver.get("https://www.example.com/form")

# 查找表单元素并填写
# Find form elements and fill them out
username = driver.find_element(By.NAME, "username")
password = driver.find_element(By.NAME, "password")
username.send_keys("myusername")
password.send_keys("mypassword")

# 提交表单
# Submit the form
submit_button = driver.find_element(By.NAME, "submit")
submit_button.click()

# 关闭浏览器
# Close the browser
driver.quit()
```

### 处理多窗口 / Handling Multiple Windows
以下示例展示了如何使用 Selenium 处理多窗口。
The following example shows how to use Selenium to handle multiple windows.

```python
from selenium import webdriver

driver = webdriver.Chrome()
driver.get("https://www.example.com")

# 打开一个新窗口
# Open a new window
driver.execute_script("window.open('https://www.example2.com');")

# 切换到新窗口
# Switch to the new window
driver.switch_to.window(driver.window_handles[1])

# 在新窗口中执行操作
# Perform actions in the new window
print(driver.title)

# 关闭新窗口并切换回原窗口
# Close the new window and switch back to the original window
driver.close()
driver.switch_to.window(driver.window_handles[0])

# 关闭浏览器
# Close the browser
driver.quit()
```

## 结束 / Conclusion
更多详细信息，请参考 [Selenium 官方文档](https://www.selenium.dev/documentation/en/){target="_blank"}.
For more detailed information, please refer to the [Selenium official documentation](https://www.selenium.dev/documentation/en/){target="_blank"}.
