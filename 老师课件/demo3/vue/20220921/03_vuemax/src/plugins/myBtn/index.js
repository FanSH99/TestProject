// import Vue from 'vue'
// console.log(Vue)
import mybtn from './mybtn.vue';
// 定义一个插件
let myBtn = {
    // 插件函数
    install(Vue){
        console.log(Vue)
        Vue.component("mybtn",mybtn);
        Vue.directive("color",{
            inserted(el,data){
                el.style.color = data.value
            }
        })
        
    }   
}
export default myBtn;