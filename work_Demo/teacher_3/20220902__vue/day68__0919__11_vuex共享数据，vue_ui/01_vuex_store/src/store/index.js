// 2022年9月19日09:39:31
import Vue from 'vue';

import Vuex from 'vuex';

Vue.use(Vuex);

// 创建vuex实例。
let store = new Vuex.Store({
    // 主要学习实例中的五个实例。
    // 开启严格模式
    strict:true,
    // 仓库，用来存放状态
    state: {
        num: 0,
        list: ["白浅", "花千骨", "赵柳"]
    },
    // mutations用来更改仓库状态--同步
    mutations: {
        // 定义一个更改状态(数据)的方法名。state表示当前状态，即原始数据。参数2传递过来的参数
        setNum(state,n) {
            console.log(state);
            state.num+=n;
        },
        setList(state, value) {
            state.list.push(value);
        }
    },
    // actions异步更改状态 ---actions更快
    actions: {

    },
    // 计算状态，类似于vue中的计算属性，当其依赖的属性发生改变时就会自动调用。
    getters: {

    },
    // modules模块化--每个页面的数据可以分模块进行管理。
    modules: {

    }

})

export default store;