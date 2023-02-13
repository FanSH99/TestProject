
import navbar from '@/components/navbar/index.vue';
import isLoading from '@/components/loading/index.vue';
import goodsItem from '@/components/goodsItem/index.vue';

export default {
  install(Vue) {
    Vue.component('navbar', navbar)
    Vue.component('isLoading', isLoading)
    Vue.component('goodsItem', goodsItem)
  }
}
