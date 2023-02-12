console.log(module);
/* 
module 对象
    1. 每个 .js 的自定义模块中都有一个内置的 module 对象。存储了当前模块相关的信息。
    2. 类似 函数中 argument, 构造函数中 prototype

    Module {
        id: '.',
        // 路径
        path: 'D:\\webWorkSpace\\node1',
        // 默认空对象
        exports: {},
        parent: null,
        // 文件名
        filename: 'D:\\webWorkSpace\\node1\\20-module对象.js',
        loaded: false,
        children: [],
        paths: [
            'D:\\webWorkSpace\\node1\\node_modules',
            'D:\\webWorkSpace\\node_modules',
            'D:\\node_modules'
        ]
    }

*/