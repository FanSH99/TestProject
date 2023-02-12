import Vue from 'vue';
import vuex from 'vuex';
import cartState from './cart.js'
Vue.use(vuex);
let store = new vuex.Store({
    strict:true,
    state:{
        num:0,
        isNav:false,
        price:10
    },
    mutations:{
        changeNum(state,n){
            // setTimeout(()=>{
            //     state.num+=n
            // },1000)
            state.num+=n
        },
        showNav(state){
            state.isNav = true;
        }
    },
    // 也是用来更改状态 但是他不直接更改state中的状态 而是通过提交mutations更改state状态
    actions:{
        addNum(context,n){
            // context表示状态实例
            console.log(context)
            // context.state.num+=10
          setTimeout(()=>{
            context.commit("changeNum",n)
          },1000)
        },
        changeNav(context){
            context.commit("showNav")
        }
    },
    /* 
    mutations和actions区别：
    mutations 只能同步提交而 actions可以异步提交mutations
    */
   /* 
    类似于vue中的 计算属性，必须有一个return值当其依赖的值发生改变就会自动调用
   */
    getters:{
        getSum(state){
            console.log(state)
            return state.num*state.price
        }
    },
    modules:{
        // 注册模块儿
        cart:cartState
    }
})


export default store;

// vue全家桶：vue-cli vue-router vuex axios 