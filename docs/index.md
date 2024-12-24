---
hide:
    - footer
    - navigation
    - toc
# 不显示页面统计
nostatistics: true
# statistics: True
---
<!-- 本站共有 {{ pages }} 个页面，{{ words }} 个字，{{ codes }} 行代码。 -->

<!-- # <font color=#"789510"> **Welcome to Rango's note!** </font> -->
# <font color：rgba(8, 227, 154, 0.71)> **And you, my friend, you are the real hero!** </font>

---

!!! danger ""

    === "**参考连接:**" 

        - [mkdocs-statistics-plugin插件](https://github.com/TonyCrane/mkdocs-statistics-plugin?tab=readme-ov-file){target="_blank"}
        - [mkdocs—material-超全配置](https://wncfht.github.io/notes/Tools/Blog/Mkdocs_Material/ "mkdocs material 超全配置"){target="_blank"}
        - [GitHub Pages部署mkdocs](https://www.cnblogs.com/E-Dreamer-Blogs/p/13323385.html "GitHub Pages部署mkdocs"){target="_blank"}

    === "**官方文档:**"

        - For full documentation visit [mkdocs.org](https://www.mkdocs.org){target="_blank"}  
        - For full documentation visit [mkdocs-material.org](https://squidfunk.github.io/mkdocs-material/getting-started/){target="_blank"}  

    === "Update"

        - [更新说明](./about.md "更新说明")  
        - 1  
        - 2  
        - 3  

    === "Statistics"
        <div style="display: block; text-align: left; font-size: 18px;">
        <!-- [:material-chart-line: Statistics] -->
        </div>
        <div id="statistics" markdown="1" class="card" style="width: 27em; border-color: transparent; margin-left: auto; margin-right: auto; font-size: 110%">
        <div style="padding-left: 1em;" markdown="1">
        <!-- 页面总数：{{ pages }}  
        总字数：{{ words }}  
        代码块行数：{{ codes }}   -->
        网站运行时间：<span id="web-time"></span>  
        <span id="busuanzi_container_site_uv">访客总人数：<span id="busuanzi_value_site_uv"></span>人  
        <span id="busuanzi_container_site_pv">总访问次数：<span id="busuanzi_value_site_pv"></span>次
        </div>
        </div>
        <script>
        function updateTime() {
            var date = new Date();
            var now = date.getTime();
            var startDate = new Date("2024/12/01 09:10:00");
            var start = startDate.getTime();
            var diff = now - start;
            var y, d, h, m;
            y = Math.floor(diff / (365 * 24 * 3600 * 1000));
            diff -= y * 365 * 24 * 3600 * 1000;
            d = Math.floor(diff / (24 * 3600 * 1000));
            h = Math.floor(diff / (3600 * 1000) % 24);
            m = Math.floor(diff / (60 * 1000) % 60);
            if (y == 0) {
                document.getElementById("web-time").innerHTML = d + "<span class=\"heti-spacing\"> </span>天<span class=\"heti-spacing\"> </span>" + h + "<span class=\"heti-spacing\"> </span>小时<span class=\"heti-spacing\"> </span>" + m + "<span class=\"heti-spacing\"> </span>分钟";
            } else {
                document.getElementById("web-time").innerHTML = y + "<span class=\"heti-spacing\"> </span>年<span class=\"heti-spacing\"> </span>" + d + "<span class=\"heti-spacing\"> </span>" + h + "<span class=\"heti-spacing\"> </span>小时<span class=\"heti-spacing\"> </span>" + m + "<span class=\"heti-spacing\"> </span>分钟";
            }
            setTimeout(updateTime, 1000 * 60);
        }
        updateTime();
        </script>

---

<!-- <center> <font color="black" size=48 > <p style="background-color: red;"> 每一颗想赢的心，都有好运。</p>  </font> </center> -->



