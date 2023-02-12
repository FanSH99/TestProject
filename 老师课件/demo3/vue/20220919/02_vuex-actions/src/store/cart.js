let cartState = {
    state:{
        list:[
            {
                name:"商品1",
                price:10
            },
            {
                name:"商品2",
                price:20
            },  {
                name:"商品3",
                price:30
            }
        ]
    },
    mutations:{
        addGoods(state,goods){
            state.list.push(goods)
        }
    },
    actions:{

    },
    getters:{

    },
    module:{

    }
}

export default cartState;