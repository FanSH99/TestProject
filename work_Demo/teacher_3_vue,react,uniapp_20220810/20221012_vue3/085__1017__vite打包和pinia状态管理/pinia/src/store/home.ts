
import { defineStore } from 'pinia'

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const useStore = defineStore('main', {
    // other options...
    state: () => {
        return {
            num: 0,
            name: "张三"
        }
    },
    getters: {
        getSum: (state) => {
            return state.num * 100
        },
        // 计算属性传递参数
        getname(state) {
            return (msg: string) => msg + state.name
        }
    },
    // 类似于组件中的methods，用来编写一些业务逻辑
    actions: {
        add(n: number) {
            this.num += n;
        }
    }
})
