---
hide:
    - footer
    - navigation
    - toc
# 不显示页面统计
nostatistics: true
---

<!-- # <font color=#"789510"> **Welcome to Rango's note!** </font> -->
# <font color="back"> **And you, my friend, you are the real hero!** </font>

---

!!! info inline end ""

    <span style="display: block; text-align: center; font-size: 18px;">
    [:material-chart-line: Statistics](javascript:toggle_statistics();)
    </span>
    <div id="statistics" markdown="1" class="card" style="width: 27em; border-color: transparent; opacity: 0; margin-left: auto; margin-right: 0; font-size: 110%">
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
            document.getElementById("web-time").innerHTML = y + "<span class=\"heti-spacing\"> </span>年<span class=\"heti-spacing\"> </span>" + d + "<span class=\"heti-spacing\"> </span>天<span class=\"heti-spacing\"> </span>" + h + "<span class=\"heti-spacing\"> </span>小时<span class=\"heti-spacing\"> </span>" + m + "<span class=\"heti-spacing\"> </span>分钟";
        }
        setTimeout(updateTime, 1000 * 60);
    }
    updateTime();
    function toggle_statistics() {
        var statistics = document.getElementById("statistics");
        if (statistics.style.opacity == 0) {
            statistics.style.opacity = 1;
        } else {
            statistics.style.opacity = 0;
        }
    }
    </script>

!!! quote ""

    === "**参考连接:**"
        - [mkdocs-statistics-plugin插件](https://github.com/TonyCrane/mkdocs-statistics-plugin?tab=readme-ov-file){target="_blank"}
        - [mkdocs—material-超全配置](https://wncfht.github.io/notes/Tools/Blog/Mkdocs_Material/ "mkdocs material 超全配置"){target="_blank"}
        - [GitHub Pages部署mkdocs](https://www.cnblogs.com/E-Dreamer-Blogs/p/13323385.html "GitHub Pages部署mkdocs"){target="_blank"}

    === "**官方文档:**"
        - For full documentation visit [mkdocs.org](https://www.mkdocs.org){target="_blank"}
        - For full documentation visit [mkdocs-material.org](https://squidfunk.github.io/mkdocs-material/){target="_blank"}

    === "Update"
        - [更新说明](./about.md "更新说明")
        - 1
        - 2
        - 3

---
<center> <font color="black"> <p style="background-color: red;"> 每一颗想赢的心，都有好运。</p>  </font> </center> 



