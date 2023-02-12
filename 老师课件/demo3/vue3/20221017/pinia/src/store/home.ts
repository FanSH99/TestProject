import {defineStore} from 'pinia'

//defineStore 参数一 状态管理唯一标识 参数二 状态选项
export const useStroe =  defineStore("homeStore",{
    // 用来存放仓库数据
    state:()=>{
        return {
            num:0,
            name:"张三"
        }
    },
    // 类似计算属性 用来存放计算属性
    getters:{
        getSum(state){
            return  state.num*100
        },
        // 计算属性传递参数
        getname(state){
            return (msg:string)=>msg+state.name
        }
    },
    // 类似于组件中methods 用来编写一些业务逻辑
    actions:{
        add(n:number){
            this.num +=n
        }
    }
})