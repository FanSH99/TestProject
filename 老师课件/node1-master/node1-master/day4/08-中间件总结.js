/* 
中间件的注意事项：
    1. 一定要在路由之前注册中间件，即：先声明，再使用
    2. 可以连续调用多个中间件。
    3. 中间件的最后一定要调用 next();
    4. 防止混乱，next(); 之后不再写代码.
    5. 连续调用多个中间件，之间共享 req 和 res
*/