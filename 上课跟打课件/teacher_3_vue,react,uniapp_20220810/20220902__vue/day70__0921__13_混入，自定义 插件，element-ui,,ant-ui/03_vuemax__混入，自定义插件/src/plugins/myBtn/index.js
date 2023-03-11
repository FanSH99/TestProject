// 定义一个插件

import mybtn from './mybtn.vue'
let myBtn = {
    // install是一个插件函数，想要定义一个插件，必须用install
    install(Vue) {
        console.log(Vue);
        Vue.component("myBtn", mybtn);
        Vue.directive("color", {
            inserted(el,data) {
                el.style.color = data.value;
            }
        })
    }
    
}

export default myBtn;