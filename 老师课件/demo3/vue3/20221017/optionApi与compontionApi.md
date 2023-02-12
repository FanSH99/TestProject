## 选项Api vue2（一个个选项）
export default {
    <!-- 一个个选项  -->
    data(){
        return{
          username:""
        }
    },
    methods:{
        login(){
            this.username
        }
    },
    created:{

    },
    computed:{
        getusername(){
            return this.username
        }
    }
}

## 组合Api Vue3 (按需引入)
import {ref,computed,reactive,watch} from 'vue'
import {useRouter,useRoute} from 'vue-router';
import {useStore} from 'vuex'
let username = ref("");
let login = ()=>{
    username.value
}
let getusername = computed(()=>{
    return username.value
})