
import Vue from 'vue';
import Vuex from "vuex";

import cartState from './cart.js'

Vue.use(Vuex);
let store = new Vuex.Store({
    strict: true,
    state: {
        num: 0,
        // vue-router里面也可以共享数据。
        isNav: false,
        price: 10
    },
    mutations: {
        changeNum(state, n) {
            state.num += n
        },
        showNav(state) {
            state.isNav = true;
        }
    },
    // actions也是更改状态，但是他不直接更改，二十提交到mutations来更改。
    actions: {
        add() {
            this.$store.commit("changeNum");
        },
        addNum(context,n) {
            // context指的是抢单实例对象。
            console.log(context);
            setTimeout(() => {
                context.commit("changeNum", n);
            },1000)
            // // 这种方法虽然大多数情况可以使用，但是不推荐，因为严格模式报错。
            // context.state.num += 10
            // context.commit("changeNum", n);

        },
        changeNav(context) {
            context.commit("showNav")
        }

    },
    // 类似于vue中的计算属性，必须有一个return值，档期以来的属性改变就会自动调用。
    getters: {
        getSum(state) {
            return state.num * state.price;
        }
    },
    modules: {
        // 注册模块。
        cart:cartState,
    }
})

export default store;

/* 
mutations金额actions区别
mutations只能执行同步代码，
actions可以进行异步提交。
*/