## vue3 vue3.x版本 2020年月18日发布

## vue3性能要比vue2有很大的提升。
1. 打包大小减少了41%
2. 初次渲染速度相比于vue2快了55%，更新速度快了13%
3. 内存的使用减少了54%

##  vue3使用组合Api(componsition Api) 代替了Vue2中的选项Api(option Api)
1. 代码跟容易维护
2. 真正实现了按需导入
1. option api
export default {
    data(){
        user,
        navlist,
        ....
       list:[]
    },
    methods:{

    },
    ceated(){
        .......
        ......
        .....
        ...
        ..
        .
        .
        .
        .
        .
        .
        .
        .
        购物车请求数据
        this.list = list
    }
    computed:{
        .....
        ......
        .....
        ..
        .
        .
        .
        .
        .
        ..

        ..
        .
        .
        getsum(){
            return 100
        }
    },
    wathch:{

    },
    fillters:{

    }
}

2. composition Api;
<!-- 购物车 -->
let list; 
sendHttp()
list = list;
getsum(){
    return100
} 
<!-- 登录 -->
let username;
let password;
sendhttp()
alert("登录")

....
...
..

##  vue3响应式原理使用proxy 代替了 vue2 object.defindproperty 响应式原理

## vue3使用ts对源码进行了重构，那也就意味着vue3对ts相当友好


## vue3 兼容vue2所有语法

## vue3组件中可以有多个跟标签

