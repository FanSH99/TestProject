import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let cartList = localStorage.getItem("cartList");

export default new Vuex.Store({
  state: {
    cartList: cartList ? JSON.parse(cartList) : null,
    //  餐馆id
    id: 0,
    user_id:localStorage.getItem("user_id")
  },
  getters: {
    getNumList(state){
      console.log(1111111)
        // 判断当前购物车对象中是否存在当前店铺的食品
        if(!state.cartList){
          return {
            // 当前店铺商品总价
            sum:0,
            // 当前店铺商品列表
            list:[]
          }
        }
        if(!state.cartList[state.id]){
            return {
              sum:0,
              list:[]
            }
        }
        let sum = 0;
        // 获取当前店铺购物车列表
        let shopCartList = state.cartList[state.id];
        shopCartList.forEach(item=>{
           let price = item.price * item.num;
           sum+=price;
        })
        return {
          sum,
          list:shopCartList
        }
    }
  },
  mutations: {
    // 提交mutations 加入购物车 foods当前食品规格
    addCart(state, foods) {
       if(!state.cartList){
        let obj = {}
        obj[state.id] = []
        foods.num = 1;
        obj[state.id].push(foods)
        state.cartList = obj;
        // 将购物车数据存储到本地
        localStorage.setItem("cartList",JSON.stringify(state.cartList))
        return
       }
      //判断购物车对象中是否有当前店铺的商品
      if(!state.cartList[state.id]){
        console.log(foods)
        // 数据渲染后 给对象中添加新的属性 需要使用Vue.set实现试图的更新
        foods.num =1;
        Vue.set(state.cartList,state.id,[foods])
           // 将购物车数据存储到本地
           localStorage.setItem("cartList",JSON.stringify(state.cartList))
           return
      }
      let index = state.cartList[state.id].findIndex(item=>{
        return item.item_id === foods.item_id
      })
      console.log(index)
      if(index == -1){
        foods.num = 1
        state.cartList[state.id].push(foods)
           // 将购物车数据存储到本地
           localStorage.setItem("cartList",JSON.stringify(state.cartList))
           return
      }
      // 获取当前要++的购物车数据
      let shop = state.cartList[state.id][index]
      shop.num++;
       Vue.set(state.cartList[state.id],index,shop)
      // 将购物车数据存储到本地
       localStorage.setItem("cartList",JSON.stringify(state.cartList))
    },
    reduceCart(state, foodsSku) {
      // 获取当前店铺的购物车列表
      let shopFoodList = state.cartList[state.id];
      let index = shopFoodList.findIndex(item => {
        return item.item_id === foodsSku.item_id
      })
      let cartFoods = shopFoodList[index];
      if (cartFoods.num > 1) {
        cartFoods.num--;
        Vue.set(state.cartList[state.id],index,cartFoods)
      } else {
        shopFoodList.splice(index, 1)
      };
      localStorage.setItem("cartList", JSON.stringify(state.cartList))
    },
    setId(state, id) {
      state.id = id;
    },
    //清空购物车
    clearCart(state){
       Vue.set(state.cartList,state.id,[]);
       localStorage.setItem("cartList",JSON.stringify(state.cartList))
    },
    loginUserId(state,id){
      state.user_id = id;
      localStorage.setItem("user_id",id)
    }
  },
  actions: {
  },
  modules: {
  }
})
