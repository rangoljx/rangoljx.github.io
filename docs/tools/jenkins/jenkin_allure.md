---
comments: true  #默认不开启评论
tags:
    - Jenkins
    - allure
# icon: fontawesome/brands/jenkins
icon: simple/jenkins
---
# （踩坑）关于Jenkins生成allure报告不显示数据的问题

!!! warning
    <center>**When I wrote this code,<br>
    only God & I understood what it did.**</center>


![allure](jenkins_allure.png "异常的allure报告")

<p>
    如上图所示，在集成到Jenkins时配置的allure报告总是不显示数据，控制台显示的是报告生成成功，经过多次build测试验证，主要原因是在配置`Allure Report`时的路径不正确。
</p>

!!! note
    解决方法，如下图所示：<br>
    在设置路径时，**report需要存放在result下面** <br>

![report](allure_report.png)









