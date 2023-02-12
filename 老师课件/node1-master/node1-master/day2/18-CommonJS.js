/* 
Node.js 遵循了 CommonJS 模块化规范，CommonJS 规定了 模块的特性和模块之间的相互依赖。

CommonJS 规定
    1. 每个模块内部， module 变量代表了当前模块
    2. module 变量是一个对象， 它的 exports 属性(即 module.exports) 对外的接口
    3. require() 方法加载模块时，其实是加载该模块的 module.exports 属性。
*/