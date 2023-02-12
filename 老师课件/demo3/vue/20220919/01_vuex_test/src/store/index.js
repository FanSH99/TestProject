import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
// 创建vuex实例
let store = new Vuex.Store({
    // 开启严格模式
    strict:true,
    // 仓库 用来存放状态
    state:{
        num:10,
        list:["张三","王五",'赵六']
    },
    //用来更改仓库状态
    mutations:{
        // 定义更改状态的方法名 参数二表示传递来的参数
        setNum(state,n){
            // state表示当前状态
            console.log(state)
            state.num +=n
        },
        setList(state,value){
            state.list.push(value)
        }
    },
    // 异步更改状态
    actions:{
        
    },
    //  计算状态 类似vue中计算属性当其依赖的状态发生改变时就自动会调用
    getters:{

    },
    // 模块儿化
    modules:{

    }
})
console.log(store)
export default store;