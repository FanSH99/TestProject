import {defineStore} from 'pinia'

export const usecartStore = defineStore("cartStroe",{
    state:()=>{
        return{
            list:["商品1",'商品2']
        }
    }
})