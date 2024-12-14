// docs/javascripts/katex-numbering.js
document.addEventListener("DOMContentLoaded", function() {
    // 公式编号计数器
    let equationNumbers = {};
    let numberings = {};

    renderMathInElement(document.body, {
        delimiters: [
            {left: "$$", right: "$$", display: true}
        ],
        // 公式编号处理
        preProcess: (math) => {
            if (math.includes('\\label')) {
                const label = math.match(/\\label{([^}]*)}/)[1];
                const number = Object.keys(numberings).length + 1;
                numberings[label] = number;
                return math.replace(/\\label{[^}]*}/, `(${number})`);
            }
            return math;
        }
    });
});