import myNavBar from '@/components/navBar'
import myCate from '@/components/catetem'
//自定义插件
let myComponent = {
    install(Vue){
        Vue.component("myNavBar",myNavBar);
        Vue.component("myCate",myCate)
        Vue.filter("getUrl",function(url){
            if(url == ''){
                return 'https://elm.cangdu.org/img/default.jpg'
            }
            let url1 = url.substring(0,1);
            let url2 = url.substring(1,3)
            let url3 = url.substring(3)
            url = url.substring(url.length-3);
            if(url == 'png'){
                return 'https://fuss10.elemecdn.com/'+url1+'/'+url2+"/"+url3+".png"
            }else{
                return 'https://fuss10.elemecdn.com/'+url1+'/'+url2+"/"+url3+".jpeg"
            }
        })
    }
}
export default myComponent;