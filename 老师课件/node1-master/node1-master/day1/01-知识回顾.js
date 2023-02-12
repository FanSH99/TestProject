/* 
    1. 已经学习了 H5 CSS JS jQuery
    2. JS 的分类: 基础语法、DOM、BOM
    3. js 是如何被执行的？
        js 的代码被浏览器里的  Javascript 解析引擎，解析后执行。
    4. 不同浏览器不同的 Javascript 执行引擎
            Chrome    :    V8
            Firefox   :    Spider Monkey
            Safri     :    JS core
            IE        :    Chakra   
        其中，Chrome 浏览器的 V8 解析引擎新功最好 
    5. 为何 JS 可以直接操作 DOM 和 BOM ?(见imgs/01-操作DOM)
        每个浏览器都内置了，DOM 和 BOM 等系统级 API 函数。因此可以默认调用    
    6. 浏览器中 Javascript 的运行环境(见imgs/02-运行环境)
        运行环境指代码正常运行所需的必要环境。
        Chrome 浏览器运行环境包括了 V8 引擎和 DOM 、BOM 等的系统级内置函数。
        代码调用内置函数，交给引擎执行。 
    7. JS 能否做后端开发？
       如果 JS 代码运行在 浏览器  提供的运行环境，可以作为前端开发。
       如果 JS 代码运行在 node.js 提供的运行环境，可以作为后端开发。
*/