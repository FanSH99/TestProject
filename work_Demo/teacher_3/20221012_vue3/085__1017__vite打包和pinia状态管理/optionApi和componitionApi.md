## vue2是典型的选项Api,选择选项，可有可无。但是全部都提前引入了。

vue2:可有可无，

export default Vue.extend(){
    data(){
        return{
            username:""
        }
    },
    methods:{
        login(){
            this.username  xxx
        }
    },
    created(){

    },
    computed(){
        getName(){
            return this.username xxx
        }
    }
}

## vue3是组合Api,按需引入，
vue3:组合Api---按需引入

import {ref,computed} from 'vue'
用的时候再引入。
let username=ref("");
let login=()=>{
    username.value xxx
}

let getName=computed(()=>{
    return this.username xxx
})
