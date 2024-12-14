// docs/javascripts/katex-auto.js
document.addEventListener("DOMContentLoaded", function() {
    renderMathInElement(document.body, {
        delimiters: [
            {left: "$$", right: "$$", display: true},
            {left: "$", right: "$", display: false}
        ],
        // 自动渲染设置
        ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code"],
        ignoredClasses: ["no-math"],
        processEscapes: true,
        processEnvironments: true,
        // 处理自定义宏
        macros: {
            "\\RR": "\\mathbb{R}",
            "\\NN": "\\mathbb{N}",
            "\\ZZ": "\\mathbb{Z}"
        }
    });
});