import { defineStore } from 'pinia';

export const usecartStore = defineStore("cartStore", {
    state: () => {
        return {
            list: ["商品1", "商品2"]
        }
    }
})